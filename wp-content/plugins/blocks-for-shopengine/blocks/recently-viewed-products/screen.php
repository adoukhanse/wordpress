<div class="shopengine shopengine-widget">
    <div class="shopengine-recently-viewed-products">
        <div class="recent-viewed-product-list">
			<?php
			$product = \ShopEngine\Widgets\Products::instance()->get_product(get_post_type());

			if(!empty($_COOKIE['shopengine_recent_viewed_product'])) {

				$product_ids = array_unique(explode(',', sanitize_text_field($_COOKIE['shopengine_recent_viewed_product'])));

				$product = \ShopEngine\Widgets\Products::instance()->get_product(get_post_type());

				$product_id = $product->get_id();

				$cookie_array_key = array_search($product_id, $product_ids);

				if(false !== $cookie_array_key) {
					unset($product_ids[$cookie_array_key]);
				}

				$product_limit = isset($settings['products_per_page']['desktop']) ? $settings['products_per_page']['desktop'] : 6;

				if(isset($settings['product_order']['desktop']) && $settings['product_order']['desktop'] == 'ASC') {

					$product_ids = array_reverse($product_ids);

					if($product_limit < count($product_ids)) {
						$product_ids = array_slice($product_ids, 0, $product_limit);
					}
				} else {

					$total_product = count($product_ids);

					if($product_limit < $total_product) {
						$product_ids = array_slice($product_ids, $total_product - $product_limit, $total_product - 1);
					}
				}
			}

			$editor_mode = $block->is_editor;

			$args = [
				'post_type' => 'product',
				'post__in'  => isset($product_ids) ? $product_ids : [],
				'orderby'   => 'post__in',
			];

			$view = ['image'];

			$query = new WP_Query($args);

			if($query->have_posts()) :
				while($query->have_posts()) :
					$query->the_post();

					$default_content = [
						'image',
						'category',
						'title',
						'rating',
						'price',
						'description',
					];

					$content = (!empty($view) ? $view : $default_content);
					asort($content, SORT_NUMERIC);
					?>
                    <div class='shopengine-single-product-item'>
						<?php
						foreach($content as $key => $value) {
							$function = '_product_' . (is_numeric($value) ? $key : $value);
							\Shopengine_Gutenberg_Addon\Utils\Helper::$function($settings);
						}

						if(!empty($settings['counter_position']) && $settings['counter_position'] == 'footer') {
							\Shopengine_Gutenberg_Addon\Utils\Helper::_product_sale_end_date($settings, esc_html__('Ends in ', 'shopengine-gutenberg-addon'));
						}
						?>

                    </div>
				<?php
				endwhile;
			endif;

			?>
        </div>
    </div>
</div>
