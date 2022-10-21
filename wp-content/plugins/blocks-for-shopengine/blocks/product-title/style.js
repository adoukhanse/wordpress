const Style = ({settings, breakpoints, cssHelper})=>{
   cssHelper.add('.shopengine-product-title .product-title', settings.shopengine_product_title_align, (val) => {
      return `
      text-align: ${val};
      `
   } );
   
   cssHelper.add('.shopengine-product-title .product-title', settings.shopengine_product_title_product_title_color, (val) => {
      return `
      color: ${val};
      `
   } );
   



   cssHelper.add('.shopengine-product-title .product-title', settings.shopengine_product_title_font_family, (val) => {
      return `
       font-family: ${val.family};
      `
     } );

   cssHelper.add('.shopengine-product-title .product-title', settings.shopengine_product_title_font_size, (val) => {
      return `
      font-size: ${val}px;
      `
   } );
   cssHelper.add('.shopengine-product-title .product-title', settings.shopengine_product_title_font_weight, (val) => {
      return `
      font-weight: ${val};
      `
   } );
   cssHelper.add('.shopengine-product-title .product-title', settings.shopengine_product_title_font_transform, (val) => {
      return `
      text-transform: ${val};
      `
   } );
   cssHelper.add('.shopengine-product-title .product-title', settings.shopengine_product_title_font_style, (val) => {
      return `
      font-style: ${val};
      `
   } );
   cssHelper.add('.shopengine-product-title .product-title', settings.shopengine_product_title_font_Line_height, (val) => {
      return `
      line-height: ${val}px;
      `
   } );
   cssHelper.add('.shopengine-product-title .product-title', settings.shopengine_product_title_font_letter_spacing, (val) => {
      return `
      letter-spacing: ${val}px;
      `
   } );
   cssHelper.add('.shopengine-product-title .product-title', settings.shopengine_product_title_font_word_spacing, (val) => {
      return `
      word-spacing: ${val}px;
      `
   } );
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

export { Style }

