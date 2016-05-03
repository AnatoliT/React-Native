// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.components.chats.new_group_contact');
goog.require('cljs.core');
goog.require('syng_im.resources');
goog.require('syng_im.utils.logging');
goog.require('reagent.core');
goog.require('syng_im.components.item_checkbox');
goog.require('syng_im.components.react');
goog.require('re_frame.core');
goog.require('syng_im.components.contact_list.contact_inner');
syng_im.components.chats.new_group_contact.new_group_contact = (function syng_im$components$chats$new_group_contact$new_group_contact(p__21483,navigator){
var map__21486 = p__21483;
var map__21486__$1 = ((((!((map__21486 == null)))?((((map__21486.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21486.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21486):map__21486);
var contact = map__21486__$1;
var whisper_identity = cljs.core.get.call(null,map__21486__$1,new cljs.core.Keyword(null,"whisper-identity","whisper-identity",607101529));
var checked = reagent.core.atom.call(null,false);
return ((function (checked,map__21486,map__21486__$1,contact,whisper_identity){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"row",new cljs.core.Keyword(null,"height","height",1025178622),(56)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.item_checkbox.item_checkbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onToggle","onToggle",1288160565),((function (checked,map__21486,map__21486__$1,contact,whisper_identity){
return (function (checked_QMARK_){
cljs.core.reset_BANG_.call(null,checked,checked_QMARK_);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-for-new-group","select-for-new-group",-242285908),whisper_identity,checked_QMARK_], null));
});})(checked,map__21486,map__21486__$1,contact,whisper_identity))
,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref.call(null,checked),new cljs.core.Keyword(null,"size","size",1098693007),(30)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.contact_list.contact_inner.contact_inner_view,contact], null)], null);
});
;})(checked,map__21486,map__21486__$1,contact,whisper_identity))
});

//# sourceMappingURL=new_group_contact.js.map