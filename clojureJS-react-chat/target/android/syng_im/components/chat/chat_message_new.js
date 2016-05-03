// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.components.chat.chat_message_new');
goog.require('cljs.core');
goog.require('syng_im.resources');
goog.require('syng_im.components.chat.input.phone');
goog.require('syng_im.utils.logging');
goog.require('reagent.core');
goog.require('syng_im.components.chat.input.simple_command');
goog.require('syng_im.components.styles');
goog.require('syng_im.utils.utils');
goog.require('syng_im.components.chat.input.confirmation_code');
goog.require('syng_im.components.chat.input.simple_command_staged');
goog.require('syng_im.components.react');
goog.require('syng_im.components.chat.input.money');
goog.require('syng_im.components.chat.plain_message_input');
goog.require('re_frame.core');
goog.require('syng_im.components.chat.input.password');
syng_im.components.chat.chat_message_new.staged_command_view = (function syng_im$components$chat$chat_message_new$staged_command_view(stage_command){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.chat.input.simple_command_staged.simple_command_staged_view,stage_command], null);
});
syng_im.components.chat.chat_message_new.staged_commands_view = (function syng_im$components$chat$chat_message_new$staged_commands_view(staged_commands){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.view,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__17627__auto__ = (function syng_im$components$chat$chat_message_new$staged_commands_view_$_iter__18438(s__18439){
return (new cljs.core.LazySeq(null,(function (){
var s__18439__$1 = s__18439;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__18439__$1);
if(temp__4425__auto__){
var s__18439__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18439__$2)){
var c__17625__auto__ = cljs.core.chunk_first.call(null,s__18439__$2);
var size__17626__auto__ = cljs.core.count.call(null,c__17625__auto__);
var b__18441 = cljs.core.chunk_buffer.call(null,size__17626__auto__);
if((function (){var i__18440 = (0);
while(true){
if((i__18440 < size__17626__auto__)){
var command = cljs.core._nth.call(null,c__17625__auto__,i__18440);
cljs.core.chunk_append.call(null,b__18441,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.chat.chat_message_new.staged_command_view,command], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),command], null)));

var G__18442 = (i__18440 + (1));
i__18440 = G__18442;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18441),syng_im$components$chat$chat_message_new$staged_commands_view_$_iter__18438.call(null,cljs.core.chunk_rest.call(null,s__18439__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18441),null);
}
} else {
var command = cljs.core.first.call(null,s__18439__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.chat.chat_message_new.staged_command_view,command], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),command], null)),syng_im$components$chat$chat_message_new$staged_commands_view_$_iter__18438.call(null,cljs.core.rest.call(null,s__18439__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17627__auto__.call(null,staged_commands);
})()], null);
});
syng_im.components.chat.chat_message_new.default_command_input_view = (function syng_im$components$chat$chat_message_new$default_command_input_view(command){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.chat.input.simple_command.simple_command_input_view,command,cljs.core.PersistentArrayMap.EMPTY], null);
});
syng_im.components.chat.chat_message_new.special_input_view = (function syng_im$components$chat$chat_message_new$special_input_view(command){
var G__18444 = (((new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(command) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(command).fqn:null);
switch (G__18444) {
case "phone":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.chat.input.phone.phone_input_view,command], null);

break;
case "keypair-password":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.chat.input.password.password_input_view,command], null);

break;
case "confirmation-code":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.chat.input.confirmation_code.confirmation_code_input_view,command], null);

break;
case "money":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.chat.input.money.money_input_view,command], null);

break;
case "request":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.chat.input.money.money_input_view,command], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.chat.chat_message_new.default_command_input_view,command], null);

}
});
syng_im.components.chat.chat_message_new.chat_message_new = (function syng_im$components$chat$chat_message_new$chat_message_new(){
var command_atom = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-chat-command","get-chat-command",595280389)], null));
var staged_commands_atom = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-chat-staged-commands","get-chat-staged-commands",1680667085)], null));
return ((function (command_atom,staged_commands_atom){
return (function (){
var command = cljs.core.deref.call(null,command_atom);
var staged_commands = cljs.core.deref.call(null,staged_commands_atom);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),syng_im.components.styles.color_white,new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(4)], null)], null),(cljs.core.truth_((function (){var and__16843__auto__ = staged_commands;
if(cljs.core.truth_(and__16843__auto__)){
return (cljs.core.count.call(null,staged_commands) > (0));
} else {
return and__16843__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.chat.chat_message_new.staged_commands_view,staged_commands], null):null),(cljs.core.truth_(command)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.chat.chat_message_new.special_input_view,command], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.chat.plain_message_input.plain_message_input_view], null))], null);
});
;})(command_atom,staged_commands_atom))
});

//# sourceMappingURL=chat_message_new.js.map