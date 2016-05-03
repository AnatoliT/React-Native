// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.protocol.delivery');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('syng_im.utils.logging');
goog.require('syng_im.protocol.web3');
goog.require('syng_im.protocol.user_handler');
goog.require('syng_im.protocol.defaults');
goog.require('cljs.core.async');
goog.require('syng_im.protocol.state.delivery');
goog.require('syng_im.protocol.state.state');
syng_im.protocol.delivery.expired_QMARK_ = (function syng_im$protocol$delivery$expired_QMARK_(timestamp){
return cljs_time.core.before_QMARK_.call(null,cljs_time.core.plus.call(null,timestamp,syng_im.protocol.defaults.ack_wait_timeout_ms),cljs_time.core.now.call(null));
});
syng_im.protocol.delivery.delivery_expired_seq = (function syng_im$protocol$delivery$delivery_expired_seq(){
return (new cljs.core.LazySeq(null,(function (){
var map__28292 = cljs.core.peek.call(null,syng_im.protocol.state.delivery.delivery_queue.call(null));
var map__28292__$1 = ((((!((map__28292 == null)))?((((map__28292.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28292.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28292):map__28292);
var item = map__28292__$1;
var timestamp = cljs.core.get.call(null,map__28292__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
if(cljs.core.truth_(timestamp)){
if(cljs.core.truth_(syng_im.protocol.delivery.expired_QMARK_.call(null,timestamp))){
syng_im.protocol.state.delivery.pop_delivery_queue.call(null);

return cljs.core.cons.call(null,item,syng_im$protocol$delivery$delivery_expired_seq.call(null));
} else {
return null;
}
} else {
return null;
}
}),null,null));
});
syng_im.protocol.delivery.start_delivery_loop = (function syng_im$protocol$delivery$start_delivery_loop(){
var c__20655__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20655__auto__){
return (function (){
var f__20656__auto__ = (function (){var switch__20543__auto__ = ((function (c__20655__auto__){
return (function (state_28806){
var state_val_28807 = (state_28806[(1)]);
if((state_val_28807 === (65))){
var inst_28736 = (state_28806[(7)]);
var inst_28772 = syng_im.utils.logging.info.call(null,"Delivery-loop: Retry-count for message",inst_28736,"reached maximum");
var inst_28773 = syng_im.protocol.state.delivery.internal_QMARK_.call(null,inst_28736);
var inst_28774 = syng_im.protocol.state.delivery.remove_pending_message.call(null,inst_28736);
var state_28806__$1 = (function (){var statearr_28808 = state_28806;
(statearr_28808[(8)] = inst_28774);

(statearr_28808[(9)] = inst_28772);

return statearr_28808;
})();
if(cljs.core.truth_(inst_28773)){
var statearr_28809_28924 = state_28806__$1;
(statearr_28809_28924[(1)] = (67));

} else {
var statearr_28810_28925 = state_28806__$1;
(statearr_28810_28925[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (70))){
var inst_28801 = (state_28806[(2)]);
var inst_28612 = inst_28801;
var state_28806__$1 = (function (){var statearr_28811 = state_28806;
(statearr_28811[(10)] = inst_28612);

return statearr_28811;
})();
var statearr_28812_28926 = state_28806__$1;
(statearr_28812_28926[(2)] = null);

(statearr_28812_28926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (62))){
var inst_28738 = (state_28806[(11)]);
var state_28806__$1 = state_28806;
var statearr_28813_28927 = state_28806__$1;
(statearr_28813_28927[(2)] = inst_28738);

(statearr_28813_28927[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (7))){
var inst_28621 = (state_28806[(12)]);
var inst_28629 = (state_28806[(13)]);
var inst_28623 = (state_28806[(14)]);
var inst_28629__$1 = cljs.core._nth.call(null,inst_28621,inst_28623);
var inst_28631 = (inst_28629__$1 == null);
var inst_28632 = cljs.core.not.call(null,inst_28631);
var state_28806__$1 = (function (){var statearr_28814 = state_28806;
(statearr_28814[(13)] = inst_28629__$1);

return statearr_28814;
})();
if(inst_28632){
var statearr_28815_28928 = state_28806__$1;
(statearr_28815_28928[(1)] = (10));

} else {
var statearr_28816_28929 = state_28806__$1;
(statearr_28816_28929[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (59))){
var state_28806__$1 = state_28806;
var statearr_28817_28930 = state_28806__$1;
(statearr_28817_28930[(2)] = false);

(statearr_28817_28930[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (20))){
var state_28806__$1 = state_28806;
var statearr_28818_28931 = state_28806__$1;
(statearr_28818_28931[(2)] = null);

(statearr_28818_28931[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (58))){
var state_28806__$1 = state_28806;
var statearr_28819_28932 = state_28806__$1;
(statearr_28819_28932[(2)] = true);

(statearr_28819_28932[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (60))){
var inst_28752 = (state_28806[(2)]);
var state_28806__$1 = state_28806;
var statearr_28820_28933 = state_28806__$1;
(statearr_28820_28933[(2)] = inst_28752);

(statearr_28820_28933[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (27))){
var inst_28666 = (state_28806[(2)]);
var state_28806__$1 = state_28806;
var statearr_28821_28934 = state_28806__$1;
(statearr_28821_28934[(2)] = inst_28666);

(statearr_28821_28934[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (1))){
var inst_28609 = cljs.core.async.timeout.call(null,syng_im.protocol.defaults.check_delivery_interval_msg);
var state_28806__$1 = state_28806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28806__$1,(2),inst_28609);
} else {
if((state_val_28807 === (69))){
var inst_28782 = (state_28806[(2)]);
var state_28806__$1 = state_28806;
var statearr_28822_28935 = state_28806__$1;
(statearr_28822_28935[(2)] = inst_28782);

(statearr_28822_28935[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (24))){
var inst_28669 = (state_28806[(2)]);
var state_28806__$1 = state_28806;
if(cljs.core.truth_(inst_28669)){
var statearr_28823_28936 = state_28806__$1;
(statearr_28823_28936[(1)] = (28));

} else {
var statearr_28824_28937 = state_28806__$1;
(statearr_28824_28937[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (55))){
var inst_28738 = (state_28806[(11)]);
var inst_28745 = inst_28738.cljs$lang$protocol_mask$partition0$;
var inst_28746 = (inst_28745 & (64));
var inst_28747 = inst_28738.cljs$core$ISeq$;
var inst_28748 = (inst_28746) || (inst_28747);
var state_28806__$1 = state_28806;
if(cljs.core.truth_(inst_28748)){
var statearr_28825_28938 = state_28806__$1;
(statearr_28825_28938[(1)] = (58));

} else {
var statearr_28826_28939 = state_28806__$1;
(statearr_28826_28939[(1)] = (59));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (39))){
var inst_28794 = (state_28806[(2)]);
var state_28806__$1 = state_28806;
var statearr_28827_28940 = state_28806__$1;
(statearr_28827_28940[(2)] = inst_28794);

(statearr_28827_28940[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (46))){
var state_28806__$1 = state_28806;
var statearr_28828_28941 = state_28806__$1;
(statearr_28828_28941[(2)] = true);

(statearr_28828_28941[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (4))){
var inst_28804 = (state_28806[(2)]);
var state_28806__$1 = state_28806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28806__$1,inst_28804);
} else {
if((state_val_28807 === (54))){
var inst_28705 = (state_28806[(15)]);
var inst_28787 = (state_28806[(2)]);
var inst_28788 = cljs.core.next.call(null,inst_28705);
var inst_28620 = inst_28788;
var inst_28621 = null;
var inst_28622 = (0);
var inst_28623 = (0);
var state_28806__$1 = (function (){var statearr_28829 = state_28806;
(statearr_28829[(16)] = inst_28620);

(statearr_28829[(17)] = inst_28787);

(statearr_28829[(12)] = inst_28621);

(statearr_28829[(14)] = inst_28623);

(statearr_28829[(18)] = inst_28622);

return statearr_28829;
})();
var statearr_28830_28942 = state_28806__$1;
(statearr_28830_28942[(2)] = null);

(statearr_28830_28942[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (15))){
var inst_28641 = (state_28806[(2)]);
var state_28806__$1 = state_28806;
var statearr_28831_28943 = state_28806__$1;
(statearr_28831_28943[(2)] = inst_28641);

(statearr_28831_28943[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (48))){
var inst_28727 = (state_28806[(2)]);
var state_28806__$1 = state_28806;
var statearr_28835_28944 = state_28806__$1;
(statearr_28835_28944[(2)] = inst_28727);

(statearr_28835_28944[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (50))){
var inst_28715 = (state_28806[(19)]);
var state_28806__$1 = state_28806;
var statearr_28836_28945 = state_28806__$1;
(statearr_28836_28945[(2)] = inst_28715);

(statearr_28836_28945[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (21))){
var inst_28620 = (state_28806[(16)]);
var inst_28621 = (state_28806[(12)]);
var inst_28623 = (state_28806[(14)]);
var inst_28622 = (state_28806[(18)]);
var inst_28701 = (state_28806[(2)]);
var inst_28702 = (inst_28623 + (1));
var tmp28832 = inst_28620;
var tmp28833 = inst_28621;
var tmp28834 = inst_28622;
var inst_28620__$1 = tmp28832;
var inst_28621__$1 = tmp28833;
var inst_28622__$1 = tmp28834;
var inst_28623__$1 = inst_28702;
var state_28806__$1 = (function (){var statearr_28837 = state_28806;
(statearr_28837[(16)] = inst_28620__$1);

(statearr_28837[(12)] = inst_28621__$1);

(statearr_28837[(20)] = inst_28701);

(statearr_28837[(14)] = inst_28623__$1);

(statearr_28837[(18)] = inst_28622__$1);

return statearr_28837;
})();
var statearr_28838_28946 = state_28806__$1;
(statearr_28838_28946[(2)] = null);

(statearr_28838_28946[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (31))){
var inst_28650 = (state_28806[(21)]);
var inst_28676 = (state_28806[(22)]);
var inst_28680 = syng_im.utils.logging.info.call(null,"Delivery-loop: Re-sending message",inst_28650);
var inst_28681 = syng_im.protocol.state.state.connection.call(null);
var inst_28682 = syng_im.protocol.web3.post_msg.call(null,inst_28681,inst_28676);
var inst_28683 = syng_im.protocol.state.delivery.push_delivery_queue.call(null,inst_28650);
var inst_28684 = syng_im.protocol.state.delivery.inc_retry_count.call(null,inst_28650);
var state_28806__$1 = (function (){var statearr_28839 = state_28806;
(statearr_28839[(23)] = inst_28680);

(statearr_28839[(24)] = inst_28682);

(statearr_28839[(25)] = inst_28683);

return statearr_28839;
})();
var statearr_28840_28947 = state_28806__$1;
(statearr_28840_28947[(2)] = inst_28684);

(statearr_28840_28947[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (32))){
var inst_28650 = (state_28806[(21)]);
var inst_28686 = syng_im.utils.logging.info.call(null,"Delivery-loop: Retry-count for message",inst_28650,"reached maximum");
var inst_28687 = syng_im.protocol.state.delivery.internal_QMARK_.call(null,inst_28650);
var inst_28688 = syng_im.protocol.state.delivery.remove_pending_message.call(null,inst_28650);
var state_28806__$1 = (function (){var statearr_28841 = state_28806;
(statearr_28841[(26)] = inst_28686);

(statearr_28841[(27)] = inst_28688);

return statearr_28841;
})();
if(cljs.core.truth_(inst_28687)){
var statearr_28842_28948 = state_28806__$1;
(statearr_28842_28948[(1)] = (34));

} else {
var statearr_28843_28949 = state_28806__$1;
(statearr_28843_28949[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (40))){
var inst_28705 = (state_28806[(15)]);
var inst_28709 = cljs.core.chunk_first.call(null,inst_28705);
var inst_28710 = cljs.core.chunk_rest.call(null,inst_28705);
var inst_28711 = cljs.core.count.call(null,inst_28709);
var inst_28620 = inst_28710;
var inst_28621 = inst_28709;
var inst_28622 = inst_28711;
var inst_28623 = (0);
var state_28806__$1 = (function (){var statearr_28844 = state_28806;
(statearr_28844[(16)] = inst_28620);

(statearr_28844[(12)] = inst_28621);

(statearr_28844[(14)] = inst_28623);

(statearr_28844[(18)] = inst_28622);

return statearr_28844;
})();
var statearr_28845_28950 = state_28806__$1;
(statearr_28845_28950[(2)] = null);

(statearr_28845_28950[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (56))){
var state_28806__$1 = state_28806;
var statearr_28846_28951 = state_28806__$1;
(statearr_28846_28951[(2)] = false);

(statearr_28846_28951[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (33))){
var inst_28698 = (state_28806[(2)]);
var state_28806__$1 = state_28806;
var statearr_28847_28952 = state_28806__$1;
(statearr_28847_28952[(2)] = inst_28698);

(statearr_28847_28952[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (13))){
var state_28806__$1 = state_28806;
var statearr_28848_28953 = state_28806__$1;
(statearr_28848_28953[(2)] = true);

(statearr_28848_28953[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (22))){
var inst_28652 = (state_28806[(28)]);
var inst_28659 = inst_28652.cljs$lang$protocol_mask$partition0$;
var inst_28660 = (inst_28659 & (64));
var inst_28661 = inst_28652.cljs$core$ISeq$;
var inst_28662 = (inst_28660) || (inst_28661);
var state_28806__$1 = state_28806;
if(cljs.core.truth_(inst_28662)){
var statearr_28849_28954 = state_28806__$1;
(statearr_28849_28954[(1)] = (25));

} else {
var statearr_28850_28955 = state_28806__$1;
(statearr_28850_28955[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (36))){
var inst_28696 = (state_28806[(2)]);
var state_28806__$1 = state_28806;
var statearr_28851_28956 = state_28806__$1;
(statearr_28851_28956[(2)] = inst_28696);

(statearr_28851_28956[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (41))){
var inst_28715 = (state_28806[(19)]);
var inst_28705 = (state_28806[(15)]);
var inst_28715__$1 = cljs.core.first.call(null,inst_28705);
var inst_28717 = (inst_28715__$1 == null);
var inst_28718 = cljs.core.not.call(null,inst_28717);
var state_28806__$1 = (function (){var statearr_28852 = state_28806;
(statearr_28852[(19)] = inst_28715__$1);

return statearr_28852;
})();
if(inst_28718){
var statearr_28853_28957 = state_28806__$1;
(statearr_28853_28957[(1)] = (43));

} else {
var statearr_28854_28958 = state_28806__$1;
(statearr_28854_28958[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (43))){
var inst_28715 = (state_28806[(19)]);
var inst_28720 = inst_28715.cljs$lang$protocol_mask$partition0$;
var inst_28721 = (inst_28720 & (64));
var inst_28722 = inst_28715.cljs$core$ISeq$;
var inst_28723 = (inst_28721) || (inst_28722);
var state_28806__$1 = state_28806;
if(cljs.core.truth_(inst_28723)){
var statearr_28855_28959 = state_28806__$1;
(statearr_28855_28959[(1)] = (46));

} else {
var statearr_28856_28960 = state_28806__$1;
(statearr_28856_28960[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (61))){
var inst_28738 = (state_28806[(11)]);
var inst_28757 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28738);
var state_28806__$1 = state_28806;
var statearr_28857_28961 = state_28806__$1;
(statearr_28857_28961[(2)] = inst_28757);

(statearr_28857_28961[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (29))){
var inst_28652 = (state_28806[(28)]);
var state_28806__$1 = state_28806;
var statearr_28858_28962 = state_28806__$1;
(statearr_28858_28962[(2)] = inst_28652);

(statearr_28858_28962[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (44))){
var state_28806__$1 = state_28806;
var statearr_28859_28963 = state_28806__$1;
(statearr_28859_28963[(2)] = false);

(statearr_28859_28963[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (6))){
var inst_28798 = (state_28806[(2)]);
var inst_28799 = cljs.core.async.timeout.call(null,syng_im.protocol.defaults.check_delivery_interval_msg);
var state_28806__$1 = (function (){var statearr_28860 = state_28806;
(statearr_28860[(29)] = inst_28798);

return statearr_28860;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28806__$1,(70),inst_28799);
} else {
if((state_val_28807 === (28))){
var inst_28652 = (state_28806[(28)]);
var inst_28671 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28652);
var state_28806__$1 = state_28806;
var statearr_28861_28964 = state_28806__$1;
(statearr_28861_28964[(2)] = inst_28671);

(statearr_28861_28964[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (64))){
var inst_28762 = (state_28806[(30)]);
var inst_28736 = (state_28806[(7)]);
var inst_28766 = syng_im.utils.logging.info.call(null,"Delivery-loop: Re-sending message",inst_28736);
var inst_28767 = syng_im.protocol.state.state.connection.call(null);
var inst_28768 = syng_im.protocol.web3.post_msg.call(null,inst_28767,inst_28762);
var inst_28769 = syng_im.protocol.state.delivery.push_delivery_queue.call(null,inst_28736);
var inst_28770 = syng_im.protocol.state.delivery.inc_retry_count.call(null,inst_28736);
var state_28806__$1 = (function (){var statearr_28862 = state_28806;
(statearr_28862[(31)] = inst_28769);

(statearr_28862[(32)] = inst_28768);

(statearr_28862[(33)] = inst_28766);

return statearr_28862;
})();
var statearr_28863_28965 = state_28806__$1;
(statearr_28863_28965[(2)] = inst_28770);

(statearr_28863_28965[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (51))){
var inst_28738 = (state_28806[(11)]);
var inst_28736 = (state_28806[(7)]);
var inst_28735 = (state_28806[(2)]);
var inst_28736__$1 = cljs.core.get.call(null,inst_28735,new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869));
var inst_28737 = syng_im.utils.logging.info.call(null,"Delivery-loop:","Checking delivery of msg-id",inst_28736__$1);
var inst_28738__$1 = syng_im.protocol.state.delivery.pending_QMARK_.call(null,inst_28736__$1);
var state_28806__$1 = (function (){var statearr_28864 = state_28806;
(statearr_28864[(11)] = inst_28738__$1);

(statearr_28864[(7)] = inst_28736__$1);

(statearr_28864[(34)] = inst_28737);

return statearr_28864;
})();
if(cljs.core.truth_(inst_28738__$1)){
var statearr_28865_28966 = state_28806__$1;
(statearr_28865_28966[(1)] = (52));

} else {
var statearr_28866_28967 = state_28806__$1;
(statearr_28866_28967[(1)] = (53));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (25))){
var state_28806__$1 = state_28806;
var statearr_28867_28968 = state_28806__$1;
(statearr_28867_28968[(2)] = true);

(statearr_28867_28968[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (34))){
var state_28806__$1 = state_28806;
var statearr_28868_28969 = state_28806__$1;
(statearr_28868_28969[(2)] = null);

(statearr_28868_28969[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (17))){
var inst_28629 = (state_28806[(13)]);
var state_28806__$1 = state_28806;
var statearr_28869_28970 = state_28806__$1;
(statearr_28869_28970[(2)] = inst_28629);

(statearr_28869_28970[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (3))){
var inst_28618 = syng_im.protocol.delivery.delivery_expired_seq.call(null);
var inst_28619 = cljs.core.seq.call(null,inst_28618);
var inst_28620 = inst_28619;
var inst_28621 = null;
var inst_28622 = (0);
var inst_28623 = (0);
var state_28806__$1 = (function (){var statearr_28870 = state_28806;
(statearr_28870[(16)] = inst_28620);

(statearr_28870[(12)] = inst_28621);

(statearr_28870[(14)] = inst_28623);

(statearr_28870[(18)] = inst_28622);

return statearr_28870;
})();
var statearr_28871_28971 = state_28806__$1;
(statearr_28871_28971[(2)] = null);

(statearr_28871_28971[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (12))){
var inst_28644 = (state_28806[(2)]);
var state_28806__$1 = state_28806;
if(cljs.core.truth_(inst_28644)){
var statearr_28872_28972 = state_28806__$1;
(statearr_28872_28972[(1)] = (16));

} else {
var statearr_28873_28973 = state_28806__$1;
(statearr_28873_28973[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (2))){
var inst_28611 = (state_28806[(2)]);
var inst_28612 = inst_28611;
var state_28806__$1 = (function (){var statearr_28874 = state_28806;
(statearr_28874[(10)] = inst_28612);

return statearr_28874;
})();
var statearr_28875_28974 = state_28806__$1;
(statearr_28875_28974[(2)] = null);

(statearr_28875_28974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (66))){
var inst_28784 = (state_28806[(2)]);
var state_28806__$1 = state_28806;
var statearr_28876_28975 = state_28806__$1;
(statearr_28876_28975[(2)] = inst_28784);

(statearr_28876_28975[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (23))){
var state_28806__$1 = state_28806;
var statearr_28877_28976 = state_28806__$1;
(statearr_28877_28976[(2)] = false);

(statearr_28877_28976[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (47))){
var state_28806__$1 = state_28806;
var statearr_28878_28977 = state_28806__$1;
(statearr_28878_28977[(2)] = false);

(statearr_28878_28977[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (35))){
var inst_28650 = (state_28806[(21)]);
var inst_28691 = [new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869)];
var inst_28692 = [inst_28650];
var inst_28693 = cljs.core.PersistentHashMap.fromArrays(inst_28691,inst_28692);
var inst_28694 = syng_im.protocol.user_handler.invoke_user_handler.call(null,new cljs.core.Keyword(null,"delivery-failed","delivery-failed",2146295283),inst_28693);
var state_28806__$1 = state_28806;
var statearr_28879_28978 = state_28806__$1;
(statearr_28879_28978[(2)] = inst_28694);

(statearr_28879_28978[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (19))){
var inst_28652 = (state_28806[(28)]);
var inst_28656 = (inst_28652 == null);
var inst_28657 = cljs.core.not.call(null,inst_28656);
var state_28806__$1 = state_28806;
if(inst_28657){
var statearr_28880_28979 = state_28806__$1;
(statearr_28880_28979[(1)] = (22));

} else {
var statearr_28881_28980 = state_28806__$1;
(statearr_28881_28980[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (57))){
var inst_28755 = (state_28806[(2)]);
var state_28806__$1 = state_28806;
if(cljs.core.truth_(inst_28755)){
var statearr_28882_28981 = state_28806__$1;
(statearr_28882_28981[(1)] = (61));

} else {
var statearr_28883_28982 = state_28806__$1;
(statearr_28883_28982[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (68))){
var inst_28736 = (state_28806[(7)]);
var inst_28777 = [new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869)];
var inst_28778 = [inst_28736];
var inst_28779 = cljs.core.PersistentHashMap.fromArrays(inst_28777,inst_28778);
var inst_28780 = syng_im.protocol.user_handler.invoke_user_handler.call(null,new cljs.core.Keyword(null,"delivery-failed","delivery-failed",2146295283),inst_28779);
var state_28806__$1 = state_28806;
var statearr_28884_28983 = state_28806__$1;
(statearr_28884_28983[(2)] = inst_28780);

(statearr_28884_28983[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (11))){
var state_28806__$1 = state_28806;
var statearr_28885_28984 = state_28806__$1;
(statearr_28885_28984[(2)] = false);

(statearr_28885_28984[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (9))){
var inst_28796 = (state_28806[(2)]);
var state_28806__$1 = state_28806;
var statearr_28886_28985 = state_28806__$1;
(statearr_28886_28985[(2)] = inst_28796);

(statearr_28886_28985[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (5))){
var inst_28623 = (state_28806[(14)]);
var inst_28622 = (state_28806[(18)]);
var inst_28625 = (inst_28623 < inst_28622);
var inst_28626 = inst_28625;
var state_28806__$1 = state_28806;
if(cljs.core.truth_(inst_28626)){
var statearr_28887_28986 = state_28806__$1;
(statearr_28887_28986[(1)] = (7));

} else {
var statearr_28888_28987 = state_28806__$1;
(statearr_28888_28987[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (14))){
var state_28806__$1 = state_28806;
var statearr_28889_28988 = state_28806__$1;
(statearr_28889_28988[(2)] = false);

(statearr_28889_28988[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (45))){
var inst_28730 = (state_28806[(2)]);
var state_28806__$1 = state_28806;
if(cljs.core.truth_(inst_28730)){
var statearr_28890_28989 = state_28806__$1;
(statearr_28890_28989[(1)] = (49));

} else {
var statearr_28891_28990 = state_28806__$1;
(statearr_28891_28990[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (53))){
var state_28806__$1 = state_28806;
var statearr_28892_28991 = state_28806__$1;
(statearr_28892_28991[(2)] = null);

(statearr_28892_28991[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (26))){
var state_28806__$1 = state_28806;
var statearr_28893_28992 = state_28806__$1;
(statearr_28893_28992[(2)] = false);

(statearr_28893_28992[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (16))){
var inst_28629 = (state_28806[(13)]);
var inst_28646 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28629);
var state_28806__$1 = state_28806;
var statearr_28894_28993 = state_28806__$1;
(statearr_28894_28993[(2)] = inst_28646);

(statearr_28894_28993[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (38))){
var state_28806__$1 = state_28806;
var statearr_28895_28994 = state_28806__$1;
(statearr_28895_28994[(2)] = null);

(statearr_28895_28994[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (30))){
var inst_28650 = (state_28806[(21)]);
var inst_28674 = (state_28806[(2)]);
var inst_28675 = cljs.core.get.call(null,inst_28674,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));
var inst_28676 = cljs.core.get.call(null,inst_28674,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var inst_28677 = syng_im.utils.logging.info.call(null,"Delivery-loop: Message",inst_28650,"is pending, retry-count=",inst_28675);
var inst_28678 = (inst_28675 < syng_im.protocol.defaults.max_retry_send_count);
var state_28806__$1 = (function (){var statearr_28896 = state_28806;
(statearr_28896[(35)] = inst_28677);

(statearr_28896[(22)] = inst_28676);

return statearr_28896;
})();
if(cljs.core.truth_(inst_28678)){
var statearr_28897_28995 = state_28806__$1;
(statearr_28897_28995[(1)] = (31));

} else {
var statearr_28898_28996 = state_28806__$1;
(statearr_28898_28996[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (10))){
var inst_28629 = (state_28806[(13)]);
var inst_28634 = inst_28629.cljs$lang$protocol_mask$partition0$;
var inst_28635 = (inst_28634 & (64));
var inst_28636 = inst_28629.cljs$core$ISeq$;
var inst_28637 = (inst_28635) || (inst_28636);
var state_28806__$1 = state_28806;
if(cljs.core.truth_(inst_28637)){
var statearr_28899_28997 = state_28806__$1;
(statearr_28899_28997[(1)] = (13));

} else {
var statearr_28900_28998 = state_28806__$1;
(statearr_28900_28998[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (18))){
var inst_28652 = (state_28806[(28)]);
var inst_28650 = (state_28806[(21)]);
var inst_28649 = (state_28806[(2)]);
var inst_28650__$1 = cljs.core.get.call(null,inst_28649,new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869));
var inst_28651 = syng_im.utils.logging.info.call(null,"Delivery-loop:","Checking delivery of msg-id",inst_28650__$1);
var inst_28652__$1 = syng_im.protocol.state.delivery.pending_QMARK_.call(null,inst_28650__$1);
var state_28806__$1 = (function (){var statearr_28901 = state_28806;
(statearr_28901[(28)] = inst_28652__$1);

(statearr_28901[(21)] = inst_28650__$1);

(statearr_28901[(36)] = inst_28651);

return statearr_28901;
})();
if(cljs.core.truth_(inst_28652__$1)){
var statearr_28902_28999 = state_28806__$1;
(statearr_28902_28999[(1)] = (19));

} else {
var statearr_28903_29000 = state_28806__$1;
(statearr_28903_29000[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (52))){
var inst_28738 = (state_28806[(11)]);
var inst_28742 = (inst_28738 == null);
var inst_28743 = cljs.core.not.call(null,inst_28742);
var state_28806__$1 = state_28806;
if(inst_28743){
var statearr_28904_29001 = state_28806__$1;
(statearr_28904_29001[(1)] = (55));

} else {
var statearr_28905_29002 = state_28806__$1;
(statearr_28905_29002[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (67))){
var state_28806__$1 = state_28806;
var statearr_28906_29003 = state_28806__$1;
(statearr_28906_29003[(2)] = null);

(statearr_28906_29003[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (42))){
var inst_28791 = (state_28806[(2)]);
var state_28806__$1 = state_28806;
var statearr_28907_29004 = state_28806__$1;
(statearr_28907_29004[(2)] = inst_28791);

(statearr_28907_29004[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (37))){
var inst_28705 = (state_28806[(15)]);
var inst_28707 = cljs.core.chunked_seq_QMARK_.call(null,inst_28705);
var state_28806__$1 = state_28806;
if(inst_28707){
var statearr_28908_29005 = state_28806__$1;
(statearr_28908_29005[(1)] = (40));

} else {
var statearr_28909_29006 = state_28806__$1;
(statearr_28909_29006[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (63))){
var inst_28736 = (state_28806[(7)]);
var inst_28760 = (state_28806[(2)]);
var inst_28761 = cljs.core.get.call(null,inst_28760,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));
var inst_28762 = cljs.core.get.call(null,inst_28760,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var inst_28763 = syng_im.utils.logging.info.call(null,"Delivery-loop: Message",inst_28736,"is pending, retry-count=",inst_28761);
var inst_28764 = (inst_28761 < syng_im.protocol.defaults.max_retry_send_count);
var state_28806__$1 = (function (){var statearr_28910 = state_28806;
(statearr_28910[(30)] = inst_28762);

(statearr_28910[(37)] = inst_28763);

return statearr_28910;
})();
if(cljs.core.truth_(inst_28764)){
var statearr_28911_29007 = state_28806__$1;
(statearr_28911_29007[(1)] = (64));

} else {
var statearr_28912_29008 = state_28806__$1;
(statearr_28912_29008[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (8))){
var inst_28620 = (state_28806[(16)]);
var inst_28705 = (state_28806[(15)]);
var inst_28705__$1 = cljs.core.seq.call(null,inst_28620);
var state_28806__$1 = (function (){var statearr_28913 = state_28806;
(statearr_28913[(15)] = inst_28705__$1);

return statearr_28913;
})();
if(inst_28705__$1){
var statearr_28914_29009 = state_28806__$1;
(statearr_28914_29009[(1)] = (37));

} else {
var statearr_28915_29010 = state_28806__$1;
(statearr_28915_29010[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (49))){
var inst_28715 = (state_28806[(19)]);
var inst_28732 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28715);
var state_28806__$1 = state_28806;
var statearr_28916_29011 = state_28806__$1;
(statearr_28916_29011[(2)] = inst_28732);

(statearr_28916_29011[(1)] = (51));


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
});})(c__20655__auto__))
;
return ((function (switch__20543__auto__,c__20655__auto__){
return (function() {
var syng_im$protocol$delivery$start_delivery_loop_$_state_machine__20544__auto__ = null;
var syng_im$protocol$delivery$start_delivery_loop_$_state_machine__20544__auto____0 = (function (){
var statearr_28920 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28920[(0)] = syng_im$protocol$delivery$start_delivery_loop_$_state_machine__20544__auto__);

(statearr_28920[(1)] = (1));

return statearr_28920;
});
var syng_im$protocol$delivery$start_delivery_loop_$_state_machine__20544__auto____1 = (function (state_28806){
while(true){
var ret_value__20545__auto__ = (function (){try{while(true){
var result__20546__auto__ = switch__20543__auto__.call(null,state_28806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20546__auto__;
}
break;
}
}catch (e28921){if((e28921 instanceof Object)){
var ex__20547__auto__ = e28921;
var statearr_28922_29012 = state_28806;
(statearr_28922_29012[(5)] = ex__20547__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29013 = state_28806;
state_28806 = G__29013;
continue;
} else {
return ret_value__20545__auto__;
}
break;
}
});
syng_im$protocol$delivery$start_delivery_loop_$_state_machine__20544__auto__ = function(state_28806){
switch(arguments.length){
case 0:
return syng_im$protocol$delivery$start_delivery_loop_$_state_machine__20544__auto____0.call(this);
case 1:
return syng_im$protocol$delivery$start_delivery_loop_$_state_machine__20544__auto____1.call(this,state_28806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
syng_im$protocol$delivery$start_delivery_loop_$_state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$0 = syng_im$protocol$delivery$start_delivery_loop_$_state_machine__20544__auto____0;
syng_im$protocol$delivery$start_delivery_loop_$_state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$1 = syng_im$protocol$delivery$start_delivery_loop_$_state_machine__20544__auto____1;
return syng_im$protocol$delivery$start_delivery_loop_$_state_machine__20544__auto__;
})()
;})(switch__20543__auto__,c__20655__auto__))
})();
var state__20657__auto__ = (function (){var statearr_28923 = f__20656__auto__.call(null);
(statearr_28923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20655__auto__);

return statearr_28923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20657__auto__);
});})(c__20655__auto__))
);

return c__20655__auto__;
});

//# sourceMappingURL=delivery.js.map