// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.utils.logging');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
syng_im.utils.logging.timestamp = (function syng_im$utils$logging$timestamp(){
return cljs_time.format.unparse.call(null,new cljs.core.Keyword(null,"hour-minute-second-fraction","hour-minute-second-fraction",-1253038551).cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),cljs_time.core.now.call(null));
});
syng_im.utils.logging.to_js = (function syng_im$utils$logging$to_js(args){
return cljs.core.into_array.call(null,cljs.core.mapv.call(null,cljs.core.clj__GT_js,cljs.core.cons.call(null,syng_im.utils.logging.timestamp.call(null),args)));
});
syng_im.utils.logging.debug = (function syng_im$utils$logging$debug(var_args){
var args__17920__auto__ = [];
var len__17913__auto___18603 = arguments.length;
var i__17914__auto___18604 = (0);
while(true){
if((i__17914__auto___18604 < len__17913__auto___18603)){
args__17920__auto__.push((arguments[i__17914__auto___18604]));

var G__18605 = (i__17914__auto___18604 + (1));
i__17914__auto___18604 = G__18605;
continue;
} else {
}
break;
}

var argseq__17921__auto__ = ((((0) < args__17920__auto__.length))?(new cljs.core.IndexedSeq(args__17920__auto__.slice((0)),(0))):null);
return syng_im.utils.logging.debug.cljs$core$IFn$_invoke$arity$variadic(argseq__17921__auto__);
});

syng_im.utils.logging.debug.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log.apply(console,syng_im.utils.logging.to_js.call(null,args));
});

syng_im.utils.logging.debug.cljs$lang$maxFixedArity = (0);

syng_im.utils.logging.debug.cljs$lang$applyTo = (function (seq18602){
return syng_im.utils.logging.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18602));
});
syng_im.utils.logging.info = (function syng_im$utils$logging$info(var_args){
var args__17920__auto__ = [];
var len__17913__auto___18607 = arguments.length;
var i__17914__auto___18608 = (0);
while(true){
if((i__17914__auto___18608 < len__17913__auto___18607)){
args__17920__auto__.push((arguments[i__17914__auto___18608]));

var G__18609 = (i__17914__auto___18608 + (1));
i__17914__auto___18608 = G__18609;
continue;
} else {
}
break;
}

var argseq__17921__auto__ = ((((0) < args__17920__auto__.length))?(new cljs.core.IndexedSeq(args__17920__auto__.slice((0)),(0))):null);
return syng_im.utils.logging.info.cljs$core$IFn$_invoke$arity$variadic(argseq__17921__auto__);
});

syng_im.utils.logging.info.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log.apply(console,syng_im.utils.logging.to_js.call(null,args));
});

syng_im.utils.logging.info.cljs$lang$maxFixedArity = (0);

syng_im.utils.logging.info.cljs$lang$applyTo = (function (seq18606){
return syng_im.utils.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18606));
});
syng_im.utils.logging.warn = (function syng_im$utils$logging$warn(var_args){
var args__17920__auto__ = [];
var len__17913__auto___18611 = arguments.length;
var i__17914__auto___18612 = (0);
while(true){
if((i__17914__auto___18612 < len__17913__auto___18611)){
args__17920__auto__.push((arguments[i__17914__auto___18612]));

var G__18613 = (i__17914__auto___18612 + (1));
i__17914__auto___18612 = G__18613;
continue;
} else {
}
break;
}

var argseq__17921__auto__ = ((((0) < args__17920__auto__.length))?(new cljs.core.IndexedSeq(args__17920__auto__.slice((0)),(0))):null);
return syng_im.utils.logging.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__17921__auto__);
});

syng_im.utils.logging.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.warn.apply(console,syng_im.utils.logging.to_js.call(null,args));
});

syng_im.utils.logging.warn.cljs$lang$maxFixedArity = (0);

syng_im.utils.logging.warn.cljs$lang$applyTo = (function (seq18610){
return syng_im.utils.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18610));
});
syng_im.utils.logging.error = (function syng_im$utils$logging$error(var_args){
var args__17920__auto__ = [];
var len__17913__auto___18615 = arguments.length;
var i__17914__auto___18616 = (0);
while(true){
if((i__17914__auto___18616 < len__17913__auto___18615)){
args__17920__auto__.push((arguments[i__17914__auto___18616]));

var G__18617 = (i__17914__auto___18616 + (1));
i__17914__auto___18616 = G__18617;
continue;
} else {
}
break;
}

var argseq__17921__auto__ = ((((0) < args__17920__auto__.length))?(new cljs.core.IndexedSeq(args__17920__auto__.slice((0)),(0))):null);
return syng_im.utils.logging.error.cljs$core$IFn$_invoke$arity$variadic(argseq__17921__auto__);
});

syng_im.utils.logging.error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.error.apply(console,syng_im.utils.logging.to_js.call(null,args));
});

syng_im.utils.logging.error.cljs$lang$maxFixedArity = (0);

syng_im.utils.logging.error.cljs$lang$applyTo = (function (seq18614){
return syng_im.utils.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18614));
});

//# sourceMappingURL=logging.js.map