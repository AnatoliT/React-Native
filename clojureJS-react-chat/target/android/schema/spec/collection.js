// Compiled by ClojureScript 1.7.170 {}
goog.provide('schema.spec.collection');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.spec.core');
schema.spec.collection.element_transformer = (function schema$spec$collection$element_transformer(e,params,then){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(e);
var c = schema.spec.core.sub_checker.call(null,e,params);
return ((function (parser,c){
return (function (res,x){
return then.call(null,res,parser.call(null,((function (parser,c){
return (function (t){
return cljs.core.swap_BANG_.call(null,res,cljs.core.conj,(cljs.core.truth_(schema.utils.error_QMARK_.call(null,t))?t:c.call(null,t)));
});})(parser,c))
,x));
});
;})(parser,c))
});
schema.spec.collection.has_error_QMARK_ = (function schema$spec$collection$has_error_QMARK_(l){
return cljs.core.some.call(null,schema.utils.error_QMARK_,l);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {schema.spec.core.CoreSpec}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.spec.collection.CollectionSpec = (function (pre,constructor,elements,on_error,__meta,__extmap,__hash){
this.pre = pre;
this.constructor = constructor;
this.elements = elements;
this.on_error = on_error;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.spec.collection.CollectionSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17469__auto__,k__17470__auto__){
var self__ = this;
var this__17469__auto____$1 = this;
return cljs.core._lookup.call(null,this__17469__auto____$1,k__17470__auto__,null);
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17471__auto__,k23978,else__17472__auto__){
var self__ = this;
var this__17471__auto____$1 = this;
var G__23980 = (((k23978 instanceof cljs.core.Keyword))?k23978.fqn:null);
switch (G__23980) {
case "pre":
return self__.pre;

break;
case "constructor":
return self__.constructor;

break;
case "elements":
return self__.elements;

break;
case "on-error":
return self__.on_error;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23978,else__17472__auto__);

}
});

schema.spec.collection.CollectionSpec.prototype.schema$spec$core$CoreSpec$ = true;

schema.spec.collection.CollectionSpec.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.map.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.elements);
});

schema.spec.collection.CollectionSpec.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
var constructor__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"return-walked?","return-walked?",-1684646015).cljs$core$IFn$_invoke$arity$1(params))?self__.constructor:((function (this$__$1){
return (function (_){
return null;
});})(this$__$1))
);
var t = cljs.core.reduce.call(null,((function (constructor__$1,this$__$1){
return (function (f,e){
return schema.spec.collection.element_transformer.call(null,e,params,f);
});})(constructor__$1,this$__$1))
,((function (constructor__$1,this$__$1){
return (function (_,x){
return x;
});})(constructor__$1,this$__$1))
,cljs.core.reverse.call(null,self__.elements));
return ((function (constructor__$1,t,this$__$1){
return (function (x){
var or__16855__auto__ = self__.pre.call(null,x);
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
} else {
var res = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var remaining = t.call(null,res,x);
var res__$1 = cljs.core.deref.call(null,res);
if(cljs.core.truth_((function (){var or__16855__auto____$1 = cljs.core.seq.call(null,remaining);
if(or__16855__auto____$1){
return or__16855__auto____$1;
} else {
return schema.spec.collection.has_error_QMARK_.call(null,res__$1);
}
})())){
return schema.utils.error.call(null,self__.on_error.call(null,x,res__$1,remaining));
} else {
return constructor__$1.call(null,res__$1);
}
}
});
;})(constructor__$1,t,this$__$1))
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17483__auto__,writer__17484__auto__,opts__17485__auto__){
var self__ = this;
var this__17483__auto____$1 = this;
var pr_pair__17486__auto__ = ((function (this__17483__auto____$1){
return (function (keyval__17487__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,cljs.core.pr_writer,""," ","",opts__17485__auto__,keyval__17487__auto__);
});})(this__17483__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,pr_pair__17486__auto__,"#schema.spec.collection.CollectionSpec{",", ","}",opts__17485__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre","pre",2118456869),self__.pre],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"constructor","constructor",-1953928811),self__.constructor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on-error","on-error",1728533530),self__.on_error],null))], null),self__.__extmap));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IIterable$ = true;

schema.spec.collection.CollectionSpec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23977){
var self__ = this;
var G__23977__$1 = this;
return (new cljs.core.RecordIter((0),G__23977__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"constructor","constructor",-1953928811),new cljs.core.Keyword(null,"elements","elements",657646735),new cljs.core.Keyword(null,"on-error","on-error",1728533530)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17467__auto__){
var self__ = this;
var this__17467__auto____$1 = this;
return self__.__meta;
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17463__auto__){
var self__ = this;
var this__17463__auto____$1 = this;
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor,self__.elements,self__.on_error,self__.__meta,self__.__extmap,self__.__hash));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17473__auto__){
var self__ = this;
var this__17473__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17464__auto__){
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

schema.spec.collection.CollectionSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17465__auto__,other__17466__auto__){
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

schema.spec.collection.CollectionSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17478__auto__,k__17479__auto__){
var self__ = this;
var this__17478__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pre","pre",2118456869),null,new cljs.core.Keyword(null,"elements","elements",657646735),null,new cljs.core.Keyword(null,"constructor","constructor",-1953928811),null,new cljs.core.Keyword(null,"on-error","on-error",1728533530),null], null), null),k__17479__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17478__auto____$1),self__.__meta),k__17479__auto__);
} else {
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor,self__.elements,self__.on_error,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17479__auto__)),null));
}
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17476__auto__,k__17477__auto__,G__23977){
var self__ = this;
var this__17476__auto____$1 = this;
var pred__23981 = cljs.core.keyword_identical_QMARK_;
var expr__23982 = k__17477__auto__;
if(cljs.core.truth_(pred__23981.call(null,new cljs.core.Keyword(null,"pre","pre",2118456869),expr__23982))){
return (new schema.spec.collection.CollectionSpec(G__23977,self__.constructor,self__.elements,self__.on_error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23981.call(null,new cljs.core.Keyword(null,"constructor","constructor",-1953928811),expr__23982))){
return (new schema.spec.collection.CollectionSpec(self__.pre,G__23977,self__.elements,self__.on_error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23981.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__23982))){
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor,G__23977,self__.on_error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23981.call(null,new cljs.core.Keyword(null,"on-error","on-error",1728533530),expr__23982))){
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor,self__.elements,G__23977,self__.__meta,self__.__extmap,null));
} else {
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor,self__.elements,self__.on_error,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17477__auto__,G__23977),null));
}
}
}
}
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17481__auto__){
var self__ = this;
var this__17481__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre","pre",2118456869),self__.pre],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"constructor","constructor",-1953928811),self__.constructor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on-error","on-error",1728533530),self__.on_error],null))], null),self__.__extmap));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17468__auto__,G__23977){
var self__ = this;
var this__17468__auto____$1 = this;
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor,self__.elements,self__.on_error,G__23977,self__.__extmap,self__.__hash));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17474__auto__,entry__17475__auto__){
var self__ = this;
var this__17474__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17475__auto__)){
return cljs.core._assoc.call(null,this__17474__auto____$1,cljs.core._nth.call(null,entry__17475__auto__,(0)),cljs.core._nth.call(null,entry__17475__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17474__auto____$1,entry__17475__auto__);
}
});

schema.spec.collection.CollectionSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pre","pre",-535978900,null),new cljs.core.Symbol(null,"constructor","constructor",-313397284,null),new cljs.core.Symbol(null,"elements","elements",-1996789034,null),new cljs.core.Symbol(null,"on-error","on-error",-925902239,null)], null);
});

schema.spec.collection.CollectionSpec.cljs$lang$type = true;

schema.spec.collection.CollectionSpec.cljs$lang$ctorPrSeq = (function (this__17503__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.spec.collection/CollectionSpec");
});

schema.spec.collection.CollectionSpec.cljs$lang$ctorPrWriter = (function (this__17503__auto__,writer__17504__auto__){
return cljs.core._write.call(null,writer__17504__auto__,"schema.spec.collection/CollectionSpec");
});

schema.spec.collection.__GT_CollectionSpec = (function schema$spec$collection$__GT_CollectionSpec(pre,constructor,elements,on_error){
return (new schema.spec.collection.CollectionSpec(pre,constructor,elements,on_error,null,null,null));
});

schema.spec.collection.map__GT_CollectionSpec = (function schema$spec$collection$map__GT_CollectionSpec(G__23979){
return (new schema.spec.collection.CollectionSpec(new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(G__23979),new cljs.core.Keyword(null,"constructor","constructor",-1953928811).cljs$core$IFn$_invoke$arity$1(G__23979),new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__23979),new cljs.core.Keyword(null,"on-error","on-error",1728533530).cljs$core$IFn$_invoke$arity$1(G__23979),null,cljs.core.dissoc.call(null,G__23979,new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"constructor","constructor",-1953928811),new cljs.core.Keyword(null,"elements","elements",657646735),new cljs.core.Keyword(null,"on-error","on-error",1728533530)),null));
});

/**
 * A collection represents a collection of elements, each of which is itself
 * schematized.  At the top level, the collection has a precondition
 * (presumably on the overall type), a constructor for the collection from a
 * sequence of items, an element spec, and a function that constructs a
 * descriptive error on failure.
 * 
 * The element spec is a sequence of maps, each of which provides an element
 * schema, cardinality, parser (allowing for efficient processing of
 * structured collections), and optional error wrapper.
 */
schema.spec.collection.collection_spec = (function schema$spec$collection$collection_spec(pre,constructor,elements,on_error){
return schema.spec.collection.__GT_CollectionSpec.call(null,pre,constructor,elements,on_error);
});
schema.spec.collection.all_elements = (function schema$spec$collection$all_elements(schema__$1){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"cardinality","cardinality",-104971109),new cljs.core.Keyword(null,"zero-or-more","zero-or-more",-1629905900),new cljs.core.Keyword(null,"parser","parser",-1543495310),(function (item_fn,coll){
var seq__23989_23993 = cljs.core.seq.call(null,coll);
var chunk__23990_23994 = null;
var count__23991_23995 = (0);
var i__23992_23996 = (0);
while(true){
if((i__23992_23996 < count__23991_23995)){
var x_23997 = cljs.core._nth.call(null,chunk__23990_23994,i__23992_23996);
item_fn.call(null,x_23997);

var G__23998 = seq__23989_23993;
var G__23999 = chunk__23990_23994;
var G__24000 = count__23991_23995;
var G__24001 = (i__23992_23996 + (1));
seq__23989_23993 = G__23998;
chunk__23990_23994 = G__23999;
count__23991_23995 = G__24000;
i__23992_23996 = G__24001;
continue;
} else {
var temp__4425__auto___24002 = cljs.core.seq.call(null,seq__23989_23993);
if(temp__4425__auto___24002){
var seq__23989_24003__$1 = temp__4425__auto___24002;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23989_24003__$1)){
var c__17658__auto___24004 = cljs.core.chunk_first.call(null,seq__23989_24003__$1);
var G__24005 = cljs.core.chunk_rest.call(null,seq__23989_24003__$1);
var G__24006 = c__17658__auto___24004;
var G__24007 = cljs.core.count.call(null,c__17658__auto___24004);
var G__24008 = (0);
seq__23989_23993 = G__24005;
chunk__23990_23994 = G__24006;
count__23991_23995 = G__24007;
i__23992_23996 = G__24008;
continue;
} else {
var x_24009 = cljs.core.first.call(null,seq__23989_24003__$1);
item_fn.call(null,x_24009);

var G__24010 = cljs.core.next.call(null,seq__23989_24003__$1);
var G__24011 = null;
var G__24012 = (0);
var G__24013 = (0);
seq__23989_23993 = G__24010;
chunk__23990_23994 = G__24011;
count__23991_23995 = G__24012;
i__23992_23996 = G__24013;
continue;
}
} else {
}
}
break;
}

return null;
})], null);
});
schema.spec.collection.one_element = (function schema$spec$collection$one_element(required_QMARK_,schema__$1,parser){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"cardinality","cardinality",-104971109),(cljs.core.truth_(required_QMARK_)?new cljs.core.Keyword(null,"exactly-one","exactly-one",-294043587):new cljs.core.Keyword(null,"at-most-one","at-most-one",-1612772829)),new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null);
});

//# sourceMappingURL=collection.js.map