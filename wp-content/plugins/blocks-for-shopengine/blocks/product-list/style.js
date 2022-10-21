const Style = ({ settings, cssHelper }) => {


	cssHelper.add('.badge.sale', settings.show_sale, (val) => (`
		display: ${val ? 'inline-block' : 'none'} !important;
	`)).add('.badge.off', settings.show_off, (val) => (`
		display: ${val ? 'inline-block' : 'none'} !important;
	`)).add('.badge.tag', settings.show_tag, (val) => (`
		display: ${val ? 'inline-block' : 'none'} !important;
	`))
	if (settings.badge_position.desktop === 'left') {
		cssHelper.add('.product-tag-sale-badge', {}, (val) => (`
			left: 10px;
			top: 10px;
		`))
	}
	else if (settings.badge_position.desktop === 'right') {
		cssHelper.add('.product-tag-sale-badge', {}, (val) => (`
			right: 10px;
			top: 10px;
		`))
	}
	else if (settings.badge_position.desktop === 'custom') {
		cssHelper.add('.product-tag-sale-badge', settings.badge_position_x, (val) => (`
		left: ${val}%;
		`)).add('.product-tag-sale-badge', settings.badge_position_y, (val) => (`
		top: ${val}%;
		`))
	}



	//this will return object values as a string separated by comma
	const getObjectValues = (obj) => {
		return [...Object.values(obj)].toString();
	}

	cssHelper.add('.shopengine-single-product-item', settings.content_alignment, (val) => (`
	text-align: ${val};
	`)).add('.shopengine-single-product-item', settings.product_item_bg_color, (val) => (`
	background-color: ${val};
	`)).add('.shopengine-widget .shopengine-product-list .product-list-grid', settings.product_item_column_gap, (val) => (`
	grid-column-gap: ${val}px;
	`)).add('.shopengine-widget .shopengine-product-list .product-list-grid', settings.product_item_row_gap, (val) => (`
	grid-row-gap: ${val}px;
	`)).add('.shopengine-widget .shopengine-product-list .product-list-grid', settings.products_column, (val) => (`
	grid-template-columns: repeat(${val}, 1fr);
	`)).add('.shopengine-single-product-item', settings.product_wrap_padding, (val) => (`
	padding: ${getObjectValues(val).split(',').join(' ')};
	`)).add('.shopengine-single-product-item', settings.product_wrap_border_style, (val) => (`
	border-style: ${val};
	`)).add('.shopengine-single-product-item', settings.product_wrap_border, (val) => (`
	border-width: ${getObjectValues(val).split(',').join(' ')};
	`)).add('.shopengine-single-product-item', settings.product_wrap_border_color, (val) => (`
	border-color: ${val};
	`)).add('.product-thumb', settings.product_image_bg, (val) => (`
	background: ${val};
	`)).add('.product-thumb', settings.product_image_margin, (val) => (`
	margin: ${getObjectValues(val).split(',').join(' ')};
	`)).add('.product-tag-sale-badge .tag a, .product-tag-sale-badge .no-link', settings.shopengine_products_badge_font_size, (val) => (`
	font-size: ${val}px;
	`)).add('.product-tag-sale-badge .tag a, .product-tag-sale-badge .no-link', settings.shopengine_products_badge_font_weight, (val) => (`
	font-weight: ${val};
	`)).add('.product-tag-sale-badge .tag a, .product-tag-sale-badge .no-link', settings.shopengine_products_badge_text_transform, (val) => (`
	text-transform: ${val};
	`)).add('.product-tag-sale-badge .tag a, .product-tag-sale-badge .no-link', settings.shopengine_products_badge_line_height, (val) => (`
	line-height: ${val}px;
	`)).add('.product-tag-sale-badge .tag a, .product-tag-sale-badge .no-link', settings.shopengine_products_badge_word_spacing, (val) => (`
	word-spacing: ${val}px;
	`)).add('.product-tag-sale-badge .tag a, .product-tag-sale-badge .no-link', settings.product_badge_color, (val) => (`
	color: ${val};
	`)).add('.product-tag-sale-badge .tag a, .product-tag-sale-badge .no-link', settings.product_badge_bg, (val) => (`
	background: ${val};
	`)).add('.product-tag-sale-badge .tag a, .product-tag-sale-badge .no-link', settings.product_badge_bg, (val) => (`
	background: ${val};
	`)).add(`.product-tag-sale-badge ul li:not(:last-child) `, settings.shopengine_space, (val) => (`
	margin: 0 ${val}px 0 0;
	`)).add('.product-tag-sale-badge.align-vertical ul li:not(:last-child)', settings.shopengine_space, (val) => (`
	margin: 0 0 ${val}px 0;
	`)).add('.product-tag-sale-badge ul li, .product-tag-sale-badge.align-vertical ul li', settings.product_badge_margin, (val) => (`
	margin: ${getObjectValues(val).split(',').join(' ')};
	`)).add('.product-tag-sale-badge ul li, .product-tag-sale-badge.align-vertical ul li', settings.product_badge_padding, (val) => (`
	padding: ${getObjectValues(val).split(',').join(' ')};
	`)).add('.product-tag-sale-badge .tag a, .product-tag-sale-badge .no-link', settings.badge_border_style, (val) => (`
	border-style: ${val};
	`))
		.add('.product-tag-sale-badge .tag a, .product-tag-sale-badge .no-link', settings.product_badge_border_radius, (val) => (`
	border-radius: ${getObjectValues(val).split(',').join(' ')};
	`)).add('.product-category ul li a', settings.product_category_typography_font_size, (val) => (`
	text-decoration : none;
	font-size: ${val}px;
	`)).add('.product-category ul li a', settings.product_category_typography_font_weight, (val) => (`
	font-weight: ${val};
	`)).add('.product-category ul li a', settings.product_category_typography_text_transform, (val) => (`
	text-transform: ${val};
	`)).add('.product-category ul li a', settings.product_category_typography_line_height, (val) => (`
	line-height: ${val}px;
	`)).add('.product-category ul li a', settings.product_category_typography_badge_wordspace, (val) => (`
	word-spacing: ${val}px;
	`)).add('.product-category ul li a', settings.product_category_color, (val) => (`
	color: ${val};
	`)).add('.product-category ul li a:hover', settings.product_category_hover_tab, (val) => (`
	color: ${val};
	`)).add('.product-category', settings.product_category_padding, (val) => (`
	padding: ${getObjectValues(val).split(',').join(' ')};
	`))
		.add('.product-title', settings.product_title_font_size, (val) => (`
	font-size: ${val}px;
	`))
		.add('.product-title a', settings.product_title_font_size, (val) => (`
		text-decoration : none;
	`))
		.add('.product-title', settings.product_title_font_weight, (val) => (`
	font-weight: ${val};
	`)).add('.product-title', settings.product_title_text_transform, (val) => (`
	text-transform: ${val};
	`)).add('.product-title', settings.product_title_line_height, (val) => (`
	line-height: ${val}px;
	`)).add('.product-title', settings.product_title_wordspace, (val) => (`
	word-spacing: ${val}px;
	`)).add('.product-title a', settings.product_title_color, (val) => (`
	color: ${val};
	`)).add('.product-title a:hover', settings.product_title_hover_color, (val) => (`
	color: ${val};
	`)).add('.product-title', settings.product_title_padding, (val) => (`
	padding: ${getObjectValues(val).split(',').join(' ')};
	`)).add('.product-rating .star-rating', settings.product_rating_star_size, (val) => (`
	font-size: ${val}px;
	`)).add('.product-rating .star-rating span::before', settings.product_rating_star_color, (val) => (`
	color: ${val};
	`)).add('.product-rating .star-rating::before', settings.product_rating_empty_star_color, (val) => (`
	color: ${val};
	`)).add('.rating-count', settings.product_rating_count_color, (val) => (`
	color: ${val};
	`)).add('.shopengine-product-list .overlay-add-to-cart', settings.shopengine_show_product_hover, (val) => (`
	display: ${val ? 'flex' : 'none'};
	`)).add('.shopengine-product-list .product-price .price', settings.shopengine_product_price_alignment, (val) => (`
	justify-content: ${val};
	`)).add('.shopengine-product-list .product-price .price .shopengine-discount-badge', settings.shopengine_show_price_off_tag, (val) => (`
	display: ${val ? 'inline-block' : 'none'};
	`)).add('.shopengine-product-list .product-category', settings.shopengine_show_category, (val) => (`
	display: ${val ? 'block' : 'none'};
	`)).add('.shopengine-product-list .product-rating', settings.shopengine_show_rating, (val) => (`
	display: ${val ? 'block' : 'none'};
	`)).add('.rating-count', settings.product_rating_count_font_size, (val) => (`
	font-size: ${val}px`))
		.add('.rating-count', settings.product_rating_count_font_weight, (val) => (`font-weight: ${val}`))
		.add('.rating-count', settings.product_rating_count_text_transform, (val) => (`text-transform: ${val}`))
		.add('.rating-count', settings.product_rating_count_line_height, (val) => (`line-height: ${val}px`))
		.add('.rating-count', settings.product_rating_count_wordspace, (val) => (`word-spacing: ${val}px`))
		.add('..product-rating', settings.product_rating_padding, (val) => (`line-height: 0; padding: ${getObjectValues(val).split(',').join(' ')}`)).add('.product-price .price, .product-price .amount, .product-price bdi', settings.product_price_price_color, (val) => (`color: ${val}`)).add('.product-price .price del', settings.product_price_sale_price_color, (val) => (`color: ${val}`))
		.add('.product-price .price', settings.product_price_font_size, (val) => (`font-size: ${val}px`))
		.add('.product-price .price', settings.product_price_font_weight, (val) => (`font-weight: ${val}`))
		.add('.product-price .price', settings.product_price_text_transform, (val) => (`text-transform: ${val}`))
		.add('.product-price .price', settings.product_price_line_height, (val) => (`line-height: ${val}px`))
		.add('.product-price .price', settings.product_price_wordspace, (val) => (`word-spacing: ${val}px`))
		.add('.shopengine-product-list .product-price .price ins', settings.product_price_space_between, (val) => (`margin-right: ${val}px`))
		.add('.shopengine-product-list .product-price .price .shopengine-discount-badge', settings.product_price_discount_badge_color, (val) => (`color: ${val}`))
		.add('.shopengine-product-list .product-price .price .shopengine-discount-badge', settings.product_price_discount_badge_bg_color, (val) => (`background: ${val}`))
		.add('.shopengine-product-list .product-price .price .shopengine-discount-badge', settings.product_price_discount_badge_font_size, (val) => (`font-size: ${val}px`))
		.add('.shopengine-product-list .product-price .price .shopengine-discount-badge', settings.product_price_discount_badge_font_weight, (val) => (`font-weight: ${val}`))
		.add('.shopengine-product-list .product-price .price .shopengine-discount-badge', settings.product_price_discount_badge_text_transform, (val) => (`text-transform: ${val}`))
		.add('.shopengine-product-list .product-price .price .shopengine-discount-badge', settings.product_price_discount_badge_line_height, (val) => (`line-height: ${val}px`))
		.add('.shopengine-product-list .product-price .price .shopengine-discount-badge', settings.product_price_discount_badge_wordspace, (val) => (`word-spacing: ${val}px`))
		.add('.shopengine-product-list .product-price .price .shopengine-discount-badge', settings.product_price_discount_badge_padding, (val) => (`padding: ${getObjectValues(val).split(',').join(' ')}`))
		.add('.shopengine-product-list .product-price .price .shopengine-discount-badge', settings.product_price_discount_badge_margin, (val) => (`margin: ${getObjectValues(val).split(',').join(' ')}`))
		.add('.product-price', settings.product_price_wrap_padding, (val) => (`padding: ${getObjectValues(val).split(',').join(' ')}`))
		.add('.overlay-add-to-cart a::before', settings.product_hover_overlay_color, (val) => (`color: ${val}`))
		.add('.overlay-add-to-cart a::after', settings.product_hover_overlay_color, (val) => (`color: ${val}`))
		.add('.overlay-add-to-cart a', settings.product_hover_overlay_bg_color, (val) => (`background: ${val} !important;`))
		.add('.overlay-add-to-cart a.active::before, .overlay-add-to-cart a.added::before, .overlay-add-to-cart a.loading::after, .overlay-add-to-cart a:hover::before, .overlay-add-to-cart a:hover::after', settings.product_hover_overlay_hover_color, (val) => (`color: ${val}`))
		.add('.overlay-add-to-cart a.active, .overlay-add-to-cart a:hover, .overlay-add-to-cart a:hover', settings.product_hover_overlay_hover_bg_color, (val) => (`background: ${val} !important`))
		.add('.overlay-add-to-cart a::before, ..overlay-add-to-cart a::after', settings.product_hover_overlay_font_size, (val) => (`font-size: ${val}px`))
		.add('.overlay-add-to-cart a', settings.product_hover_overlay_padding, (val) => (`padding: ${getObjectValues(val).split(',').join(' ')}`))
		.add('.overlay-add-to-cart.position-bottom a:not(:last-child)', settings.product_hover_overlay_item_space_between, (val) => (`margin-right: ${val}px`))
		.add('.overlay-add-to-cart.position-left a:not(:last-child)', settings.product_hover_overlay_item_space_between, (val) => (`margin-bottom: ${val}px`))
		.add('.overlay-add-to-cart.position-right a:not(:last-child)', settings.product_hover_overlay_item_space_between, (val) => (`margin-bottom: ${val}px`))
		.add('.overlay-add-to-cart.position-center a:not(:nth-child(2n))', settings.product_hover_overlay_item_space_between, (val) => (`margin-right: ${val}px`))
		.add('.overlay-add-to-cart.position-center a:not(:nth-child(1), :nth-child(2))', settings.product_hover_overlay_item_space_between, (val) => (`margin-top: ${val}px`))
		.add('.overlay-add-to-cart', settings.product_hover_overlay_border, (val) => (`border-style: ${val}`))
		.add('.overlay-add-to-cart a:not(:last-child)', settings.product_hover_overlay_border, (val) => (`border-style: ${val}`))
		.add('.overlay-add-to-cart', settings.product_hover_overlay_border_radius, (val) => (`border-radius: ${getObjectValues(val).split(',').join(' ')}`))
		.add('.overlay-add-to-cart', settings.product_hover_overlay_margin, (val) => (`margin: ${getObjectValues(val).split(',').join(' ')}`))



	if (settings.badge_align.desktop == 'vertical') {
		cssHelper.add('.product-tag-sale-badge ul', settings.product_rating_star_color, (val) => (`
			display: flex;
			flex-direction: column;
		`));
	}

	cssHelper.add(`
	.product-tag-sale-badge .tag a,
	.product-tag-sale-badge .no-link,
	.product-category ul li a,
	.product-title,
	.rating-count,
	.product-price .price,
	.shopengine-product-list .product-price .price .shopengine-discount-badge
	
	`, settings.shopengine_global_font_family, (val) => (`
			font-family : ${val.family};
		`));

	return cssHelper.get()
}


export { Style };

