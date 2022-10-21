<div class="woocommerce-tabs wc-tabs-wrapper">
	<ul class="tabs wc-tabs" role="tablist">
		<?php foreach ($product_tabs as $key => $product_tab) : ?>
			<li class="<?php echo esc_attr($key); ?>_tab" id="tab-title-<?php echo esc_attr($key); ?>" role="tab" aria-controls="tab-<?php echo esc_attr($key); ?>">
				<a href="#tab-<?php echo esc_attr($key); ?>">
					<?php echo wp_kses_post(apply_filters('woocommerce_product_' . $key . '_tab_title', $product_tab['title'], $key)); ?>
				</a>
			</li>
			<li class="additional_information_tab active" id="tab-title-additional_information" role="tab" aria-controls="tab-additional_information">
				<a href="#tab-additional_information">
					Additional information
				</a>
			</li>
			<li class="reviews_tab active" id="tab-title-reviews" role="tab" aria-controls="tab-reviews">
				<a href="#tab-reviews">
					Reviews (0)
				</a>
			</li>

		<?php endforeach; ?>
	</ul>
	<?php foreach ($product_tabs as $key => $product_tab) : ?>
		<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--<?php echo esc_attr($key); ?> panel entry-content wc-tab" id="tab-<?php echo esc_attr($key); ?>" role="tabpanel" aria-labelledby="tab-title-<?php echo esc_attr($key); ?>">
			<?php
			if (isset($product_tab['callback'])) {
				if ('woocommerce_product_description_tab' == $product_tab['callback']) {
			?> Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
			<?php } else {
					call_user_func($product_tab['callback'], $key, $product_tab);
				}
			}
			?>
		</div>
	<?php endforeach; ?>
	<!-- Additional Information -->
	<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--additional_information panel entry-content wc-tab" id="tab-additional_information" role="tabpanel" aria-labelledby="tab-title-additional_information" >

		<h2>Additional information</h2>

		<table class="woocommerce-product-attributes shop_attributes">
			<tbody>
				<tr class="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_color">
					<th class="woocommerce-product-attributes-item__label">Color</th>
					<td class="woocommerce-product-attributes-item__value">
						<p>Red</p>
					</td>
				</tr>
			</tbody>
		</table>
	</div>

	<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--reviews panel entry-content wc-tab" id="tab-reviews" role="tabpanel" aria-labelledby="tab-title-reviews" >
		<div id="reviews" class="woocommerce-Reviews">
			<div id="comments">
				<h2 class="woocommerce-Reviews-title">
					Reviews </h2>

				<p class="woocommerce-noreviews">There are no reviews yet.</p>
			</div>

			<div id="review_form_wrapper">
				<div id="review_form">
					<div id="respond" class="comment-respond">
						<form action="http://localhost/blocks-markup/wp-comments-post.php" method="post" id="commentform" class="comment-form" novalidate="">
							<div class="comment-form-rating"><label for="rating">Your rating&nbsp;<span class="required">*</span></label>
								<p class="stars"> <span> <a class="star-1" href="#">1</a> <a class="star-2" href="#">2</a> <a class="star-3" href="#">3</a> <a class="star-4" href="#">4</a> <a class="star-5" href="#">5</a> </span> </p><select name="rating" id="rating" required="" style="display: none;">
									<option value="">Rate…</option>
									<option value="5">Perfect</option>
									<option value="4">Good</option>
									<option value="3">Average</option>
									<option value="2">Not that bad</option>
									<option value="1">Very poor</option>
								</select>
							</div>
							<p class="comment-form-comment"><label for="comment">Your review&nbsp;<span class="required">*</span></label><textarea id="comment" name="comment" cols="45" rows="8" required=""></textarea></p>
							<p class="form-submit wp-block-button"><input name="submit" type="submit" id="submit" class="submit wp-block-button__link" value="Submit"> <input type="hidden" name="comment_post_ID" value="34" id="comment_post_ID">
								<input type="hidden" name="comment_parent" id="comment_parent" value="0">
							</p><input type="hidden" id="_wp_unfiltered_html_comment_disabled" name="_wp_unfiltered_html_comment" value="9e8791c299">
							<script>
								(function() {
									if (window === window.parent) {
										document.getElementById('_wp_unfiltered_html_comment_disabled').name = '_wp_unfiltered_html_comment';
									}
								})();
							</script>
						</form>
					</div><!-- #respond -->
				</div>
			</div>

			<div class="clear"></div>
		</div>
	</div>

	<?php do_action('woocommerce_product_after_tabs'); ?>
</div>