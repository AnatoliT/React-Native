// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.utils.types');
goog.require('cljs.core');
syng_im.utils.types.to_string = (function syng_im$utils$types$to_string(s){
if((s instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,s);
} else {
return s;
}
});
syng_im.utils.types.to_edn_string = (function syng_im$utils$types$to_edn_string(value){
var sb__17829__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_23431_23433 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_23432_23434 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_23431_23433,_STAR_print_fn_STAR_23432_23434,sb__17829__auto__){
return (function (x__17830__auto__){
return sb__17829__auto__.append(x__17830__auto__);
});})(_STAR_print_newline_STAR_23431_23433,_STAR_print_fn_STAR_23432_23434,sb__17829__auto__))
;

try{cljs.core.pr.call(null,value);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23432_23434;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23431_23433;
}
return [cljs.core.str(sb__17829__auto__)].join('');
});

//# sourceMappingURL=types.js.map