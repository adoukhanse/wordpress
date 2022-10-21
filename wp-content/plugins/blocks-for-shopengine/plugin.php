<?php

namespace Shopengine_Gutenberg_Addon;

defined('ABSPATH') || exit;

class Plugin {

	private static $instances = [];

	public static function instance() {
		$class = get_called_class();

		if(!isset(self::$instances[$class])) {
			self::$instances[$class] = new $class();
		}

		return self::$instances[$class];
	}

	public function url($path = null) {
		return trailingslashit(plugin_dir_url(__FILE__)).($path ? $path : '');
	}

	public function dir() {
		return trailingslashit(plugin_dir_path(__FILE__));
	}

	public function init() {

		\Wpmet\Gutenova\BlockManager::instance()
		                           ->set_version(\Shopengine_Gutenberg_Addon::version() . time())
		                           ->set_textdomain('gutenova')
		                           ->set_block_root_path($this->dir() . 'blocks/')
		                           ->set_block_root_url($this->url() . 'blocks/');

		$conf = new \Shopengine_Gutenberg_Addon\Block_Config();

		foreach($conf->get_active_block_list() as $key => $item) {

			// if($conf->is_active($key)) {
				\Wpmet\Gutenova\BlockManager::instance()->set_block($key, $item);
			// }
		}

		\Wpmet\Gutenova\BlockManager::instance()->register_blocks();

		$tpl_type = '';
		$tpl_build_with = '';

		if(!empty($_GET['post']) && $_GET['action'] === 'edit') {

			$p_obj = get_post( sanitize_text_field( $_GET['post'] ) );

			if($p_obj->post_type === \ShopEngine\Core\Template_Cpt::TYPE && \ShopEngine\Core\Builders\Action::is_edit_with_gutenberg($p_obj->ID)) {

				$tpl_type = \ShopEngine\Utils\Helper::get_template_type($p_obj->ID);
				$tpl_build_with = \ShopEngine\Utils\Helper::get_template_builder_type($p_obj->ID);
			}
		}


		add_action('enqueue_block_editor_assets', function () use ($tpl_type, $tpl_build_with) {

			// For product gallery js support
			wp_enqueue_script('woocommerce-flex-slider', $this->url('assets/js/jquery.flexslider.min.js'), [], \Shopengine_Gutenberg_Addon::version(), true);
			wp_enqueue_script('woocommerce-single-product', $this->url('assets/js/single-product.min.js'), [], \Shopengine_Gutenberg_Addon::version(), true);
			
			wp_localize_script(
				'woocommerce-single-product',
				'wc_single_product_params',
				[
					"i18n_required_rating_text" => "Please select a rating", 
					"review_rating_required" => "yes", 
					"flexslider" => [
							"rtl" => false, 
							"animation" => "slide", 
							"smoothHeight" => true, 
							"directionNav" => false, 
							"controlNav" => "thumbnails", 
							"slideshow" => false, 
							"animationSpeed" => 500, 
							"animationLoop" => false, 
							"allowOneSlide" => false 
						], 
					"zoom_enabled" => "1", 
					"zoom_options" => [
							], 
					"photoswipe_enabled" => "1", 
					"photoswipe_options" => [
								"shareEl" => false, 
								"closeOnScroll" => false, 
								"history" => false, 
								"hideAnimationDuration" => 0, 
								"showAnimationDuration" => 0 
								], 
					"flexslider_enabled" => "1" 
				] 
			);
			// ./end For product gallery js support

			wp_enqueue_script('gutenova-blocks', $this->url('assets/js/blocks/blocks.js'), [], \Shopengine_Gutenberg_Addon::version(), true);

			wp_localize_script(
				'gutenova-blocks',
				'tplInfoObj',
				[
					'tpl_type' => $tpl_type,
					'tpl_build_with' => $tpl_build_with,
				]
			);

			// wp social plugin frontend css
			wp_enqueue_style('xs-front-style', $this->url('assets/css/wp-social-frontend.css'), [], \Shopengine_Gutenberg_Addon::version());
			wp_enqueue_style('gutenova-blocks', $this->url('assets/css/gutenova.css'), [], \Shopengine_Gutenberg_Addon::version());
		});

		add_action('enqueue_block_assets', function () {
			wp_enqueue_script('swiper', $this->url('assets/js/swiper.js'), [], \Shopengine_Gutenberg_Addon::version(), true);
			wp_enqueue_script('gutenova-block-scripts', $this->url('assets/js/blocks/block-scripts.js'), [], \Shopengine_Gutenberg_Addon::version(), true);
			wp_enqueue_style('gutenova-fontawesome', $this->url( 'assets/css/all.min.css'), [], \Shopengine_Gutenberg_Addon::version());
			wp_enqueue_style('shopengine-icon', $this->url('assets/css/shopengine-icon.css'), [], \Shopengine_Gutenberg_Addon::version());
			wp_enqueue_style('gutenova-global', $this->url('assets/css/gutenova-global.css'), [], \Shopengine_Gutenberg_Addon::version());

			wp_enqueue_style('shopengine-widget-reset', $this->url('assets/css/normalize.css'),  null, \ShopEngine::version());
			wp_enqueue_style('shopengine-widget-frontend', $this->url( 'assets/css/widget-frontend.css'), null, \ShopEngine::version());
			
		});


	}
}
