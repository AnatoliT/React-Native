// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26938_26952 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26939_26953 = null;
var count__26940_26954 = (0);
var i__26941_26955 = (0);
while(true){
if((i__26941_26955 < count__26940_26954)){
var f_26956 = cljs.core._nth.call(null,chunk__26939_26953,i__26941_26955);
cljs.core.println.call(null,"  ",f_26956);

var G__26957 = seq__26938_26952;
var G__26958 = chunk__26939_26953;
var G__26959 = count__26940_26954;
var G__26960 = (i__26941_26955 + (1));
seq__26938_26952 = G__26957;
chunk__26939_26953 = G__26958;
count__26940_26954 = G__26959;
i__26941_26955 = G__26960;
continue;
} else {
var temp__4425__auto___26961 = cljs.core.seq.call(null,seq__26938_26952);
if(temp__4425__auto___26961){
var seq__26938_26962__$1 = temp__4425__auto___26961;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26938_26962__$1)){
var c__17658__auto___26963 = cljs.core.chunk_first.call(null,seq__26938_26962__$1);
var G__26964 = cljs.core.chunk_rest.call(null,seq__26938_26962__$1);
var G__26965 = c__17658__auto___26963;
var G__26966 = cljs.core.count.call(null,c__17658__auto___26963);
var G__26967 = (0);
seq__26938_26952 = G__26964;
chunk__26939_26953 = G__26965;
count__26940_26954 = G__26966;
i__26941_26955 = G__26967;
continue;
} else {
var f_26968 = cljs.core.first.call(null,seq__26938_26962__$1);
cljs.core.println.call(null,"  ",f_26968);

var G__26969 = cljs.core.next.call(null,seq__26938_26962__$1);
var G__26970 = null;
var G__26971 = (0);
var G__26972 = (0);
seq__26938_26952 = G__26969;
chunk__26939_26953 = G__26970;
count__26940_26954 = G__26971;
i__26941_26955 = G__26972;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26973 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16855__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26973);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26973)))?cljs.core.second.call(null,arglists_26973):arglists_26973));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26942 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26943 = null;
var count__26944 = (0);
var i__26945 = (0);
while(true){
if((i__26945 < count__26944)){
var vec__26946 = cljs.core._nth.call(null,chunk__26943,i__26945);
var name = cljs.core.nth.call(null,vec__26946,(0),null);
var map__26947 = cljs.core.nth.call(null,vec__26946,(1),null);
var map__26947__$1 = ((((!((map__26947 == null)))?((((map__26947.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26947.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26947):map__26947);
var doc = cljs.core.get.call(null,map__26947__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26947__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26974 = seq__26942;
var G__26975 = chunk__26943;
var G__26976 = count__26944;
var G__26977 = (i__26945 + (1));
seq__26942 = G__26974;
chunk__26943 = G__26975;
count__26944 = G__26976;
i__26945 = G__26977;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26942);
if(temp__4425__auto__){
var seq__26942__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26942__$1)){
var c__17658__auto__ = cljs.core.chunk_first.call(null,seq__26942__$1);
var G__26978 = cljs.core.chunk_rest.call(null,seq__26942__$1);
var G__26979 = c__17658__auto__;
var G__26980 = cljs.core.count.call(null,c__17658__auto__);
var G__26981 = (0);
seq__26942 = G__26978;
chunk__26943 = G__26979;
count__26944 = G__26980;
i__26945 = G__26981;
continue;
} else {
var vec__26949 = cljs.core.first.call(null,seq__26942__$1);
var name = cljs.core.nth.call(null,vec__26949,(0),null);
var map__26950 = cljs.core.nth.call(null,vec__26949,(1),null);
var map__26950__$1 = ((((!((map__26950 == null)))?((((map__26950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26950):map__26950);
var doc = cljs.core.get.call(null,map__26950__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26950__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26982 = cljs.core.next.call(null,seq__26942__$1);
var G__26983 = null;
var G__26984 = (0);
var G__26985 = (0);
seq__26942 = G__26982;
chunk__26943 = G__26983;
count__26944 = G__26984;
i__26945 = G__26985;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map