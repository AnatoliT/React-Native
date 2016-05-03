// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.components.contact_list.contact');
goog.require('cljs.core');
goog.require('syng_im.components.react');
goog.require('syng_im.resources');
goog.require('syng_im.navigation');
goog.require('syng_im.components.contact_list.contact_inner');
syng_im.components.contact_list.contact.show_chat = (function syng_im$components$contact_list$contact$show_chat(navigator,whisper_identity){
return syng_im.navigation.nav_push.call(null,navigator,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view-id","view-id",1118263032),new cljs.core.Keyword(null,"chat","chat",-518268339)], null));
});
syng_im.components.contact_list.contact.contact_view = (function syng_im$components$contact_list$contact$contact_view(p__21530){
var map__21535 = p__21530;
var map__21535__$1 = ((((!((map__21535 == null)))?((((map__21535.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21535.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21535):map__21535);
var navigator = cljs.core.get.call(null,map__21535__$1,new cljs.core.Keyword(null,"navigator","navigator",2050004181));
var contact = cljs.core.get.call(null,map__21535__$1,new cljs.core.Keyword(null,"contact","contact",609093372));
var map__21537 = contact;
var map__21537__$1 = ((((!((map__21537 == null)))?((((map__21537.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21537.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21537):map__21537);
var whisper_identity = cljs.core.get.call(null,map__21537__$1,new cljs.core.Keyword(null,"whisper-identity","whisper-identity",607101529));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.touchable_highlight,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onPress","onPress",-1383694171),((function (map__21537,map__21537__$1,whisper_identity,map__21535,map__21535__$1,navigator,contact){
return (function (){
return syng_im.components.contact_list.contact.show_chat.call(null,navigator,whisper_identity);
});})(map__21537,map__21537__$1,whisper_identity,map__21535,map__21535__$1,navigator,contact))
,new cljs.core.Keyword(null,"underlay-color","underlay-color",-865656052),new cljs.core.Keyword(null,"transparent","transparent",-2073609949)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.view,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.contact_list.contact_inner.contact_inner_view,contact], null)], null)], null);
});

//# sourceMappingURL=contact.js.map