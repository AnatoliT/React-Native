// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.models.user_data');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('syng_im.utils.utils');
syng_im.models.user_data.save_phone_number = (function syng_im$models$user_data$save_phone_number(phone_number){
React.AsyncStorage.setItem("user-phone-number",phone_number);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-user-phone-number","set-user-phone-number",1287962833),phone_number], null));
});
syng_im.models.user_data.load_phone_number = (function syng_im$models$user_data$load_phone_number(){
return React.AsyncStorage.getItem("user-phone-number",(function (error,value){
if(cljs.core.truth_(error)){
return syng_im.utils.utils.on_error.call(null,error);
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-user-phone-number","set-user-phone-number",1287962833),(cljs.core.truth_(value)?[cljs.core.str(value)].join(''):null)], null));
}
}));
});

//# sourceMappingURL=user_data.js.map