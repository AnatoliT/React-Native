// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.components.chat');
goog.require('cljs.core');
goog.require('syng_im.resources');
goog.require('syng_im.components.invertible_scroll_view');
goog.require('syng_im.constants');
goog.require('syng_im.utils.logging');
goog.require('syng_im.components.chat.chat_message');
goog.require('syng_im.navigation');
goog.require('reagent.core');
goog.require('syng_im.components.styles');
goog.require('syng_im.components.chatmenu.chat_menu');
goog.require('syng_im.components.chat.chat_message_new');
goog.require('clojure.string');
goog.require('syng_im.components.realm');
goog.require('syng_im.components.react');
goog.require('re_frame.core');
goog.require('syng_im.utils.listview');
syng_im.components.chat.contacts_by_identity = (function syng_im$components$chat$contacts_by_identity(contacts){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__22589){
var map__22590 = p__22589;
var map__22590__$1 = ((((!((map__22590 == null)))?((((map__22590.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22590.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22590):map__22590);
var contact = map__22590__$1;
var identity = cljs.core.get.call(null,map__22590__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [identity,contact], null);
}),contacts));
});
syng_im.components.chat.add_msg_color = (function syng_im$components$chat$add_msg_color(p__22592,contact_by_identity){
var map__22597 = p__22592;
var map__22597__$1 = ((((!((map__22597 == null)))?((((map__22597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22597):map__22597);
var msg = map__22597__$1;
var from = cljs.core.get.call(null,map__22597__$1,new cljs.core.Keyword(null,"from","from",1815293044));
if(cljs.core._EQ_.call(null,"system",from)){
return cljs.core.assoc.call(null,msg,new cljs.core.Keyword(null,"text-color","text-color",1728708298),"#4A5258",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#D3EEEF");
} else {
var map__22599 = cljs.core.get.call(null,contact_by_identity,from);
var map__22599__$1 = ((((!((map__22599 == null)))?((((map__22599.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22599.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22599):map__22599);
var text_color = cljs.core.get.call(null,map__22599__$1,new cljs.core.Keyword(null,"text-color","text-color",1728708298));
var background_color = cljs.core.get.call(null,map__22599__$1,new cljs.core.Keyword(null,"background-color","background-color",570434026));
return cljs.core.assoc.call(null,msg,new cljs.core.Keyword(null,"text-color","text-color",1728708298),text_color,new cljs.core.Keyword(null,"background-color","background-color",570434026),background_color);
}
});
syng_im.components.chat.chat_photo = (function syng_im$components$chat$chat_photo(p__22601){
var map__22604 = p__22601;
var map__22604__$1 = ((((!((map__22604 == null)))?((((map__22604.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22604.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22604):map__22604);
var photo_path = cljs.core.get.call(null,map__22604__$1,new cljs.core.Keyword(null,"photo-path","photo-path",1024562482));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),(50)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.image,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),((clojure.string.blank_QMARK_.call(null,photo_path))?syng_im.resources.user_no_photo:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",-774711847),photo_path], null)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),(50),new cljs.core.Keyword(null,"width","width",-384071477),(36),new cljs.core.Keyword(null,"height","height",1025178622),(36)], null)], null)], null)], null);
});
syng_im.components.chat.contact_online = (function syng_im$components$chat$contact_online(p__22606){
var map__22609 = p__22606;
var map__22609__$1 = ((((!((map__22609 == null)))?((((map__22609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22609):map__22609);
var online = cljs.core.get.call(null,map__22609__$1,new cljs.core.Keyword(null,"online","online",868574801));
if(cljs.core.truth_(online)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.view,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"borderColor","borderColor",1372977096),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"borderWidth","borderWidth",1775770350),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],[(50),(20),syng_im.components.styles.color_white,(20),(2),"absolute",syng_im.components.styles.online_color,(20),(20)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.view,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),(6),new cljs.core.Keyword(null,"left","left",-399115937),(3),new cljs.core.Keyword(null,"width","width",-384071477),(4),new cljs.core.Keyword(null,"height","height",1025178622),(4),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),(50),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),syng_im.components.styles.color_white], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.view,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),(6),new cljs.core.Keyword(null,"left","left",-399115937),(9),new cljs.core.Keyword(null,"width","width",-384071477),(4),new cljs.core.Keyword(null,"height","height",1025178622),(4),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),(50),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),syng_im.components.styles.color_white], null)], null)], null);
} else {
return null;
}
});
syng_im.components.chat.typing = (function syng_im$components$chat$typing(member){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),(260),new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),(2),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),(8),new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),(8),new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),(8),new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"flex-start",new cljs.core.Keyword(null,"alignSelf","alignSelf",-1666557725),"flex-start"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),(14),new cljs.core.Keyword(null,"padding","padding",1660304693),(12),new cljs.core.Keyword(null,"height","height",1025178622),(38),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),syng_im.components.styles.selected_message_color], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),(-2),new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(12),new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),syng_im.components.styles.font,new cljs.core.Keyword(null,"color","color",1011675173),syng_im.components.styles.text2_color], null)], null),[cljs.core.str(member),cljs.core.str(" is typing")].join('')], null)], null)], null);
});
syng_im.components.chat.typing_all = (function syng_im$components$chat$typing_all(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),(12)], null)], null),(function (){var iter__17627__auto__ = (function syng_im$components$chat$typing_all_$_iter__22615(s__22616){
return (new cljs.core.LazySeq(null,(function (){
var s__22616__$1 = s__22616;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__22616__$1);
if(temp__4425__auto__){
var s__22616__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22616__$2)){
var c__17625__auto__ = cljs.core.chunk_first.call(null,s__22616__$2);
var size__17626__auto__ = cljs.core.count.call(null,c__17625__auto__);
var b__22618 = cljs.core.chunk_buffer.call(null,size__17626__auto__);
if((function (){var i__22617 = (0);
while(true){
if((i__22617 < size__17626__auto__)){
var member = cljs.core._nth.call(null,c__17625__auto__,i__22617);
cljs.core.chunk_append.call(null,b__22618,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.chat.typing,member], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),member], null)));

var G__22619 = (i__22617 + (1));
i__22617 = G__22619;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22618),syng_im$components$chat$typing_all_$_iter__22615.call(null,cljs.core.chunk_rest.call(null,s__22616__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22618),null);
}
} else {
var member = cljs.core.first.call(null,s__22616__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.chat.typing,member], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),member], null)),syng_im$components$chat$typing_all_$_iter__22615.call(null,cljs.core.rest.call(null,s__22616__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17627__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Geoff","Justas"], null));
})()], null);
});
syng_im.components.chat.toolbar_content_chat = (function syng_im$components$chat$toolbar_content_chat(chat){
var group_QMARK_ = new cljs.core.Keyword(null,"group-chat","group-chat",-284559595).cljs$core$IFn$_invoke$arity$1(chat);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"row",new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"transparent"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"flex-start",new cljs.core.Keyword(null,"justifyContent","justifyContent",885406515),"center",new cljs.core.Keyword(null,"marginRight","marginRight",457313535),(112)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),-2.5,new cljs.core.Keyword(null,"color","color",1011675173),syng_im.components.styles.text1_color,new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(16),new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),syng_im.components.styles.font], null)], null),(function (){var or__16855__auto__ = chat.call(null,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
} else {
return "Chat name";
}
})()], null),(cljs.core.truth_(group_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"row"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.image,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",-774711847),"icon_group"], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),(4),new cljs.core.Keyword(null,"width","width",-384071477),(14),new cljs.core.Keyword(null,"height","height",1025178622),(9)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),-0.5,new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),(4),new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),syng_im.components.styles.font,new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(12),new cljs.core.Keyword(null,"color","color",1011675173),syng_im.components.styles.text2_color], null)], null),[cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"contacts","contacts",333503174).cljs$core$IFn$_invoke$arity$1(chat))),cljs.core.str(((((1) < cljs.core.count.call(null,new cljs.core.Keyword(null,"contacts","contacts",333503174).cljs$core$IFn$_invoke$arity$1(chat))))?" members":" member")),cljs.core.str(", "),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"contacts","contacts",333503174).cljs$core$IFn$_invoke$arity$1(chat))),cljs.core.str(" active")].join('')], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),(1),new cljs.core.Keyword(null,"color","color",1011675173),syng_im.components.styles.text2_color,new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(12),new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),syng_im.components.styles.font], null)], null),"Active a minute ago"], null))], null),(cljs.core.truth_(group_QMARK_)?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),(10),new cljs.core.Keyword(null,"right","right",-452581833),(66)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.chat.chat_photo,cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.chat.contact_online,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"online","online",868574801),true], null)], null)], null))], null);
});
syng_im.components.chat.chat = (function syng_im$components$chat$chat(p__22620){
var map__22624 = p__22620;
var map__22624__$1 = ((((!((map__22624 == null)))?((((map__22624.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22624.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22624):map__22624);
var navigator = cljs.core.get.call(null,map__22624__$1,new cljs.core.Keyword(null,"navigator","navigator",2050004181));
var messages = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-chat-messages","get-chat-messages",828636940)], null));
var chat__$1 = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-current-chat","get-current-chat",597821994)], null));
return ((function (messages,chat__$1,map__22624,map__22624__$1,navigator){
return (function (){
var msgs = cljs.core.deref.call(null,messages);
var msgs_clj = cljs.core.assoc.call(null,cljs.core.js__GT_clj.call(null,msgs),"-1",cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"delivery-status","delivery-status",-2013922127),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"chat-id","chat-id",1708052118),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"outgoing","outgoing",1124752575),new cljs.core.Keyword(null,"to","to",192099007)],["-1",[cljs.core.str("The brash businessman\u2019s braggadocio "),cljs.core.str("and public exchange with candidates "),cljs.core.str("in the US presidential election")].join(''),"seen","Status","-",syng_im.constants.content_type_status,(1),false,null]));
var msgs__$1 = cljs.core.clj__GT_js.call(null,msgs_clj);
var datasource = syng_im.utils.listview.to_realm_datasource.call(null,msgs__$1);
var contacts = new cljs.core.Keyword(null,"contacts","contacts",333503174).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chat__$1));
var contact_by_identity = syng_im.components.chat.contacts_by_identity.call(null,contacts);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.drawer_layout_android,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"drawerWidth","drawerWidth",1835978943),(300),new cljs.core.Keyword(null,"drawerPosition","drawerPosition",-776605037),React.DrawerLayoutAndroid.positions.Left,new cljs.core.Keyword(null,"render-navigation-view","render-navigation-view",-1017127524),((function (msgs,msgs_clj,msgs__$1,datasource,contacts,contact_by_identity,messages,chat__$1,map__22624,map__22624__$1,navigator){
return (function (){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.chatmenu.chat_menu.chat_menu,navigator], null));
});})(msgs,msgs_clj,msgs__$1,datasource,contacts,contact_by_identity,messages,chat__$1,map__22624,map__22624__$1,navigator))
,new cljs.core.Keyword(null,"ref","ref",1289896967),((function (msgs,msgs_clj,msgs__$1,datasource,contacts,contact_by_identity,messages,chat__$1,map__22624,map__22624__$1,navigator){
return (function (drawer){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.view], null));
});})(msgs,msgs_clj,msgs__$1,datasource,contacts,contact_by_identity,messages,chat__$1,map__22624,map__22624__$1,navigator))
], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),syng_im.components.styles.chat_background], null)], null),(cljs.core.truth_(syng_im.components.react.android_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.toolbar_android,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"navIcon","navIcon",-1491295906),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",-774711847),"icon_back"], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),syng_im.components.styles.color_white,new cljs.core.Keyword(null,"height","height",1025178622),(56),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(2)], null),new cljs.core.Keyword(null,"actions","actions",-812656882),(cljs.core.truth_((function (){var and__16843__auto__ = new cljs.core.Keyword(null,"group-chat","group-chat",-284559595).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chat__$1));
if(cljs.core.truth_(and__16843__auto__)){
return new cljs.core.Keyword(null,"is-active","is-active",-1424968720).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chat__$1));
} else {
return and__16843__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Add Contact to chat",new cljs.core.Keyword(null,"icon","icon",1679606541),syng_im.resources.add_icon,new cljs.core.Keyword(null,"showWithText","showWithText",-957072095),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Remove Contact from chat",new cljs.core.Keyword(null,"icon","icon",1679606541),syng_im.resources.trash_icon,new cljs.core.Keyword(null,"showWithText","showWithText",-957072095),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Leave Chat",new cljs.core.Keyword(null,"icon","icon",1679606541),syng_im.resources.leave_icon,new cljs.core.Keyword(null,"showWithText","showWithText",-957072095),true], null)], null):null),new cljs.core.Keyword(null,"onActionSelected","onActionSelected",-884451200),((function (msgs,msgs_clj,msgs__$1,datasource,contacts,contact_by_identity,messages,chat__$1,map__22624,map__22624__$1,navigator){
return (function (position){
var G__22626 = position;
switch (G__22626) {
case (0):
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-add-participants","show-add-participants",1409550158),navigator], null));

break;
case (1):
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-remove-participants","show-remove-participants",-1569301370),navigator], null));

break;
case (2):
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leave-group-chat","leave-group-chat",-749832314),navigator], null));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(position)].join('')));

}
});})(msgs,msgs_clj,msgs__$1,datasource,contacts,contact_by_identity,messages,chat__$1,map__22624,map__22624__$1,navigator))
,new cljs.core.Keyword(null,"onIconClicked","onIconClicked",2049778180),((function (msgs,msgs_clj,msgs__$1,datasource,contacts,contact_by_identity,messages,chat__$1,map__22624,map__22624__$1,navigator){
return (function (){
return syng_im.navigation.nav_pop.call(null,navigator);
});})(msgs,msgs_clj,msgs__$1,datasource,contacts,contact_by_identity,messages,chat__$1,map__22624,map__22624__$1,navigator))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.chat.toolbar_content_chat,cljs.core.deref.call(null,chat__$1)], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.realm.list_view,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dataSource","dataSource",-178401132),datasource,new cljs.core.Keyword(null,"renderScrollComponent","renderScrollComponent",1192516107),((function (msgs,msgs_clj,msgs__$1,datasource,contacts,contact_by_identity,messages,chat__$1,map__22624,map__22624__$1,navigator){
return (function (props){
return syng_im.components.invertible_scroll_view.invertible_scroll_view.call(null,null);
});})(msgs,msgs_clj,msgs__$1,datasource,contacts,contact_by_identity,messages,chat__$1,map__22624,map__22624__$1,navigator))
,new cljs.core.Keyword(null,"renderRow","renderRow",239389977),((function (msgs,msgs_clj,msgs__$1,datasource,contacts,contact_by_identity,messages,chat__$1,map__22624,map__22624__$1,navigator){
return (function (row,section_id,row_id){
var msg = cljs.core.assoc.call(null,syng_im.components.chat.add_msg_color.call(null,cljs.core.js__GT_clj.call(null,row,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),contact_by_identity),new cljs.core.Keyword(null,"group-chat","group-chat",-284559595),new cljs.core.Keyword(null,"group-chat","group-chat",-284559595).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chat__$1)));
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.chat.chat_message.chat_message,msg], null));
});})(msgs,msgs_clj,msgs__$1,datasource,contacts,contact_by_identity,messages,chat__$1,map__22624,map__22624__$1,navigator))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"white"], null)], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"group-chat","group-chat",-284559595).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chat__$1)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.chat.typing_all], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"is-active","is-active",-1424968720).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chat__$1)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.chat.chat_message_new.chat_message_new], null):null)], null)], null);
});
;})(messages,chat__$1,map__22624,map__22624__$1,navigator))
});

//# sourceMappingURL=chat.js.map