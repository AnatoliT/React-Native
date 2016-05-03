// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.persistence.realm');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('syng_im.utils.logging');
goog.require('syng_im.utils.types');
window.Realm = require("realm");
syng_im.persistence.realm.opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"contacts","contacts",333503174),new cljs.core.Keyword(null,"primaryKey","primaryKey",1434733226),new cljs.core.Keyword(null,"whisper-identity","whisper-identity",607101529),new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"phone-number","phone-number",453925028),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"whisper-identity","whisper-identity",607101529),"string",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"photo-path","photo-path",1024562482),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"optinal","optinal",434525591),true], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"kv-store","kv-store",869032614),new cljs.core.Keyword(null,"primaryKey","primaryKey",1434733226),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"string",new cljs.core.Keyword(null,"value","value",305978217),"string"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"msgs","msgs",-1176489773),new cljs.core.Keyword(null,"primaryKey","primaryKey",1434733226),new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869),new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"delivery-status","delivery-status",-2013922127),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"chat-id","chat-id",1708052118),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"outgoing","outgoing",1124752575),new cljs.core.Keyword(null,"to","to",192099007)],["string","string",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),"string",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"indexed","indexed",390758624),true], null),"string","int","bool",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"optional","optional",2053951509),true], null)])], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"chat-contact","chat-contact",-1218191357),new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"identity","identity",1647396035),"string",new cljs.core.Keyword(null,"text-color","text-color",1728708298),"string",new cljs.core.Keyword(null,"background-color","background-color",570434026),"string"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"chats","chats",518672204),new cljs.core.Keyword(null,"primaryKey","primaryKey",1434733226),new cljs.core.Keyword(null,"chat-id","chat-id",1708052118),new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chat-id","chat-id",1708052118),"string",new cljs.core.Keyword(null,"name","name",1843675177),"string",new cljs.core.Keyword(null,"group-chat","group-chat",-284559595),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"bool",new cljs.core.Keyword(null,"indexed","indexed",390758624),true], null),new cljs.core.Keyword(null,"is-active","is-active",-1424968720),"bool",new cljs.core.Keyword(null,"timestamp","timestamp",579478971),"int",new cljs.core.Keyword(null,"contacts","contacts",333503174),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"list",new cljs.core.Keyword(null,"objectType","objectType",93662064),"chat-contact"], null)], null)], null)], null)], null);
syng_im.persistence.realm.realm = (new Realm(cljs.core.clj__GT_js.call(null,syng_im.persistence.realm.opts)));
syng_im.persistence.realm.schema_by_name = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.call(null,(function (p__23552){
var map__23553 = p__23552;
var map__23553__$1 = ((((!((map__23553 == null)))?((((map__23553.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23553.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23553):map__23553);
var schema = map__23553__$1;
var name = cljs.core.get.call(null,map__23553__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,schema], null);
}),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(syng_im.persistence.realm.opts)));
syng_im.persistence.realm.field_type = (function syng_im$persistence$realm$field_type(schema_name,field){
var field_def = cljs.core.get_in.call(null,syng_im.persistence.realm.schema_by_name,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema_name,new cljs.core.Keyword(null,"properties","properties",685819552),field], null));
if(cljs.core.map_QMARK_.call(null,field_def)){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(field_def);
} else {
return field_def;
}
});
syng_im.persistence.realm.write = (function syng_im$persistence$realm$write(f){
return syng_im.persistence.realm.realm.write(f);
});
syng_im.persistence.realm.create = (function syng_im$persistence$realm$create(var_args){
var args23555 = [];
var len__17913__auto___23558 = arguments.length;
var i__17914__auto___23559 = (0);
while(true){
if((i__17914__auto___23559 < len__17913__auto___23558)){
args23555.push((arguments[i__17914__auto___23559]));

var G__23560 = (i__17914__auto___23559 + (1));
i__17914__auto___23559 = G__23560;
continue;
} else {
}
break;
}

var G__23557 = args23555.length;
switch (G__23557) {
case 2:
return syng_im.persistence.realm.create.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return syng_im.persistence.realm.create.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23555.length)].join('')));

}
});

syng_im.persistence.realm.create.cljs$core$IFn$_invoke$arity$2 = (function (schema_name,obj){
return syng_im.persistence.realm.create.call(null,schema_name,obj,false);
});

syng_im.persistence.realm.create.cljs$core$IFn$_invoke$arity$3 = (function (schema_name,obj,update_QMARK_){
return syng_im.persistence.realm.realm.create(syng_im.utils.types.to_string.call(null,schema_name),cljs.core.clj__GT_js.call(null,obj),update_QMARK_);
});

syng_im.persistence.realm.create.cljs$lang$maxFixedArity = 3;
if(typeof syng_im.persistence.realm.to_query !== 'undefined'){
} else {
syng_im.persistence.realm.to_query = (function (){var method_table__17768__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17769__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17770__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17771__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17772__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"syng-im.persistence.realm","to-query"),((function (method_table__17768__auto__,prefer_table__17769__auto__,method_cache__17770__auto__,cached_hierarchy__17771__auto__,hierarchy__17772__auto__){
return (function (schema_name,operator,field,value){
return operator;
});})(method_table__17768__auto__,prefer_table__17769__auto__,method_cache__17770__auto__,cached_hierarchy__17771__auto__,hierarchy__17772__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17772__auto__,method_table__17768__auto__,prefer_table__17769__auto__,method_cache__17770__auto__,cached_hierarchy__17771__auto__));
})();
}
cljs.core._add_method.call(null,syng_im.persistence.realm.to_query,new cljs.core.Keyword(null,"eq","eq",-618539067),(function (schema_name,operator,field,value){
var value__$1 = syng_im.utils.types.to_string.call(null,value);
var query = [cljs.core.str(cljs.core.name.call(null,field)),cljs.core.str("="),cljs.core.str(((cljs.core._EQ_.call(null,"string",syng_im.persistence.realm.field_type.call(null,schema_name,field)))?[cljs.core.str("\""),cljs.core.str(value__$1),cljs.core.str("\"")].join(''):value__$1))].join('');
return query;
}));
syng_im.persistence.realm.get_by_field = (function syng_im$persistence$realm$get_by_field(schema_name,field,value){
var q = syng_im.persistence.realm.to_query.call(null,schema_name,new cljs.core.Keyword(null,"eq","eq",-618539067),field,value);
return syng_im.persistence.realm.realm.objects(cljs.core.name.call(null,schema_name)).filtered(q);
});
syng_im.persistence.realm.get_all = (function syng_im$persistence$realm$get_all(schema_name){
return syng_im.persistence.realm.realm.objects(syng_im.utils.types.to_string.call(null,schema_name));
});
syng_im.persistence.realm.sorted = (function syng_im$persistence$realm$sorted(results,field_name,order){
return results.sorted(syng_im.utils.types.to_string.call(null,field_name),((cljs.core._EQ_.call(null,order,new cljs.core.Keyword(null,"asc","asc",356854569)))?false:true));
});
syng_im.persistence.realm.filtered = (function syng_im$persistence$realm$filtered(results,filter_query){
return results.filtered(filter_query);
});
syng_im.persistence.realm.page = (function syng_im$persistence$realm$page(results,from,to){
return Array.prototype.slice.call(results,from,to);
});
syng_im.persistence.realm.single = (function syng_im$persistence$realm$single(result){
return (result[(0)]);
});
syng_im.persistence.realm.single_cljs = (function syng_im$persistence$realm$single_cljs(result){
var G__23563 = (result[(0)]);
var G__23563__$1 = (((G__23563 == null))?null:cljs.core.js__GT_clj.call(null,G__23563,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
return G__23563__$1;
});
syng_im.persistence.realm.list_to_array = (function syng_im$persistence$realm$list_to_array(record,list_field){
return cljs.core.update_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_field], null),cljs.core.comp.call(null,cljs.core.vec,cljs.core.vals));
});
syng_im.persistence.realm.decode_value = (function syng_im$persistence$realm$decode_value(p__23564){
var map__23567 = p__23564;
var map__23567__$1 = ((((!((map__23567 == null)))?((((map__23567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23567):map__23567);
var key = cljs.core.get.call(null,map__23567__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.call(null,map__23567__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.reader.read_string.call(null,value);
});
syng_im.persistence.realm.delete$ = (function syng_im$persistence$realm$delete(obj){
return syng_im.persistence.realm.realm.delete(obj);
});
syng_im.persistence.realm.exists_QMARK_ = (function syng_im$persistence$realm$exists_QMARK_(schema_name,field,value){
return (syng_im.persistence.realm.get_by_field.call(null,schema_name,field,value).length > (0));
});
syng_im.persistence.realm.get_count = (function syng_im$persistence$realm$get_count(objs){
return objs.length;
});
syng_im.persistence.realm.get_list = (function syng_im$persistence$realm$get_list(schema_name){
return cljs.core.vals.call(null,cljs.core.js__GT_clj.call(null,syng_im.persistence.realm.realm.objects(syng_im.utils.types.to_string.call(null,schema_name)),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});

//# sourceMappingURL=realm.js.map