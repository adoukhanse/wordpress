<?php

$p_obj   = get_post();
$pid     = $p_obj->ID;
$product = ShopEngine\Widgets\Products::instance()->get_wc_product($pid);

if($block->is_editor) {

	$product = ShopEngine\Widgets\Products::instance()->get_a_simple_product();

	$pid = $product->get_id();
}

if(!has_term('', 'product_cat', $pid)) {

	return;
}

?>

<div class="shopengine shopengine-widget">
    <div class="shopengine-cats shopengine-flex-align">
        <!-- Condition true kora hoyeche -->
		<?php if(isset($settings['shopengine_product_cats_label_show']['desktop']) && $settings['shopengine_product_cats_label_show']['desktop'] == true) : ?>

            <span class="product-cats-label"><?php echo esc_html(sprintf(_n('Category:', 'Categories:', count($product->get_category_ids()), 'shopengine-gutenberg-addon'))); ?></span>

		<?php endif;

		echo wc_get_product_category_list($product->get_id(), ', ', '<span class="product-cats-links">', '</span>'); ?>

    </div>
</div>
