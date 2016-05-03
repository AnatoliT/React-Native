// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.db');
goog.require('cljs.core');
goog.require('schema.core');
syng_im.db.schema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"greeting","greeting",462222107),schema.core.Str], null);
syng_im.db.app_db = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"contacts","contacts",333503174),new cljs.core.Keyword(null,"signed-up","signed-up",1759593449),new cljs.core.Keyword(null,"new-group","new-group",-1853027446),new cljs.core.Keyword(null,"chats","chats",518672204),new cljs.core.Keyword(null,"chats-updated-signal","chats-updated-signal",-1199714227),new cljs.core.Keyword(null,"chat","chat",-518268339),new cljs.core.Keyword(null,"new-participants","new-participants",-457836397),new cljs.core.Keyword(null,"greeting","greeting",462222107),new cljs.core.Keyword(null,"identity-password","identity-password",-167485251),new cljs.core.Keyword(null,"profile","profile",-545963874)],[cljs.core.PersistentVector.EMPTY,false,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,(0),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-chat-id","current-chat-id",-523299974),"0x0479a5ed1f38cadfad1db6cd56c4b659b0ebe052bbe9efa950f6660058519fa4ca6be2dda66afa80de96ab00eb97a2605d5267a1e8f4c2a166ab551f6826608cdd",new cljs.core.Keyword(null,"command","command",-894540724),null], null),cljs.core.PersistentHashSet.EMPTY,"Hello Clojure in iOS and Android!","replace-me-with-user-entered-password",cljs.core.PersistentHashSet.EMPTY]);
syng_im.db.protocol_initialized_path = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-initialized","protocol-initialized",680045225)], null);
syng_im.db.identity_password_path = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"identity-password","identity-password",-167485251)], null);
syng_im.db.current_chat_id_path = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chat","chat",-518268339),new cljs.core.Keyword(null,"current-chat-id","current-chat-id",-523299974)], null);
syng_im.db.updated_chats_signal_path = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chats-updated-signal","chats-updated-signal",-1199714227)], null);
syng_im.db.updated_chat_signal_path = (function syng_im$db$updated_chat_signal_path(chat_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chats","chats",518672204),chat_id,new cljs.core.Keyword(null,"chat-updated-signal","chat-updated-signal",-1985442618)], null);
});
syng_im.db.chat_input_text_path = (function syng_im$db$chat_input_text_path(chat_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chats","chats",518672204),chat_id,new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null);
});
syng_im.db.chat_staged_commands_path = (function syng_im$db$chat_staged_commands_path(chat_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chats","chats",518672204),chat_id,new cljs.core.Keyword(null,"staged-commands","staged-commands",894586611)], null);
});
syng_im.db.chat_command_path = (function syng_im$db$chat_command_path(chat_id){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chats","chats",518672204),chat_id,new cljs.core.Keyword(null,"command-input","command-input",-1841077013),new cljs.core.Keyword(null,"command","command",-894540724)], null);
});
syng_im.db.chat_command_to_msg_id_path = (function syng_im$db$chat_command_to_msg_id_path(chat_id){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chats","chats",518672204),chat_id,new cljs.core.Keyword(null,"command-input","command-input",-1841077013),new cljs.core.Keyword(null,"to-msg-id","to-msg-id",1481775003)], null);
});
syng_im.db.chat_command_content_path = (function syng_im$db$chat_command_content_path(chat_id){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chats","chats",518672204),chat_id,new cljs.core.Keyword(null,"command-input","command-input",-1841077013),new cljs.core.Keyword(null,"content","content",15833224)], null);
});
syng_im.db.chat_command_requests_path = (function syng_im$db$chat_command_requests_path(chat_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chats","chats",518672204),chat_id,new cljs.core.Keyword(null,"command-requests","command-requests",-798113703)], null);
});
syng_im.db.chat_command_request_path = (function syng_im$db$chat_command_request_path(chat_id,msg_id){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chats","chats",518672204),chat_id,new cljs.core.Keyword(null,"command-requests","command-requests",-798113703),msg_id], null);
});
syng_im.db.new_group_path = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-group","new-group",-1853027446)], null);
syng_im.db.new_participants_path = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-participants","new-participants",-457836397)], null);

//# sourceMappingURL=db.js.map