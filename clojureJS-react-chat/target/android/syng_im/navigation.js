// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.navigation');
goog.require('cljs.core');
/**
 * Flag to suppress navigator re-renders from outside om when pushing/popping.
 */
syng_im.navigation._STAR_nav_render_STAR_ = true;
syng_im.navigation.nav_pop = (function syng_im$navigation$nav_pop(nav){
var _STAR_nav_render_STAR_18623 = syng_im.navigation._STAR_nav_render_STAR_;
syng_im.navigation._STAR_nav_render_STAR_ = true;

try{return nav.pop();
}finally {syng_im.navigation._STAR_nav_render_STAR_ = _STAR_nav_render_STAR_18623;
}});
syng_im.navigation.nav_push = (function syng_im$navigation$nav_push(nav,route){
var _STAR_nav_render_STAR_18625 = syng_im.navigation._STAR_nav_render_STAR_;
syng_im.navigation._STAR_nav_render_STAR_ = true;

try{return nav.push(cljs.core.clj__GT_js.call(null,route));
}finally {syng_im.navigation._STAR_nav_render_STAR_ = _STAR_nav_render_STAR_18625;
}});
syng_im.navigation.nav_replace = (function syng_im$navigation$nav_replace(nav,route){
var _STAR_nav_render_STAR_18627 = syng_im.navigation._STAR_nav_render_STAR_;
syng_im.navigation._STAR_nav_render_STAR_ = true;

try{return nav.replace(cljs.core.clj__GT_js.call(null,route));
}finally {syng_im.navigation._STAR_nav_render_STAR_ = _STAR_nav_render_STAR_18627;
}});

//# sourceMappingURL=navigation.js.map