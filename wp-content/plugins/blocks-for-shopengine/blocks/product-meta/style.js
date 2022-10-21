
const Style = ({settings, breakpoints, cssHelper})=>{
    const getObjectValues = (obj) => {
        return  [...Object.values(obj)].toString();
    }
    cssHelper.add('.shopengine-product-meta .sku_wrapper', settings.shopengine_sku_display, (val) => (`
            display: ${!val && "none"} !important;
        `))
        .add('.shopengine-layout-inline .shopengine-product-meta .sku_wrapper', settings.shopengine_layout_control, (val) => (`
            display: ${!val && "none"};
        `))
        .add('.shopengine-product-meta .posted_in', settings.shopengine_category_display, (val) => (`
            display: ${!val && "none"} !important;
        `))
        .add('.shopengine-layout-inline .shopengine-product-meta .posted_in', settings.shopengine_category_display, (val) => (`
            display: ${!val && "none"} !important;
        `))
        .add('.shopengine-product-meta .products-page-cats', settings.shopengine_category_display, (val) => (`
            display: ${!val && "none"} !important;
        `))
        .add('.shopengine-layout-inline .shopengine-product-meta  .products-page-cat', settings.shopengine_category_display, (val) => (`
            display: ${!val && "none"} !important;
        `))
        .add('.shopengine-product-meta .tagged_as', settings.shopengine_tag_display, (val) => (`
            display: ${!val && "none"} !important;
        `))
        .add('.shopengine-layout-inline .shopengine-product-meta .tagged_as', settings.shopengine_tag_display, (val) => (`
            display: ${!val && "none"} !important;
        `))
        .add('.shopengine-product-meta .sku_wrapper,.shopengine-product-meta .posted_in, .shopengine-layout-inline .shopengine-product-meta .sku_wrapper,.shopengine-layout-inline .shopengine-product-meta .posted_in ', settings.shopengine_layout_control, (val) => (`
            display: ${val};
        `))
        .add('.shopengine-product-meta .product_meta', settings.shopengine_align_control, (val) => (`
            text-align: ${val};
        `))
        .add('.shopengine-product-meta .product_meta .sku_wrapper,.shopengine-product-meta .product_meta .posted_in,.shopengine-product-meta .product_meta .tagged_as', settings.shopengine_padding_control, (val) => (`
            padding: ${getObjectValues(val).split(',').join(' ')};
        `))
        .add('.shopengine-product-meta .product_meta .sku_wrapper, .shopengine-product-meta .product_meta .posted_in, .shopengine-product-meta .product_meta .tagged_as', settings.shopengine_label_color, (val) => (`
            color: ${val.hex};
        `))
        .add('.shopengine-product-meta .product_meta .sku, .shopengine-product-meta .product_meta .posted_in a, .shopengine-product-meta .product_meta .tagged_as a', settings.shopengine_value_color, (val) => (`
            color: ${val.hex};
        `))
        .add('.shopengine-product-meta .product_meta .posted_in a:hover, .shopengine-product-meta .product_meta .tagged_as a:hover', settings.shopengine_link_hover_color, (val) => (`
            color: ${val.hex};
        `))

        .add('.shopengine-product-meta .product_meta a,.shopengine-product-meta .product_meta span,.shopengine-product-meta .product_meta .sku_wrapper,.shopengine-product-meta .product_meta .posted_in,.shopengine-product-meta .product_meta .tagged_as', settings.shopengine_font_family, (val) => (`
            font-family: ${val.family};
        `))
        .add('.shopengine-product-meta .product_meta a,.shopengine-product-meta .product_meta span,.shopengine-product-meta .product_meta .sku_wrapper,.shopengine-product-meta .product_meta .posted_in,.shopengine-product-meta .product_meta .tagged_as', settings.shopengine_font_size, (val) => (`
            font-size: ${val}px;
        `))
        .add('.shopengine-product-meta .product_meta a,.shopengine-product-meta .product_meta span,.shopengine-product-meta .product_meta .sku_wrapper,.shopengine-product-meta .product_meta .posted_in,.shopengine-product-meta .product_meta .tagged_as', settings.shopengine_font_weight, (val) => (`
            font-weight: ${val};
        `))
        .add('.shopengine-product-meta .product_meta a,.shopengine-product-meta .product_meta span,.shopengine-product-meta .product_meta .sku_wrapper,.shopengine-product-meta .product_meta .posted_in,.shopengine-product-meta .product_meta .tagged_as', settings.shopengine_line_height, (val) => (`
            line-height: ${val}px;
        `))
        .add('.shopengine-product-meta .product_meta a,.shopengine-product-meta .product_meta span,.shopengine-product-meta .product_meta .sku_wrapper,.shopengine-product-meta .product_meta .posted_in,.shopengine-product-meta .product_meta .tagged_as', settings.shopengine_transform, (val) => (`
            text-transform: ${val};
        `))
        .add('.shopengine-product-meta .product_meta a,.shopengine-product-meta .product_meta span,.shopengine-product-meta .product_meta .sku_wrapper,.shopengine-product-meta .product_meta .posted_in,.shopengine-product-meta .product_meta .tagged_as', settings.shopengine_word_spacing, (val) => (`
            word-spacing: ${val}px;
        `))


    return cssHelper.get()
}

/*
const Style = ({settings, breakpoints})=>{
    // cssHelper.media(`(min-width: ${breakpoints.small}px) and (max-width: ${(breakpoints.large - 1)}px)`)
    // .add('.class-a', 'color', '#000')
    // .add('.class-b', 'color',  autocontrol1)

    var cssOutput = '';

    var cssOutput = `
        #${ blockId} .class-a{
            color: #ab0;
        }
        #${ blockId} .class-b{
            color: ${ color};
        }
    `

    // we can apply conditional styles and concat them
    cssOutput += `

    @media (min-width: ${breakpoints.small}px) and (max-width: ${(breakpoints.large - 1)}px){
        #${ blockId} .class-a{
            color: #000;
        }
        #${ blockId} .class-b{
            color: ${ autocontrol1};
        }
    }
    `

    return cssOutput
}
*/

export {Style}