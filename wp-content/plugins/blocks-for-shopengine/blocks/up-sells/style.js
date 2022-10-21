const Style = ({settings, breakpoints, cssHelper})=>{


   cssHelper.add('.shopengine-up-sells .up-sells .product, .shopengine-up-sells .up-sells .price', settings.shopengine_up_sells_product_text_align, (val) => {
      return `
      text-align: ${val};
      justify-content: ${val};
      `
   } );

   cssHelper.add('.shopengine-up-sells.slider-disabled ul.products', settings.shopengine_up_sells_product_column, (val) => {
      return `
      display: grid;
      grid-template-columns: repeat(${val}, 1fr) !important;
      width: 100%;
      `
   });    
   
   cssHelper.add('.shopengine-up-sells.slider-disabled ul.products, .shopengine-up-sells.slider-enabled ul.products > li', settings.shopengine_up_sells_product_column_gap, (val) => {
      return `
      grid-gap: ${val}px;
      margin-right: ${val}px;
      `
   } );   
   
   cssHelper.add('.shopengine-up-sells .up-sells .products li a', settings.shopengine_up_sells_product_btns_space_between, (val) => {
      return `
      margin-right: ${val}px;
      `
   } );   

   // Items End
   

   cssHelper.add('.shopengine-up-sells .onsale', settings.shopengine_up_sells_product_flash_sale_color, (val) => {
      return `
      color: ${val};
      `
   } );
   
   cssHelper.add('.shopengine-up-sells .onsale', settings.shopengine_up_sells_product_flash_sale_bg_color, (val) => {
      return `
      background-color: ${val};
      `
   } );

   // ==================================
   // product flash sale badge typography
   // ==================================


   cssHelper.add('.shopengine-up-sells .onsale', settings.shopengine_up_sells_product_flash_sale_badge_font_size, (val) => {
      return `
      font-size: ${val}px;
      `
   } );
   cssHelper.add('.shopengine-up-sells .onsale', settings.shopengine_up_sells_product_flash_sale_badge_font_weight, (val) => {
      return `
      font-weight: ${val};
      `
   } );
   cssHelper.add('.shopengine-up-sells .onsale', settings.shopengine_up_sells_product_flash_sale_badge_font_transform, (val) => {
      return `
      text-transform: ${val};
      `
   } );
   cssHelper.add('.shopengine-up-sells .onsale', settings.shopengine_up_sells_product_flash_sale_badge_font_style, (val) => {
      return `
      font-style: ${val};
      `
   } );
   cssHelper.add('.shopengine-up-sells .onsale', settings.shopengine_up_sells_product_flash_sale_badge_font_Line_height, (val) => {
      return `
      line-height: ${val}px;
      `
   } );
   cssHelper.add('.shopengine-up-sells .onsale', settings.shopengine_up_sells_product_flash_sale_badge_font_letter_spacing, (val) => {
      return `
      letter-spacing: ${val}px;
      `
   } );

   cssHelper.add('.shopengine-up-sells .onsale', settings.shopengine_up_sells_product_flash_sale_badge_font_word_spacing, (val) => {
      return `
      word-spacing: ${val}px;
      `
   } );  


   // ==================================
   // product flash sale badge typography end
   // ==================================

   
   cssHelper.add('.shopengine-up-sells .onsale', settings.shopengine_up_sells_product_flash_sale_badge_size, (val) => {
      return `
        width: ${val}px;
        height: ${val}px;
        line-height: ${val}px;
      `
   } );   
   
   cssHelper.add('.shopengine-up-sells .onsale', settings.shopengine_up_sells_product_flash_sale_badge_border_radius, (val) => {
      return `
       border-radius: ${val}px;
      `
   } );   
   
   cssHelper.add('.shopengine-up-sells .onsale', settings.shopengine_up_sells_product_flash_sale_padding, (val) => {
      return (`
          padding: ${val.top} ${val.right} ${val.bottom} ${val.left};
        `) 
   } );

   
   // cssHelper.add('.shopengine-up-sells .up-sells .product, .shopengine-up-sells .up-sells .price', settings.shopengine_up_sells_product_flash_sale_position, (val) => {
   //    return `
   //    text-align: ${val};
   //    justify-content: ${val};
   //    `
   // } );


   if (settings.shopengine_up_sells_product_flash_sale_position.desktop === "left") {
      cssHelper.add(".shopengine-up-sells .up-sells .onsale", {}, (val) => {
          return `
              top: 20px;
              left: 25px;
          `;
      });
      cssHelper.add(
          ".shopengine-up-sells .up-sells .onsale",
          settings.shopengine_up_sells_product_flash_sale_position_horizontal,
          (val) => {
              return `
              left: ${val}px;
          `;
          }
      );
  }

  if (settings.shopengine_up_sells_product_flash_sale_position.desktop === "right") {
      cssHelper.add(".shopengine-up-sells .up-sells .onsale", {}, (val) => {
          return `
              top: 20px;
              right: 25px
          `;
      });
      cssHelper.add(
          ".shopengine-up-sells .up-sells .onsale",
          settings.shopengine_up_sells_product_flash_sale_position_horizontal,
          (val) => {
              return `
              right: ${val}px;
          `;
          }
      );
  }

   cssHelper.add( ".shopengine-up-sells .up-sells .onsale",  settings.shopengine_up_sells_product_flash_sale_position_vertical, (val) => {
      return `
         top: ${val}px;
      `;
      }
   );


   // flash_sale end

   cssHelper.add('.shopengine-up-sells .up-sells .product img', settings.shopengine_up_sells_product_image_bg_color, (val) => {
      return `
      background-color: ${val};
      `
   } );   
  
   cssHelper.add('.shopengine-up-sells .up-sells .product img', settings.shopengine_up_sells_product_image_height, (val) => {
      return `
      height: ${val} !important;
      `
   } );


   if (settings.shopengine_related_image_auto_fit.desktop === true) {

      cssHelper.add(".shopengine-up-sells .up-sells .product img", {}, (val) => {
         return `
         object-fit: cover; 
         object-position: center center;
         `;
     });
   }


   cssHelper.add('.shopengine-up-sells .up-sells .product img', settings.shopengine_up_sells_product_image_padding, (val) => {
      return (`
          padding: ${val.top} ${val.right} ${val.bottom} ${val.left};
        `) 
   } );

   // image style end


   cssHelper.add('.shopengine-up-sells .woocommerce-loop-product__title', settings.shopengine_up_sells_product_title_color, (val) => {
      return `
        color: ${val};
      `
   } );   

   // ==================================
   // up_sells_product_title typography
   // ==================================


   cssHelper.add('.shopengine-up-sells .woocommerce-loop-product__title', settings.shopengine_up_sells_product_title_font_size, (val) => {
      return `
      font-size: ${val}px;
      `
   } );
   cssHelper.add('.shopengine-up-sells .woocommerce-loop-product__title', settings.shopengine_up_sells_product_title_font_weight, (val) => {
      return `
      font-weight: ${val};
      `
   } );
   cssHelper.add('.shopengine-up-sells .woocommerce-loop-product__title', settings.shopengine_up_sells_product_title_font_transform, (val) => {
      return `
      text-transform: ${val};
      `
   } );
   cssHelper.add('.shopengine-up-sells .woocommerce-loop-product__title', settings.shopengine_up_sells_product_title_font_style, (val) => {
      return `
      font-style: ${val};
      `
   } );
   cssHelper.add('.shopengine-up-sells .woocommerce-loop-product__title', settings.shopengine_up_sells_product_title_font_Line_height, (val) => {
      return `
      line-height: ${val}px;
      `
   } );
   cssHelper.add('.shopengine-up-sells .woocommerce-loop-product__title', settings.shopengine_up_sells_product_title_font_letter_spacing, (val) => {
      return `
      letter-spacing: ${val}px;
      `
   } );

   cssHelper.add('.shopengine-up-sells .woocommerce-loop-product__title', settings.shopengine_up_sells_product_title_font_word_spacing, (val) => {
      return `
      word-spacing: ${val}px;
      `
   } );  


   // ==================================
   // up_sells_product_title typography end
   // ==================================
    

   cssHelper.add('.shopengine-up-sells .woocommerce-loop-product__title', settings.shopengine_up_sells_product_title_padding, (val) => {
      return (`
          padding: ${val.top} ${val.right} ${val.bottom} ${val.left};
        `) 
   } );

   //product title end

   cssHelper.add('.shopengine-up-sells .products .star-rating, .shopengine-up-sells .products .star-rating::before', settings.shopengine_up_sells_product_rating_start_color, (val) => {
      return `
        color: ${val};
      `
   } ); 

   cssHelper.add('.shopengine-up-sells .products .product .star-rating', settings.shopengine_up_sells_product_rating_start_size, (val) => {
      return `
      font-size: ${val}px;
      `
   } );   
   
   cssHelper.add('.shopengine-up-sells .products .product .star-rating', settings.shopengine_up_sells_product_rating_start_margin_bottom, (val) => {
      return `
      margin-bottom: ${val}px;
      `
   } );

   // ratting tab end
   
   cssHelper.add('.shopengine-up-sells .price, .shopengine-up-sells .price span, .shopengine-up-sells .price .amount', settings.shopengine_up_sells_product_price_color, (val) => {
      return `
        color: ${val};
      `
   } );
   
   cssHelper.add('.shopengine-up-sells .price del span, .shopengine-up-sells .price del .amount', settings.shopengine_up_sells_product_sale_price_color, (val) => {
      return `
        color: ${val};
      `
   } ); 

   // ==================================
   // up-sells price typography
   // ==================================


   cssHelper.add('.shopengine-up-sells .price, .shopengine-up-sells .price .amount, .shopengine-up-sells .price ins, .shopengine-up-sells .price del', settings.shopengine_up_sells_product_font_family, (val) => {
      return `
       font-family: ${val.family};
      `
   } );
   
   cssHelper.add('.shopengine-up-sells .price, .shopengine-up-sells .price .amount, .shopengine-up-sells .price ins, .shopengine-up-sells .price del', settings.shopengine_up_sells_product_price_font_size, (val) => {
      return `
      font-size: ${val}px;
      `
   } );
   cssHelper.add('.shopengine-up-sells .price, .shopengine-up-sells .price .amount, .shopengine-up-sells .price ins, .shopengine-up-sells .price del', settings.shopengine_up_sells_product_price_font_weight, (val) => {
      return `
      font-weight: ${val};
      `
   } );
   cssHelper.add('.shopengine-up-sells .price, .shopengine-up-sells .price .amount, .shopengine-up-sells .price ins, .shopengine-up-sells .price del', settings.shopengine_up_sells_product_price_font_transform, (val) => {
      return `
      text-transform: ${val};
      `
   } );
   cssHelper.add('.shopengine-up-sells .price, .shopengine-up-sells .price .amount, .shopengine-up-sells .price ins, .shopengine-up-sells .price del', settings.shopengine_up_sells_product_price_font_style, (val) => {
      return `
      font-style: ${val};
      `
   } );
   cssHelper.add('.shopengine-up-sells .price, .shopengine-up-sells .price .amount, .shopengine-up-sells .price ins, .shopengine-up-sells .price del', settings.shopengine_up_sells_product_price_font_Line_height, (val) => {
      return `
      line-height: ${val}px;
      `
   } );
   cssHelper.add('.shopengine-up-sells .price, .shopengine-up-sells .price .amount, .shopengine-up-sells .price ins, .shopengine-up-sells .price del', settings.shopengine_up_sells_product_price_font_letter_spacing, (val) => {
      return `
      letter-spacing: ${val}px;
      `
   } );

   cssHelper.add('.shopengine-up-sells .price, .shopengine-up-sells .price .amount, .shopengine-up-sells .price ins, .shopengine-up-sells .price del', settings.shopengine_up_sells_product_price_font_word_spacing, (val) => {
      return `
      word-spacing: ${val}px;
      `
   } );  

   // ==================================
   // up-sells price typography end
   // ==================================

   cssHelper.add('.shopengine-up-sells .price', settings.shopengine_up_sells_product_price_padding, (val) => {
      return (`
          padding: ${val.top} ${val.right} ${val.bottom} ${val.left};
        `) 
   } );


   // Arrow is Not full working start
   cssHelper.add('.shopengine-up-sells .swiper-button-next, .shopengine-up-sells .swiper-button-prev', settings.shopengine_up_sells_product_slider_arrow_size, (val) => {
      return `
        width: ${val}px;
        height: ${val}px;
        line-height: ${val}px;
        align-items: center;
        justify-content: center;
        display: flex;
      `
   } );  

   cssHelper.add('.shopengine-up-sells .swiper-button-prev, .shopengine-up-sells .swiper-button-next', settings.shopengine_up_sells_product_slider_arrow_icon_size, (val) => {
      return `
      font-size: ${val}px;
      `
   } ); 
   // Arrow is Not full working end
   
  
   cssHelper.add('.shopengine-up-sells .swiper-button-prev, .shopengine-up-sells .swiper-button-next', settings.shopengine_up_sells_product_slider_arrows_color, (val) => {
      return `
        color: ${val};
      `
   } );
   
   cssHelper.add('.shopengine-up-sells .swiper-button-prev, .shopengine-up-sells .swiper-button-next', settings.shopengine_up_sells_product_slider_arrows_bg_color, (val) => {
      return `
      background-color: ${val};
      `
   } );    
   
   cssHelper.add('.shopengine-up-sells .swiper-button-prev, .shopengine-up-sells .swiper-button-next', settings.shopengine_up_sells_product_slider_arrows_border_color, (val) => {
      return `
        border-color: ${val};
      `
   } ); 


   cssHelper.add('.shopengine-up-sells .swiper-button-prev:hover, .shopengine-up-sells .swiper-button-next:hover', settings.shopengine_up_sells_product_slider_arrows_hover_color, (val) => {
      return `
        color: ${val};
      `
   } );
   
   cssHelper.add('.shopengine-up-sells .swiper-button-prev:hover, .shopengine-up-sells .swiper-button-next:hover', settings.shopengine_up_sells_product_slider_arrows_hover_bg_color, (val) => {
      return `
      background-color: ${val};
      `
   } );    
   
   cssHelper.add('.shopengine-up-sells .swiper-button-prev:hover, .shopengine-up-sells .swiper-button-next:hover', settings.shopengine_up_sells_product_slider_arrows_hover_border_color, (val) => {
      return `
        border-color: ${val};
      `
   } );    
   
   //border color end

   cssHelper.add('.shopengine-up-sells .swiper-button-prev, .shopengine-up-sells .swiper-button-next', settings.shopengine_up_sells_product_slider_arrows_border_type, (val) => {
      return `
        border-style: ${val};
      `
   } );    

   cssHelper.add('.shopengine-up-sells .swiper-button-prev, .shopengine-up-sells .swiper-button-next', settings.shopengine_up_sells_product_slider_arrows_border_width, (val) => {
      return (`
         border-width: ${val.top} ${val.right} ${val.bottom} ${val.left};
        `) 
   } );

   cssHelper.add('.shopengine-up-sells .swiper-button-prev, .shopengine-up-sells .swiper-button-next', settings.shopengine_up_sells_product_slider_arrows_border_radius, (val) => {
      return (`
         border-radius: ${val.top} ${val.right} ${val.bottom} ${val.left};
        `) 
   } );


   // dot is Not full working start

   cssHelper.add('.shopengine-up-sells .swiper-pagination-bullet', settings.shopengine_up_sells_product_slider_dots_color, (val) => {
      return `
      background: ${val};
      `
   } );   
   
   cssHelper.add('.shopengine-up-sells .swiper-pagination-bullet-active', settings.shopengine_up_sells_product_slider_active_dots_color, (val) => {
      return `
       border-color: ${val};
      `
   } );
   

   // dot is Not full working end

   cssHelper.add('.shopengine-up-sells .swiper-pagination', settings.shopengine_up_sells_product_slider_dot_wrap_margin, (val) => {
      return (`
        margin: ${val.top} ${val.right} ${val.bottom} ${val.left};
        `) 
   } );


   cssHelper.add('.shopengine-up-sells .up-sells .onsale, .shopengine-up-sells .up-sells .woocommerce-loop-product__title, .shopengine-up-sells .up-sells .price, .shopengine-up-sells .up-sells del, .shopengine-up-sells .up-sells ins, .shopengine-up-sells .up-sells .button', settings.shopengine_up_sells_product_global_font_family, (val) => {
      return `
       font-family: ${val.family};
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


  