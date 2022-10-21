<?php

$title_tag = $settings['shopengine_archive_title_header_size']['desktop'] ?? 'h2';

printf(
	'<div class="shopengine shopengine-widget">
		<div class="shopengine-archive-title"><%s class="archive-title">%s</%s></div>
	</div>',
	$title_tag,
	esc_html(woocommerce_page_title(false)),
	$title_tag
);
