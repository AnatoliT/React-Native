// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('syng_im.db');
goog.require('syng_im.models.chat');
goog.require('syng_im.models.chats');
goog.require('syng_im.models.messages');
goog.require('syng_im.models.contacts');
goog.require('syng_im.models.commands');
goog.require('syng_im.handlers.suggestions');
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-chat-messages","get-chat-messages",828636940),(function (db,_){
var chat_id = reagent.ratom.make_reaction.call(null,(function (){
return syng_im.models.chat.current_chat_id.call(null,cljs.core.deref.call(null,db));
}));
var chat_updated = reagent.ratom.make_reaction.call(null,((function (chat_id){
return (function (){
return syng_im.models.chat.chat_updated_QMARK_.call(null,cljs.core.deref.call(null,db),cljs.core.deref.call(null,chat_id));
});})(chat_id))
);
return reagent.ratom.make_reaction.call(null,((function (chat_id,chat_updated){
return (function (){
var ___$1 = cljs.core.deref.call(null,chat_updated);
return syng_im.models.messages.get_messages.call(null,cljs.core.deref.call(null,chat_id));
});})(chat_id,chat_updated))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-current-chat-id","get-current-chat-id",1608093580),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return syng_im.models.chat.current_chat_id.call(null,cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-suggestions","get-suggestions",-1144673996),(function (db,_){
var input_text = reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,db),syng_im.db.chat_input_text_path.call(null,syng_im.models.chat.current_chat_id.call(null,cljs.core.deref.call(null,db))));
}));
return reagent.ratom.make_reaction.call(null,((function (input_text){
return (function (){
return syng_im.handlers.suggestions.get_suggestions.call(null,cljs.core.deref.call(null,db),cljs.core.deref.call(null,input_text));
});})(input_text))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-commands","get-commands",304513763),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return syng_im.models.commands.get_commands.call(null,cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-chat-input-text","get-chat-input-text",-1809205004),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,db),syng_im.db.chat_input_text_path.call(null,syng_im.models.chat.current_chat_id.call(null,cljs.core.deref.call(null,db))));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-chat-staged-commands","get-chat-staged-commands",1680667085),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,db),syng_im.db.chat_staged_commands_path.call(null,syng_im.models.chat.current_chat_id.call(null,cljs.core.deref.call(null,db))));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-chat-command","get-chat-command",595280389),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return syng_im.models.commands.get_chat_command.call(null,cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-chat-command-content","get-chat-command-content",-1711048680),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return syng_im.models.commands.get_chat_command_content.call(null,cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"chat-command-request","chat-command-request",-2131007726),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return syng_im.models.commands.get_chat_command_request.call(null,cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-chats","get-chats",-919369159),(function (db,_){
var chats_updated = reagent.ratom.make_reaction.call(null,(function (){
return syng_im.models.chats.chats_updated_QMARK_.call(null,cljs.core.deref.call(null,db));
}));
return reagent.ratom.make_reaction.call(null,((function (chats_updated){
return (function (){
var ___$1 = cljs.core.deref.call(null,chats_updated);
return syng_im.models.chats.chats_list.call(null);
});})(chats_updated))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-current-chat","get-current-chat",597821994),(function (db,_){
var current_chat_id = reagent.ratom.make_reaction.call(null,(function (){
return syng_im.models.chat.current_chat_id.call(null,cljs.core.deref.call(null,db));
}));
var chat_updated = reagent.ratom.make_reaction.call(null,((function (current_chat_id){
return (function (){
return syng_im.models.chat.chat_updated_QMARK_.call(null,cljs.core.deref.call(null,db),cljs.core.deref.call(null,current_chat_id));
});})(current_chat_id))
);
return reagent.ratom.make_reaction.call(null,((function (current_chat_id,chat_updated){
return (function (){
var ___$1 = cljs.core.deref.call(null,chat_updated);
var temp__4425__auto__ = cljs.core.deref.call(null,current_chat_id);
if(cljs.core.truth_(temp__4425__auto__)){
var chat_id = temp__4425__auto__;
return syng_im.models.chats.chat_by_id.call(null,chat_id);
} else {
return null;
}
});})(current_chat_id,chat_updated))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-user-identity","get-user-identity",-468793052),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"user-identity","user-identity",-1070003046));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-loading","get-loading",-1314671847),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"loading","loading",-737050189));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"signed-up","signed-up",1759593449),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"signed-up","signed-up",1759593449));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-contacts","get-contacts",622383178),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"contacts","contacts",333503174));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"all-contacts","all-contacts",-1632037058),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return syng_im.models.contacts.contacts_list.call(null);
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"all-new-contacts","all-new-contacts",1375589075),(function (db,_){
var current_chat_id = reagent.ratom.make_reaction.call(null,(function (){
return syng_im.models.chat.current_chat_id.call(null,cljs.core.deref.call(null,db));
}));
var chat = reagent.ratom.make_reaction.call(null,((function (current_chat_id){
return (function (){
var temp__4425__auto__ = cljs.core.deref.call(null,current_chat_id);
if(cljs.core.truth_(temp__4425__auto__)){
var chat_id = temp__4425__auto__;
return syng_im.models.chats.chat_by_id.call(null,chat_id);
} else {
return null;
}
});})(current_chat_id))
);
return reagent.ratom.make_reaction.call(null,((function (current_chat_id,chat){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,chat))){
var current_participants = cljs.core.map.call(null,new cljs.core.Keyword(null,"identity","identity",1647396035),new cljs.core.Keyword(null,"contacts","contacts",333503174).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chat)));
return syng_im.models.contacts.contacts_list_exclude.call(null,current_participants);
} else {
return null;
}
});})(current_chat_id,chat))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"current-chat-contacts","current-chat-contacts",-1543570255),(function (db,_){
var current_chat_id = reagent.ratom.make_reaction.call(null,(function (){
return syng_im.models.chat.current_chat_id.call(null,cljs.core.deref.call(null,db));
}));
var chat = reagent.ratom.make_reaction.call(null,((function (current_chat_id){
return (function (){
var temp__4425__auto__ = cljs.core.deref.call(null,current_chat_id);
if(cljs.core.truth_(temp__4425__auto__)){
var chat_id = temp__4425__auto__;
return syng_im.models.chats.chat_by_id.call(null,chat_id);
} else {
return null;
}
});})(current_chat_id))
);
return reagent.ratom.make_reaction.call(null,((function (current_chat_id,chat){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,chat))){
var current_participants = cljs.core.map.call(null,new cljs.core.Keyword(null,"identity","identity",1647396035),new cljs.core.Keyword(null,"contacts","contacts",333503174).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chat)));
return syng_im.models.contacts.contacts_list_include.call(null,current_participants);
} else {
return null;
}
});})(current_chat_id,chat))
);
}));

//# sourceMappingURL=subs.js.map