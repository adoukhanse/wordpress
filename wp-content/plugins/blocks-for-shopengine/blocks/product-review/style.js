const Style = ({ settings, breakpoints, cssHelper }) => {
  
   
   cssHelper.add('.shopengine-product-review #reviews #comments .woocommerce-Reviews-title, .shopengine-product-review #review_form .comment-reply-title', settings.shopengine_product_review_heading_color, (val)=>{

      return `
      color: ${val};
      `
   });

   
   //Reviews-title Typography

   cssHelper.add('.shopengine-product-review #reviews #comments .woocommerce-Reviews-title, .shopengine-product-review #review_form .comment-reply-title', settings.shopengine_product_review_heading_font_size, (val) => {
      return `
      font-size: ${val}px;
      `
   } );

   cssHelper.add('.shopengine-product-review #reviews #comments .woocommerce-Reviews-title, .shopengine-product-review #review_form .comment-reply-title', settings.shopengine_product_review_heading_font_weight, (val) => {
      return `
      font-weight: ${val};
      `
   } );
   
   cssHelper.add('.shopengine-product-review #reviews #comments .woocommerce-Reviews-title, .shopengine-product-review #review_form .comment-reply-title', settings.shopengine_product_review_heading_font_transform, (val) => {
      return `
      text-transform: ${val};
      `
   } );
   cssHelper.add('.shopengine-product-review #reviews #comments .woocommerce-Reviews-title, .shopengine-product-review #review_form .comment-reply-title', settings.shopengine_product_review_heading_font_style, (val) => {
      return `
      font-style: ${val};
      `
   } );
   cssHelper.add('.shopengine-product-review #reviews #comments .woocommerce-Reviews-title, .shopengine-product-review #review_form .comment-reply-title', settings.shopengine_product_review_heading_font_Line_height, (val) => {
      return `
      line-height: ${val}px;
      `
   } );
   cssHelper.add('.shopengine-product-review #reviews #comments .woocommerce-Reviews-title, .shopengine-product-review #review_form .comment-reply-title', settings.shopengine_product_review_heading_font_letter_spacing, (val) => {
      return `
      letter-spacing: ${val}px;
      `
   } );
   cssHelper.add('.shopengine-product-review #reviews #comments .woocommerce-Reviews-title, .shopengine-product-review #review_form .comment-reply-title', settings.shopengine_product_review_heading_font_word_spacing, (val) => {
      return `
      word-spacing: ${val}px;
      `
   } );

   cssHelper.add('.shopengine-product-review #reviews #comments .woocommerce-Reviews-title, .shopengine-product-review #review_form .comment-reply-title', settings.shopengine_product_review_heading_margin,(val) =>{
      
      return (`
            margin: ${val.top} ${val.right} ${val.bottom} ${val.left};
        `) 
    });

  //Color

   cssHelper.add('div.shopengine-product-review #reviews .star-rating', settings.shopengine_review_rating_color, (val)=>{

      return `
      color: ${val};
      `
   });
   
   cssHelper.add('div.shopengine-product-review #reviews .star-rating span', settings.shopengine_review_rating_color, (val)=>{

      return `
      color: ${val};
      `
   });
   cssHelper.add('div.shopengine-product-review #reviews .star-rating span::before', settings.shopengine_review_rating_color, (val)=>{

      return `
      font-family : star;
      color: ${val};
      `
   });
   cssHelper.add('div.shopengine-product-review #reviews .star-rating::before', settings.shopengine_review_rating_color, (val)=>{

      return `
      color: ${val};
      `
   });   
   cssHelper.add('div.shopengine-product-review #reviews p.stars a', settings.shopengine_review_rating_color, (val)=>{

      return `
      color: ${val};
      `
   });
   cssHelper.add('div.shopengine-product-review #reviews p.stars.selected a', settings.shopengine_review_rating_color, (val)=>{

      return `
      color: ${val};
      `
   });
   cssHelper.add('div.shopengine-product-review #reviews p.stars:hover a', settings.shopengine_review_rating_color, (val)=>{

      return `
      color: ${val};
      `
   });
   cssHelper.add('div.shopengine-product-review #reviews p.stars a::before', settings.shopengine_review_rating_color, (val)=>{

      return `
      color: ${val};
      `
   });
   cssHelper.add('div.shopengine-product-review #reviews p.stars a.active~a::before', settings.shopengine_review_rating_color, (val)=>{

      return `
      color: ${val};
      `
   });
   cssHelper.add('div.shopengine-product-review #reviews .se-rating-container .star-rating span', settings.shopengine_review_rating_color, (val)=>{

      return `
      color: ${val};
      `
   });   
   cssHelper.add('div.shopengine-product-review #reviews .se-rating-container .star-rating::before', settings.shopengine_review_rating_color, (val)=>{

      return `
      color: ${val};
      `
   });
   
   
   cssHelper.add('div.shopengine-product-review .woocommerce-review__published-date, div.shopengine-product-review .description p, div.shopengine-product-review .woocommerce-review__author, div.shopengine-product-review .woocommerce-review__verified, div.shopengine-product-review .woocommerce-review__dash', settings.shopengine_review_date_color, (val)=>{

      return `
      color: ${val};
      `
   });

   cssHelper.add('div.shopengine-product-review #reviews #comments .commentlist li', settings.shopengine_review_separator_color, (val)=>{

      return `
      border-color: ${val};
      `
   });



//Author Typography

   cssHelper.add('div.shopengine-product-review .woocommerce-review__author', settings.shopengine_product_author_font_size, (val) => {
      return `
      font-size: ${val}px;
      `
   } );

   cssHelper.add('div.shopengine-product-review .woocommerce-review__author', settings.shopengine_product_author_font_weight, (val) => {
      return `
      font-weight: ${val};
      `
   } );

   cssHelper.add('div.shopengine-product-review .woocommerce-review__author', settings.shopengine_product_author_font_transform, (val) => {
      return `
      text-transform: ${val};
      `
   } );
   cssHelper.add('div.shopengine-product-review .woocommerce-review__author', settings.shopengine_product_author_font_style, (val) => {
      return `
      font-style: ${val};
      `
   } );
   cssHelper.add('div.shopengine-product-review .woocommerce-review__author', settings.shopengine_product_author_font_Line_height, (val) => {
      return `
      line-height: ${val}px;
      `
   } );
   cssHelper.add('div.shopengine-product-review .woocommerce-review__author', settings.shopengine_product_author_font_letter_spacing, (val) => {
      return `
      letter-spacing: ${val}px;
      `
   } );
   cssHelper.add('div.shopengine-product-review .woocommerce-review__author', settings.shopengine_product_author_font_word_spacing, (val) => {
      return `
      word-spacing: ${val}px;
      `
   } );

 //Date Typography
   cssHelper.add('div.shopengine-product-review .woocommerce-review__published-date, div.shopengine-product-review .woocommerce-review__dash, div.shopengine-product-review .woocommerce-review__verified', settings.shopengine_product_date_font_size, (val) => {
      return `
      font-size: ${val}px;
      `
   } );

   cssHelper.add('div.shopengine-product-review .woocommerce-review__published-date, div.shopengine-product-review .woocommerce-review__dash, div.shopengine-product-review .woocommerce-review__verified', settings.shopengine_product_date_font_weight, (val) => {
      return `
      font-weight: ${val};
      `
   } );

   cssHelper.add('div.shopengine-product-review .woocommerce-review__published-date, div.shopengine-product-review .woocommerce-review__dash, div.shopengine-product-review .woocommerce-review__verified', settings.shopengine_product_date_font_transform, (val) => {
      return `
      text-transform: ${val};
      `
   } );
   cssHelper.add('div.shopengine-product-review .woocommerce-review__published-date, div.shopengine-product-review .woocommerce-review__dash, div.shopengine-product-review .woocommerce-review__verified', settings.shopengine_product_date_font_style, (val) => {
      return `
      font-style: ${val};
      `
   } );
   cssHelper.add('div.shopengine-product-review .woocommerce-review__published-date, div.shopengine-product-review .woocommerce-review__dash, div.shopengine-product-review .woocommerce-review__verified', settings.shopengine_product_date_font_Line_height, (val) => {
      return `
      line-height: ${val}px;
      `
   } );
   cssHelper.add('div.shopengine-product-review .woocommerce-review__published-date, div.shopengine-product-review .woocommerce-review__dash, div.shopengine-product-review .woocommerce-review__verified', settings.shopengine_product_date_font_letter_spacing, (val) => {
      return `
      letter-spacing: ${val}px;
      `
   } );
   cssHelper.add('div.shopengine-product-review .woocommerce-review__published-date, div.shopengine-product-review .woocommerce-review__dash, div.shopengine-product-review .woocommerce-review__verified', settings.shopengine_product_date_font_word_spacing, (val) => {
      return `
      word-spacing: ${val}px;
      `
   } );


//Description Typography

   cssHelper.add('div.shopengine-product-review .description p', settings.shopengine_product_review_description_font_size, (val) => {
      return `
      font-size: ${val}px;
      `
   } );

   cssHelper.add('div.shopengine-product-review .description p', settings.shopengine_product_review_description_font_weight, (val) => {
      return `
      font-weight: ${val};
      `
   } );

   cssHelper.add('div.shopengine-product-review .description p', settings.shopengine_product_review_description_font_transform, (val) => {
      return `
      text-transform: ${val};
      `
   } );
   cssHelper.add('div.shopengine-product-review .description p', settings.shopengine_product_review_description_font_style, (val) => {
      return `
      font-style: ${val};
      `
   } );
   cssHelper.add('div.shopengine-product-review .description p', settings.shopengine_product_review_description_font_Line_height, (val) => {
      return `
      line-height: ${val}px;
      `
   } );
   cssHelper.add('div.shopengine-product-review .description p', settings.shopengine_product_review_description_font_letter_spacing, (val) => {
      return `
      letter-spacing: ${val}px;
      `
   } );
   cssHelper.add('div.shopengine-product-review .description p', settings.shopengine_product_review_description_font_word_spacing, (val) => {
      return `
      word-spacing: ${val}px;
      `
   } );

   cssHelper.add('div.shopengine-product-review #reviews #comments .commentlist li:not(:last-child)', settings.shopengine_product_review_single_spacing, (val) => {
      return `
      margin-bottom: ${val}px;
      `
   } );

   cssHelper.add('div.shopengine-product-review #reviews #comments .commentlist li:last-child', settings.shopengine_product_review_single_spacing, (val) => {
      return `
      margin-bottom: ${val}px;
      `
   } );
      


  	/*
	---------------------------
	review form
	--------------------------
	*/

   // Issue Form Color Not Working
   cssHelper.add('div.shopengine-product-review #review_form #respond .comment-form label, div.shopengine-product-review #review_form #respond .comment-form .comment-notes', settings.shopengine_product_review_label_clr, (val)=>{

      return `
      color: ${val};
      `
   });
   cssHelper.add('div.shopengine-product-review #review_form #respond .comment-form .required', settings.shopengine_product_review_label_required, (val)=>{

      return `
      color: ${val};
      `
   });

//    cssHelper.add('div.shopengine-product-review #review_form #respond .comment-form :is(label, .comment-notes)', 'color', settings.shopengine_product_review_label_clr.desktop + "!important");
//    cssHelper.add('div.shopengine-product-review #review_form #respond .comment-form .required', 'color', settings.shopengine_product_review_label_required.desktop);
  



//Input Label Typography

   cssHelper.add('div.shopengine-product-review #review_form #respond .comment-form label, div.shopengine-product-review #review_form #respond .comment-form .comment-notes', settings.shopengine_product_review_label_font_size, (val) => {
      return `
      font-size: ${val}px;
      `
   } );

   cssHelper.add('div.shopengine-product-review #review_form #respond .comment-form label, div.shopengine-product-review #review_form #respond .comment-form .comment-notes', settings.shopengine_product_review_label_font_weight, (val) => {
      return `
      font-weight: ${val};
      `
   } );

   cssHelper.add('div.shopengine-product-review #review_form #respond .comment-form label, div.shopengine-product-review #review_form #respond .comment-form .comment-notes', settings.shopengine_product_review_label_font_transform, (val) => {
      return `
      text-transform: ${val};
      `
   } );
   cssHelper.add('div.shopengine-product-review #review_form #respond .comment-form label, div.shopengine-product-review #review_form #respond .comment-form .comment-notes', settings.shopengine_product_review_label_font_style, (val) => {
      return `
      font-style: ${val};
      `
   } );
   cssHelper.add('div.shopengine-product-review #review_form #respond .comment-form label, div.shopengine-product-review #review_form #respond .comment-form .comment-notes', settings.shopengine_product_review_label_font_Line_height, (val) => {
      return `
      line-height: ${val}px;
      `
   } );
   cssHelper.add('div.shopengine-product-review #review_form #respond .comment-form label, div.shopengine-product-review #review_form #respond .comment-form .comment-notes', settings.shopengine_product_review_label_font_letter_spacing, (val) => {
      return `
      letter-spacing: ${val}px;
      `
   } );
   cssHelper.add('div.shopengine-product-review #review_form #respond .comment-form label, div.shopengine-product-review #review_form #respond .comment-form .comment-notes', settings.shopengine_product_review_label_font_word_spacing, (val) => {
      return `
      word-spacing: ${val}px;
      `
   } );


   cssHelper.add('div.shopengine-product-review #review_form #respond .comment-form input:not([type=checkbox]), div.shopengine-product-review #review_form #respond .comment-form textarea', settings.shopengine_product_review_form_input_clr, (val)=>{

      return `
      color: ${val} !important;
      `
   });   
   cssHelper.add('div.shopengine-product-review #review_form #respond .comment-form textarea, div.shopengine-product-review #review_form #respond .comment-form input:not(.submit)', settings.shopengine_product_review_form_input_border_color, (val)=>{

      return `
      border-color: ${val} !important;
      `
   }); 

   cssHelper.add('div.shopengine-product-review #review_form #respond .comment-form textarea:focus, div.shopengine-product-review #review_form #respond .comment-form input:focus, div.shopengine-product-review #review_form #respond .comment-form .comment-form-cookies-consent input::after', settings.shopengine_product_review_form_input_focus_border_color, (val)=>{

      return `
      border-color: ${val} !important;
      `
   });

   
 //Input Form Typography
   cssHelper.add('div.shopengine-product-review #review_form #respond .comment-form input:not([type=checkbox]), div.shopengine-product-review #review_form #respond .comment-form textarea', settings.shopengine_product_review_form_input_font_size, (val) => {
      return `
      font-size: ${val}px;
      `
   } );

   cssHelper.add('div.shopengine-product-review #review_form #respond .comment-form input:not([type=checkbox]), div.shopengine-product-review #review_form #respond .comment-form textarea', settings.shopengine_product_review_form_input_font_weight, (val) => {
      return `
      font-weight: ${val};
      `
   } );

   cssHelper.add('div.shopengine-product-review #review_form #respond .comment-form input:not([type=checkbox]), div.shopengine-product-review #review_form #respond .comment-form textarea', settings.shopengine_product_review_form_input_font_transform, (val) => {
      return `
      text-transform: ${val};
      `
   } );
   cssHelper.add('div.shopengine-product-review #review_form #respond .comment-form input:not([type=checkbox]), div.shopengine-product-review #review_form #respond .comment-form textarea', settings.shopengine_product_review_form_input_font_style, (val) => {
      return `
      font-style: ${val};
      `
   } );
   cssHelper.add('div.shopengine-product-review #review_form #respond .comment-form input:not([type=checkbox]), div.shopengine-product-review #review_form #respond .comment-form textarea', settings.shopengine_product_review_form_input_font_Line_height, (val) => {
      return `
      line-height: ${val}px;
      `
   } );
   cssHelper.add('div.shopengine-product-review #review_form #respond .comment-form input:not([type=checkbox]), div.shopengine-product-review #review_form #respond .comment-form textarea', settings.shopengine_product_review_form_input_font_letter_spacing, (val) => {
      return `
      letter-spacing: ${val}px;
      `
   } );
   cssHelper.add('div.shopengine-product-review #review_form #respond .comment-form input:not([type=checkbox]), div.shopengine-product-review #review_form #respond .comment-form textarea', settings.shopengine_product_review_form_input_font_word_spacing, (val) => {
      return `
      word-spacing: ${val}px;
      `
   } );


   //shopengine_product_review_input_padding
   cssHelper.add('div.shopengine-product-review #review_form #respond .comment-form textarea, div.shopengine-product-review #review_form #respond .comment-form input:not(#wp-comment-cookies-consent), div.shopengine-product-review #review_form #respond .comment-form input:not(.submit)', settings.shopengine_product_review_input_padding,(val) =>{
         
      return (`
            padding: ${val.top} ${val.right} ${val.bottom} ${val.left};
      `) 
   });

   // cssHelper.add( "div.shopengine-product-review #review_form #respond :is(.comment-form)", "margin", "0px" );
   cssHelper.add(' div.shopengine-product-review #review_form #respond .comment-form .comment-notes, div.shopengine-product-review #review_form #respond .comment-form .comment-form-rating, div.shopengine-product-review #review_form #respond .comment-form .comment-form-comment, div.shopengine-product-review #review_form #respond .comment-form .comment-form-author, div.shopengine-product-review #review_form #respond .comment-form .comment-form-email, div.shopengine-product-review #review_form #respond .comment-form .comment-form-cookies-consent', settings.shopengine_product_review_field_spacing, (val) => {
      return `
      margin-bottom: ${val}px;
      `
   } );

   cssHelper.add('div.shopengine-product-review #review_form #respond .comment-form textarea, div.shopengine-product-review #review_form #respond .comment-form input', settings.shopengine_product_review_border_radius, (val) => {
      return `
      border-radius: ${val}px;
      `
   } );



  //Button Typography

   cssHelper.add('div.shopengine-product-review #review_form #respond .comment-form .form-submit input#submit', settings.shopengine_product_review_submit_button_font_size, (val) => {
      return `
      font-size: ${val}px;
      `
   } );

   cssHelper.add('div.shopengine-product-review #review_form #respond .comment-form .form-submit input#submit', settings.shopengine_product_review_submit_button_font_weight, (val) => {
      return `
      font-weight: ${val};
      `
   } );

   cssHelper.add('div.shopengine-product-review #review_form #respond .comment-form .form-submit input#submit', settings.shopengine_product_review_submit_button_font_transform, (val) => {
      return `
      text-transform: ${val};
      `
   } );
   cssHelper.add('div.shopengine-product-review #review_form #respond .comment-form .form-submit input#submit', settings.shopengine_product_review_submit_button_font_style, (val) => {
      return `
      font-style: ${val};
      `
   } );
   cssHelper.add('div.shopengine-product-review #review_form #respond .comment-form .form-submit input#submit', settings.shopengine_product_review_submit_button_font_Line_height, (val) => {
      return `
      line-height: ${val}px;
      `
   } );
   cssHelper.add('div.shopengine-product-review #review_form #respond .comment-form .form-submit input#submit', settings.shopengine_product_review_submit_button_font_letter_spacing, (val) => {
      return `
      letter-spacing: ${val}px;
      `
   } );
   cssHelper.add('div.shopengine-product-review #review_form #respond .comment-form .form-submit input#submit', settings.shopengine_product_review_submit_button_font_word_spacing, (val) => {
      return `
      word-spacing: ${val}px;
      `
   } );

   cssHelper.add("div.shopengine-product-review #review_form #respond .comment-form .form-submit", "float", "none" );
   cssHelper.add('div.shopengine-product-review #review_form #respond .comment-form .form-submit', settings.shopengine_product_review_submit_button_alignment, (val) => {
      return `
      text-align: ${val} !important;
      `
   } );


   cssHelper.add('div.shopengine-product-review #review_form #respond .comment-form .form-submit input#submit', settings.shopengine_product_review_submit_button_color, (val)=>{

      return `
      color: ${val} !important;
      `
   });
   cssHelper.add('div.shopengine-product-review #review_form #respond .comment-form .form-submit input#submit', settings.shopengine_product_review_submit_button_bg, (val)=>{

      return `
      background-color: ${val} !important;
      `
   });
   cssHelper.add('div.shopengine-product-review #review_form #respond .comment-form .form-submit input#submit', settings.shopengine_product_review_submit_button_border, (val)=>{

      return `
      border-color: ${val} !important;
      `
   });



   cssHelper.add('div.shopengine-product-review #review_form #respond .comment-form .form-submit input#submit:hover', settings.shopengine_product_review_submit_button_hover_color, (val)=>{

      return `
      color: ${val} !important;
      `
   });
   cssHelper.add('div.shopengine-product-review #review_form #respond .comment-form .form-submit input#submit:hover', settings.shopengine_product_review_submit_button_hover_bg, (val)=>{

      return `
      background-color: ${val} !important;
      `
   });
   cssHelper.add('div.shopengine-product-review #review_form #respond .comment-form .form-submit input#submit:hover', settings.shopengine_product_review_submit_button_hover_border, (val)=>{

      return `
      border-color: ${val} !important;
      `
   });


   cssHelper.add('div.shopengine-product-review #review_form #respond .comment-form .form-submit input#submit', settings.shopengine_product_review_submit_button_border_select, (val)=>{

      return `
      border-style: ${val};
      `
   });
   cssHelper.add('div.shopengine-product-review #review_form #respond .comment-form .form-submit input#submit', settings.shopengine_product_review_submit_button_border_width,(val) =>{
         
      return (`
         border-width: ${val.top} ${val.right} ${val.bottom} ${val.left};
      `) 
   });   
   
   cssHelper.add('div.shopengine-product-review #review_form #respond .comment-form .form-submit input#submit', settings.shopengine_product_review_submit_button_border_radius,(val) =>{
         
      return (`
         border-radius: ${val.top} ${val.right} ${val.bottom} ${val.left};
      `) 
   });   
   
   cssHelper.add('div.shopengine-product-review #review_form #respond .comment-form .form-submit input#submit', settings.shopengine_product_review_submit_button_padding,(val) =>{
         
      return (`
         padding: ${val.top} ${val.right} ${val.bottom} ${val.left};
      `) 
   });

   cssHelper.add(`
   .shopengine-product-review,
   .shopengine-product-review #reviews a,
   .shopengine-product-review #reviews h2,
   .shopengine-product-review #reviews p,
   .shopengine-product-review #reviews input,
   .shopengine-product-review #reviews .meta,
   .shopengine-product-review #reviews span,
   .shopengine-product-review #reviews em,
   .shopengine-product-review #reviews time,
   .shopengine-product-review #reviews .submit,
   .shopengine-product-review #reviews .woocommerce-Reviews-title,
   .shopengine-product-review #reviews .comment-reply-title
   `, settings.shopengine_global_font_family,(val) =>{
         
      return (`
         font-family : ${val.family} !important;
      `) 
   });

  return cssHelper.get();
};


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

export { Style };

