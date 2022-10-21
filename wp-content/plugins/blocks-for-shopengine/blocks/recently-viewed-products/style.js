
const Style = ({settings, breakpoints, cssHelper})=>{
    const getObjectValues = (obj) => {
        return [...Object.values(obj)].toString();
    }



    cssHelper.add('.shopengine-recently-viewed-products .recent-viewed-product-list',settings.column,(val)=>(`
    grid-template-columns: repeat(${val}, 1fr);
    `))
    cssHelper.add('.shopengine-single-product-item .badge.sale',settings.show_sale,(val)=>(`
    display:${val ? "inline-block" : "none"};
    `))
    cssHelper.add('.shopengine-single-product-item .badge.tag',settings.show_tag,(val)=>(`
    display:${val ? "inline-block" : "none"};
    `))
    
    cssHelper.add('.shopengine-recently-viewed-products .shopengine-single-product-item .product-thumb',settings.product_wrap_padding,(val)=>(`
    padding: ${getObjectValues(val).split(',').join(' ')} ;
    `))
    cssHelper.add('.shopengine-recently-viewed-products .shopengine-single-product-item .product-thumb',settings.product_image_bg,(val)=>(`
    background: ${val};
    `))
    
    cssHelper.add('.shopengine-recently-viewed-products .shopengine-single-product-item:not(:last-child)',settings.shopengine_product_wrap_hide_right_border,(val)=>(`
        border-right:${val && "none"};
    `))
    
    if(settings.product_image_use_equal_height.desktop == 1){
        cssHelper.add('.shopengine-single-product-item .product-thumb img',settings.product_image_fit,(val)=>(`object-fit: ${val};`))
        cssHelper.add('.shopengine-single-product-item .product-thumb img',settings.product_image_height,(val)=>(`height: ${val}px !important;`))
    }
    if(settings.badge_position.desktop === 'left'){
        console.log("true");
        cssHelper.add(`.product-tag-sale-badge`, settings.badge_position_x_axis, val=>(`
        top: 10px;
        left: 10px;
        `))
    }
    else if(settings.badge_position.desktop === 'right'){
        console.log("false");
        cssHelper.add(`.product-tag-sale-badge`, settings.badge_position_x_axis, val=>(`
            top: 10px;
            right: 10px;
        `))
    }else{
        cssHelper.add(`.product-tag-sale-badge`, settings.badge_position_x_axis, val=>(`
            left: ${val}%;
        `))
        cssHelper.add(`.product-tag-sale-badge`, settings.badge_position_y_axis, val=>(`
            top: ${val}%;
        `))
    }
    cssHelper.add('.product-tag-sale-badge .off',settings.product_percentage_badge_bg,val=> (`background: ${val}`))
    
    cssHelper.add('.product-tag-sale-badge ul li:not(:last-child)',settings.product_badgey_item_space_between,val=>(`margin: 0 ${val}px 0 0`))
    cssHelper.add('.product-tag-sale-badge.align-vertical ul li:not(:last-child)',settings.product_badgey_item_space_between,val=>(`margin: margin: 0 0 ${val}px 0`))
            
            .add(`.shopengine-recently-viewed-products .recent-viewed-product-list`, settings.product_item_column_gap, val=>(`
                grid-column-gap: ${val}px;
            `))
            .add(`.shopengine-recently-viewed-products .recent-viewed-product-list`, settings.product_item_row_gap, val=>(`
                grid-row-gap: ${val}px;
            `))
            .add(`.shopengine-recently-viewed-products .shopengine-single-product-item`, settings.product_wrap_border_type, val=>(`
                border-style: ${val};
            `))
            .add(`.shopengine-recently-viewed-products .shopengine-single-product-item`, settings.product_wrap_border_width, val=>(`
                border-width: ${getObjectValues(val).split(',').join(' ')};
            `))
            .add(`.shopengine-recently-viewed-products .shopengine-single-product-item`, settings.product_wrap_border_color, val=>(`
                border-color: ${val};
            `))
            
            

            .add(`.product-tag-sale-badge .tag a, .product-tag-sale-badge, .no-link`, settings.product_badge_typography_font_family, val=>(`
                font-family: ${val.family};
            `))
            
            .add(`.product-tag-sale-badge .tag a, .product-tag-sale-badge, .no-link`, settings.product_badge_typography_font_size, val=>(`
                font-size: ${val}px;
            `))
            .add(`.product-tag-sale-badge .tag a, .product-tag-sale-badge, .no-link`, settings.product_badge_typography_font_weight, val=>(`
                font-weight: ${val};
            `))
            .add(`.product-tag-sale-badge .tag a, .product-tag-sale-badge, .no-link`, settings.product_badge_typographytext_transform, val=>(`
                text-transform: ${val};
            `))
            .add(`.product-tag-sale-badge .tag a, .product-tag-sale-badge, .no-link`, settings.product_badge_typography_line_height, val=>(`
                line-height: ${val}px;
            `))
            .add(`.product-tag-sale-badge .tag a, .product-tag-sale-badge, .no-link`, settings.product_badge_typography_wordspace, val=>(`
                letter-spacing : ${val}px;
            `))
            .add(`.product-tag-sale-badge .tag a, .product-tag-sale-badge, .no-link`, settings.product_badge_color, val=>(`
                color: ${val};
            `))
            .add(`.product-tag-sale-badge .tag a, .product-tag-sale-badge, .no-link`, settings.product_badge_bg, val=>(`
                background: ${val};
            `))
            .add(`.product-tag-sale-badge .tag a, .product-tag-sale-badge, .no-link`, settings.product_badge_padding, val=>(`
                padding: ${getObjectValues(val).split(',').join(' ')};
            `))
            .add(`.product-tag-sale-badge .tag a, .product-tag-sale-badge, .no-link`, settings.product_badge_margin, val=>(`
                margin: ${getObjectValues(val).split(',').join(' ')};
            `))
            .add(`.product-tag-sale-badge .tag a, .product-tag-sale-badge, .no-link`, settings.badge_border_radius, val=>(`
                border-radius: ${getObjectValues(val).split(',').join(' ')};
            `))
            .add(`.product-tag-sale-badge  li,
            .product-tag-sale-badge .no-link, 
            .product-tag-sale-badge a, 
            .product-tag-sale-badge .tag
            `, settings.badge_border_type, val=>(`
                border-style: ${val};
            `))
            .add(`.product-tag-sale-badge  li,
            .product-tag-sale-badge .no-link, 
            .product-tag-sale-badge a, 
            .product-tag-sale-badge .tag
            `, settings.badge_border_width, val=>(`
                border-width: ${getObjectValues(val).split(',').join(' ')};
            `))
            .add(`.product-tag-sale-badge  li,
            .product-tag-sale-badge .no-link, 
            .product-tag-sale-badge a, 
            .product-tag-sale-badge .tag
            `, settings.badge_border_color, val=>(`
                border-color: ${val};
            `))

   


    return cssHelper.get()
}

/*
const Style = ({settings, breakpoints})=>{
    // cssHelper.media(`(min-width: ${breakpoints.small}px) and (max-width: ${(breakpoints.large - 1)}px)`)
    // .add('.class-a', 'color', '#000')
    // .add('.class-b', 'color', settings.autocontrol1)

    var cssOutput = '';

    var cssOutput = `
        #${settings.blockId} .class-a{
            color: #ab0;
        }
        #${settings.blockId} .class-b{
            color: ${settings.color};
        }
    `

    // we can apply conditional styles and concat them
    cssOutput += `

    @media (min-width: ${breakpoints.small}px) and (max-width: ${(breakpoints.large - 1)}px){
        #${settings.blockId} .class-a{
            color: #000;
        }
        #${settings.blockId} .class-b{
            color: ${settings.autocontrol1};
        }
    }
    `

    return cssOutput
}
*/

export {Style}