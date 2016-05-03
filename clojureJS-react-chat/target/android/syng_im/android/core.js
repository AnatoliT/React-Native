// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.android.core');
goog.require('cljs.core');
goog.require('syng_im.utils.logging');
goog.require('syng_im.components.chat');
goog.require('cljs.core');
goog.require('syng_im.navigation');
goog.require('syng_im.components.chats.new_group');
goog.require('syng_im.subs');
goog.require('reagent.core');
goog.require('syng_im.utils.utils');
goog.require('syng_im.handlers');
goog.require('syng_im.components.chat.new_participants');
goog.require('syng_im.components.contact_list.contact_list');
goog.require('syng_im.utils.encryption');
goog.require('syng_im.components.react');
goog.require('syng_im.components.chat.remove_participants');
goog.require('syng_im.components.chats.chats_list');
goog.require('re_frame.core');
goog.require('syng_im.components.chatmenu.profile');
syng_im.android.core.back_button_handler = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav","nav",719540477),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null));
syng_im.android.core.init_back_button_handler_BANG_ = (function syng_im$android$core$init_back_button_handler_BANG_(nav){
var handler = cljs.core.deref.call(null,syng_im.android.core.back_button_handler);
if(cljs.core._EQ_.call(null,nav,new cljs.core.Keyword(null,"nav","nav",719540477).cljs$core$IFn$_invoke$arity$1(handler))){
return null;
} else {
React.BackAndroid.removeEventListener("hardwareBackPress",new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(handler));

var new_listener = ((function (handler){
return (function (){
var _STAR_nav_render_STAR_22714 = syng_im.navigation._STAR_nav_render_STAR_;
syng_im.navigation._STAR_nav_render_STAR_ = false;

try{if(((1) < nav.getCurrentRoutes().length)){
syng_im.navigation.nav_pop.call(null,nav);

return true;
} else {
return null;
}
}finally {syng_im.navigation._STAR_nav_render_STAR_ = _STAR_nav_render_STAR_22714;
}});})(handler))
;
cljs.core.reset_BANG_.call(null,syng_im.android.core.back_button_handler,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav","nav",719540477),nav,new cljs.core.Keyword(null,"handler","handler",-195596612),new_listener], null));

return React.BackAndroid.addEventListener("hardwareBackPress",new_listener);
}
});
syng_im.android.core.app_root = (function syng_im$android$core$app_root(){
var signed_up_atom = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"signed-up","signed-up",1759593449)], null));
return ((function (signed_up_atom){
return (function (){
var signed_up = cljs.core.deref.call(null,signed_up_atom);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.navigator,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial-route","initial-route",-622635808),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view-id","view-id",1118263032),new cljs.core.Keyword(null,"chat-list","chat-list",766325461)], null)),new cljs.core.Keyword(null,"render-scene","render-scene",-471969412),((function (signed_up,signed_up_atom){
return (function (route,nav){
syng_im.utils.logging.debug.call(null,"route",route);

if(cljs.core.truth_(signed_up)){
var map__22718 = cljs.core.js__GT_clj.call(null,route,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var map__22718__$1 = ((((!((map__22718 == null)))?((((map__22718.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22718.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22718):map__22718);
var view_id = cljs.core.get.call(null,map__22718__$1,new cljs.core.Keyword(null,"view-id","view-id",1118263032));
var view_id__$1 = cljs.core.keyword.call(null,view_id);
syng_im.android.core.init_back_button_handler_BANG_.call(null,nav);

var G__22720 = (((view_id__$1 instanceof cljs.core.Keyword))?view_id__$1.fqn:null);
switch (G__22720) {
case "add-participants":
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.chat.new_participants.new_participants,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigator","navigator",2050004181),nav], null)], null));

break;
case "remove-participants":
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.chat.remove_participants.remove_participants,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigator","navigator",2050004181),nav], null)], null));

break;
case "chat-list":
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.chats.chats_list.chats_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigator","navigator",2050004181),nav], null)], null));

break;
case "new-group":
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.chats.new_group.new_group,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigator","navigator",2050004181),nav], null)], null));

break;
case "contact-list":
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.contact_list.contact_list.contact_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigator","navigator",2050004181),nav], null)], null));

break;
case "profile":
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.chatmenu.profile.profile,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigator","navigator",2050004181),nav], null)], null));

break;
case "chat":
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.chat.chat,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigator","navigator",2050004181),nav], null)], null));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(view_id__$1)].join('')));

}
} else {
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.chat.chat,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigator","navigator",2050004181),nav], null)], null));
}

});})(signed_up,signed_up_atom))
], null)], null);
});
;})(signed_up_atom))
});
syng_im.android.core.init = (function syng_im$android$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-crypt","initialize-crypt",2063485894)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-protocol","initialize-protocol",804729880)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-user-phone-number","load-user-phone-number",1733691251)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-syng-contacts","load-syng-contacts",-950529481)], null));

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-console-chat","init-console-chat",-29468146)], null));

return syng_im.components.react.app_registry.registerComponent("SyngIm",(function (){
return reagent.core.reactify_component.call(null,syng_im.android.core.app_root);
}));
});

//# sourceMappingURL=core.js.map