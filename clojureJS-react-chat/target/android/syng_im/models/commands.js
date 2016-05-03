// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.models.commands');
goog.require('cljs.core');
goog.require('syng_im.resources');
goog.require('syng_im.models.chat');
goog.require('syng_im.utils.logging');
goog.require('cljs.core.async');
goog.require('syng_im.components.styles');
goog.require('syng_im.utils.utils');
goog.require('syng_im.db');
goog.require('syng_im.persistence.realm');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('re_frame.core');
syng_im.models.commands.commands = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"money","money",250333921),new cljs.core.Keyword(null,"text","text",-1790561697),"!money",new cljs.core.Keyword(null,"description","description",-1428560544),"Send money",new cljs.core.Keyword(null,"color","color",1011675173),syng_im.components.styles.color_dark_mint,new cljs.core.Keyword(null,"request-icon","request-icon",1907014469),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",-774711847),"icon_lock_white"], null),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",-774711847),"icon_lock_gray"], null),new cljs.core.Keyword(null,"suggestion","suggestion",1624613388),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"text","text",-1790561697),"!location",new cljs.core.Keyword(null,"description","description",-1428560544),"Send location",new cljs.core.Keyword(null,"color","color",1011675173),"#9a5dcf",new cljs.core.Keyword(null,"suggestion","suggestion",1624613388),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"phone","phone",-763596057),new cljs.core.Keyword(null,"text","text",-1790561697),"!phone",new cljs.core.Keyword(null,"description","description",-1428560544),"Send phone number",new cljs.core.Keyword(null,"color","color",1011675173),syng_im.components.styles.color_dark_mint,new cljs.core.Keyword(null,"suggestion","suggestion",1624613388),true], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"confirmation-code","confirmation-code",800663891),new cljs.core.Keyword(null,"text","text",-1790561697),"!confirmationCode",new cljs.core.Keyword(null,"description","description",-1428560544),"Send confirmation code",new cljs.core.Keyword(null,"request-text","request-text",2038241266),"Confirmation code request",new cljs.core.Keyword(null,"color","color",1011675173),syng_im.components.styles.color_blue,new cljs.core.Keyword(null,"request-icon","request-icon",1907014469),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",-774711847),"icon_lock_white"], null),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",-774711847),"icon_lock_gray"], null),new cljs.core.Keyword(null,"suggestion","suggestion",1624613388),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"send","send",-652151114),new cljs.core.Keyword(null,"text","text",-1790561697),"!send",new cljs.core.Keyword(null,"description","description",-1428560544),"Send location",new cljs.core.Keyword(null,"color","color",1011675173),"#9a5dcf",new cljs.core.Keyword(null,"suggestion","suggestion",1624613388),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"text","text",-1790561697),"!request",new cljs.core.Keyword(null,"description","description",-1428560544),"Send request",new cljs.core.Keyword(null,"color","color",1011675173),"#48ba30",new cljs.core.Keyword(null,"suggestion","suggestion",1624613388),true], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"keypair-password","keypair-password",-1917617661),new cljs.core.Keyword(null,"text","text",-1790561697),"!keypairPassword",new cljs.core.Keyword(null,"description","description",-1428560544),"",new cljs.core.Keyword(null,"color","color",1011675173),syng_im.components.styles.color_blue,new cljs.core.Keyword(null,"request-icon","request-icon",1907014469),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",-774711847),"icon_lock_white"], null),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",-774711847),"icon_lock_gray"], null),new cljs.core.Keyword(null,"suggestion","suggestion",1624613388),false], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"help","help",-439233446),new cljs.core.Keyword(null,"text","text",-1790561697),"!help",new cljs.core.Keyword(null,"description","description",-1428560544),"Help",new cljs.core.Keyword(null,"color","color",1011675173),"#9a5dcf",new cljs.core.Keyword(null,"suggestion","suggestion",1624613388),true], null)], null);
syng_im.models.commands.get_commands = (function syng_im$models$commands$get_commands(db){
return syng_im.models.commands.commands;
});
syng_im.models.commands.set_commands = (function syng_im$models$commands$set_commands(db,commands){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"commands","commands",161008658),commands);
});
syng_im.models.commands.suggestions = cljs.core.filterv.call(null,new cljs.core.Keyword(null,"suggestion","suggestion",1624613388),syng_im.models.commands.commands);
syng_im.models.commands.get_command = (function syng_im$models$commands$get_command(db,command_key){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__44633_SHARP_){
return cljs.core._EQ_.call(null,command_key,new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(p1__44633_SHARP_));
}),syng_im.models.commands.get_commands.call(null,db)));
});
syng_im.models.commands.find_command = (function syng_im$models$commands$find_command(commands,command_key){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__44634_SHARP_){
return cljs.core._EQ_.call(null,command_key,new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(p1__44634_SHARP_));
}),commands));
});
syng_im.models.commands.get_chat_command_content = (function syng_im$models$commands$get_chat_command_content(db){
return cljs.core.get_in.call(null,db,syng_im.db.chat_command_content_path.call(null,syng_im.models.chat.current_chat_id.call(null,db)));
});
syng_im.models.commands.set_chat_command_content = (function syng_im$models$commands$set_chat_command_content(db,content){
return cljs.core.assoc_in.call(null,db,syng_im.db.chat_command_content_path.call(null,cljs.core.get_in.call(null,db,syng_im.db.current_chat_id_path)),content);
});
syng_im.models.commands.get_chat_command = (function syng_im$models$commands$get_chat_command(db){
return cljs.core.get_in.call(null,db,syng_im.db.chat_command_path.call(null,syng_im.models.chat.current_chat_id.call(null,db)));
});
syng_im.models.commands.set_response_chat_command = (function syng_im$models$commands$set_response_chat_command(db,msg_id,command_key){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,syng_im.models.commands.set_chat_command_content.call(null,db,null),syng_im.db.chat_command_path.call(null,syng_im.models.chat.current_chat_id.call(null,db)),syng_im.models.commands.get_command.call(null,db,command_key)),syng_im.db.chat_command_to_msg_id_path.call(null,syng_im.models.chat.current_chat_id.call(null,db)),msg_id);
});
syng_im.models.commands.set_chat_command = (function syng_im$models$commands$set_chat_command(db,command_key){
return syng_im.models.commands.set_response_chat_command.call(null,db,null,command_key);
});
syng_im.models.commands.get_chat_command_to_msg_id = (function syng_im$models$commands$get_chat_command_to_msg_id(db){
return cljs.core.get_in.call(null,db,syng_im.db.chat_command_to_msg_id_path.call(null,syng_im.models.chat.current_chat_id.call(null,db)));
});
syng_im.models.commands.stage_command = (function syng_im$models$commands$stage_command(db,command_info){
return cljs.core.update_in.call(null,db,syng_im.db.chat_staged_commands_path.call(null,syng_im.models.chat.current_chat_id.call(null,db)),(function (staged_commands){
if(cljs.core.truth_(staged_commands)){
return cljs.core.conj.call(null,staged_commands,command_info);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [command_info], null);
}
}));
});
syng_im.models.commands.unstage_command = (function syng_im$models$commands$unstage_command(db,staged_command){
return cljs.core.update_in.call(null,db,syng_im.db.chat_staged_commands_path.call(null,syng_im.models.chat.current_chat_id.call(null,db)),(function (staged_commands){
return cljs.core.filterv.call(null,(function (p1__44635_SHARP_){
return cljs.core.not_EQ_.call(null,p1__44635_SHARP_,staged_command);
}),staged_commands);
}));
});
syng_im.models.commands.clear_staged_commands = (function syng_im$models$commands$clear_staged_commands(db){
return cljs.core.assoc_in.call(null,db,syng_im.db.chat_staged_commands_path.call(null,syng_im.models.chat.current_chat_id.call(null,db)),cljs.core.PersistentVector.EMPTY);
});
syng_im.models.commands.get_chat_command_request = (function syng_im$models$commands$get_chat_command_request(db){
return cljs.core.get_in.call(null,db,syng_im.db.chat_command_request_path.call(null,syng_im.models.chat.current_chat_id.call(null,db),syng_im.models.commands.get_chat_command_to_msg_id.call(null,db)));
});
syng_im.models.commands.set_chat_command_request = (function syng_im$models$commands$set_chat_command_request(db,msg_id,handler){
return cljs.core.update_in.call(null,db,syng_im.db.chat_command_requests_path.call(null,syng_im.models.chat.current_chat_id.call(null,db)),(function (requests){
if(cljs.core.truth_(requests)){
return cljs.core.assoc.call(null,requests,msg_id,handler);
} else {
return cljs.core.PersistentArrayMap.fromArray([msg_id,handler], true, false);
}
}));
});
syng_im.models.commands.map_to_str = (function syng_im$models$commands$map_to_str(m){
return clojure.string.join.call(null,";",cljs.core.map.call(null,(function (p1__44636_SHARP_){
return clojure.string.join.call(null,"=",p1__44636_SHARP_);
}),clojure.walk.stringify_keys.call(null,m)));
});
syng_im.models.commands.str_to_map = (function syng_im$models$commands$str_to_map(s){
return clojure.walk.keywordize_keys.call(null,cljs.core.apply.call(null,cljs.core.hash_map,clojure.string.split.call(null,s,/[;=]/)));
});
syng_im.models.commands.format_command_msg_content = (function syng_im$models$commands$format_command_msg_content(command,content){
return syng_im.models.commands.map_to_str.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),cljs.core.name.call(null,command),new cljs.core.Keyword(null,"content","content",15833224),content], null));
});
syng_im.models.commands.parse_command_msg_content = (function syng_im$models$commands$parse_command_msg_content(commands,content){
syng_im.utils.logging.info.call(null,content);

syng_im.utils.logging.info.call(null,cljs.core.update.call(null,syng_im.models.commands.str_to_map.call(null,content),new cljs.core.Keyword(null,"command","command",-894540724),(function (p1__44637_SHARP_){
return syng_im.models.commands.find_command.call(null,commands,cljs.core.keyword.call(null,p1__44637_SHARP_));
})));

return cljs.core.update.call(null,syng_im.models.commands.str_to_map.call(null,content),new cljs.core.Keyword(null,"command","command",-894540724),(function (p1__44638_SHARP_){
return syng_im.models.commands.find_command.call(null,commands,cljs.core.keyword.call(null,p1__44638_SHARP_));
}));
});
syng_im.models.commands.format_command_request_msg_content = (function syng_im$models$commands$format_command_request_msg_content(command,content){
return syng_im.models.commands.map_to_str.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),cljs.core.name.call(null,command),new cljs.core.Keyword(null,"content","content",15833224),content], null));
});
syng_im.models.commands.parse_command_request_msg_content = (function syng_im$models$commands$parse_command_request_msg_content(commands,content){
return cljs.core.update.call(null,syng_im.models.commands.str_to_map.call(null,content),new cljs.core.Keyword(null,"command","command",-894540724),(function (p1__44639_SHARP_){
return syng_im.models.commands.find_command.call(null,commands,cljs.core.keyword.call(null,p1__44639_SHARP_));
}));
});

//# sourceMappingURL=commands.js.map