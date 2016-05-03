// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.components.chats.new_participant_contact');
goog.require('cljs.core');
goog.require('syng_im.resources');
goog.require('syng_im.utils.logging');
goog.require('reagent.core');
goog.require('syng_im.components.item_checkbox');
goog.require('syng_im.components.react');
goog.require('re_frame.core');
goog.require('syng_im.components.contact_list.contact_inner');
syng_im.components.chats.new_participant_contact.new_participant_contact = (function syng_im$components$chats$new_participant_contact$new_participant_contact(p__21516,navigator){
var map__21519 = p__21516;
var map__21519__$1 = ((((!((map__21519 == null)))?((((map__21519.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21519.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21519):map__21519);
var contact = map__21519__$1;
var whisper_identity = cljs.core.get.call(null,map__21519__$1,new cljs.core.Keyword(null,"whisper-identity","whisper-identity",607101529));
var checked = reagent.core.atom.call(null,false);
return ((function (checked,map__21519,map__21519__$1,contact,whisper_identity){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"row",new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),(5),new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),(5),new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),(15),new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),(15),new cljs.core.Keyword(null,"height","height",1025178622),(75)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.item_checkbox.item_checkbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onToggle","onToggle",1288160565),((function (checked,map__21519,map__21519__$1,contact,whisper_identity){
return (function (checked_QMARK_){
cljs.core.reset_BANG_.call(null,checked,checked_QMARK_);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-new-participant","select-new-participant",1303166200),whisper_identity,checked_QMARK_], null));
});})(checked,map__21519,map__21519__$1,contact,whisper_identity))
,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref.call(null,checked),new cljs.core.Keyword(null,"size","size",1098693007),(30)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.contact_list.contact_inner.contact_inner_view,contact], null)], null);
});
;})(checked,map__21519,map__21519__$1,contact,whisper_identity))
});

//# sourceMappingURL=new_participant_contact.js.map