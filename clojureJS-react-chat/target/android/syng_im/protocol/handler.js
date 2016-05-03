// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.protocol.handler');
goog.require('cljs.core');
goog.require('syng_im.utils.logging');
goog.require('syng_im.protocol.user_handler');
goog.require('syng_im.protocol.defaults');
goog.require('syng_im.protocol.web3');
goog.require('syng_im.protocol.state.state');
goog.require('syng_im.utils.encryption');
goog.require('syng_im.protocol.state.group_chat');
goog.require('cljs.reader');
goog.require('syng_im.protocol.state.delivery');
syng_im.protocol.handler.handle_ack = (function syng_im$protocol$handler$handle_ack(from,p__28201){
var map__28204 = p__28201;
var map__28204__$1 = ((((!((map__28204 == null)))?((((map__28204.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28204.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28204):map__28204);
var payload = map__28204__$1;
var ack_msg_id = cljs.core.get.call(null,map__28204__$1,new cljs.core.Keyword(null,"ack-msg-id","ack-msg-id",-1394494441));
var msg_id = cljs.core.get.call(null,map__28204__$1,new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869));
syng_im.utils.logging.info.call(null,"Got ack for message:",ack_msg_id,"from:",from);

if(cljs.core.truth_(syng_im.protocol.state.delivery.pending_QMARK_.call(null,ack_msg_id))){
} else {
syng_im.utils.logging.info.call(null,"Got ack for message",ack_msg_id,"which isn't pending.");
}

var internal_message_QMARK_ = syng_im.protocol.state.delivery.internal_QMARK_.call(null,ack_msg_id);
syng_im.protocol.state.delivery.update_pending_message.call(null,ack_msg_id,from);

if(cljs.core.truth_(internal_message_QMARK_)){
} else {
syng_im.protocol.user_handler.invoke_user_handler.call(null,new cljs.core.Keyword(null,"msg-acked","msg-acked",-1136900328),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869),ack_msg_id,new cljs.core.Keyword(null,"from","from",1815293044),from], null));
}

var temp__4425__auto__ = payload.call(null,new cljs.core.Keyword(null,"group-invite","group-invite",2034167234));
if(cljs.core.truth_(temp__4425__auto__)){
var group_topic = temp__4425__auto__;
return syng_im.protocol.user_handler.invoke_user_handler.call(null,new cljs.core.Keyword(null,"group-chat-invite-acked","group-chat-invite-acked",1582228433),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"ack-msg-id","ack-msg-id",-1394494441),ack_msg_id,new cljs.core.Keyword(null,"group-id","group-id",-1316082778),group_topic], null));
} else {
return null;
}
});
syng_im.protocol.handler.send_ack = (function syng_im$protocol$handler$send_ack(var_args){
var args28206 = [];
var len__17913__auto___28211 = arguments.length;
var i__17914__auto___28212 = (0);
while(true){
if((i__17914__auto___28212 < len__17913__auto___28211)){
args28206.push((arguments[i__17914__auto___28212]));

var G__28213 = (i__17914__auto___28212 + (1));
i__17914__auto___28212 = G__28213;
continue;
} else {
}
break;
}

var G__28208 = args28206.length;
switch (G__28208) {
case 3:
return syng_im.protocol.handler.send_ack.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return syng_im.protocol.handler.send_ack.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28206.length)].join('')));

}
});

syng_im.protocol.handler.send_ack.cljs$core$IFn$_invoke$arity$3 = (function (web3,to,msg_id){
return syng_im.protocol.handler.send_ack.call(null,web3,to,msg_id,null);
});

syng_im.protocol.handler.send_ack.cljs$core$IFn$_invoke$arity$4 = (function (web3,to,msg_id,ack_info){
syng_im.utils.logging.info.call(null,"Acking message:",msg_id,"To:",to);

var map__28209 = syng_im.protocol.web3.make_msg.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),syng_im.protocol.state.state.my_identity.call(null),new cljs.core.Keyword(null,"to","to",192099007),to,new cljs.core.Keyword(null,"payload","payload",-383036092),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ack","ack",-913609387),new cljs.core.Keyword(null,"ack-msg-id","ack-msg-id",-1394494441),msg_id], null),ack_info)], null));
var map__28209__$1 = ((((!((map__28209 == null)))?((((map__28209.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28209.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28209):map__28209);
var msg = cljs.core.get.call(null,map__28209__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
return syng_im.protocol.web3.post_msg.call(null,web3,msg);
});

syng_im.protocol.handler.send_ack.cljs$lang$maxFixedArity = 4;
syng_im.protocol.handler.handle_user_msg = (function syng_im$protocol$handler$handle_user_msg(web3,from,to,p__28215){
var map__28218 = p__28215;
var map__28218__$1 = ((((!((map__28218 == null)))?((((map__28218.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28218.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28218):map__28218);
var payload = map__28218__$1;
var msg_id = cljs.core.get.call(null,map__28218__$1,new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869));
syng_im.protocol.handler.send_ack.call(null,web3,from,msg_id);

return syng_im.protocol.user_handler.invoke_user_handler.call(null,new cljs.core.Keyword(null,"new-msg","new-msg",-954173471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to,new cljs.core.Keyword(null,"payload","payload",-383036092),payload], null));
});
syng_im.protocol.handler.handle_incoming_whisper_msg;
syng_im.protocol.handler.handle_new_group_chat = (function syng_im$protocol$handler$handle_new_group_chat(web3,from,p__28220){
var map__28223 = p__28220;
var map__28223__$1 = ((((!((map__28223 == null)))?((((map__28223.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28223.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28223):map__28223);
var group_topic = cljs.core.get.call(null,map__28223__$1,new cljs.core.Keyword(null,"group-topic","group-topic",2135203879));
var keypair = cljs.core.get.call(null,map__28223__$1,new cljs.core.Keyword(null,"keypair","keypair",-828062125));
var identities = cljs.core.get.call(null,map__28223__$1,new cljs.core.Keyword(null,"identities","identities",-2100677764));
var msg_id = cljs.core.get.call(null,map__28223__$1,new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869));
syng_im.protocol.handler.send_ack.call(null,web3,from,msg_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"group-invite","group-invite",2034167234),group_topic], null));

var store = syng_im.protocol.state.state.storage.call(null);
if(cljs.core.truth_(syng_im.protocol.state.group_chat.chat_exists_QMARK_.call(null,store,group_topic))){
return null;
} else {
syng_im.protocol.web3.listen.call(null,web3,syng_im.protocol.handler.handle_incoming_whisper_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"topics","topics",625768208),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_topic], null)], null));

syng_im.protocol.state.group_chat.save_keypair.call(null,store,group_topic,keypair);

syng_im.protocol.state.group_chat.save_identities.call(null,store,group_topic,identities);

syng_im.protocol.state.group_chat.save_group_admin.call(null,store,group_topic,from);

return syng_im.protocol.user_handler.invoke_user_handler.call(null,new cljs.core.Keyword(null,"new-group-chat","new-group-chat",1212422373),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"identities","identities",-2100677764),identities,new cljs.core.Keyword(null,"group-id","group-id",-1316082778),group_topic], null));
}
});
syng_im.protocol.handler.decrypt_group_msg = (function syng_im$protocol$handler$decrypt_group_msg(group_topic,encrypted_payload){
var store = syng_im.protocol.state.state.storage.call(null);
var temp__4425__auto__ = syng_im.protocol.state.group_chat.get_keypair.call(null,store,group_topic);
if(cljs.core.truth_(temp__4425__auto__)){
var map__28227 = temp__4425__auto__;
var map__28227__$1 = ((((!((map__28227 == null)))?((((map__28227.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28227.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28227):map__28227);
var private_key = cljs.core.get.call(null,map__28227__$1,new cljs.core.Keyword(null,"private","private",-558947994));
return cljs.core.assoc.call(null,cljs.reader.read_string.call(null,syng_im.utils.encryption.decrypt.call(null,private_key,encrypted_payload)),new cljs.core.Keyword(null,"group-topic","group-topic",2135203879),group_topic);
} else {
return null;
}
});
syng_im.protocol.handler.handle_group_user_msg = (function syng_im$protocol$handler$handle_group_user_msg(web3,from,p__28229){
var map__28232 = p__28229;
var map__28232__$1 = ((((!((map__28232 == null)))?((((map__28232.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28232.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28232):map__28232);
var payload = map__28232__$1;
var msg_id = cljs.core.get.call(null,map__28232__$1,new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869));
var group_topic = cljs.core.get.call(null,map__28232__$1,new cljs.core.Keyword(null,"group-topic","group-topic",2135203879));
syng_im.protocol.handler.send_ack.call(null,web3,from,msg_id);

return syng_im.protocol.user_handler.invoke_user_handler.call(null,new cljs.core.Keyword(null,"new-group-msg","new-group-msg",234470902),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"group-id","group-id",-1316082778),group_topic,new cljs.core.Keyword(null,"payload","payload",-383036092),payload], null));
});
syng_im.protocol.handler.handle_group_new_participant = (function syng_im$protocol$handler$handle_group_new_participant(web3,from,p__28234){
var map__28237 = p__28234;
var map__28237__$1 = ((((!((map__28237 == null)))?((((map__28237.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28237.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28237):map__28237);
var msg_id = cljs.core.get.call(null,map__28237__$1,new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869));
var identity = cljs.core.get.call(null,map__28237__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var group_topic = cljs.core.get.call(null,map__28237__$1,new cljs.core.Keyword(null,"group-topic","group-topic",2135203879));
var store = syng_im.protocol.state.state.storage.call(null);
if(cljs.core.truth_(syng_im.protocol.state.group_chat.group_admin_QMARK_.call(null,store,group_topic,from))){
syng_im.protocol.handler.send_ack.call(null,web3,from,msg_id);

if(cljs.core.truth_(syng_im.protocol.state.group_chat.group_member_QMARK_.call(null,store,group_topic,identity))){
return null;
} else {
syng_im.protocol.state.group_chat.add_identity.call(null,store,group_topic,identity);

return syng_im.protocol.user_handler.invoke_user_handler.call(null,new cljs.core.Keyword(null,"group-new-participant","group-new-participant",-1010013497),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"identity","identity",1647396035),identity,new cljs.core.Keyword(null,"group-id","group-id",-1316082778),group_topic,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869),msg_id], null));
}
} else {
return syng_im.utils.logging.warn.call(null,"Ignoring group-new-participant for group",group_topic,"from a non group-admin user",from);
}
});
syng_im.protocol.handler.handle_group_removed_participant = (function syng_im$protocol$handler$handle_group_removed_participant(web3,from,p__28239){
var map__28242 = p__28239;
var map__28242__$1 = ((((!((map__28242 == null)))?((((map__28242.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28242.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28242):map__28242);
var keypair = cljs.core.get.call(null,map__28242__$1,new cljs.core.Keyword(null,"keypair","keypair",-828062125));
var group_topic = cljs.core.get.call(null,map__28242__$1,new cljs.core.Keyword(null,"group-topic","group-topic",2135203879));
var msg_id = cljs.core.get.call(null,map__28242__$1,new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869));
var removed_identity = cljs.core.get.call(null,map__28242__$1,new cljs.core.Keyword(null,"removed-identity","removed-identity",-1517074374));
var store = syng_im.protocol.state.state.storage.call(null);
if(cljs.core.truth_(syng_im.protocol.state.group_chat.group_admin_QMARK_.call(null,store,group_topic,from))){
syng_im.protocol.handler.send_ack.call(null,web3,from,msg_id);

if(cljs.core.truth_(syng_im.protocol.state.group_chat.group_member_QMARK_.call(null,store,group_topic,removed_identity))){
syng_im.protocol.state.group_chat.save_keypair.call(null,store,group_topic,keypair);

syng_im.protocol.state.group_chat.remove_identity.call(null,store,group_topic,removed_identity);

return syng_im.protocol.user_handler.invoke_user_handler.call(null,new cljs.core.Keyword(null,"group-removed-participant","group-removed-participant",1645065823),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"identity","identity",1647396035),removed_identity,new cljs.core.Keyword(null,"group-id","group-id",-1316082778),group_topic,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869),msg_id], null));
} else {
return null;
}
} else {
return syng_im.utils.logging.warn.call(null,"Ignoring group-removed-participant for group",group_topic,"from a non group-admin user",from);
}
});
syng_im.protocol.handler.handle_removed_from_group = (function syng_im$protocol$handler$handle_removed_from_group(web3,from,p__28244){
var map__28247 = p__28244;
var map__28247__$1 = ((((!((map__28247 == null)))?((((map__28247.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28247.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28247):map__28247);
var group_topic = cljs.core.get.call(null,map__28247__$1,new cljs.core.Keyword(null,"group-topic","group-topic",2135203879));
var msg_id = cljs.core.get.call(null,map__28247__$1,new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869));
var store = syng_im.protocol.state.state.storage.call(null);
if(cljs.core.truth_(syng_im.protocol.state.group_chat.group_admin_QMARK_.call(null,store,group_topic,from))){
syng_im.protocol.handler.send_ack.call(null,web3,from,msg_id);

if(cljs.core.truth_(syng_im.protocol.state.group_chat.group_member_QMARK_.call(null,store,group_topic,syng_im.protocol.state.state.my_identity.call(null)))){
syng_im.protocol.state.group_chat.remove_group_data.call(null,store,group_topic);

syng_im.protocol.web3.stop_listener.call(null,group_topic);

return syng_im.protocol.user_handler.invoke_user_handler.call(null,new cljs.core.Keyword(null,"removed-from-group","removed-from-group",-927709737),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"group-id","group-id",-1316082778),group_topic,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869),msg_id], null));
} else {
return null;
}
} else {
return syng_im.utils.logging.warn.call(null,"Ignoring removed-from-group for group",group_topic,"from a non group-admin user",from);
}
});
syng_im.protocol.handler.handle_participant_left_group = (function syng_im$protocol$handler$handle_participant_left_group(web3,from,p__28249){
var map__28252 = p__28249;
var map__28252__$1 = ((((!((map__28252 == null)))?((((map__28252.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28252.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28252):map__28252);
var group_topic = cljs.core.get.call(null,map__28252__$1,new cljs.core.Keyword(null,"group-topic","group-topic",2135203879));
var msg_id = cljs.core.get.call(null,map__28252__$1,new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869));
var store = syng_im.protocol.state.state.storage.call(null);
syng_im.protocol.handler.send_ack.call(null,web3,from,msg_id);

if(cljs.core.truth_(syng_im.protocol.state.group_chat.group_member_QMARK_.call(null,store,group_topic,from))){
syng_im.protocol.state.group_chat.remove_identity.call(null,store,group_topic,from);

return syng_im.protocol.user_handler.invoke_user_handler.call(null,new cljs.core.Keyword(null,"participant-left-group","participant-left-group",-872798284),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"group-id","group-id",-1316082778),group_topic,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869),msg_id], null));
} else {
return null;
}
});
syng_im.protocol.handler.handle_group_msg = (function syng_im$protocol$handler$handle_group_msg(web3,msg_type,from,p__28254){
var map__28258 = p__28254;
var map__28258__$1 = ((((!((map__28258 == null)))?((((map__28258.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28258.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28258):map__28258);
var enc_payload = cljs.core.get.call(null,map__28258__$1,new cljs.core.Keyword(null,"enc-payload","enc-payload",835567936));
var group_topic = cljs.core.get.call(null,map__28258__$1,new cljs.core.Keyword(null,"group-topic","group-topic",2135203879));
var temp__4423__auto__ = syng_im.protocol.handler.decrypt_group_msg.call(null,group_topic,enc_payload);
if(cljs.core.truth_(temp__4423__auto__)){
var payload = temp__4423__auto__;
var G__28260 = (((msg_type instanceof cljs.core.Keyword))?msg_type.fqn:null);
switch (G__28260) {
case "group-user-msg":
return syng_im.protocol.handler.handle_group_user_msg.call(null,web3,from,payload);

break;
case "group-new-participant":
return syng_im.protocol.handler.handle_group_new_participant.call(null,web3,from,payload);

break;
case "left-group":
return syng_im.protocol.handler.handle_participant_left_group.call(null,web3,from,payload);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(msg_type)].join('')));

}
} else {
return syng_im.utils.logging.debug.call(null,"Could not decrypt group msg, possibly you've left the group.");
}
});
syng_im.protocol.handler.handle_incoming_whisper_msg = (function syng_im$protocol$handler$handle_incoming_whisper_msg(web3,msg){
syng_im.utils.logging.info.call(null,"Got whisper message:",msg);

var map__28267 = cljs.core.js__GT_clj.call(null,msg,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var map__28267__$1 = ((((!((map__28267 == null)))?((((map__28267.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28267.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28267):map__28267);
var from = cljs.core.get.call(null,map__28267__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.call(null,map__28267__$1,new cljs.core.Keyword(null,"to","to",192099007));
var topics = cljs.core.get.call(null,map__28267__$1,new cljs.core.Keyword(null,"topics","topics",625768208));
var payload = cljs.core.get.call(null,map__28267__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
if((cljs.core._EQ_.call(null,to,"0x0")) || (cljs.core._EQ_.call(null,to,syng_im.protocol.state.state.my_identity.call(null)))){
var map__28269 = cljs.reader.read_string.call(null,syng_im.protocol.web3.to_ascii.call(null,payload));
var map__28269__$1 = ((((!((map__28269 == null)))?((((map__28269.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28269.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28269):map__28269);
var payload__$1 = map__28269__$1;
var msg_type = cljs.core.get.call(null,map__28269__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__28271 = (((msg_type instanceof cljs.core.Keyword))?msg_type.fqn:null);
switch (G__28271) {
case "ack":
return syng_im.protocol.handler.handle_ack.call(null,from,payload__$1);

break;
case "user-msg":
return syng_im.protocol.handler.handle_user_msg.call(null,web3,from,to,payload__$1);

break;
case "init-group-chat":
return syng_im.protocol.handler.handle_new_group_chat.call(null,web3,from,payload__$1);

break;
case "group-removed-participant":
return syng_im.protocol.handler.handle_group_removed_participant.call(null,web3,from,payload__$1);

break;
case "removed-from-group":
return syng_im.protocol.handler.handle_removed_from_group.call(null,web3,from,payload__$1);

break;
case "group-user-msg":
return syng_im.protocol.handler.handle_group_msg.call(null,web3,msg_type,from,payload__$1);

break;
case "group-new-participant":
return syng_im.protocol.handler.handle_group_msg.call(null,web3,msg_type,from,payload__$1);

break;
case "left-group":
return syng_im.protocol.handler.handle_group_msg.call(null,web3,msg_type,from,payload__$1);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(msg_type)].join('')));

}
} else {
return syng_im.utils.logging.warn.call(null,"My identity:",syng_im.protocol.state.state.my_identity.call(null),"Message To:",to,"Message is encrypted for someone else, ignoring");
}
});

//# sourceMappingURL=handler.js.map