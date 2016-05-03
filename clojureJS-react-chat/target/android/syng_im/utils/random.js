// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.utils.random');
goog.require('cljs.core');
goog.require('cljsjs.chance');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
syng_im.utils.random.timestamp = (function syng_im$utils$random$timestamp(){
return (new Date()).getTime();
});
syng_im.utils.random.id = (function syng_im$utils$random$id(){
return [cljs.core.str(syng_im.utils.random.timestamp.call(null)),cljs.core.str("-"),cljs.core.str(chance.guid())].join('');
});

//# sourceMappingURL=random.js.map