// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.models.chats');
goog.require('cljs.core');
goog.require('syng_im.constants');
goog.require('syng_im.utils.logging');
goog.require('syng_im.persistence.realm');
goog.require('syng_im.utils.random');
goog.require('syng_im.db');
goog.require('syng_im.persistence.realm_queries');
goog.require('clojure.string');
syng_im.models.chats.signal_chats_updated = (function syng_im$models$chats$signal_chats_updated(db){
return cljs.core.update_in.call(null,db,syng_im.db.updated_chats_signal_path,(function (current){
if(cljs.core.truth_(current)){
return (current + (1));
} else {
return (0);
}
}));
});
syng_im.models.chats.chats_updated_QMARK_ = (function syng_im$models$chats$chats_updated_QMARK_(db){
return cljs.core.get_in.call(null,db,syng_im.db.updated_chats_signal_path);
});
syng_im.models.chats.chat_name_from_contacts = (function syng_im$models$chats$chat_name_from_contacts(identities){
var chat_name = clojure.string.join.call(null,",",cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,(function (identity){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(syng_im.persistence.realm.single_cljs.call(null,syng_im.persistence.realm.get_by_field.call(null,new cljs.core.Keyword(null,"contacts","contacts",333503174),new cljs.core.Keyword(null,"whisper-identity","whisper-identity",607101529),identity)));
}),identities)));
if(clojure.string.blank_QMARK_.call(null,chat_name)){
return null;
} else {
return chat_name;
}
});
syng_im.models.chats.get_chat_name = (function syng_im$models$chats$get_chat_name(chat_id,identities){
var or__16855__auto__ = syng_im.models.chats.chat_name_from_contacts.call(null,identities);
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
} else {
return chat_id;
}
});
syng_im.models.chats.create_chat = (function syng_im$models$chats$create_chat(var_args){
var args44653 = [];
var len__17913__auto___44659 = arguments.length;
var i__17914__auto___44660 = (0);
while(true){
if((i__17914__auto___44660 < len__17913__auto___44659)){
args44653.push((arguments[i__17914__auto___44660]));

var G__44661 = (i__17914__auto___44660 + (1));
i__17914__auto___44660 = G__44661;
continue;
} else {
}
break;
}

var G__44655 = args44653.length;
switch (G__44655) {
case 4:
return syng_im.models.chats.create_chat.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return syng_im.models.chats.create_chat.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44653.length)].join('')));

}
});

syng_im.models.chats.create_chat.cljs$core$IFn$_invoke$arity$4 = (function (db,chat_id,identities,group_chat_QMARK_){
return syng_im.models.chats.create_chat.call(null,db,chat_id,identities,group_chat_QMARK_,null);
});

syng_im.models.chats.create_chat.cljs$core$IFn$_invoke$arity$5 = (function (db,chat_id,identities,group_chat_QMARK_,chat_name){
if(cljs.core.truth_(syng_im.persistence.realm.exists_QMARK_.call(null,new cljs.core.Keyword(null,"chats","chats",518672204),new cljs.core.Keyword(null,"chat-id","chat-id",1708052118),chat_id))){
return db;
} else {
var chat_name__$1 = (function (){var or__16855__auto__ = chat_name;
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
} else {
return syng_im.models.chats.get_chat_name.call(null,chat_id,identities);
}
})();
var _ = syng_im.utils.logging.debug.call(null,"creating chat",chat_name__$1);
syng_im.persistence.realm.write.call(null,((function (chat_name__$1,_){
return (function (){
var contacts = cljs.core.mapv.call(null,((function (chat_name__$1,_){
return (function (ident,p__44656){
var map__44657 = p__44656;
var map__44657__$1 = ((((!((map__44657 == null)))?((((map__44657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44657):map__44657);
var background = cljs.core.get.call(null,map__44657__$1,new cljs.core.Keyword(null,"background","background",-863952629));
var text = cljs.core.get.call(null,map__44657__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"identity","identity",1647396035),ident,new cljs.core.Keyword(null,"background-color","background-color",570434026),background,new cljs.core.Keyword(null,"text-color","text-color",1728708298),text], null);
});})(chat_name__$1,_))
,identities,syng_im.constants.group_chat_colors);
return syng_im.persistence.realm.create.call(null,new cljs.core.Keyword(null,"chats","chats",518672204),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chat-id","chat-id",1708052118),chat_id,new cljs.core.Keyword(null,"is-active","is-active",-1424968720),true,new cljs.core.Keyword(null,"name","name",1843675177),chat_name__$1,new cljs.core.Keyword(null,"group-chat","group-chat",-284559595),group_chat_QMARK_,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),syng_im.utils.random.timestamp.call(null),new cljs.core.Keyword(null,"contacts","contacts",333503174),contacts], null));
});})(chat_name__$1,_))
);

return syng_im.models.chats.signal_chats_updated.call(null,db);
}
});

syng_im.models.chats.create_chat.cljs$lang$maxFixedArity = 5;
syng_im.models.chats.chats_list = (function syng_im$models$chats$chats_list(){
return syng_im.persistence.realm.sorted.call(null,syng_im.persistence.realm.get_all.call(null,new cljs.core.Keyword(null,"chats","chats",518672204)),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"desc","desc",2093485764));
});
syng_im.models.chats.chat_by_id = (function syng_im$models$chats$chat_by_id(chat_id){
return syng_im.persistence.realm.list_to_array.call(null,syng_im.persistence.realm.single_cljs.call(null,syng_im.persistence.realm.get_by_field.call(null,new cljs.core.Keyword(null,"chats","chats",518672204),new cljs.core.Keyword(null,"chat-id","chat-id",1708052118),chat_id)),new cljs.core.Keyword(null,"contacts","contacts",333503174));
});
syng_im.models.chats.chat_add_participants = (function syng_im$models$chats$chat_add_participants(chat_id,identities){
return syng_im.persistence.realm.write.call(null,(function (){
var contacts = (syng_im.persistence.realm.single.call(null,syng_im.persistence.realm.get_by_field.call(null,new cljs.core.Keyword(null,"chats","chats",518672204),new cljs.core.Keyword(null,"chat-id","chat-id",1708052118),chat_id))["contacts"]);
var colors_in_use = cljs.core.set.call(null,contacts.map(((function (contacts){
return (function (object,index,collection){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-color","text-color",1728708298),(object["text-color"]),new cljs.core.Keyword(null,"background-color","background-color",570434026),(object["background-color"])], null);
});})(contacts))
));
var colors = cljs.core.filter.call(null,((function (contacts,colors_in_use){
return (function (color){
return !(cljs.core.contains_QMARK_.call(null,colors_in_use,color));
});})(contacts,colors_in_use))
,syng_im.constants.group_chat_colors);
var new_contacts = cljs.core.mapv.call(null,((function (contacts,colors_in_use,colors){
return (function (ident,p__44670){
var map__44671 = p__44670;
var map__44671__$1 = ((((!((map__44671 == null)))?((((map__44671.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44671.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44671):map__44671);
var background = cljs.core.get.call(null,map__44671__$1,new cljs.core.Keyword(null,"background","background",-863952629));
var text = cljs.core.get.call(null,map__44671__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"identity","identity",1647396035),ident,new cljs.core.Keyword(null,"background-color","background-color",570434026),background,new cljs.core.Keyword(null,"text-color","text-color",1728708298),text], null);
});})(contacts,colors_in_use,colors))
,identities,colors);
var seq__44673 = cljs.core.seq.call(null,new_contacts);
var chunk__44674 = null;
var count__44675 = (0);
var i__44676 = (0);
while(true){
if((i__44676 < count__44675)){
var contact = cljs.core._nth.call(null,chunk__44674,i__44676);
contacts.push(cljs.core.clj__GT_js.call(null,contact));

var G__44677 = seq__44673;
var G__44678 = chunk__44674;
var G__44679 = count__44675;
var G__44680 = (i__44676 + (1));
seq__44673 = G__44677;
chunk__44674 = G__44678;
count__44675 = G__44679;
i__44676 = G__44680;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__44673);
if(temp__4425__auto__){
var seq__44673__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44673__$1)){
var c__17658__auto__ = cljs.core.chunk_first.call(null,seq__44673__$1);
var G__44681 = cljs.core.chunk_rest.call(null,seq__44673__$1);
var G__44682 = c__17658__auto__;
var G__44683 = cljs.core.count.call(null,c__17658__auto__);
var G__44684 = (0);
seq__44673 = G__44681;
chunk__44674 = G__44682;
count__44675 = G__44683;
i__44676 = G__44684;
continue;
} else {
var contact = cljs.core.first.call(null,seq__44673__$1);
contacts.push(cljs.core.clj__GT_js.call(null,contact));

var G__44685 = cljs.core.next.call(null,seq__44673__$1);
var G__44686 = null;
var G__44687 = (0);
var G__44688 = (0);
seq__44673 = G__44685;
chunk__44674 = G__44686;
count__44675 = G__44687;
i__44676 = G__44688;
continue;
}
} else {
return null;
}
}
break;
}
}));
});
syng_im.models.chats.chat_remove_participants = (function syng_im$models$chats$chat_remove_participants(chat_id,identities){
return syng_im.persistence.realm.write.call(null,(function (){
var query = syng_im.persistence.realm_queries.include_query.call(null,new cljs.core.Keyword(null,"identity","identity",1647396035),identities);
var chat = syng_im.persistence.realm.single.call(null,syng_im.persistence.realm.get_by_field.call(null,new cljs.core.Keyword(null,"chats","chats",518672204),new cljs.core.Keyword(null,"chat-id","chat-id",1708052118),chat_id));
return syng_im.persistence.realm.delete$.call(null,syng_im.persistence.realm.filtered.call(null,(chat["contacts"]),query));
}));
});
syng_im.models.chats.active_group_chats = (function syng_im$models$chats$active_group_chats(){
var results = syng_im.persistence.realm.filtered.call(null,syng_im.persistence.realm.get_all.call(null,new cljs.core.Keyword(null,"chats","chats",518672204)),"group-chat = true && is-active = true");
return cljs.core.js__GT_clj.call(null,results.map(((function (results){
return (function (object,index,collection){
return (object["chat-id"]);
});})(results))
));
});
syng_im.models.chats.set_chat_active = (function syng_im$models$chats$set_chat_active(chat_id,active_QMARK_){
return syng_im.persistence.realm.write.call(null,(function (){
return (syng_im.persistence.realm.single.call(null,syng_im.persistence.realm.get_by_field.call(null,new cljs.core.Keyword(null,"chats","chats",518672204),new cljs.core.Keyword(null,"chat-id","chat-id",1708052118),chat_id))["is-active"] = active_QMARK_);
}));
});

//# sourceMappingURL=chats.js.map