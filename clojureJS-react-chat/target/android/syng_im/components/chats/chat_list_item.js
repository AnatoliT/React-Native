// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.components.chats.chat_list_item');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('syng_im.components.react');
goog.require('syng_im.components.styles');
goog.require('syng_im.components.chats.chat_list_item_inner');
goog.require('syng_im.utils.logging');
goog.require('syng_im.resources');
syng_im.components.chats.chat_list_item.chat_list_item = (function syng_im$components$chats$chat_list_item$chat_list_item(chat_obj,navigator){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.touchable_highlight,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-chat","show-chat",-1372456583),(chat_obj["chat-id"]),navigator,new cljs.core.Keyword(null,"push","push",799791267)], null));
}),new cljs.core.Keyword(null,"underlay-color","underlay-color",-865656052),new cljs.core.Keyword(null,"transparent","transparent",-2073609949)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.view,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.chats.chat_list_item_inner.chat_list_item_inner_view,cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,chat_obj,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"photo-path","photo-path",1024562482),null,new cljs.core.Keyword(null,"delivery-status","delivery-status",-2013922127),new cljs.core.Keyword(null,"seen","seen",-518999789),new cljs.core.Keyword(null,"new-messages-count","new-messages-count",104345306),(3),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),"13:54",new cljs.core.Keyword(null,"online","online",868574801),true], null))], null)], null)], null);
});

//# sourceMappingURL=chat_list_item.js.map