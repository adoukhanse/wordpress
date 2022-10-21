<div class="shopengine shopengine-widget">
    <div class="shopengine-product-description">
		<?php
		// Show only in the Editor and Preview Mode.

		if($block->is_editor):

			$product = ShopEngine\Widgets\Products::instance()->get_a_simple_product();

			echo \ShopEngine\Utils\Helper::render($product->get_description());

		else: // Show in the Frontend.
			global $post;
			$content = $post->post_content;
			//$content = apply_filters('the_content', $content);
			$content = str_replace(']]>', ']]&gt;', $content);
			echo $content;
		endif;
		?>
    </div>
</div>
