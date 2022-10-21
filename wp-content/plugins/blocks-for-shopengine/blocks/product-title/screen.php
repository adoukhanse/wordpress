<div class="shopengine shopengine-widget">

	<?php

	$p_obj   = get_post();
	$pid     = $p_obj->ID;
	$product = ShopEngine\Widgets\Products::instance()->get_wc_product($pid);

	if($block->is_editor) {

		$product = ShopEngine\Widgets\Products::instance()->get_a_simple_product();

		$pid = $product->get_id();
	}


	$title_tag = $settings['shopengine_product_title_header_size']['desktop'] ?? 'h2';

	echo sprintf(
		'<div class="shopengine-product-title"><%s class="product-title">%s</%s></div>',
		$title_tag,
		get_the_title($pid),
		$title_tag
	);

	?>
</div>



