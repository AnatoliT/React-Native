// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.protocol.state.storage');
goog.require('cljs.core');

/**
 * @interface
 */
syng_im.protocol.state.storage.Storage = function(){};

syng_im.protocol.state.storage.put = (function syng_im$protocol$state$storage$put(this$,key,value){
if((!((this$ == null))) && (!((this$.syng_im$protocol$state$storage$Storage$put$arity$3 == null)))){
return this$.syng_im$protocol$state$storage$Storage$put$arity$3(this$,key,value);
} else {
var x__17510__auto__ = (((this$ == null))?null:this$);
var m__17511__auto__ = (syng_im.protocol.state.storage.put[goog.typeOf(x__17510__auto__)]);
if(!((m__17511__auto__ == null))){
return m__17511__auto__.call(null,this$,key,value);
} else {
var m__17511__auto____$1 = (syng_im.protocol.state.storage.put["_"]);
if(!((m__17511__auto____$1 == null))){
return m__17511__auto____$1.call(null,this$,key,value);
} else {
throw cljs.core.missing_protocol.call(null,"Storage.put",this$);
}
}
}
});

syng_im.protocol.state.storage.get = (function syng_im$protocol$state$storage$get(this$,key){
if((!((this$ == null))) && (!((this$.syng_im$protocol$state$storage$Storage$get$arity$2 == null)))){
return this$.syng_im$protocol$state$storage$Storage$get$arity$2(this$,key);
} else {
var x__17510__auto__ = (((this$ == null))?null:this$);
var m__17511__auto__ = (syng_im.protocol.state.storage.get[goog.typeOf(x__17510__auto__)]);
if(!((m__17511__auto__ == null))){
return m__17511__auto__.call(null,this$,key);
} else {
var m__17511__auto____$1 = (syng_im.protocol.state.storage.get["_"]);
if(!((m__17511__auto____$1 == null))){
return m__17511__auto____$1.call(null,this$,key);
} else {
throw cljs.core.missing_protocol.call(null,"Storage.get",this$);
}
}
}
});

syng_im.protocol.state.storage.contains_key_QMARK_ = (function syng_im$protocol$state$storage$contains_key_QMARK_(this$,key){
if((!((this$ == null))) && (!((this$.syng_im$protocol$state$storage$Storage$contains_key_QMARK_$arity$2 == null)))){
return this$.syng_im$protocol$state$storage$Storage$contains_key_QMARK_$arity$2(this$,key);
} else {
var x__17510__auto__ = (((this$ == null))?null:this$);
var m__17511__auto__ = (syng_im.protocol.state.storage.contains_key_QMARK_[goog.typeOf(x__17510__auto__)]);
if(!((m__17511__auto__ == null))){
return m__17511__auto__.call(null,this$,key);
} else {
var m__17511__auto____$1 = (syng_im.protocol.state.storage.contains_key_QMARK_["_"]);
if(!((m__17511__auto____$1 == null))){
return m__17511__auto____$1.call(null,this$,key);
} else {
throw cljs.core.missing_protocol.call(null,"Storage.contains-key?",this$);
}
}
}
});

syng_im.protocol.state.storage.delete$ = (function syng_im$protocol$state$storage$delete(this$,key){
if((!((this$ == null))) && (!((this$.syng_im$protocol$state$storage$Storage$delete$arity$2 == null)))){
return this$.syng_im$protocol$state$storage$Storage$delete$arity$2(this$,key);
} else {
var x__17510__auto__ = (((this$ == null))?null:this$);
var m__17511__auto__ = (syng_im.protocol.state.storage.delete$[goog.typeOf(x__17510__auto__)]);
if(!((m__17511__auto__ == null))){
return m__17511__auto__.call(null,this$,key);
} else {
var m__17511__auto____$1 = (syng_im.protocol.state.storage.delete$["_"]);
if(!((m__17511__auto____$1 == null))){
return m__17511__auto____$1.call(null,this$,key);
} else {
throw cljs.core.missing_protocol.call(null,"Storage.delete",this$);
}
}
}
});


//# sourceMappingURL=storage.js.map