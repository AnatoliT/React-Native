// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.protocol.protocol_handler');
goog.require('cljs.core');
goog.require('syng_im.utils.logging');
goog.require('syng_im.constants');
goog.require('re_frame.core');
goog.require('syng_im.models.protocol');
goog.require('syng_im.persistence.simple_kv_store');
goog.require('syng_im.models.chats');
syng_im.protocol.protocol_handler.make_handler = (function syng_im$protocol$protocol_handler$make_handler(db){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ethereum-rpc-url","ethereum-rpc-url",-1244814980),syng_im.constants.ethereum_rpc_url,new cljs.core.Keyword(null,"identity","identity",1647396035),syng_im.models.protocol.stored_identity.call(null,db),new cljs.core.Keyword(null,"active-group-ids","active-group-ids",648398295),syng_im.models.chats.active_group_chats.call(null),new cljs.core.Keyword(null,"storage","storage",1867247511),syng_im.persistence.simple_kv_store.kv_store,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p__44733){
var map__44734 = p__44733;
var map__44734__$1 = ((((!((map__44734 == null)))?((((map__44734.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44734.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44734):map__44734);
var event = map__44734__$1;
var event_type = cljs.core.get.call(null,map__44734__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
syng_im.utils.logging.info.call(null,"Event:",cljs.core.clj__GT_js.call(null,event));

var G__44736 = (((event_type instanceof cljs.core.Keyword))?event_type.fqn:null);
switch (G__44736) {
case "new-msg":
var map__44737 = event;
var map__44737__$1 = ((((!((map__44737 == null)))?((((map__44737.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44737.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44737):map__44737);
var from = cljs.core.get.call(null,map__44737__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.call(null,map__44737__$1,new cljs.core.Keyword(null,"to","to",192099007));
var payload = cljs.core.get.call(null,map__44737__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"received-msg","received-msg",676811427),cljs.core.assoc.call(null,payload,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to)], null));

break;
case "new-group-chat":
var map__44739 = event;
var map__44739__$1 = ((((!((map__44739 == null)))?((((map__44739.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44739.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44739):map__44739);
var from = cljs.core.get.call(null,map__44739__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var group_id = cljs.core.get.call(null,map__44739__$1,new cljs.core.Keyword(null,"group-id","group-id",-1316082778));
var identities = cljs.core.get.call(null,map__44739__$1,new cljs.core.Keyword(null,"identities","identities",-2100677764));
var group_name = cljs.core.get.call(null,map__44739__$1,new cljs.core.Keyword(null,"group-name","group-name",-232140110));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group-chat-invite-received","group-chat-invite-received",784007762),from,group_id,identities,group_name], null));

break;
case "initialized":
var map__44741 = event;
var map__44741__$1 = ((((!((map__44741 == null)))?((((map__44741.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44741.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44741):map__44741);
var identity = cljs.core.get.call(null,map__44741__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-initialized","protocol-initialized",680045225),identity], null));

break;
case "group-new-participant":
var map__44743 = event;
var map__44743__$1 = ((((!((map__44743 == null)))?((((map__44743.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44743.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44743):map__44743);
var group_id = cljs.core.get.call(null,map__44743__$1,new cljs.core.Keyword(null,"group-id","group-id",-1316082778));
var identity = cljs.core.get.call(null,map__44743__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var from = cljs.core.get.call(null,map__44743__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var msg_id = cljs.core.get.call(null,map__44743__$1,new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"participant-invited-to-group","participant-invited-to-group",-143712999),from,group_id,identity,msg_id], null));

break;
case "group-chat-invite-acked":
var map__44745 = event;
var map__44745__$1 = ((((!((map__44745 == null)))?((((map__44745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44745):map__44745);
var from = cljs.core.get.call(null,map__44745__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var group_id = cljs.core.get.call(null,map__44745__$1,new cljs.core.Keyword(null,"group-id","group-id",-1316082778));
var ack_msg_id = cljs.core.get.call(null,map__44745__$1,new cljs.core.Keyword(null,"ack-msg-id","ack-msg-id",-1394494441));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group-chat-invite-acked","group-chat-invite-acked",1582228433),from,group_id,ack_msg_id], null));

break;
case "delivery-failed":
var map__44747 = event;
var map__44747__$1 = ((((!((map__44747 == null)))?((((map__44747.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44747.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44747):map__44747);
var msg_id = cljs.core.get.call(null,map__44747__$1,new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg-delivery-failed","msg-delivery-failed",-409967994),msg_id], null));

break;
case "participant-left-group":
var map__44749 = event;
var map__44749__$1 = ((((!((map__44749 == null)))?((((map__44749.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44749.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44749):map__44749);
var group_id = cljs.core.get.call(null,map__44749__$1,new cljs.core.Keyword(null,"group-id","group-id",-1316082778));
var from = cljs.core.get.call(null,map__44749__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var msg_id = cljs.core.get.call(null,map__44749__$1,new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"participant-left-group","participant-left-group",-872798284),from,group_id,msg_id], null));

break;
case "new-group-msg":
var map__44751 = event;
var map__44751__$1 = ((((!((map__44751 == null)))?((((map__44751.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44751.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44751):map__44751);
var from = cljs.core.get.call(null,map__44751__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var group_id = cljs.core.get.call(null,map__44751__$1,new cljs.core.Keyword(null,"group-id","group-id",-1316082778));
var payload = cljs.core.get.call(null,map__44751__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group-received-msg","group-received-msg",-1737255857),cljs.core.assoc.call(null,payload,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"group-id","group-id",-1316082778),group_id)], null));

break;
case "removed-from-group":
var map__44753 = event;
var map__44753__$1 = ((((!((map__44753 == null)))?((((map__44753.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44753.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44753):map__44753);
var group_id = cljs.core.get.call(null,map__44753__$1,new cljs.core.Keyword(null,"group-id","group-id",-1316082778));
var from = cljs.core.get.call(null,map__44753__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var msg_id = cljs.core.get.call(null,map__44753__$1,new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"you-removed-from-group","you-removed-from-group",305600593),from,group_id,msg_id], null));

break;
case "msg-acked":
var map__44755 = event;
var map__44755__$1 = ((((!((map__44755 == null)))?((((map__44755.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44755.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44755):map__44755);
var msg_id = cljs.core.get.call(null,map__44755__$1,new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869));
var from = cljs.core.get.call(null,map__44755__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acked-msg","acked-msg",1539197250),from,msg_id], null));

break;
case "group-removed-participant":
var map__44757 = event;
var map__44757__$1 = ((((!((map__44757 == null)))?((((map__44757.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44757.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44757):map__44757);
var group_id = cljs.core.get.call(null,map__44757__$1,new cljs.core.Keyword(null,"group-id","group-id",-1316082778));
var identity = cljs.core.get.call(null,map__44757__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var from = cljs.core.get.call(null,map__44757__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var msg_id = cljs.core.get.call(null,map__44757__$1,new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"participant-removed-from-group","participant-removed-from-group",1218586716),from,group_id,identity,msg_id], null));

break;
default:
return syng_im.utils.logging.info.call(null,"Don't know how to handle",event_type);

}
})], null);
});

//# sourceMappingURL=protocol_handler.js.map