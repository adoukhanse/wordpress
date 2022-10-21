<?php
$product = \ShopEngine\Widgets\Products::instance()->get_product(get_post_type());

?>
<div class="shopengine shopengine-widget">
	<div class="shopengine-view-single-product">
		<p class="view-single-product">
			<a class="button" href="<?php echo esc_url($product->get_permalink()); ?>">
				<?php esc_html_e($settings['shopengine_button_title']['desktop'], 'shopengine-gutenberg-addon'); ?>
			</a>
		</p>
	</div>
</div>