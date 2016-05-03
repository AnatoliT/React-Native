// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.handlers.suggestions');
goog.require('cljs.core');
goog.require('syng_im.models.chat');
goog.require('syng_im.utils.logging');
goog.require('syng_im.utils.utils');
goog.require('syng_im.db');
goog.require('clojure.string');
goog.require('syng_im.models.commands');
goog.require('re_frame.core');
syng_im.handlers.suggestions.suggestion_QMARK_ = (function syng_im$handlers$suggestions$suggestion_QMARK_(text){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,text,(0)),"!");
});
syng_im.handlers.suggestions.get_suggestions = (function syng_im$handlers$suggestions$get_suggestions(db,text){
if(cljs.core.truth_(syng_im.handlers.suggestions.suggestion_QMARK_.call(null,text))){
return cljs.core.filterv.call(null,(function (p1__44642_SHARP_){
return new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(p1__44642_SHARP_).startsWith(text);
}),syng_im.models.commands.get_commands.call(null,db));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
syng_im.handlers.suggestions.get_command = (function syng_im$handlers$suggestions$get_command(db,text){
if(cljs.core.truth_(syng_im.handlers.suggestions.suggestion_QMARK_.call(null,text))){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__44643_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(p1__44643_SHARP_),text);
}),syng_im.models.commands.get_commands.call(null,db)));
} else {
return null;
}
});
syng_im.handlers.suggestions.handle_command = (function syng_im$handlers$suggestions$handle_command(db,command_key,content){
var temp__4425__auto___44644 = syng_im.models.commands.get_chat_command_request.call(null,db);
if(cljs.core.truth_(temp__4425__auto___44644)){
var command_handler_44645 = temp__4425__auto___44644;
var to_msg_id_44646 = syng_im.models.commands.get_chat_command_to_msg_id.call(null,db);
command_handler_44645.call(null,to_msg_id_44646,command_key,content);
} else {
}

return db;
});
syng_im.handlers.suggestions.get_command_handler = (function syng_im$handlers$suggestions$get_command_handler(db,command_key,content){
var temp__4425__auto__ = syng_im.models.commands.get_chat_command_request.call(null,db);
if(cljs.core.truth_(temp__4425__auto__)){
var command_handler = temp__4425__auto__;
var to_msg_id = syng_im.models.commands.get_chat_command_to_msg_id.call(null,db);
return ((function (to_msg_id,command_handler,temp__4425__auto__){
return (function (){
return command_handler.call(null,to_msg_id,command_key,content);
});
;})(to_msg_id,command_handler,temp__4425__auto__))
} else {
return null;
}
});
syng_im.handlers.suggestions.apply_staged_commands = (function syng_im$handlers$suggestions$apply_staged_commands(db){
var staged_commands = cljs.core.get_in.call(null,db,syng_im.db.chat_staged_commands_path.call(null,syng_im.models.chat.current_chat_id.call(null,db)));
cljs.core.dorun.call(null,cljs.core.map.call(null,((function (staged_commands){
return (function (staged_command){
var temp__4425__auto__ = new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(staged_command);
if(cljs.core.truth_(temp__4425__auto__)){
var handler = temp__4425__auto__;
return handler.call(null);
} else {
return null;
}
});})(staged_commands))
,staged_commands));

return syng_im.models.commands.clear_staged_commands.call(null,db);
});
syng_im.handlers.suggestions.execute_commands_js = (function syng_im$handlers$suggestions$execute_commands_js(body){
window.eval(body);

var commands = window.commands;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-commands","set-commands",-1621006722),cljs.core.map.call(null,((function (commands){
return (function (p1__44647_SHARP_){
return cljs.core.update.call(null,p1__44647_SHARP_,new cljs.core.Keyword(null,"command","command",-894540724),cljs.core.keyword);
});})(commands))
,cljs.core.js__GT_clj.call(null,commands,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true))], null));
});
syng_im.handlers.suggestions.load_commands = (function syng_im$handlers$suggestions$load_commands(){
return syng_im.utils.utils.http_get.call(null,"chat-commands.js",syng_im.handlers.suggestions.execute_commands_js,null);
});
syng_im.handlers.suggestions.check_suggestion = (function syng_im$handlers$suggestions$check_suggestion(db,message){
var temp__4425__auto__ = ((typeof message === 'string')?cljs.core.re_matches.call(null,/^![^\s]+\s/,message):null);
if(cljs.core.truth_(temp__4425__auto__)){
var suggestion_text = temp__4425__auto__;
var suggestion_text_SINGLEQUOTE_ = clojure.string.trim.call(null,suggestion_text);
var vec__44650 = cljs.core.filter.call(null,((function (suggestion_text_SINGLEQUOTE_,suggestion_text,temp__4425__auto__){
return (function (p1__44648_SHARP_){
return cljs.core._EQ_.call(null,suggestion_text_SINGLEQUOTE_,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(p1__44648_SHARP_));
});})(suggestion_text_SINGLEQUOTE_,suggestion_text,temp__4425__auto__))
,syng_im.models.commands.get_commands.call(null,db));
var suggestion = cljs.core.nth.call(null,vec__44650,(0),null);
return suggestion;
} else {
return null;
}
});

//# sourceMappingURL=suggestions.js.map