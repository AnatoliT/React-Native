// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args20700 = [];
var len__17913__auto___20706 = arguments.length;
var i__17914__auto___20707 = (0);
while(true){
if((i__17914__auto___20707 < len__17913__auto___20706)){
args20700.push((arguments[i__17914__auto___20707]));

var G__20708 = (i__17914__auto___20707 + (1));
i__17914__auto___20707 = G__20708;
continue;
} else {
}
break;
}

var G__20702 = args20700.length;
switch (G__20702) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20700.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async20703 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20703 = (function (f,blockable,meta20704){
this.f = f;
this.blockable = blockable;
this.meta20704 = meta20704;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20705,meta20704__$1){
var self__ = this;
var _20705__$1 = this;
return (new cljs.core.async.t_cljs$core$async20703(self__.f,self__.blockable,meta20704__$1));
});

cljs.core.async.t_cljs$core$async20703.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20705){
var self__ = this;
var _20705__$1 = this;
return self__.meta20704;
});

cljs.core.async.t_cljs$core$async20703.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20703.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20703.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async20703.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20703.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20704","meta20704",-1615074092,null)], null);
});

cljs.core.async.t_cljs$core$async20703.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20703.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20703";

cljs.core.async.t_cljs$core$async20703.cljs$lang$ctorPrWriter = (function (this__17453__auto__,writer__17454__auto__,opt__17455__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"cljs.core.async/t_cljs$core$async20703");
});

cljs.core.async.__GT_t_cljs$core$async20703 = (function cljs$core$async$__GT_t_cljs$core$async20703(f__$1,blockable__$1,meta20704){
return (new cljs.core.async.t_cljs$core$async20703(f__$1,blockable__$1,meta20704));
});

}

return (new cljs.core.async.t_cljs$core$async20703(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args20712 = [];
var len__17913__auto___20715 = arguments.length;
var i__17914__auto___20716 = (0);
while(true){
if((i__17914__auto___20716 < len__17913__auto___20715)){
args20712.push((arguments[i__17914__auto___20716]));

var G__20717 = (i__17914__auto___20716 + (1));
i__17914__auto___20716 = G__20717;
continue;
} else {
}
break;
}

var G__20714 = args20712.length;
switch (G__20714) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20712.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args20719 = [];
var len__17913__auto___20722 = arguments.length;
var i__17914__auto___20723 = (0);
while(true){
if((i__17914__auto___20723 < len__17913__auto___20722)){
args20719.push((arguments[i__17914__auto___20723]));

var G__20724 = (i__17914__auto___20723 + (1));
i__17914__auto___20723 = G__20724;
continue;
} else {
}
break;
}

var G__20721 = args20719.length;
switch (G__20721) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20719.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args20726 = [];
var len__17913__auto___20729 = arguments.length;
var i__17914__auto___20730 = (0);
while(true){
if((i__17914__auto___20730 < len__17913__auto___20729)){
args20726.push((arguments[i__17914__auto___20730]));

var G__20731 = (i__17914__auto___20730 + (1));
i__17914__auto___20730 = G__20731;
continue;
} else {
}
break;
}

var G__20728 = args20726.length;
switch (G__20728) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20726.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20733 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20733);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20733,ret){
return (function (){
return fn1.call(null,val_20733);
});})(val_20733,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args20734 = [];
var len__17913__auto___20737 = arguments.length;
var i__17914__auto___20738 = (0);
while(true){
if((i__17914__auto___20738 < len__17913__auto___20737)){
args20734.push((arguments[i__17914__auto___20738]));

var G__20739 = (i__17914__auto___20738 + (1));
i__17914__auto___20738 = G__20739;
continue;
} else {
}
break;
}

var G__20736 = args20734.length;
switch (G__20736) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20734.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17758__auto___20741 = n;
var x_20742 = (0);
while(true){
if((x_20742 < n__17758__auto___20741)){
(a[x_20742] = (0));

var G__20743 = (x_20742 + (1));
x_20742 = G__20743;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__20744 = (i + (1));
i = G__20744;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async20748 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20748 = (function (alt_flag,flag,meta20749){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta20749 = meta20749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20750,meta20749__$1){
var self__ = this;
var _20750__$1 = this;
return (new cljs.core.async.t_cljs$core$async20748(self__.alt_flag,self__.flag,meta20749__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20748.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20750){
var self__ = this;
var _20750__$1 = this;
return self__.meta20749;
});})(flag))
;

cljs.core.async.t_cljs$core$async20748.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20748.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20748.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20748.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20748.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20749","meta20749",538865603,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20748.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20748.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20748";

cljs.core.async.t_cljs$core$async20748.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17453__auto__,writer__17454__auto__,opt__17455__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"cljs.core.async/t_cljs$core$async20748");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async20748 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20748(alt_flag__$1,flag__$1,meta20749){
return (new cljs.core.async.t_cljs$core$async20748(alt_flag__$1,flag__$1,meta20749));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20748(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async20754 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20754 = (function (alt_handler,flag,cb,meta20755){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta20755 = meta20755;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20756,meta20755__$1){
var self__ = this;
var _20756__$1 = this;
return (new cljs.core.async.t_cljs$core$async20754(self__.alt_handler,self__.flag,self__.cb,meta20755__$1));
});

cljs.core.async.t_cljs$core$async20754.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20756){
var self__ = this;
var _20756__$1 = this;
return self__.meta20755;
});

cljs.core.async.t_cljs$core$async20754.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20754.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async20754.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20754.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20754.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20755","meta20755",-2136805679,null)], null);
});

cljs.core.async.t_cljs$core$async20754.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20754.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20754";

cljs.core.async.t_cljs$core$async20754.cljs$lang$ctorPrWriter = (function (this__17453__auto__,writer__17454__auto__,opt__17455__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"cljs.core.async/t_cljs$core$async20754");
});

cljs.core.async.__GT_t_cljs$core$async20754 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20754(alt_handler__$1,flag__$1,cb__$1,meta20755){
return (new cljs.core.async.t_cljs$core$async20754(alt_handler__$1,flag__$1,cb__$1,meta20755));
});

}

return (new cljs.core.async.t_cljs$core$async20754(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20757_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20757_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20758_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20758_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16855__auto__ = wport;
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20759 = (i + (1));
i = G__20759;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16855__auto__ = ret;
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16843__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16843__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16843__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17920__auto__ = [];
var len__17913__auto___20765 = arguments.length;
var i__17914__auto___20766 = (0);
while(true){
if((i__17914__auto___20766 < len__17913__auto___20765)){
args__17920__auto__.push((arguments[i__17914__auto___20766]));

var G__20767 = (i__17914__auto___20766 + (1));
i__17914__auto___20766 = G__20767;
continue;
} else {
}
break;
}

var argseq__17921__auto__ = ((((1) < args__17920__auto__.length))?(new cljs.core.IndexedSeq(args__17920__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17921__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20762){
var map__20763 = p__20762;
var map__20763__$1 = ((((!((map__20763 == null)))?((((map__20763.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20763.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20763):map__20763);
var opts = map__20763__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20760){
var G__20761 = cljs.core.first.call(null,seq20760);
var seq20760__$1 = cljs.core.next.call(null,seq20760);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20761,seq20760__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args20768 = [];
var len__17913__auto___20818 = arguments.length;
var i__17914__auto___20819 = (0);
while(true){
if((i__17914__auto___20819 < len__17913__auto___20818)){
args20768.push((arguments[i__17914__auto___20819]));

var G__20820 = (i__17914__auto___20819 + (1));
i__17914__auto___20819 = G__20820;
continue;
} else {
}
break;
}

var G__20770 = args20768.length;
switch (G__20770) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20768.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20655__auto___20822 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20655__auto___20822){
return (function (){
var f__20656__auto__ = (function (){var switch__20543__auto__ = ((function (c__20655__auto___20822){
return (function (state_20794){
var state_val_20795 = (state_20794[(1)]);
if((state_val_20795 === (7))){
var inst_20790 = (state_20794[(2)]);
var state_20794__$1 = state_20794;
var statearr_20796_20823 = state_20794__$1;
(statearr_20796_20823[(2)] = inst_20790);

(statearr_20796_20823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20795 === (1))){
var state_20794__$1 = state_20794;
var statearr_20797_20824 = state_20794__$1;
(statearr_20797_20824[(2)] = null);

(statearr_20797_20824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20795 === (4))){
var inst_20773 = (state_20794[(7)]);
var inst_20773__$1 = (state_20794[(2)]);
var inst_20774 = (inst_20773__$1 == null);
var state_20794__$1 = (function (){var statearr_20798 = state_20794;
(statearr_20798[(7)] = inst_20773__$1);

return statearr_20798;
})();
if(cljs.core.truth_(inst_20774)){
var statearr_20799_20825 = state_20794__$1;
(statearr_20799_20825[(1)] = (5));

} else {
var statearr_20800_20826 = state_20794__$1;
(statearr_20800_20826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20795 === (13))){
var state_20794__$1 = state_20794;
var statearr_20801_20827 = state_20794__$1;
(statearr_20801_20827[(2)] = null);

(statearr_20801_20827[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20795 === (6))){
var inst_20773 = (state_20794[(7)]);
var state_20794__$1 = state_20794;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20794__$1,(11),to,inst_20773);
} else {
if((state_val_20795 === (3))){
var inst_20792 = (state_20794[(2)]);
var state_20794__$1 = state_20794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20794__$1,inst_20792);
} else {
if((state_val_20795 === (12))){
var state_20794__$1 = state_20794;
var statearr_20802_20828 = state_20794__$1;
(statearr_20802_20828[(2)] = null);

(statearr_20802_20828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20795 === (2))){
var state_20794__$1 = state_20794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20794__$1,(4),from);
} else {
if((state_val_20795 === (11))){
var inst_20783 = (state_20794[(2)]);
var state_20794__$1 = state_20794;
if(cljs.core.truth_(inst_20783)){
var statearr_20803_20829 = state_20794__$1;
(statearr_20803_20829[(1)] = (12));

} else {
var statearr_20804_20830 = state_20794__$1;
(statearr_20804_20830[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20795 === (9))){
var state_20794__$1 = state_20794;
var statearr_20805_20831 = state_20794__$1;
(statearr_20805_20831[(2)] = null);

(statearr_20805_20831[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20795 === (5))){
var state_20794__$1 = state_20794;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20806_20832 = state_20794__$1;
(statearr_20806_20832[(1)] = (8));

} else {
var statearr_20807_20833 = state_20794__$1;
(statearr_20807_20833[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20795 === (14))){
var inst_20788 = (state_20794[(2)]);
var state_20794__$1 = state_20794;
var statearr_20808_20834 = state_20794__$1;
(statearr_20808_20834[(2)] = inst_20788);

(statearr_20808_20834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20795 === (10))){
var inst_20780 = (state_20794[(2)]);
var state_20794__$1 = state_20794;
var statearr_20809_20835 = state_20794__$1;
(statearr_20809_20835[(2)] = inst_20780);

(statearr_20809_20835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20795 === (8))){
var inst_20777 = cljs.core.async.close_BANG_.call(null,to);
var state_20794__$1 = state_20794;
var statearr_20810_20836 = state_20794__$1;
(statearr_20810_20836[(2)] = inst_20777);

(statearr_20810_20836[(1)] = (10));


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
});})(c__20655__auto___20822))
;
return ((function (switch__20543__auto__,c__20655__auto___20822){
return (function() {
var cljs$core$async$state_machine__20544__auto__ = null;
var cljs$core$async$state_machine__20544__auto____0 = (function (){
var statearr_20814 = [null,null,null,null,null,null,null,null];
(statearr_20814[(0)] = cljs$core$async$state_machine__20544__auto__);

(statearr_20814[(1)] = (1));

return statearr_20814;
});
var cljs$core$async$state_machine__20544__auto____1 = (function (state_20794){
while(true){
var ret_value__20545__auto__ = (function (){try{while(true){
var result__20546__auto__ = switch__20543__auto__.call(null,state_20794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20546__auto__;
}
break;
}
}catch (e20815){if((e20815 instanceof Object)){
var ex__20547__auto__ = e20815;
var statearr_20816_20837 = state_20794;
(statearr_20816_20837[(5)] = ex__20547__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20838 = state_20794;
state_20794 = G__20838;
continue;
} else {
return ret_value__20545__auto__;
}
break;
}
});
cljs$core$async$state_machine__20544__auto__ = function(state_20794){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20544__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20544__auto____1.call(this,state_20794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20544__auto____0;
cljs$core$async$state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20544__auto____1;
return cljs$core$async$state_machine__20544__auto__;
})()
;})(switch__20543__auto__,c__20655__auto___20822))
})();
var state__20657__auto__ = (function (){var statearr_20817 = f__20656__auto__.call(null);
(statearr_20817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20655__auto___20822);

return statearr_20817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20657__auto__);
});})(c__20655__auto___20822))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__21022){
var vec__21023 = p__21022;
var v = cljs.core.nth.call(null,vec__21023,(0),null);
var p = cljs.core.nth.call(null,vec__21023,(1),null);
var job = vec__21023;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20655__auto___21205 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20655__auto___21205,res,vec__21023,v,p,job,jobs,results){
return (function (){
var f__20656__auto__ = (function (){var switch__20543__auto__ = ((function (c__20655__auto___21205,res,vec__21023,v,p,job,jobs,results){
return (function (state_21028){
var state_val_21029 = (state_21028[(1)]);
if((state_val_21029 === (1))){
var state_21028__$1 = state_21028;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21028__$1,(2),res,v);
} else {
if((state_val_21029 === (2))){
var inst_21025 = (state_21028[(2)]);
var inst_21026 = cljs.core.async.close_BANG_.call(null,res);
var state_21028__$1 = (function (){var statearr_21030 = state_21028;
(statearr_21030[(7)] = inst_21025);

return statearr_21030;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21028__$1,inst_21026);
} else {
return null;
}
}
});})(c__20655__auto___21205,res,vec__21023,v,p,job,jobs,results))
;
return ((function (switch__20543__auto__,c__20655__auto___21205,res,vec__21023,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20544__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20544__auto____0 = (function (){
var statearr_21034 = [null,null,null,null,null,null,null,null];
(statearr_21034[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20544__auto__);

(statearr_21034[(1)] = (1));

return statearr_21034;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20544__auto____1 = (function (state_21028){
while(true){
var ret_value__20545__auto__ = (function (){try{while(true){
var result__20546__auto__ = switch__20543__auto__.call(null,state_21028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20546__auto__;
}
break;
}
}catch (e21035){if((e21035 instanceof Object)){
var ex__20547__auto__ = e21035;
var statearr_21036_21206 = state_21028;
(statearr_21036_21206[(5)] = ex__20547__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21207 = state_21028;
state_21028 = G__21207;
continue;
} else {
return ret_value__20545__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20544__auto__ = function(state_21028){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20544__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20544__auto____1.call(this,state_21028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20544__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20544__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20544__auto__;
})()
;})(switch__20543__auto__,c__20655__auto___21205,res,vec__21023,v,p,job,jobs,results))
})();
var state__20657__auto__ = (function (){var statearr_21037 = f__20656__auto__.call(null);
(statearr_21037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20655__auto___21205);

return statearr_21037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20657__auto__);
});})(c__20655__auto___21205,res,vec__21023,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21038){
var vec__21039 = p__21038;
var v = cljs.core.nth.call(null,vec__21039,(0),null);
var p = cljs.core.nth.call(null,vec__21039,(1),null);
var job = vec__21039;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17758__auto___21208 = n;
var __21209 = (0);
while(true){
if((__21209 < n__17758__auto___21208)){
var G__21040_21210 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21040_21210) {
case "compute":
var c__20655__auto___21212 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21209,c__20655__auto___21212,G__21040_21210,n__17758__auto___21208,jobs,results,process,async){
return (function (){
var f__20656__auto__ = (function (){var switch__20543__auto__ = ((function (__21209,c__20655__auto___21212,G__21040_21210,n__17758__auto___21208,jobs,results,process,async){
return (function (state_21053){
var state_val_21054 = (state_21053[(1)]);
if((state_val_21054 === (1))){
var state_21053__$1 = state_21053;
var statearr_21055_21213 = state_21053__$1;
(statearr_21055_21213[(2)] = null);

(statearr_21055_21213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21054 === (2))){
var state_21053__$1 = state_21053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21053__$1,(4),jobs);
} else {
if((state_val_21054 === (3))){
var inst_21051 = (state_21053[(2)]);
var state_21053__$1 = state_21053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21053__$1,inst_21051);
} else {
if((state_val_21054 === (4))){
var inst_21043 = (state_21053[(2)]);
var inst_21044 = process.call(null,inst_21043);
var state_21053__$1 = state_21053;
if(cljs.core.truth_(inst_21044)){
var statearr_21056_21214 = state_21053__$1;
(statearr_21056_21214[(1)] = (5));

} else {
var statearr_21057_21215 = state_21053__$1;
(statearr_21057_21215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21054 === (5))){
var state_21053__$1 = state_21053;
var statearr_21058_21216 = state_21053__$1;
(statearr_21058_21216[(2)] = null);

(statearr_21058_21216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21054 === (6))){
var state_21053__$1 = state_21053;
var statearr_21059_21217 = state_21053__$1;
(statearr_21059_21217[(2)] = null);

(statearr_21059_21217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21054 === (7))){
var inst_21049 = (state_21053[(2)]);
var state_21053__$1 = state_21053;
var statearr_21060_21218 = state_21053__$1;
(statearr_21060_21218[(2)] = inst_21049);

(statearr_21060_21218[(1)] = (3));


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
});})(__21209,c__20655__auto___21212,G__21040_21210,n__17758__auto___21208,jobs,results,process,async))
;
return ((function (__21209,switch__20543__auto__,c__20655__auto___21212,G__21040_21210,n__17758__auto___21208,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20544__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20544__auto____0 = (function (){
var statearr_21064 = [null,null,null,null,null,null,null];
(statearr_21064[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20544__auto__);

(statearr_21064[(1)] = (1));

return statearr_21064;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20544__auto____1 = (function (state_21053){
while(true){
var ret_value__20545__auto__ = (function (){try{while(true){
var result__20546__auto__ = switch__20543__auto__.call(null,state_21053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20546__auto__;
}
break;
}
}catch (e21065){if((e21065 instanceof Object)){
var ex__20547__auto__ = e21065;
var statearr_21066_21219 = state_21053;
(statearr_21066_21219[(5)] = ex__20547__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21220 = state_21053;
state_21053 = G__21220;
continue;
} else {
return ret_value__20545__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20544__auto__ = function(state_21053){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20544__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20544__auto____1.call(this,state_21053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20544__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20544__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20544__auto__;
})()
;})(__21209,switch__20543__auto__,c__20655__auto___21212,G__21040_21210,n__17758__auto___21208,jobs,results,process,async))
})();
var state__20657__auto__ = (function (){var statearr_21067 = f__20656__auto__.call(null);
(statearr_21067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20655__auto___21212);

return statearr_21067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20657__auto__);
});})(__21209,c__20655__auto___21212,G__21040_21210,n__17758__auto___21208,jobs,results,process,async))
);


break;
case "async":
var c__20655__auto___21221 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21209,c__20655__auto___21221,G__21040_21210,n__17758__auto___21208,jobs,results,process,async){
return (function (){
var f__20656__auto__ = (function (){var switch__20543__auto__ = ((function (__21209,c__20655__auto___21221,G__21040_21210,n__17758__auto___21208,jobs,results,process,async){
return (function (state_21080){
var state_val_21081 = (state_21080[(1)]);
if((state_val_21081 === (1))){
var state_21080__$1 = state_21080;
var statearr_21082_21222 = state_21080__$1;
(statearr_21082_21222[(2)] = null);

(statearr_21082_21222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21081 === (2))){
var state_21080__$1 = state_21080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21080__$1,(4),jobs);
} else {
if((state_val_21081 === (3))){
var inst_21078 = (state_21080[(2)]);
var state_21080__$1 = state_21080;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21080__$1,inst_21078);
} else {
if((state_val_21081 === (4))){
var inst_21070 = (state_21080[(2)]);
var inst_21071 = async.call(null,inst_21070);
var state_21080__$1 = state_21080;
if(cljs.core.truth_(inst_21071)){
var statearr_21083_21223 = state_21080__$1;
(statearr_21083_21223[(1)] = (5));

} else {
var statearr_21084_21224 = state_21080__$1;
(statearr_21084_21224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21081 === (5))){
var state_21080__$1 = state_21080;
var statearr_21085_21225 = state_21080__$1;
(statearr_21085_21225[(2)] = null);

(statearr_21085_21225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21081 === (6))){
var state_21080__$1 = state_21080;
var statearr_21086_21226 = state_21080__$1;
(statearr_21086_21226[(2)] = null);

(statearr_21086_21226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21081 === (7))){
var inst_21076 = (state_21080[(2)]);
var state_21080__$1 = state_21080;
var statearr_21087_21227 = state_21080__$1;
(statearr_21087_21227[(2)] = inst_21076);

(statearr_21087_21227[(1)] = (3));


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
});})(__21209,c__20655__auto___21221,G__21040_21210,n__17758__auto___21208,jobs,results,process,async))
;
return ((function (__21209,switch__20543__auto__,c__20655__auto___21221,G__21040_21210,n__17758__auto___21208,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20544__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20544__auto____0 = (function (){
var statearr_21091 = [null,null,null,null,null,null,null];
(statearr_21091[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20544__auto__);

(statearr_21091[(1)] = (1));

return statearr_21091;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20544__auto____1 = (function (state_21080){
while(true){
var ret_value__20545__auto__ = (function (){try{while(true){
var result__20546__auto__ = switch__20543__auto__.call(null,state_21080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20546__auto__;
}
break;
}
}catch (e21092){if((e21092 instanceof Object)){
var ex__20547__auto__ = e21092;
var statearr_21093_21228 = state_21080;
(statearr_21093_21228[(5)] = ex__20547__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21229 = state_21080;
state_21080 = G__21229;
continue;
} else {
return ret_value__20545__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20544__auto__ = function(state_21080){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20544__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20544__auto____1.call(this,state_21080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20544__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20544__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20544__auto__;
})()
;})(__21209,switch__20543__auto__,c__20655__auto___21221,G__21040_21210,n__17758__auto___21208,jobs,results,process,async))
})();
var state__20657__auto__ = (function (){var statearr_21094 = f__20656__auto__.call(null);
(statearr_21094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20655__auto___21221);

return statearr_21094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20657__auto__);
});})(__21209,c__20655__auto___21221,G__21040_21210,n__17758__auto___21208,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21230 = (__21209 + (1));
__21209 = G__21230;
continue;
} else {
}
break;
}

var c__20655__auto___21231 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20655__auto___21231,jobs,results,process,async){
return (function (){
var f__20656__auto__ = (function (){var switch__20543__auto__ = ((function (c__20655__auto___21231,jobs,results,process,async){
return (function (state_21116){
var state_val_21117 = (state_21116[(1)]);
if((state_val_21117 === (1))){
var state_21116__$1 = state_21116;
var statearr_21118_21232 = state_21116__$1;
(statearr_21118_21232[(2)] = null);

(statearr_21118_21232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21117 === (2))){
var state_21116__$1 = state_21116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21116__$1,(4),from);
} else {
if((state_val_21117 === (3))){
var inst_21114 = (state_21116[(2)]);
var state_21116__$1 = state_21116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21116__$1,inst_21114);
} else {
if((state_val_21117 === (4))){
var inst_21097 = (state_21116[(7)]);
var inst_21097__$1 = (state_21116[(2)]);
var inst_21098 = (inst_21097__$1 == null);
var state_21116__$1 = (function (){var statearr_21119 = state_21116;
(statearr_21119[(7)] = inst_21097__$1);

return statearr_21119;
})();
if(cljs.core.truth_(inst_21098)){
var statearr_21120_21233 = state_21116__$1;
(statearr_21120_21233[(1)] = (5));

} else {
var statearr_21121_21234 = state_21116__$1;
(statearr_21121_21234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21117 === (5))){
var inst_21100 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21116__$1 = state_21116;
var statearr_21122_21235 = state_21116__$1;
(statearr_21122_21235[(2)] = inst_21100);

(statearr_21122_21235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21117 === (6))){
var inst_21102 = (state_21116[(8)]);
var inst_21097 = (state_21116[(7)]);
var inst_21102__$1 = cljs.core.async.chan.call(null,(1));
var inst_21103 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21104 = [inst_21097,inst_21102__$1];
var inst_21105 = (new cljs.core.PersistentVector(null,2,(5),inst_21103,inst_21104,null));
var state_21116__$1 = (function (){var statearr_21123 = state_21116;
(statearr_21123[(8)] = inst_21102__$1);

return statearr_21123;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21116__$1,(8),jobs,inst_21105);
} else {
if((state_val_21117 === (7))){
var inst_21112 = (state_21116[(2)]);
var state_21116__$1 = state_21116;
var statearr_21124_21236 = state_21116__$1;
(statearr_21124_21236[(2)] = inst_21112);

(statearr_21124_21236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21117 === (8))){
var inst_21102 = (state_21116[(8)]);
var inst_21107 = (state_21116[(2)]);
var state_21116__$1 = (function (){var statearr_21125 = state_21116;
(statearr_21125[(9)] = inst_21107);

return statearr_21125;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21116__$1,(9),results,inst_21102);
} else {
if((state_val_21117 === (9))){
var inst_21109 = (state_21116[(2)]);
var state_21116__$1 = (function (){var statearr_21126 = state_21116;
(statearr_21126[(10)] = inst_21109);

return statearr_21126;
})();
var statearr_21127_21237 = state_21116__$1;
(statearr_21127_21237[(2)] = null);

(statearr_21127_21237[(1)] = (2));


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
});})(c__20655__auto___21231,jobs,results,process,async))
;
return ((function (switch__20543__auto__,c__20655__auto___21231,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20544__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20544__auto____0 = (function (){
var statearr_21131 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21131[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20544__auto__);

(statearr_21131[(1)] = (1));

return statearr_21131;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20544__auto____1 = (function (state_21116){
while(true){
var ret_value__20545__auto__ = (function (){try{while(true){
var result__20546__auto__ = switch__20543__auto__.call(null,state_21116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20546__auto__;
}
break;
}
}catch (e21132){if((e21132 instanceof Object)){
var ex__20547__auto__ = e21132;
var statearr_21133_21238 = state_21116;
(statearr_21133_21238[(5)] = ex__20547__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21239 = state_21116;
state_21116 = G__21239;
continue;
} else {
return ret_value__20545__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20544__auto__ = function(state_21116){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20544__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20544__auto____1.call(this,state_21116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20544__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20544__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20544__auto__;
})()
;})(switch__20543__auto__,c__20655__auto___21231,jobs,results,process,async))
})();
var state__20657__auto__ = (function (){var statearr_21134 = f__20656__auto__.call(null);
(statearr_21134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20655__auto___21231);

return statearr_21134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20657__auto__);
});})(c__20655__auto___21231,jobs,results,process,async))
);


var c__20655__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20655__auto__,jobs,results,process,async){
return (function (){
var f__20656__auto__ = (function (){var switch__20543__auto__ = ((function (c__20655__auto__,jobs,results,process,async){
return (function (state_21172){
var state_val_21173 = (state_21172[(1)]);
if((state_val_21173 === (7))){
var inst_21168 = (state_21172[(2)]);
var state_21172__$1 = state_21172;
var statearr_21174_21240 = state_21172__$1;
(statearr_21174_21240[(2)] = inst_21168);

(statearr_21174_21240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (20))){
var state_21172__$1 = state_21172;
var statearr_21175_21241 = state_21172__$1;
(statearr_21175_21241[(2)] = null);

(statearr_21175_21241[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (1))){
var state_21172__$1 = state_21172;
var statearr_21176_21242 = state_21172__$1;
(statearr_21176_21242[(2)] = null);

(statearr_21176_21242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (4))){
var inst_21137 = (state_21172[(7)]);
var inst_21137__$1 = (state_21172[(2)]);
var inst_21138 = (inst_21137__$1 == null);
var state_21172__$1 = (function (){var statearr_21177 = state_21172;
(statearr_21177[(7)] = inst_21137__$1);

return statearr_21177;
})();
if(cljs.core.truth_(inst_21138)){
var statearr_21178_21243 = state_21172__$1;
(statearr_21178_21243[(1)] = (5));

} else {
var statearr_21179_21244 = state_21172__$1;
(statearr_21179_21244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (15))){
var inst_21150 = (state_21172[(8)]);
var state_21172__$1 = state_21172;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21172__$1,(18),to,inst_21150);
} else {
if((state_val_21173 === (21))){
var inst_21163 = (state_21172[(2)]);
var state_21172__$1 = state_21172;
var statearr_21180_21245 = state_21172__$1;
(statearr_21180_21245[(2)] = inst_21163);

(statearr_21180_21245[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (13))){
var inst_21165 = (state_21172[(2)]);
var state_21172__$1 = (function (){var statearr_21181 = state_21172;
(statearr_21181[(9)] = inst_21165);

return statearr_21181;
})();
var statearr_21182_21246 = state_21172__$1;
(statearr_21182_21246[(2)] = null);

(statearr_21182_21246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (6))){
var inst_21137 = (state_21172[(7)]);
var state_21172__$1 = state_21172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21172__$1,(11),inst_21137);
} else {
if((state_val_21173 === (17))){
var inst_21158 = (state_21172[(2)]);
var state_21172__$1 = state_21172;
if(cljs.core.truth_(inst_21158)){
var statearr_21183_21247 = state_21172__$1;
(statearr_21183_21247[(1)] = (19));

} else {
var statearr_21184_21248 = state_21172__$1;
(statearr_21184_21248[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (3))){
var inst_21170 = (state_21172[(2)]);
var state_21172__$1 = state_21172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21172__$1,inst_21170);
} else {
if((state_val_21173 === (12))){
var inst_21147 = (state_21172[(10)]);
var state_21172__$1 = state_21172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21172__$1,(14),inst_21147);
} else {
if((state_val_21173 === (2))){
var state_21172__$1 = state_21172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21172__$1,(4),results);
} else {
if((state_val_21173 === (19))){
var state_21172__$1 = state_21172;
var statearr_21185_21249 = state_21172__$1;
(statearr_21185_21249[(2)] = null);

(statearr_21185_21249[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (11))){
var inst_21147 = (state_21172[(2)]);
var state_21172__$1 = (function (){var statearr_21186 = state_21172;
(statearr_21186[(10)] = inst_21147);

return statearr_21186;
})();
var statearr_21187_21250 = state_21172__$1;
(statearr_21187_21250[(2)] = null);

(statearr_21187_21250[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (9))){
var state_21172__$1 = state_21172;
var statearr_21188_21251 = state_21172__$1;
(statearr_21188_21251[(2)] = null);

(statearr_21188_21251[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (5))){
var state_21172__$1 = state_21172;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21189_21252 = state_21172__$1;
(statearr_21189_21252[(1)] = (8));

} else {
var statearr_21190_21253 = state_21172__$1;
(statearr_21190_21253[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (14))){
var inst_21150 = (state_21172[(8)]);
var inst_21152 = (state_21172[(11)]);
var inst_21150__$1 = (state_21172[(2)]);
var inst_21151 = (inst_21150__$1 == null);
var inst_21152__$1 = cljs.core.not.call(null,inst_21151);
var state_21172__$1 = (function (){var statearr_21191 = state_21172;
(statearr_21191[(8)] = inst_21150__$1);

(statearr_21191[(11)] = inst_21152__$1);

return statearr_21191;
})();
if(inst_21152__$1){
var statearr_21192_21254 = state_21172__$1;
(statearr_21192_21254[(1)] = (15));

} else {
var statearr_21193_21255 = state_21172__$1;
(statearr_21193_21255[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (16))){
var inst_21152 = (state_21172[(11)]);
var state_21172__$1 = state_21172;
var statearr_21194_21256 = state_21172__$1;
(statearr_21194_21256[(2)] = inst_21152);

(statearr_21194_21256[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (10))){
var inst_21144 = (state_21172[(2)]);
var state_21172__$1 = state_21172;
var statearr_21195_21257 = state_21172__$1;
(statearr_21195_21257[(2)] = inst_21144);

(statearr_21195_21257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (18))){
var inst_21155 = (state_21172[(2)]);
var state_21172__$1 = state_21172;
var statearr_21196_21258 = state_21172__$1;
(statearr_21196_21258[(2)] = inst_21155);

(statearr_21196_21258[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (8))){
var inst_21141 = cljs.core.async.close_BANG_.call(null,to);
var state_21172__$1 = state_21172;
var statearr_21197_21259 = state_21172__$1;
(statearr_21197_21259[(2)] = inst_21141);

(statearr_21197_21259[(1)] = (10));


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
});})(c__20655__auto__,jobs,results,process,async))
;
return ((function (switch__20543__auto__,c__20655__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20544__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20544__auto____0 = (function (){
var statearr_21201 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21201[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20544__auto__);

(statearr_21201[(1)] = (1));

return statearr_21201;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20544__auto____1 = (function (state_21172){
while(true){
var ret_value__20545__auto__ = (function (){try{while(true){
var result__20546__auto__ = switch__20543__auto__.call(null,state_21172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20546__auto__;
}
break;
}
}catch (e21202){if((e21202 instanceof Object)){
var ex__20547__auto__ = e21202;
var statearr_21203_21260 = state_21172;
(statearr_21203_21260[(5)] = ex__20547__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21261 = state_21172;
state_21172 = G__21261;
continue;
} else {
return ret_value__20545__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20544__auto__ = function(state_21172){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20544__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20544__auto____1.call(this,state_21172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20544__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20544__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20544__auto__;
})()
;})(switch__20543__auto__,c__20655__auto__,jobs,results,process,async))
})();
var state__20657__auto__ = (function (){var statearr_21204 = f__20656__auto__.call(null);
(statearr_21204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20655__auto__);

return statearr_21204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20657__auto__);
});})(c__20655__auto__,jobs,results,process,async))
);

return c__20655__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args21262 = [];
var len__17913__auto___21265 = arguments.length;
var i__17914__auto___21266 = (0);
while(true){
if((i__17914__auto___21266 < len__17913__auto___21265)){
args21262.push((arguments[i__17914__auto___21266]));

var G__21267 = (i__17914__auto___21266 + (1));
i__17914__auto___21266 = G__21267;
continue;
} else {
}
break;
}

var G__21264 = args21262.length;
switch (G__21264) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21262.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args21269 = [];
var len__17913__auto___21272 = arguments.length;
var i__17914__auto___21273 = (0);
while(true){
if((i__17914__auto___21273 < len__17913__auto___21272)){
args21269.push((arguments[i__17914__auto___21273]));

var G__21274 = (i__17914__auto___21273 + (1));
i__17914__auto___21273 = G__21274;
continue;
} else {
}
break;
}

var G__21271 = args21269.length;
switch (G__21271) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21269.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args21276 = [];
var len__17913__auto___21329 = arguments.length;
var i__17914__auto___21330 = (0);
while(true){
if((i__17914__auto___21330 < len__17913__auto___21329)){
args21276.push((arguments[i__17914__auto___21330]));

var G__21331 = (i__17914__auto___21330 + (1));
i__17914__auto___21330 = G__21331;
continue;
} else {
}
break;
}

var G__21278 = args21276.length;
switch (G__21278) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21276.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20655__auto___21333 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20655__auto___21333,tc,fc){
return (function (){
var f__20656__auto__ = (function (){var switch__20543__auto__ = ((function (c__20655__auto___21333,tc,fc){
return (function (state_21304){
var state_val_21305 = (state_21304[(1)]);
if((state_val_21305 === (7))){
var inst_21300 = (state_21304[(2)]);
var state_21304__$1 = state_21304;
var statearr_21306_21334 = state_21304__$1;
(statearr_21306_21334[(2)] = inst_21300);

(statearr_21306_21334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21305 === (1))){
var state_21304__$1 = state_21304;
var statearr_21307_21335 = state_21304__$1;
(statearr_21307_21335[(2)] = null);

(statearr_21307_21335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21305 === (4))){
var inst_21281 = (state_21304[(7)]);
var inst_21281__$1 = (state_21304[(2)]);
var inst_21282 = (inst_21281__$1 == null);
var state_21304__$1 = (function (){var statearr_21308 = state_21304;
(statearr_21308[(7)] = inst_21281__$1);

return statearr_21308;
})();
if(cljs.core.truth_(inst_21282)){
var statearr_21309_21336 = state_21304__$1;
(statearr_21309_21336[(1)] = (5));

} else {
var statearr_21310_21337 = state_21304__$1;
(statearr_21310_21337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21305 === (13))){
var state_21304__$1 = state_21304;
var statearr_21311_21338 = state_21304__$1;
(statearr_21311_21338[(2)] = null);

(statearr_21311_21338[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21305 === (6))){
var inst_21281 = (state_21304[(7)]);
var inst_21287 = p.call(null,inst_21281);
var state_21304__$1 = state_21304;
if(cljs.core.truth_(inst_21287)){
var statearr_21312_21339 = state_21304__$1;
(statearr_21312_21339[(1)] = (9));

} else {
var statearr_21313_21340 = state_21304__$1;
(statearr_21313_21340[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21305 === (3))){
var inst_21302 = (state_21304[(2)]);
var state_21304__$1 = state_21304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21304__$1,inst_21302);
} else {
if((state_val_21305 === (12))){
var state_21304__$1 = state_21304;
var statearr_21314_21341 = state_21304__$1;
(statearr_21314_21341[(2)] = null);

(statearr_21314_21341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21305 === (2))){
var state_21304__$1 = state_21304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21304__$1,(4),ch);
} else {
if((state_val_21305 === (11))){
var inst_21281 = (state_21304[(7)]);
var inst_21291 = (state_21304[(2)]);
var state_21304__$1 = state_21304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21304__$1,(8),inst_21291,inst_21281);
} else {
if((state_val_21305 === (9))){
var state_21304__$1 = state_21304;
var statearr_21315_21342 = state_21304__$1;
(statearr_21315_21342[(2)] = tc);

(statearr_21315_21342[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21305 === (5))){
var inst_21284 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21285 = cljs.core.async.close_BANG_.call(null,fc);
var state_21304__$1 = (function (){var statearr_21316 = state_21304;
(statearr_21316[(8)] = inst_21284);

return statearr_21316;
})();
var statearr_21317_21343 = state_21304__$1;
(statearr_21317_21343[(2)] = inst_21285);

(statearr_21317_21343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21305 === (14))){
var inst_21298 = (state_21304[(2)]);
var state_21304__$1 = state_21304;
var statearr_21318_21344 = state_21304__$1;
(statearr_21318_21344[(2)] = inst_21298);

(statearr_21318_21344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21305 === (10))){
var state_21304__$1 = state_21304;
var statearr_21319_21345 = state_21304__$1;
(statearr_21319_21345[(2)] = fc);

(statearr_21319_21345[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21305 === (8))){
var inst_21293 = (state_21304[(2)]);
var state_21304__$1 = state_21304;
if(cljs.core.truth_(inst_21293)){
var statearr_21320_21346 = state_21304__$1;
(statearr_21320_21346[(1)] = (12));

} else {
var statearr_21321_21347 = state_21304__$1;
(statearr_21321_21347[(1)] = (13));

}

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
});})(c__20655__auto___21333,tc,fc))
;
return ((function (switch__20543__auto__,c__20655__auto___21333,tc,fc){
return (function() {
var cljs$core$async$state_machine__20544__auto__ = null;
var cljs$core$async$state_machine__20544__auto____0 = (function (){
var statearr_21325 = [null,null,null,null,null,null,null,null,null];
(statearr_21325[(0)] = cljs$core$async$state_machine__20544__auto__);

(statearr_21325[(1)] = (1));

return statearr_21325;
});
var cljs$core$async$state_machine__20544__auto____1 = (function (state_21304){
while(true){
var ret_value__20545__auto__ = (function (){try{while(true){
var result__20546__auto__ = switch__20543__auto__.call(null,state_21304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20546__auto__;
}
break;
}
}catch (e21326){if((e21326 instanceof Object)){
var ex__20547__auto__ = e21326;
var statearr_21327_21348 = state_21304;
(statearr_21327_21348[(5)] = ex__20547__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21349 = state_21304;
state_21304 = G__21349;
continue;
} else {
return ret_value__20545__auto__;
}
break;
}
});
cljs$core$async$state_machine__20544__auto__ = function(state_21304){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20544__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20544__auto____1.call(this,state_21304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20544__auto____0;
cljs$core$async$state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20544__auto____1;
return cljs$core$async$state_machine__20544__auto__;
})()
;})(switch__20543__auto__,c__20655__auto___21333,tc,fc))
})();
var state__20657__auto__ = (function (){var statearr_21328 = f__20656__auto__.call(null);
(statearr_21328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20655__auto___21333);

return statearr_21328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20657__auto__);
});})(c__20655__auto___21333,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20655__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20655__auto__){
return (function (){
var f__20656__auto__ = (function (){var switch__20543__auto__ = ((function (c__20655__auto__){
return (function (state_21413){
var state_val_21414 = (state_21413[(1)]);
if((state_val_21414 === (7))){
var inst_21409 = (state_21413[(2)]);
var state_21413__$1 = state_21413;
var statearr_21415_21436 = state_21413__$1;
(statearr_21415_21436[(2)] = inst_21409);

(statearr_21415_21436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21414 === (1))){
var inst_21393 = init;
var state_21413__$1 = (function (){var statearr_21416 = state_21413;
(statearr_21416[(7)] = inst_21393);

return statearr_21416;
})();
var statearr_21417_21437 = state_21413__$1;
(statearr_21417_21437[(2)] = null);

(statearr_21417_21437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21414 === (4))){
var inst_21396 = (state_21413[(8)]);
var inst_21396__$1 = (state_21413[(2)]);
var inst_21397 = (inst_21396__$1 == null);
var state_21413__$1 = (function (){var statearr_21418 = state_21413;
(statearr_21418[(8)] = inst_21396__$1);

return statearr_21418;
})();
if(cljs.core.truth_(inst_21397)){
var statearr_21419_21438 = state_21413__$1;
(statearr_21419_21438[(1)] = (5));

} else {
var statearr_21420_21439 = state_21413__$1;
(statearr_21420_21439[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21414 === (6))){
var inst_21400 = (state_21413[(9)]);
var inst_21393 = (state_21413[(7)]);
var inst_21396 = (state_21413[(8)]);
var inst_21400__$1 = f.call(null,inst_21393,inst_21396);
var inst_21401 = cljs.core.reduced_QMARK_.call(null,inst_21400__$1);
var state_21413__$1 = (function (){var statearr_21421 = state_21413;
(statearr_21421[(9)] = inst_21400__$1);

return statearr_21421;
})();
if(inst_21401){
var statearr_21422_21440 = state_21413__$1;
(statearr_21422_21440[(1)] = (8));

} else {
var statearr_21423_21441 = state_21413__$1;
(statearr_21423_21441[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21414 === (3))){
var inst_21411 = (state_21413[(2)]);
var state_21413__$1 = state_21413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21413__$1,inst_21411);
} else {
if((state_val_21414 === (2))){
var state_21413__$1 = state_21413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21413__$1,(4),ch);
} else {
if((state_val_21414 === (9))){
var inst_21400 = (state_21413[(9)]);
var inst_21393 = inst_21400;
var state_21413__$1 = (function (){var statearr_21424 = state_21413;
(statearr_21424[(7)] = inst_21393);

return statearr_21424;
})();
var statearr_21425_21442 = state_21413__$1;
(statearr_21425_21442[(2)] = null);

(statearr_21425_21442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21414 === (5))){
var inst_21393 = (state_21413[(7)]);
var state_21413__$1 = state_21413;
var statearr_21426_21443 = state_21413__$1;
(statearr_21426_21443[(2)] = inst_21393);

(statearr_21426_21443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21414 === (10))){
var inst_21407 = (state_21413[(2)]);
var state_21413__$1 = state_21413;
var statearr_21427_21444 = state_21413__$1;
(statearr_21427_21444[(2)] = inst_21407);

(statearr_21427_21444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21414 === (8))){
var inst_21400 = (state_21413[(9)]);
var inst_21403 = cljs.core.deref.call(null,inst_21400);
var state_21413__$1 = state_21413;
var statearr_21428_21445 = state_21413__$1;
(statearr_21428_21445[(2)] = inst_21403);

(statearr_21428_21445[(1)] = (10));


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
});})(c__20655__auto__))
;
return ((function (switch__20543__auto__,c__20655__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20544__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20544__auto____0 = (function (){
var statearr_21432 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21432[(0)] = cljs$core$async$reduce_$_state_machine__20544__auto__);

(statearr_21432[(1)] = (1));

return statearr_21432;
});
var cljs$core$async$reduce_$_state_machine__20544__auto____1 = (function (state_21413){
while(true){
var ret_value__20545__auto__ = (function (){try{while(true){
var result__20546__auto__ = switch__20543__auto__.call(null,state_21413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20546__auto__;
}
break;
}
}catch (e21433){if((e21433 instanceof Object)){
var ex__20547__auto__ = e21433;
var statearr_21434_21446 = state_21413;
(statearr_21434_21446[(5)] = ex__20547__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21447 = state_21413;
state_21413 = G__21447;
continue;
} else {
return ret_value__20545__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20544__auto__ = function(state_21413){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20544__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20544__auto____1.call(this,state_21413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20544__auto____0;
cljs$core$async$reduce_$_state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20544__auto____1;
return cljs$core$async$reduce_$_state_machine__20544__auto__;
})()
;})(switch__20543__auto__,c__20655__auto__))
})();
var state__20657__auto__ = (function (){var statearr_21435 = f__20656__auto__.call(null);
(statearr_21435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20655__auto__);

return statearr_21435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20657__auto__);
});})(c__20655__auto__))
);

return c__20655__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args21448 = [];
var len__17913__auto___21500 = arguments.length;
var i__17914__auto___21501 = (0);
while(true){
if((i__17914__auto___21501 < len__17913__auto___21500)){
args21448.push((arguments[i__17914__auto___21501]));

var G__21502 = (i__17914__auto___21501 + (1));
i__17914__auto___21501 = G__21502;
continue;
} else {
}
break;
}

var G__21450 = args21448.length;
switch (G__21450) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21448.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20655__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20655__auto__){
return (function (){
var f__20656__auto__ = (function (){var switch__20543__auto__ = ((function (c__20655__auto__){
return (function (state_21475){
var state_val_21476 = (state_21475[(1)]);
if((state_val_21476 === (7))){
var inst_21457 = (state_21475[(2)]);
var state_21475__$1 = state_21475;
var statearr_21477_21504 = state_21475__$1;
(statearr_21477_21504[(2)] = inst_21457);

(statearr_21477_21504[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21476 === (1))){
var inst_21451 = cljs.core.seq.call(null,coll);
var inst_21452 = inst_21451;
var state_21475__$1 = (function (){var statearr_21478 = state_21475;
(statearr_21478[(7)] = inst_21452);

return statearr_21478;
})();
var statearr_21479_21505 = state_21475__$1;
(statearr_21479_21505[(2)] = null);

(statearr_21479_21505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21476 === (4))){
var inst_21452 = (state_21475[(7)]);
var inst_21455 = cljs.core.first.call(null,inst_21452);
var state_21475__$1 = state_21475;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21475__$1,(7),ch,inst_21455);
} else {
if((state_val_21476 === (13))){
var inst_21469 = (state_21475[(2)]);
var state_21475__$1 = state_21475;
var statearr_21480_21506 = state_21475__$1;
(statearr_21480_21506[(2)] = inst_21469);

(statearr_21480_21506[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21476 === (6))){
var inst_21460 = (state_21475[(2)]);
var state_21475__$1 = state_21475;
if(cljs.core.truth_(inst_21460)){
var statearr_21481_21507 = state_21475__$1;
(statearr_21481_21507[(1)] = (8));

} else {
var statearr_21482_21508 = state_21475__$1;
(statearr_21482_21508[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21476 === (3))){
var inst_21473 = (state_21475[(2)]);
var state_21475__$1 = state_21475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21475__$1,inst_21473);
} else {
if((state_val_21476 === (12))){
var state_21475__$1 = state_21475;
var statearr_21483_21509 = state_21475__$1;
(statearr_21483_21509[(2)] = null);

(statearr_21483_21509[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21476 === (2))){
var inst_21452 = (state_21475[(7)]);
var state_21475__$1 = state_21475;
if(cljs.core.truth_(inst_21452)){
var statearr_21484_21510 = state_21475__$1;
(statearr_21484_21510[(1)] = (4));

} else {
var statearr_21485_21511 = state_21475__$1;
(statearr_21485_21511[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21476 === (11))){
var inst_21466 = cljs.core.async.close_BANG_.call(null,ch);
var state_21475__$1 = state_21475;
var statearr_21486_21512 = state_21475__$1;
(statearr_21486_21512[(2)] = inst_21466);

(statearr_21486_21512[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21476 === (9))){
var state_21475__$1 = state_21475;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21487_21513 = state_21475__$1;
(statearr_21487_21513[(1)] = (11));

} else {
var statearr_21488_21514 = state_21475__$1;
(statearr_21488_21514[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21476 === (5))){
var inst_21452 = (state_21475[(7)]);
var state_21475__$1 = state_21475;
var statearr_21489_21515 = state_21475__$1;
(statearr_21489_21515[(2)] = inst_21452);

(statearr_21489_21515[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21476 === (10))){
var inst_21471 = (state_21475[(2)]);
var state_21475__$1 = state_21475;
var statearr_21490_21516 = state_21475__$1;
(statearr_21490_21516[(2)] = inst_21471);

(statearr_21490_21516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21476 === (8))){
var inst_21452 = (state_21475[(7)]);
var inst_21462 = cljs.core.next.call(null,inst_21452);
var inst_21452__$1 = inst_21462;
var state_21475__$1 = (function (){var statearr_21491 = state_21475;
(statearr_21491[(7)] = inst_21452__$1);

return statearr_21491;
})();
var statearr_21492_21517 = state_21475__$1;
(statearr_21492_21517[(2)] = null);

(statearr_21492_21517[(1)] = (2));


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
});})(c__20655__auto__))
;
return ((function (switch__20543__auto__,c__20655__auto__){
return (function() {
var cljs$core$async$state_machine__20544__auto__ = null;
var cljs$core$async$state_machine__20544__auto____0 = (function (){
var statearr_21496 = [null,null,null,null,null,null,null,null];
(statearr_21496[(0)] = cljs$core$async$state_machine__20544__auto__);

(statearr_21496[(1)] = (1));

return statearr_21496;
});
var cljs$core$async$state_machine__20544__auto____1 = (function (state_21475){
while(true){
var ret_value__20545__auto__ = (function (){try{while(true){
var result__20546__auto__ = switch__20543__auto__.call(null,state_21475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20546__auto__;
}
break;
}
}catch (e21497){if((e21497 instanceof Object)){
var ex__20547__auto__ = e21497;
var statearr_21498_21518 = state_21475;
(statearr_21498_21518[(5)] = ex__20547__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21519 = state_21475;
state_21475 = G__21519;
continue;
} else {
return ret_value__20545__auto__;
}
break;
}
});
cljs$core$async$state_machine__20544__auto__ = function(state_21475){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20544__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20544__auto____1.call(this,state_21475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20544__auto____0;
cljs$core$async$state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20544__auto____1;
return cljs$core$async$state_machine__20544__auto__;
})()
;})(switch__20543__auto__,c__20655__auto__))
})();
var state__20657__auto__ = (function (){var statearr_21499 = f__20656__auto__.call(null);
(statearr_21499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20655__auto__);

return statearr_21499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20657__auto__);
});})(c__20655__auto__))
);

return c__20655__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17510__auto__ = (((_ == null))?null:_);
var m__17511__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17510__auto__)]);
if(!((m__17511__auto__ == null))){
return m__17511__auto__.call(null,_);
} else {
var m__17511__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17511__auto____$1 == null))){
return m__17511__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17510__auto__ = (((m == null))?null:m);
var m__17511__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17510__auto__)]);
if(!((m__17511__auto__ == null))){
return m__17511__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17511__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17511__auto____$1 == null))){
return m__17511__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17510__auto__ = (((m == null))?null:m);
var m__17511__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17510__auto__)]);
if(!((m__17511__auto__ == null))){
return m__17511__auto__.call(null,m,ch);
} else {
var m__17511__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17511__auto____$1 == null))){
return m__17511__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17510__auto__ = (((m == null))?null:m);
var m__17511__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17510__auto__)]);
if(!((m__17511__auto__ == null))){
return m__17511__auto__.call(null,m);
} else {
var m__17511__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17511__auto____$1 == null))){
return m__17511__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21741 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21741 = (function (mult,ch,cs,meta21742){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta21742 = meta21742;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21743,meta21742__$1){
var self__ = this;
var _21743__$1 = this;
return (new cljs.core.async.t_cljs$core$async21741(self__.mult,self__.ch,self__.cs,meta21742__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21741.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21743){
var self__ = this;
var _21743__$1 = this;
return self__.meta21742;
});})(cs))
;

cljs.core.async.t_cljs$core$async21741.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21741.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21741.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async21741.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21741.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21741.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21741.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21742","meta21742",724682120,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21741.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21741.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21741";

cljs.core.async.t_cljs$core$async21741.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17453__auto__,writer__17454__auto__,opt__17455__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"cljs.core.async/t_cljs$core$async21741");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async21741 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21741(mult__$1,ch__$1,cs__$1,meta21742){
return (new cljs.core.async.t_cljs$core$async21741(mult__$1,ch__$1,cs__$1,meta21742));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21741(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20655__auto___21962 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20655__auto___21962,cs,m,dchan,dctr,done){
return (function (){
var f__20656__auto__ = (function (){var switch__20543__auto__ = ((function (c__20655__auto___21962,cs,m,dchan,dctr,done){
return (function (state_21874){
var state_val_21875 = (state_21874[(1)]);
if((state_val_21875 === (7))){
var inst_21870 = (state_21874[(2)]);
var state_21874__$1 = state_21874;
var statearr_21876_21963 = state_21874__$1;
(statearr_21876_21963[(2)] = inst_21870);

(statearr_21876_21963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21875 === (20))){
var inst_21775 = (state_21874[(7)]);
var inst_21785 = cljs.core.first.call(null,inst_21775);
var inst_21786 = cljs.core.nth.call(null,inst_21785,(0),null);
var inst_21787 = cljs.core.nth.call(null,inst_21785,(1),null);
var state_21874__$1 = (function (){var statearr_21877 = state_21874;
(statearr_21877[(8)] = inst_21786);

return statearr_21877;
})();
if(cljs.core.truth_(inst_21787)){
var statearr_21878_21964 = state_21874__$1;
(statearr_21878_21964[(1)] = (22));

} else {
var statearr_21879_21965 = state_21874__$1;
(statearr_21879_21965[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21875 === (27))){
var inst_21822 = (state_21874[(9)]);
var inst_21746 = (state_21874[(10)]);
var inst_21815 = (state_21874[(11)]);
var inst_21817 = (state_21874[(12)]);
var inst_21822__$1 = cljs.core._nth.call(null,inst_21815,inst_21817);
var inst_21823 = cljs.core.async.put_BANG_.call(null,inst_21822__$1,inst_21746,done);
var state_21874__$1 = (function (){var statearr_21880 = state_21874;
(statearr_21880[(9)] = inst_21822__$1);

return statearr_21880;
})();
if(cljs.core.truth_(inst_21823)){
var statearr_21881_21966 = state_21874__$1;
(statearr_21881_21966[(1)] = (30));

} else {
var statearr_21882_21967 = state_21874__$1;
(statearr_21882_21967[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21875 === (1))){
var state_21874__$1 = state_21874;
var statearr_21883_21968 = state_21874__$1;
(statearr_21883_21968[(2)] = null);

(statearr_21883_21968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21875 === (24))){
var inst_21775 = (state_21874[(7)]);
var inst_21792 = (state_21874[(2)]);
var inst_21793 = cljs.core.next.call(null,inst_21775);
var inst_21755 = inst_21793;
var inst_21756 = null;
var inst_21757 = (0);
var inst_21758 = (0);
var state_21874__$1 = (function (){var statearr_21884 = state_21874;
(statearr_21884[(13)] = inst_21757);

(statearr_21884[(14)] = inst_21756);

(statearr_21884[(15)] = inst_21758);

(statearr_21884[(16)] = inst_21755);

(statearr_21884[(17)] = inst_21792);

return statearr_21884;
})();
var statearr_21885_21969 = state_21874__$1;
(statearr_21885_21969[(2)] = null);

(statearr_21885_21969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21875 === (39))){
var state_21874__$1 = state_21874;
var statearr_21889_21970 = state_21874__$1;
(statearr_21889_21970[(2)] = null);

(statearr_21889_21970[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21875 === (4))){
var inst_21746 = (state_21874[(10)]);
var inst_21746__$1 = (state_21874[(2)]);
var inst_21747 = (inst_21746__$1 == null);
var state_21874__$1 = (function (){var statearr_21890 = state_21874;
(statearr_21890[(10)] = inst_21746__$1);

return statearr_21890;
})();
if(cljs.core.truth_(inst_21747)){
var statearr_21891_21971 = state_21874__$1;
(statearr_21891_21971[(1)] = (5));

} else {
var statearr_21892_21972 = state_21874__$1;
(statearr_21892_21972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21875 === (15))){
var inst_21757 = (state_21874[(13)]);
var inst_21756 = (state_21874[(14)]);
var inst_21758 = (state_21874[(15)]);
var inst_21755 = (state_21874[(16)]);
var inst_21771 = (state_21874[(2)]);
var inst_21772 = (inst_21758 + (1));
var tmp21886 = inst_21757;
var tmp21887 = inst_21756;
var tmp21888 = inst_21755;
var inst_21755__$1 = tmp21888;
var inst_21756__$1 = tmp21887;
var inst_21757__$1 = tmp21886;
var inst_21758__$1 = inst_21772;
var state_21874__$1 = (function (){var statearr_21893 = state_21874;
(statearr_21893[(13)] = inst_21757__$1);

(statearr_21893[(14)] = inst_21756__$1);

(statearr_21893[(15)] = inst_21758__$1);

(statearr_21893[(18)] = inst_21771);

(statearr_21893[(16)] = inst_21755__$1);

return statearr_21893;
})();
var statearr_21894_21973 = state_21874__$1;
(statearr_21894_21973[(2)] = null);

(statearr_21894_21973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21875 === (21))){
var inst_21796 = (state_21874[(2)]);
var state_21874__$1 = state_21874;
var statearr_21898_21974 = state_21874__$1;
(statearr_21898_21974[(2)] = inst_21796);

(statearr_21898_21974[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21875 === (31))){
var inst_21822 = (state_21874[(9)]);
var inst_21826 = done.call(null,null);
var inst_21827 = cljs.core.async.untap_STAR_.call(null,m,inst_21822);
var state_21874__$1 = (function (){var statearr_21899 = state_21874;
(statearr_21899[(19)] = inst_21826);

return statearr_21899;
})();
var statearr_21900_21975 = state_21874__$1;
(statearr_21900_21975[(2)] = inst_21827);

(statearr_21900_21975[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21875 === (32))){
var inst_21816 = (state_21874[(20)]);
var inst_21815 = (state_21874[(11)]);
var inst_21814 = (state_21874[(21)]);
var inst_21817 = (state_21874[(12)]);
var inst_21829 = (state_21874[(2)]);
var inst_21830 = (inst_21817 + (1));
var tmp21895 = inst_21816;
var tmp21896 = inst_21815;
var tmp21897 = inst_21814;
var inst_21814__$1 = tmp21897;
var inst_21815__$1 = tmp21896;
var inst_21816__$1 = tmp21895;
var inst_21817__$1 = inst_21830;
var state_21874__$1 = (function (){var statearr_21901 = state_21874;
(statearr_21901[(20)] = inst_21816__$1);

(statearr_21901[(11)] = inst_21815__$1);

(statearr_21901[(21)] = inst_21814__$1);

(statearr_21901[(22)] = inst_21829);

(statearr_21901[(12)] = inst_21817__$1);

return statearr_21901;
})();
var statearr_21902_21976 = state_21874__$1;
(statearr_21902_21976[(2)] = null);

(statearr_21902_21976[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21875 === (40))){
var inst_21842 = (state_21874[(23)]);
var inst_21846 = done.call(null,null);
var inst_21847 = cljs.core.async.untap_STAR_.call(null,m,inst_21842);
var state_21874__$1 = (function (){var statearr_21903 = state_21874;
(statearr_21903[(24)] = inst_21846);

return statearr_21903;
})();
var statearr_21904_21977 = state_21874__$1;
(statearr_21904_21977[(2)] = inst_21847);

(statearr_21904_21977[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21875 === (33))){
var inst_21833 = (state_21874[(25)]);
var inst_21835 = cljs.core.chunked_seq_QMARK_.call(null,inst_21833);
var state_21874__$1 = state_21874;
if(inst_21835){
var statearr_21905_21978 = state_21874__$1;
(statearr_21905_21978[(1)] = (36));

} else {
var statearr_21906_21979 = state_21874__$1;
(statearr_21906_21979[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21875 === (13))){
var inst_21765 = (state_21874[(26)]);
var inst_21768 = cljs.core.async.close_BANG_.call(null,inst_21765);
var state_21874__$1 = state_21874;
var statearr_21907_21980 = state_21874__$1;
(statearr_21907_21980[(2)] = inst_21768);

(statearr_21907_21980[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21875 === (22))){
var inst_21786 = (state_21874[(8)]);
var inst_21789 = cljs.core.async.close_BANG_.call(null,inst_21786);
var state_21874__$1 = state_21874;
var statearr_21908_21981 = state_21874__$1;
(statearr_21908_21981[(2)] = inst_21789);

(statearr_21908_21981[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21875 === (36))){
var inst_21833 = (state_21874[(25)]);
var inst_21837 = cljs.core.chunk_first.call(null,inst_21833);
var inst_21838 = cljs.core.chunk_rest.call(null,inst_21833);
var inst_21839 = cljs.core.count.call(null,inst_21837);
var inst_21814 = inst_21838;
var inst_21815 = inst_21837;
var inst_21816 = inst_21839;
var inst_21817 = (0);
var state_21874__$1 = (function (){var statearr_21909 = state_21874;
(statearr_21909[(20)] = inst_21816);

(statearr_21909[(11)] = inst_21815);

(statearr_21909[(21)] = inst_21814);

(statearr_21909[(12)] = inst_21817);

return statearr_21909;
})();
var statearr_21910_21982 = state_21874__$1;
(statearr_21910_21982[(2)] = null);

(statearr_21910_21982[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21875 === (41))){
var inst_21833 = (state_21874[(25)]);
var inst_21849 = (state_21874[(2)]);
var inst_21850 = cljs.core.next.call(null,inst_21833);
var inst_21814 = inst_21850;
var inst_21815 = null;
var inst_21816 = (0);
var inst_21817 = (0);
var state_21874__$1 = (function (){var statearr_21911 = state_21874;
(statearr_21911[(20)] = inst_21816);

(statearr_21911[(11)] = inst_21815);

(statearr_21911[(21)] = inst_21814);

(statearr_21911[(12)] = inst_21817);

(statearr_21911[(27)] = inst_21849);

return statearr_21911;
})();
var statearr_21912_21983 = state_21874__$1;
(statearr_21912_21983[(2)] = null);

(statearr_21912_21983[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21875 === (43))){
var state_21874__$1 = state_21874;
var statearr_21913_21984 = state_21874__$1;
(statearr_21913_21984[(2)] = null);

(statearr_21913_21984[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21875 === (29))){
var inst_21858 = (state_21874[(2)]);
var state_21874__$1 = state_21874;
var statearr_21914_21985 = state_21874__$1;
(statearr_21914_21985[(2)] = inst_21858);

(statearr_21914_21985[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21875 === (44))){
var inst_21867 = (state_21874[(2)]);
var state_21874__$1 = (function (){var statearr_21915 = state_21874;
(statearr_21915[(28)] = inst_21867);

return statearr_21915;
})();
var statearr_21916_21986 = state_21874__$1;
(statearr_21916_21986[(2)] = null);

(statearr_21916_21986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21875 === (6))){
var inst_21806 = (state_21874[(29)]);
var inst_21805 = cljs.core.deref.call(null,cs);
var inst_21806__$1 = cljs.core.keys.call(null,inst_21805);
var inst_21807 = cljs.core.count.call(null,inst_21806__$1);
var inst_21808 = cljs.core.reset_BANG_.call(null,dctr,inst_21807);
var inst_21813 = cljs.core.seq.call(null,inst_21806__$1);
var inst_21814 = inst_21813;
var inst_21815 = null;
var inst_21816 = (0);
var inst_21817 = (0);
var state_21874__$1 = (function (){var statearr_21917 = state_21874;
(statearr_21917[(20)] = inst_21816);

(statearr_21917[(11)] = inst_21815);

(statearr_21917[(21)] = inst_21814);

(statearr_21917[(30)] = inst_21808);

(statearr_21917[(12)] = inst_21817);

(statearr_21917[(29)] = inst_21806__$1);

return statearr_21917;
})();
var statearr_21918_21987 = state_21874__$1;
(statearr_21918_21987[(2)] = null);

(statearr_21918_21987[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21875 === (28))){
var inst_21814 = (state_21874[(21)]);
var inst_21833 = (state_21874[(25)]);
var inst_21833__$1 = cljs.core.seq.call(null,inst_21814);
var state_21874__$1 = (function (){var statearr_21919 = state_21874;
(statearr_21919[(25)] = inst_21833__$1);

return statearr_21919;
})();
if(inst_21833__$1){
var statearr_21920_21988 = state_21874__$1;
(statearr_21920_21988[(1)] = (33));

} else {
var statearr_21921_21989 = state_21874__$1;
(statearr_21921_21989[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21875 === (25))){
var inst_21816 = (state_21874[(20)]);
var inst_21817 = (state_21874[(12)]);
var inst_21819 = (inst_21817 < inst_21816);
var inst_21820 = inst_21819;
var state_21874__$1 = state_21874;
if(cljs.core.truth_(inst_21820)){
var statearr_21922_21990 = state_21874__$1;
(statearr_21922_21990[(1)] = (27));

} else {
var statearr_21923_21991 = state_21874__$1;
(statearr_21923_21991[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21875 === (34))){
var state_21874__$1 = state_21874;
var statearr_21924_21992 = state_21874__$1;
(statearr_21924_21992[(2)] = null);

(statearr_21924_21992[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21875 === (17))){
var state_21874__$1 = state_21874;
var statearr_21925_21993 = state_21874__$1;
(statearr_21925_21993[(2)] = null);

(statearr_21925_21993[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21875 === (3))){
var inst_21872 = (state_21874[(2)]);
var state_21874__$1 = state_21874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21874__$1,inst_21872);
} else {
if((state_val_21875 === (12))){
var inst_21801 = (state_21874[(2)]);
var state_21874__$1 = state_21874;
var statearr_21926_21994 = state_21874__$1;
(statearr_21926_21994[(2)] = inst_21801);

(statearr_21926_21994[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21875 === (2))){
var state_21874__$1 = state_21874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21874__$1,(4),ch);
} else {
if((state_val_21875 === (23))){
var state_21874__$1 = state_21874;
var statearr_21927_21995 = state_21874__$1;
(statearr_21927_21995[(2)] = null);

(statearr_21927_21995[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21875 === (35))){
var inst_21856 = (state_21874[(2)]);
var state_21874__$1 = state_21874;
var statearr_21928_21996 = state_21874__$1;
(statearr_21928_21996[(2)] = inst_21856);

(statearr_21928_21996[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21875 === (19))){
var inst_21775 = (state_21874[(7)]);
var inst_21779 = cljs.core.chunk_first.call(null,inst_21775);
var inst_21780 = cljs.core.chunk_rest.call(null,inst_21775);
var inst_21781 = cljs.core.count.call(null,inst_21779);
var inst_21755 = inst_21780;
var inst_21756 = inst_21779;
var inst_21757 = inst_21781;
var inst_21758 = (0);
var state_21874__$1 = (function (){var statearr_21929 = state_21874;
(statearr_21929[(13)] = inst_21757);

(statearr_21929[(14)] = inst_21756);

(statearr_21929[(15)] = inst_21758);

(statearr_21929[(16)] = inst_21755);

return statearr_21929;
})();
var statearr_21930_21997 = state_21874__$1;
(statearr_21930_21997[(2)] = null);

(statearr_21930_21997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21875 === (11))){
var inst_21775 = (state_21874[(7)]);
var inst_21755 = (state_21874[(16)]);
var inst_21775__$1 = cljs.core.seq.call(null,inst_21755);
var state_21874__$1 = (function (){var statearr_21931 = state_21874;
(statearr_21931[(7)] = inst_21775__$1);

return statearr_21931;
})();
if(inst_21775__$1){
var statearr_21932_21998 = state_21874__$1;
(statearr_21932_21998[(1)] = (16));

} else {
var statearr_21933_21999 = state_21874__$1;
(statearr_21933_21999[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21875 === (9))){
var inst_21803 = (state_21874[(2)]);
var state_21874__$1 = state_21874;
var statearr_21934_22000 = state_21874__$1;
(statearr_21934_22000[(2)] = inst_21803);

(statearr_21934_22000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21875 === (5))){
var inst_21753 = cljs.core.deref.call(null,cs);
var inst_21754 = cljs.core.seq.call(null,inst_21753);
var inst_21755 = inst_21754;
var inst_21756 = null;
var inst_21757 = (0);
var inst_21758 = (0);
var state_21874__$1 = (function (){var statearr_21935 = state_21874;
(statearr_21935[(13)] = inst_21757);

(statearr_21935[(14)] = inst_21756);

(statearr_21935[(15)] = inst_21758);

(statearr_21935[(16)] = inst_21755);

return statearr_21935;
})();
var statearr_21936_22001 = state_21874__$1;
(statearr_21936_22001[(2)] = null);

(statearr_21936_22001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21875 === (14))){
var state_21874__$1 = state_21874;
var statearr_21937_22002 = state_21874__$1;
(statearr_21937_22002[(2)] = null);

(statearr_21937_22002[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21875 === (45))){
var inst_21864 = (state_21874[(2)]);
var state_21874__$1 = state_21874;
var statearr_21938_22003 = state_21874__$1;
(statearr_21938_22003[(2)] = inst_21864);

(statearr_21938_22003[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21875 === (26))){
var inst_21806 = (state_21874[(29)]);
var inst_21860 = (state_21874[(2)]);
var inst_21861 = cljs.core.seq.call(null,inst_21806);
var state_21874__$1 = (function (){var statearr_21939 = state_21874;
(statearr_21939[(31)] = inst_21860);

return statearr_21939;
})();
if(inst_21861){
var statearr_21940_22004 = state_21874__$1;
(statearr_21940_22004[(1)] = (42));

} else {
var statearr_21941_22005 = state_21874__$1;
(statearr_21941_22005[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21875 === (16))){
var inst_21775 = (state_21874[(7)]);
var inst_21777 = cljs.core.chunked_seq_QMARK_.call(null,inst_21775);
var state_21874__$1 = state_21874;
if(inst_21777){
var statearr_21942_22006 = state_21874__$1;
(statearr_21942_22006[(1)] = (19));

} else {
var statearr_21943_22007 = state_21874__$1;
(statearr_21943_22007[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21875 === (38))){
var inst_21853 = (state_21874[(2)]);
var state_21874__$1 = state_21874;
var statearr_21944_22008 = state_21874__$1;
(statearr_21944_22008[(2)] = inst_21853);

(statearr_21944_22008[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21875 === (30))){
var state_21874__$1 = state_21874;
var statearr_21945_22009 = state_21874__$1;
(statearr_21945_22009[(2)] = null);

(statearr_21945_22009[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21875 === (10))){
var inst_21756 = (state_21874[(14)]);
var inst_21758 = (state_21874[(15)]);
var inst_21764 = cljs.core._nth.call(null,inst_21756,inst_21758);
var inst_21765 = cljs.core.nth.call(null,inst_21764,(0),null);
var inst_21766 = cljs.core.nth.call(null,inst_21764,(1),null);
var state_21874__$1 = (function (){var statearr_21946 = state_21874;
(statearr_21946[(26)] = inst_21765);

return statearr_21946;
})();
if(cljs.core.truth_(inst_21766)){
var statearr_21947_22010 = state_21874__$1;
(statearr_21947_22010[(1)] = (13));

} else {
var statearr_21948_22011 = state_21874__$1;
(statearr_21948_22011[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21875 === (18))){
var inst_21799 = (state_21874[(2)]);
var state_21874__$1 = state_21874;
var statearr_21949_22012 = state_21874__$1;
(statearr_21949_22012[(2)] = inst_21799);

(statearr_21949_22012[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21875 === (42))){
var state_21874__$1 = state_21874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21874__$1,(45),dchan);
} else {
if((state_val_21875 === (37))){
var inst_21746 = (state_21874[(10)]);
var inst_21842 = (state_21874[(23)]);
var inst_21833 = (state_21874[(25)]);
var inst_21842__$1 = cljs.core.first.call(null,inst_21833);
var inst_21843 = cljs.core.async.put_BANG_.call(null,inst_21842__$1,inst_21746,done);
var state_21874__$1 = (function (){var statearr_21950 = state_21874;
(statearr_21950[(23)] = inst_21842__$1);

return statearr_21950;
})();
if(cljs.core.truth_(inst_21843)){
var statearr_21951_22013 = state_21874__$1;
(statearr_21951_22013[(1)] = (39));

} else {
var statearr_21952_22014 = state_21874__$1;
(statearr_21952_22014[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21875 === (8))){
var inst_21757 = (state_21874[(13)]);
var inst_21758 = (state_21874[(15)]);
var inst_21760 = (inst_21758 < inst_21757);
var inst_21761 = inst_21760;
var state_21874__$1 = state_21874;
if(cljs.core.truth_(inst_21761)){
var statearr_21953_22015 = state_21874__$1;
(statearr_21953_22015[(1)] = (10));

} else {
var statearr_21954_22016 = state_21874__$1;
(statearr_21954_22016[(1)] = (11));

}

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
});})(c__20655__auto___21962,cs,m,dchan,dctr,done))
;
return ((function (switch__20543__auto__,c__20655__auto___21962,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20544__auto__ = null;
var cljs$core$async$mult_$_state_machine__20544__auto____0 = (function (){
var statearr_21958 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21958[(0)] = cljs$core$async$mult_$_state_machine__20544__auto__);

(statearr_21958[(1)] = (1));

return statearr_21958;
});
var cljs$core$async$mult_$_state_machine__20544__auto____1 = (function (state_21874){
while(true){
var ret_value__20545__auto__ = (function (){try{while(true){
var result__20546__auto__ = switch__20543__auto__.call(null,state_21874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20546__auto__;
}
break;
}
}catch (e21959){if((e21959 instanceof Object)){
var ex__20547__auto__ = e21959;
var statearr_21960_22017 = state_21874;
(statearr_21960_22017[(5)] = ex__20547__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22018 = state_21874;
state_21874 = G__22018;
continue;
} else {
return ret_value__20545__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20544__auto__ = function(state_21874){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20544__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20544__auto____1.call(this,state_21874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20544__auto____0;
cljs$core$async$mult_$_state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20544__auto____1;
return cljs$core$async$mult_$_state_machine__20544__auto__;
})()
;})(switch__20543__auto__,c__20655__auto___21962,cs,m,dchan,dctr,done))
})();
var state__20657__auto__ = (function (){var statearr_21961 = f__20656__auto__.call(null);
(statearr_21961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20655__auto___21962);

return statearr_21961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20657__auto__);
});})(c__20655__auto___21962,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args22019 = [];
var len__17913__auto___22022 = arguments.length;
var i__17914__auto___22023 = (0);
while(true){
if((i__17914__auto___22023 < len__17913__auto___22022)){
args22019.push((arguments[i__17914__auto___22023]));

var G__22024 = (i__17914__auto___22023 + (1));
i__17914__auto___22023 = G__22024;
continue;
} else {
}
break;
}

var G__22021 = args22019.length;
switch (G__22021) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22019.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17510__auto__ = (((m == null))?null:m);
var m__17511__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17510__auto__)]);
if(!((m__17511__auto__ == null))){
return m__17511__auto__.call(null,m,ch);
} else {
var m__17511__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17511__auto____$1 == null))){
return m__17511__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17510__auto__ = (((m == null))?null:m);
var m__17511__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17510__auto__)]);
if(!((m__17511__auto__ == null))){
return m__17511__auto__.call(null,m,ch);
} else {
var m__17511__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17511__auto____$1 == null))){
return m__17511__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17510__auto__ = (((m == null))?null:m);
var m__17511__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17510__auto__)]);
if(!((m__17511__auto__ == null))){
return m__17511__auto__.call(null,m);
} else {
var m__17511__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17511__auto____$1 == null))){
return m__17511__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17510__auto__ = (((m == null))?null:m);
var m__17511__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17510__auto__)]);
if(!((m__17511__auto__ == null))){
return m__17511__auto__.call(null,m,state_map);
} else {
var m__17511__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17511__auto____$1 == null))){
return m__17511__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17510__auto__ = (((m == null))?null:m);
var m__17511__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17510__auto__)]);
if(!((m__17511__auto__ == null))){
return m__17511__auto__.call(null,m,mode);
} else {
var m__17511__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17511__auto____$1 == null))){
return m__17511__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17920__auto__ = [];
var len__17913__auto___22036 = arguments.length;
var i__17914__auto___22037 = (0);
while(true){
if((i__17914__auto___22037 < len__17913__auto___22036)){
args__17920__auto__.push((arguments[i__17914__auto___22037]));

var G__22038 = (i__17914__auto___22037 + (1));
i__17914__auto___22037 = G__22038;
continue;
} else {
}
break;
}

var argseq__17921__auto__ = ((((3) < args__17920__auto__.length))?(new cljs.core.IndexedSeq(args__17920__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17921__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22030){
var map__22031 = p__22030;
var map__22031__$1 = ((((!((map__22031 == null)))?((((map__22031.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22031.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22031):map__22031);
var opts = map__22031__$1;
var statearr_22033_22039 = state;
(statearr_22033_22039[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__22031,map__22031__$1,opts){
return (function (val){
var statearr_22034_22040 = state;
(statearr_22034_22040[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22031,map__22031__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_22035_22041 = state;
(statearr_22035_22041[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22026){
var G__22027 = cljs.core.first.call(null,seq22026);
var seq22026__$1 = cljs.core.next.call(null,seq22026);
var G__22028 = cljs.core.first.call(null,seq22026__$1);
var seq22026__$2 = cljs.core.next.call(null,seq22026__$1);
var G__22029 = cljs.core.first.call(null,seq22026__$2);
var seq22026__$3 = cljs.core.next.call(null,seq22026__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22027,G__22028,G__22029,seq22026__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22205 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22205 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22206){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta22206 = meta22206;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22207,meta22206__$1){
var self__ = this;
var _22207__$1 = this;
return (new cljs.core.async.t_cljs$core$async22205(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22206__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22205.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22207){
var self__ = this;
var _22207__$1 = this;
return self__.meta22206;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22205.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22205.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22205.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async22205.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22205.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22205.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22205.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22205.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22205.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22206","meta22206",1317456138,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22205.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22205.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22205";

cljs.core.async.t_cljs$core$async22205.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17453__auto__,writer__17454__auto__,opt__17455__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"cljs.core.async/t_cljs$core$async22205");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async22205 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22205(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22206){
return (new cljs.core.async.t_cljs$core$async22205(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22206));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22205(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20655__auto___22368 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20655__auto___22368,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20656__auto__ = (function (){var switch__20543__auto__ = ((function (c__20655__auto___22368,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22305){
var state_val_22306 = (state_22305[(1)]);
if((state_val_22306 === (7))){
var inst_22223 = (state_22305[(2)]);
var state_22305__$1 = state_22305;
var statearr_22307_22369 = state_22305__$1;
(statearr_22307_22369[(2)] = inst_22223);

(statearr_22307_22369[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (20))){
var inst_22235 = (state_22305[(7)]);
var state_22305__$1 = state_22305;
var statearr_22308_22370 = state_22305__$1;
(statearr_22308_22370[(2)] = inst_22235);

(statearr_22308_22370[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (27))){
var state_22305__$1 = state_22305;
var statearr_22309_22371 = state_22305__$1;
(statearr_22309_22371[(2)] = null);

(statearr_22309_22371[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (1))){
var inst_22211 = (state_22305[(8)]);
var inst_22211__$1 = calc_state.call(null);
var inst_22213 = (inst_22211__$1 == null);
var inst_22214 = cljs.core.not.call(null,inst_22213);
var state_22305__$1 = (function (){var statearr_22310 = state_22305;
(statearr_22310[(8)] = inst_22211__$1);

return statearr_22310;
})();
if(inst_22214){
var statearr_22311_22372 = state_22305__$1;
(statearr_22311_22372[(1)] = (2));

} else {
var statearr_22312_22373 = state_22305__$1;
(statearr_22312_22373[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (24))){
var inst_22279 = (state_22305[(9)]);
var inst_22265 = (state_22305[(10)]);
var inst_22258 = (state_22305[(11)]);
var inst_22279__$1 = inst_22258.call(null,inst_22265);
var state_22305__$1 = (function (){var statearr_22313 = state_22305;
(statearr_22313[(9)] = inst_22279__$1);

return statearr_22313;
})();
if(cljs.core.truth_(inst_22279__$1)){
var statearr_22314_22374 = state_22305__$1;
(statearr_22314_22374[(1)] = (29));

} else {
var statearr_22315_22375 = state_22305__$1;
(statearr_22315_22375[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (4))){
var inst_22226 = (state_22305[(2)]);
var state_22305__$1 = state_22305;
if(cljs.core.truth_(inst_22226)){
var statearr_22316_22376 = state_22305__$1;
(statearr_22316_22376[(1)] = (8));

} else {
var statearr_22317_22377 = state_22305__$1;
(statearr_22317_22377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (15))){
var inst_22252 = (state_22305[(2)]);
var state_22305__$1 = state_22305;
if(cljs.core.truth_(inst_22252)){
var statearr_22318_22378 = state_22305__$1;
(statearr_22318_22378[(1)] = (19));

} else {
var statearr_22319_22379 = state_22305__$1;
(statearr_22319_22379[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (21))){
var inst_22257 = (state_22305[(12)]);
var inst_22257__$1 = (state_22305[(2)]);
var inst_22258 = cljs.core.get.call(null,inst_22257__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22259 = cljs.core.get.call(null,inst_22257__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22260 = cljs.core.get.call(null,inst_22257__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22305__$1 = (function (){var statearr_22320 = state_22305;
(statearr_22320[(13)] = inst_22259);

(statearr_22320[(11)] = inst_22258);

(statearr_22320[(12)] = inst_22257__$1);

return statearr_22320;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22305__$1,(22),inst_22260);
} else {
if((state_val_22306 === (31))){
var inst_22287 = (state_22305[(2)]);
var state_22305__$1 = state_22305;
if(cljs.core.truth_(inst_22287)){
var statearr_22321_22380 = state_22305__$1;
(statearr_22321_22380[(1)] = (32));

} else {
var statearr_22322_22381 = state_22305__$1;
(statearr_22322_22381[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (32))){
var inst_22264 = (state_22305[(14)]);
var state_22305__$1 = state_22305;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22305__$1,(35),out,inst_22264);
} else {
if((state_val_22306 === (33))){
var inst_22257 = (state_22305[(12)]);
var inst_22235 = inst_22257;
var state_22305__$1 = (function (){var statearr_22323 = state_22305;
(statearr_22323[(7)] = inst_22235);

return statearr_22323;
})();
var statearr_22324_22382 = state_22305__$1;
(statearr_22324_22382[(2)] = null);

(statearr_22324_22382[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (13))){
var inst_22235 = (state_22305[(7)]);
var inst_22242 = inst_22235.cljs$lang$protocol_mask$partition0$;
var inst_22243 = (inst_22242 & (64));
var inst_22244 = inst_22235.cljs$core$ISeq$;
var inst_22245 = (inst_22243) || (inst_22244);
var state_22305__$1 = state_22305;
if(cljs.core.truth_(inst_22245)){
var statearr_22325_22383 = state_22305__$1;
(statearr_22325_22383[(1)] = (16));

} else {
var statearr_22326_22384 = state_22305__$1;
(statearr_22326_22384[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (22))){
var inst_22264 = (state_22305[(14)]);
var inst_22265 = (state_22305[(10)]);
var inst_22263 = (state_22305[(2)]);
var inst_22264__$1 = cljs.core.nth.call(null,inst_22263,(0),null);
var inst_22265__$1 = cljs.core.nth.call(null,inst_22263,(1),null);
var inst_22266 = (inst_22264__$1 == null);
var inst_22267 = cljs.core._EQ_.call(null,inst_22265__$1,change);
var inst_22268 = (inst_22266) || (inst_22267);
var state_22305__$1 = (function (){var statearr_22327 = state_22305;
(statearr_22327[(14)] = inst_22264__$1);

(statearr_22327[(10)] = inst_22265__$1);

return statearr_22327;
})();
if(cljs.core.truth_(inst_22268)){
var statearr_22328_22385 = state_22305__$1;
(statearr_22328_22385[(1)] = (23));

} else {
var statearr_22329_22386 = state_22305__$1;
(statearr_22329_22386[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (36))){
var inst_22257 = (state_22305[(12)]);
var inst_22235 = inst_22257;
var state_22305__$1 = (function (){var statearr_22330 = state_22305;
(statearr_22330[(7)] = inst_22235);

return statearr_22330;
})();
var statearr_22331_22387 = state_22305__$1;
(statearr_22331_22387[(2)] = null);

(statearr_22331_22387[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (29))){
var inst_22279 = (state_22305[(9)]);
var state_22305__$1 = state_22305;
var statearr_22332_22388 = state_22305__$1;
(statearr_22332_22388[(2)] = inst_22279);

(statearr_22332_22388[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (6))){
var state_22305__$1 = state_22305;
var statearr_22333_22389 = state_22305__$1;
(statearr_22333_22389[(2)] = false);

(statearr_22333_22389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (28))){
var inst_22275 = (state_22305[(2)]);
var inst_22276 = calc_state.call(null);
var inst_22235 = inst_22276;
var state_22305__$1 = (function (){var statearr_22334 = state_22305;
(statearr_22334[(15)] = inst_22275);

(statearr_22334[(7)] = inst_22235);

return statearr_22334;
})();
var statearr_22335_22390 = state_22305__$1;
(statearr_22335_22390[(2)] = null);

(statearr_22335_22390[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (25))){
var inst_22301 = (state_22305[(2)]);
var state_22305__$1 = state_22305;
var statearr_22336_22391 = state_22305__$1;
(statearr_22336_22391[(2)] = inst_22301);

(statearr_22336_22391[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (34))){
var inst_22299 = (state_22305[(2)]);
var state_22305__$1 = state_22305;
var statearr_22337_22392 = state_22305__$1;
(statearr_22337_22392[(2)] = inst_22299);

(statearr_22337_22392[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (17))){
var state_22305__$1 = state_22305;
var statearr_22338_22393 = state_22305__$1;
(statearr_22338_22393[(2)] = false);

(statearr_22338_22393[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (3))){
var state_22305__$1 = state_22305;
var statearr_22339_22394 = state_22305__$1;
(statearr_22339_22394[(2)] = false);

(statearr_22339_22394[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (12))){
var inst_22303 = (state_22305[(2)]);
var state_22305__$1 = state_22305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22305__$1,inst_22303);
} else {
if((state_val_22306 === (2))){
var inst_22211 = (state_22305[(8)]);
var inst_22216 = inst_22211.cljs$lang$protocol_mask$partition0$;
var inst_22217 = (inst_22216 & (64));
var inst_22218 = inst_22211.cljs$core$ISeq$;
var inst_22219 = (inst_22217) || (inst_22218);
var state_22305__$1 = state_22305;
if(cljs.core.truth_(inst_22219)){
var statearr_22340_22395 = state_22305__$1;
(statearr_22340_22395[(1)] = (5));

} else {
var statearr_22341_22396 = state_22305__$1;
(statearr_22341_22396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (23))){
var inst_22264 = (state_22305[(14)]);
var inst_22270 = (inst_22264 == null);
var state_22305__$1 = state_22305;
if(cljs.core.truth_(inst_22270)){
var statearr_22342_22397 = state_22305__$1;
(statearr_22342_22397[(1)] = (26));

} else {
var statearr_22343_22398 = state_22305__$1;
(statearr_22343_22398[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (35))){
var inst_22290 = (state_22305[(2)]);
var state_22305__$1 = state_22305;
if(cljs.core.truth_(inst_22290)){
var statearr_22344_22399 = state_22305__$1;
(statearr_22344_22399[(1)] = (36));

} else {
var statearr_22345_22400 = state_22305__$1;
(statearr_22345_22400[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (19))){
var inst_22235 = (state_22305[(7)]);
var inst_22254 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22235);
var state_22305__$1 = state_22305;
var statearr_22346_22401 = state_22305__$1;
(statearr_22346_22401[(2)] = inst_22254);

(statearr_22346_22401[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (11))){
var inst_22235 = (state_22305[(7)]);
var inst_22239 = (inst_22235 == null);
var inst_22240 = cljs.core.not.call(null,inst_22239);
var state_22305__$1 = state_22305;
if(inst_22240){
var statearr_22347_22402 = state_22305__$1;
(statearr_22347_22402[(1)] = (13));

} else {
var statearr_22348_22403 = state_22305__$1;
(statearr_22348_22403[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (9))){
var inst_22211 = (state_22305[(8)]);
var state_22305__$1 = state_22305;
var statearr_22349_22404 = state_22305__$1;
(statearr_22349_22404[(2)] = inst_22211);

(statearr_22349_22404[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (5))){
var state_22305__$1 = state_22305;
var statearr_22350_22405 = state_22305__$1;
(statearr_22350_22405[(2)] = true);

(statearr_22350_22405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (14))){
var state_22305__$1 = state_22305;
var statearr_22351_22406 = state_22305__$1;
(statearr_22351_22406[(2)] = false);

(statearr_22351_22406[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (26))){
var inst_22265 = (state_22305[(10)]);
var inst_22272 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22265);
var state_22305__$1 = state_22305;
var statearr_22352_22407 = state_22305__$1;
(statearr_22352_22407[(2)] = inst_22272);

(statearr_22352_22407[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (16))){
var state_22305__$1 = state_22305;
var statearr_22353_22408 = state_22305__$1;
(statearr_22353_22408[(2)] = true);

(statearr_22353_22408[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (38))){
var inst_22295 = (state_22305[(2)]);
var state_22305__$1 = state_22305;
var statearr_22354_22409 = state_22305__$1;
(statearr_22354_22409[(2)] = inst_22295);

(statearr_22354_22409[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (30))){
var inst_22259 = (state_22305[(13)]);
var inst_22265 = (state_22305[(10)]);
var inst_22258 = (state_22305[(11)]);
var inst_22282 = cljs.core.empty_QMARK_.call(null,inst_22258);
var inst_22283 = inst_22259.call(null,inst_22265);
var inst_22284 = cljs.core.not.call(null,inst_22283);
var inst_22285 = (inst_22282) && (inst_22284);
var state_22305__$1 = state_22305;
var statearr_22355_22410 = state_22305__$1;
(statearr_22355_22410[(2)] = inst_22285);

(statearr_22355_22410[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (10))){
var inst_22211 = (state_22305[(8)]);
var inst_22231 = (state_22305[(2)]);
var inst_22232 = cljs.core.get.call(null,inst_22231,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22233 = cljs.core.get.call(null,inst_22231,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22234 = cljs.core.get.call(null,inst_22231,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22235 = inst_22211;
var state_22305__$1 = (function (){var statearr_22356 = state_22305;
(statearr_22356[(16)] = inst_22232);

(statearr_22356[(17)] = inst_22233);

(statearr_22356[(7)] = inst_22235);

(statearr_22356[(18)] = inst_22234);

return statearr_22356;
})();
var statearr_22357_22411 = state_22305__$1;
(statearr_22357_22411[(2)] = null);

(statearr_22357_22411[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (18))){
var inst_22249 = (state_22305[(2)]);
var state_22305__$1 = state_22305;
var statearr_22358_22412 = state_22305__$1;
(statearr_22358_22412[(2)] = inst_22249);

(statearr_22358_22412[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (37))){
var state_22305__$1 = state_22305;
var statearr_22359_22413 = state_22305__$1;
(statearr_22359_22413[(2)] = null);

(statearr_22359_22413[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (8))){
var inst_22211 = (state_22305[(8)]);
var inst_22228 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22211);
var state_22305__$1 = state_22305;
var statearr_22360_22414 = state_22305__$1;
(statearr_22360_22414[(2)] = inst_22228);

(statearr_22360_22414[(1)] = (10));


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
});})(c__20655__auto___22368,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20543__auto__,c__20655__auto___22368,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20544__auto__ = null;
var cljs$core$async$mix_$_state_machine__20544__auto____0 = (function (){
var statearr_22364 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22364[(0)] = cljs$core$async$mix_$_state_machine__20544__auto__);

(statearr_22364[(1)] = (1));

return statearr_22364;
});
var cljs$core$async$mix_$_state_machine__20544__auto____1 = (function (state_22305){
while(true){
var ret_value__20545__auto__ = (function (){try{while(true){
var result__20546__auto__ = switch__20543__auto__.call(null,state_22305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20546__auto__;
}
break;
}
}catch (e22365){if((e22365 instanceof Object)){
var ex__20547__auto__ = e22365;
var statearr_22366_22415 = state_22305;
(statearr_22366_22415[(5)] = ex__20547__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22416 = state_22305;
state_22305 = G__22416;
continue;
} else {
return ret_value__20545__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20544__auto__ = function(state_22305){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20544__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20544__auto____1.call(this,state_22305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20544__auto____0;
cljs$core$async$mix_$_state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20544__auto____1;
return cljs$core$async$mix_$_state_machine__20544__auto__;
})()
;})(switch__20543__auto__,c__20655__auto___22368,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20657__auto__ = (function (){var statearr_22367 = f__20656__auto__.call(null);
(statearr_22367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20655__auto___22368);

return statearr_22367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20657__auto__);
});})(c__20655__auto___22368,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17510__auto__ = (((p == null))?null:p);
var m__17511__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17510__auto__)]);
if(!((m__17511__auto__ == null))){
return m__17511__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17511__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17511__auto____$1 == null))){
return m__17511__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17510__auto__ = (((p == null))?null:p);
var m__17511__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17510__auto__)]);
if(!((m__17511__auto__ == null))){
return m__17511__auto__.call(null,p,v,ch);
} else {
var m__17511__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17511__auto____$1 == null))){
return m__17511__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args22417 = [];
var len__17913__auto___22420 = arguments.length;
var i__17914__auto___22421 = (0);
while(true){
if((i__17914__auto___22421 < len__17913__auto___22420)){
args22417.push((arguments[i__17914__auto___22421]));

var G__22422 = (i__17914__auto___22421 + (1));
i__17914__auto___22421 = G__22422;
continue;
} else {
}
break;
}

var G__22419 = args22417.length;
switch (G__22419) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22417.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17510__auto__ = (((p == null))?null:p);
var m__17511__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17510__auto__)]);
if(!((m__17511__auto__ == null))){
return m__17511__auto__.call(null,p);
} else {
var m__17511__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17511__auto____$1 == null))){
return m__17511__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17510__auto__ = (((p == null))?null:p);
var m__17511__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17510__auto__)]);
if(!((m__17511__auto__ == null))){
return m__17511__auto__.call(null,p,v);
} else {
var m__17511__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17511__auto____$1 == null))){
return m__17511__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args22425 = [];
var len__17913__auto___22550 = arguments.length;
var i__17914__auto___22551 = (0);
while(true){
if((i__17914__auto___22551 < len__17913__auto___22550)){
args22425.push((arguments[i__17914__auto___22551]));

var G__22552 = (i__17914__auto___22551 + (1));
i__17914__auto___22551 = G__22552;
continue;
} else {
}
break;
}

var G__22427 = args22425.length;
switch (G__22427) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22425.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16855__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16855__auto__,mults){
return (function (p1__22424_SHARP_){
if(cljs.core.truth_(p1__22424_SHARP_.call(null,topic))){
return p1__22424_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22424_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16855__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22428 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22428 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22429){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22429 = meta22429;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22430,meta22429__$1){
var self__ = this;
var _22430__$1 = this;
return (new cljs.core.async.t_cljs$core$async22428(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22429__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22428.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22430){
var self__ = this;
var _22430__$1 = this;
return self__.meta22429;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22428.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22428.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22428.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async22428.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22428.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22428.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22428.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22428.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22429","meta22429",-807439006,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22428.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22428.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22428";

cljs.core.async.t_cljs$core$async22428.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17453__auto__,writer__17454__auto__,opt__17455__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"cljs.core.async/t_cljs$core$async22428");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22428 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22428(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22429){
return (new cljs.core.async.t_cljs$core$async22428(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22429));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22428(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20655__auto___22554 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20655__auto___22554,mults,ensure_mult,p){
return (function (){
var f__20656__auto__ = (function (){var switch__20543__auto__ = ((function (c__20655__auto___22554,mults,ensure_mult,p){
return (function (state_22502){
var state_val_22503 = (state_22502[(1)]);
if((state_val_22503 === (7))){
var inst_22498 = (state_22502[(2)]);
var state_22502__$1 = state_22502;
var statearr_22504_22555 = state_22502__$1;
(statearr_22504_22555[(2)] = inst_22498);

(statearr_22504_22555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22503 === (20))){
var state_22502__$1 = state_22502;
var statearr_22505_22556 = state_22502__$1;
(statearr_22505_22556[(2)] = null);

(statearr_22505_22556[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22503 === (1))){
var state_22502__$1 = state_22502;
var statearr_22506_22557 = state_22502__$1;
(statearr_22506_22557[(2)] = null);

(statearr_22506_22557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22503 === (24))){
var inst_22481 = (state_22502[(7)]);
var inst_22490 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22481);
var state_22502__$1 = state_22502;
var statearr_22507_22558 = state_22502__$1;
(statearr_22507_22558[(2)] = inst_22490);

(statearr_22507_22558[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22503 === (4))){
var inst_22433 = (state_22502[(8)]);
var inst_22433__$1 = (state_22502[(2)]);
var inst_22434 = (inst_22433__$1 == null);
var state_22502__$1 = (function (){var statearr_22508 = state_22502;
(statearr_22508[(8)] = inst_22433__$1);

return statearr_22508;
})();
if(cljs.core.truth_(inst_22434)){
var statearr_22509_22559 = state_22502__$1;
(statearr_22509_22559[(1)] = (5));

} else {
var statearr_22510_22560 = state_22502__$1;
(statearr_22510_22560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22503 === (15))){
var inst_22475 = (state_22502[(2)]);
var state_22502__$1 = state_22502;
var statearr_22511_22561 = state_22502__$1;
(statearr_22511_22561[(2)] = inst_22475);

(statearr_22511_22561[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22503 === (21))){
var inst_22495 = (state_22502[(2)]);
var state_22502__$1 = (function (){var statearr_22512 = state_22502;
(statearr_22512[(9)] = inst_22495);

return statearr_22512;
})();
var statearr_22513_22562 = state_22502__$1;
(statearr_22513_22562[(2)] = null);

(statearr_22513_22562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22503 === (13))){
var inst_22457 = (state_22502[(10)]);
var inst_22459 = cljs.core.chunked_seq_QMARK_.call(null,inst_22457);
var state_22502__$1 = state_22502;
if(inst_22459){
var statearr_22514_22563 = state_22502__$1;
(statearr_22514_22563[(1)] = (16));

} else {
var statearr_22515_22564 = state_22502__$1;
(statearr_22515_22564[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22503 === (22))){
var inst_22487 = (state_22502[(2)]);
var state_22502__$1 = state_22502;
if(cljs.core.truth_(inst_22487)){
var statearr_22516_22565 = state_22502__$1;
(statearr_22516_22565[(1)] = (23));

} else {
var statearr_22517_22566 = state_22502__$1;
(statearr_22517_22566[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22503 === (6))){
var inst_22481 = (state_22502[(7)]);
var inst_22483 = (state_22502[(11)]);
var inst_22433 = (state_22502[(8)]);
var inst_22481__$1 = topic_fn.call(null,inst_22433);
var inst_22482 = cljs.core.deref.call(null,mults);
var inst_22483__$1 = cljs.core.get.call(null,inst_22482,inst_22481__$1);
var state_22502__$1 = (function (){var statearr_22518 = state_22502;
(statearr_22518[(7)] = inst_22481__$1);

(statearr_22518[(11)] = inst_22483__$1);

return statearr_22518;
})();
if(cljs.core.truth_(inst_22483__$1)){
var statearr_22519_22567 = state_22502__$1;
(statearr_22519_22567[(1)] = (19));

} else {
var statearr_22520_22568 = state_22502__$1;
(statearr_22520_22568[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22503 === (25))){
var inst_22492 = (state_22502[(2)]);
var state_22502__$1 = state_22502;
var statearr_22521_22569 = state_22502__$1;
(statearr_22521_22569[(2)] = inst_22492);

(statearr_22521_22569[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22503 === (17))){
var inst_22457 = (state_22502[(10)]);
var inst_22466 = cljs.core.first.call(null,inst_22457);
var inst_22467 = cljs.core.async.muxch_STAR_.call(null,inst_22466);
var inst_22468 = cljs.core.async.close_BANG_.call(null,inst_22467);
var inst_22469 = cljs.core.next.call(null,inst_22457);
var inst_22443 = inst_22469;
var inst_22444 = null;
var inst_22445 = (0);
var inst_22446 = (0);
var state_22502__$1 = (function (){var statearr_22522 = state_22502;
(statearr_22522[(12)] = inst_22444);

(statearr_22522[(13)] = inst_22445);

(statearr_22522[(14)] = inst_22446);

(statearr_22522[(15)] = inst_22443);

(statearr_22522[(16)] = inst_22468);

return statearr_22522;
})();
var statearr_22523_22570 = state_22502__$1;
(statearr_22523_22570[(2)] = null);

(statearr_22523_22570[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22503 === (3))){
var inst_22500 = (state_22502[(2)]);
var state_22502__$1 = state_22502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22502__$1,inst_22500);
} else {
if((state_val_22503 === (12))){
var inst_22477 = (state_22502[(2)]);
var state_22502__$1 = state_22502;
var statearr_22524_22571 = state_22502__$1;
(statearr_22524_22571[(2)] = inst_22477);

(statearr_22524_22571[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22503 === (2))){
var state_22502__$1 = state_22502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22502__$1,(4),ch);
} else {
if((state_val_22503 === (23))){
var state_22502__$1 = state_22502;
var statearr_22525_22572 = state_22502__$1;
(statearr_22525_22572[(2)] = null);

(statearr_22525_22572[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22503 === (19))){
var inst_22483 = (state_22502[(11)]);
var inst_22433 = (state_22502[(8)]);
var inst_22485 = cljs.core.async.muxch_STAR_.call(null,inst_22483);
var state_22502__$1 = state_22502;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22502__$1,(22),inst_22485,inst_22433);
} else {
if((state_val_22503 === (11))){
var inst_22457 = (state_22502[(10)]);
var inst_22443 = (state_22502[(15)]);
var inst_22457__$1 = cljs.core.seq.call(null,inst_22443);
var state_22502__$1 = (function (){var statearr_22526 = state_22502;
(statearr_22526[(10)] = inst_22457__$1);

return statearr_22526;
})();
if(inst_22457__$1){
var statearr_22527_22573 = state_22502__$1;
(statearr_22527_22573[(1)] = (13));

} else {
var statearr_22528_22574 = state_22502__$1;
(statearr_22528_22574[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22503 === (9))){
var inst_22479 = (state_22502[(2)]);
var state_22502__$1 = state_22502;
var statearr_22529_22575 = state_22502__$1;
(statearr_22529_22575[(2)] = inst_22479);

(statearr_22529_22575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22503 === (5))){
var inst_22440 = cljs.core.deref.call(null,mults);
var inst_22441 = cljs.core.vals.call(null,inst_22440);
var inst_22442 = cljs.core.seq.call(null,inst_22441);
var inst_22443 = inst_22442;
var inst_22444 = null;
var inst_22445 = (0);
var inst_22446 = (0);
var state_22502__$1 = (function (){var statearr_22530 = state_22502;
(statearr_22530[(12)] = inst_22444);

(statearr_22530[(13)] = inst_22445);

(statearr_22530[(14)] = inst_22446);

(statearr_22530[(15)] = inst_22443);

return statearr_22530;
})();
var statearr_22531_22576 = state_22502__$1;
(statearr_22531_22576[(2)] = null);

(statearr_22531_22576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22503 === (14))){
var state_22502__$1 = state_22502;
var statearr_22535_22577 = state_22502__$1;
(statearr_22535_22577[(2)] = null);

(statearr_22535_22577[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22503 === (16))){
var inst_22457 = (state_22502[(10)]);
var inst_22461 = cljs.core.chunk_first.call(null,inst_22457);
var inst_22462 = cljs.core.chunk_rest.call(null,inst_22457);
var inst_22463 = cljs.core.count.call(null,inst_22461);
var inst_22443 = inst_22462;
var inst_22444 = inst_22461;
var inst_22445 = inst_22463;
var inst_22446 = (0);
var state_22502__$1 = (function (){var statearr_22536 = state_22502;
(statearr_22536[(12)] = inst_22444);

(statearr_22536[(13)] = inst_22445);

(statearr_22536[(14)] = inst_22446);

(statearr_22536[(15)] = inst_22443);

return statearr_22536;
})();
var statearr_22537_22578 = state_22502__$1;
(statearr_22537_22578[(2)] = null);

(statearr_22537_22578[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22503 === (10))){
var inst_22444 = (state_22502[(12)]);
var inst_22445 = (state_22502[(13)]);
var inst_22446 = (state_22502[(14)]);
var inst_22443 = (state_22502[(15)]);
var inst_22451 = cljs.core._nth.call(null,inst_22444,inst_22446);
var inst_22452 = cljs.core.async.muxch_STAR_.call(null,inst_22451);
var inst_22453 = cljs.core.async.close_BANG_.call(null,inst_22452);
var inst_22454 = (inst_22446 + (1));
var tmp22532 = inst_22444;
var tmp22533 = inst_22445;
var tmp22534 = inst_22443;
var inst_22443__$1 = tmp22534;
var inst_22444__$1 = tmp22532;
var inst_22445__$1 = tmp22533;
var inst_22446__$1 = inst_22454;
var state_22502__$1 = (function (){var statearr_22538 = state_22502;
(statearr_22538[(17)] = inst_22453);

(statearr_22538[(12)] = inst_22444__$1);

(statearr_22538[(13)] = inst_22445__$1);

(statearr_22538[(14)] = inst_22446__$1);

(statearr_22538[(15)] = inst_22443__$1);

return statearr_22538;
})();
var statearr_22539_22579 = state_22502__$1;
(statearr_22539_22579[(2)] = null);

(statearr_22539_22579[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22503 === (18))){
var inst_22472 = (state_22502[(2)]);
var state_22502__$1 = state_22502;
var statearr_22540_22580 = state_22502__$1;
(statearr_22540_22580[(2)] = inst_22472);

(statearr_22540_22580[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22503 === (8))){
var inst_22445 = (state_22502[(13)]);
var inst_22446 = (state_22502[(14)]);
var inst_22448 = (inst_22446 < inst_22445);
var inst_22449 = inst_22448;
var state_22502__$1 = state_22502;
if(cljs.core.truth_(inst_22449)){
var statearr_22541_22581 = state_22502__$1;
(statearr_22541_22581[(1)] = (10));

} else {
var statearr_22542_22582 = state_22502__$1;
(statearr_22542_22582[(1)] = (11));

}

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
});})(c__20655__auto___22554,mults,ensure_mult,p))
;
return ((function (switch__20543__auto__,c__20655__auto___22554,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20544__auto__ = null;
var cljs$core$async$state_machine__20544__auto____0 = (function (){
var statearr_22546 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22546[(0)] = cljs$core$async$state_machine__20544__auto__);

(statearr_22546[(1)] = (1));

return statearr_22546;
});
var cljs$core$async$state_machine__20544__auto____1 = (function (state_22502){
while(true){
var ret_value__20545__auto__ = (function (){try{while(true){
var result__20546__auto__ = switch__20543__auto__.call(null,state_22502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20546__auto__;
}
break;
}
}catch (e22547){if((e22547 instanceof Object)){
var ex__20547__auto__ = e22547;
var statearr_22548_22583 = state_22502;
(statearr_22548_22583[(5)] = ex__20547__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22584 = state_22502;
state_22502 = G__22584;
continue;
} else {
return ret_value__20545__auto__;
}
break;
}
});
cljs$core$async$state_machine__20544__auto__ = function(state_22502){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20544__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20544__auto____1.call(this,state_22502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20544__auto____0;
cljs$core$async$state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20544__auto____1;
return cljs$core$async$state_machine__20544__auto__;
})()
;})(switch__20543__auto__,c__20655__auto___22554,mults,ensure_mult,p))
})();
var state__20657__auto__ = (function (){var statearr_22549 = f__20656__auto__.call(null);
(statearr_22549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20655__auto___22554);

return statearr_22549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20657__auto__);
});})(c__20655__auto___22554,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args22585 = [];
var len__17913__auto___22588 = arguments.length;
var i__17914__auto___22589 = (0);
while(true){
if((i__17914__auto___22589 < len__17913__auto___22588)){
args22585.push((arguments[i__17914__auto___22589]));

var G__22590 = (i__17914__auto___22589 + (1));
i__17914__auto___22589 = G__22590;
continue;
} else {
}
break;
}

var G__22587 = args22585.length;
switch (G__22587) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22585.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args22592 = [];
var len__17913__auto___22595 = arguments.length;
var i__17914__auto___22596 = (0);
while(true){
if((i__17914__auto___22596 < len__17913__auto___22595)){
args22592.push((arguments[i__17914__auto___22596]));

var G__22597 = (i__17914__auto___22596 + (1));
i__17914__auto___22596 = G__22597;
continue;
} else {
}
break;
}

var G__22594 = args22592.length;
switch (G__22594) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22592.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args22599 = [];
var len__17913__auto___22670 = arguments.length;
var i__17914__auto___22671 = (0);
while(true){
if((i__17914__auto___22671 < len__17913__auto___22670)){
args22599.push((arguments[i__17914__auto___22671]));

var G__22672 = (i__17914__auto___22671 + (1));
i__17914__auto___22671 = G__22672;
continue;
} else {
}
break;
}

var G__22601 = args22599.length;
switch (G__22601) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22599.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20655__auto___22674 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20655__auto___22674,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20656__auto__ = (function (){var switch__20543__auto__ = ((function (c__20655__auto___22674,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22640){
var state_val_22641 = (state_22640[(1)]);
if((state_val_22641 === (7))){
var state_22640__$1 = state_22640;
var statearr_22642_22675 = state_22640__$1;
(statearr_22642_22675[(2)] = null);

(statearr_22642_22675[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22641 === (1))){
var state_22640__$1 = state_22640;
var statearr_22643_22676 = state_22640__$1;
(statearr_22643_22676[(2)] = null);

(statearr_22643_22676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22641 === (4))){
var inst_22604 = (state_22640[(7)]);
var inst_22606 = (inst_22604 < cnt);
var state_22640__$1 = state_22640;
if(cljs.core.truth_(inst_22606)){
var statearr_22644_22677 = state_22640__$1;
(statearr_22644_22677[(1)] = (6));

} else {
var statearr_22645_22678 = state_22640__$1;
(statearr_22645_22678[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22641 === (15))){
var inst_22636 = (state_22640[(2)]);
var state_22640__$1 = state_22640;
var statearr_22646_22679 = state_22640__$1;
(statearr_22646_22679[(2)] = inst_22636);

(statearr_22646_22679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22641 === (13))){
var inst_22629 = cljs.core.async.close_BANG_.call(null,out);
var state_22640__$1 = state_22640;
var statearr_22647_22680 = state_22640__$1;
(statearr_22647_22680[(2)] = inst_22629);

(statearr_22647_22680[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22641 === (6))){
var state_22640__$1 = state_22640;
var statearr_22648_22681 = state_22640__$1;
(statearr_22648_22681[(2)] = null);

(statearr_22648_22681[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22641 === (3))){
var inst_22638 = (state_22640[(2)]);
var state_22640__$1 = state_22640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22640__$1,inst_22638);
} else {
if((state_val_22641 === (12))){
var inst_22626 = (state_22640[(8)]);
var inst_22626__$1 = (state_22640[(2)]);
var inst_22627 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22626__$1);
var state_22640__$1 = (function (){var statearr_22649 = state_22640;
(statearr_22649[(8)] = inst_22626__$1);

return statearr_22649;
})();
if(cljs.core.truth_(inst_22627)){
var statearr_22650_22682 = state_22640__$1;
(statearr_22650_22682[(1)] = (13));

} else {
var statearr_22651_22683 = state_22640__$1;
(statearr_22651_22683[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22641 === (2))){
var inst_22603 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22604 = (0);
var state_22640__$1 = (function (){var statearr_22652 = state_22640;
(statearr_22652[(7)] = inst_22604);

(statearr_22652[(9)] = inst_22603);

return statearr_22652;
})();
var statearr_22653_22684 = state_22640__$1;
(statearr_22653_22684[(2)] = null);

(statearr_22653_22684[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22641 === (11))){
var inst_22604 = (state_22640[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22640,(10),Object,null,(9));
var inst_22613 = chs__$1.call(null,inst_22604);
var inst_22614 = done.call(null,inst_22604);
var inst_22615 = cljs.core.async.take_BANG_.call(null,inst_22613,inst_22614);
var state_22640__$1 = state_22640;
var statearr_22654_22685 = state_22640__$1;
(statearr_22654_22685[(2)] = inst_22615);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22640__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22641 === (9))){
var inst_22604 = (state_22640[(7)]);
var inst_22617 = (state_22640[(2)]);
var inst_22618 = (inst_22604 + (1));
var inst_22604__$1 = inst_22618;
var state_22640__$1 = (function (){var statearr_22655 = state_22640;
(statearr_22655[(10)] = inst_22617);

(statearr_22655[(7)] = inst_22604__$1);

return statearr_22655;
})();
var statearr_22656_22686 = state_22640__$1;
(statearr_22656_22686[(2)] = null);

(statearr_22656_22686[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22641 === (5))){
var inst_22624 = (state_22640[(2)]);
var state_22640__$1 = (function (){var statearr_22657 = state_22640;
(statearr_22657[(11)] = inst_22624);

return statearr_22657;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22640__$1,(12),dchan);
} else {
if((state_val_22641 === (14))){
var inst_22626 = (state_22640[(8)]);
var inst_22631 = cljs.core.apply.call(null,f,inst_22626);
var state_22640__$1 = state_22640;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22640__$1,(16),out,inst_22631);
} else {
if((state_val_22641 === (16))){
var inst_22633 = (state_22640[(2)]);
var state_22640__$1 = (function (){var statearr_22658 = state_22640;
(statearr_22658[(12)] = inst_22633);

return statearr_22658;
})();
var statearr_22659_22687 = state_22640__$1;
(statearr_22659_22687[(2)] = null);

(statearr_22659_22687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22641 === (10))){
var inst_22608 = (state_22640[(2)]);
var inst_22609 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22640__$1 = (function (){var statearr_22660 = state_22640;
(statearr_22660[(13)] = inst_22608);

return statearr_22660;
})();
var statearr_22661_22688 = state_22640__$1;
(statearr_22661_22688[(2)] = inst_22609);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22640__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22641 === (8))){
var inst_22622 = (state_22640[(2)]);
var state_22640__$1 = state_22640;
var statearr_22662_22689 = state_22640__$1;
(statearr_22662_22689[(2)] = inst_22622);

(statearr_22662_22689[(1)] = (5));


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
});})(c__20655__auto___22674,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20543__auto__,c__20655__auto___22674,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20544__auto__ = null;
var cljs$core$async$state_machine__20544__auto____0 = (function (){
var statearr_22666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22666[(0)] = cljs$core$async$state_machine__20544__auto__);

(statearr_22666[(1)] = (1));

return statearr_22666;
});
var cljs$core$async$state_machine__20544__auto____1 = (function (state_22640){
while(true){
var ret_value__20545__auto__ = (function (){try{while(true){
var result__20546__auto__ = switch__20543__auto__.call(null,state_22640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20546__auto__;
}
break;
}
}catch (e22667){if((e22667 instanceof Object)){
var ex__20547__auto__ = e22667;
var statearr_22668_22690 = state_22640;
(statearr_22668_22690[(5)] = ex__20547__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22691 = state_22640;
state_22640 = G__22691;
continue;
} else {
return ret_value__20545__auto__;
}
break;
}
});
cljs$core$async$state_machine__20544__auto__ = function(state_22640){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20544__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20544__auto____1.call(this,state_22640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20544__auto____0;
cljs$core$async$state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20544__auto____1;
return cljs$core$async$state_machine__20544__auto__;
})()
;})(switch__20543__auto__,c__20655__auto___22674,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20657__auto__ = (function (){var statearr_22669 = f__20656__auto__.call(null);
(statearr_22669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20655__auto___22674);

return statearr_22669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20657__auto__);
});})(c__20655__auto___22674,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args22693 = [];
var len__17913__auto___22749 = arguments.length;
var i__17914__auto___22750 = (0);
while(true){
if((i__17914__auto___22750 < len__17913__auto___22749)){
args22693.push((arguments[i__17914__auto___22750]));

var G__22751 = (i__17914__auto___22750 + (1));
i__17914__auto___22750 = G__22751;
continue;
} else {
}
break;
}

var G__22695 = args22693.length;
switch (G__22695) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22693.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20655__auto___22753 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20655__auto___22753,out){
return (function (){
var f__20656__auto__ = (function (){var switch__20543__auto__ = ((function (c__20655__auto___22753,out){
return (function (state_22725){
var state_val_22726 = (state_22725[(1)]);
if((state_val_22726 === (7))){
var inst_22704 = (state_22725[(7)]);
var inst_22705 = (state_22725[(8)]);
var inst_22704__$1 = (state_22725[(2)]);
var inst_22705__$1 = cljs.core.nth.call(null,inst_22704__$1,(0),null);
var inst_22706 = cljs.core.nth.call(null,inst_22704__$1,(1),null);
var inst_22707 = (inst_22705__$1 == null);
var state_22725__$1 = (function (){var statearr_22727 = state_22725;
(statearr_22727[(7)] = inst_22704__$1);

(statearr_22727[(9)] = inst_22706);

(statearr_22727[(8)] = inst_22705__$1);

return statearr_22727;
})();
if(cljs.core.truth_(inst_22707)){
var statearr_22728_22754 = state_22725__$1;
(statearr_22728_22754[(1)] = (8));

} else {
var statearr_22729_22755 = state_22725__$1;
(statearr_22729_22755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22726 === (1))){
var inst_22696 = cljs.core.vec.call(null,chs);
var inst_22697 = inst_22696;
var state_22725__$1 = (function (){var statearr_22730 = state_22725;
(statearr_22730[(10)] = inst_22697);

return statearr_22730;
})();
var statearr_22731_22756 = state_22725__$1;
(statearr_22731_22756[(2)] = null);

(statearr_22731_22756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22726 === (4))){
var inst_22697 = (state_22725[(10)]);
var state_22725__$1 = state_22725;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22725__$1,(7),inst_22697);
} else {
if((state_val_22726 === (6))){
var inst_22721 = (state_22725[(2)]);
var state_22725__$1 = state_22725;
var statearr_22732_22757 = state_22725__$1;
(statearr_22732_22757[(2)] = inst_22721);

(statearr_22732_22757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22726 === (3))){
var inst_22723 = (state_22725[(2)]);
var state_22725__$1 = state_22725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22725__$1,inst_22723);
} else {
if((state_val_22726 === (2))){
var inst_22697 = (state_22725[(10)]);
var inst_22699 = cljs.core.count.call(null,inst_22697);
var inst_22700 = (inst_22699 > (0));
var state_22725__$1 = state_22725;
if(cljs.core.truth_(inst_22700)){
var statearr_22734_22758 = state_22725__$1;
(statearr_22734_22758[(1)] = (4));

} else {
var statearr_22735_22759 = state_22725__$1;
(statearr_22735_22759[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22726 === (11))){
var inst_22697 = (state_22725[(10)]);
var inst_22714 = (state_22725[(2)]);
var tmp22733 = inst_22697;
var inst_22697__$1 = tmp22733;
var state_22725__$1 = (function (){var statearr_22736 = state_22725;
(statearr_22736[(11)] = inst_22714);

(statearr_22736[(10)] = inst_22697__$1);

return statearr_22736;
})();
var statearr_22737_22760 = state_22725__$1;
(statearr_22737_22760[(2)] = null);

(statearr_22737_22760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22726 === (9))){
var inst_22705 = (state_22725[(8)]);
var state_22725__$1 = state_22725;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22725__$1,(11),out,inst_22705);
} else {
if((state_val_22726 === (5))){
var inst_22719 = cljs.core.async.close_BANG_.call(null,out);
var state_22725__$1 = state_22725;
var statearr_22738_22761 = state_22725__$1;
(statearr_22738_22761[(2)] = inst_22719);

(statearr_22738_22761[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22726 === (10))){
var inst_22717 = (state_22725[(2)]);
var state_22725__$1 = state_22725;
var statearr_22739_22762 = state_22725__$1;
(statearr_22739_22762[(2)] = inst_22717);

(statearr_22739_22762[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22726 === (8))){
var inst_22704 = (state_22725[(7)]);
var inst_22706 = (state_22725[(9)]);
var inst_22705 = (state_22725[(8)]);
var inst_22697 = (state_22725[(10)]);
var inst_22709 = (function (){var cs = inst_22697;
var vec__22702 = inst_22704;
var v = inst_22705;
var c = inst_22706;
return ((function (cs,vec__22702,v,c,inst_22704,inst_22706,inst_22705,inst_22697,state_val_22726,c__20655__auto___22753,out){
return (function (p1__22692_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22692_SHARP_);
});
;})(cs,vec__22702,v,c,inst_22704,inst_22706,inst_22705,inst_22697,state_val_22726,c__20655__auto___22753,out))
})();
var inst_22710 = cljs.core.filterv.call(null,inst_22709,inst_22697);
var inst_22697__$1 = inst_22710;
var state_22725__$1 = (function (){var statearr_22740 = state_22725;
(statearr_22740[(10)] = inst_22697__$1);

return statearr_22740;
})();
var statearr_22741_22763 = state_22725__$1;
(statearr_22741_22763[(2)] = null);

(statearr_22741_22763[(1)] = (2));


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
});})(c__20655__auto___22753,out))
;
return ((function (switch__20543__auto__,c__20655__auto___22753,out){
return (function() {
var cljs$core$async$state_machine__20544__auto__ = null;
var cljs$core$async$state_machine__20544__auto____0 = (function (){
var statearr_22745 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22745[(0)] = cljs$core$async$state_machine__20544__auto__);

(statearr_22745[(1)] = (1));

return statearr_22745;
});
var cljs$core$async$state_machine__20544__auto____1 = (function (state_22725){
while(true){
var ret_value__20545__auto__ = (function (){try{while(true){
var result__20546__auto__ = switch__20543__auto__.call(null,state_22725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20546__auto__;
}
break;
}
}catch (e22746){if((e22746 instanceof Object)){
var ex__20547__auto__ = e22746;
var statearr_22747_22764 = state_22725;
(statearr_22747_22764[(5)] = ex__20547__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22765 = state_22725;
state_22725 = G__22765;
continue;
} else {
return ret_value__20545__auto__;
}
break;
}
});
cljs$core$async$state_machine__20544__auto__ = function(state_22725){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20544__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20544__auto____1.call(this,state_22725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20544__auto____0;
cljs$core$async$state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20544__auto____1;
return cljs$core$async$state_machine__20544__auto__;
})()
;})(switch__20543__auto__,c__20655__auto___22753,out))
})();
var state__20657__auto__ = (function (){var statearr_22748 = f__20656__auto__.call(null);
(statearr_22748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20655__auto___22753);

return statearr_22748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20657__auto__);
});})(c__20655__auto___22753,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args22766 = [];
var len__17913__auto___22815 = arguments.length;
var i__17914__auto___22816 = (0);
while(true){
if((i__17914__auto___22816 < len__17913__auto___22815)){
args22766.push((arguments[i__17914__auto___22816]));

var G__22817 = (i__17914__auto___22816 + (1));
i__17914__auto___22816 = G__22817;
continue;
} else {
}
break;
}

var G__22768 = args22766.length;
switch (G__22768) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22766.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20655__auto___22819 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20655__auto___22819,out){
return (function (){
var f__20656__auto__ = (function (){var switch__20543__auto__ = ((function (c__20655__auto___22819,out){
return (function (state_22792){
var state_val_22793 = (state_22792[(1)]);
if((state_val_22793 === (7))){
var inst_22774 = (state_22792[(7)]);
var inst_22774__$1 = (state_22792[(2)]);
var inst_22775 = (inst_22774__$1 == null);
var inst_22776 = cljs.core.not.call(null,inst_22775);
var state_22792__$1 = (function (){var statearr_22794 = state_22792;
(statearr_22794[(7)] = inst_22774__$1);

return statearr_22794;
})();
if(inst_22776){
var statearr_22795_22820 = state_22792__$1;
(statearr_22795_22820[(1)] = (8));

} else {
var statearr_22796_22821 = state_22792__$1;
(statearr_22796_22821[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22793 === (1))){
var inst_22769 = (0);
var state_22792__$1 = (function (){var statearr_22797 = state_22792;
(statearr_22797[(8)] = inst_22769);

return statearr_22797;
})();
var statearr_22798_22822 = state_22792__$1;
(statearr_22798_22822[(2)] = null);

(statearr_22798_22822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22793 === (4))){
var state_22792__$1 = state_22792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22792__$1,(7),ch);
} else {
if((state_val_22793 === (6))){
var inst_22787 = (state_22792[(2)]);
var state_22792__$1 = state_22792;
var statearr_22799_22823 = state_22792__$1;
(statearr_22799_22823[(2)] = inst_22787);

(statearr_22799_22823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22793 === (3))){
var inst_22789 = (state_22792[(2)]);
var inst_22790 = cljs.core.async.close_BANG_.call(null,out);
var state_22792__$1 = (function (){var statearr_22800 = state_22792;
(statearr_22800[(9)] = inst_22789);

return statearr_22800;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22792__$1,inst_22790);
} else {
if((state_val_22793 === (2))){
var inst_22769 = (state_22792[(8)]);
var inst_22771 = (inst_22769 < n);
var state_22792__$1 = state_22792;
if(cljs.core.truth_(inst_22771)){
var statearr_22801_22824 = state_22792__$1;
(statearr_22801_22824[(1)] = (4));

} else {
var statearr_22802_22825 = state_22792__$1;
(statearr_22802_22825[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22793 === (11))){
var inst_22769 = (state_22792[(8)]);
var inst_22779 = (state_22792[(2)]);
var inst_22780 = (inst_22769 + (1));
var inst_22769__$1 = inst_22780;
var state_22792__$1 = (function (){var statearr_22803 = state_22792;
(statearr_22803[(10)] = inst_22779);

(statearr_22803[(8)] = inst_22769__$1);

return statearr_22803;
})();
var statearr_22804_22826 = state_22792__$1;
(statearr_22804_22826[(2)] = null);

(statearr_22804_22826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22793 === (9))){
var state_22792__$1 = state_22792;
var statearr_22805_22827 = state_22792__$1;
(statearr_22805_22827[(2)] = null);

(statearr_22805_22827[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22793 === (5))){
var state_22792__$1 = state_22792;
var statearr_22806_22828 = state_22792__$1;
(statearr_22806_22828[(2)] = null);

(statearr_22806_22828[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22793 === (10))){
var inst_22784 = (state_22792[(2)]);
var state_22792__$1 = state_22792;
var statearr_22807_22829 = state_22792__$1;
(statearr_22807_22829[(2)] = inst_22784);

(statearr_22807_22829[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22793 === (8))){
var inst_22774 = (state_22792[(7)]);
var state_22792__$1 = state_22792;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22792__$1,(11),out,inst_22774);
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
});})(c__20655__auto___22819,out))
;
return ((function (switch__20543__auto__,c__20655__auto___22819,out){
return (function() {
var cljs$core$async$state_machine__20544__auto__ = null;
var cljs$core$async$state_machine__20544__auto____0 = (function (){
var statearr_22811 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22811[(0)] = cljs$core$async$state_machine__20544__auto__);

(statearr_22811[(1)] = (1));

return statearr_22811;
});
var cljs$core$async$state_machine__20544__auto____1 = (function (state_22792){
while(true){
var ret_value__20545__auto__ = (function (){try{while(true){
var result__20546__auto__ = switch__20543__auto__.call(null,state_22792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20546__auto__;
}
break;
}
}catch (e22812){if((e22812 instanceof Object)){
var ex__20547__auto__ = e22812;
var statearr_22813_22830 = state_22792;
(statearr_22813_22830[(5)] = ex__20547__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22831 = state_22792;
state_22792 = G__22831;
continue;
} else {
return ret_value__20545__auto__;
}
break;
}
});
cljs$core$async$state_machine__20544__auto__ = function(state_22792){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20544__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20544__auto____1.call(this,state_22792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20544__auto____0;
cljs$core$async$state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20544__auto____1;
return cljs$core$async$state_machine__20544__auto__;
})()
;})(switch__20543__auto__,c__20655__auto___22819,out))
})();
var state__20657__auto__ = (function (){var statearr_22814 = f__20656__auto__.call(null);
(statearr_22814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20655__auto___22819);

return statearr_22814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20657__auto__);
});})(c__20655__auto___22819,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22839 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22839 = (function (map_LT_,f,ch,meta22840){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22840 = meta22840;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22841,meta22840__$1){
var self__ = this;
var _22841__$1 = this;
return (new cljs.core.async.t_cljs$core$async22839(self__.map_LT_,self__.f,self__.ch,meta22840__$1));
});

cljs.core.async.t_cljs$core$async22839.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22841){
var self__ = this;
var _22841__$1 = this;
return self__.meta22840;
});

cljs.core.async.t_cljs$core$async22839.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22839.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22839.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22839.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22839.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22842 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22842 = (function (map_LT_,f,ch,meta22840,_,fn1,meta22843){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22840 = meta22840;
this._ = _;
this.fn1 = fn1;
this.meta22843 = meta22843;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22844,meta22843__$1){
var self__ = this;
var _22844__$1 = this;
return (new cljs.core.async.t_cljs$core$async22842(self__.map_LT_,self__.f,self__.ch,self__.meta22840,self__._,self__.fn1,meta22843__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22842.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22844){
var self__ = this;
var _22844__$1 = this;
return self__.meta22843;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22842.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22842.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22842.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22842.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22832_SHARP_){
return f1.call(null,(((p1__22832_SHARP_ == null))?null:self__.f.call(null,p1__22832_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22842.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22840","meta22840",-1491173163,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22839","cljs.core.async/t_cljs$core$async22839",-1233969814,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22843","meta22843",-318830088,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22842.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22842.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22842";

cljs.core.async.t_cljs$core$async22842.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17453__auto__,writer__17454__auto__,opt__17455__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"cljs.core.async/t_cljs$core$async22842");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async22842 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22842(map_LT___$1,f__$1,ch__$1,meta22840__$1,___$2,fn1__$1,meta22843){
return (new cljs.core.async.t_cljs$core$async22842(map_LT___$1,f__$1,ch__$1,meta22840__$1,___$2,fn1__$1,meta22843));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22842(self__.map_LT_,self__.f,self__.ch,self__.meta22840,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16843__auto__ = ret;
if(cljs.core.truth_(and__16843__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16843__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async22839.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22839.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22839.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22840","meta22840",-1491173163,null)], null);
});

cljs.core.async.t_cljs$core$async22839.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22839.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22839";

cljs.core.async.t_cljs$core$async22839.cljs$lang$ctorPrWriter = (function (this__17453__auto__,writer__17454__auto__,opt__17455__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"cljs.core.async/t_cljs$core$async22839");
});

cljs.core.async.__GT_t_cljs$core$async22839 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22839(map_LT___$1,f__$1,ch__$1,meta22840){
return (new cljs.core.async.t_cljs$core$async22839(map_LT___$1,f__$1,ch__$1,meta22840));
});

}

return (new cljs.core.async.t_cljs$core$async22839(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22848 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22848 = (function (map_GT_,f,ch,meta22849){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta22849 = meta22849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22850,meta22849__$1){
var self__ = this;
var _22850__$1 = this;
return (new cljs.core.async.t_cljs$core$async22848(self__.map_GT_,self__.f,self__.ch,meta22849__$1));
});

cljs.core.async.t_cljs$core$async22848.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22850){
var self__ = this;
var _22850__$1 = this;
return self__.meta22849;
});

cljs.core.async.t_cljs$core$async22848.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22848.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22848.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22848.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22848.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22848.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22848.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22849","meta22849",-262897001,null)], null);
});

cljs.core.async.t_cljs$core$async22848.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22848.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22848";

cljs.core.async.t_cljs$core$async22848.cljs$lang$ctorPrWriter = (function (this__17453__auto__,writer__17454__auto__,opt__17455__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"cljs.core.async/t_cljs$core$async22848");
});

cljs.core.async.__GT_t_cljs$core$async22848 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22848(map_GT___$1,f__$1,ch__$1,meta22849){
return (new cljs.core.async.t_cljs$core$async22848(map_GT___$1,f__$1,ch__$1,meta22849));
});

}

return (new cljs.core.async.t_cljs$core$async22848(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22854 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22854 = (function (filter_GT_,p,ch,meta22855){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta22855 = meta22855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22856,meta22855__$1){
var self__ = this;
var _22856__$1 = this;
return (new cljs.core.async.t_cljs$core$async22854(self__.filter_GT_,self__.p,self__.ch,meta22855__$1));
});

cljs.core.async.t_cljs$core$async22854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22856){
var self__ = this;
var _22856__$1 = this;
return self__.meta22855;
});

cljs.core.async.t_cljs$core$async22854.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22854.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22854.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22854.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22854.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22854.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22854.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22854.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22855","meta22855",-1666025445,null)], null);
});

cljs.core.async.t_cljs$core$async22854.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22854.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22854";

cljs.core.async.t_cljs$core$async22854.cljs$lang$ctorPrWriter = (function (this__17453__auto__,writer__17454__auto__,opt__17455__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"cljs.core.async/t_cljs$core$async22854");
});

cljs.core.async.__GT_t_cljs$core$async22854 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22854(filter_GT___$1,p__$1,ch__$1,meta22855){
return (new cljs.core.async.t_cljs$core$async22854(filter_GT___$1,p__$1,ch__$1,meta22855));
});

}

return (new cljs.core.async.t_cljs$core$async22854(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args22857 = [];
var len__17913__auto___22901 = arguments.length;
var i__17914__auto___22902 = (0);
while(true){
if((i__17914__auto___22902 < len__17913__auto___22901)){
args22857.push((arguments[i__17914__auto___22902]));

var G__22903 = (i__17914__auto___22902 + (1));
i__17914__auto___22902 = G__22903;
continue;
} else {
}
break;
}

var G__22859 = args22857.length;
switch (G__22859) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22857.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20655__auto___22905 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20655__auto___22905,out){
return (function (){
var f__20656__auto__ = (function (){var switch__20543__auto__ = ((function (c__20655__auto___22905,out){
return (function (state_22880){
var state_val_22881 = (state_22880[(1)]);
if((state_val_22881 === (7))){
var inst_22876 = (state_22880[(2)]);
var state_22880__$1 = state_22880;
var statearr_22882_22906 = state_22880__$1;
(statearr_22882_22906[(2)] = inst_22876);

(statearr_22882_22906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22881 === (1))){
var state_22880__$1 = state_22880;
var statearr_22883_22907 = state_22880__$1;
(statearr_22883_22907[(2)] = null);

(statearr_22883_22907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22881 === (4))){
var inst_22862 = (state_22880[(7)]);
var inst_22862__$1 = (state_22880[(2)]);
var inst_22863 = (inst_22862__$1 == null);
var state_22880__$1 = (function (){var statearr_22884 = state_22880;
(statearr_22884[(7)] = inst_22862__$1);

return statearr_22884;
})();
if(cljs.core.truth_(inst_22863)){
var statearr_22885_22908 = state_22880__$1;
(statearr_22885_22908[(1)] = (5));

} else {
var statearr_22886_22909 = state_22880__$1;
(statearr_22886_22909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22881 === (6))){
var inst_22862 = (state_22880[(7)]);
var inst_22867 = p.call(null,inst_22862);
var state_22880__$1 = state_22880;
if(cljs.core.truth_(inst_22867)){
var statearr_22887_22910 = state_22880__$1;
(statearr_22887_22910[(1)] = (8));

} else {
var statearr_22888_22911 = state_22880__$1;
(statearr_22888_22911[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22881 === (3))){
var inst_22878 = (state_22880[(2)]);
var state_22880__$1 = state_22880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22880__$1,inst_22878);
} else {
if((state_val_22881 === (2))){
var state_22880__$1 = state_22880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22880__$1,(4),ch);
} else {
if((state_val_22881 === (11))){
var inst_22870 = (state_22880[(2)]);
var state_22880__$1 = state_22880;
var statearr_22889_22912 = state_22880__$1;
(statearr_22889_22912[(2)] = inst_22870);

(statearr_22889_22912[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22881 === (9))){
var state_22880__$1 = state_22880;
var statearr_22890_22913 = state_22880__$1;
(statearr_22890_22913[(2)] = null);

(statearr_22890_22913[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22881 === (5))){
var inst_22865 = cljs.core.async.close_BANG_.call(null,out);
var state_22880__$1 = state_22880;
var statearr_22891_22914 = state_22880__$1;
(statearr_22891_22914[(2)] = inst_22865);

(statearr_22891_22914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22881 === (10))){
var inst_22873 = (state_22880[(2)]);
var state_22880__$1 = (function (){var statearr_22892 = state_22880;
(statearr_22892[(8)] = inst_22873);

return statearr_22892;
})();
var statearr_22893_22915 = state_22880__$1;
(statearr_22893_22915[(2)] = null);

(statearr_22893_22915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22881 === (8))){
var inst_22862 = (state_22880[(7)]);
var state_22880__$1 = state_22880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22880__$1,(11),out,inst_22862);
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
});})(c__20655__auto___22905,out))
;
return ((function (switch__20543__auto__,c__20655__auto___22905,out){
return (function() {
var cljs$core$async$state_machine__20544__auto__ = null;
var cljs$core$async$state_machine__20544__auto____0 = (function (){
var statearr_22897 = [null,null,null,null,null,null,null,null,null];
(statearr_22897[(0)] = cljs$core$async$state_machine__20544__auto__);

(statearr_22897[(1)] = (1));

return statearr_22897;
});
var cljs$core$async$state_machine__20544__auto____1 = (function (state_22880){
while(true){
var ret_value__20545__auto__ = (function (){try{while(true){
var result__20546__auto__ = switch__20543__auto__.call(null,state_22880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20546__auto__;
}
break;
}
}catch (e22898){if((e22898 instanceof Object)){
var ex__20547__auto__ = e22898;
var statearr_22899_22916 = state_22880;
(statearr_22899_22916[(5)] = ex__20547__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22917 = state_22880;
state_22880 = G__22917;
continue;
} else {
return ret_value__20545__auto__;
}
break;
}
});
cljs$core$async$state_machine__20544__auto__ = function(state_22880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20544__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20544__auto____1.call(this,state_22880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20544__auto____0;
cljs$core$async$state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20544__auto____1;
return cljs$core$async$state_machine__20544__auto__;
})()
;})(switch__20543__auto__,c__20655__auto___22905,out))
})();
var state__20657__auto__ = (function (){var statearr_22900 = f__20656__auto__.call(null);
(statearr_22900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20655__auto___22905);

return statearr_22900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20657__auto__);
});})(c__20655__auto___22905,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args22918 = [];
var len__17913__auto___22921 = arguments.length;
var i__17914__auto___22922 = (0);
while(true){
if((i__17914__auto___22922 < len__17913__auto___22921)){
args22918.push((arguments[i__17914__auto___22922]));

var G__22923 = (i__17914__auto___22922 + (1));
i__17914__auto___22922 = G__22923;
continue;
} else {
}
break;
}

var G__22920 = args22918.length;
switch (G__22920) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22918.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20655__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20655__auto__){
return (function (){
var f__20656__auto__ = (function (){var switch__20543__auto__ = ((function (c__20655__auto__){
return (function (state_23090){
var state_val_23091 = (state_23090[(1)]);
if((state_val_23091 === (7))){
var inst_23086 = (state_23090[(2)]);
var state_23090__$1 = state_23090;
var statearr_23092_23133 = state_23090__$1;
(statearr_23092_23133[(2)] = inst_23086);

(statearr_23092_23133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23091 === (20))){
var inst_23056 = (state_23090[(7)]);
var inst_23067 = (state_23090[(2)]);
var inst_23068 = cljs.core.next.call(null,inst_23056);
var inst_23042 = inst_23068;
var inst_23043 = null;
var inst_23044 = (0);
var inst_23045 = (0);
var state_23090__$1 = (function (){var statearr_23093 = state_23090;
(statearr_23093[(8)] = inst_23045);

(statearr_23093[(9)] = inst_23044);

(statearr_23093[(10)] = inst_23042);

(statearr_23093[(11)] = inst_23067);

(statearr_23093[(12)] = inst_23043);

return statearr_23093;
})();
var statearr_23094_23134 = state_23090__$1;
(statearr_23094_23134[(2)] = null);

(statearr_23094_23134[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23091 === (1))){
var state_23090__$1 = state_23090;
var statearr_23095_23135 = state_23090__$1;
(statearr_23095_23135[(2)] = null);

(statearr_23095_23135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23091 === (4))){
var inst_23031 = (state_23090[(13)]);
var inst_23031__$1 = (state_23090[(2)]);
var inst_23032 = (inst_23031__$1 == null);
var state_23090__$1 = (function (){var statearr_23096 = state_23090;
(statearr_23096[(13)] = inst_23031__$1);

return statearr_23096;
})();
if(cljs.core.truth_(inst_23032)){
var statearr_23097_23136 = state_23090__$1;
(statearr_23097_23136[(1)] = (5));

} else {
var statearr_23098_23137 = state_23090__$1;
(statearr_23098_23137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23091 === (15))){
var state_23090__$1 = state_23090;
var statearr_23102_23138 = state_23090__$1;
(statearr_23102_23138[(2)] = null);

(statearr_23102_23138[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23091 === (21))){
var state_23090__$1 = state_23090;
var statearr_23103_23139 = state_23090__$1;
(statearr_23103_23139[(2)] = null);

(statearr_23103_23139[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23091 === (13))){
var inst_23045 = (state_23090[(8)]);
var inst_23044 = (state_23090[(9)]);
var inst_23042 = (state_23090[(10)]);
var inst_23043 = (state_23090[(12)]);
var inst_23052 = (state_23090[(2)]);
var inst_23053 = (inst_23045 + (1));
var tmp23099 = inst_23044;
var tmp23100 = inst_23042;
var tmp23101 = inst_23043;
var inst_23042__$1 = tmp23100;
var inst_23043__$1 = tmp23101;
var inst_23044__$1 = tmp23099;
var inst_23045__$1 = inst_23053;
var state_23090__$1 = (function (){var statearr_23104 = state_23090;
(statearr_23104[(8)] = inst_23045__$1);

(statearr_23104[(9)] = inst_23044__$1);

(statearr_23104[(10)] = inst_23042__$1);

(statearr_23104[(14)] = inst_23052);

(statearr_23104[(12)] = inst_23043__$1);

return statearr_23104;
})();
var statearr_23105_23140 = state_23090__$1;
(statearr_23105_23140[(2)] = null);

(statearr_23105_23140[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23091 === (22))){
var state_23090__$1 = state_23090;
var statearr_23106_23141 = state_23090__$1;
(statearr_23106_23141[(2)] = null);

(statearr_23106_23141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23091 === (6))){
var inst_23031 = (state_23090[(13)]);
var inst_23040 = f.call(null,inst_23031);
var inst_23041 = cljs.core.seq.call(null,inst_23040);
var inst_23042 = inst_23041;
var inst_23043 = null;
var inst_23044 = (0);
var inst_23045 = (0);
var state_23090__$1 = (function (){var statearr_23107 = state_23090;
(statearr_23107[(8)] = inst_23045);

(statearr_23107[(9)] = inst_23044);

(statearr_23107[(10)] = inst_23042);

(statearr_23107[(12)] = inst_23043);

return statearr_23107;
})();
var statearr_23108_23142 = state_23090__$1;
(statearr_23108_23142[(2)] = null);

(statearr_23108_23142[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23091 === (17))){
var inst_23056 = (state_23090[(7)]);
var inst_23060 = cljs.core.chunk_first.call(null,inst_23056);
var inst_23061 = cljs.core.chunk_rest.call(null,inst_23056);
var inst_23062 = cljs.core.count.call(null,inst_23060);
var inst_23042 = inst_23061;
var inst_23043 = inst_23060;
var inst_23044 = inst_23062;
var inst_23045 = (0);
var state_23090__$1 = (function (){var statearr_23109 = state_23090;
(statearr_23109[(8)] = inst_23045);

(statearr_23109[(9)] = inst_23044);

(statearr_23109[(10)] = inst_23042);

(statearr_23109[(12)] = inst_23043);

return statearr_23109;
})();
var statearr_23110_23143 = state_23090__$1;
(statearr_23110_23143[(2)] = null);

(statearr_23110_23143[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23091 === (3))){
var inst_23088 = (state_23090[(2)]);
var state_23090__$1 = state_23090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23090__$1,inst_23088);
} else {
if((state_val_23091 === (12))){
var inst_23076 = (state_23090[(2)]);
var state_23090__$1 = state_23090;
var statearr_23111_23144 = state_23090__$1;
(statearr_23111_23144[(2)] = inst_23076);

(statearr_23111_23144[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23091 === (2))){
var state_23090__$1 = state_23090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23090__$1,(4),in$);
} else {
if((state_val_23091 === (23))){
var inst_23084 = (state_23090[(2)]);
var state_23090__$1 = state_23090;
var statearr_23112_23145 = state_23090__$1;
(statearr_23112_23145[(2)] = inst_23084);

(statearr_23112_23145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23091 === (19))){
var inst_23071 = (state_23090[(2)]);
var state_23090__$1 = state_23090;
var statearr_23113_23146 = state_23090__$1;
(statearr_23113_23146[(2)] = inst_23071);

(statearr_23113_23146[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23091 === (11))){
var inst_23056 = (state_23090[(7)]);
var inst_23042 = (state_23090[(10)]);
var inst_23056__$1 = cljs.core.seq.call(null,inst_23042);
var state_23090__$1 = (function (){var statearr_23114 = state_23090;
(statearr_23114[(7)] = inst_23056__$1);

return statearr_23114;
})();
if(inst_23056__$1){
var statearr_23115_23147 = state_23090__$1;
(statearr_23115_23147[(1)] = (14));

} else {
var statearr_23116_23148 = state_23090__$1;
(statearr_23116_23148[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23091 === (9))){
var inst_23078 = (state_23090[(2)]);
var inst_23079 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23090__$1 = (function (){var statearr_23117 = state_23090;
(statearr_23117[(15)] = inst_23078);

return statearr_23117;
})();
if(cljs.core.truth_(inst_23079)){
var statearr_23118_23149 = state_23090__$1;
(statearr_23118_23149[(1)] = (21));

} else {
var statearr_23119_23150 = state_23090__$1;
(statearr_23119_23150[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23091 === (5))){
var inst_23034 = cljs.core.async.close_BANG_.call(null,out);
var state_23090__$1 = state_23090;
var statearr_23120_23151 = state_23090__$1;
(statearr_23120_23151[(2)] = inst_23034);

(statearr_23120_23151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23091 === (14))){
var inst_23056 = (state_23090[(7)]);
var inst_23058 = cljs.core.chunked_seq_QMARK_.call(null,inst_23056);
var state_23090__$1 = state_23090;
if(inst_23058){
var statearr_23121_23152 = state_23090__$1;
(statearr_23121_23152[(1)] = (17));

} else {
var statearr_23122_23153 = state_23090__$1;
(statearr_23122_23153[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23091 === (16))){
var inst_23074 = (state_23090[(2)]);
var state_23090__$1 = state_23090;
var statearr_23123_23154 = state_23090__$1;
(statearr_23123_23154[(2)] = inst_23074);

(statearr_23123_23154[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23091 === (10))){
var inst_23045 = (state_23090[(8)]);
var inst_23043 = (state_23090[(12)]);
var inst_23050 = cljs.core._nth.call(null,inst_23043,inst_23045);
var state_23090__$1 = state_23090;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23090__$1,(13),out,inst_23050);
} else {
if((state_val_23091 === (18))){
var inst_23056 = (state_23090[(7)]);
var inst_23065 = cljs.core.first.call(null,inst_23056);
var state_23090__$1 = state_23090;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23090__$1,(20),out,inst_23065);
} else {
if((state_val_23091 === (8))){
var inst_23045 = (state_23090[(8)]);
var inst_23044 = (state_23090[(9)]);
var inst_23047 = (inst_23045 < inst_23044);
var inst_23048 = inst_23047;
var state_23090__$1 = state_23090;
if(cljs.core.truth_(inst_23048)){
var statearr_23124_23155 = state_23090__$1;
(statearr_23124_23155[(1)] = (10));

} else {
var statearr_23125_23156 = state_23090__$1;
(statearr_23125_23156[(1)] = (11));

}

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
});})(c__20655__auto__))
;
return ((function (switch__20543__auto__,c__20655__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20544__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20544__auto____0 = (function (){
var statearr_23129 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23129[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20544__auto__);

(statearr_23129[(1)] = (1));

return statearr_23129;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20544__auto____1 = (function (state_23090){
while(true){
var ret_value__20545__auto__ = (function (){try{while(true){
var result__20546__auto__ = switch__20543__auto__.call(null,state_23090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20546__auto__;
}
break;
}
}catch (e23130){if((e23130 instanceof Object)){
var ex__20547__auto__ = e23130;
var statearr_23131_23157 = state_23090;
(statearr_23131_23157[(5)] = ex__20547__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23158 = state_23090;
state_23090 = G__23158;
continue;
} else {
return ret_value__20545__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20544__auto__ = function(state_23090){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20544__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20544__auto____1.call(this,state_23090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20544__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20544__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20544__auto__;
})()
;})(switch__20543__auto__,c__20655__auto__))
})();
var state__20657__auto__ = (function (){var statearr_23132 = f__20656__auto__.call(null);
(statearr_23132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20655__auto__);

return statearr_23132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20657__auto__);
});})(c__20655__auto__))
);

return c__20655__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args23159 = [];
var len__17913__auto___23162 = arguments.length;
var i__17914__auto___23163 = (0);
while(true){
if((i__17914__auto___23163 < len__17913__auto___23162)){
args23159.push((arguments[i__17914__auto___23163]));

var G__23164 = (i__17914__auto___23163 + (1));
i__17914__auto___23163 = G__23164;
continue;
} else {
}
break;
}

var G__23161 = args23159.length;
switch (G__23161) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23159.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args23166 = [];
var len__17913__auto___23169 = arguments.length;
var i__17914__auto___23170 = (0);
while(true){
if((i__17914__auto___23170 < len__17913__auto___23169)){
args23166.push((arguments[i__17914__auto___23170]));

var G__23171 = (i__17914__auto___23170 + (1));
i__17914__auto___23170 = G__23171;
continue;
} else {
}
break;
}

var G__23168 = args23166.length;
switch (G__23168) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23166.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args23173 = [];
var len__17913__auto___23224 = arguments.length;
var i__17914__auto___23225 = (0);
while(true){
if((i__17914__auto___23225 < len__17913__auto___23224)){
args23173.push((arguments[i__17914__auto___23225]));

var G__23226 = (i__17914__auto___23225 + (1));
i__17914__auto___23225 = G__23226;
continue;
} else {
}
break;
}

var G__23175 = args23173.length;
switch (G__23175) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23173.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20655__auto___23228 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20655__auto___23228,out){
return (function (){
var f__20656__auto__ = (function (){var switch__20543__auto__ = ((function (c__20655__auto___23228,out){
return (function (state_23199){
var state_val_23200 = (state_23199[(1)]);
if((state_val_23200 === (7))){
var inst_23194 = (state_23199[(2)]);
var state_23199__$1 = state_23199;
var statearr_23201_23229 = state_23199__$1;
(statearr_23201_23229[(2)] = inst_23194);

(statearr_23201_23229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23200 === (1))){
var inst_23176 = null;
var state_23199__$1 = (function (){var statearr_23202 = state_23199;
(statearr_23202[(7)] = inst_23176);

return statearr_23202;
})();
var statearr_23203_23230 = state_23199__$1;
(statearr_23203_23230[(2)] = null);

(statearr_23203_23230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23200 === (4))){
var inst_23179 = (state_23199[(8)]);
var inst_23179__$1 = (state_23199[(2)]);
var inst_23180 = (inst_23179__$1 == null);
var inst_23181 = cljs.core.not.call(null,inst_23180);
var state_23199__$1 = (function (){var statearr_23204 = state_23199;
(statearr_23204[(8)] = inst_23179__$1);

return statearr_23204;
})();
if(inst_23181){
var statearr_23205_23231 = state_23199__$1;
(statearr_23205_23231[(1)] = (5));

} else {
var statearr_23206_23232 = state_23199__$1;
(statearr_23206_23232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23200 === (6))){
var state_23199__$1 = state_23199;
var statearr_23207_23233 = state_23199__$1;
(statearr_23207_23233[(2)] = null);

(statearr_23207_23233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23200 === (3))){
var inst_23196 = (state_23199[(2)]);
var inst_23197 = cljs.core.async.close_BANG_.call(null,out);
var state_23199__$1 = (function (){var statearr_23208 = state_23199;
(statearr_23208[(9)] = inst_23196);

return statearr_23208;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23199__$1,inst_23197);
} else {
if((state_val_23200 === (2))){
var state_23199__$1 = state_23199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23199__$1,(4),ch);
} else {
if((state_val_23200 === (11))){
var inst_23179 = (state_23199[(8)]);
var inst_23188 = (state_23199[(2)]);
var inst_23176 = inst_23179;
var state_23199__$1 = (function (){var statearr_23209 = state_23199;
(statearr_23209[(7)] = inst_23176);

(statearr_23209[(10)] = inst_23188);

return statearr_23209;
})();
var statearr_23210_23234 = state_23199__$1;
(statearr_23210_23234[(2)] = null);

(statearr_23210_23234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23200 === (9))){
var inst_23179 = (state_23199[(8)]);
var state_23199__$1 = state_23199;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23199__$1,(11),out,inst_23179);
} else {
if((state_val_23200 === (5))){
var inst_23176 = (state_23199[(7)]);
var inst_23179 = (state_23199[(8)]);
var inst_23183 = cljs.core._EQ_.call(null,inst_23179,inst_23176);
var state_23199__$1 = state_23199;
if(inst_23183){
var statearr_23212_23235 = state_23199__$1;
(statearr_23212_23235[(1)] = (8));

} else {
var statearr_23213_23236 = state_23199__$1;
(statearr_23213_23236[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23200 === (10))){
var inst_23191 = (state_23199[(2)]);
var state_23199__$1 = state_23199;
var statearr_23214_23237 = state_23199__$1;
(statearr_23214_23237[(2)] = inst_23191);

(statearr_23214_23237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23200 === (8))){
var inst_23176 = (state_23199[(7)]);
var tmp23211 = inst_23176;
var inst_23176__$1 = tmp23211;
var state_23199__$1 = (function (){var statearr_23215 = state_23199;
(statearr_23215[(7)] = inst_23176__$1);

return statearr_23215;
})();
var statearr_23216_23238 = state_23199__$1;
(statearr_23216_23238[(2)] = null);

(statearr_23216_23238[(1)] = (2));


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
});})(c__20655__auto___23228,out))
;
return ((function (switch__20543__auto__,c__20655__auto___23228,out){
return (function() {
var cljs$core$async$state_machine__20544__auto__ = null;
var cljs$core$async$state_machine__20544__auto____0 = (function (){
var statearr_23220 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23220[(0)] = cljs$core$async$state_machine__20544__auto__);

(statearr_23220[(1)] = (1));

return statearr_23220;
});
var cljs$core$async$state_machine__20544__auto____1 = (function (state_23199){
while(true){
var ret_value__20545__auto__ = (function (){try{while(true){
var result__20546__auto__ = switch__20543__auto__.call(null,state_23199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20546__auto__;
}
break;
}
}catch (e23221){if((e23221 instanceof Object)){
var ex__20547__auto__ = e23221;
var statearr_23222_23239 = state_23199;
(statearr_23222_23239[(5)] = ex__20547__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23240 = state_23199;
state_23199 = G__23240;
continue;
} else {
return ret_value__20545__auto__;
}
break;
}
});
cljs$core$async$state_machine__20544__auto__ = function(state_23199){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20544__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20544__auto____1.call(this,state_23199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20544__auto____0;
cljs$core$async$state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20544__auto____1;
return cljs$core$async$state_machine__20544__auto__;
})()
;})(switch__20543__auto__,c__20655__auto___23228,out))
})();
var state__20657__auto__ = (function (){var statearr_23223 = f__20656__auto__.call(null);
(statearr_23223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20655__auto___23228);

return statearr_23223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20657__auto__);
});})(c__20655__auto___23228,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args23241 = [];
var len__17913__auto___23311 = arguments.length;
var i__17914__auto___23312 = (0);
while(true){
if((i__17914__auto___23312 < len__17913__auto___23311)){
args23241.push((arguments[i__17914__auto___23312]));

var G__23313 = (i__17914__auto___23312 + (1));
i__17914__auto___23312 = G__23313;
continue;
} else {
}
break;
}

var G__23243 = args23241.length;
switch (G__23243) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23241.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20655__auto___23315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20655__auto___23315,out){
return (function (){
var f__20656__auto__ = (function (){var switch__20543__auto__ = ((function (c__20655__auto___23315,out){
return (function (state_23281){
var state_val_23282 = (state_23281[(1)]);
if((state_val_23282 === (7))){
var inst_23277 = (state_23281[(2)]);
var state_23281__$1 = state_23281;
var statearr_23283_23316 = state_23281__$1;
(statearr_23283_23316[(2)] = inst_23277);

(statearr_23283_23316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23282 === (1))){
var inst_23244 = (new Array(n));
var inst_23245 = inst_23244;
var inst_23246 = (0);
var state_23281__$1 = (function (){var statearr_23284 = state_23281;
(statearr_23284[(7)] = inst_23246);

(statearr_23284[(8)] = inst_23245);

return statearr_23284;
})();
var statearr_23285_23317 = state_23281__$1;
(statearr_23285_23317[(2)] = null);

(statearr_23285_23317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23282 === (4))){
var inst_23249 = (state_23281[(9)]);
var inst_23249__$1 = (state_23281[(2)]);
var inst_23250 = (inst_23249__$1 == null);
var inst_23251 = cljs.core.not.call(null,inst_23250);
var state_23281__$1 = (function (){var statearr_23286 = state_23281;
(statearr_23286[(9)] = inst_23249__$1);

return statearr_23286;
})();
if(inst_23251){
var statearr_23287_23318 = state_23281__$1;
(statearr_23287_23318[(1)] = (5));

} else {
var statearr_23288_23319 = state_23281__$1;
(statearr_23288_23319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23282 === (15))){
var inst_23271 = (state_23281[(2)]);
var state_23281__$1 = state_23281;
var statearr_23289_23320 = state_23281__$1;
(statearr_23289_23320[(2)] = inst_23271);

(statearr_23289_23320[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23282 === (13))){
var state_23281__$1 = state_23281;
var statearr_23290_23321 = state_23281__$1;
(statearr_23290_23321[(2)] = null);

(statearr_23290_23321[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23282 === (6))){
var inst_23246 = (state_23281[(7)]);
var inst_23267 = (inst_23246 > (0));
var state_23281__$1 = state_23281;
if(cljs.core.truth_(inst_23267)){
var statearr_23291_23322 = state_23281__$1;
(statearr_23291_23322[(1)] = (12));

} else {
var statearr_23292_23323 = state_23281__$1;
(statearr_23292_23323[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23282 === (3))){
var inst_23279 = (state_23281[(2)]);
var state_23281__$1 = state_23281;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23281__$1,inst_23279);
} else {
if((state_val_23282 === (12))){
var inst_23245 = (state_23281[(8)]);
var inst_23269 = cljs.core.vec.call(null,inst_23245);
var state_23281__$1 = state_23281;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23281__$1,(15),out,inst_23269);
} else {
if((state_val_23282 === (2))){
var state_23281__$1 = state_23281;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23281__$1,(4),ch);
} else {
if((state_val_23282 === (11))){
var inst_23261 = (state_23281[(2)]);
var inst_23262 = (new Array(n));
var inst_23245 = inst_23262;
var inst_23246 = (0);
var state_23281__$1 = (function (){var statearr_23293 = state_23281;
(statearr_23293[(7)] = inst_23246);

(statearr_23293[(8)] = inst_23245);

(statearr_23293[(10)] = inst_23261);

return statearr_23293;
})();
var statearr_23294_23324 = state_23281__$1;
(statearr_23294_23324[(2)] = null);

(statearr_23294_23324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23282 === (9))){
var inst_23245 = (state_23281[(8)]);
var inst_23259 = cljs.core.vec.call(null,inst_23245);
var state_23281__$1 = state_23281;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23281__$1,(11),out,inst_23259);
} else {
if((state_val_23282 === (5))){
var inst_23246 = (state_23281[(7)]);
var inst_23245 = (state_23281[(8)]);
var inst_23254 = (state_23281[(11)]);
var inst_23249 = (state_23281[(9)]);
var inst_23253 = (inst_23245[inst_23246] = inst_23249);
var inst_23254__$1 = (inst_23246 + (1));
var inst_23255 = (inst_23254__$1 < n);
var state_23281__$1 = (function (){var statearr_23295 = state_23281;
(statearr_23295[(11)] = inst_23254__$1);

(statearr_23295[(12)] = inst_23253);

return statearr_23295;
})();
if(cljs.core.truth_(inst_23255)){
var statearr_23296_23325 = state_23281__$1;
(statearr_23296_23325[(1)] = (8));

} else {
var statearr_23297_23326 = state_23281__$1;
(statearr_23297_23326[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23282 === (14))){
var inst_23274 = (state_23281[(2)]);
var inst_23275 = cljs.core.async.close_BANG_.call(null,out);
var state_23281__$1 = (function (){var statearr_23299 = state_23281;
(statearr_23299[(13)] = inst_23274);

return statearr_23299;
})();
var statearr_23300_23327 = state_23281__$1;
(statearr_23300_23327[(2)] = inst_23275);

(statearr_23300_23327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23282 === (10))){
var inst_23265 = (state_23281[(2)]);
var state_23281__$1 = state_23281;
var statearr_23301_23328 = state_23281__$1;
(statearr_23301_23328[(2)] = inst_23265);

(statearr_23301_23328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23282 === (8))){
var inst_23245 = (state_23281[(8)]);
var inst_23254 = (state_23281[(11)]);
var tmp23298 = inst_23245;
var inst_23245__$1 = tmp23298;
var inst_23246 = inst_23254;
var state_23281__$1 = (function (){var statearr_23302 = state_23281;
(statearr_23302[(7)] = inst_23246);

(statearr_23302[(8)] = inst_23245__$1);

return statearr_23302;
})();
var statearr_23303_23329 = state_23281__$1;
(statearr_23303_23329[(2)] = null);

(statearr_23303_23329[(1)] = (2));


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
});})(c__20655__auto___23315,out))
;
return ((function (switch__20543__auto__,c__20655__auto___23315,out){
return (function() {
var cljs$core$async$state_machine__20544__auto__ = null;
var cljs$core$async$state_machine__20544__auto____0 = (function (){
var statearr_23307 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23307[(0)] = cljs$core$async$state_machine__20544__auto__);

(statearr_23307[(1)] = (1));

return statearr_23307;
});
var cljs$core$async$state_machine__20544__auto____1 = (function (state_23281){
while(true){
var ret_value__20545__auto__ = (function (){try{while(true){
var result__20546__auto__ = switch__20543__auto__.call(null,state_23281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20546__auto__;
}
break;
}
}catch (e23308){if((e23308 instanceof Object)){
var ex__20547__auto__ = e23308;
var statearr_23309_23330 = state_23281;
(statearr_23309_23330[(5)] = ex__20547__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23331 = state_23281;
state_23281 = G__23331;
continue;
} else {
return ret_value__20545__auto__;
}
break;
}
});
cljs$core$async$state_machine__20544__auto__ = function(state_23281){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20544__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20544__auto____1.call(this,state_23281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20544__auto____0;
cljs$core$async$state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20544__auto____1;
return cljs$core$async$state_machine__20544__auto__;
})()
;})(switch__20543__auto__,c__20655__auto___23315,out))
})();
var state__20657__auto__ = (function (){var statearr_23310 = f__20656__auto__.call(null);
(statearr_23310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20655__auto___23315);

return statearr_23310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20657__auto__);
});})(c__20655__auto___23315,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args23332 = [];
var len__17913__auto___23406 = arguments.length;
var i__17914__auto___23407 = (0);
while(true){
if((i__17914__auto___23407 < len__17913__auto___23406)){
args23332.push((arguments[i__17914__auto___23407]));

var G__23408 = (i__17914__auto___23407 + (1));
i__17914__auto___23407 = G__23408;
continue;
} else {
}
break;
}

var G__23334 = args23332.length;
switch (G__23334) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23332.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20655__auto___23410 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20655__auto___23410,out){
return (function (){
var f__20656__auto__ = (function (){var switch__20543__auto__ = ((function (c__20655__auto___23410,out){
return (function (state_23376){
var state_val_23377 = (state_23376[(1)]);
if((state_val_23377 === (7))){
var inst_23372 = (state_23376[(2)]);
var state_23376__$1 = state_23376;
var statearr_23378_23411 = state_23376__$1;
(statearr_23378_23411[(2)] = inst_23372);

(statearr_23378_23411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (1))){
var inst_23335 = [];
var inst_23336 = inst_23335;
var inst_23337 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23376__$1 = (function (){var statearr_23379 = state_23376;
(statearr_23379[(7)] = inst_23336);

(statearr_23379[(8)] = inst_23337);

return statearr_23379;
})();
var statearr_23380_23412 = state_23376__$1;
(statearr_23380_23412[(2)] = null);

(statearr_23380_23412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (4))){
var inst_23340 = (state_23376[(9)]);
var inst_23340__$1 = (state_23376[(2)]);
var inst_23341 = (inst_23340__$1 == null);
var inst_23342 = cljs.core.not.call(null,inst_23341);
var state_23376__$1 = (function (){var statearr_23381 = state_23376;
(statearr_23381[(9)] = inst_23340__$1);

return statearr_23381;
})();
if(inst_23342){
var statearr_23382_23413 = state_23376__$1;
(statearr_23382_23413[(1)] = (5));

} else {
var statearr_23383_23414 = state_23376__$1;
(statearr_23383_23414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (15))){
var inst_23366 = (state_23376[(2)]);
var state_23376__$1 = state_23376;
var statearr_23384_23415 = state_23376__$1;
(statearr_23384_23415[(2)] = inst_23366);

(statearr_23384_23415[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (13))){
var state_23376__$1 = state_23376;
var statearr_23385_23416 = state_23376__$1;
(statearr_23385_23416[(2)] = null);

(statearr_23385_23416[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (6))){
var inst_23336 = (state_23376[(7)]);
var inst_23361 = inst_23336.length;
var inst_23362 = (inst_23361 > (0));
var state_23376__$1 = state_23376;
if(cljs.core.truth_(inst_23362)){
var statearr_23386_23417 = state_23376__$1;
(statearr_23386_23417[(1)] = (12));

} else {
var statearr_23387_23418 = state_23376__$1;
(statearr_23387_23418[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (3))){
var inst_23374 = (state_23376[(2)]);
var state_23376__$1 = state_23376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23376__$1,inst_23374);
} else {
if((state_val_23377 === (12))){
var inst_23336 = (state_23376[(7)]);
var inst_23364 = cljs.core.vec.call(null,inst_23336);
var state_23376__$1 = state_23376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23376__$1,(15),out,inst_23364);
} else {
if((state_val_23377 === (2))){
var state_23376__$1 = state_23376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23376__$1,(4),ch);
} else {
if((state_val_23377 === (11))){
var inst_23340 = (state_23376[(9)]);
var inst_23344 = (state_23376[(10)]);
var inst_23354 = (state_23376[(2)]);
var inst_23355 = [];
var inst_23356 = inst_23355.push(inst_23340);
var inst_23336 = inst_23355;
var inst_23337 = inst_23344;
var state_23376__$1 = (function (){var statearr_23388 = state_23376;
(statearr_23388[(7)] = inst_23336);

(statearr_23388[(8)] = inst_23337);

(statearr_23388[(11)] = inst_23354);

(statearr_23388[(12)] = inst_23356);

return statearr_23388;
})();
var statearr_23389_23419 = state_23376__$1;
(statearr_23389_23419[(2)] = null);

(statearr_23389_23419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (9))){
var inst_23336 = (state_23376[(7)]);
var inst_23352 = cljs.core.vec.call(null,inst_23336);
var state_23376__$1 = state_23376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23376__$1,(11),out,inst_23352);
} else {
if((state_val_23377 === (5))){
var inst_23337 = (state_23376[(8)]);
var inst_23340 = (state_23376[(9)]);
var inst_23344 = (state_23376[(10)]);
var inst_23344__$1 = f.call(null,inst_23340);
var inst_23345 = cljs.core._EQ_.call(null,inst_23344__$1,inst_23337);
var inst_23346 = cljs.core.keyword_identical_QMARK_.call(null,inst_23337,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23347 = (inst_23345) || (inst_23346);
var state_23376__$1 = (function (){var statearr_23390 = state_23376;
(statearr_23390[(10)] = inst_23344__$1);

return statearr_23390;
})();
if(cljs.core.truth_(inst_23347)){
var statearr_23391_23420 = state_23376__$1;
(statearr_23391_23420[(1)] = (8));

} else {
var statearr_23392_23421 = state_23376__$1;
(statearr_23392_23421[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (14))){
var inst_23369 = (state_23376[(2)]);
var inst_23370 = cljs.core.async.close_BANG_.call(null,out);
var state_23376__$1 = (function (){var statearr_23394 = state_23376;
(statearr_23394[(13)] = inst_23369);

return statearr_23394;
})();
var statearr_23395_23422 = state_23376__$1;
(statearr_23395_23422[(2)] = inst_23370);

(statearr_23395_23422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (10))){
var inst_23359 = (state_23376[(2)]);
var state_23376__$1 = state_23376;
var statearr_23396_23423 = state_23376__$1;
(statearr_23396_23423[(2)] = inst_23359);

(statearr_23396_23423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23377 === (8))){
var inst_23336 = (state_23376[(7)]);
var inst_23340 = (state_23376[(9)]);
var inst_23344 = (state_23376[(10)]);
var inst_23349 = inst_23336.push(inst_23340);
var tmp23393 = inst_23336;
var inst_23336__$1 = tmp23393;
var inst_23337 = inst_23344;
var state_23376__$1 = (function (){var statearr_23397 = state_23376;
(statearr_23397[(7)] = inst_23336__$1);

(statearr_23397[(8)] = inst_23337);

(statearr_23397[(14)] = inst_23349);

return statearr_23397;
})();
var statearr_23398_23424 = state_23376__$1;
(statearr_23398_23424[(2)] = null);

(statearr_23398_23424[(1)] = (2));


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
});})(c__20655__auto___23410,out))
;
return ((function (switch__20543__auto__,c__20655__auto___23410,out){
return (function() {
var cljs$core$async$state_machine__20544__auto__ = null;
var cljs$core$async$state_machine__20544__auto____0 = (function (){
var statearr_23402 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23402[(0)] = cljs$core$async$state_machine__20544__auto__);

(statearr_23402[(1)] = (1));

return statearr_23402;
});
var cljs$core$async$state_machine__20544__auto____1 = (function (state_23376){
while(true){
var ret_value__20545__auto__ = (function (){try{while(true){
var result__20546__auto__ = switch__20543__auto__.call(null,state_23376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20546__auto__;
}
break;
}
}catch (e23403){if((e23403 instanceof Object)){
var ex__20547__auto__ = e23403;
var statearr_23404_23425 = state_23376;
(statearr_23404_23425[(5)] = ex__20547__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23426 = state_23376;
state_23376 = G__23426;
continue;
} else {
return ret_value__20545__auto__;
}
break;
}
});
cljs$core$async$state_machine__20544__auto__ = function(state_23376){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20544__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20544__auto____1.call(this,state_23376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20544__auto____0;
cljs$core$async$state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20544__auto____1;
return cljs$core$async$state_machine__20544__auto__;
})()
;})(switch__20543__auto__,c__20655__auto___23410,out))
})();
var state__20657__auto__ = (function (){var statearr_23405 = f__20656__auto__.call(null);
(statearr_23405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20655__auto___23410);

return statearr_23405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20657__auto__);
});})(c__20655__auto___23410,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map