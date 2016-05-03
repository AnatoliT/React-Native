// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.protocol.web3');
goog.require('cljs.core');
goog.require('syng_im.utils.logging');
goog.require('syng_im.protocol.user_handler');
goog.require('syng_im.utils.random');
goog.require('cljs.core.async');
goog.require('cljsjs.web3');
goog.require('syng_im.protocol.state.state');
goog.require('syng_im.utils.encryption');
syng_im.protocol.web3.syng_app_topic = "SYNG-APP-CHAT-TOPIC";
syng_im.protocol.web3.syng_msg_ttl = (100);
syng_im.protocol.web3.from_ascii = (function syng_im$protocol$web3$from_ascii(s){
return Web3.prototype.fromAscii(s);
});
syng_im.protocol.web3.to_ascii = (function syng_im$protocol$web3$to_ascii(s){
return Web3.prototype.toAscii(s);
});
syng_im.protocol.web3.whisper = (function syng_im$protocol$web3$whisper(web3){
return web3.shh;
});
syng_im.protocol.web3.make_topics = (function syng_im$protocol$web3$make_topics(topics){
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"topics","topics",625768208),cljs.core.mapv.call(null,syng_im.protocol.web3.from_ascii,topics)], null));
});
syng_im.protocol.web3.make_web3 = (function syng_im$protocol$web3$make_web3(rpc_url){
return (new Web3((new Web3.providers.HttpProvider(rpc_url))));
});
syng_im.protocol.web3.make_callback = (function syng_im$protocol$web3$make_callback(p__28137){
var map__28140 = p__28137;
var map__28140__$1 = ((((!((map__28140 == null)))?((((map__28140.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28140.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28140):map__28140);
var error_msg = cljs.core.get.call(null,map__28140__$1,new cljs.core.Keyword(null,"error-msg","error-msg",-1409360623));
var result_channel = cljs.core.get.call(null,map__28140__$1,new cljs.core.Keyword(null,"result-channel","result-channel",-1062968151));
return ((function (map__28140,map__28140__$1,error_msg,result_channel){
return (function (error,result){
if(cljs.core.truth_(error)){
syng_im.utils.logging.error.call(null,[cljs.core.str(error_msg),cljs.core.str(":")].join(''),error);

syng_im.protocol.user_handler.invoke_user_handler.call(null,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error-msg","error-msg",-1409360623),error_msg,new cljs.core.Keyword(null,"details","details",1956795411),error], null));
} else {
cljs.core.async.put_BANG_.call(null,result_channel,result);
}

return cljs.core.async.close_BANG_.call(null,result_channel);
});
;})(map__28140,map__28140__$1,error_msg,result_channel))
});
syng_im.protocol.web3.new_identity = (function syng_im$protocol$web3$new_identity(web3){
var result_channel = cljs.core.async.chan.call(null);
var callback = syng_im.protocol.web3.make_callback.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error-msg","error-msg",-1409360623),"Call to newIdentity failed",new cljs.core.Keyword(null,"result-channel","result-channel",-1062968151),result_channel], null));
web3.shh.newIdentity(callback);

return result_channel;
});
syng_im.protocol.web3.create_identity = (function syng_im$protocol$web3$create_identity(web3){
var result_channel = cljs.core.async.chan.call(null);
web3.currentProvider.sendAsync(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"jsonrpc","jsonrpc",1483657187),"2.0",new cljs.core.Keyword(null,"method","method",55703592),"shh_createIdentity",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092),(99999999999)], null)], null)),((function (result_channel){
return (function (error,result){
if(cljs.core.truth_(error)){
syng_im.utils.logging.error.call(null,[cljs.core.str("Call to shh_createIdentity failed"),cljs.core.str(":")].join(''),error);

syng_im.protocol.user_handler.invoke_user_handler.call(null,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error-msg","error-msg",-1409360623),"Call to shh_createIdentity failed",new cljs.core.Keyword(null,"details","details",1956795411),error], null));
} else {
var vec__28143_28144 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.js__GT_clj.call(null,result,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)));
var public_28145 = cljs.core.nth.call(null,vec__28143_28144,(0),null);
var private_28146 = cljs.core.nth.call(null,vec__28143_28144,(1),null);
cljs.core.async.put_BANG_.call(null,result_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"public","public",1566243851),public_28145,new cljs.core.Keyword(null,"private","private",-558947994),private_28146], null));
}

return cljs.core.async.close_BANG_.call(null,result_channel);
});})(result_channel))
);

return result_channel;
});
syng_im.protocol.web3.add_identity = (function syng_im$protocol$web3$add_identity(web3,private_key){
var result_channel = cljs.core.async.chan.call(null);
web3.currentProvider.sendAsync(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"jsonrpc","jsonrpc",1483657187),"2.0",new cljs.core.Keyword(null,"method","method",55703592),"shh_addIdentity",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [private_key], null),new cljs.core.Keyword(null,"id","id",-1388402092),(99999999999)], null)], null)),((function (result_channel){
return (function (error,result){
if(cljs.core.truth_(error)){
syng_im.utils.logging.error.call(null,[cljs.core.str("Call to shh_addIdentity failed"),cljs.core.str(":")].join(''),error);

syng_im.protocol.user_handler.invoke_user_handler.call(null,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error-msg","error-msg",-1409360623),"Call to shh_addIdentity failed",new cljs.core.Keyword(null,"details","details",1956795411),error], null));
} else {
cljs.core.async.put_BANG_.call(null,result_channel,cljs.core.js__GT_clj.call(null,result));
}

return cljs.core.async.close_BANG_.call(null,result_channel);
});})(result_channel))
);

return result_channel;
});
syng_im.protocol.web3.post_msg = (function syng_im$protocol$web3$post_msg(web3,msg){
var js_msg = cljs.core.clj__GT_js.call(null,msg);
syng_im.utils.logging.info.call(null,"Sending whisper message:",js_msg);

return syng_im.protocol.web3.whisper.call(null,web3).post(js_msg,((function (js_msg){
return (function (error,result){
if(cljs.core.truth_(error)){
var error_msg = "Call to shh.post() failed";
syng_im.utils.logging.error.call(null,[cljs.core.str(error_msg),cljs.core.str(":")].join(''),error);

return syng_im.protocol.user_handler.invoke_user_handler.call(null,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error-msg","error-msg",-1409360623),error_msg,new cljs.core.Keyword(null,"details","details",1956795411),error], null));
} else {
return null;
}
});})(js_msg))
);
});
syng_im.protocol.web3.encrypt_payload = (function syng_im$protocol$web3$encrypt_payload(public_key,clear_info,payload_str){
return [cljs.core.str(cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enc-payload","enc-payload",835567936),syng_im.utils.encryption.encrypt.call(null,public_key,payload_str)], null),clear_info))].join('');
});
/**
 * Returns [msg-id msg], `msg` is formed for Web3.shh.post()
 */
syng_im.protocol.web3.make_msg = (function syng_im$protocol$web3$make_msg(p__28147){
var map__28152 = p__28147;
var map__28152__$1 = ((((!((map__28152 == null)))?((((map__28152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28152):map__28152);
var from = cljs.core.get.call(null,map__28152__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.call(null,map__28152__$1,new cljs.core.Keyword(null,"to","to",192099007));
var ttl = cljs.core.get.call(null,map__28152__$1,new cljs.core.Keyword(null,"ttl","ttl",-1115275118),syng_im.protocol.web3.syng_msg_ttl);
var topics = cljs.core.get.call(null,map__28152__$1,new cljs.core.Keyword(null,"topics","topics",625768208),cljs.core.PersistentVector.EMPTY);
var payload = cljs.core.get.call(null,map__28152__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var encrypt_QMARK_ = cljs.core.get.call(null,map__28152__$1,new cljs.core.Keyword(null,"encrypt?","encrypt?",1215303258));
var public_key = cljs.core.get.call(null,map__28152__$1,new cljs.core.Keyword(null,"public-key","public-key",-2106850051));
var clear_info = cljs.core.get.call(null,map__28152__$1,new cljs.core.Keyword(null,"clear-info","clear-info",481595578));
var msg_id = syng_im.utils.random.id.call(null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869),msg_id,new cljs.core.Keyword(null,"msg","msg",-1386103444),(function (){var G__28154 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ttl","ttl",-1115275118),ttl,new cljs.core.Keyword(null,"topics","topics",625768208),cljs.core.mapv.call(null,syng_im.protocol.web3.from_ascii,cljs.core.conj.call(null,topics,syng_im.protocol.web3.syng_app_topic)),new cljs.core.Keyword(null,"payload","payload",-383036092),(function (){var G__28155 = cljs.core.merge.call(null,payload,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869),msg_id], null));
var G__28155__$1 = [cljs.core.str(G__28155)].join('')
;
var G__28155__$2 = (cljs.core.truth_(encrypt_QMARK_)?syng_im.protocol.web3.encrypt_payload.call(null,public_key,clear_info,G__28155__$1):G__28155__$1);
var G__28155__$3 = syng_im.protocol.web3.from_ascii.call(null,G__28155__$2)
;
return G__28155__$3;
})()], null);
var G__28154__$1 = (cljs.core.truth_(from)?cljs.core.assoc.call(null,G__28154,new cljs.core.Keyword(null,"from","from",1815293044),from):G__28154);
var G__28154__$2 = (cljs.core.truth_(to)?cljs.core.assoc.call(null,G__28154__$1,new cljs.core.Keyword(null,"to","to",192099007),to):G__28154__$1);
return G__28154__$2;
})()], null);
});
/**
 * Returns a filter which can be stopped with (stop-whisper-listener)
 */
syng_im.protocol.web3.listen = (function syng_im$protocol$web3$listen(var_args){
var args28156 = [];
var len__17913__auto___28162 = arguments.length;
var i__17914__auto___28163 = (0);
while(true){
if((i__17914__auto___28163 < len__17913__auto___28162)){
args28156.push((arguments[i__17914__auto___28163]));

var G__28164 = (i__17914__auto___28163 + (1));
i__17914__auto___28163 = G__28164;
continue;
} else {
}
break;
}

var G__28158 = args28156.length;
switch (G__28158) {
case 2:
return syng_im.protocol.web3.listen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return syng_im.protocol.web3.listen.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28156.length)].join('')));

}
});

syng_im.protocol.web3.listen.cljs$core$IFn$_invoke$arity$2 = (function (web3,msg_handler){
return syng_im.protocol.web3.listen.call(null,web3,msg_handler,cljs.core.PersistentArrayMap.EMPTY);
});

syng_im.protocol.web3.listen.cljs$core$IFn$_invoke$arity$3 = (function (web3,msg_handler,p__28159){
var map__28160 = p__28159;
var map__28160__$1 = ((((!((map__28160 == null)))?((((map__28160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28160):map__28160);
var opts = map__28160__$1;
var topics = cljs.core.get.call(null,map__28160__$1,new cljs.core.Keyword(null,"topics","topics",625768208),cljs.core.PersistentVector.EMPTY);
var topics__$1 = cljs.core.conj.call(null,topics,syng_im.protocol.web3.syng_app_topic);
var shh = syng_im.protocol.web3.whisper.call(null,web3);
var filter = shh.filter(syng_im.protocol.web3.make_topics.call(null,topics__$1),((function (topics__$1,shh,map__28160,map__28160__$1,opts,topics){
return (function (error,msg){
if(cljs.core.truth_(error)){
return syng_im.protocol.user_handler.invoke_user_handler.call(null,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error-msg","error-msg",-1409360623),error], null));
} else {
return msg_handler.call(null,web3,msg);
}
});})(topics__$1,shh,map__28160,map__28160__$1,opts,topics))
);
return syng_im.protocol.state.state.add_filter.call(null,topics__$1,filter);
});

syng_im.protocol.web3.listen.cljs$lang$maxFixedArity = 3;
syng_im.protocol.web3.stop_listener = (function syng_im$protocol$web3$stop_listener(group_topic){
var topics = cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_topic], null),syng_im.protocol.web3.syng_app_topic);
var filter = syng_im.protocol.state.state.get_filter.call(null,topics);
filter.stopWatching();

return syng_im.protocol.state.state.remove_filter.call(null,topics);
});

//# sourceMappingURL=web3.js.map