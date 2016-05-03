// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.persistence.simple_kv_store');
goog.require('cljs.core');
goog.require('syng_im.protocol.state.storage');
goog.require('syng_im.persistence.realm');
goog.require('syng_im.utils.types');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {syng_im.protocol.state.storage.Storage}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
syng_im.persistence.simple_kv_store.SimpleKvStore = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
syng_im.persistence.simple_kv_store.SimpleKvStore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17469__auto__,k__17470__auto__){
var self__ = this;
var this__17469__auto____$1 = this;
return cljs.core._lookup.call(null,this__17469__auto____$1,k__17470__auto__,null);
});

syng_im.persistence.simple_kv_store.SimpleKvStore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17471__auto__,k28058,else__17472__auto__){
var self__ = this;
var this__17471__auto____$1 = this;
var G__28060 = k28058;
switch (G__28060) {
default:
return cljs.core.get.call(null,self__.__extmap,k28058,else__17472__auto__);

}
});

syng_im.persistence.simple_kv_store.SimpleKvStore.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17483__auto__,writer__17484__auto__,opts__17485__auto__){
var self__ = this;
var this__17483__auto____$1 = this;
var pr_pair__17486__auto__ = ((function (this__17483__auto____$1){
return (function (keyval__17487__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,cljs.core.pr_writer,""," ","",opts__17485__auto__,keyval__17487__auto__);
});})(this__17483__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,pr_pair__17486__auto__,"#syng-im.persistence.simple-kv-store.SimpleKvStore{",", ","}",opts__17485__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

syng_im.persistence.simple_kv_store.SimpleKvStore.prototype.cljs$core$IIterable$ = true;

syng_im.persistence.simple_kv_store.SimpleKvStore.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28057){
var self__ = this;
var G__28057__$1 = this;
return (new cljs.core.RecordIter((0),G__28057__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

syng_im.persistence.simple_kv_store.SimpleKvStore.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17467__auto__){
var self__ = this;
var this__17467__auto____$1 = this;
return self__.__meta;
});

syng_im.persistence.simple_kv_store.SimpleKvStore.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17463__auto__){
var self__ = this;
var this__17463__auto____$1 = this;
return (new syng_im.persistence.simple_kv_store.SimpleKvStore(self__.__meta,self__.__extmap,self__.__hash));
});

syng_im.persistence.simple_kv_store.SimpleKvStore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17473__auto__){
var self__ = this;
var this__17473__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

syng_im.persistence.simple_kv_store.SimpleKvStore.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17464__auto__){
var self__ = this;
var this__17464__auto____$1 = this;
var h__17290__auto__ = self__.__hash;
if(!((h__17290__auto__ == null))){
return h__17290__auto__;
} else {
var h__17290__auto____$1 = cljs.core.hash_imap.call(null,this__17464__auto____$1);
self__.__hash = h__17290__auto____$1;

return h__17290__auto____$1;
}
});

syng_im.persistence.simple_kv_store.SimpleKvStore.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17465__auto__,other__17466__auto__){
var self__ = this;
var this__17465__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16843__auto__ = other__17466__auto__;
if(cljs.core.truth_(and__16843__auto__)){
var and__16843__auto____$1 = (this__17465__auto____$1.constructor === other__17466__auto__.constructor);
if(and__16843__auto____$1){
return cljs.core.equiv_map.call(null,this__17465__auto____$1,other__17466__auto__);
} else {
return and__16843__auto____$1;
}
} else {
return and__16843__auto__;
}
})())){
return true;
} else {
return false;
}
});

syng_im.persistence.simple_kv_store.SimpleKvStore.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17478__auto__,k__17479__auto__){
var self__ = this;
var this__17478__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__17479__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17478__auto____$1),self__.__meta),k__17479__auto__);
} else {
return (new syng_im.persistence.simple_kv_store.SimpleKvStore(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17479__auto__)),null));
}
});

syng_im.persistence.simple_kv_store.SimpleKvStore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17476__auto__,k__17477__auto__,G__28057){
var self__ = this;
var this__17476__auto____$1 = this;
var pred__28061 = cljs.core.keyword_identical_QMARK_;
var expr__28062 = k__17477__auto__;
return (new syng_im.persistence.simple_kv_store.SimpleKvStore(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17477__auto__,G__28057),null));
});

syng_im.persistence.simple_kv_store.SimpleKvStore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17481__auto__){
var self__ = this;
var this__17481__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

syng_im.persistence.simple_kv_store.SimpleKvStore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17468__auto__,G__28057){
var self__ = this;
var this__17468__auto____$1 = this;
return (new syng_im.persistence.simple_kv_store.SimpleKvStore(G__28057,self__.__extmap,self__.__hash));
});

syng_im.persistence.simple_kv_store.SimpleKvStore.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17474__auto__,entry__17475__auto__){
var self__ = this;
var this__17474__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17475__auto__)){
return cljs.core._assoc.call(null,this__17474__auto____$1,cljs.core._nth.call(null,entry__17475__auto__,(0)),cljs.core._nth.call(null,entry__17475__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17474__auto____$1,entry__17475__auto__);
}
});

syng_im.persistence.simple_kv_store.SimpleKvStore.prototype.syng_im$protocol$state$storage$Storage$ = true;

syng_im.persistence.simple_kv_store.SimpleKvStore.prototype.syng_im$protocol$state$storage$Storage$put$arity$3 = (function (_,key,value){
var self__ = this;
var ___$1 = this;
return syng_im.persistence.realm.write.call(null,((function (___$1){
return (function (){
return syng_im.persistence.realm.create.call(null,new cljs.core.Keyword(null,"kv-store","kv-store",869032614),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"value","value",305978217),syng_im.utils.types.to_edn_string.call(null,value)], null),true);
});})(___$1))
);
});

syng_im.persistence.simple_kv_store.SimpleKvStore.prototype.syng_im$protocol$state$storage$Storage$get$arity$2 = (function (_,key){
var self__ = this;
var ___$1 = this;
var G__28064 = syng_im.persistence.realm.get_by_field.call(null,new cljs.core.Keyword(null,"kv-store","kv-store",869032614),new cljs.core.Keyword(null,"key","key",-1516042587),key);
var G__28064__$1 = (((G__28064 == null))?null:syng_im.persistence.realm.single_cljs.call(null,G__28064));
var G__28064__$2 = (((G__28064__$1 == null))?null:syng_im.persistence.realm.decode_value.call(null,G__28064__$1));
return G__28064__$2;
});

syng_im.persistence.simple_kv_store.SimpleKvStore.prototype.syng_im$protocol$state$storage$Storage$contains_key_QMARK_$arity$2 = (function (_,key){
var self__ = this;
var ___$1 = this;
return syng_im.persistence.realm.exists_QMARK_.call(null,new cljs.core.Keyword(null,"kv-store","kv-store",869032614),new cljs.core.Keyword(null,"key","key",-1516042587),key);
});

syng_im.persistence.simple_kv_store.SimpleKvStore.prototype.syng_im$protocol$state$storage$Storage$delete$arity$2 = (function (_,key){
var self__ = this;
var ___$1 = this;
return syng_im.persistence.realm.write.call(null,((function (___$1){
return (function (){
return syng_im.persistence.realm.delete$.call(null,syng_im.persistence.realm.single.call(null,syng_im.persistence.realm.get_by_field.call(null,new cljs.core.Keyword(null,"kv-store","kv-store",869032614),new cljs.core.Keyword(null,"key","key",-1516042587),key)));
});})(___$1))
);
});

syng_im.persistence.simple_kv_store.SimpleKvStore.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

syng_im.persistence.simple_kv_store.SimpleKvStore.cljs$lang$type = true;

syng_im.persistence.simple_kv_store.SimpleKvStore.cljs$lang$ctorPrSeq = (function (this__17503__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"syng-im.persistence.simple-kv-store/SimpleKvStore");
});

syng_im.persistence.simple_kv_store.SimpleKvStore.cljs$lang$ctorPrWriter = (function (this__17503__auto__,writer__17504__auto__){
return cljs.core._write.call(null,writer__17504__auto__,"syng-im.persistence.simple-kv-store/SimpleKvStore");
});

syng_im.persistence.simple_kv_store.__GT_SimpleKvStore = (function syng_im$persistence$simple_kv_store$__GT_SimpleKvStore(){
return (new syng_im.persistence.simple_kv_store.SimpleKvStore(null,null,null));
});

syng_im.persistence.simple_kv_store.map__GT_SimpleKvStore = (function syng_im$persistence$simple_kv_store$map__GT_SimpleKvStore(G__28059){
return (new syng_im.persistence.simple_kv_store.SimpleKvStore(null,cljs.core.dissoc.call(null,G__28059),null));
});

syng_im.persistence.simple_kv_store.kv_store = syng_im.persistence.simple_kv_store.__GT_SimpleKvStore.call(null);

//# sourceMappingURL=simple_kv_store.js.map