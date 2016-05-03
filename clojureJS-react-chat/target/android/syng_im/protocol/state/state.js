// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.protocol.state.state');
goog.require('cljs.core');
goog.require('cljs_time.core');
syng_im.protocol.state.state.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"pending-messages","pending-messages",-1838361905),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"filters","filters",974726919),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"delivery-queue","delivery-queue",-1260577064),cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"external-handler","external-handler",135305829),null,new cljs.core.Keyword(null,"identity","identity",1647396035),null,new cljs.core.Keyword(null,"connection","connection",-123599300),null,new cljs.core.Keyword(null,"storage","storage",1867247511),null], null));
syng_im.protocol.state.state.add_filter = (function syng_im$protocol$state$state$add_filter(topics,filter){
return cljs.core.swap_BANG_.call(null,syng_im.protocol.state.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filters","filters",974726919),topics], null),filter);
});
syng_im.protocol.state.state.get_filter = (function syng_im$protocol$state$state$get_filter(topics){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,syng_im.protocol.state.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filters","filters",974726919),topics], null));
});
syng_im.protocol.state.state.remove_filter = (function syng_im$protocol$state$state$remove_filter(topics){
return cljs.core.swap_BANG_.call(null,syng_im.protocol.state.state.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filters","filters",974726919)], null),cljs.core.dissoc,topics);
});
syng_im.protocol.state.state.set_storage = (function syng_im$protocol$state$state$set_storage(storage){
return cljs.core.swap_BANG_.call(null,syng_im.protocol.state.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"storage","storage",1867247511),storage);
});
syng_im.protocol.state.state.set_handler = (function syng_im$protocol$state$state$set_handler(handler){
return cljs.core.swap_BANG_.call(null,syng_im.protocol.state.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"external-handler","external-handler",135305829),handler);
});
syng_im.protocol.state.state.set_identity = (function syng_im$protocol$state$state$set_identity(identity){
return cljs.core.swap_BANG_.call(null,syng_im.protocol.state.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"identity","identity",1647396035),identity);
});
syng_im.protocol.state.state.set_connection = (function syng_im$protocol$state$state$set_connection(connection){
return cljs.core.swap_BANG_.call(null,syng_im.protocol.state.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"connection","connection",-123599300),connection);
});
syng_im.protocol.state.state.connection = (function syng_im$protocol$state$state$connection(){
return new cljs.core.Keyword(null,"connection","connection",-123599300).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,syng_im.protocol.state.state.state));
});
syng_im.protocol.state.state.my_identity = (function syng_im$protocol$state$state$my_identity(){
return new cljs.core.Keyword(null,"identity","identity",1647396035).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,syng_im.protocol.state.state.state));
});
syng_im.protocol.state.state.external_handler = (function syng_im$protocol$state$state$external_handler(){
return new cljs.core.Keyword(null,"external-handler","external-handler",135305829).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,syng_im.protocol.state.state.state));
});
syng_im.protocol.state.state.storage = (function syng_im$protocol$state$state$storage(){
return new cljs.core.Keyword(null,"storage","storage",1867247511).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,syng_im.protocol.state.state.state));
});

//# sourceMappingURL=state.js.map