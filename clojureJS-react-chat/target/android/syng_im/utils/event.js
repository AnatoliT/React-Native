// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.utils.event');
goog.require('cljs.core');
goog.require('cljs.core.async');
syng_im.utils.event.handle_channel_events = (function syng_im$utils$event$handle_channel_events(chan,handler){
var c__20655__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20655__auto__){
return (function (){
var f__20656__auto__ = (function (){var switch__20543__auto__ = ((function (c__20655__auto__){
return (function (state_29938){
var state_val_29939 = (state_29938[(1)]);
if((state_val_29939 === (1))){
var state_29938__$1 = state_29938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29938__$1,(2),chan);
} else {
if((state_val_29939 === (2))){
var inst_29919 = (state_29938[(2)]);
var inst_29920 = cljs.core.nth.call(null,inst_29919,(0),null);
var inst_29921 = cljs.core.nth.call(null,inst_29919,(1),null);
var inst_29922 = inst_29919;
var state_29938__$1 = (function (){var statearr_29940 = state_29938;
(statearr_29940[(7)] = inst_29920);

(statearr_29940[(8)] = inst_29922);

(statearr_29940[(9)] = inst_29921);

return statearr_29940;
})();
var statearr_29941_29957 = state_29938__$1;
(statearr_29941_29957[(2)] = null);

(statearr_29941_29957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29939 === (3))){
var inst_29922 = (state_29938[(8)]);
var inst_29925 = (state_29938[(10)]);
var inst_29925__$1 = cljs.core.nth.call(null,inst_29922,(0),null);
var inst_29926 = cljs.core.nth.call(null,inst_29922,(1),null);
var state_29938__$1 = (function (){var statearr_29942 = state_29938;
(statearr_29942[(10)] = inst_29925__$1);

(statearr_29942[(11)] = inst_29926);

return statearr_29942;
})();
if(cljs.core.truth_(inst_29925__$1)){
var statearr_29943_29958 = state_29938__$1;
(statearr_29943_29958[(1)] = (5));

} else {
var statearr_29944_29959 = state_29938__$1;
(statearr_29944_29959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29939 === (4))){
var inst_29936 = (state_29938[(2)]);
var state_29938__$1 = state_29938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29938__$1,inst_29936);
} else {
if((state_val_29939 === (5))){
var inst_29925 = (state_29938[(10)]);
var inst_29926 = (state_29938[(11)]);
var inst_29928 = handler.call(null,inst_29925,inst_29926);
var state_29938__$1 = (function (){var statearr_29945 = state_29938;
(statearr_29945[(12)] = inst_29928);

return statearr_29945;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29938__$1,(8),chan);
} else {
if((state_val_29939 === (6))){
var state_29938__$1 = state_29938;
var statearr_29946_29960 = state_29938__$1;
(statearr_29946_29960[(2)] = null);

(statearr_29946_29960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29939 === (7))){
var inst_29934 = (state_29938[(2)]);
var state_29938__$1 = state_29938;
var statearr_29947_29961 = state_29938__$1;
(statearr_29947_29961[(2)] = inst_29934);

(statearr_29947_29961[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29939 === (8))){
var inst_29930 = (state_29938[(2)]);
var inst_29922 = inst_29930;
var state_29938__$1 = (function (){var statearr_29948 = state_29938;
(statearr_29948[(8)] = inst_29922);

return statearr_29948;
})();
var statearr_29949_29962 = state_29938__$1;
(statearr_29949_29962[(2)] = null);

(statearr_29949_29962[(1)] = (3));


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
});})(c__20655__auto__))
;
return ((function (switch__20543__auto__,c__20655__auto__){
return (function() {
var syng_im$utils$event$handle_channel_events_$_state_machine__20544__auto__ = null;
var syng_im$utils$event$handle_channel_events_$_state_machine__20544__auto____0 = (function (){
var statearr_29953 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29953[(0)] = syng_im$utils$event$handle_channel_events_$_state_machine__20544__auto__);

(statearr_29953[(1)] = (1));

return statearr_29953;
});
var syng_im$utils$event$handle_channel_events_$_state_machine__20544__auto____1 = (function (state_29938){
while(true){
var ret_value__20545__auto__ = (function (){try{while(true){
var result__20546__auto__ = switch__20543__auto__.call(null,state_29938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20546__auto__;
}
break;
}
}catch (e29954){if((e29954 instanceof Object)){
var ex__20547__auto__ = e29954;
var statearr_29955_29963 = state_29938;
(statearr_29955_29963[(5)] = ex__20547__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29964 = state_29938;
state_29938 = G__29964;
continue;
} else {
return ret_value__20545__auto__;
}
break;
}
});
syng_im$utils$event$handle_channel_events_$_state_machine__20544__auto__ = function(state_29938){
switch(arguments.length){
case 0:
return syng_im$utils$event$handle_channel_events_$_state_machine__20544__auto____0.call(this);
case 1:
return syng_im$utils$event$handle_channel_events_$_state_machine__20544__auto____1.call(this,state_29938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
syng_im$utils$event$handle_channel_events_$_state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$0 = syng_im$utils$event$handle_channel_events_$_state_machine__20544__auto____0;
syng_im$utils$event$handle_channel_events_$_state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$1 = syng_im$utils$event$handle_channel_events_$_state_machine__20544__auto____1;
return syng_im$utils$event$handle_channel_events_$_state_machine__20544__auto__;
})()
;})(switch__20543__auto__,c__20655__auto__))
})();
var state__20657__auto__ = (function (){var statearr_29956 = f__20656__auto__.call(null);
(statearr_29956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20655__auto__);

return statearr_29956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20657__auto__);
});})(c__20655__auto__))
);

return c__20655__auto__;
});

//# sourceMappingURL=event.js.map