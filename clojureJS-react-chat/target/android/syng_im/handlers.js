// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.handlers');
goog.require('cljs.core');
goog.require('syng_im.handlers.contacts');
goog.require('syng_im.models.chat');
goog.require('syng_im.constants');
goog.require('syng_im.utils.logging');
goog.require('schema.core');
goog.require('syng_im.models.user_data');
goog.require('syng_im.handlers.suggestions');
goog.require('syng_im.navigation');
goog.require('syng_im.handlers.server');
goog.require('syng_im.models.contacts');
goog.require('syng_im.models.protocol');
goog.require('syng_im.protocol.api');
goog.require('syng_im.utils.random');
goog.require('syng_im.protocol.protocol_handler');
goog.require('syng_im.db');
goog.require('syng_im.handlers.sign_up');
goog.require('syng_im.models.chats');
goog.require('syng_im.models.commands');
goog.require('syng_im.utils.crypt');
goog.require('syng_im.models.messages');
goog.require('re_frame.core');
/**
 * throw an exception if db doesn't match the schema.
 */
syng_im.handlers.check_and_throw = (function syng_im$handlers$check_and_throw(a_schema,db){
var temp__4423__auto__ = schema.core.check.call(null,a_schema,db);
if(cljs.core.truth_(temp__4423__auto__)){
var problems = temp__4423__auto__;
throw (new Error([cljs.core.str("schema check failed: "),cljs.core.str(problems)].join('')));
} else {
return null;
}
});
syng_im.handlers.validate_schema_mw = re_frame.core.after.call(null,cljs.core.partial.call(null,syng_im.handlers.check_and_throw,syng_im.db.schema));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return syng_im.db.app_db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-loading","set-loading",984627975),(function (db,p__45650){
var vec__45651 = p__45650;
var _ = cljs.core.nth.call(null,vec__45651,(0),null);
var value = cljs.core.nth.call(null,vec__45651,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),value);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize-crypt","initialize-crypt",2063485894),(function (db,_){
syng_im.utils.logging.debug.call(null,"initializing crypt");

syng_im.utils.crypt.gen_random_bytes.call(null,(1024),(function (p__45652){
var map__45653 = p__45652;
var map__45653__$1 = ((((!((map__45653 == null)))?((((map__45653.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45653.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45653):map__45653);
var error = cljs.core.get.call(null,map__45653__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var buffer = cljs.core.get.call(null,map__45653__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
if(cljs.core.truth_(error)){
syng_im.utils.logging.error.call(null,"Failed to generate random bytes to initialize sjcl crypto");

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notify-user","notify-user",-268964208),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032),error], null)], null));
} else {
ecc.sjcl.random.addEntropy(ecc.sjcl.codec.hex.toBits(buffer.toString("hex")));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"crypt-initialized","crypt-initialized",1190944225)], null));
}
}));

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"crypt-initialized","crypt-initialized",1190944225),(function (db,_){
syng_im.utils.logging.debug.call(null,"crypt initialized");

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),(function (db,p__45655){
var vec__45656 = p__45655;
var action = cljs.core.nth.call(null,vec__45656,(0),null);
var navigator = cljs.core.nth.call(null,vec__45656,(1),null);
var route = cljs.core.nth.call(null,vec__45656,(2),null);
var nav_type = cljs.core.nth.call(null,vec__45656,(3),null);
syng_im.utils.logging.debug.call(null,action,route);

var G__45657_45658 = (((nav_type instanceof cljs.core.Keyword))?nav_type.fqn:null);
switch (G__45657_45658) {
case "push":
syng_im.navigation.nav_push.call(null,navigator,route);

break;
case "replace":
syng_im.navigation.nav_replace.call(null,navigator,route);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(nav_type)].join('')));

}

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"load-commands","load-commands",850796078),(function (db,p__45660){
var vec__45661 = p__45660;
var action = cljs.core.nth.call(null,vec__45661,(0),null);
syng_im.utils.logging.debug.call(null,action);

syng_im.handlers.suggestions.load_commands.call(null);

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-commands","set-commands",-1621006722),(function (db,p__45662){
var vec__45663 = p__45662;
var action = cljs.core.nth.call(null,vec__45663,(0),null);
var commands = cljs.core.nth.call(null,vec__45663,(1),null);
syng_im.utils.logging.debug.call(null,action,commands);

return syng_im.models.commands.set_commands.call(null,db,commands);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize-protocol","initialize-protocol",804729880),(function (db,p__45664){
var vec__45665 = p__45664;
var _ = cljs.core.nth.call(null,vec__45665,(0),null);
syng_im.protocol.api.init_protocol.call(null,syng_im.protocol.protocol_handler.make_handler.call(null,db));

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"protocol-initialized","protocol-initialized",680045225),(function (db,p__45666){
var vec__45667 = p__45666;
var _ = cljs.core.nth.call(null,vec__45667,(0),null);
var identity = cljs.core.nth.call(null,vec__45667,(1),null);
return syng_im.models.protocol.set_initialized.call(null,syng_im.models.protocol.update_identity.call(null,db,identity),true);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"received-msg","received-msg",676811427),(function (db,p__45668){
var vec__45669 = p__45668;
var action = cljs.core.nth.call(null,vec__45669,(0),null);
var map__45670 = cljs.core.nth.call(null,vec__45669,(1),null);
var map__45670__$1 = ((((!((map__45670 == null)))?((((map__45670.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45670.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45670):map__45670);
var msg = map__45670__$1;
var chat_id = cljs.core.get.call(null,map__45670__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var msg_id = cljs.core.get.call(null,map__45670__$1,new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869));
syng_im.utils.logging.debug.call(null,action,"msg",msg);

syng_im.models.messages.save_message.call(null,chat_id,msg);

return syng_im.models.chat.signal_chat_updated.call(null,syng_im.models.chats.create_chat.call(null,db,chat_id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chat_id], null),false),chat_id);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"group-received-msg","group-received-msg",-1737255857),(function (db,p__45672){
var vec__45673 = p__45672;
var action = cljs.core.nth.call(null,vec__45673,(0),null);
var map__45674 = cljs.core.nth.call(null,vec__45673,(1),null);
var map__45674__$1 = ((((!((map__45674 == null)))?((((map__45674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45674):map__45674);
var msg = map__45674__$1;
var chat_id = cljs.core.get.call(null,map__45674__$1,new cljs.core.Keyword(null,"group-id","group-id",-1316082778));
syng_im.utils.logging.debug.call(null,action,"msg",msg);

syng_im.models.messages.save_message.call(null,chat_id,msg);

return syng_im.models.chat.signal_chat_updated.call(null,db,chat_id);
}));
syng_im.handlers.joined_chat_msg = (function syng_im$handlers$joined_chat_msg(chat_id,from,msg_id){
var contact_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(syng_im.models.contacts.contact_by_identity.call(null,from));
return syng_im.models.messages.save_message.call(null,chat_id,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",1815293044),"system",new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869),msg_id,new cljs.core.Keyword(null,"content","content",15833224),[cljs.core.str((function (){var or__16855__auto__ = contact_name;
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
} else {
return from;
}
})()),cljs.core.str(" received chat invitation")].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),syng_im.constants.text_content_type], null));
});
syng_im.handlers.participant_invited_to_group_msg = (function syng_im$handlers$participant_invited_to_group_msg(chat_id,identity,from,msg_id){
var inviter_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(syng_im.models.contacts.contact_by_identity.call(null,from));
var invitee_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(syng_im.models.contacts.contact_by_identity.call(null,identity));
return syng_im.models.messages.save_message.call(null,chat_id,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",1815293044),"system",new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869),msg_id,new cljs.core.Keyword(null,"content","content",15833224),[cljs.core.str((function (){var or__16855__auto__ = inviter_name;
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
} else {
return from;
}
})()),cljs.core.str(" invited "),cljs.core.str((function (){var or__16855__auto__ = invitee_name;
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
} else {
return identity;
}
})())].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),syng_im.constants.text_content_type], null));
});
syng_im.handlers.participant_removed_from_group_msg = (function syng_im$handlers$participant_removed_from_group_msg(chat_id,identity,from,msg_id){
var remover_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(syng_im.models.contacts.contact_by_identity.call(null,from));
var removed_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(syng_im.models.contacts.contact_by_identity.call(null,identity));
return syng_im.models.messages.save_message.call(null,chat_id,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",1815293044),"system",new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869),msg_id,new cljs.core.Keyword(null,"content","content",15833224),[cljs.core.str((function (){var or__16855__auto__ = remover_name;
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
} else {
return from;
}
})()),cljs.core.str(" removed "),cljs.core.str((function (){var or__16855__auto__ = removed_name;
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
} else {
return identity;
}
})())].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),syng_im.constants.text_content_type], null));
});
syng_im.handlers.you_removed_from_group_msg = (function syng_im$handlers$you_removed_from_group_msg(chat_id,from,msg_id){
var remover_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(syng_im.models.contacts.contact_by_identity.call(null,from));
return syng_im.models.messages.save_message.call(null,chat_id,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",1815293044),"system",new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869),msg_id,new cljs.core.Keyword(null,"content","content",15833224),[cljs.core.str((function (){var or__16855__auto__ = remover_name;
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
} else {
return from;
}
})()),cljs.core.str(" removed you from group chat")].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),syng_im.constants.text_content_type], null));
});
syng_im.handlers.participant_left_group_msg = (function syng_im$handlers$participant_left_group_msg(chat_id,from,msg_id){
var left_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(syng_im.models.contacts.contact_by_identity.call(null,from));
return syng_im.models.messages.save_message.call(null,chat_id,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",1815293044),"system",new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869),msg_id,new cljs.core.Keyword(null,"content","content",15833224),[cljs.core.str((function (){var or__16855__auto__ = left_name;
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
} else {
return from;
}
})()),cljs.core.str(" left")].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),syng_im.constants.text_content_type], null));
});
syng_im.handlers.removed_participant_msg = (function syng_im$handlers$removed_participant_msg(chat_id,identity){
var contact_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(syng_im.models.contacts.contact_by_identity.call(null,identity));
return syng_im.models.messages.save_message.call(null,chat_id,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",1815293044),"system",new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869),syng_im.utils.random.id.call(null),new cljs.core.Keyword(null,"content","content",15833224),[cljs.core.str("You've removed "),cljs.core.str((function (){var or__16855__auto__ = contact_name;
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
} else {
return identity;
}
})())].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),syng_im.constants.text_content_type], null));
});
syng_im.handlers.left_chat_msg = (function syng_im$handlers$left_chat_msg(chat_id){
return syng_im.models.messages.save_message.call(null,chat_id,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",1815293044),"system",new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869),syng_im.utils.random.id.call(null),new cljs.core.Keyword(null,"content","content",15833224),"You left this chat",new cljs.core.Keyword(null,"content-type","content-type",-508222634),syng_im.constants.text_content_type], null));
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"group-chat-invite-acked","group-chat-invite-acked",1582228433),(function (db,p__45676){
var vec__45677 = p__45676;
var action = cljs.core.nth.call(null,vec__45677,(0),null);
var from = cljs.core.nth.call(null,vec__45677,(1),null);
var group_id = cljs.core.nth.call(null,vec__45677,(2),null);
var ack_msg_id = cljs.core.nth.call(null,vec__45677,(3),null);
syng_im.utils.logging.debug.call(null,action,from,group_id,ack_msg_id);

syng_im.handlers.joined_chat_msg.call(null,group_id,from,ack_msg_id);

return syng_im.models.chat.signal_chat_updated.call(null,db,group_id);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"participant-removed-from-group","participant-removed-from-group",1218586716),(function (db,p__45678){
var vec__45679 = p__45678;
var action = cljs.core.nth.call(null,vec__45679,(0),null);
var from = cljs.core.nth.call(null,vec__45679,(1),null);
var group_id = cljs.core.nth.call(null,vec__45679,(2),null);
var identity = cljs.core.nth.call(null,vec__45679,(3),null);
var msg_id = cljs.core.nth.call(null,vec__45679,(4),null);
syng_im.utils.logging.debug.call(null,action,msg_id,from,group_id,identity);

syng_im.models.chats.chat_remove_participants.call(null,group_id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [identity], null));

syng_im.handlers.participant_removed_from_group_msg.call(null,group_id,identity,from,msg_id);

return syng_im.models.chat.signal_chat_updated.call(null,db,group_id);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"you-removed-from-group","you-removed-from-group",305600593),(function (db,p__45680){
var vec__45681 = p__45680;
var action = cljs.core.nth.call(null,vec__45681,(0),null);
var from = cljs.core.nth.call(null,vec__45681,(1),null);
var group_id = cljs.core.nth.call(null,vec__45681,(2),null);
var msg_id = cljs.core.nth.call(null,vec__45681,(3),null);
syng_im.utils.logging.debug.call(null,action,msg_id,from,group_id);

syng_im.handlers.you_removed_from_group_msg.call(null,group_id,from,msg_id);

syng_im.models.chats.set_chat_active.call(null,group_id,false);

return syng_im.models.chat.signal_chat_updated.call(null,db,group_id);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"participant-left-group","participant-left-group",-872798284),(function (db,p__45682){
var vec__45683 = p__45682;
var action = cljs.core.nth.call(null,vec__45683,(0),null);
var from = cljs.core.nth.call(null,vec__45683,(1),null);
var group_id = cljs.core.nth.call(null,vec__45683,(2),null);
var msg_id = cljs.core.nth.call(null,vec__45683,(3),null);
syng_im.utils.logging.debug.call(null,action,msg_id,from,group_id);

syng_im.handlers.participant_left_group_msg.call(null,group_id,from,msg_id);

return syng_im.models.chat.signal_chat_updated.call(null,db,group_id);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"participant-invited-to-group","participant-invited-to-group",-143712999),(function (db,p__45684){
var vec__45685 = p__45684;
var action = cljs.core.nth.call(null,vec__45685,(0),null);
var from = cljs.core.nth.call(null,vec__45685,(1),null);
var group_id = cljs.core.nth.call(null,vec__45685,(2),null);
var identity = cljs.core.nth.call(null,vec__45685,(3),null);
var msg_id = cljs.core.nth.call(null,vec__45685,(4),null);
syng_im.utils.logging.debug.call(null,action,msg_id,from,group_id,identity);

syng_im.handlers.participant_invited_to_group_msg.call(null,group_id,identity,from,msg_id);

return syng_im.models.chat.signal_chat_updated.call(null,db,group_id);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"acked-msg","acked-msg",1539197250),(function (db,p__45686){
var vec__45687 = p__45686;
var action = cljs.core.nth.call(null,vec__45687,(0),null);
var from = cljs.core.nth.call(null,vec__45687,(1),null);
var msg_id = cljs.core.nth.call(null,vec__45687,(2),null);
syng_im.utils.logging.debug.call(null,action,from,msg_id);

syng_im.models.messages.update_message_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869),msg_id,new cljs.core.Keyword(null,"delivery-status","delivery-status",-2013922127),new cljs.core.Keyword(null,"delivered","delivered",474109932)], null));

return syng_im.models.chat.signal_chat_updated.call(null,db,from);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"msg-delivery-failed","msg-delivery-failed",-409967994),(function (db,p__45688){
var vec__45689 = p__45688;
var action = cljs.core.nth.call(null,vec__45689,(0),null);
var msg_id = cljs.core.nth.call(null,vec__45689,(1),null);
syng_im.utils.logging.debug.call(null,action,msg_id);

syng_im.models.messages.update_message_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869),msg_id,new cljs.core.Keyword(null,"delivery-status","delivery-status",-2013922127),new cljs.core.Keyword(null,"failed","failed",-1397425762)], null));

var map__45690 = syng_im.models.messages.message_by_id.call(null,msg_id);
var map__45690__$1 = ((((!((map__45690 == null)))?((((map__45690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45690):map__45690);
var chat_id = cljs.core.get.call(null,map__45690__$1,new cljs.core.Keyword(null,"chat-id","chat-id",1708052118));
return syng_im.models.chat.signal_chat_updated.call(null,db,chat_id);
}));
syng_im.handlers.send_staged_commands = (function syng_im$handlers$send_staged_commands(db,chat_id){
var staged_commands = cljs.core.get_in.call(null,db,syng_im.db.chat_staged_commands_path.call(null,chat_id));
cljs.core.dorun.call(null,cljs.core.map.call(null,((function (staged_commands){
return (function (staged_command){
var command_key = cljs.core.get_in.call(null,staged_command,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"command","command",-894540724)], null));
var content = syng_im.models.commands.format_command_msg_content.call(null,command_key,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(staged_command));
var msg = ((cljs.core._EQ_.call(null,chat_id,"console"))?syng_im.handlers.sign_up.send_console_command.call(null,db,command_key,content):(function (){var map__45696 = syng_im.protocol.api.send_user_msg.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),chat_id,new cljs.core.Keyword(null,"content","content",15833224),content], null));
var map__45696__$1 = ((((!((map__45696 == null)))?((((map__45696.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45696.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45696):map__45696);
var msg_id = cljs.core.get.call(null,map__45696__$1,new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869));
var map__45697 = cljs.core.get.call(null,map__45696__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var map__45697__$1 = ((((!((map__45697 == null)))?((((map__45697.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45697.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45697):map__45697);
var from = cljs.core.get.call(null,map__45697__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.call(null,map__45697__$1,new cljs.core.Keyword(null,"to","to",192099007));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869),msg_id,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to,new cljs.core.Keyword(null,"content","content",15833224),content,new cljs.core.Keyword(null,"content-type","content-type",-508222634),syng_im.constants.content_type_command,new cljs.core.Keyword(null,"outgoing","outgoing",1124752575),true], null);
})());
return syng_im.models.messages.save_message.call(null,chat_id,msg);
});})(staged_commands))
,staged_commands));

return db;
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"send-chat-msg","send-chat-msg",-567319740),(function (db,p__45700){
var vec__45701 = p__45700;
var action = cljs.core.nth.call(null,vec__45701,(0),null);
var chat_id = cljs.core.nth.call(null,vec__45701,(1),null);
var text = cljs.core.nth.call(null,vec__45701,(2),null);
syng_im.utils.logging.debug.call(null,action,"chat-id",chat_id,"text",text);

var temp__4423__auto__ = syng_im.handlers.suggestions.get_command.call(null,db,text);
if(cljs.core.truth_(temp__4423__auto__)){
var command = temp__4423__auto__;
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-chat-command","set-chat-command",-1768304585),new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(command)], null));

return db;
} else {
var msg = (((cljs.core.count.call(null,text) > (0)))?((cljs.core._EQ_.call(null,chat_id,"console"))?syng_im.handlers.sign_up.send_console_msg.call(null,text):(function (){var map__45702 = syng_im.protocol.api.send_user_msg.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),chat_id,new cljs.core.Keyword(null,"content","content",15833224),text], null));
var map__45702__$1 = ((((!((map__45702 == null)))?((((map__45702.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45702.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45702):map__45702);
var msg_id = cljs.core.get.call(null,map__45702__$1,new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869));
var map__45703 = cljs.core.get.call(null,map__45702__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var map__45703__$1 = ((((!((map__45703 == null)))?((((map__45703.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45703.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45703):map__45703);
var from = cljs.core.get.call(null,map__45703__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.call(null,map__45703__$1,new cljs.core.Keyword(null,"to","to",192099007));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869),msg_id,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to,new cljs.core.Keyword(null,"content","content",15833224),text,new cljs.core.Keyword(null,"content-type","content-type",-508222634),syng_im.constants.text_content_type,new cljs.core.Keyword(null,"outgoing","outgoing",1124752575),true], null);
})()):null);
if(cljs.core.truth_(msg)){
syng_im.models.messages.save_message.call(null,chat_id,msg);
} else {
}

return syng_im.models.chat.signal_chat_updated.call(null,syng_im.handlers.suggestions.apply_staged_commands.call(null,syng_im.handlers.send_staged_commands.call(null,db,chat_id)),chat_id);
}
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"leave-group-chat","leave-group-chat",-749832314),(function (db,p__45706){
var vec__45707 = p__45706;
var action = cljs.core.nth.call(null,vec__45707,(0),null);
var navigator = cljs.core.nth.call(null,vec__45707,(1),null);
syng_im.utils.logging.debug.call(null,action);

var chat_id = syng_im.models.chat.current_chat_id.call(null,db);
syng_im.protocol.api.leave_group_chat.call(null,chat_id);

syng_im.models.chats.set_chat_active.call(null,chat_id,false);

syng_im.handlers.left_chat_msg.call(null,chat_id);

return syng_im.models.chat.signal_chat_updated.call(null,db,chat_id);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"send-chat-command","send-chat-command",613886687),(function (db,p__45708){
var vec__45709 = p__45708;
var action = cljs.core.nth.call(null,vec__45709,(0),null);
var chat_id = cljs.core.nth.call(null,vec__45709,(1),null);
var command = cljs.core.nth.call(null,vec__45709,(2),null);
var content = cljs.core.nth.call(null,vec__45709,(3),null);
syng_im.utils.logging.debug.call(null,action,"chat-id",chat_id,"command",command,"content",content);

var db__$1 = syng_im.models.chat.set_chat_input_text.call(null,db,null);
var msg = ((cljs.core._EQ_.call(null,chat_id,"console"))?syng_im.handlers.sign_up.send_console_command.call(null,db__$1,command,content):(function (){var map__45710 = syng_im.protocol.api.send_user_msg.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),chat_id,new cljs.core.Keyword(null,"content","content",15833224),content], null));
var map__45710__$1 = ((((!((map__45710 == null)))?((((map__45710.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45710.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45710):map__45710);
var msg_id = cljs.core.get.call(null,map__45710__$1,new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869));
var map__45711 = cljs.core.get.call(null,map__45710__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var map__45711__$1 = ((((!((map__45711 == null)))?((((map__45711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45711):map__45711);
var from = cljs.core.get.call(null,map__45711__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.call(null,map__45711__$1,new cljs.core.Keyword(null,"to","to",192099007));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869),msg_id,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to,new cljs.core.Keyword(null,"content","content",15833224),content,new cljs.core.Keyword(null,"content-type","content-type",-508222634),syng_im.constants.text_content_type,new cljs.core.Keyword(null,"outgoing","outgoing",1124752575),true], null);
})());
syng_im.models.messages.save_message.call(null,chat_id,msg);

return syng_im.models.chat.signal_chat_updated.call(null,syng_im.handlers.suggestions.handle_command.call(null,db__$1,command,content),chat_id);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"send-group-chat-msg","send-group-chat-msg",745881323),(function (db,p__45714){
var vec__45715 = p__45714;
var action = cljs.core.nth.call(null,vec__45715,(0),null);
var chat_id = cljs.core.nth.call(null,vec__45715,(1),null);
var text = cljs.core.nth.call(null,vec__45715,(2),null);
syng_im.utils.logging.debug.call(null,action,"chat-id",chat_id,"text",text);

var map__45716 = syng_im.protocol.api.send_group_user_msg.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"group-id","group-id",-1316082778),chat_id,new cljs.core.Keyword(null,"content","content",15833224),text], null));
var map__45716__$1 = ((((!((map__45716 == null)))?((((map__45716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45716):map__45716);
var msg_id = cljs.core.get.call(null,map__45716__$1,new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869));
var map__45717 = cljs.core.get.call(null,map__45716__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var map__45717__$1 = ((((!((map__45717 == null)))?((((map__45717.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45717.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45717):map__45717);
var from = cljs.core.get.call(null,map__45717__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var msg = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869),msg_id,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),null,new cljs.core.Keyword(null,"content","content",15833224),text,new cljs.core.Keyword(null,"content-type","content-type",-508222634),syng_im.constants.text_content_type,new cljs.core.Keyword(null,"outgoing","outgoing",1124752575),true], null);
syng_im.models.messages.save_message.call(null,chat_id,msg);

return syng_im.models.chat.signal_chat_updated.call(null,db,chat_id);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-user-phone-number","set-user-phone-number",1287962833),(function (db,p__45720){
var vec__45721 = p__45720;
var _ = cljs.core.nth.call(null,vec__45721,(0),null);
var value = cljs.core.nth.call(null,vec__45721,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"user-phone-number","user-phone-number",-67234603),value);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"load-user-phone-number","load-user-phone-number",1733691251),(function (db,p__45722){
var vec__45723 = p__45722;
var _ = cljs.core.nth.call(null,vec__45723,(0),null);
syng_im.models.user_data.load_phone_number.call(null);

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"sign-up","sign-up",-1190725688),(function (db,p__45724){
var vec__45725 = p__45724;
var _ = cljs.core.nth.call(null,vec__45725,(0),null);
var phone_number = cljs.core.nth.call(null,vec__45725,(1),null);
var handler = cljs.core.nth.call(null,vec__45725,(2),null);
return syng_im.handlers.server.sign_up.call(null,db,phone_number,handler);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"sign-up-confirm","sign-up-confirm",1070456140),(function (db,p__45726){
var vec__45727 = p__45726;
var _ = cljs.core.nth.call(null,vec__45727,(0),null);
var confirmation_code = cljs.core.nth.call(null,vec__45727,(1),null);
var handler = cljs.core.nth.call(null,vec__45727,(2),null);
syng_im.handlers.server.sign_up_confirm.call(null,confirmation_code,handler);

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"sync-contacts","sync-contacts",441585507),(function (db,p__45728){
var vec__45729 = p__45728;
var _ = cljs.core.nth.call(null,vec__45729,(0),null);
var handler = cljs.core.nth.call(null,vec__45729,(1),null);
syng_im.handlers.contacts.sync_contacts.call(null,handler);

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"load-syng-contacts","load-syng-contacts",-950529481),(function (db,p__45730){
var vec__45731 = p__45730;
var _ = cljs.core.nth.call(null,vec__45731,(0),null);
var value = cljs.core.nth.call(null,vec__45731,(1),null);
return syng_im.models.contacts.load_syng_contacts.call(null,db);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"show-chat","show-chat",-1372456583),(function (db,p__45732){
var vec__45733 = p__45732;
var action = cljs.core.nth.call(null,vec__45733,(0),null);
var chat_id = cljs.core.nth.call(null,vec__45733,(1),null);
var navigator = cljs.core.nth.call(null,vec__45733,(2),null);
var nav_type = cljs.core.nth.call(null,vec__45733,(3),null);
syng_im.utils.logging.debug.call(null,action,"chat-id",chat_id);

var db__$1 = syng_im.models.chat.set_current_chat_id.call(null,db,chat_id);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),navigator,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view-id","view-id",1118263032),new cljs.core.Keyword(null,"chat","chat",-518268339)], null),nav_type], null));

return db__$1;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"init-console-chat","init-console-chat",-29468146),(function (db,p__45734){
var vec__45735 = p__45734;
var _ = cljs.core.nth.call(null,vec__45735,(0),null);
return syng_im.handlers.sign_up.init.call(null,db);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-signed-up","set-signed-up",-1242854381),(function (db,p__45736){
var vec__45737 = p__45736;
var _ = cljs.core.nth.call(null,vec__45737,(0),null);
var signed_up = cljs.core.nth.call(null,vec__45737,(1),null);
return syng_im.handlers.sign_up.set_signed_up.call(null,db,signed_up);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-chat-input-text","set-chat-input-text",1236018766),(function (db,p__45738){
var vec__45739 = p__45738;
var _ = cljs.core.nth.call(null,vec__45739,(0),null);
var text = cljs.core.nth.call(null,vec__45739,(1),null);
var map__45740 = syng_im.handlers.suggestions.check_suggestion.call(null,db,text);
var map__45740__$1 = ((((!((map__45740 == null)))?((((map__45740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45740):map__45740);
var command = cljs.core.get.call(null,map__45740__$1,new cljs.core.Keyword(null,"command","command",-894540724));
return syng_im.models.commands.set_chat_command.call(null,syng_im.models.chat.set_chat_input_text.call(null,db,text),command);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-chat-command","set-chat-command",-1768304585),(function (db,p__45742){
var vec__45743 = p__45742;
var _ = cljs.core.nth.call(null,vec__45743,(0),null);
var command_key = cljs.core.nth.call(null,vec__45743,(1),null);
return syng_im.models.commands.set_chat_command.call(null,db,command_key);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"stage-command","stage-command",-1974342158),(function (db,p__45744){
var vec__45745 = p__45744;
var action = cljs.core.nth.call(null,vec__45745,(0),null);
var chat_id = cljs.core.nth.call(null,vec__45745,(1),null);
var command = cljs.core.nth.call(null,vec__45745,(2),null);
var content = cljs.core.nth.call(null,vec__45745,(3),null);
syng_im.utils.logging.debug.call(null,action,"chat-id",chat_id,"command",command,"content",content);

var db__$1 = syng_im.models.chat.set_chat_input_text.call(null,db,null);
var command_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",-894540724),command,new cljs.core.Keyword(null,"content","content",15833224),content,new cljs.core.Keyword(null,"handler","handler",-195596612),syng_im.handlers.suggestions.get_command_handler.call(null,db__$1,new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(command),content)], null);
return syng_im.models.commands.stage_command.call(null,db__$1,command_info);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"unstage-command","unstage-command",-1623354866),(function (db,p__45746){
var vec__45747 = p__45746;
var action = cljs.core.nth.call(null,vec__45747,(0),null);
var chat_id = cljs.core.nth.call(null,vec__45747,(1),null);
var staged_command = cljs.core.nth.call(null,vec__45747,(2),null);
syng_im.utils.logging.debug.call(null,action,"chat-id",chat_id,"staged-command",staged_command);

return syng_im.models.commands.unstage_command.call(null,db,staged_command);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-response-chat-command","set-response-chat-command",1054065786),(function (db,p__45748){
var vec__45749 = p__45748;
var _ = cljs.core.nth.call(null,vec__45749,(0),null);
var to_msg_id = cljs.core.nth.call(null,vec__45749,(1),null);
var command_key = cljs.core.nth.call(null,vec__45749,(2),null);
return syng_im.models.commands.set_response_chat_command.call(null,db,to_msg_id,command_key);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-chat-command-content","set-chat-command-content",-25115852),(function (db,p__45750){
var vec__45751 = p__45750;
var _ = cljs.core.nth.call(null,vec__45751,(0),null);
var content = cljs.core.nth.call(null,vec__45751,(1),null);
return syng_im.models.commands.set_chat_command_content.call(null,db,content);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-chat-command-request","set-chat-command-request",-349675109),(function (db,p__45752){
var vec__45753 = p__45752;
var _ = cljs.core.nth.call(null,vec__45753,(0),null);
var msg_id = cljs.core.nth.call(null,vec__45753,(1),null);
var handler = cljs.core.nth.call(null,vec__45753,(2),null);
return syng_im.models.commands.set_chat_command_request.call(null,db,msg_id,handler);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"show-contacts","show-contacts",1533696451),(function (db,p__45754){
var vec__45755 = p__45754;
var action = cljs.core.nth.call(null,vec__45755,(0),null);
var navigator = cljs.core.nth.call(null,vec__45755,(1),null);
syng_im.utils.logging.debug.call(null,action);

syng_im.navigation.nav_push.call(null,navigator,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view-id","view-id",1118263032),new cljs.core.Keyword(null,"contact-list","contact-list",-1491973306)], null));

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"show-profile","show-profile",1608110273),(function (db,p__45756){
var vec__45757 = p__45756;
var action = cljs.core.nth.call(null,vec__45757,(0),null);
var navigator = cljs.core.nth.call(null,vec__45757,(1),null);
syng_im.utils.logging.debug.call(null,action);

syng_im.navigation.nav_push.call(null,navigator,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view-id","view-id",1118263032),new cljs.core.Keyword(null,"profile","profile",-545963874)], null));

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"select-new-participant","select-new-participant",1303166200),(function (db,p__45758){
var vec__45759 = p__45758;
var action = cljs.core.nth.call(null,vec__45759,(0),null);
var identity = cljs.core.nth.call(null,vec__45759,(1),null);
var add_QMARK_ = cljs.core.nth.call(null,vec__45759,(2),null);
syng_im.utils.logging.debug.call(null,action,identity,add_QMARK_);

return syng_im.models.chat.update_new_participants_selection.call(null,db,identity,add_QMARK_);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"show-remove-participants","show-remove-participants",-1569301370),(function (db,p__45760){
var vec__45761 = p__45760;
var action = cljs.core.nth.call(null,vec__45761,(0),null);
var navigator = cljs.core.nth.call(null,vec__45761,(1),null);
syng_im.utils.logging.debug.call(null,action);

syng_im.navigation.nav_push.call(null,navigator,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view-id","view-id",1118263032),new cljs.core.Keyword(null,"remove-participants","remove-participants",1038820781)], null));

return syng_im.models.chat.clear_new_participants.call(null,db);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"remove-selected-participants","remove-selected-participants",1137875230),(function (db,p__45762){
var vec__45763 = p__45762;
var action = cljs.core.nth.call(null,vec__45763,(0),null);
var navigator = cljs.core.nth.call(null,vec__45763,(1),null);
syng_im.utils.logging.debug.call(null,action);

var identities = cljs.core.vec.call(null,syng_im.models.chat.new_participants_selection.call(null,db));
var chat_id = syng_im.models.chat.current_chat_id.call(null,db);
syng_im.models.chats.chat_remove_participants.call(null,chat_id,identities);

syng_im.navigation.nav_pop.call(null,navigator);

var seq__45764_45768 = cljs.core.seq.call(null,identities);
var chunk__45765_45769 = null;
var count__45766_45770 = (0);
var i__45767_45771 = (0);
while(true){
if((i__45767_45771 < count__45766_45770)){
var ident_45772 = cljs.core._nth.call(null,chunk__45765_45769,i__45767_45771);
syng_im.protocol.api.group_remove_participant.call(null,chat_id,ident_45772);

syng_im.handlers.removed_participant_msg.call(null,chat_id,ident_45772);

var G__45773 = seq__45764_45768;
var G__45774 = chunk__45765_45769;
var G__45775 = count__45766_45770;
var G__45776 = (i__45767_45771 + (1));
seq__45764_45768 = G__45773;
chunk__45765_45769 = G__45774;
count__45766_45770 = G__45775;
i__45767_45771 = G__45776;
continue;
} else {
var temp__4425__auto___45777 = cljs.core.seq.call(null,seq__45764_45768);
if(temp__4425__auto___45777){
var seq__45764_45778__$1 = temp__4425__auto___45777;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45764_45778__$1)){
var c__17658__auto___45779 = cljs.core.chunk_first.call(null,seq__45764_45778__$1);
var G__45780 = cljs.core.chunk_rest.call(null,seq__45764_45778__$1);
var G__45781 = c__17658__auto___45779;
var G__45782 = cljs.core.count.call(null,c__17658__auto___45779);
var G__45783 = (0);
seq__45764_45768 = G__45780;
chunk__45765_45769 = G__45781;
count__45766_45770 = G__45782;
i__45767_45771 = G__45783;
continue;
} else {
var ident_45784 = cljs.core.first.call(null,seq__45764_45778__$1);
syng_im.protocol.api.group_remove_participant.call(null,chat_id,ident_45784);

syng_im.handlers.removed_participant_msg.call(null,chat_id,ident_45784);

var G__45785 = cljs.core.next.call(null,seq__45764_45778__$1);
var G__45786 = null;
var G__45787 = (0);
var G__45788 = (0);
seq__45764_45768 = G__45785;
chunk__45765_45769 = G__45786;
count__45766_45770 = G__45787;
i__45767_45771 = G__45788;
continue;
}
} else {
}
}
break;
}

return syng_im.models.chat.signal_chat_updated.call(null,db,chat_id);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"show-add-participants","show-add-participants",1409550158),(function (db,p__45789){
var vec__45790 = p__45789;
var action = cljs.core.nth.call(null,vec__45790,(0),null);
var navigator = cljs.core.nth.call(null,vec__45790,(1),null);
syng_im.utils.logging.debug.call(null,action);

syng_im.navigation.nav_push.call(null,navigator,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view-id","view-id",1118263032),new cljs.core.Keyword(null,"add-participants","add-participants",-1083075707)], null));

return syng_im.models.chat.clear_new_participants.call(null,db);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"add-new-participants","add-new-participants",-1435566978),(function (db,p__45791){
var vec__45792 = p__45791;
var action = cljs.core.nth.call(null,vec__45792,(0),null);
var navigator = cljs.core.nth.call(null,vec__45792,(1),null);
syng_im.utils.logging.debug.call(null,action);

var identities = cljs.core.vec.call(null,syng_im.models.chat.new_participants_selection.call(null,db));
var chat_id = syng_im.models.chat.current_chat_id.call(null,db);
syng_im.models.chats.chat_add_participants.call(null,chat_id,identities);

syng_im.navigation.nav_pop.call(null,navigator);

var seq__45793_45797 = cljs.core.seq.call(null,identities);
var chunk__45794_45798 = null;
var count__45795_45799 = (0);
var i__45796_45800 = (0);
while(true){
if((i__45796_45800 < count__45795_45799)){
var ident_45801 = cljs.core._nth.call(null,chunk__45794_45798,i__45796_45800);
syng_im.protocol.api.group_add_participant.call(null,chat_id,ident_45801);

var G__45802 = seq__45793_45797;
var G__45803 = chunk__45794_45798;
var G__45804 = count__45795_45799;
var G__45805 = (i__45796_45800 + (1));
seq__45793_45797 = G__45802;
chunk__45794_45798 = G__45803;
count__45795_45799 = G__45804;
i__45796_45800 = G__45805;
continue;
} else {
var temp__4425__auto___45806 = cljs.core.seq.call(null,seq__45793_45797);
if(temp__4425__auto___45806){
var seq__45793_45807__$1 = temp__4425__auto___45806;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45793_45807__$1)){
var c__17658__auto___45808 = cljs.core.chunk_first.call(null,seq__45793_45807__$1);
var G__45809 = cljs.core.chunk_rest.call(null,seq__45793_45807__$1);
var G__45810 = c__17658__auto___45808;
var G__45811 = cljs.core.count.call(null,c__17658__auto___45808);
var G__45812 = (0);
seq__45793_45797 = G__45809;
chunk__45794_45798 = G__45810;
count__45795_45799 = G__45811;
i__45796_45800 = G__45812;
continue;
} else {
var ident_45813 = cljs.core.first.call(null,seq__45793_45807__$1);
syng_im.protocol.api.group_add_participant.call(null,chat_id,ident_45813);

var G__45814 = cljs.core.next.call(null,seq__45793_45807__$1);
var G__45815 = null;
var G__45816 = (0);
var G__45817 = (0);
seq__45793_45797 = G__45814;
chunk__45794_45798 = G__45815;
count__45795_45799 = G__45816;
i__45796_45800 = G__45817;
continue;
}
} else {
}
}
break;
}

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"show-group-new","show-group-new",1321528556),(function (db,p__45818){
var vec__45819 = p__45818;
var action = cljs.core.nth.call(null,vec__45819,(0),null);
var navigator = cljs.core.nth.call(null,vec__45819,(1),null);
syng_im.utils.logging.debug.call(null,action);

syng_im.navigation.nav_push.call(null,navigator,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view-id","view-id",1118263032),new cljs.core.Keyword(null,"new-group","new-group",-1853027446)], null));

return syng_im.models.chat.clear_new_group.call(null,db);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"select-for-new-group","select-for-new-group",-242285908),(function (db,p__45820){
var vec__45821 = p__45820;
var action = cljs.core.nth.call(null,vec__45821,(0),null);
var identity = cljs.core.nth.call(null,vec__45821,(1),null);
var add_QMARK_ = cljs.core.nth.call(null,vec__45821,(2),null);
syng_im.utils.logging.debug.call(null,action,identity,add_QMARK_);

return syng_im.models.chat.update_new_group_selection.call(null,db,identity,add_QMARK_);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"create-new-group","create-new-group",953212743),(function (db,p__45822){
var vec__45823 = p__45822;
var action = cljs.core.nth.call(null,vec__45823,(0),null);
var group_name = cljs.core.nth.call(null,vec__45823,(1),null);
var navigator = cljs.core.nth.call(null,vec__45823,(2),null);
syng_im.utils.logging.debug.call(null,action);

var identities = cljs.core.vec.call(null,syng_im.models.chat.new_group_selection.call(null,db));
var group_id = syng_im.protocol.api.start_group_chat.call(null,identities,group_name);
var db__$1 = syng_im.models.chats.create_chat.call(null,db,group_id,identities,true,group_name);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-chat","show-chat",-1372456583),group_id,navigator,new cljs.core.Keyword(null,"replace","replace",-786587770)], null));

return db__$1;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"group-chat-invite-received","group-chat-invite-received",784007762),(function (db,p__45824){
var vec__45825 = p__45824;
var action = cljs.core.nth.call(null,vec__45825,(0),null);
var from = cljs.core.nth.call(null,vec__45825,(1),null);
var group_id = cljs.core.nth.call(null,vec__45825,(2),null);
var identities = cljs.core.nth.call(null,vec__45825,(3),null);
var group_name = cljs.core.nth.call(null,vec__45825,(4),null);
syng_im.utils.logging.debug.call(null,action,from,group_id,identities);

return syng_im.models.chats.create_chat.call(null,db,group_id,identities,true,group_name);
}));

//# sourceMappingURL=handlers.js.map