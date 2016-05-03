// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.protocol.state.delivery');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('syng_im.utils.logging');
goog.require('syng_im.protocol.state.state');
syng_im.protocol.state.delivery.inc_retry_count = (function syng_im$protocol$state$delivery$inc_retry_count(msg_id){
return cljs.core.swap_BANG_.call(null,syng_im.protocol.state.state.state,(function (state){
if(cljs.core.truth_(cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pending-messages","pending-messages",-1838361905),msg_id], null)))){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pending-messages","pending-messages",-1838361905),msg_id,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875)], null),cljs.core.inc);
} else {
return state;
}
}));
});
syng_im.protocol.state.delivery.pending_QMARK_ = (function syng_im$protocol$state$delivery$pending_QMARK_(msg_id){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,syng_im.protocol.state.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pending-messages","pending-messages",-1838361905),msg_id], null));
});
syng_im.protocol.state.delivery.push_msg_to_delivery_queue = (function syng_im$protocol$state$delivery$push_msg_to_delivery_queue(state,msg_id){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delivery-queue","delivery-queue",-1260577064)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),cljs_time.core.now.call(null),new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869),msg_id], null));
});
syng_im.protocol.state.delivery.add_pending_message = (function syng_im$protocol$state$delivery$add_pending_message(var_args){
var args28189 = [];
var len__17913__auto___28195 = arguments.length;
var i__17914__auto___28196 = (0);
while(true){
if((i__17914__auto___28196 < len__17913__auto___28195)){
args28189.push((arguments[i__17914__auto___28196]));

var G__28197 = (i__17914__auto___28196 + (1));
i__17914__auto___28196 = G__28197;
continue;
} else {
}
break;
}

var G__28191 = args28189.length;
switch (G__28191) {
case 3:
return syng_im.protocol.state.delivery.add_pending_message.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return syng_im.protocol.state.delivery.add_pending_message.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28189.length)].join('')));

}
});

syng_im.protocol.state.delivery.add_pending_message.cljs$core$IFn$_invoke$arity$3 = (function (msg_id,msg,p__28192){
var map__28193 = p__28192;
var map__28193__$1 = ((((!((map__28193 == null)))?((((map__28193.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28193.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28193):map__28193);
var opts = map__28193__$1;
var identities = cljs.core.get.call(null,map__28193__$1,new cljs.core.Keyword(null,"identities","identities",-2100677764));
var internal_QMARK_ = cljs.core.get.call(null,map__28193__$1,new cljs.core.Keyword(null,"internal?","internal?",-383058705));
syng_im.utils.logging.debug.call(null,"add-pending-message",msg_id,msg,identities,internal_QMARK_);

return cljs.core.swap_BANG_.call(null,syng_im.protocol.state.state.state,((function (map__28193,map__28193__$1,opts,identities,internal_QMARK_){
return (function (state){
return syng_im.protocol.state.delivery.push_msg_to_delivery_queue.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pending-messages","pending-messages",-1838361905),msg_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(0),new cljs.core.Keyword(null,"identities","identities",-2100677764),identities,new cljs.core.Keyword(null,"internal?","internal?",-383058705),internal_QMARK_], null)),msg_id);
});})(map__28193,map__28193__$1,opts,identities,internal_QMARK_))
);
});

syng_im.protocol.state.delivery.add_pending_message.cljs$core$IFn$_invoke$arity$2 = (function (msg_id,msg){
return syng_im.protocol.state.delivery.add_pending_message.call(null,msg_id,msg,null);
});

syng_im.protocol.state.delivery.add_pending_message.cljs$lang$maxFixedArity = 3;
syng_im.protocol.state.delivery.pop_delivery_queue = (function syng_im$protocol$state$delivery$pop_delivery_queue(){
return cljs.core.swap_BANG_.call(null,syng_im.protocol.state.state.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delivery-queue","delivery-queue",-1260577064)], null),cljs.core.pop);
});
syng_im.protocol.state.delivery.push_delivery_queue = (function syng_im$protocol$state$delivery$push_delivery_queue(msg_id){
return cljs.core.swap_BANG_.call(null,syng_im.protocol.state.state.state,syng_im.protocol.state.delivery.push_msg_to_delivery_queue,msg_id);
});
syng_im.protocol.state.delivery.internal_QMARK_ = (function syng_im$protocol$state$delivery$internal_QMARK_(msg_id){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,syng_im.protocol.state.state.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pending-messages","pending-messages",-1838361905),msg_id,new cljs.core.Keyword(null,"internal?","internal?",-383058705)], null));
});
syng_im.protocol.state.delivery.update_pending_message = (function syng_im$protocol$state$delivery$update_pending_message(msg_id,from){
return cljs.core.swap_BANG_.call(null,syng_im.protocol.state.state.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pending-messages","pending-messages",-1838361905)], null),(function (pending_msgs){
var msgs = pending_msgs;
var msgs__$1 = (cljs.core.truth_(cljs.core.get_in.call(null,msgs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg_id,new cljs.core.Keyword(null,"identities","identities",-2100677764)], null)))?(function (){
syng_im.utils.logging.info.call(null,"Removing identity",from,"from pending msg",msg_id);

return cljs.core.update_in.call(null,msgs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg_id,new cljs.core.Keyword(null,"identities","identities",-2100677764)], null),cljs.core.disj,from);
})()
:msgs);
var msgs__$2 = ((cljs.core.empty_QMARK_.call(null,cljs.core.get_in.call(null,msgs__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg_id,new cljs.core.Keyword(null,"identities","identities",-2100677764)], null))))?(function (){
syng_im.utils.logging.info.call(null,"Removing message",msg_id,"from pending");

return cljs.core.dissoc.call(null,msgs__$1,msg_id);
})()
:msgs__$1);
return msgs__$2;
}));
});
syng_im.protocol.state.delivery.remove_pending_message = (function syng_im$protocol$state$delivery$remove_pending_message(msg_id){
return cljs.core.swap_BANG_.call(null,syng_im.protocol.state.state.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pending-messages","pending-messages",-1838361905)], null),cljs.core.dissoc,msg_id);
});
syng_im.protocol.state.delivery.delivery_queue = (function syng_im$protocol$state$delivery$delivery_queue(){
return new cljs.core.Keyword(null,"delivery-queue","delivery-queue",-1260577064).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,syng_im.protocol.state.state.state));
});

//# sourceMappingURL=delivery.js.map