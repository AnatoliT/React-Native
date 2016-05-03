// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.protocol.user_handler');
goog.require('cljs.core');
goog.require('syng_im.protocol.state.state');
syng_im.protocol.user_handler.invoke_user_handler = (function syng_im$protocol$user_handler$invoke_user_handler(event_type,params){
return syng_im.protocol.state.state.external_handler.call(null).call(null,cljs.core.assoc.call(null,params,new cljs.core.Keyword(null,"event-type","event-type",319722813),event_type));
});

//# sourceMappingURL=user_handler.js.map