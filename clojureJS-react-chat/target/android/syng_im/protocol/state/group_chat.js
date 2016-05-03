// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.protocol.state.group_chat');
goog.require('cljs.core');
goog.require('syng_im.protocol.state.storage');
goog.require('syng_im.protocol.state.state');
syng_im.protocol.state.group_chat.topic_keypair_key = (function syng_im$protocol$state$group_chat$topic_keypair_key(topic){
return [cljs.core.str("group-chat.topic-keypair."),cljs.core.str(topic)].join('');
});
syng_im.protocol.state.group_chat.topic_identities_key = (function syng_im$protocol$state$group_chat$topic_identities_key(topic){
return [cljs.core.str("group-chat.topic-identities."),cljs.core.str(topic)].join('');
});
syng_im.protocol.state.group_chat.topic_admin_ident_key = (function syng_im$protocol$state$group_chat$topic_admin_ident_key(topic){
return [cljs.core.str("group-chat.topic-admin-ident."),cljs.core.str(topic)].join('');
});
syng_im.protocol.state.group_chat.save_keypair = (function syng_im$protocol$state$group_chat$save_keypair(storage,topic,keypair){
var key = syng_im.protocol.state.group_chat.topic_keypair_key.call(null,topic);
return syng_im.protocol.state.storage.put.call(null,storage,key,keypair);
});
syng_im.protocol.state.group_chat.save_identities = (function syng_im$protocol$state$group_chat$save_identities(storage,topic,identities){
var key = syng_im.protocol.state.group_chat.topic_identities_key.call(null,topic);
return syng_im.protocol.state.storage.put.call(null,storage,key,identities);
});
syng_im.protocol.state.group_chat.get_identities = (function syng_im$protocol$state$group_chat$get_identities(storage,topic){
var key = syng_im.protocol.state.group_chat.topic_identities_key.call(null,topic);
return syng_im.protocol.state.storage.get.call(null,storage,key);
});
syng_im.protocol.state.group_chat.add_identity = (function syng_im$protocol$state$group_chat$add_identity(storage,topic,identity){
var identities = syng_im.protocol.state.group_chat.get_identities.call(null,storage,topic);
if(cljs.core.contains_QMARK_.call(null,identities,identity)){
return null;
} else {
return syng_im.protocol.state.group_chat.save_identities.call(null,storage,topic,cljs.core.conj.call(null,identities,identity));
}
});
syng_im.protocol.state.group_chat.remove_identity = (function syng_im$protocol$state$group_chat$remove_identity(storage,topic,identity){
var identities = syng_im.protocol.state.group_chat.get_identities.call(null,storage,topic);
if(cljs.core.contains_QMARK_.call(null,identities,identity)){
return syng_im.protocol.state.group_chat.save_identities.call(null,storage,topic,cljs.core.disj.call(null,identities,identity));
} else {
return null;
}
});
syng_im.protocol.state.group_chat.group_member_QMARK_ = (function syng_im$protocol$state$group_chat$group_member_QMARK_(storage,topic,identity){
var identities = syng_im.protocol.state.group_chat.get_identities.call(null,storage,topic);
return cljs.core.contains_QMARK_.call(null,identities,identity);
});
syng_im.protocol.state.group_chat.get_peer_identities = (function syng_im$protocol$state$group_chat$get_peer_identities(storage,topic){
return cljs.core.disj.call(null,syng_im.protocol.state.group_chat.get_identities.call(null,storage,topic),syng_im.protocol.state.state.my_identity.call(null));
});
syng_im.protocol.state.group_chat.chat_exists_QMARK_ = (function syng_im$protocol$state$group_chat$chat_exists_QMARK_(storage,topic){
var key = syng_im.protocol.state.group_chat.topic_keypair_key.call(null,topic);
return syng_im.protocol.state.storage.contains_key_QMARK_.call(null,storage,key);
});
syng_im.protocol.state.group_chat.get_keypair = (function syng_im$protocol$state$group_chat$get_keypair(storage,topic){
var key = syng_im.protocol.state.group_chat.topic_keypair_key.call(null,topic);
return syng_im.protocol.state.storage.get.call(null,storage,key);
});
syng_im.protocol.state.group_chat.remove_group_data = (function syng_im$protocol$state$group_chat$remove_group_data(storage,topic){
var keypair_key = syng_im.protocol.state.group_chat.topic_keypair_key.call(null,topic);
var identities_key = syng_im.protocol.state.group_chat.topic_identities_key.call(null,topic);
syng_im.protocol.state.storage.delete$.call(null,storage,keypair_key);

return syng_im.protocol.state.storage.delete$.call(null,storage,identities_key);
});
syng_im.protocol.state.group_chat.save_group_admin = (function syng_im$protocol$state$group_chat$save_group_admin(storage,topic,identity){
var key = syng_im.protocol.state.group_chat.topic_admin_ident_key.call(null,topic);
return syng_im.protocol.state.storage.put.call(null,storage,key,identity);
});
syng_im.protocol.state.group_chat.group_admin_QMARK_ = (function syng_im$protocol$state$group_chat$group_admin_QMARK_(storage,topic,identity){
var key = syng_im.protocol.state.group_chat.topic_admin_ident_key.call(null,topic);
return cljs.core._EQ_.call(null,identity,syng_im.protocol.state.storage.get.call(null,storage,key));
});

//# sourceMappingURL=group_chat.js.map