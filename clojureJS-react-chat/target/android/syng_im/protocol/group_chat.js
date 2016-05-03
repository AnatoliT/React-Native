// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.protocol.group_chat');
goog.require('cljs.core');
goog.require('syng_im.protocol.state.state');
goog.require('syng_im.protocol.state.delivery');
goog.require('syng_im.protocol.state.group_chat');
goog.require('syng_im.protocol.web3');
syng_im.protocol.group_chat.group_msg = (function syng_im$protocol$group_chat$group_msg(group_id,public_key,payload,type){
return syng_im.protocol.web3.make_msg.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"from","from",1815293044),syng_im.protocol.state.state.my_identity.call(null),new cljs.core.Keyword(null,"topics","topics",625768208),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_id], null),new cljs.core.Keyword(null,"encrypt?","encrypt?",1215303258),true,new cljs.core.Keyword(null,"public-key","public-key",-2106850051),public_key,new cljs.core.Keyword(null,"payload","payload",-383036092),payload,new cljs.core.Keyword(null,"clear-info","clear-info",481595578),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"group-topic","group-topic",2135203879),group_id,new cljs.core.Keyword(null,"type","type",1174270348),type], null)], null));
});
syng_im.protocol.group_chat.send_group_msg = (function syng_im$protocol$group_chat$send_group_msg(p__28275){
var map__28282 = p__28275;
var map__28282__$1 = ((((!((map__28282 == null)))?((((map__28282.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28282.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28282):map__28282);
var group_id = cljs.core.get.call(null,map__28282__$1,new cljs.core.Keyword(null,"group-id","group-id",-1316082778));
var payload = cljs.core.get.call(null,map__28282__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var type = cljs.core.get.call(null,map__28282__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var internal_QMARK_ = cljs.core.get.call(null,map__28282__$1,new cljs.core.Keyword(null,"internal?","internal?",-383058705),false);
var store = syng_im.protocol.state.state.storage.call(null);
var map__28284 = syng_im.protocol.state.group_chat.get_keypair.call(null,store,group_id);
var map__28284__$1 = ((((!((map__28284 == null)))?((((map__28284.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28284.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28284):map__28284);
var public_key = cljs.core.get.call(null,map__28284__$1,new cljs.core.Keyword(null,"public","public",1566243851));
var map__28285 = syng_im.protocol.group_chat.group_msg.call(null,group_id,public_key,payload,type);
var map__28285__$1 = ((((!((map__28285 == null)))?((((map__28285.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28285.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28285):map__28285);
var new_msg = map__28285__$1;
var msg_id = cljs.core.get.call(null,map__28285__$1,new cljs.core.Keyword(null,"msg-id","msg-id",-1965771869));
var msg = cljs.core.get.call(null,map__28285__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
syng_im.protocol.state.delivery.add_pending_message.call(null,msg_id,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identities","identities",-2100677764),syng_im.protocol.state.group_chat.get_peer_identities.call(null,store,group_id),new cljs.core.Keyword(null,"internal?","internal?",-383058705),internal_QMARK_], null));

syng_im.protocol.web3.post_msg.call(null,syng_im.protocol.state.state.connection.call(null),msg);

return new_msg;
});
syng_im.protocol.group_chat.init_group_chat_msg = (function syng_im$protocol$group_chat$init_group_chat_msg(to,group_topic,identities,keypair,group_name){
return syng_im.protocol.web3.make_msg.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),syng_im.protocol.state.state.my_identity.call(null),new cljs.core.Keyword(null,"to","to",192099007),to,new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"init-group-chat","init-group-chat",93372634),new cljs.core.Keyword(null,"group-topic","group-topic",2135203879),group_topic,new cljs.core.Keyword(null,"group-name","group-name",-232140110),group_name,new cljs.core.Keyword(null,"identities","identities",-2100677764),identities,new cljs.core.Keyword(null,"keypair","keypair",-828062125),keypair], null)], null));
});
syng_im.protocol.group_chat.group_add_participant_msg = (function syng_im$protocol$group_chat$group_add_participant_msg(to,group_id,identities,keypair){
return syng_im.protocol.web3.make_msg.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),syng_im.protocol.state.state.my_identity.call(null),new cljs.core.Keyword(null,"to","to",192099007),to,new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"init-group-chat","init-group-chat",93372634),new cljs.core.Keyword(null,"group-topic","group-topic",2135203879),group_id,new cljs.core.Keyword(null,"identities","identities",-2100677764),identities,new cljs.core.Keyword(null,"keypair","keypair",-828062125),keypair], null)], null));
});
syng_im.protocol.group_chat.group_remove_participant_msg = (function syng_im$protocol$group_chat$group_remove_participant_msg(to,group_id,keypair,identity_to_remove){
return syng_im.protocol.web3.make_msg.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),syng_im.protocol.state.state.my_identity.call(null),new cljs.core.Keyword(null,"to","to",192099007),to,new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"group-removed-participant","group-removed-participant",1645065823),new cljs.core.Keyword(null,"group-topic","group-topic",2135203879),group_id,new cljs.core.Keyword(null,"keypair","keypair",-828062125),keypair,new cljs.core.Keyword(null,"removed-identity","removed-identity",-1517074374),identity_to_remove], null)], null));
});
syng_im.protocol.group_chat.removed_from_group_msg = (function syng_im$protocol$group_chat$removed_from_group_msg(group_id,identity_to_remove){
return syng_im.protocol.web3.make_msg.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),syng_im.protocol.state.state.my_identity.call(null),new cljs.core.Keyword(null,"to","to",192099007),identity_to_remove,new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"removed-from-group","removed-from-group",-927709737),new cljs.core.Keyword(null,"group-topic","group-topic",2135203879),group_id], null)], null));
});

//# sourceMappingURL=group_chat.js.map