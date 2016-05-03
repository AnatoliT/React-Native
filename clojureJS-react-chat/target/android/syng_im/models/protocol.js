// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.models.protocol');
goog.require('cljs.core');
goog.require('syng_im.utils.types');
goog.require('syng_im.utils.logging');
goog.require('syng_im.persistence.simple_kv_store');
goog.require('syng_im.db');
goog.require('syng_im.protocol.state.storage');
goog.require('syng_im.utils.encryption');
goog.require('cljs.reader');
goog.require('re_frame.db');
syng_im.models.protocol.set_initialized = (function syng_im$models$protocol$set_initialized(db,initialized_QMARK_){
return cljs.core.assoc_in.call(null,db,syng_im.db.protocol_initialized_path,initialized_QMARK_);
});
syng_im.models.protocol.update_identity = (function syng_im$models$protocol$update_identity(db,identity){
var password = cljs.core.get_in.call(null,db,syng_im.db.identity_password_path);
var encrypted = syng_im.utils.encryption.password_encrypt.call(null,password,syng_im.utils.types.to_edn_string.call(null,identity));
syng_im.protocol.state.storage.put.call(null,syng_im.persistence.simple_kv_store.kv_store,new cljs.core.Keyword(null,"identity","identity",1647396035),encrypted);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"user-identity","user-identity",-1070003046),identity);
});
syng_im.models.protocol.stored_identity = (function syng_im$models$protocol$stored_identity(db){
var encrypted = syng_im.protocol.state.storage.get.call(null,syng_im.persistence.simple_kv_store.kv_store,new cljs.core.Keyword(null,"identity","identity",1647396035));
var password = cljs.core.get_in.call(null,db,syng_im.db.identity_password_path);
if(cljs.core.truth_(encrypted)){
return cljs.reader.read_string.call(null,syng_im.utils.encryption.password_decrypt.call(null,password,encrypted));
} else {
return null;
}
});

//# sourceMappingURL=protocol.js.map