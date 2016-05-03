// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.components.chat.new_participants');
goog.require('cljs.core');
goog.require('syng_im.resources');
goog.require('syng_im.navigation');
goog.require('reagent.core');
goog.require('syng_im.components.realm');
goog.require('syng_im.components.chats.new_participant_contact');
goog.require('syng_im.components.react');
goog.require('re_frame.core');
goog.require('syng_im.utils.listview');
syng_im.components.chat.new_participants.new_participants = (function syng_im$components$chat$new_participants$new_participants(p__21523){
var map__21526 = p__21523;
var map__21526__$1 = ((((!((map__21526 == null)))?((((map__21526.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21526.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21526):map__21526);
var navigator = cljs.core.get.call(null,map__21526__$1,new cljs.core.Keyword(null,"navigator","navigator",2050004181));
var contacts = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-new-contacts","all-new-contacts",1375589075)], null));
return ((function (contacts,map__21526,map__21526__$1,navigator){
return (function (){
var contacts_ds = syng_im.utils.listview.to_realm_datasource.call(null,cljs.core.deref.call(null,contacts));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"white"], null)], null),(cljs.core.truth_(syng_im.components.react.android_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.toolbar_android,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"logo","logo",1237980263),syng_im.resources.logo_icon,new cljs.core.Keyword(null,"title","title",636505583),"Add Participants",new cljs.core.Keyword(null,"titleColor","titleColor",608094610),"#4A5258",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"white",new cljs.core.Keyword(null,"height","height",1025178622),(56),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(2)], null),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Add",new cljs.core.Keyword(null,"icon","icon",1679606541),syng_im.resources.v,new cljs.core.Keyword(null,"show","show",-576705889),"always"], null)], null),new cljs.core.Keyword(null,"onActionSelected","onActionSelected",-884451200),((function (contacts_ds,contacts,map__21526,map__21526__$1,navigator){
return (function (position){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-new-participants","add-new-participants",-1435566978),navigator], null));
});})(contacts_ds,contacts,map__21526,map__21526__$1,navigator))
,new cljs.core.Keyword(null,"navIcon","navIcon",-1491295906),syng_im.resources.nav_back_icon,new cljs.core.Keyword(null,"onIconClicked","onIconClicked",2049778180),((function (contacts_ds,contacts,map__21526,map__21526__$1,navigator){
return (function (){
return syng_im.navigation.nav_pop.call(null,navigator);
});})(contacts_ds,contacts,map__21526,map__21526__$1,navigator))
], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.realm.list_view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dataSource","dataSource",-178401132),contacts_ds,new cljs.core.Keyword(null,"renderRow","renderRow",239389977),((function (contacts_ds,contacts,map__21526,map__21526__$1,navigator){
return (function (row,section_id,row_id){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.chats.new_participant_contact.new_participant_contact,cljs.core.js__GT_clj.call(null,row,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),navigator], null));
});})(contacts_ds,contacts,map__21526,map__21526__$1,navigator))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"white"], null)], null)], null)], null);
});
;})(contacts,map__21526,map__21526__$1,navigator))
});

//# sourceMappingURL=new_participants.js.map