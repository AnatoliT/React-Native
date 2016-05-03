// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.components.contact_list.contact_list');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('syng_im.components.react');
goog.require('syng_im.components.contact_list.contact');
goog.require('syng_im.resources');
goog.require('syng_im.utils.logging');
syng_im.components.contact_list.contact_list.render_row = (function syng_im$components$contact_list$contact_list$render_row(navigator,row,section_id,row_id){
return syng_im.components.react.list_item.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.contact_list.contact.contact_view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"navigator","navigator",2050004181),navigator,new cljs.core.Keyword(null,"contact","contact",609093372),cljs.core.js__GT_clj.call(null,row,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)], null)], null));
});
syng_im.components.contact_list.contact_list.get_data_source = (function syng_im$components$contact_list$contact_list$get_data_source(contacts){
return (new React.ListView.DataSource(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rowHasChanged","rowHasChanged",1384698654),(function (row1,row2){
return cljs.core.not_EQ_.call(null,row1,row2);
})], null)))).cloneWithRows(cljs.core.clj__GT_js.call(null,contacts));
});
syng_im.components.contact_list.contact_list.contact_list = (function syng_im$components$contact_list$contact_list$contact_list(p__21541){
var map__21544 = p__21541;
var map__21544__$1 = ((((!((map__21544 == null)))?((((map__21544.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21544.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21544):map__21544);
var navigator = cljs.core.get.call(null,map__21544__$1,new cljs.core.Keyword(null,"navigator","navigator",2050004181));
var contacts = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-contacts","get-contacts",622383178)], null));
return ((function (contacts,map__21544,map__21544__$1,navigator){
return (function (){
var contacts_ds = syng_im.components.contact_list.contact_list.get_data_source.call(null,cljs.core.deref.call(null,contacts));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"white"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.toolbar_android,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"logo","logo",1237980263),syng_im.resources.logo_icon,new cljs.core.Keyword(null,"title","title",636505583),"Contacts",new cljs.core.Keyword(null,"titleColor","titleColor",608094610),"#4A5258",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"white",new cljs.core.Keyword(null,"height","height",1025178622),(56),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(2)], null)], null)], null),(cljs.core.truth_(contacts_ds)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.list_view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dataSource","dataSource",-178401132),contacts_ds,new cljs.core.Keyword(null,"renderRow","renderRow",239389977),cljs.core.partial.call(null,syng_im.components.contact_list.contact_list.render_row,navigator),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"white"], null)], null)], null):null)], null);
});
;})(contacts,map__21544,map__21544__$1,navigator))
});

//# sourceMappingURL=contact_list.js.map