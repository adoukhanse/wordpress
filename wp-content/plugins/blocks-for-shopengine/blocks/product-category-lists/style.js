const Style = ({ settings, cssHelper }) => {

    //this will return object values as a string separated by comma
    const getObjectValues = (obj) => {
            return [...Object.values(obj)].toString();
        }
        //this will return complete box shadow values as string
    const getShadowValues = (obj) => {
        let pos = obj.position === 'inset' ? obj.position : '';
        let propSet = getObjectValues(Object.fromEntries(Object.entries(obj).slice(1, Object.keys(obj).length - 1)));
        return `${pos} ${propSet.split(',').join('px ')+'px'} rgba(${getObjectValues(obj.color.rgb).split(' ').join(',')})`;
    }


    const shopengine_list_normal_shadow = {
        position: settings.shopengine_list_normal_shadow_position.desktop,
        horizontal: settings.shopengine_list_normal_shadow_horizontal.desktop,
        vertical: settings.shopengine_list_normal_shadow_vertical.desktop,
        blur: settings.shopengine_list_normal_shadow_blur.desktop,
        spread: settings.shopengine_list_normal_shadow_spread.desktop,
        color: settings.shopengine_list_normal_shadow_color.desktop
    }
    const shopengine_list_hover_shadow = {
        position: settings.shopengine_list_hover_shadow_position.desktop,
        horizontal: settings.shopengine_list_hover_shadow_horizontal.desktop,
        vertical: settings.shopengine_list_hover_shadow_vertical.desktop,
        blur: settings.shopengine_list_hover_shadow_blur.desktop,
        spread: settings.shopengine_list_hover_shadow_spread.desktop,
        color: settings.shopengine_list_hover_shadow_color.desktop
    }

    cssHelper.add('.shopengine-product-category-lists .shopengine-category-lists-grid', settings.shopengine_grid_columns, (val) => (`
        grid-template-columns: repeat(${val}, 1fr);
    `)).add('.shopengine-product-category-lists .shopengine-category-lists-grid', settings.shopengine_column_gap, (val) => (`
        grid-column-gap: ${val}px;
    `)).add('.shopengine-product-category-lists .shopengine-category-lists-grid', settings.shopengine_row_gap, (val) => (`
        grid-row-gap: ${val}px;
    `));

    cssHelper.add('.shopengine-product-category-lists .single-cat-list-item', settings.shopengine_list_normal_background_color, (val) => (`
        background: ${val};
    `)).add('.shopengine-product-category-lists .single-cat-list-item', { desktop: shopengine_list_normal_shadow }, (val) => (
        `box-shadow: ${getShadowValues(val)};`
    )).add('.shopengine-product-category-lists .single-cat-list-item', settings.shopengine_list_padding, (val) => (
        `padding: ${getObjectValues(val).split(',').join(' ')};`
    ));

    cssHelper.add('.shopengine-product-category-lists .single-cat-list-item::before', settings.shopengine_list_normal_overlay_background, (val) => (`
        background: ${val};
   `));
    
   cssHelper.add('.shopengine-product-category-lists .single-cat-list-item::before', settings.shopengine_list_normal_overlay_background_opacity, (val) => (`
        opacity: ${val/100};
   `));

    cssHelper.add('.shopengine-product-category-lists .single-cat-list-item:hover', settings.shopengine_list_hover_background_color, (val) => (`
        background: ${val};
   `)).add('.shopengine-product-category-lists .single-cat-list-item:hover', { desktop: shopengine_list_hover_shadow }, (val) => (
        `box-shadow: ${getShadowValues(val)};`
    ));

    cssHelper.add('.shopengine-product-category-lists .single-cat-list-item:hover::before', settings.shopengine_list_hover_overlay_background, (val) => (`
        background: ${val};
   `));

    cssHelper.add('.shopengine-product-category-lists .single-product-category', settings.shopengine_content_alignment, (val) => (`
        text-align: ${val};
   `));

    cssHelper.add('.shopengine-product-category-lists .product-category-title', settings.shopengine_title_font_family, (val) => (`
        font-family: ${val.family};
   `)).add('.shopengine-product-category-lists .product-category-title', settings.shopengine_title_color, (val) => (`
        color: ${val};
    `)).add('.shopengine-product-category-lists .product-category-title', settings.shopengine_title_font_size, (val) => (`
        font-size: ${val}px;
    `)).add('.shopengine-product-category-lists .product-category-title', settings.shopengine_title_font_weight, (val) => (`
        font-weight: ${val};
    `)).add('.shopengine-product-category-lists .product-category-title', settings.shopengine_title_transform, (val) => (`
        text-transform: ${val};
    `)).add('.shopengine-product-category-lists .product-category-title', settings.shopengine_title_line_height, (val) => (`
        line-height: ${val}px;
    `)).add('.shopengine-product-category-lists .product-category-title', settings.shopengine_title_word_spacing, (val) => (`
        letter-spacing: ${val}px;
    `)).add('.shopengine-product-category-lists .product-category-title', settings.shopengine_title_margin, (val) => (`
        margin: ${getObjectValues(val).split(',').join(' ')};
    `));

    cssHelper.add('.shopengine-product-category-lists .product-category-title:hover', settings.shopengine_title_hover_color, (val) => (`
        color: ${val};
   `));

    cssHelper.add('.shopengine-product-category-lists .cat-count', settings.shopengine_category_title_font_family, (val) => (`
        font-family: ${val.family};
    `)).add('.shopengine-product-category-lists .cat-count', settings.shopengine_category_title_color, (val) => (`
        color: ${val};
    `)).add('.shopengine-product-category-lists .cat-count', settings.shopengine_category_title_font_size, (val) => (`
        font-size: ${val}px;
    `)).add('.shopengine-product-category-lists .cat-count', settings.shopengine_category_title_font_weight, (val) => (`
        font-weight: ${val};
    `)).add('.shopengine-product-category-lists .cat-count', settings.shopengine_category_title_transform, (val) => (`
        text-transform: ${val};
    `)).add('.shopengine-product-category-lists .cat-count', settings.shopengine_category_title_line_height, (val) => (`
        line-height: ${val}px;
    `)).add('.shopengine-product-category-lists .cat-count', settings.shopengine_category_title_word_spacing, (val) => (`
        letter-spacing: ${val}px;
    `)).add('.shopengine-product-category-lists .cat-count', settings.shopengine_category_title_margin, (val) => (`
        margin: ${getObjectValues(val).split(',').join(' ')};
    `));

    cssHelper.add('.shopengine-product-category-lists .cat-count:hover', settings.shopengine_category_title_hover_color, (val) => (`
        color: ${val};
    `));

    cssHelper.add('.shopengine-product-category-lists .single-cat-list-item .cat-icon', settings.shopengine_button_size, (val) => (`
        width: ${val}px;
    `)).add('.shopengine-product-category-lists .single-cat-list-item .cat-icon', settings.shopengine_button_size, (val) => (`
        height: ${val}px;
    `)).add('.shopengine-product-category-lists .single-cat-list-item .cat-icon', settings.shopengine_button_size, (val) => (`
        line-height: ${val}px;
    `));

    cssHelper.add('.shopengine-product-category-lists .cat-icon', settings.shopengine_button_font_size, (val) => (`
        font-size: ${val}px;
    `)).add('.shopengine-product-category-lists .cat-icon', settings.shopengine_button_padding, (val) => (`
        padding: ${getObjectValues(val).split(',').join(' ')};
    `)).add('.shopengine-product-category-lists .cat-icon', settings.shopengine_normal_button_color, (val) => (`
        color: ${val};
    `)).add('.shopengine-product-category-lists .cat-icon', settings.shopengine_normal_button_background, (val) => (`
        background-color: ${val};
    `)).add('.shopengine-product-category-lists .cat-icon', settings.shopengine_button_border_radius, (val) => (`
        border-radius: ${getObjectValues(val).split(',').join(' ')};
    `));

    cssHelper.add('.shopengine-product-category-lists .cat-icon:hover', settings.shopengine_hover_button_color, (val) => (`
        color: ${val};
    `)).add('.shopengine-product-category-lists .cat-icon:hover', settings.shopengine_hover_button_background, (val) => (`
        background-color: ${val};
    `))

    return cssHelper.get()
}


export { Style }