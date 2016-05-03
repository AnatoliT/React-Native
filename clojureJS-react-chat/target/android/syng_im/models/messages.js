// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.models.messages');
goog.require('cljs.core');
goog.require('syng_im.persistence.realm');
goog.require('cljs.reader');
goog.require('syng_im.utils.random');
goog.require('syng_im.db');
goog.require('syng_im.utils.logging');
syng_im.models.messages.save_message = (function syng_im$models$messages$save_message(chat_id,p__44691){
var map__44694 = p__44691;
var map__44694__$1 = ((((!((map__44694 == null)))?((((map__44694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44694):map__44694);
var msg = map__44694__$1;
var from = cljs.core.get.call(null,map__44694__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.call(null,map__44694__$1,new cljs.core.Keyword(null,"to","to",192099007),null);
var msg_id = cljs.core.get.call(null,map__44694__$1,new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869));
var content = cljs.core.get.call(null,map__44694__$1,new cljs.core.Keyword(null,"content","content",15833224));
var content_type = cljs.core.get.call(null,map__44694__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var outgoing = cljs.core.get.call(null,map__44694__$1,new cljs.core.Keyword(null,"outgoing","outgoing",1124752575),false);
syng_im.utils.logging.debug.call(null,"save-message",chat_id,msg);

if(cljs.core.truth_(syng_im.persistence.realm.exists_QMARK_.call(null,new cljs.core.Keyword(null,"msgs","msgs",-1176489773),new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869),msg_id))){
return null;
} else {
return syng_im.persistence.realm.write.call(null,((function (map__44694,map__44694__$1,msg,from,to,msg_id,content,content_type,outgoing){
return (function (){
return syng_im.persistence.realm.create.call(null,new cljs.core.Keyword(null,"msgs","msgs",-1176489773),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"delivery-status","delivery-status",-2013922127),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"chat-id","chat-id",1708052118),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"outgoing","outgoing",1124752575),new cljs.core.Keyword(null,"to","to",192099007)],[msg_id,content,null,from,chat_id,content_type,syng_im.utils.random.timestamp.call(null),outgoing,to]),true);
});})(map__44694,map__44694__$1,msg,from,to,msg_id,content,content_type,outgoing))
);
}
});
syng_im.models.messages.get_messages = (function syng_im$models$messages$get_messages(chat_id){
return syng_im.persistence.realm.sorted.call(null,syng_im.persistence.realm.get_by_field.call(null,new cljs.core.Keyword(null,"msgs","msgs",-1176489773),new cljs.core.Keyword(null,"chat-id","chat-id",1708052118),chat_id),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"desc","desc",2093485764));
});
syng_im.models.messages.message_by_id = (function syng_im$models$messages$message_by_id(msg_id){
return syng_im.persistence.realm.single_cljs.call(null,syng_im.persistence.realm.get_by_field.call(null,new cljs.core.Keyword(null,"msgs","msgs",-1176489773),new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869),msg_id));
});
syng_im.models.messages.update_message_BANG_ = (function syng_im$models$messages$update_message_BANG_(p__44696){
var map__44699 = p__44696;
var map__44699__$1 = ((((!((map__44699 == null)))?((((map__44699.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44699.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44699):map__44699);
var msg = map__44699__$1;
var msg_id = cljs.core.get.call(null,map__44699__$1,new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869));
syng_im.utils.logging.debug.call(null,"update-message!",msg);

return syng_im.persistence.realm.write.call(null,((function (map__44699,map__44699__$1,msg,msg_id){
return (function (){
if(cljs.core.truth_(syng_im.persistence.realm.exists_QMARK_.call(null,new cljs.core.Keyword(null,"msgs","msgs",-1176489773),new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869),msg_id))){
return syng_im.persistence.realm.create.call(null,new cljs.core.Keyword(null,"msgs","msgs",-1176489773),msg,true);
} else {
return null;
}
});})(map__44699,map__44699__$1,msg,msg_id))
);
});

//# sourceMappingURL=messages.js.map