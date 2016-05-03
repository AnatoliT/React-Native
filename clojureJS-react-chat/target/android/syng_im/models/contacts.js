// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.models.contacts');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('syng_im.persistence.realm');
goog.require('syng_im.utils.utils');
goog.require('clojure.string');
goog.require('syng_im.persistence.realm_queries');
goog.require('re_frame.core');
syng_im.models.contacts.fake_phone_contacts_QMARK_ = false;
syng_im.models.contacts.fake_contacts_QMARK_ = false;
syng_im.models.contacts.react_native_contacts = require("react-native-contacts");
syng_im.models.contacts.generate_contact = (function syng_im$models$contacts$generate_contact(n){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str("Contact "),cljs.core.str(n)].join(''),new cljs.core.Keyword(null,"photo-path","photo-path",1024562482),"",new cljs.core.Keyword(null,"phone-numbers","phone-numbers",538985942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"mobile",new cljs.core.Keyword(null,"number","number",1570378438),cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(7),n))], null)], null),new cljs.core.Keyword(null,"delivery-status","delivery-status",-2013922127),(((cljs.core.rand.call(null) < 0.5))?new cljs.core.Keyword(null,"delivered","delivered",474109932):new cljs.core.Keyword(null,"seen","seen",-518999789)),new cljs.core.Keyword(null,"datetime","datetime",494675702),"15:30",new cljs.core.Keyword(null,"new-messages-count","new-messages-count",104345306),cljs.core.rand_int.call(null,(3)),new cljs.core.Keyword(null,"online","online",868574801),(cljs.core.rand.call(null) < 0.5)], null);
});
syng_im.models.contacts.generate_contacts = (function syng_im$models$contacts$generate_contacts(n){
return cljs.core.map.call(null,syng_im.models.contacts.generate_contact,cljs.core.range.call(null,(1),(n + (1))));
});
syng_im.models.contacts.load_phone_contacts = (function syng_im$models$contacts$load_phone_contacts(){
var ch = cljs.core.async.chan.call(null);
if(cljs.core.truth_(syng_im.models.contacts.fake_phone_contacts_QMARK_)){
cljs.core.async.put_BANG_.call(null,ch,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"contacts","contacts",333503174),syng_im.models.contacts.generate_contacts.call(null,(10))], null));
} else {
syng_im.models.contacts.react_native_contacts.getAll(((function (ch){
return (function (error,raw_contacts){
return cljs.core.async.put_BANG_.call(null,ch,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),error,new cljs.core.Keyword(null,"contacts","contacts",333503174),((cljs.core.not.call(null,error))?(function (){
syng_im.utils.utils.log.call(null,raw_contacts);

return cljs.core.map.call(null,((function (ch){
return (function (contact){
return cljs.core.merge.call(null,contact,syng_im.models.contacts.generate_contact.call(null,(1)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"givenName","givenName",84890966).cljs$core$IFn$_invoke$arity$1(contact),new cljs.core.Keyword(null,"photo-path","photo-path",1024562482),new cljs.core.Keyword(null,"thumbnailPath","thumbnailPath",8170232).cljs$core$IFn$_invoke$arity$1(contact),new cljs.core.Keyword(null,"phone-numbers","phone-numbers",538985942),new cljs.core.Keyword(null,"phoneNumbers","phoneNumbers",-762860085).cljs$core$IFn$_invoke$arity$1(contact)], null));
});})(ch))
,cljs.core.js__GT_clj.call(null,raw_contacts,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
})()
:null)], null));
});})(ch))
);
}

return ch;
});
syng_im.models.contacts.get_contacts = (function syng_im$models$contacts$get_contacts(){
if(cljs.core.truth_(syng_im.models.contacts.fake_contacts_QMARK_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"phone-number","phone-number",453925028),"123",new cljs.core.Keyword(null,"whisper-identity","whisper-identity",607101529),"abc",new cljs.core.Keyword(null,"name","name",1843675177),"fake",new cljs.core.Keyword(null,"photo-path","photo-path",1024562482),""], null)], null);
} else {
return syng_im.persistence.realm.get_list.call(null,new cljs.core.Keyword(null,"contacts","contacts",333503174));
}
});
syng_im.models.contacts.load_syng_contacts = (function syng_im$models$contacts$load_syng_contacts(db){
var contacts = cljs.core.map.call(null,(function (contact){
return cljs.core.merge.call(null,contact,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"delivery-status","delivery-status",-2013922127),(((cljs.core.rand.call(null) < 0.5))?new cljs.core.Keyword(null,"delivered","delivered",474109932):new cljs.core.Keyword(null,"seen","seen",-518999789)),new cljs.core.Keyword(null,"datetime","datetime",494675702),"15:30",new cljs.core.Keyword(null,"new-messages-count","new-messages-count",104345306),cljs.core.rand_int.call(null,(3)),new cljs.core.Keyword(null,"online","online",868574801),(cljs.core.rand.call(null) < 0.5)], null));
}),syng_im.models.contacts.get_contacts.call(null));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"contacts","contacts",333503174),contacts);
});
syng_im.models.contacts.create_contact = (function syng_im$models$contacts$create_contact(p__23573){
var map__23576 = p__23573;
var map__23576__$1 = ((((!((map__23576 == null)))?((((map__23576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23576):map__23576);
var phone_number = cljs.core.get.call(null,map__23576__$1,new cljs.core.Keyword(null,"phone-number","phone-number",453925028));
var whisper_identity = cljs.core.get.call(null,map__23576__$1,new cljs.core.Keyword(null,"whisper-identity","whisper-identity",607101529));
var name = cljs.core.get.call(null,map__23576__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var photo_path = cljs.core.get.call(null,map__23576__$1,new cljs.core.Keyword(null,"photo-path","photo-path",1024562482));
return syng_im.persistence.realm.create.call(null,new cljs.core.Keyword(null,"contacts","contacts",333503174),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"phone-number","phone-number",453925028),phone_number,new cljs.core.Keyword(null,"whisper-identity","whisper-identity",607101529),whisper_identity,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var or__16855__auto__ = name;
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"photo-path","photo-path",1024562482),(function (){var or__16855__auto__ = photo_path;
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
} else {
return "";
}
})()], null));
});
syng_im.models.contacts.contact_exist_QMARK_ = (function syng_im$models$contacts$contact_exist_QMARK_(contacts,contact){
return cljs.core.some.call(null,(function (p1__23578_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"phone-number","phone-number",453925028).cljs$core$IFn$_invoke$arity$1(contact),new cljs.core.Keyword(null,"phone-number","phone-number",453925028).cljs$core$IFn$_invoke$arity$1(p1__23578_SHARP_));
}),contacts);
});
syng_im.models.contacts.add_contacts = (function syng_im$models$contacts$add_contacts(contacts){
return syng_im.persistence.realm.write.call(null,(function (){
var db_contacts = syng_im.models.contacts.get_contacts.call(null);
return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (db_contacts){
return (function (contact){
if(cljs.core.not.call(null,syng_im.models.contacts.contact_exist_QMARK_.call(null,db_contacts,contact))){
return syng_im.models.contacts.create_contact.call(null,contact);
} else {
return null;
}
});})(db_contacts))
,contacts));
}));
});
syng_im.models.contacts.save_syng_contacts = (function syng_im$models$contacts$save_syng_contacts(syng_contacts){
return syng_im.models.contacts.add_contacts.call(null,syng_contacts);
});
syng_im.models.contacts.contacts_list = (function syng_im$models$contacts$contacts_list(){
return syng_im.persistence.realm.sorted.call(null,syng_im.persistence.realm.get_all.call(null,new cljs.core.Keyword(null,"contacts","contacts",333503174)),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"asc","asc",356854569));
});
syng_im.models.contacts.contacts_list_exclude = (function syng_im$models$contacts$contacts_list_exclude(exclude_idents){
var query = syng_im.persistence.realm_queries.exclude_query.call(null,new cljs.core.Keyword(null,"whisper-identity","whisper-identity",607101529),exclude_idents);
return syng_im.persistence.realm.sorted.call(null,syng_im.persistence.realm.filtered.call(null,syng_im.persistence.realm.get_all.call(null,new cljs.core.Keyword(null,"contacts","contacts",333503174)),query),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"asc","asc",356854569));
});
syng_im.models.contacts.contacts_list_include = (function syng_im$models$contacts$contacts_list_include(include_indents){
var query = syng_im.persistence.realm_queries.include_query.call(null,new cljs.core.Keyword(null,"whisper-identity","whisper-identity",607101529),include_indents);
return syng_im.persistence.realm.sorted.call(null,syng_im.persistence.realm.filtered.call(null,syng_im.persistence.realm.get_all.call(null,new cljs.core.Keyword(null,"contacts","contacts",333503174)),query),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"asc","asc",356854569));
});
syng_im.models.contacts.contact_by_identity = (function syng_im$models$contacts$contact_by_identity(identity){
return syng_im.persistence.realm.single_cljs.call(null,syng_im.persistence.realm.get_by_field.call(null,new cljs.core.Keyword(null,"contacts","contacts",333503174),new cljs.core.Keyword(null,"whisper-identity","whisper-identity",607101529),identity));
});

//# sourceMappingURL=contacts.js.map