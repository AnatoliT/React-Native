// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.components.chat.suggestions');
goog.require('cljs.core');
goog.require('syng_im.utils.logging');
goog.require('reagent.core');
goog.require('syng_im.components.styles');
goog.require('syng_im.utils.utils');
goog.require('clojure.string');
goog.require('syng_im.components.react');
goog.require('re_frame.core');
goog.require('syng_im.utils.listview');
syng_im.components.chat.suggestions.set_command_input = (function syng_im$components$chat$suggestions$set_command_input(command){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-chat-command","set-chat-command",-1768304585),command], null));
});
syng_im.components.chat.suggestions.suggestion_list_item = (function syng_im$components$chat$suggestions$suggestion_list_item(suggestion){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.touchable_highlight,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onPress","onPress",-1383694171),(function (){
return syng_im.components.chat.suggestions.set_command_input.call(null,cljs.core.keyword.call(null,new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(suggestion)));
}),new cljs.core.Keyword(null,"underlay-color","underlay-color",-865656052),new cljs.core.Keyword(null,"transparent","transparent",-2073609949)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"row",new cljs.core.Keyword(null,"marginVertical","marginVertical",586374780),(1),new cljs.core.Keyword(null,"marginHorizontal","marginHorizontal",-708054311),(0),new cljs.core.Keyword(null,"height","height",1025178622),(40),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),syng_im.components.styles.color_white], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"column",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),(10),new cljs.core.Keyword(null,"left","left",-399115937),(60),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(suggestion),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),(10)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),(-2),new cljs.core.Keyword(null,"marginHorizontal","marginHorizontal",-708054311),(10),new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(14),new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),syng_im.components.styles.font,new cljs.core.Keyword(null,"color","color",1011675173),syng_im.components.styles.color_white], null)], null),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(suggestion)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),(7),new cljs.core.Keyword(null,"left","left",-399115937),(190),new cljs.core.Keyword(null,"lineHeight","lineHeight",-1729831016),(18),new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(14),new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),syng_im.components.styles.font,new cljs.core.Keyword(null,"color","color",1011675173),"black"], null)], null),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(suggestion)], null)], null)], null);
});
syng_im.components.chat.suggestions.render_row = (function syng_im$components$chat$suggestions$render_row(row,section_id,row_id){
return syng_im.components.react.list_item.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.chat.suggestions.suggestion_list_item,cljs.core.js__GT_clj.call(null,row,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)], null));
});
syng_im.components.chat.suggestions.suggestions_view = (function syng_im$components$chat$suggestions$suggestions_view(){
var suggestions_atom = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-suggestions","get-suggestions",-1144673996)], null));
return ((function (suggestions_atom){
return (function (){
var suggestions = cljs.core.deref.call(null,suggestions_atom);
if(cljs.core.seq.call(null,suggestions)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"row",new cljs.core.Keyword(null,"marginVertical","marginVertical",586374780),(1),new cljs.core.Keyword(null,"marginHorizontal","marginHorizontal",-708054311),(0),new cljs.core.Keyword(null,"height","height",1025178622),(function (){var x__17193__auto__ = (105);
var y__17194__auto__ = ((42) * cljs.core.count.call(null,suggestions));
return ((x__17193__auto__ < y__17194__auto__) ? x__17193__auto__ : y__17194__auto__);
})(),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),syng_im.components.styles.color_white,new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),(5)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.list_view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dataSource","dataSource",-178401132),syng_im.utils.listview.to_datasource.call(null,suggestions),new cljs.core.Keyword(null,"renderRow","renderRow",239389977),syng_im.components.chat.suggestions.render_row,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentArrayMap.EMPTY], null)], null)], null);
} else {
return null;
}
});
;})(suggestions_atom))
});

//# sourceMappingURL=suggestions.js.map