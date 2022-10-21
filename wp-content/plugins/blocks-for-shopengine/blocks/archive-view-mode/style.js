const Style = ({ settings, cssHelper }) => {

	//this will return object values as a string separated by comma
	const getObjectValues = (obj) => {
		return [...Object.values(obj)].toString();
	}

	cssHelper.add('.shopengine-archive-view-mode .shopengine-archive-view-mode-switch-list .shopengine-archive-view-mode-switch i', settings.shopengine_view_mode_icon_size, (val) => (`
		font-size: ${val}px;
	`)).add('.shopengine-archive-view-mode .shopengine-archive-view-mode-switch-list .shopengine-archive-view-mode-switch', settings.shopengine_view_mode_icon_box_height, (val) => (`
	height: ${val}px;
	`)).add('.shopengine-archive-view-mode .shopengine-archive-view-mode-switch-list .shopengine-archive-view-mode-switch', settings.shopengine_view_mode_icon_box_width, (val) => (`
	width: ${val}px;
	`)).add('.shopengine-archive-view-mode .shopengine-archive-view-mode-switch-list', settings.shopengine_view_mode_alignment, (val) => (`
	justify-content: ${val};
	`)).add('.shopengine-archive-view-mode .shopengine-archive-view-mode-switch-list .shopengine-archive-view-mode-switch', settings.shopengine_view_mode_color, (val) => (`
	color: ${val};
	`)).add('.shopengine-archive-view-mode .shopengine-archive-view-mode-switch-list .shopengine-archive-view-mode-switch', settings.shopengine_view_mode_background, (val) => (`
	background: ${val};
	`)).add('.shopengine-archive-view-mode .shopengine-archive-view-mode-switch-list .shopengine-archive-view-mode-switch:hover', settings.shopengine_view_mode_color_hover, (val) => (`
	color: ${val};
	`)).add('.shopengine-archive-view-mode .shopengine-archive-view-mode-switch-list .shopengine-archive-view-mode-switch:hover', settings.shopengine_view_mode_background_hover, (val) => (`
	background: ${val};
	`)).add('.shopengine-archive-view-mode .shopengine-archive-view-mode-switch-list .shopengine-archive-view-mode-switch.isactive', settings.shopengine_view_mode_background_hover, (val) => (`
	background: ${val};
	`)).add('.shopengine-archive-view-mode .shopengine-archive-view-mode-switch-list .shopengine-archive-view-mode-switch:hover', settings.shopengine_view_mode_hover_border_color, (val) => (`
	border-color: ${val};
	`)).add('.shopengine-archive-view-mode .shopengine-archive-view-mode-switch-list .shopengine-archive-view-mode-switch.isactive', settings.shopengine_view_mode_hover_border_color, (val) => (`
	border-color: ${val};
	`)).add('.shopengine-archive-view-mode .shopengine-archive-view-mode-switch-list .shopengine-archive-view-mode-switch', settings.shopengine_view_mode_border_style, (val) => (`
	border-style: ${val};
	`)).add('.shopengine-archive-view-mode .shopengine-archive-view-mode-switch-list .shopengine-archive-view-mode-switch', settings.shopengine_view_mode_border_width, (val) => (`
	border-width: ${getObjectValues(val).split(',').join(' ')};
	`)).add('.shopengine-archive-view-mode .shopengine-archive-view-mode-switch-list .shopengine-archive-view-mode-switch', settings.shopengine_view_mode_border_color, (val) => (`
	border-color: ${val};
	`));

	cssHelper.add('.shopengine-archive-mode-grid', settings.shopengine_image_gap_from_content, (val) => (`
		column-gap: ${val}px;
	`)).add('.shopengine-archive-products__left-image img', settings.shopengine_image_width, (val) => (`
		width: ${val}px !important;
		min-width: ${val}px !important;
	`)).add('.shopengine-archive-products__left-image img', settings.shopengine_image_height, (val) => (`
		height: ${val}px !important;
	`)).add('.shopengine-archive-products__left-image img', settings.shopengine_image_fit, (val) => (`
		object-fit: ${val};
	`)).add('.shopengine-archive-products__left-image img', settings.shopengine_image_view_position, (val) => (`
		object-position: ${val};
	`));

	cssHelper.add('.woocommerce-LoopProduct-link', settings.shopengine_content_gap, (val) => (`
		margin-bottom: ${val}px;
	`)).add('.product', settings.shopengine_content_padding, (val) => (`
		padding: ${getObjectValues(val).split(',').join(' ')} !important;
	`));

	cssHelper.add('ul.products li.product .woocommerce-loop-product__title', settings.shopengine_product_title_font_size, (val) => (`
		font-size: ${val}px;
	`)).add('ul.products li.product .woocommerce-loop-product__title', settings.shopengine_product_title_font_weight, (val) => (`
		font-weight: ${val};
	`)).add('ul.products li.product .woocommerce-loop-product__title', settings.shopengine_product_title_text_transform, (val) => (`
		text-transform: ${val};
	`)).add('ul.products li.product .woocommerce-loop-product__title', settings.shopengine_product_title_line_height, (val) => (`
		line-height: ${val}px;
	`)).add('ul.products li.product .woocommerce-loop-product__title', settings.shopengine_product_title_letter_spacing, (val) => (`
		letter-spacing: ${val}px;
	`)).add('ul.products li.product .woocommerce-loop-product__title', settings.shopengine_product_title_wordspace, (val) => (`
		word-spacing: ${val}px;
	`)).add('.product .woocommerce-loop-product__title', settings.shopengine_product_title_padding, (val) => (`
		padding: ${getObjectValues(val).split(',').join(' ')} !important;
	`));



	return cssHelper.get()
}


export { Style }