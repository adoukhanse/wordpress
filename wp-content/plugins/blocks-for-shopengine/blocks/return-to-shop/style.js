
const Style = ({settings, breakpoints, cssHelper})=>{
    const {shopengine_button_alignment,shopengine_button_font_size,shopengine_button_font_weight,shopengine_button_text_transform,shopengine_button_line_height,shopengine_button_word_spacing, shopengine_button_padding, shopengine_border_radius, shopengine_border_width, shopengine_button_border_style, shopengine_button_bg,shopengine_button_color, shopengine_border_color, shopengine_button_hover_color,shopengine_button_hover_bg, shopengine_button_hover_border_style, shopengine_hover_border_width, shopengine_hover_border_color} = settings;


    let boxShadow = {
        horizontal : settings.shopengine_button_box_shadow_horizontal.desktop,
        vertical : settings.shopengine_button_box_shadow_vertical.desktop,
        blur : settings.shopengine_button_box_shadow_blur.desktop,
        spread : settings.shopengine_button_box_shadow_spread.desktop,
        shadow: settings.shopengine_button_box_shadow_color.desktop.rgb,
        position: settings.shopengine_button_box_shadow_position.desktop
    }

    cssHelper.add('.shopengine-return-to-shop .return-to-shop', shopengine_button_alignment, (align) => {
        return (`
            text-align: ${align};
        `)
    } );
    cssHelper.add('.shopengine-return-to-shop .button', shopengine_button_color, (color) => {
        return (`
            color: ${color} !important;
        `)
    } );
    cssHelper.add('.shopengine-return-to-shop .button', settings.font_family, (val) => {
        return ` 
        font-family: ${val.family};
        `
    } );
    cssHelper.add('.shopengine-return-to-shop .button', shopengine_button_font_size, (size) => {
        return (`
        font-size: ${size}px;
        `)
    } );
    cssHelper.add('.shopengine-return-to-shop .button', shopengine_button_font_weight, (weight) => {
        return (`
            font-weight: ${weight};
        `)
    } );
    cssHelper.add('.shopengine-return-to-shop .button', shopengine_button_color, (color) => {
        return (`
            color: ${color} !important;
        `)
    } );
    cssHelper.add('.shopengine-return-to-shop .button', shopengine_button_bg, (color) => {
        return (`
            background-color: ${color} !important;
        `)
    } );
    cssHelper.add('.shopengine-return-to-shop .button', shopengine_button_border_style, (border) => {
        return (`
            border-style: ${border} !important;
        `)
    } );
    cssHelper.add('.shopengine-return-to-shop .button', shopengine_border_width, (width) => {
        return (`
            border-width: ${width.top} ${width.right} ${width.bottom} ${width.left} !important;
        `)
    } );
    cssHelper.add('.shopengine-return-to-shop .button', shopengine_border_radius, (rad) => {
        return (`
            border-radius: ${rad.top} ${rad.right} ${rad.bottom} ${rad.left} !important;
        `)
    } );
    cssHelper.add('.shopengine-return-to-shop .button', shopengine_button_padding, (padding) => {
        return (`
            padding: ${padding.top} ${padding.right} ${padding.bottom} ${padding.left};
        `)
    } );
    cssHelper.add('.shopengine-return-to-shop .button', shopengine_button_text_transform, (tr) => {
        return (`
            text-transform: ${tr};        
        `)
    } );
    cssHelper.add('.shopengine-return-to-shop .button', shopengine_button_line_height, (line) => {
        return (`
            line-height: ${line}px;
        `)
    } );
    cssHelper.add('.shopengine-return-to-shop .button', shopengine_button_word_spacing, (sp) => {
        return (`
            word-spacing: ${sp}px;
        `)
    } );
    cssHelper.add('.shopengine-return-to-shop .button', shopengine_border_color, (bd) => {
        return (`
            border-color: ${bd};
        `)
    } );
    
    cssHelper.add('.shopengine-return-to-shop .button:hover', shopengine_button_hover_color, (val) => {
        return (`
            color: ${val} !important;
        `)
    } );
    cssHelper.add('.shopengine-return-to-shop .button:hover', shopengine_button_hover_border_style, (val) => {
        return (`
            border-style: ${val} !important;
        `)
    } );
    cssHelper.add('.shopengine-return-to-shop .button:hover', shopengine_hover_border_color, (val) => {
        return (`
            border-color: ${val} !important;
        `)
    } );
    cssHelper.add('.shopengine-return-to-shop .button:hover', shopengine_hover_border_width, (val) => {
        return (`
            border-width: ${val.top} ${val.right} ${val.bottom} ${val.left} !important;
        `)
    } );
    cssHelper.add('.shopengine-return-to-shop .button:hover', shopengine_button_hover_bg, (val) => {
        return (`
            background-color: ${val} !important;
        `)
    } );

    cssHelper.add('.shopengine-return-to-shop .button', boxShadow, (val) => {
        return (`
            box-shadow : ${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px rgba(${boxShadow.shadow.r},${boxShadow.shadow.g}, ${boxShadow.shadow.b}, ${boxShadow.shadow.a}) ${boxShadow.position}; 
        `)
    } );

    return cssHelper.get()
}


export {Style}