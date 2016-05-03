// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.protocol.api');
goog.require('cljs.core');
goog.require('syng_im.utils.logging');
goog.require('syng_im.protocol.handler');
goog.require('syng_im.protocol.user_handler');
goog.require('syng_im.utils.random');
goog.require('syng_im.protocol.defaults');
goog.require('cljs.core.async');
goog.require('syng_im.protocol.web3');
goog.require('syng_im.protocol.state.state');
goog.require('syng_im.protocol.group_chat');
goog.require('syng_im.utils.encryption');
goog.require('syng_im.protocol.state.group_chat');
goog.require('syng_im.protocol.delivery');
goog.require('syng_im.protocol.state.delivery');
syng_im.protocol.api.create_connection = (function syng_im$protocol$api$create_connection(ethereum_rpc_url){
return syng_im.protocol.web3.make_web3.call(null,ethereum_rpc_url);
});
syng_im.protocol.api.my_identity = (function syng_im$protocol$api$my_identity(){
return syng_im.protocol.state.state.my_identity.call(null);
});
/**
 * Required [handler ethereum-rpc-url storage]
 * Optional [identity - if not passed a new identity is created automatically
 *           active-group-ids - list of active group ids]
 * 
 * (fn handler [{:keys [event-type...}])
 * 
 * :event-type can be:
 * 
 * :new-msg - [from to payload]
 * :new-group-msg [from group-id payload]
 * :error - [error-msg details]
 * :msg-acked [msg-id from]
 * :delivery-failed [msg-id]
 * :new-group-chat [from group-id]
 * :group-chat-invite-acked [ack-msg-id from group-id]
 * :group-new-participant [identity group-id from msg-id]
 * :group-removed-participant [from identity group-id msg-id]
 * :removed-from-group [from group-id msg-id]
 * :participant-left-group [from group-id msg-id]
 * :initialized [identity]
 * 
 * :new-msg, new-group-msg, msg-acked should be handled idempotently (may be called multiple times for the same msg-id)
 * 
 */
syng_im.protocol.api.init_protocol = (function syng_im$protocol$api$init_protocol(p__29016){
var map__29166 = p__29016;
var map__29166__$1 = ((((!((map__29166 == null)))?((((map__29166.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29166.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29166):map__29166);
var handler = cljs.core.get.call(null,map__29166__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var ethereum_rpc_url = cljs.core.get.call(null,map__29166__$1,new cljs.core.Keyword(null,"ethereum-rpc-url","ethereum-rpc-url",-1244814980));
var storage = cljs.core.get.call(null,map__29166__$1,new cljs.core.Keyword(null,"storage","storage",1867247511));
var identity = cljs.core.get.call(null,map__29166__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var active_group_ids = cljs.core.get.call(null,map__29166__$1,new cljs.core.Keyword(null,"active-group-ids","active-group-ids",648398295));
syng_im.protocol.state.state.set_storage.call(null,storage);

syng_im.protocol.state.state.set_handler.call(null,handler);

var c__20655__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20655__auto__,map__29166,map__29166__$1,handler,ethereum_rpc_url,storage,identity,active_group_ids){
return (function (){
var f__20656__auto__ = (function (){var switch__20543__auto__ = ((function (c__20655__auto__,map__29166,map__29166__$1,handler,ethereum_rpc_url,storage,identity,active_group_ids){
return (function (state_29264){
var state_val_29265 = (state_29264[(1)]);
if((state_val_29265 === (7))){
var inst_29180 = (state_29264[(7)]);
var inst_29185 = inst_29180.cljs$lang$protocol_mask$partition0$;
var inst_29186 = (inst_29185 & (64));
var inst_29187 = inst_29180.cljs$core$ISeq$;
var inst_29188 = (inst_29186) || (inst_29187);
var state_29264__$1 = state_29264;
if(cljs.core.truth_(inst_29188)){
var statearr_29266_29315 = state_29264__$1;
(statearr_29266_29315[(1)] = (10));

} else {
var statearr_29267_29316 = state_29264__$1;
(statearr_29267_29316[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (20))){
var inst_29256 = (state_29264[(2)]);
var state_29264__$1 = state_29264;
var statearr_29268_29317 = state_29264__$1;
(statearr_29268_29317[(2)] = inst_29256);

(statearr_29268_29317[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (1))){
var inst_29169 = syng_im.protocol.api.create_connection.call(null,ethereum_rpc_url);
var state_29264__$1 = (function (){var statearr_29269 = state_29264;
(statearr_29269[(8)] = inst_29169);

return statearr_29269;
})();
if(cljs.core.truth_(identity)){
var statearr_29270_29318 = state_29264__$1;
(statearr_29270_29318[(1)] = (2));

} else {
var statearr_29271_29319 = state_29264__$1;
(statearr_29271_29319[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (24))){
var inst_29231 = (state_29264[(9)]);
var inst_29235 = cljs.core.chunk_first.call(null,inst_29231);
var inst_29236 = cljs.core.chunk_rest.call(null,inst_29231);
var inst_29237 = cljs.core.count.call(null,inst_29235);
var inst_29212 = inst_29236;
var inst_29213 = inst_29235;
var inst_29214 = inst_29237;
var inst_29215 = (0);
var state_29264__$1 = (function (){var statearr_29272 = state_29264;
(statearr_29272[(10)] = inst_29213);

(statearr_29272[(11)] = inst_29214);

(statearr_29272[(12)] = inst_29212);

(statearr_29272[(13)] = inst_29215);

return statearr_29272;
})();
var statearr_29273_29320 = state_29264__$1;
(statearr_29273_29320[(2)] = null);

(statearr_29273_29320[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (4))){
var inst_29180 = (state_29264[(7)]);
var inst_29180__$1 = (state_29264[(2)]);
var inst_29182 = (inst_29180__$1 == null);
var inst_29183 = cljs.core.not.call(null,inst_29182);
var state_29264__$1 = (function (){var statearr_29274 = state_29264;
(statearr_29274[(7)] = inst_29180__$1);

return statearr_29274;
})();
if(inst_29183){
var statearr_29275_29321 = state_29264__$1;
(statearr_29275_29321[(1)] = (7));

} else {
var statearr_29276_29322 = state_29264__$1;
(statearr_29276_29322[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (15))){
var inst_29200 = (state_29264[(14)]);
var inst_29169 = (state_29264[(8)]);
var inst_29200__$1 = (state_29264[(2)]);
var inst_29201 = cljs.core.get.call(null,inst_29200__$1,new cljs.core.Keyword(null,"public","public",1566243851));
var inst_29202 = cljs.core.get.call(null,inst_29200__$1,new cljs.core.Keyword(null,"private","private",-558947994));
var inst_29203 = syng_im.protocol.state.state.set_connection.call(null,inst_29169);
var inst_29204 = syng_im.protocol.state.state.set_identity.call(null,inst_29201);
var inst_29205 = syng_im.protocol.web3.listen.call(null,inst_29169,syng_im.protocol.handler.handle_incoming_whisper_msg);
var inst_29206 = syng_im.protocol.delivery.start_delivery_loop.call(null);
var inst_29211 = cljs.core.seq.call(null,active_group_ids);
var inst_29212 = inst_29211;
var inst_29213 = null;
var inst_29214 = (0);
var inst_29215 = (0);
var state_29264__$1 = (function (){var statearr_29277 = state_29264;
(statearr_29277[(15)] = inst_29202);

(statearr_29277[(10)] = inst_29213);

(statearr_29277[(16)] = inst_29206);

(statearr_29277[(17)] = inst_29203);

(statearr_29277[(18)] = inst_29205);

(statearr_29277[(14)] = inst_29200__$1);

(statearr_29277[(19)] = inst_29204);

(statearr_29277[(11)] = inst_29214);

(statearr_29277[(12)] = inst_29212);

(statearr_29277[(13)] = inst_29215);

return statearr_29277;
})();
var statearr_29278_29323 = state_29264__$1;
(statearr_29278_29323[(2)] = null);

(statearr_29278_29323[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (21))){
var inst_29231 = (state_29264[(9)]);
var inst_29233 = cljs.core.chunked_seq_QMARK_.call(null,inst_29231);
var state_29264__$1 = state_29264;
if(inst_29233){
var statearr_29279_29324 = state_29264__$1;
(statearr_29279_29324[(1)] = (24));

} else {
var statearr_29280_29325 = state_29264__$1;
(statearr_29280_29325[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (13))){
var inst_29180 = (state_29264[(7)]);
var inst_29197 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29180);
var state_29264__$1 = state_29264;
var statearr_29281_29326 = state_29264__$1;
(statearr_29281_29326[(2)] = inst_29197);

(statearr_29281_29326[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (22))){
var state_29264__$1 = state_29264;
var statearr_29282_29327 = state_29264__$1;
(statearr_29282_29327[(2)] = null);

(statearr_29282_29327[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (6))){
var inst_29178 = (state_29264[(2)]);
var state_29264__$1 = state_29264;
var statearr_29283_29328 = state_29264__$1;
(statearr_29283_29328[(2)] = inst_29178);

(statearr_29283_29328[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (25))){
var inst_29231 = (state_29264[(9)]);
var inst_29169 = (state_29264[(8)]);
var inst_29240 = cljs.core.first.call(null,inst_29231);
var inst_29241 = [new cljs.core.Keyword(null,"topics","topics",625768208)];
var inst_29242 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29243 = [inst_29240];
var inst_29244 = (new cljs.core.PersistentVector(null,1,(5),inst_29242,inst_29243,null));
var inst_29245 = [inst_29244];
var inst_29246 = cljs.core.PersistentHashMap.fromArrays(inst_29241,inst_29245);
var inst_29247 = syng_im.protocol.web3.listen.call(null,inst_29169,syng_im.protocol.handler.handle_incoming_whisper_msg,inst_29246);
var inst_29248 = cljs.core.next.call(null,inst_29231);
var inst_29212 = inst_29248;
var inst_29213 = null;
var inst_29214 = (0);
var inst_29215 = (0);
var state_29264__$1 = (function (){var statearr_29284 = state_29264;
(statearr_29284[(10)] = inst_29213);

(statearr_29284[(11)] = inst_29214);

(statearr_29284[(12)] = inst_29212);

(statearr_29284[(20)] = inst_29247);

(statearr_29284[(13)] = inst_29215);

return statearr_29284;
})();
var statearr_29285_29329 = state_29264__$1;
(statearr_29285_29329[(2)] = null);

(statearr_29285_29329[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (17))){
var inst_29200 = (state_29264[(14)]);
var inst_29258 = (state_29264[(2)]);
var inst_29259 = [new cljs.core.Keyword(null,"identity","identity",1647396035)];
var inst_29260 = [inst_29200];
var inst_29261 = cljs.core.PersistentHashMap.fromArrays(inst_29259,inst_29260);
var inst_29262 = syng_im.protocol.user_handler.invoke_user_handler.call(null,new cljs.core.Keyword(null,"initialized","initialized",-962017594),inst_29261);
var state_29264__$1 = (function (){var statearr_29286 = state_29264;
(statearr_29286[(21)] = inst_29258);

return statearr_29286;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29264__$1,inst_29262);
} else {
if((state_val_29265 === (3))){
var inst_29169 = (state_29264[(8)]);
var inst_29176 = syng_im.protocol.web3.create_identity.call(null,inst_29169);
var state_29264__$1 = state_29264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29264__$1,(6),inst_29176);
} else {
if((state_val_29265 === (12))){
var inst_29192 = (state_29264[(2)]);
var state_29264__$1 = state_29264;
var statearr_29287_29330 = state_29264__$1;
(statearr_29287_29330[(2)] = inst_29192);

(statearr_29287_29330[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (2))){
var inst_29169 = (state_29264[(8)]);
var inst_29171 = new cljs.core.Keyword(null,"private","private",-558947994).cljs$core$IFn$_invoke$arity$1(identity);
var inst_29172 = syng_im.protocol.web3.add_identity.call(null,inst_29169,inst_29171);
var state_29264__$1 = state_29264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29264__$1,(5),inst_29172);
} else {
if((state_val_29265 === (23))){
var inst_29254 = (state_29264[(2)]);
var state_29264__$1 = state_29264;
var statearr_29288_29331 = state_29264__$1;
(statearr_29288_29331[(2)] = inst_29254);

(statearr_29288_29331[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (19))){
var inst_29231 = (state_29264[(9)]);
var inst_29212 = (state_29264[(12)]);
var inst_29231__$1 = cljs.core.seq.call(null,inst_29212);
var state_29264__$1 = (function (){var statearr_29289 = state_29264;
(statearr_29289[(9)] = inst_29231__$1);

return statearr_29289;
})();
if(inst_29231__$1){
var statearr_29290_29332 = state_29264__$1;
(statearr_29290_29332[(1)] = (21));

} else {
var statearr_29291_29333 = state_29264__$1;
(statearr_29291_29333[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (11))){
var state_29264__$1 = state_29264;
var statearr_29292_29334 = state_29264__$1;
(statearr_29292_29334[(2)] = false);

(statearr_29292_29334[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (9))){
var inst_29195 = (state_29264[(2)]);
var state_29264__$1 = state_29264;
if(cljs.core.truth_(inst_29195)){
var statearr_29293_29335 = state_29264__$1;
(statearr_29293_29335[(1)] = (13));

} else {
var statearr_29294_29336 = state_29264__$1;
(statearr_29294_29336[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (5))){
var inst_29174 = (state_29264[(2)]);
var state_29264__$1 = (function (){var statearr_29295 = state_29264;
(statearr_29295[(22)] = inst_29174);

return statearr_29295;
})();
var statearr_29296_29337 = state_29264__$1;
(statearr_29296_29337[(2)] = identity);

(statearr_29296_29337[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (14))){
var inst_29180 = (state_29264[(7)]);
var state_29264__$1 = state_29264;
var statearr_29297_29338 = state_29264__$1;
(statearr_29297_29338[(2)] = inst_29180);

(statearr_29297_29338[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (26))){
var inst_29251 = (state_29264[(2)]);
var state_29264__$1 = state_29264;
var statearr_29298_29339 = state_29264__$1;
(statearr_29298_29339[(2)] = inst_29251);

(statearr_29298_29339[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (16))){
var inst_29214 = (state_29264[(11)]);
var inst_29215 = (state_29264[(13)]);
var inst_29217 = (inst_29215 < inst_29214);
var inst_29218 = inst_29217;
var state_29264__$1 = state_29264;
if(cljs.core.truth_(inst_29218)){
var statearr_29302_29340 = state_29264__$1;
(statearr_29302_29340[(1)] = (18));

} else {
var statearr_29303_29341 = state_29264__$1;
(statearr_29303_29341[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (10))){
var state_29264__$1 = state_29264;
var statearr_29304_29342 = state_29264__$1;
(statearr_29304_29342[(2)] = true);

(statearr_29304_29342[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (18))){
var inst_29213 = (state_29264[(10)]);
var inst_29214 = (state_29264[(11)]);
var inst_29212 = (state_29264[(12)]);
var inst_29215 = (state_29264[(13)]);
var inst_29169 = (state_29264[(8)]);
var inst_29220 = cljs.core._nth.call(null,inst_29213,inst_29215);
var inst_29221 = [new cljs.core.Keyword(null,"topics","topics",625768208)];
var inst_29222 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29223 = [inst_29220];
var inst_29224 = (new cljs.core.PersistentVector(null,1,(5),inst_29222,inst_29223,null));
var inst_29225 = [inst_29224];
var inst_29226 = cljs.core.PersistentHashMap.fromArrays(inst_29221,inst_29225);
var inst_29227 = syng_im.protocol.web3.listen.call(null,inst_29169,syng_im.protocol.handler.handle_incoming_whisper_msg,inst_29226);
var inst_29228 = (inst_29215 + (1));
var tmp29299 = inst_29213;
var tmp29300 = inst_29214;
var tmp29301 = inst_29212;
var inst_29212__$1 = tmp29301;
var inst_29213__$1 = tmp29299;
var inst_29214__$1 = tmp29300;
var inst_29215__$1 = inst_29228;
var state_29264__$1 = (function (){var statearr_29305 = state_29264;
(statearr_29305[(10)] = inst_29213__$1);

(statearr_29305[(23)] = inst_29227);

(statearr_29305[(11)] = inst_29214__$1);

(statearr_29305[(12)] = inst_29212__$1);

(statearr_29305[(13)] = inst_29215__$1);

return statearr_29305;
})();
var statearr_29306_29343 = state_29264__$1;
(statearr_29306_29343[(2)] = null);

(statearr_29306_29343[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29265 === (8))){
var state_29264__$1 = state_29264;
var statearr_29307_29344 = state_29264__$1;
(statearr_29307_29344[(2)] = false);

(statearr_29307_29344[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20655__auto__,map__29166,map__29166__$1,handler,ethereum_rpc_url,storage,identity,active_group_ids))
;
return ((function (switch__20543__auto__,c__20655__auto__,map__29166,map__29166__$1,handler,ethereum_rpc_url,storage,identity,active_group_ids){
return (function() {
var syng_im$protocol$api$init_protocol_$_state_machine__20544__auto__ = null;
var syng_im$protocol$api$init_protocol_$_state_machine__20544__auto____0 = (function (){
var statearr_29311 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29311[(0)] = syng_im$protocol$api$init_protocol_$_state_machine__20544__auto__);

(statearr_29311[(1)] = (1));

return statearr_29311;
});
var syng_im$protocol$api$init_protocol_$_state_machine__20544__auto____1 = (function (state_29264){
while(true){
var ret_value__20545__auto__ = (function (){try{while(true){
var result__20546__auto__ = switch__20543__auto__.call(null,state_29264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20546__auto__;
}
break;
}
}catch (e29312){if((e29312 instanceof Object)){
var ex__20547__auto__ = e29312;
var statearr_29313_29345 = state_29264;
(statearr_29313_29345[(5)] = ex__20547__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29346 = state_29264;
state_29264 = G__29346;
continue;
} else {
return ret_value__20545__auto__;
}
break;
}
});
syng_im$protocol$api$init_protocol_$_state_machine__20544__auto__ = function(state_29264){
switch(arguments.length){
case 0:
return syng_im$protocol$api$init_protocol_$_state_machine__20544__auto____0.call(this);
case 1:
return syng_im$protocol$api$init_protocol_$_state_machine__20544__auto____1.call(this,state_29264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
syng_im$protocol$api$init_protocol_$_state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$0 = syng_im$protocol$api$init_protocol_$_state_machine__20544__auto____0;
syng_im$protocol$api$init_protocol_$_state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$1 = syng_im$protocol$api$init_protocol_$_state_machine__20544__auto____1;
return syng_im$protocol$api$init_protocol_$_state_machine__20544__auto__;
})()
;})(switch__20543__auto__,c__20655__auto__,map__29166,map__29166__$1,handler,ethereum_rpc_url,storage,identity,active_group_ids))
})();
var state__20657__auto__ = (function (){var statearr_29314 = f__20656__auto__.call(null);
(statearr_29314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20655__auto__);

return statearr_29314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20657__auto__);
});})(c__20655__auto__,map__29166,map__29166__$1,handler,ethereum_rpc_url,storage,identity,active_group_ids))
);

return c__20655__auto__;
});
syng_im.protocol.api.send_user_msg = (function syng_im$protocol$api$send_user_msg(p__29347){
var map__29352 = p__29347;
var map__29352__$1 = ((((!((map__29352 == null)))?((((map__29352.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29352.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29352):map__29352);
var to = cljs.core.get.call(null,map__29352__$1,new cljs.core.Keyword(null,"to","to",192099007));
var content = cljs.core.get.call(null,map__29352__$1,new cljs.core.Keyword(null,"content","content",15833224));
var map__29354 = syng_im.protocol.web3.make_msg.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),syng_im.protocol.state.state.my_identity.call(null),new cljs.core.Keyword(null,"to","to",192099007),to,new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),content,new cljs.core.Keyword(null,"content-type","content-type",-508222634),syng_im.protocol.defaults.default_content_type,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"user-msg","user-msg",979158758)], null)], null));
var map__29354__$1 = ((((!((map__29354 == null)))?((((map__29354.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29354.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29354):map__29354);
var new_msg = map__29354__$1;
var msg_id = cljs.core.get.call(null,map__29354__$1,new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869));
var msg = cljs.core.get.call(null,map__29354__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
syng_im.protocol.state.delivery.add_pending_message.call(null,msg_id,msg);

syng_im.protocol.web3.post_msg.call(null,syng_im.protocol.state.state.connection.call(null),msg);

return new_msg;
});
syng_im.protocol.api.send_group_user_msg = (function syng_im$protocol$api$send_group_user_msg(p__29356){
var map__29359 = p__29356;
var map__29359__$1 = ((((!((map__29359 == null)))?((((map__29359.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29359.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29359):map__29359);
var group_id = cljs.core.get.call(null,map__29359__$1,new cljs.core.Keyword(null,"group-id","group-id",-1316082778));
var content = cljs.core.get.call(null,map__29359__$1,new cljs.core.Keyword(null,"content","content",15833224));
return syng_im.protocol.group_chat.send_group_msg.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"group-id","group-id",-1316082778),group_id,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"group-user-msg","group-user-msg",1630678776),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",15833224),content,new cljs.core.Keyword(null,"content-type","content-type",-508222634),syng_im.protocol.defaults.default_content_type], null)], null));
});
syng_im.protocol.api.start_group_chat = (function syng_im$protocol$api$start_group_chat(var_args){
var args29361 = [];
var len__17913__auto___29374 = arguments.length;
var i__17914__auto___29375 = (0);
while(true){
if((i__17914__auto___29375 < len__17913__auto___29374)){
args29361.push((arguments[i__17914__auto___29375]));

var G__29376 = (i__17914__auto___29375 + (1));
i__17914__auto___29375 = G__29376;
continue;
} else {
}
break;
}

var G__29363 = args29361.length;
switch (G__29363) {
case 1:
return syng_im.protocol.api.start_group_chat.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return syng_im.protocol.api.start_group_chat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29361.length)].join('')));

}
});

syng_im.protocol.api.start_group_chat.cljs$core$IFn$_invoke$arity$1 = (function (identities){
return syng_im.protocol.api.start_group_chat.call(null,identities,null);
});

syng_im.protocol.api.start_group_chat.cljs$core$IFn$_invoke$arity$2 = (function (identities,group_name){
var group_topic = syng_im.utils.random.id.call(null);
var keypair = syng_im.utils.encryption.new_keypair.call(null);
var store = syng_im.protocol.state.state.storage.call(null);
var connection = syng_im.protocol.state.state.connection.call(null);
var my_identity = syng_im.protocol.state.state.my_identity.call(null);
var identities__$1 = cljs.core.conj.call(null,cljs.core.set.call(null,identities),my_identity);
syng_im.protocol.state.group_chat.save_keypair.call(null,store,group_topic,keypair);

syng_im.protocol.state.group_chat.save_identities.call(null,store,group_topic,identities__$1);

syng_im.protocol.state.group_chat.save_group_admin.call(null,store,group_topic,my_identity);

syng_im.protocol.web3.listen.call(null,connection,syng_im.protocol.handler.handle_incoming_whisper_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"topics","topics",625768208),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_topic], null)], null));

var seq__29364_29378 = cljs.core.seq.call(null,identities__$1);
var chunk__29366_29379 = null;
var count__29367_29380 = (0);
var i__29368_29381 = (0);
while(true){
if((i__29368_29381 < count__29367_29380)){
var ident_29382 = cljs.core._nth.call(null,chunk__29366_29379,i__29368_29381);
if(!(cljs.core._EQ_.call(null,ident_29382,my_identity))){
var map__29370_29383 = syng_im.protocol.group_chat.init_group_chat_msg.call(null,ident_29382,group_topic,identities__$1,keypair,group_name);
var map__29370_29384__$1 = ((((!((map__29370_29383 == null)))?((((map__29370_29383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29370_29383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29370_29383):map__29370_29383);
var msg_id_29385 = cljs.core.get.call(null,map__29370_29384__$1,new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869));
var msg_29386 = cljs.core.get.call(null,map__29370_29384__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
syng_im.protocol.state.delivery.add_pending_message.call(null,msg_id_29385,msg_29386,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"internal?","internal?",-383058705),true], null));

syng_im.protocol.web3.post_msg.call(null,connection,msg_29386);

var G__29387 = seq__29364_29378;
var G__29388 = chunk__29366_29379;
var G__29389 = count__29367_29380;
var G__29390 = (i__29368_29381 + (1));
seq__29364_29378 = G__29387;
chunk__29366_29379 = G__29388;
count__29367_29380 = G__29389;
i__29368_29381 = G__29390;
continue;
} else {
var G__29391 = seq__29364_29378;
var G__29392 = chunk__29366_29379;
var G__29393 = count__29367_29380;
var G__29394 = (i__29368_29381 + (1));
seq__29364_29378 = G__29391;
chunk__29366_29379 = G__29392;
count__29367_29380 = G__29393;
i__29368_29381 = G__29394;
continue;
}
} else {
var temp__4425__auto___29395 = cljs.core.seq.call(null,seq__29364_29378);
if(temp__4425__auto___29395){
var seq__29364_29396__$1 = temp__4425__auto___29395;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29364_29396__$1)){
var c__17658__auto___29397 = cljs.core.chunk_first.call(null,seq__29364_29396__$1);
var G__29398 = cljs.core.chunk_rest.call(null,seq__29364_29396__$1);
var G__29399 = c__17658__auto___29397;
var G__29400 = cljs.core.count.call(null,c__17658__auto___29397);
var G__29401 = (0);
seq__29364_29378 = G__29398;
chunk__29366_29379 = G__29399;
count__29367_29380 = G__29400;
i__29368_29381 = G__29401;
continue;
} else {
var ident_29402 = cljs.core.first.call(null,seq__29364_29396__$1);
if(!(cljs.core._EQ_.call(null,ident_29402,my_identity))){
var map__29372_29403 = syng_im.protocol.group_chat.init_group_chat_msg.call(null,ident_29402,group_topic,identities__$1,keypair,group_name);
var map__29372_29404__$1 = ((((!((map__29372_29403 == null)))?((((map__29372_29403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29372_29403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29372_29403):map__29372_29403);
var msg_id_29405 = cljs.core.get.call(null,map__29372_29404__$1,new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869));
var msg_29406 = cljs.core.get.call(null,map__29372_29404__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
syng_im.protocol.state.delivery.add_pending_message.call(null,msg_id_29405,msg_29406,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"internal?","internal?",-383058705),true], null));

syng_im.protocol.web3.post_msg.call(null,connection,msg_29406);

var G__29407 = cljs.core.next.call(null,seq__29364_29396__$1);
var G__29408 = null;
var G__29409 = (0);
var G__29410 = (0);
seq__29364_29378 = G__29407;
chunk__29366_29379 = G__29408;
count__29367_29380 = G__29409;
i__29368_29381 = G__29410;
continue;
} else {
var G__29411 = cljs.core.next.call(null,seq__29364_29396__$1);
var G__29412 = null;
var G__29413 = (0);
var G__29414 = (0);
seq__29364_29378 = G__29411;
chunk__29366_29379 = G__29412;
count__29367_29380 = G__29413;
i__29368_29381 = G__29414;
continue;
}
}
} else {
}
}
break;
}

return group_topic;
});

syng_im.protocol.api.start_group_chat.cljs$lang$maxFixedArity = 2;
/**
 * Only call if you are the group-admin
 */
syng_im.protocol.api.group_add_participant = (function syng_im$protocol$api$group_add_participant(group_id,new_peer_identity){
var store = syng_im.protocol.state.state.storage.call(null);
var my_identity = syng_im.protocol.api.my_identity.call(null);
if(cljs.core.not.call(null,syng_im.protocol.state.group_chat.group_admin_QMARK_.call(null,store,group_id,my_identity))){
return syng_im.utils.logging.error.call(null,"Called group-add-participant but not group admin, group-id:",group_id,"my-identity:",my_identity);
} else {
var connection = syng_im.protocol.state.state.connection.call(null);
var identities = cljs.core.conj.call(null,syng_im.protocol.state.group_chat.get_identities.call(null,store,group_id),new_peer_identity);
var keypair = syng_im.protocol.state.group_chat.get_keypair.call(null,store,group_id);
syng_im.protocol.state.group_chat.save_identities.call(null,store,group_id,identities);

var map__29417_29419 = syng_im.protocol.group_chat.group_add_participant_msg.call(null,new_peer_identity,group_id,identities,keypair);
var map__29417_29420__$1 = ((((!((map__29417_29419 == null)))?((((map__29417_29419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29417_29419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29417_29419):map__29417_29419);
var msg_id_29421 = cljs.core.get.call(null,map__29417_29420__$1,new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869));
var msg_29422 = cljs.core.get.call(null,map__29417_29420__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
syng_im.protocol.state.delivery.add_pending_message.call(null,msg_id_29421,msg_29422,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"internal?","internal?",-383058705),true], null));

syng_im.protocol.web3.post_msg.call(null,connection,msg_29422);

return syng_im.protocol.group_chat.send_group_msg.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"group-id","group-id",-1316082778),group_id,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"group-new-participant","group-new-participant",-1010013497),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"identity","identity",1647396035),new_peer_identity], null),new cljs.core.Keyword(null,"internal?","internal?",-383058705),true], null));
}
});
/**
 * Only call if you are the group-admin
 */
syng_im.protocol.api.group_remove_participant = (function syng_im$protocol$api$group_remove_participant(group_id,identity_to_remove){
var store = syng_im.protocol.state.state.storage.call(null);
var my_identity = syng_im.protocol.api.my_identity.call(null);
if(cljs.core.not.call(null,syng_im.protocol.state.group_chat.group_admin_QMARK_.call(null,store,group_id,my_identity))){
return syng_im.utils.logging.error.call(null,"Called group-remove-participant but not group admin, group-id:",group_id,"my-identity:",my_identity);
} else {
var connection = syng_im.protocol.state.state.connection.call(null);
var identities = cljs.core.disj.call(null,syng_im.protocol.state.group_chat.get_identities.call(null,store,group_id),identity_to_remove);
var keypair = syng_im.utils.encryption.new_keypair.call(null);
syng_im.protocol.state.group_chat.save_identities.call(null,store,group_id,identities);

syng_im.protocol.state.group_chat.save_keypair.call(null,store,group_id,keypair);

var seq__29435_29447 = cljs.core.seq.call(null,identities);
var chunk__29437_29448 = null;
var count__29438_29449 = (0);
var i__29439_29450 = (0);
while(true){
if((i__29439_29450 < count__29438_29449)){
var ident_29451 = cljs.core._nth.call(null,chunk__29437_29448,i__29439_29450);
if(!(cljs.core._EQ_.call(null,ident_29451,my_identity))){
var map__29441_29452 = syng_im.protocol.group_chat.group_remove_participant_msg.call(null,ident_29451,group_id,keypair,identity_to_remove);
var map__29441_29453__$1 = ((((!((map__29441_29452 == null)))?((((map__29441_29452.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29441_29452.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29441_29452):map__29441_29452);
var msg_id_29454 = cljs.core.get.call(null,map__29441_29453__$1,new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869));
var msg_29455 = cljs.core.get.call(null,map__29441_29453__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
syng_im.protocol.state.delivery.add_pending_message.call(null,msg_id_29454,msg_29455,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"internal?","internal?",-383058705),true], null));

syng_im.protocol.web3.post_msg.call(null,connection,msg_29455);

var G__29456 = seq__29435_29447;
var G__29457 = chunk__29437_29448;
var G__29458 = count__29438_29449;
var G__29459 = (i__29439_29450 + (1));
seq__29435_29447 = G__29456;
chunk__29437_29448 = G__29457;
count__29438_29449 = G__29458;
i__29439_29450 = G__29459;
continue;
} else {
var G__29460 = seq__29435_29447;
var G__29461 = chunk__29437_29448;
var G__29462 = count__29438_29449;
var G__29463 = (i__29439_29450 + (1));
seq__29435_29447 = G__29460;
chunk__29437_29448 = G__29461;
count__29438_29449 = G__29462;
i__29439_29450 = G__29463;
continue;
}
} else {
var temp__4425__auto___29464 = cljs.core.seq.call(null,seq__29435_29447);
if(temp__4425__auto___29464){
var seq__29435_29465__$1 = temp__4425__auto___29464;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29435_29465__$1)){
var c__17658__auto___29466 = cljs.core.chunk_first.call(null,seq__29435_29465__$1);
var G__29467 = cljs.core.chunk_rest.call(null,seq__29435_29465__$1);
var G__29468 = c__17658__auto___29466;
var G__29469 = cljs.core.count.call(null,c__17658__auto___29466);
var G__29470 = (0);
seq__29435_29447 = G__29467;
chunk__29437_29448 = G__29468;
count__29438_29449 = G__29469;
i__29439_29450 = G__29470;
continue;
} else {
var ident_29471 = cljs.core.first.call(null,seq__29435_29465__$1);
if(!(cljs.core._EQ_.call(null,ident_29471,my_identity))){
var map__29443_29472 = syng_im.protocol.group_chat.group_remove_participant_msg.call(null,ident_29471,group_id,keypair,identity_to_remove);
var map__29443_29473__$1 = ((((!((map__29443_29472 == null)))?((((map__29443_29472.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29443_29472.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29443_29472):map__29443_29472);
var msg_id_29474 = cljs.core.get.call(null,map__29443_29473__$1,new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869));
var msg_29475 = cljs.core.get.call(null,map__29443_29473__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
syng_im.protocol.state.delivery.add_pending_message.call(null,msg_id_29474,msg_29475,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"internal?","internal?",-383058705),true], null));

syng_im.protocol.web3.post_msg.call(null,connection,msg_29475);

var G__29476 = cljs.core.next.call(null,seq__29435_29465__$1);
var G__29477 = null;
var G__29478 = (0);
var G__29479 = (0);
seq__29435_29447 = G__29476;
chunk__29437_29448 = G__29477;
count__29438_29449 = G__29478;
i__29439_29450 = G__29479;
continue;
} else {
var G__29480 = cljs.core.next.call(null,seq__29435_29465__$1);
var G__29481 = null;
var G__29482 = (0);
var G__29483 = (0);
seq__29435_29447 = G__29480;
chunk__29437_29448 = G__29481;
count__29438_29449 = G__29482;
i__29439_29450 = G__29483;
continue;
}
}
} else {
}
}
break;
}

var map__29445 = syng_im.protocol.group_chat.removed_from_group_msg.call(null,group_id,identity_to_remove);
var map__29445__$1 = ((((!((map__29445 == null)))?((((map__29445.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29445.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29445):map__29445);
var msg_id = cljs.core.get.call(null,map__29445__$1,new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869));
var msg = cljs.core.get.call(null,map__29445__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
syng_im.protocol.state.delivery.add_pending_message.call(null,msg_id,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"internal?","internal?",-383058705),true], null));

return syng_im.protocol.web3.post_msg.call(null,connection,msg);
}
});
syng_im.protocol.api.leave_group_chat = (function syng_im$protocol$api$leave_group_chat(group_id){
var store = syng_im.protocol.state.state.storage.call(null);
var my_identity = syng_im.protocol.api.my_identity.call(null);
syng_im.protocol.group_chat.send_group_msg.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"group-id","group-id",-1316082778),group_id,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"left-group","left-group",-1322713521),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"identity","identity",1647396035),my_identity], null),new cljs.core.Keyword(null,"internal?","internal?",-383058705),true], null));

syng_im.protocol.state.group_chat.remove_group_data.call(null,store,group_id);

return syng_im.protocol.web3.stop_listener.call(null,group_id);
});
syng_im.protocol.api.current_connection = (function syng_im$protocol$api$current_connection(){
return syng_im.protocol.state.state.connection.call(null);
});

//# sourceMappingURL=api.js.map