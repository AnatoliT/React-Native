// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.utils.crypt');
goog.require('cljs.core');
goog.require('goog.crypt');
goog.require('clojure.string');
goog.require('goog.crypt.Sha256');
window.RnRandomBytes = require("react-native-randombytes");
syng_im.utils.crypt.sha_256 = (new goog.crypt.Sha256());
syng_im.utils.crypt.bytes_to_str = (function syng_im$utils$crypt$bytes_to_str(arr){
return clojure.string.join.call(null,cljs.core.map.call(null,cljs.core.char$,arr));
});
syng_im.utils.crypt.str_to_bytes = (function syng_im$utils$crypt$str_to_bytes(s){
return cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.int$),s);
});
syng_im.utils.crypt.encrypt = (function syng_im$utils$crypt$encrypt(s){
syng_im.utils.crypt.sha_256.reset();

syng_im.utils.crypt.sha_256.update(s);

return goog.crypt.byteArrayToHex.call(null,syng_im.utils.crypt.sha_256.digest());
});
syng_im.utils.crypt.gen_random_bytes = (function syng_im$utils$crypt$gen_random_bytes(length,cb){
return window.RnRandomBytes.randomBytes(length,(function() { 
var G__23585__delegate = function (p__23583){
var vec__23584 = p__23583;
var err = cljs.core.nth.call(null,vec__23584,(0),null);
var buf = cljs.core.nth.call(null,vec__23584,(1),null);
if(cljs.core.truth_(err)){
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),err], null));
} else {
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buffer","buffer",617295198),buf], null));
}
};
var G__23585 = function (var_args){
var p__23583 = null;
if (arguments.length > 0) {
var G__23586__i = 0, G__23586__a = new Array(arguments.length -  0);
while (G__23586__i < G__23586__a.length) {G__23586__a[G__23586__i] = arguments[G__23586__i + 0]; ++G__23586__i;}
  p__23583 = new cljs.core.IndexedSeq(G__23586__a,0);
} 
return G__23585__delegate.call(this,p__23583);};
G__23585.cljs$lang$maxFixedArity = 0;
G__23585.cljs$lang$applyTo = (function (arglist__23587){
var p__23583 = cljs.core.seq(arglist__23587);
return G__23585__delegate(p__23583);
});
G__23585.cljs$core$IFn$_invoke$arity$variadic = G__23585__delegate;
return G__23585;
})()
);
});

//# sourceMappingURL=crypt.js.map