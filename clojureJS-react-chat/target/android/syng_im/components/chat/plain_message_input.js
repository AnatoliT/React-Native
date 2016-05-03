// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.components.chat.plain_message_input');
goog.require('cljs.core');
goog.require('syng_im.resources');
goog.require('syng_im.utils.logging');
goog.require('reagent.core');
goog.require('syng_im.components.styles');
goog.require('syng_im.utils.utils');
goog.require('syng_im.components.chat.suggestions');
goog.require('syng_im.components.react');
goog.require('re_frame.core');
syng_im.components.chat.plain_message_input.set_input_message = (function syng_im$components$chat$plain_message_input$set_input_message(message){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-chat-input-text","set-chat-input-text",1236018766),message], null));
});
syng_im.components.chat.plain_message_input.send = (function syng_im$components$chat$plain_message_input$send(chat,input_message){
var map__18424_18426 = chat;
var map__18424_18427__$1 = ((((!((map__18424_18426 == null)))?((((map__18424_18426.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18424_18426.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18424_18426):map__18424_18426);
var group_chat_18428 = cljs.core.get.call(null,map__18424_18427__$1,new cljs.core.Keyword(null,"group-chat","group-chat",-284559595));
var chat_id_18429 = cljs.core.get.call(null,map__18424_18427__$1,new cljs.core.Keyword(null,"chat-id","chat-id",1708052118));
if(cljs.core.truth_(group_chat_18428)){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"send-group-chat-msg","send-group-chat-msg",745881323),chat_id_18429,input_message], null));
} else {
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"send-chat-msg","send-chat-msg",-567319740),chat_id_18429,input_message], null));
}

syng_im.components.chat.plain_message_input.set_input_message.call(null,null);

return syng_im.components.react.dismiss_keyboard.call(null);
});
syng_im.components.chat.plain_message_input.plain_message_input_view = (function syng_im$components$chat$plain_message_input$plain_message_input_view(){
var chat = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-current-chat","get-current-chat",597821994)], null));
var input_message_atom = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-chat-input-text","get-chat-input-text",-1809205004)], null));
var staged_commands_atom = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-chat-staged-commands","get-chat-staged-commands",1680667085)], null));
return ((function (chat,input_message_atom,staged_commands_atom){
return (function (){
var input_message = cljs.core.deref.call(null,input_message_atom);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"column"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.chat.suggestions.suggestions_view], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"row",new cljs.core.Keyword(null,"height","height",1025178622),(56),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),syng_im.components.styles.color_white], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.image,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",-774711847),"icon_list"], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),(22),new cljs.core.Keyword(null,"marginRight","marginRight",457313535),(6),new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),(6),new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),(21),new cljs.core.Keyword(null,"width","width",-384071477),(13),new cljs.core.Keyword(null,"height","height",1025178622),(12)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.text_input,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"underlineColorAndroid","underlineColorAndroid",396584087),"transparent",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),(16),new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),(-2),new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(14),new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),syng_im.components.styles.font,new cljs.core.Keyword(null,"color","color",1011675173),syng_im.components.styles.text2_color], null),new cljs.core.Keyword(null,"autoFocus","autoFocus",-552622425),((0) < cljs.core.count.call(null,cljs.core.deref.call(null,staged_commands_atom))),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type",new cljs.core.Keyword(null,"placeholderTextColor","placeholderTextColor",-1464202588),syng_im.components.styles.text2_color,new cljs.core.Keyword(null,"onChangeText","onChangeText",-163727290),((function (input_message,chat,input_message_atom,staged_commands_atom){
return (function (new_text){
return syng_im.components.chat.plain_message_input.set_input_message.call(null,new_text);
});})(input_message,chat,input_message_atom,staged_commands_atom))
,new cljs.core.Keyword(null,"onSubmitEditing","onSubmitEditing",-1225777034),((function (input_message,chat,input_message_atom,staged_commands_atom){
return (function (e){
return syng_im.components.chat.plain_message_input.send.call(null,cljs.core.deref.call(null,chat),input_message);
});})(input_message,chat,input_message_atom,staged_commands_atom))
], null),input_message], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.image,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",-774711847),"icon_smile"], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),(18),new cljs.core.Keyword(null,"marginRight","marginRight",457313535),(18),new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20)], null)], null)], null),((((cljs.core.count.call(null,input_message) > (0))) || ((cljs.core.count.call(null,cljs.core.deref.call(null,staged_commands_atom)) > (0))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.touchable_highlight,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-press","on-press",-1763585856),((function (input_message,chat,input_message_atom,staged_commands_atom){
return (function (){
return syng_im.components.chat.plain_message_input.send.call(null,cljs.core.deref.call(null,chat),input_message);
});})(input_message,chat,input_message_atom,staged_commands_atom))
,new cljs.core.Keyword(null,"underlay-color","underlay-color",-865656052),new cljs.core.Keyword(null,"transparent","transparent",-2073609949)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),(10),new cljs.core.Keyword(null,"marginRight","marginRight",457313535),(10),new cljs.core.Keyword(null,"width","width",-384071477),(36),new cljs.core.Keyword(null,"height","height",1025178622),(36),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),(50),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),syng_im.components.styles.color_blue], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.image,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",-774711847),"icon_send"], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),10.5,new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),(12),new cljs.core.Keyword(null,"width","width",-384071477),(15),new cljs.core.Keyword(null,"height","height",1025178622),(15)], null)], null)], null)], null)], null):null)], null)], null);
});
;})(chat,input_message_atom,staged_commands_atom))
});

//# sourceMappingURL=plain_message_input.js.map