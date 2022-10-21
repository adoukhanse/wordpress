<div class="shopengine shopengine-widget">
    <div class="shopengine-product-excerpt">
        <div class="woocommerce-product-details__short-description">
			<?php

			$post = get_post();
			$pid  = $post->ID;

			if($block->is_editor) {

				$product = ShopEngine\Widgets\Products::instance()->get_a_simple_product();

				$pid  = $product->get_id();
				$post = get_post($pid);

			}

			$short_description = apply_filters('woocommerce_short_description', $post->post_excerpt);

			if(!$short_description && $block->is_editor) {
				echo esc_html__('Dummy short description only for editor preview mode if and only if the editor selected product has no short description.', 'shopengine-gutenberg-addon');
			} else {
				echo \Shopengine\Utils\Helper::kses($short_description); // WPCS: XSS ok.
			}

			?>
        </div>
    </div>
</div>
