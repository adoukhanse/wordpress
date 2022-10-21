<?php

namespace Shopengine_Gutenberg_Addon;


class Block_Config {

	public function get_active_block_list() {

		return $this->block_list();
	}

	public function is_active($block_key) {

		//todo - key must be same in both gutenberg and shopengine

		// return \ShopEngine\Core\Register\Widget_List::instance()->is_widget_active($block_key);
      return true;
	}

	private function block_list() {

		return [
			'cart-table' => [
				'title'         => 'Cart Table',
				'icon'          => 'editor-table',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'woocommerce', 'shopengine', 'cart'
				],
				'territory' => ['cart', 'empty_cart']
			],

			'cart-totals' => [
				'title'         => 'Cart Totals',
				'icon'          => 'universal-access-alt',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'woocommerce', 'shopengine', 'cart total'
				],
				'territory' => ['cart', 'empty_cart']
			],

			'checkout-payment' => [
				'title'         => 'Checkout Payment',
				'icon'          => 'clipboard',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'checkout payment', 'checkout', 'shopengine', 'payment method', 'payment'
				],
				'territory' => ['checkout', 'quick_checkout']
			],

			'checkout-form-billing'	=> [
				'title'         => 'Checkout Form Billing',
				'icon'          => 'welcome-widgets-menus',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'woocommerce', 'shopengine', 'checkout', 'checkout form billing'
				],
				'territory' => ['checkout', 'quick_checkout']
			],

			'checkout-form-additional'	=> [
				'title'         => 'Checkout Form Additional',
				'icon'          => 'menu',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'woocommerce', 'shopengine', 'checkout', 'checkout form additional'
				],
				'territory' => ['checkout', 'quick_checkout']
			],

			'return-to-shop'	=> [
				'title'         => 'Return To Shop',
				'icon'          => 'undo',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'return', 'return to shop', 'shop', 'shopengine'
				],
				'territory' => ['cart', 'single', 'checkout', 'quick_checkout', 'empty_cart']
			],

			'filter-orderby'	=> [
				'title'         => 'Order By Filter',
				'icon'          => 'universal-access-alt',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'woocommerce', 'shop', 'store', 'title', 'heading', 'product'
				],
				'territory' => ['shop', 'archive']
			],

			'filter-products-per-page'	=> [
				'title'         => 'Products Per Page Filter',
				'icon'          => 'universal-access-alt',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'woocommerce', 'shop', 'store', 'products per page', 'product'
				],
				'territory' => ['shop', 'archive']
			],

			'product-title'	=> [
				'title'         => 'Product Title',
				'icon'          => 'universal-access-alt',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'woocommerce', 'shop', 'store', 'title', 'heading', 'product'
				],
				'territory' => ['single', 'quick_view', 'quick_checkout']
			],

			'additional-information' => [
				'title'         => 'Additional Information',
				'icon'          => 'universal-access-alt',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'shopengine', 'woocommerce', 'additional information', 'single product'
				],
				'territory' => ['single', 'quick_view', 'account_orders_view', 'quick_checkout']
			],

			'product-categories' => [
				'title'         => 'Product Categories',
				'icon'          => 'universal-access-alt',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'woocommerce', 'shopengine', 'category', 'product categories'
				],
				'territory' => ['single']
			],

			'product-excerpt'	=> [
				'title'         => 'Product Excerpt',
				'icon'          => 'universal-access-alt',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'woocommerce', 'shopengine', 'excerpt', 'product excerpt'
				],
				'territory' => ['single', 'quick_checkout', 'quick_view']
			],

			'product-review'	=> [
				'title'         => 'Product Review',
				'icon'          => 'universal-access-alt',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'shopengine', 'woocommerce', 'product reviews', 'product review'
				],
				'territory' => ['single', 'quick_view', 'quick_checkout']
			],

			'product-share'	=> [
				'title'         => 'Product Share',
				'icon'          => 'universal-access-alt',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'woocommerce', 'shopengine', 'share', 'social share'
				],
				'territory' => ['single', 'quick_view', 'quick_checkout']
			],

			'product-stock'	=> [
				'title'         => 'Product Stock',
				'icon'          => 'universal-access-alt',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'woocommerce', 'stock', 'shopengine'
				],
				'territory' => ['single', 'quick_view', 'quick_checkout']
			],

			'archive-description'	=> [
				'title'         => 'Archive Description',
				'icon'          => 'smiley',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'woocommerce', 'shopengine', 'archive', 'archive products'
				],
				'territory' => ['shop', 'archive']
			],

			'archive-result-count'	=> [
				'title'         => 'Archive Result Count',
				'icon'          => 'smiley',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'woocommerce', 'title', 'archive', 'archive result count', 'result count'
				],
				'territory' => ['shop', 'archive']
			],

			'archive-title'	=> [
				'title'         => 'Archive Title',
				'icon'          => 'smiley',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'woocommerce', 'title', 'archive', 'archive title', 'page title'
				],
				'territory' => ['shop', 'archive']
			],

			'notice'	=> [
				'title'         => 'Notice',
				'icon'          => 'bell',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'woocommerce', 'shopengine', 'checkout', 'notice', 'single'
				],
				'territory' => ['single', 'checkout', 'quick_checkout']
			],

			'product-category-lists'	=> [
				'title'         => 'Product Category List',
				'icon'          => 'smiley',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'woocommerce', 'shopengine', 'category', 'product category lists'
				],
				'territory' => []
			],

			'product-rating'	=> [
				'title'         => 'Product Rating',
				'icon'          => 'smiley',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'woocommerce', 'rating', 'product', 'single product', 'review', 'comments', 'stars'
				],
				'territory' => ['single', 'quick_view', 'quick_checkout']
			],

			'product-tags'	=>  [
				'title'         => 'Product Tags',
				'icon'          => 'tag',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'woocommerce', 'shopengine', 'tags', 'product tags'
				],
				'territory' => ['single', 'quick_view', 'quick_checkout']
			],

			'product-meta'	=>  [
				'title'         => 'Product Meta',
				'icon'          => 'admin-generic',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'woocommerce', 'shopengine', 'meta', 'product meta', 'Single product meta'
				],
				'territory' => ['single', 'quick_view', 'quick_checkout']
			],

			'recently-viewed-products'	=>  [
				'title'         => 'Recently Viewed Products',
				'icon'          => 'universal-access-alt',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'woocommerce', 'recently', 'viewed', 'product', 'single product'
				],
				'territory' => []
			],

			'view-single-product'	=>  [
				'title'         => 'View Single Product',
				'icon'          => 'universal-access-alt',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'woocommerce', 'product', 'single', 'view single product', 'shopengine'
				],
				'territory' => ['quick_view']
			],

			'checkout-form-shipping'	=>  [
				'title'         => 'Checkout Form Shipping',
				'icon'          => 'universal-access-alt',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'checkout', 'shopengine', 'checkout form shipping', 'form', 'shopengine'
				],
				'territory' => ['checkout', 'quick_checkout']
			],

			'checkout-review-order'	=>  [
				'title'         => 'Checkout Review Order',
				'icon'          => 'universal-access-alt',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'checkout', 'shopengine', 'checkout review orders', 'review orders'
				],
				'territory' => ['checkout', 'quick_checkout']
			],

			'checkout-shipping-methods'	=>  [
				'title'         => 'Checkout Shipping Methods',
				'icon'          => 'universal-access-alt',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'checkout', 'shopengine', 'checkout shipping method', 'shipping method'
				],
				'territory' => ['checkout', 'quick_checkout']
			],

			'add-to-cart'	=>  [
				'title'         => 'Add To Cart',
				'icon'          => 'universal-access-alt',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'woocommerce', 'shopengine', 'cart', 'add to cart'
				],
				'territory' => ['single', 'quick_view', 'quick_checkout']
			],

			'breadcrumbs'	=>  [
				'title'         => 'Breadcrumbs',
				'icon'          => 'universal-access-alt',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'woocommerce', 'shopengine', 'Breadcrumbs'
				],
				'territory' => ['single', 'quick_view', 'quick_checkout']
			],

			'product-price'	=>  [
				'title'         => 'Product Price',
				'icon'          => 'universal-access-alt',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'shopengine', 'price', 'product', 'single product'
				],
				'territory' => ['single', 'quick_view', 'quick_checkout']
			],

			'product-image'	=>  [
				'title'         => 'Product Image',
				'icon'          => 'universal-access-alt',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'woocommerce', 'shop', 'shopengine', 'image', 'product', 'gallery', 'lightbox'
				],
				'territory' => ['single', 'quick_view', 'quick_checkout']
			],

			'advanced-search'	=>  [
				'title'         => 'Advanced Search',
				'icon'          => 'universal-access-alt',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'woocommerce', 'shop', 'archive', 'advanced search', 'search', 'advanced', 'shopengine'
				],
				'territory' => []
			],

			'product-list'	=>  [
				'title'         => 'Product List',
				'icon'          => 'universal-access-alt',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'woocommerce', 'shopengine', 'product', 'product list'
				],
				'territory' => []
			],

			'product-tabs'	=>  [
				'title'         => 'Product Tabs',
				'icon'          => 'universal-access-alt',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'shopengine', 'woocommerce', 'product tabs', 'tabs'
				],
				'territory' => ['single', 'quick_view', 'quick_checkout']
			],

			'checkout-coupon-form'	=>  [
				'title'         => 'Coupon Form',
				'icon'          => 'tickets',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'shopengine', 'woocommerce', 'coupon', 'coupon form'
				],
				'territory' => ['checkout', 'cart', 'quick_checkout']
			],

			'filterable-product-list'	=>  [
				'title'         => 'Filterable Product List',
				'icon'          => 'smiley',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'woocommerce', 'filter', 'filterable product list', 'product list', 'list', 'shopengine'
				],
				'territory' => []
			],

			'archive-products'	=>  [
				'title'         => 'Archive Products',
				'icon'          => 'universal-access-alt',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'woocommerce', 'shopengine', 'archive', 'archive products'
				],
				'territory' => ['shop', 'archive']
			],

			'archive-view-mode'	=>  [
				'title'         => 'Archive View Mode',
				'icon'          => 'universal-access-alt',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'woocommerce', 'view', 'view mode', 'archive view mode', 'shopengine'
				],
				'territory' => ['shop', 'archive']
			],

			'cross-sells'	=>  [
				'title'         => 'Cross Sells',
				'icon'          => 'universal-access-alt',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'woocommerce', 'shop', 'Cross Sells', 'cart', 'product', 'table', 'tabs', 'Sells'
				],
				'territory' => ['cart', 'quick_checkout']
			],

			'deal-products'	=>  [
				'title'         => 'Deal Products',
				'icon'          => 'universal-access-alt',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'woocommerce', 'shopengine', 'deal products', 'deal', 'product'
				],
				'territory' => []
			],

			'up-sells'	=>  [
				'title'         => 'Product Upsells',
				'icon'          => 'universal-access-alt',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'woocommerce', 'upsells', 'product', 'single product'
				],
				'territory' => ['single', 'quick_view', 'quick_checkout']
			],

			'related'	=>  [
				'title'         => 'Related Products',
				'icon'          => 'universal-access-alt',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'woocommerce', 'related', 'product', 'single product'
				],
				'territory' => ['single', 'quick_view', 'quick_checkout']
			],

			'product-description'	=>  [
				'title'         => 'Product Description',
				'icon'          => 'universal-access-alt',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'woocommerce', 'shopengine', 'description', 'content'
				],
				'territory' => ['single', 'quick_view', 'quick_checkout']
			],

			'product-sku'	=>  [
				'title'         => 'Product Sku',
				'icon'          => 'universal-access-alt',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'woocommerce', 'shopengine', 'sku', 'product sku'
				],
				'territory' => ['single', 'quick_view', 'quick_checkout']
			],

         //gutenova extra Widget

          'heading' =>[
            'title'         => 'Shopengine Heading',
				'icon'          => 'universal-access-alt',
				'server_render' => true,
				'category'      => 'design',
				'keywords'      => [
					'heading', 'shopengine', 'title'
				],
            'territory' => []
          ]
		];
	}
}

