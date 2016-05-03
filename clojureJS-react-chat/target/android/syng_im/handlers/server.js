// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.handlers.server');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('syng_im.models.user_data');
goog.require('syng_im.utils.utils');
goog.require('syng_im.utils.logging');
syng_im.handlers.server.sign_up = (function syng_im$handlers$server$sign_up(db,phone_number,handler){
syng_im.models.user_data.save_phone_number.call(null,phone_number);

syng_im.utils.utils.http_post.call(null,"sign-up",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"phone-number","phone-number",453925028),phone_number,new cljs.core.Keyword(null,"whisper-identity","whisper-identity",607101529),cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-identity","user-identity",-1070003046),new cljs.core.Keyword(null,"public","public",1566243851)], null))], null),(function (body){
syng_im.utils.utils.log.call(null,body);

return handler.call(null);
}));

return db;
});
syng_im.handlers.server.sign_up_confirm = (function syng_im$handlers$server$sign_up_confirm(confirmation_code,handler){
return syng_im.utils.utils.http_post.call(null,"sign-up-confirm",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),confirmation_code], null),handler);
});

//# sourceMappingURL=server.js.map