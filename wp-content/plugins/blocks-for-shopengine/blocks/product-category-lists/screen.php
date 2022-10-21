<?php

defined('ABSPATH') || exit;

$shopengine_product_cat_lists_cats           = $settings["shopengine_category_list"]["desktop"];
$image_url                                   = '';
$category_ids                                = (isset($shopengine_product_cat_lists_cats) && !empty($shopengine_product_cat_lists_cats)) ? $shopengine_product_cat_lists_cats : [];
$shopengine_product_cat_lists_show_cat_image = $settings["shopengine_show_category_image"]["desktop"] == 1 ? 'yes' : 'no';
$shopengine_product_cat_lists_show_count     = $settings["shopengine_show_product_count"]["desktop"] == 1 ? 'yes' : 'no';
$shopengine_product_cat_lists_show_icon      = $settings["shopengine_show_icon"]["desktop"] == 1 ? 'yes' : 'no';
$shopengine_product_cat_lists_icon           = ["value"   => explode(" ", $settings["shopengine_choose_icon"]["desktop"])[1],
                                                "library" => explode(" ", $settings["shopengine_choose_icon"]["desktop"])[0]];
?>
<div class="shopengine-widget">

    <div class="shopengine-product-category-lists">

		<?php if($category_ids) : ?>

            <div class="shopengine-category-lists-grid">

				<?php foreach($category_ids as $key => $category_id) :
					$term = get_term($category_id["id"], 'product_cat');
					$thumbnail_id = get_term_meta($category_id["id"], 'thumbnail_id', true);
					if($thumbnail_id && isset($shopengine_product_cat_lists_show_cat_image) && $shopengine_product_cat_lists_show_cat_image === 'yes') {
						$image_url = wp_get_attachment_url($thumbnail_id);
					}

					if(!empty($term)) : ?>

                        <div class="single-cat-list-item"
                             style="background-image: url(' <?php echo esc_attr(esc_url($image_url)) ?> ')">
                            <div class="product-category-wrap">
                                <div class="single-product-category">
                                    <a href="<?php echo esc_url(get_term_link($term)); ?>">
                                        <h3 class="product-category-title">
											<?php echo esc_html($term->name); ?>
                                        </h3>
										<?php if(isset($shopengine_product_cat_lists_show_count) && $shopengine_product_cat_lists_show_count == 'yes') : ?>
                                            <p class="cat-count">
												<?php echo esc_html(sprintf(_n('%s product', '%s products', $term->count, 'shopengine-gutenberg-addon'), $term->count)); ?>
                                            </p>
										<?php endif;

										if(isset($shopengine_product_cat_lists_show_icon) && $shopengine_product_cat_lists_show_icon == 'yes') : ?>
                                            <span class="cat-icon">
                                        <span class="<?php echo esc_attr($shopengine_product_cat_lists_icon["library"] . " " . esc_attr($shopengine_product_cat_lists_icon["value"])); ?>"></span>
                                        </span>
										<?php endif; ?>
                                    </a>
                                    <!-- dot shap -->
                                </div>
                            </div>
                        </div>

					<?php endif;

				endforeach; ?>

            </div>

		<?php else :

			esc_html_e('Add some category', 'shopengine-gutenberg-addon');

		endif; ?>

    </div>

</div>
