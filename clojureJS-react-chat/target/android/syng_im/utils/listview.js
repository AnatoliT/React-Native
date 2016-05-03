// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.utils.listview');
goog.require('cljs.core');
goog.require('syng_im.components.realm');
syng_im.utils.listview.to_datasource = (function syng_im$utils$listview$to_datasource(items){
return (new React.ListView.DataSource(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rowHasChanged","rowHasChanged",1384698654),cljs.core.not_EQ_], null)))).cloneWithRows(cljs.core.clj__GT_js.call(null,items));
});
syng_im.utils.listview.to_realm_datasource = (function syng_im$utils$listview$to_realm_datasource(items){
return (new RealmReactNative.ListView.DataSource(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rowHasChanged","rowHasChanged",1384698654),cljs.core.not_EQ_], null)))).cloneWithRows(cljs.core.clj__GT_js.call(null,items));
});

//# sourceMappingURL=listview.js.map