// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.handlers.sign_up');
goog.require('cljs.core');
goog.require('syng_im.models.chat');
goog.require('syng_im.constants');
goog.require('syng_im.utils.logging');
goog.require('syng_im.persistence.simple_kv_store');
goog.require('syng_im.utils.phone_number');
goog.require('syng_im.utils.utils');
goog.require('syng_im.utils.random');
goog.require('syng_im.db');
goog.require('syng_im.protocol.state.storage');
goog.require('syng_im.models.commands');
goog.require('re_frame.core');
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-signed-up","set-signed-up",-1242854381),true], null));
syng_im.handlers.sign_up.send_console_msg = (function syng_im$handlers$sign_up$send_console_msg(text){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869),syng_im.utils.random.id.call(null),new cljs.core.Keyword(null,"from","from",1815293044),"me",new cljs.core.Keyword(null,"to","to",192099007),"console",new cljs.core.Keyword(null,"content","content",15833224),text,new cljs.core.Keyword(null,"content-type","content-type",-508222634),syng_im.constants.text_content_type,new cljs.core.Keyword(null,"outgoing","outgoing",1124752575),true], null);
});
syng_im.handlers.sign_up.set_signed_up = (function syng_im$handlers$sign_up$set_signed_up(db,signed_up){
syng_im.protocol.state.storage.put.call(null,syng_im.persistence.simple_kv_store.kv_store,new cljs.core.Keyword(null,"signed-up","signed-up",1759593449),signed_up);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"signed-up","signed-up",1759593449),signed_up);
});
syng_im.handlers.sign_up.on_sync_contacts = (function syng_im$handlers$sign_up$on_sync_contacts(){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"received-msg","received-msg",676811427),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869),syng_im.utils.random.id.call(null),new cljs.core.Keyword(null,"content","content",15833224),[cljs.core.str("Your contacts have been synchronized")].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),syng_im.constants.text_content_type,new cljs.core.Keyword(null,"outgoing","outgoing",1124752575),false,new cljs.core.Keyword(null,"from","from",1815293044),"console",new cljs.core.Keyword(null,"to","to",192099007),"me"], null)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-signed-up","set-signed-up",-1242854381),true], null));
});
syng_im.handlers.sign_up.sync_contacts = (function syng_im$handlers$sign_up$sync_contacts(){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sync-contacts","sync-contacts",441585507),syng_im.handlers.sign_up.on_sync_contacts], null));
});
syng_im.handlers.sign_up.on_send_code_response = (function syng_im$handlers$sign_up$on_send_code_response(msg_id,body){
if(cljs.core.truth_(new cljs.core.Keyword(null,"confirmed","confirmed",-487126323).cljs$core$IFn$_invoke$arity$1(body))){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-chat-command-request","set-chat-command-request",-349675109),msg_id,null], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"received-msg","received-msg",676811427),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869),syng_im.utils.random.id.call(null),new cljs.core.Keyword(null,"content","content",15833224),"Confirmed",new cljs.core.Keyword(null,"content-type","content-type",-508222634),syng_im.constants.text_content_type,new cljs.core.Keyword(null,"outgoing","outgoing",1124752575),false,new cljs.core.Keyword(null,"from","from",1815293044),"console",new cljs.core.Keyword(null,"to","to",192099007),"me"], null)], null));

return syng_im.handlers.sign_up.sync_contacts.call(null);
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"received-msg","received-msg",676811427),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869),syng_im.utils.random.id.call(null),new cljs.core.Keyword(null,"content","content",15833224),"Wrong code",new cljs.core.Keyword(null,"content-type","content-type",-508222634),syng_im.constants.text_content_type,new cljs.core.Keyword(null,"outgoing","outgoing",1124752575),false,new cljs.core.Keyword(null,"from","from",1815293044),"console",new cljs.core.Keyword(null,"to","to",192099007),"me"], null)], null));
}
});
syng_im.handlers.sign_up.send_code = (function syng_im$handlers$sign_up$send_code(msg_id,code){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sign-up-confirm","sign-up-confirm",1070456140),code,cljs.core.partial.call(null,syng_im.handlers.sign_up.on_send_code_response,msg_id)], null));
});
syng_im.handlers.sign_up.handle_confirmation_code = (function syng_im$handlers$sign_up$handle_confirmation_code(msg_id,command_key,content){
if(cljs.core._EQ_.call(null,command_key,new cljs.core.Keyword(null,"confirmation-code","confirmation-code",800663891))){
return syng_im.handlers.sign_up.send_code.call(null,msg_id,content);
} else {
return null;
}
});
syng_im.handlers.sign_up.on_sign_up_response = (function syng_im$handlers$sign_up$on_sign_up_response(){
var msg_id = syng_im.utils.random.id.call(null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"received-msg","received-msg",676811427),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869),msg_id,new cljs.core.Keyword(null,"content","content",15833224),syng_im.models.commands.format_command_request_msg_content.call(null,new cljs.core.Keyword(null,"confirmation-code","confirmation-code",800663891),[cljs.core.str("Thanks! We've sent you a text message with a confirmation "),cljs.core.str("code. Please provide that code to confirm your phone number")].join('')),new cljs.core.Keyword(null,"content-type","content-type",-508222634),syng_im.constants.content_type_command_request,new cljs.core.Keyword(null,"outgoing","outgoing",1124752575),false,new cljs.core.Keyword(null,"from","from",1815293044),"console",new cljs.core.Keyword(null,"to","to",192099007),"me"], null)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-chat-command-request","set-chat-command-request",-349675109),msg_id,syng_im.handlers.sign_up.handle_confirmation_code], null));
});
syng_im.handlers.sign_up.handle_phone = (function syng_im$handlers$sign_up$handle_phone(msg_id,command_key,content){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-chat-command-request","set-chat-command-request",-349675109),msg_id,null], null));

if(cljs.core._EQ_.call(null,command_key,new cljs.core.Keyword(null,"phone","phone",-763596057))){
var phone_number = syng_im.utils.phone_number.format_phone_number.call(null,content);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sign-up","sign-up",-1190725688),phone_number,syng_im.handlers.sign_up.on_sign_up_response], null));
} else {
return null;
}
});
syng_im.handlers.sign_up.save_password = (function syng_im$handlers$sign_up$save_password(password){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"received-msg","received-msg",676811427),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869),syng_im.utils.random.id.call(null),new cljs.core.Keyword(null,"content","content",15833224),[cljs.core.str("OK great! Your password has been saved. Just to let you "),cljs.core.str("know, you can always change it in the Console, by the way, "),cljs.core.str("it's me, the Console, nice to meet you!")].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),syng_im.constants.text_content_type,new cljs.core.Keyword(null,"outgoing","outgoing",1124752575),false,new cljs.core.Keyword(null,"from","from",1815293044),"console",new cljs.core.Keyword(null,"to","to",192099007),"me"], null)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"received-msg","received-msg",676811427),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869),syng_im.utils.random.id.call(null),new cljs.core.Keyword(null,"content","content",15833224),[cljs.core.str("I'll generate a passphrase for you so you can restore your "),cljs.core.str("access or log in from another device")].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),syng_im.constants.text_content_type,new cljs.core.Keyword(null,"outgoing","outgoing",1124752575),false,new cljs.core.Keyword(null,"from","from",1815293044),"console",new cljs.core.Keyword(null,"to","to",192099007),"me"], null)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"received-msg","received-msg",676811427),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869),syng_im.utils.random.id.call(null),new cljs.core.Keyword(null,"content","content",15833224),"Here's your passphrase:",new cljs.core.Keyword(null,"content-type","content-type",-508222634),syng_im.constants.text_content_type,new cljs.core.Keyword(null,"outgoing","outgoing",1124752575),false,new cljs.core.Keyword(null,"from","from",1815293044),"console",new cljs.core.Keyword(null,"to","to",192099007),"me"], null)], null));

var passphrase_44762 = [cljs.core.str("The brash businessman's braggadocio and public squabbing with "),cljs.core.str("candidates in the US presidential ")].join('');
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"received-msg","received-msg",676811427),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869),syng_im.utils.random.id.call(null),new cljs.core.Keyword(null,"content","content",15833224),passphrase_44762,new cljs.core.Keyword(null,"content-type","content-type",-508222634),syng_im.constants.text_content_type,new cljs.core.Keyword(null,"outgoing","outgoing",1124752575),false,new cljs.core.Keyword(null,"from","from",1815293044),"console",new cljs.core.Keyword(null,"to","to",192099007),"me"], null)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"received-msg","received-msg",676811427),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869),"8",new cljs.core.Keyword(null,"content","content",15833224),"Make sure you had securely written it down",new cljs.core.Keyword(null,"content-type","content-type",-508222634),syng_im.constants.text_content_type,new cljs.core.Keyword(null,"outgoing","outgoing",1124752575),false,new cljs.core.Keyword(null,"from","from",1815293044),"console",new cljs.core.Keyword(null,"to","to",192099007),"me"], null)], null));

var msg_id = syng_im.utils.random.id.call(null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"received-msg","received-msg",676811427),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869),msg_id,new cljs.core.Keyword(null,"content","content",15833224),syng_im.models.commands.format_command_request_msg_content.call(null,new cljs.core.Keyword(null,"phone","phone",-763596057),[cljs.core.str("Your phone number is also required to use the app. Type the "),cljs.core.str("exclamation mark or hit the icon to open the command list "),cljs.core.str("and choose the !phone command")].join('')),new cljs.core.Keyword(null,"content-type","content-type",-508222634),syng_im.constants.content_type_command_request,new cljs.core.Keyword(null,"outgoing","outgoing",1124752575),false,new cljs.core.Keyword(null,"from","from",1815293044),"console",new cljs.core.Keyword(null,"to","to",192099007),"me"], null)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-chat-command-request","set-chat-command-request",-349675109),msg_id,syng_im.handlers.sign_up.handle_phone], null));
});
syng_im.handlers.sign_up.handle_password = (function syng_im$handlers$sign_up$handle_password(msg_id,command_key,content){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-chat-command-request","set-chat-command-request",-349675109),msg_id,null], null));

if(cljs.core._EQ_.call(null,command_key,new cljs.core.Keyword(null,"keypair-password","keypair-password",-1917617661))){
return syng_im.handlers.sign_up.save_password.call(null,content);
} else {
return null;
}
});
syng_im.handlers.sign_up.intro = (function syng_im$handlers$sign_up$intro(db){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"received-msg","received-msg",676811427),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869),"intro-message1",new cljs.core.Keyword(null,"content","content",15833224),"Hello there! It's Syng, a Dapp browser in your phone.",new cljs.core.Keyword(null,"content-type","content-type",-508222634),syng_im.constants.text_content_type,new cljs.core.Keyword(null,"outgoing","outgoing",1124752575),false,new cljs.core.Keyword(null,"from","from",1815293044),"console",new cljs.core.Keyword(null,"to","to",192099007),"me"], null)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"received-msg","received-msg",676811427),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869),"intro-message2",new cljs.core.Keyword(null,"content","content",15833224),[cljs.core.str("Syng uses  a highly secure key-pair authentication type "),cljs.core.str("to provide you a reliable way to access your account")].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),syng_im.constants.text_content_type,new cljs.core.Keyword(null,"outgoing","outgoing",1124752575),false,new cljs.core.Keyword(null,"from","from",1815293044),"console",new cljs.core.Keyword(null,"to","to",192099007),"me"], null)], null));

var msg_id_44763 = "into-message3";
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"received-msg","received-msg",676811427),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869),msg_id_44763,new cljs.core.Keyword(null,"content","content",15833224),syng_im.models.commands.format_command_request_msg_content.call(null,new cljs.core.Keyword(null,"keypair-password","keypair-password",-1917617661),[cljs.core.str("A key pair has been generated and saved to your device. "),cljs.core.str("Create a password to secure your key")].join('')),new cljs.core.Keyword(null,"content-type","content-type",-508222634),syng_im.constants.content_type_command_request,new cljs.core.Keyword(null,"outgoing","outgoing",1124752575),false,new cljs.core.Keyword(null,"from","from",1815293044),"console",new cljs.core.Keyword(null,"to","to",192099007),"me"], null)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-chat-command-request","set-chat-command-request",-349675109),msg_id_44763,syng_im.handlers.sign_up.handle_password], null));

return db;
});
syng_im.handlers.sign_up.send_console_command = (function syng_im$handlers$sign_up$send_console_command(db,command_key,content){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869),syng_im.utils.random.id.call(null),new cljs.core.Keyword(null,"from","from",1815293044),"me",new cljs.core.Keyword(null,"to","to",192099007),"console",new cljs.core.Keyword(null,"content","content",15833224),content,new cljs.core.Keyword(null,"content-type","content-type",-508222634),syng_im.constants.content_type_command,new cljs.core.Keyword(null,"outgoing","outgoing",1124752575),true], null);
});
syng_im.handlers.sign_up.init = (function syng_im$handlers$sign_up$init(db){
var signed_up = syng_im.protocol.state.storage.get.call(null,syng_im.persistence.simple_kv_store.kv_store,new cljs.core.Keyword(null,"signed-up","signed-up",1759593449));
var db__$1 = (cljs.core.truth_(signed_up)?db:syng_im.handlers.sign_up.intro.call(null,syng_im.models.chat.set_current_chat_id.call(null,db,"console")));
return cljs.core.assoc.call(null,db__$1,new cljs.core.Keyword(null,"signed-up","signed-up",1759593449),signed_up);
});

//# sourceMappingURL=sign_up.js.map