// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.models.chat');
goog.require('cljs.core');
goog.require('syng_im.db');
syng_im.models.chat.set_current_chat_id = (function syng_im$models$chat$set_current_chat_id(db,chat_id){
return cljs.core.assoc_in.call(null,db,syng_im.db.current_chat_id_path,chat_id);
});
syng_im.models.chat.current_chat_id = (function syng_im$models$chat$current_chat_id(db){
return cljs.core.get_in.call(null,db,syng_im.db.current_chat_id_path);
});
syng_im.models.chat.signal_chat_updated = (function syng_im$models$chat$signal_chat_updated(db,chat_id){
return cljs.core.update_in.call(null,db,syng_im.db.updated_chat_signal_path.call(null,chat_id),(function (current){
if(cljs.core.truth_(current)){
return (current + (1));
} else {
return (0);
}
}));
});
syng_im.models.chat.chat_updated_QMARK_ = (function syng_im$models$chat$chat_updated_QMARK_(db,chat_id){
return cljs.core.get_in.call(null,db,syng_im.db.updated_chat_signal_path.call(null,chat_id));
});
syng_im.models.chat.update_new_group_selection = (function syng_im$models$chat$update_new_group_selection(db,identity,add_QMARK_){
return cljs.core.update_in.call(null,db,syng_im.db.new_group_path,(function (new_group){
if(cljs.core.truth_(add_QMARK_)){
return cljs.core.conj.call(null,new_group,identity);
} else {
return cljs.core.disj.call(null,new_group,identity);
}
}));
});
syng_im.models.chat.update_new_participants_selection = (function syng_im$models$chat$update_new_participants_selection(db,identity,add_QMARK_){
return cljs.core.update_in.call(null,db,syng_im.db.new_participants_path,(function (new_participants){
if(cljs.core.truth_(add_QMARK_)){
return cljs.core.conj.call(null,new_participants,identity);
} else {
return cljs.core.disj.call(null,new_participants,identity);
}
}));
});
syng_im.models.chat.new_group_selection = (function syng_im$models$chat$new_group_selection(db){
return cljs.core.get_in.call(null,db,syng_im.db.new_group_path);
});
syng_im.models.chat.clear_new_group = (function syng_im$models$chat$clear_new_group(db){
return cljs.core.assoc_in.call(null,db,syng_im.db.new_group_path,cljs.core.PersistentHashSet.EMPTY);
});
syng_im.models.chat.new_participants_selection = (function syng_im$models$chat$new_participants_selection(db){
return cljs.core.get_in.call(null,db,syng_im.db.new_participants_path);
});
syng_im.models.chat.clear_new_participants = (function syng_im$models$chat$clear_new_participants(db){
return cljs.core.assoc_in.call(null,db,syng_im.db.new_participants_path,cljs.core.PersistentHashSet.EMPTY);
});
syng_im.models.chat.set_chat_input_text = (function syng_im$models$chat$set_chat_input_text(db,text){
return cljs.core.assoc_in.call(null,db,syng_im.db.chat_input_text_path.call(null,syng_im.models.chat.current_chat_id.call(null,db)),text);
});

//# sourceMappingURL=chat.js.map