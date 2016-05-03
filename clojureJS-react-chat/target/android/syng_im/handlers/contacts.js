// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.handlers.contacts');
goog.require('cljs.core');
goog.require('syng_im.utils.logging');
goog.require('cljs.core.async');
goog.require('syng_im.utils.phone_number');
goog.require('syng_im.models.contacts');
goog.require('syng_im.utils.utils');
goog.require('clojure.string');
goog.require('syng_im.utils.crypt');
goog.require('re_frame.core');
syng_im.handlers.contacts.get_contact_name = (function syng_im$handlers$contacts$get_contact_name(phone_contact){
return clojure.string.join.call(null," ",cljs.core.remove.call(null,clojure.string.blank_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"givenName","givenName",84890966).cljs$core$IFn$_invoke$arity$1(phone_contact),new cljs.core.Keyword(null,"middleName","middleName",-571039711).cljs$core$IFn$_invoke$arity$1(phone_contact),new cljs.core.Keyword(null,"familyName","familyName",1608126223).cljs$core$IFn$_invoke$arity$1(phone_contact)], null)));
});
syng_im.handlers.contacts.to_syng_contacts = (function syng_im$handlers$contacts$to_syng_contacts(contacts_by_hash,data){
return cljs.core.map.call(null,(function (server_contact){
var number_info = cljs.core.get.call(null,contacts_by_hash,new cljs.core.Keyword(null,"phone-number-hash","phone-number-hash",-295710234).cljs$core$IFn$_invoke$arity$1(server_contact));
var phone_contact = new cljs.core.Keyword(null,"contact","contact",609093372).cljs$core$IFn$_invoke$arity$1(number_info);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"phone-number","phone-number",453925028),new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(number_info),new cljs.core.Keyword(null,"whisper-identity","whisper-identity",607101529),new cljs.core.Keyword(null,"whisper-identity","whisper-identity",607101529).cljs$core$IFn$_invoke$arity$1(server_contact),new cljs.core.Keyword(null,"name","name",1843675177),syng_im.handlers.contacts.get_contact_name.call(null,phone_contact),new cljs.core.Keyword(null,"photo-path","photo-path",1024562482),new cljs.core.Keyword(null,"photo-path","photo-path",1024562482).cljs$core$IFn$_invoke$arity$1(phone_contact)], null);
}),cljs.core.js__GT_clj.call(null,new cljs.core.Keyword(null,"contacts","contacts",333503174).cljs$core$IFn$_invoke$arity$1(data)));
});
syng_im.handlers.contacts.get_contacts_by_hash = (function syng_im$handlers$contacts$get_contacts_by_hash(contacts){
var numbers_info = cljs.core.reduce.call(null,(function (numbers,contact){
return cljs.core.into.call(null,numbers,cljs.core.map.call(null,(function (c){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"number","number",1570378438),syng_im.utils.phone_number.format_phone_number.call(null,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(c)),new cljs.core.Keyword(null,"contact","contact",609093372),contact], null);
}),new cljs.core.Keyword(null,"phone-numbers","phone-numbers",538985942).cljs$core$IFn$_invoke$arity$1(contact)));
}),cljs.core.List.EMPTY,contacts);
return cljs.core.reduce.call(null,((function (numbers_info){
return (function (m,number_info){
var number = new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(number_info);
var hash = syng_im.utils.crypt.encrypt.call(null,number);
return cljs.core.assoc.call(null,m,hash,number_info);
});})(numbers_info))
,cljs.core.PersistentArrayMap.EMPTY,numbers_info);
});
syng_im.handlers.contacts.request_syng_contacts = (function syng_im$handlers$contacts$request_syng_contacts(contacts){
var contacts_by_hash = syng_im.handlers.contacts.get_contacts_by_hash.call(null,contacts);
var data = cljs.core.keys.call(null,contacts_by_hash);
var ch = cljs.core.async.chan.call(null);
syng_im.utils.utils.http_post.call(null,"get-contacts",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phone-number-hashes","phone-number-hashes",1506952924),data], null),((function (contacts_by_hash,data,ch){
return (function (data__$1){
return cljs.core.async.put_BANG_.call(null,ch,syng_im.handlers.contacts.to_syng_contacts.call(null,contacts_by_hash,data__$1));
});})(contacts_by_hash,data,ch))
);

return ch;
});
syng_im.handlers.contacts.sync_contacts = (function syng_im$handlers$contacts$sync_contacts(handler){
var c__20655__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20655__auto__){
return (function (){
var f__20656__auto__ = (function (){var switch__20543__auto__ = ((function (c__20655__auto__){
return (function (state_23645){
var state_val_23646 = (state_23645[(1)]);
if((state_val_23646 === (1))){
var inst_23625 = syng_im.models.contacts.load_phone_contacts.call(null);
var state_23645__$1 = state_23645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23645__$1,(2),inst_23625);
} else {
if((state_val_23646 === (2))){
var inst_23628 = (state_23645[(7)]);
var inst_23627 = (state_23645[(8)]);
var inst_23627__$1 = (state_23645[(2)]);
var inst_23628__$1 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_23627__$1);
var state_23645__$1 = (function (){var statearr_23647 = state_23645;
(statearr_23647[(7)] = inst_23628__$1);

(statearr_23647[(8)] = inst_23627__$1);

return statearr_23647;
})();
if(cljs.core.truth_(inst_23628__$1)){
var statearr_23648_23660 = state_23645__$1;
(statearr_23648_23660[(1)] = (3));

} else {
var statearr_23649_23661 = state_23645__$1;
(statearr_23649_23661[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23646 === (3))){
var inst_23628 = (state_23645[(7)]);
var inst_23630 = syng_im.utils.utils.on_error.call(null,inst_23628);
var state_23645__$1 = state_23645;
var statearr_23650_23662 = state_23645__$1;
(statearr_23650_23662[(2)] = inst_23630);

(statearr_23650_23662[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23646 === (4))){
var inst_23627 = (state_23645[(8)]);
var inst_23632 = new cljs.core.Keyword(null,"contacts","contacts",333503174).cljs$core$IFn$_invoke$arity$1(inst_23627);
var inst_23633 = syng_im.handlers.contacts.request_syng_contacts.call(null,inst_23632);
var state_23645__$1 = state_23645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23645__$1,(6),inst_23633);
} else {
if((state_val_23646 === (5))){
var inst_23643 = (state_23645[(2)]);
var state_23645__$1 = state_23645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23645__$1,inst_23643);
} else {
if((state_val_23646 === (6))){
var inst_23635 = (state_23645[(2)]);
var inst_23636 = syng_im.models.contacts.save_syng_contacts.call(null,inst_23635);
var inst_23637 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23638 = [new cljs.core.Keyword(null,"load-syng-contacts","load-syng-contacts",-950529481)];
var inst_23639 = (new cljs.core.PersistentVector(null,1,(5),inst_23637,inst_23638,null));
var inst_23640 = re_frame.core.dispatch.call(null,inst_23639);
var inst_23641 = handler.call(null);
var state_23645__$1 = (function (){var statearr_23651 = state_23645;
(statearr_23651[(9)] = inst_23640);

(statearr_23651[(10)] = inst_23636);

return statearr_23651;
})();
var statearr_23652_23663 = state_23645__$1;
(statearr_23652_23663[(2)] = inst_23641);

(statearr_23652_23663[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
var syng_im$handlers$contacts$sync_contacts_$_state_machine__20544__auto__ = null;
var syng_im$handlers$contacts$sync_contacts_$_state_machine__20544__auto____0 = (function (){
var statearr_23656 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23656[(0)] = syng_im$handlers$contacts$sync_contacts_$_state_machine__20544__auto__);

(statearr_23656[(1)] = (1));

return statearr_23656;
});
var syng_im$handlers$contacts$sync_contacts_$_state_machine__20544__auto____1 = (function (state_23645){
while(true){
var ret_value__20545__auto__ = (function (){try{while(true){
var result__20546__auto__ = switch__20543__auto__.call(null,state_23645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20546__auto__;
}
break;
}
}catch (e23657){if((e23657 instanceof Object)){
var ex__20547__auto__ = e23657;
var statearr_23658_23664 = state_23645;
(statearr_23658_23664[(5)] = ex__20547__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23665 = state_23645;
state_23645 = G__23665;
continue;
} else {
return ret_value__20545__auto__;
}
break;
}
});
syng_im$handlers$contacts$sync_contacts_$_state_machine__20544__auto__ = function(state_23645){
switch(arguments.length){
case 0:
return syng_im$handlers$contacts$sync_contacts_$_state_machine__20544__auto____0.call(this);
case 1:
return syng_im$handlers$contacts$sync_contacts_$_state_machine__20544__auto____1.call(this,state_23645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
syng_im$handlers$contacts$sync_contacts_$_state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$0 = syng_im$handlers$contacts$sync_contacts_$_state_machine__20544__auto____0;
syng_im$handlers$contacts$sync_contacts_$_state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$1 = syng_im$handlers$contacts$sync_contacts_$_state_machine__20544__auto____1;
return syng_im$handlers$contacts$sync_contacts_$_state_machine__20544__auto__;
})()
;})(switch__20543__auto__,c__20655__auto__))
})();
var state__20657__auto__ = (function (){var statearr_23659 = f__20656__auto__.call(null);
(statearr_23659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20655__auto__);

return statearr_23659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20657__auto__);
});})(c__20655__auto__))
);

return c__20655__auto__;
});

//# sourceMappingURL=contacts.js.map