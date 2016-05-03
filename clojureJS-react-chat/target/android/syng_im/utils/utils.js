// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.utils.utils');
goog.require('cljs.core');
goog.require('syng_im.constants');
syng_im.utils.utils.log = (function syng_im$utils$utils$log(obj){
return console.log(obj);
});
syng_im.utils.utils.toast = (function syng_im$utils$utils$toast(s){
return React.ToastAndroid.show(s,React.ToastAndroid.LONG);
});
syng_im.utils.utils.on_error = (function syng_im$utils$utils$on_error(error){
return syng_im.utils.utils.toast.call(null,[cljs.core.str("error: "),cljs.core.str(error)].join(''));
});
syng_im.utils.utils.http_post = (function syng_im$utils$utils$http_post(var_args){
var args19589 = [];
var len__17913__auto___19592 = arguments.length;
var i__17914__auto___19593 = (0);
while(true){
if((i__17914__auto___19593 < len__17913__auto___19592)){
args19589.push((arguments[i__17914__auto___19593]));

var G__19594 = (i__17914__auto___19593 + (1));
i__17914__auto___19593 = G__19594;
continue;
} else {
}
break;
}

var G__19591 = args19589.length;
switch (G__19591) {
case 3:
return syng_im.utils.utils.http_post.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return syng_im.utils.utils.http_post.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19589.length)].join('')));

}
});

syng_im.utils.utils.http_post.cljs$core$IFn$_invoke$arity$3 = (function (action,data,on_success){
return syng_im.utils.utils.http_post.call(null,action,data,on_success,null);
});

syng_im.utils.utils.http_post.cljs$core$IFn$_invoke$arity$4 = (function (action,data,on_success,on_error){
return window.fetch([cljs.core.str(syng_im.constants.server_address),cljs.core.str(action)].join(''),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"accept","accept",1874130431),"application/json",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js.call(null,data))], null))).then((function (response){
syng_im.utils.utils.log.call(null,response);

return response.text();
})).then((function (text){
var json = JSON.parse(text);
var obj = cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
return on_success.call(null,obj);
})).catch((function (){var or__16855__auto__ = on_error;
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
} else {
return ((function (or__16855__auto__){
return (function (error){
return syng_im.utils.utils.toast.call(null,[cljs.core.str(error)].join(''));
});
;})(or__16855__auto__))
}
})());
});

syng_im.utils.utils.http_post.cljs$lang$maxFixedArity = 4;
syng_im.utils.utils.http_get = (function syng_im$utils$utils$http_get(action,on_success,on_error){
return window.fetch([cljs.core.str(syng_im.constants.server_address),cljs.core.str(action)].join(''),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))).then((function (response){
syng_im.utils.utils.log.call(null,response);

return response.text();
})).then(on_success).catch((function (){var or__16855__auto__ = on_error;
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
} else {
return ((function (or__16855__auto__){
return (function (error){
return syng_im.utils.utils.toast.call(null,[cljs.core.str(error)].join(''));
});
;})(or__16855__auto__))
}
})());
});

//# sourceMappingURL=utils.js.map