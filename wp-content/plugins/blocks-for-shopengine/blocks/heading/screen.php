<?php

$title_tag = $settings['shopengine_title_header_size']['desktop'] ?? 'h2';

printf(
	'<div class="shopengine shopengine-widget">
		<div class="shopengine-heading"><%s class="heading-title">%s</%s></div>
	</div>',
	$title_tag,
	 $settings['shopengine_title_heading_input']['desktop'],
	$title_tag
);
