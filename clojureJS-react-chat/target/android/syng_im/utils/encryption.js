// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.utils.encryption');
goog.require('cljs.core');
goog.require('cljsjs.chance');
goog.require('cljsjs.eccjs');
syng_im.utils.encryption.default_curve = (384);
/**
 * Returns {:private "private key" :public "public key"
 */
syng_im.utils.encryption.new_keypair = (function syng_im$utils$encryption$new_keypair(){
var map__28070 = cljs.core.js__GT_clj.call(null,ecc.generate(ecc.ENC_DEC,syng_im.utils.encryption.default_curve),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var map__28070__$1 = ((((!((map__28070 == null)))?((((map__28070.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28070.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28070):map__28070);
var enc = cljs.core.get.call(null,map__28070__$1,new cljs.core.Keyword(null,"enc","enc",709124780));
var dec = cljs.core.get.call(null,map__28070__$1,new cljs.core.Keyword(null,"dec","dec",1888433436));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),dec,new cljs.core.Keyword(null,"public","public",1566243851),enc], null);
});
syng_im.utils.encryption.encrypt = (function syng_im$utils$encryption$encrypt(public_key,content){
return ecc.encrypt(public_key,content);
});
syng_im.utils.encryption.decrypt = (function syng_im$utils$encryption$decrypt(private_key,content){
return ecc.decrypt(private_key,content);
});
syng_im.utils.encryption.password_encrypt = (function syng_im$utils$encryption$password_encrypt(password,content){
return ecc.sjcl.encrypt(password,content);
});
syng_im.utils.encryption.password_decrypt = (function syng_im$utils$encryption$password_decrypt(password,content){
return ecc.sjcl.decrypt(password,content);
});

//# sourceMappingURL=encryption.js.map