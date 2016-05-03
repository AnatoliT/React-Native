// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__27242 = cljs.core._EQ_;
var expr__27243 = (function (){var or__16855__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__27242.call(null,"true",expr__27243))){
return true;
} else {
if(cljs.core.truth_(pred__27242.call(null,"false",expr__27243))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__27243)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__17920__auto__ = [];
var len__17913__auto___27246 = arguments.length;
var i__17914__auto___27247 = (0);
while(true){
if((i__17914__auto___27247 < len__17913__auto___27246)){
args__17920__auto__.push((arguments[i__17914__auto___27247]));

var G__27248 = (i__17914__auto___27247 + (1));
i__17914__auto___27247 = G__27248;
continue;
} else {
}
break;
}

var argseq__17921__auto__ = ((((0) < args__17920__auto__.length))?(new cljs.core.IndexedSeq(args__17920__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__17921__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq27245){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27245));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27249){
var map__27252 = p__27249;
var map__27252__$1 = ((((!((map__27252 == null)))?((((map__27252.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27252.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27252):map__27252);
var message = cljs.core.get.call(null,map__27252__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27252__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16855__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16843__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16843__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16843__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20655__auto___27414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20655__auto___27414,ch){
return (function (){
var f__20656__auto__ = (function (){var switch__20543__auto__ = ((function (c__20655__auto___27414,ch){
return (function (state_27383){
var state_val_27384 = (state_27383[(1)]);
if((state_val_27384 === (7))){
var inst_27379 = (state_27383[(2)]);
var state_27383__$1 = state_27383;
var statearr_27385_27415 = state_27383__$1;
(statearr_27385_27415[(2)] = inst_27379);

(statearr_27385_27415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27384 === (1))){
var state_27383__$1 = state_27383;
var statearr_27386_27416 = state_27383__$1;
(statearr_27386_27416[(2)] = null);

(statearr_27386_27416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27384 === (4))){
var inst_27336 = (state_27383[(7)]);
var inst_27336__$1 = (state_27383[(2)]);
var state_27383__$1 = (function (){var statearr_27387 = state_27383;
(statearr_27387[(7)] = inst_27336__$1);

return statearr_27387;
})();
if(cljs.core.truth_(inst_27336__$1)){
var statearr_27388_27417 = state_27383__$1;
(statearr_27388_27417[(1)] = (5));

} else {
var statearr_27389_27418 = state_27383__$1;
(statearr_27389_27418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27384 === (15))){
var inst_27343 = (state_27383[(8)]);
var inst_27358 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27343);
var inst_27359 = cljs.core.first.call(null,inst_27358);
var inst_27360 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27359);
var inst_27361 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_27360)].join('');
var inst_27362 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_27361);
var state_27383__$1 = state_27383;
var statearr_27390_27419 = state_27383__$1;
(statearr_27390_27419[(2)] = inst_27362);

(statearr_27390_27419[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27384 === (13))){
var inst_27367 = (state_27383[(2)]);
var state_27383__$1 = state_27383;
var statearr_27391_27420 = state_27383__$1;
(statearr_27391_27420[(2)] = inst_27367);

(statearr_27391_27420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27384 === (6))){
var state_27383__$1 = state_27383;
var statearr_27392_27421 = state_27383__$1;
(statearr_27392_27421[(2)] = null);

(statearr_27392_27421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27384 === (17))){
var inst_27365 = (state_27383[(2)]);
var state_27383__$1 = state_27383;
var statearr_27393_27422 = state_27383__$1;
(statearr_27393_27422[(2)] = inst_27365);

(statearr_27393_27422[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27384 === (3))){
var inst_27381 = (state_27383[(2)]);
var state_27383__$1 = state_27383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27383__$1,inst_27381);
} else {
if((state_val_27384 === (12))){
var inst_27342 = (state_27383[(9)]);
var inst_27356 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27342,opts);
var state_27383__$1 = state_27383;
if(cljs.core.truth_(inst_27356)){
var statearr_27394_27423 = state_27383__$1;
(statearr_27394_27423[(1)] = (15));

} else {
var statearr_27395_27424 = state_27383__$1;
(statearr_27395_27424[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27384 === (2))){
var state_27383__$1 = state_27383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27383__$1,(4),ch);
} else {
if((state_val_27384 === (11))){
var inst_27343 = (state_27383[(8)]);
var inst_27348 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27349 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27343);
var inst_27350 = cljs.core.async.timeout.call(null,(1000));
var inst_27351 = [inst_27349,inst_27350];
var inst_27352 = (new cljs.core.PersistentVector(null,2,(5),inst_27348,inst_27351,null));
var state_27383__$1 = state_27383;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27383__$1,(14),inst_27352);
} else {
if((state_val_27384 === (9))){
var inst_27343 = (state_27383[(8)]);
var inst_27369 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_27370 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27343);
var inst_27371 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27370);
var inst_27372 = [cljs.core.str("Not loading: "),cljs.core.str(inst_27371)].join('');
var inst_27373 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_27372);
var state_27383__$1 = (function (){var statearr_27396 = state_27383;
(statearr_27396[(10)] = inst_27369);

return statearr_27396;
})();
var statearr_27397_27425 = state_27383__$1;
(statearr_27397_27425[(2)] = inst_27373);

(statearr_27397_27425[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27384 === (5))){
var inst_27336 = (state_27383[(7)]);
var inst_27338 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27339 = (new cljs.core.PersistentArrayMap(null,2,inst_27338,null));
var inst_27340 = (new cljs.core.PersistentHashSet(null,inst_27339,null));
var inst_27341 = figwheel.client.focus_msgs.call(null,inst_27340,inst_27336);
var inst_27342 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27341);
var inst_27343 = cljs.core.first.call(null,inst_27341);
var inst_27344 = figwheel.client.autoload_QMARK_.call(null);
var state_27383__$1 = (function (){var statearr_27398 = state_27383;
(statearr_27398[(8)] = inst_27343);

(statearr_27398[(9)] = inst_27342);

return statearr_27398;
})();
if(cljs.core.truth_(inst_27344)){
var statearr_27399_27426 = state_27383__$1;
(statearr_27399_27426[(1)] = (8));

} else {
var statearr_27400_27427 = state_27383__$1;
(statearr_27400_27427[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27384 === (14))){
var inst_27354 = (state_27383[(2)]);
var state_27383__$1 = state_27383;
var statearr_27401_27428 = state_27383__$1;
(statearr_27401_27428[(2)] = inst_27354);

(statearr_27401_27428[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27384 === (16))){
var state_27383__$1 = state_27383;
var statearr_27402_27429 = state_27383__$1;
(statearr_27402_27429[(2)] = null);

(statearr_27402_27429[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27384 === (10))){
var inst_27375 = (state_27383[(2)]);
var state_27383__$1 = (function (){var statearr_27403 = state_27383;
(statearr_27403[(11)] = inst_27375);

return statearr_27403;
})();
var statearr_27404_27430 = state_27383__$1;
(statearr_27404_27430[(2)] = null);

(statearr_27404_27430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27384 === (8))){
var inst_27342 = (state_27383[(9)]);
var inst_27346 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27342,opts);
var state_27383__$1 = state_27383;
if(cljs.core.truth_(inst_27346)){
var statearr_27405_27431 = state_27383__$1;
(statearr_27405_27431[(1)] = (11));

} else {
var statearr_27406_27432 = state_27383__$1;
(statearr_27406_27432[(1)] = (12));

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
});})(c__20655__auto___27414,ch))
;
return ((function (switch__20543__auto__,c__20655__auto___27414,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20544__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20544__auto____0 = (function (){
var statearr_27410 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27410[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20544__auto__);

(statearr_27410[(1)] = (1));

return statearr_27410;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20544__auto____1 = (function (state_27383){
while(true){
var ret_value__20545__auto__ = (function (){try{while(true){
var result__20546__auto__ = switch__20543__auto__.call(null,state_27383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20546__auto__;
}
break;
}
}catch (e27411){if((e27411 instanceof Object)){
var ex__20547__auto__ = e27411;
var statearr_27412_27433 = state_27383;
(statearr_27412_27433[(5)] = ex__20547__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27434 = state_27383;
state_27383 = G__27434;
continue;
} else {
return ret_value__20545__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20544__auto__ = function(state_27383){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20544__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20544__auto____1.call(this,state_27383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20544__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20544__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20544__auto__;
})()
;})(switch__20543__auto__,c__20655__auto___27414,ch))
})();
var state__20657__auto__ = (function (){var statearr_27413 = f__20656__auto__.call(null);
(statearr_27413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20655__auto___27414);

return statearr_27413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20657__auto__);
});})(c__20655__auto___27414,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__27435_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__27435_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_27442 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_27442){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_27440 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_27441 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27441;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27440;
}}catch (e27439){if((e27439 instanceof Error)){
var e = e27439;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_27442], null));
} else {
var e = e27439;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_27442))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__27443){
var map__27450 = p__27443;
var map__27450__$1 = ((((!((map__27450 == null)))?((((map__27450.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27450.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27450):map__27450);
var opts = map__27450__$1;
var build_id = cljs.core.get.call(null,map__27450__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27450,map__27450__$1,opts,build_id){
return (function (p__27452){
var vec__27453 = p__27452;
var map__27454 = cljs.core.nth.call(null,vec__27453,(0),null);
var map__27454__$1 = ((((!((map__27454 == null)))?((((map__27454.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27454.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27454):map__27454);
var msg = map__27454__$1;
var msg_name = cljs.core.get.call(null,map__27454__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27453,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__27453,map__27454,map__27454__$1,msg,msg_name,_,map__27450,map__27450__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27453,map__27454,map__27454__$1,msg,msg_name,_,map__27450,map__27450__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27450,map__27450__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27460){
var vec__27461 = p__27460;
var map__27462 = cljs.core.nth.call(null,vec__27461,(0),null);
var map__27462__$1 = ((((!((map__27462 == null)))?((((map__27462.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27462.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27462):map__27462);
var msg = map__27462__$1;
var msg_name = cljs.core.get.call(null,map__27462__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27461,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27464){
var map__27474 = p__27464;
var map__27474__$1 = ((((!((map__27474 == null)))?((((map__27474.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27474.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27474):map__27474);
var on_compile_warning = cljs.core.get.call(null,map__27474__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__27474__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__27474,map__27474__$1,on_compile_warning,on_compile_fail){
return (function (p__27476){
var vec__27477 = p__27476;
var map__27478 = cljs.core.nth.call(null,vec__27477,(0),null);
var map__27478__$1 = ((((!((map__27478 == null)))?((((map__27478.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27478.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27478):map__27478);
var msg = map__27478__$1;
var msg_name = cljs.core.get.call(null,map__27478__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27477,(1));
var pred__27480 = cljs.core._EQ_;
var expr__27481 = msg_name;
if(cljs.core.truth_(pred__27480.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27481))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27480.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27481))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27474,map__27474__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20655__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20655__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20656__auto__ = (function (){var switch__20543__auto__ = ((function (c__20655__auto__,msg_hist,msg_names,msg){
return (function (state_27697){
var state_val_27698 = (state_27697[(1)]);
if((state_val_27698 === (7))){
var inst_27621 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
if(cljs.core.truth_(inst_27621)){
var statearr_27699_27745 = state_27697__$1;
(statearr_27699_27745[(1)] = (8));

} else {
var statearr_27700_27746 = state_27697__$1;
(statearr_27700_27746[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (20))){
var inst_27691 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
var statearr_27701_27747 = state_27697__$1;
(statearr_27701_27747[(2)] = inst_27691);

(statearr_27701_27747[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (27))){
var inst_27687 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
var statearr_27702_27748 = state_27697__$1;
(statearr_27702_27748[(2)] = inst_27687);

(statearr_27702_27748[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (1))){
var inst_27614 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27697__$1 = state_27697;
if(cljs.core.truth_(inst_27614)){
var statearr_27703_27749 = state_27697__$1;
(statearr_27703_27749[(1)] = (2));

} else {
var statearr_27704_27750 = state_27697__$1;
(statearr_27704_27750[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (24))){
var inst_27689 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
var statearr_27705_27751 = state_27697__$1;
(statearr_27705_27751[(2)] = inst_27689);

(statearr_27705_27751[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (4))){
var inst_27695 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27697__$1,inst_27695);
} else {
if((state_val_27698 === (15))){
var inst_27693 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
var statearr_27706_27752 = state_27697__$1;
(statearr_27706_27752[(2)] = inst_27693);

(statearr_27706_27752[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (21))){
var inst_27652 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
var statearr_27707_27753 = state_27697__$1;
(statearr_27707_27753[(2)] = inst_27652);

(statearr_27707_27753[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (31))){
var inst_27676 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27697__$1 = state_27697;
if(cljs.core.truth_(inst_27676)){
var statearr_27708_27754 = state_27697__$1;
(statearr_27708_27754[(1)] = (34));

} else {
var statearr_27709_27755 = state_27697__$1;
(statearr_27709_27755[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (32))){
var inst_27685 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
var statearr_27710_27756 = state_27697__$1;
(statearr_27710_27756[(2)] = inst_27685);

(statearr_27710_27756[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (33))){
var inst_27674 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
var statearr_27711_27757 = state_27697__$1;
(statearr_27711_27757[(2)] = inst_27674);

(statearr_27711_27757[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (13))){
var inst_27635 = figwheel.client.heads_up.clear.call(null);
var state_27697__$1 = state_27697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27697__$1,(16),inst_27635);
} else {
if((state_val_27698 === (22))){
var inst_27656 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27657 = figwheel.client.heads_up.append_message.call(null,inst_27656);
var state_27697__$1 = state_27697;
var statearr_27712_27758 = state_27697__$1;
(statearr_27712_27758[(2)] = inst_27657);

(statearr_27712_27758[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (36))){
var inst_27683 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
var statearr_27713_27759 = state_27697__$1;
(statearr_27713_27759[(2)] = inst_27683);

(statearr_27713_27759[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (29))){
var inst_27667 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
var statearr_27714_27760 = state_27697__$1;
(statearr_27714_27760[(2)] = inst_27667);

(statearr_27714_27760[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (6))){
var inst_27616 = (state_27697[(7)]);
var state_27697__$1 = state_27697;
var statearr_27715_27761 = state_27697__$1;
(statearr_27715_27761[(2)] = inst_27616);

(statearr_27715_27761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (28))){
var inst_27663 = (state_27697[(2)]);
var inst_27664 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27665 = figwheel.client.heads_up.display_warning.call(null,inst_27664);
var state_27697__$1 = (function (){var statearr_27716 = state_27697;
(statearr_27716[(8)] = inst_27663);

return statearr_27716;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27697__$1,(29),inst_27665);
} else {
if((state_val_27698 === (25))){
var inst_27661 = figwheel.client.heads_up.clear.call(null);
var state_27697__$1 = state_27697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27697__$1,(28),inst_27661);
} else {
if((state_val_27698 === (34))){
var inst_27678 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27697__$1 = state_27697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27697__$1,(37),inst_27678);
} else {
if((state_val_27698 === (17))){
var inst_27643 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
var statearr_27717_27762 = state_27697__$1;
(statearr_27717_27762[(2)] = inst_27643);

(statearr_27717_27762[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (3))){
var inst_27633 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27697__$1 = state_27697;
if(cljs.core.truth_(inst_27633)){
var statearr_27718_27763 = state_27697__$1;
(statearr_27718_27763[(1)] = (13));

} else {
var statearr_27719_27764 = state_27697__$1;
(statearr_27719_27764[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (12))){
var inst_27629 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
var statearr_27720_27765 = state_27697__$1;
(statearr_27720_27765[(2)] = inst_27629);

(statearr_27720_27765[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (2))){
var inst_27616 = (state_27697[(7)]);
var inst_27616__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_27697__$1 = (function (){var statearr_27721 = state_27697;
(statearr_27721[(7)] = inst_27616__$1);

return statearr_27721;
})();
if(cljs.core.truth_(inst_27616__$1)){
var statearr_27722_27766 = state_27697__$1;
(statearr_27722_27766[(1)] = (5));

} else {
var statearr_27723_27767 = state_27697__$1;
(statearr_27723_27767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (23))){
var inst_27659 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27697__$1 = state_27697;
if(cljs.core.truth_(inst_27659)){
var statearr_27724_27768 = state_27697__$1;
(statearr_27724_27768[(1)] = (25));

} else {
var statearr_27725_27769 = state_27697__$1;
(statearr_27725_27769[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (35))){
var state_27697__$1 = state_27697;
var statearr_27726_27770 = state_27697__$1;
(statearr_27726_27770[(2)] = null);

(statearr_27726_27770[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (19))){
var inst_27654 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27697__$1 = state_27697;
if(cljs.core.truth_(inst_27654)){
var statearr_27727_27771 = state_27697__$1;
(statearr_27727_27771[(1)] = (22));

} else {
var statearr_27728_27772 = state_27697__$1;
(statearr_27728_27772[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (11))){
var inst_27625 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
var statearr_27729_27773 = state_27697__$1;
(statearr_27729_27773[(2)] = inst_27625);

(statearr_27729_27773[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (9))){
var inst_27627 = figwheel.client.heads_up.clear.call(null);
var state_27697__$1 = state_27697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27697__$1,(12),inst_27627);
} else {
if((state_val_27698 === (5))){
var inst_27618 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27697__$1 = state_27697;
var statearr_27730_27774 = state_27697__$1;
(statearr_27730_27774[(2)] = inst_27618);

(statearr_27730_27774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (14))){
var inst_27645 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27697__$1 = state_27697;
if(cljs.core.truth_(inst_27645)){
var statearr_27731_27775 = state_27697__$1;
(statearr_27731_27775[(1)] = (18));

} else {
var statearr_27732_27776 = state_27697__$1;
(statearr_27732_27776[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (26))){
var inst_27669 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27697__$1 = state_27697;
if(cljs.core.truth_(inst_27669)){
var statearr_27733_27777 = state_27697__$1;
(statearr_27733_27777[(1)] = (30));

} else {
var statearr_27734_27778 = state_27697__$1;
(statearr_27734_27778[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (16))){
var inst_27637 = (state_27697[(2)]);
var inst_27638 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27639 = figwheel.client.format_messages.call(null,inst_27638);
var inst_27640 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27641 = figwheel.client.heads_up.display_error.call(null,inst_27639,inst_27640);
var state_27697__$1 = (function (){var statearr_27735 = state_27697;
(statearr_27735[(9)] = inst_27637);

return statearr_27735;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27697__$1,(17),inst_27641);
} else {
if((state_val_27698 === (30))){
var inst_27671 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27672 = figwheel.client.heads_up.display_warning.call(null,inst_27671);
var state_27697__$1 = state_27697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27697__$1,(33),inst_27672);
} else {
if((state_val_27698 === (10))){
var inst_27631 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
var statearr_27736_27779 = state_27697__$1;
(statearr_27736_27779[(2)] = inst_27631);

(statearr_27736_27779[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (18))){
var inst_27647 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27648 = figwheel.client.format_messages.call(null,inst_27647);
var inst_27649 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27650 = figwheel.client.heads_up.display_error.call(null,inst_27648,inst_27649);
var state_27697__$1 = state_27697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27697__$1,(21),inst_27650);
} else {
if((state_val_27698 === (37))){
var inst_27680 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
var statearr_27737_27780 = state_27697__$1;
(statearr_27737_27780[(2)] = inst_27680);

(statearr_27737_27780[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (8))){
var inst_27623 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27697__$1 = state_27697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27697__$1,(11),inst_27623);
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
});})(c__20655__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20543__auto__,c__20655__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20544__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20544__auto____0 = (function (){
var statearr_27741 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27741[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20544__auto__);

(statearr_27741[(1)] = (1));

return statearr_27741;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20544__auto____1 = (function (state_27697){
while(true){
var ret_value__20545__auto__ = (function (){try{while(true){
var result__20546__auto__ = switch__20543__auto__.call(null,state_27697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20546__auto__;
}
break;
}
}catch (e27742){if((e27742 instanceof Object)){
var ex__20547__auto__ = e27742;
var statearr_27743_27781 = state_27697;
(statearr_27743_27781[(5)] = ex__20547__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27782 = state_27697;
state_27697 = G__27782;
continue;
} else {
return ret_value__20545__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20544__auto__ = function(state_27697){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20544__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20544__auto____1.call(this,state_27697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20544__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20544__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20544__auto__;
})()
;})(switch__20543__auto__,c__20655__auto__,msg_hist,msg_names,msg))
})();
var state__20657__auto__ = (function (){var statearr_27744 = f__20656__auto__.call(null);
(statearr_27744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20655__auto__);

return statearr_27744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20657__auto__);
});})(c__20655__auto__,msg_hist,msg_names,msg))
);

return c__20655__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20655__auto___27845 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20655__auto___27845,ch){
return (function (){
var f__20656__auto__ = (function (){var switch__20543__auto__ = ((function (c__20655__auto___27845,ch){
return (function (state_27828){
var state_val_27829 = (state_27828[(1)]);
if((state_val_27829 === (1))){
var state_27828__$1 = state_27828;
var statearr_27830_27846 = state_27828__$1;
(statearr_27830_27846[(2)] = null);

(statearr_27830_27846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27829 === (2))){
var state_27828__$1 = state_27828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27828__$1,(4),ch);
} else {
if((state_val_27829 === (3))){
var inst_27826 = (state_27828[(2)]);
var state_27828__$1 = state_27828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27828__$1,inst_27826);
} else {
if((state_val_27829 === (4))){
var inst_27816 = (state_27828[(7)]);
var inst_27816__$1 = (state_27828[(2)]);
var state_27828__$1 = (function (){var statearr_27831 = state_27828;
(statearr_27831[(7)] = inst_27816__$1);

return statearr_27831;
})();
if(cljs.core.truth_(inst_27816__$1)){
var statearr_27832_27847 = state_27828__$1;
(statearr_27832_27847[(1)] = (5));

} else {
var statearr_27833_27848 = state_27828__$1;
(statearr_27833_27848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27829 === (5))){
var inst_27816 = (state_27828[(7)]);
var inst_27818 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27816);
var state_27828__$1 = state_27828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27828__$1,(8),inst_27818);
} else {
if((state_val_27829 === (6))){
var state_27828__$1 = state_27828;
var statearr_27834_27849 = state_27828__$1;
(statearr_27834_27849[(2)] = null);

(statearr_27834_27849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27829 === (7))){
var inst_27824 = (state_27828[(2)]);
var state_27828__$1 = state_27828;
var statearr_27835_27850 = state_27828__$1;
(statearr_27835_27850[(2)] = inst_27824);

(statearr_27835_27850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27829 === (8))){
var inst_27820 = (state_27828[(2)]);
var state_27828__$1 = (function (){var statearr_27836 = state_27828;
(statearr_27836[(8)] = inst_27820);

return statearr_27836;
})();
var statearr_27837_27851 = state_27828__$1;
(statearr_27837_27851[(2)] = null);

(statearr_27837_27851[(1)] = (2));


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
});})(c__20655__auto___27845,ch))
;
return ((function (switch__20543__auto__,c__20655__auto___27845,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20544__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20544__auto____0 = (function (){
var statearr_27841 = [null,null,null,null,null,null,null,null,null];
(statearr_27841[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20544__auto__);

(statearr_27841[(1)] = (1));

return statearr_27841;
});
var figwheel$client$heads_up_plugin_$_state_machine__20544__auto____1 = (function (state_27828){
while(true){
var ret_value__20545__auto__ = (function (){try{while(true){
var result__20546__auto__ = switch__20543__auto__.call(null,state_27828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20546__auto__;
}
break;
}
}catch (e27842){if((e27842 instanceof Object)){
var ex__20547__auto__ = e27842;
var statearr_27843_27852 = state_27828;
(statearr_27843_27852[(5)] = ex__20547__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27853 = state_27828;
state_27828 = G__27853;
continue;
} else {
return ret_value__20545__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20544__auto__ = function(state_27828){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20544__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20544__auto____1.call(this,state_27828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20544__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20544__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20544__auto__;
})()
;})(switch__20543__auto__,c__20655__auto___27845,ch))
})();
var state__20657__auto__ = (function (){var statearr_27844 = f__20656__auto__.call(null);
(statearr_27844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20655__auto___27845);

return statearr_27844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20657__auto__);
});})(c__20655__auto___27845,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20655__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20655__auto__){
return (function (){
var f__20656__auto__ = (function (){var switch__20543__auto__ = ((function (c__20655__auto__){
return (function (state_27874){
var state_val_27875 = (state_27874[(1)]);
if((state_val_27875 === (1))){
var inst_27869 = cljs.core.async.timeout.call(null,(3000));
var state_27874__$1 = state_27874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27874__$1,(2),inst_27869);
} else {
if((state_val_27875 === (2))){
var inst_27871 = (state_27874[(2)]);
var inst_27872 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27874__$1 = (function (){var statearr_27876 = state_27874;
(statearr_27876[(7)] = inst_27871);

return statearr_27876;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27874__$1,inst_27872);
} else {
return null;
}
}
});})(c__20655__auto__))
;
return ((function (switch__20543__auto__,c__20655__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20544__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20544__auto____0 = (function (){
var statearr_27880 = [null,null,null,null,null,null,null,null];
(statearr_27880[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20544__auto__);

(statearr_27880[(1)] = (1));

return statearr_27880;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20544__auto____1 = (function (state_27874){
while(true){
var ret_value__20545__auto__ = (function (){try{while(true){
var result__20546__auto__ = switch__20543__auto__.call(null,state_27874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20546__auto__;
}
break;
}
}catch (e27881){if((e27881 instanceof Object)){
var ex__20547__auto__ = e27881;
var statearr_27882_27884 = state_27874;
(statearr_27882_27884[(5)] = ex__20547__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27885 = state_27874;
state_27874 = G__27885;
continue;
} else {
return ret_value__20545__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20544__auto__ = function(state_27874){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20544__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20544__auto____1.call(this,state_27874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20544__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20544__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20544__auto__;
})()
;})(switch__20543__auto__,c__20655__auto__))
})();
var state__20657__auto__ = (function (){var statearr_27883 = f__20656__auto__.call(null);
(statearr_27883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20655__auto__);

return statearr_27883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20657__auto__);
});})(c__20655__auto__))
);

return c__20655__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__27886){
var map__27893 = p__27886;
var map__27893__$1 = ((((!((map__27893 == null)))?((((map__27893.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27893.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27893):map__27893);
var ed = map__27893__$1;
var formatted_exception = cljs.core.get.call(null,map__27893__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__27893__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__27893__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__27895_27899 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__27896_27900 = null;
var count__27897_27901 = (0);
var i__27898_27902 = (0);
while(true){
if((i__27898_27902 < count__27897_27901)){
var msg_27903 = cljs.core._nth.call(null,chunk__27896_27900,i__27898_27902);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27903);

var G__27904 = seq__27895_27899;
var G__27905 = chunk__27896_27900;
var G__27906 = count__27897_27901;
var G__27907 = (i__27898_27902 + (1));
seq__27895_27899 = G__27904;
chunk__27896_27900 = G__27905;
count__27897_27901 = G__27906;
i__27898_27902 = G__27907;
continue;
} else {
var temp__4425__auto___27908 = cljs.core.seq.call(null,seq__27895_27899);
if(temp__4425__auto___27908){
var seq__27895_27909__$1 = temp__4425__auto___27908;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27895_27909__$1)){
var c__17658__auto___27910 = cljs.core.chunk_first.call(null,seq__27895_27909__$1);
var G__27911 = cljs.core.chunk_rest.call(null,seq__27895_27909__$1);
var G__27912 = c__17658__auto___27910;
var G__27913 = cljs.core.count.call(null,c__17658__auto___27910);
var G__27914 = (0);
seq__27895_27899 = G__27911;
chunk__27896_27900 = G__27912;
count__27897_27901 = G__27913;
i__27898_27902 = G__27914;
continue;
} else {
var msg_27915 = cljs.core.first.call(null,seq__27895_27909__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27915);

var G__27916 = cljs.core.next.call(null,seq__27895_27909__$1);
var G__27917 = null;
var G__27918 = (0);
var G__27919 = (0);
seq__27895_27899 = G__27916;
chunk__27896_27900 = G__27917;
count__27897_27901 = G__27918;
i__27898_27902 = G__27919;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27920){
var map__27923 = p__27920;
var map__27923__$1 = ((((!((map__27923 == null)))?((((map__27923.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27923.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27923):map__27923);
var w = map__27923__$1;
var message = cljs.core.get.call(null,map__27923__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16843__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16843__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16843__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__27931 = cljs.core.seq.call(null,plugins);
var chunk__27932 = null;
var count__27933 = (0);
var i__27934 = (0);
while(true){
if((i__27934 < count__27933)){
var vec__27935 = cljs.core._nth.call(null,chunk__27932,i__27934);
var k = cljs.core.nth.call(null,vec__27935,(0),null);
var plugin = cljs.core.nth.call(null,vec__27935,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27937 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27931,chunk__27932,count__27933,i__27934,pl_27937,vec__27935,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27937.call(null,msg_hist);
});})(seq__27931,chunk__27932,count__27933,i__27934,pl_27937,vec__27935,k,plugin))
);
} else {
}

var G__27938 = seq__27931;
var G__27939 = chunk__27932;
var G__27940 = count__27933;
var G__27941 = (i__27934 + (1));
seq__27931 = G__27938;
chunk__27932 = G__27939;
count__27933 = G__27940;
i__27934 = G__27941;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27931);
if(temp__4425__auto__){
var seq__27931__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27931__$1)){
var c__17658__auto__ = cljs.core.chunk_first.call(null,seq__27931__$1);
var G__27942 = cljs.core.chunk_rest.call(null,seq__27931__$1);
var G__27943 = c__17658__auto__;
var G__27944 = cljs.core.count.call(null,c__17658__auto__);
var G__27945 = (0);
seq__27931 = G__27942;
chunk__27932 = G__27943;
count__27933 = G__27944;
i__27934 = G__27945;
continue;
} else {
var vec__27936 = cljs.core.first.call(null,seq__27931__$1);
var k = cljs.core.nth.call(null,vec__27936,(0),null);
var plugin = cljs.core.nth.call(null,vec__27936,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27946 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27931,chunk__27932,count__27933,i__27934,pl_27946,vec__27936,k,plugin,seq__27931__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27946.call(null,msg_hist);
});})(seq__27931,chunk__27932,count__27933,i__27934,pl_27946,vec__27936,k,plugin,seq__27931__$1,temp__4425__auto__))
);
} else {
}

var G__27947 = cljs.core.next.call(null,seq__27931__$1);
var G__27948 = null;
var G__27949 = (0);
var G__27950 = (0);
seq__27931 = G__27947;
chunk__27932 = G__27948;
count__27933 = G__27949;
i__27934 = G__27950;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args27951 = [];
var len__17913__auto___27954 = arguments.length;
var i__17914__auto___27955 = (0);
while(true){
if((i__17914__auto___27955 < len__17913__auto___27954)){
args27951.push((arguments[i__17914__auto___27955]));

var G__27956 = (i__17914__auto___27955 + (1));
i__17914__auto___27955 = G__27956;
continue;
} else {
}
break;
}

var G__27953 = args27951.length;
switch (G__27953) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27951.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17920__auto__ = [];
var len__17913__auto___27962 = arguments.length;
var i__17914__auto___27963 = (0);
while(true){
if((i__17914__auto___27963 < len__17913__auto___27962)){
args__17920__auto__.push((arguments[i__17914__auto___27963]));

var G__27964 = (i__17914__auto___27963 + (1));
i__17914__auto___27963 = G__27964;
continue;
} else {
}
break;
}

var argseq__17921__auto__ = ((((0) < args__17920__auto__.length))?(new cljs.core.IndexedSeq(args__17920__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17921__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27959){
var map__27960 = p__27959;
var map__27960__$1 = ((((!((map__27960 == null)))?((((map__27960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27960):map__27960);
var opts = map__27960__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27958){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27958));
});

//# sourceMappingURL=client.js.map