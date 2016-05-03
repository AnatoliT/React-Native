// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.persistence.realm_queries');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('syng_im.utils.types');
syng_im.persistence.realm_queries.include_query = (function syng_im$persistence$realm_queries$include_query(field_name,values){
return clojure.string.join.call(null," || ",cljs.core.map.call(null,(function (val){
return [cljs.core.str(syng_im.utils.types.to_string.call(null,field_name)),cljs.core.str(" == "),cljs.core.str(((typeof val === 'string')?[cljs.core.str("'"),cljs.core.str(val),cljs.core.str("'")].join(''):val))].join('');
}),values));
});
syng_im.persistence.realm_queries.exclude_query = (function syng_im$persistence$realm_queries$exclude_query(field_name,values){
return clojure.string.join.call(null," && ",cljs.core.map.call(null,(function (val){
return [cljs.core.str(syng_im.utils.types.to_string.call(null,field_name)),cljs.core.str(" != "),cljs.core.str(((typeof val === 'string')?[cljs.core.str("'"),cljs.core.str(val),cljs.core.str("'")].join(''):val))].join('');
}),values));
});

//# sourceMappingURL=realm_queries.js.map