// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.components.chats.chats_list');
goog.require('cljs.core');
goog.require('syng_im.resources');
goog.require('syng_im.utils.logging');
goog.require('syng_im.components.action_button');
goog.require('syng_im.navigation');
goog.require('reagent.core');
goog.require('syng_im.components.styles');
goog.require('syng_im.components.chats.chat_list_item');
goog.require('syng_im.components.chatmenu.chat_menu');
goog.require('syng_im.components.realm');
goog.require('syng_im.components.react');
goog.require('syng_im.components.icons.ionicons');
goog.require('re_frame.core');
goog.require('syng_im.utils.listview');
syng_im.components.chats.chats_list.chats_list = (function syng_im$components$chats$chats_list$chats_list(p__22630){
var map__22633 = p__22630;
var map__22633__$1 = ((((!((map__22633 == null)))?((((map__22633.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22633.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22633):map__22633);
var navigator = cljs.core.get.call(null,map__22633__$1,new cljs.core.Keyword(null,"navigator","navigator",2050004181));
var chats = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-chats","get-chats",-919369159)], null));
return ((function (chats,map__22633,map__22633__$1,navigator){
return (function (){
var chats__$1 = cljs.core.deref.call(null,chats);
var _ = syng_im.utils.logging.debug.call(null,"chats=",chats__$1);
var datasource = syng_im.utils.listview.to_realm_datasource.call(null,chats__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.drawer_layout_android,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"drawerWidth","drawerWidth",1835978943),(300),new cljs.core.Keyword(null,"drawerPosition","drawerPosition",-776605037),React.DrawerLayoutAndroid.positions.Left,new cljs.core.Keyword(null,"render-navigation-view","render-navigation-view",-1017127524),((function (chats__$1,_,datasource,chats,map__22633,map__22633__$1,navigator){
return (function (){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.chatmenu.chat_menu.chat_menu,navigator], null));
});})(chats__$1,_,datasource,chats,map__22633,map__22633__$1,navigator))
,new cljs.core.Keyword(null,"ref","ref",1289896967),((function (chats__$1,_,datasource,chats,map__22633,map__22633__$1,navigator){
return (function (drawer){
return React.DrawerLayoutAndroid.drawer = drawer;
});})(chats__$1,_,datasource,chats,map__22633,map__22633__$1,navigator))
], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"white"], null)], null),(cljs.core.truth_(syng_im.components.react.android_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.toolbar_android,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"navIcon","navIcon",-1491295906),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",-774711847),"icon_hamburger"], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),syng_im.components.styles.color_white,new cljs.core.Keyword(null,"height","height",1025178622),(56),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(2)], null),new cljs.core.Keyword(null,"onIconClicked","onIconClicked",2049778180),((function (chats__$1,_,datasource,chats,map__22633,map__22633__$1,navigator){
return (function (){
return React.DrawerLayoutAndroid.drawer.openDrawer();
});})(chats__$1,_,datasource,chats,map__22633,map__22633__$1,navigator))
,new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Search",new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",-774711847),"icon_search"], null),new cljs.core.Keyword(null,"show","show",-576705889),"always"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"center",new cljs.core.Keyword(null,"justifyContent","justifyContent",885406515),"center",new cljs.core.Keyword(null,"marginRight","marginRight",457313535),(112),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"transparent"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.react.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),-2.5,new cljs.core.Keyword(null,"color","color",1011675173),syng_im.components.styles.text1_color,new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(16),new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),syng_im.components.styles.font], null)], null),"Chats"], null)], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.realm.list_view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dataSource","dataSource",-178401132),datasource,new cljs.core.Keyword(null,"renderRow","renderRow",239389977),((function (chats__$1,_,datasource,chats,map__22633,map__22633__$1,navigator){
return (function (row,section_id,row_id){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.chats.chat_list_item.chat_list_item,row,navigator], null));
});})(chats__$1,_,datasource,chats,map__22633,map__22633__$1,navigator))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"white"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.action_button.action_button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buttonColor","buttonColor",-71086228),syng_im.components.styles.color_blue], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.action_button.action_button_item,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"New Chat",new cljs.core.Keyword(null,"buttonColor","buttonColor",-71086228),"#9b59b6",new cljs.core.Keyword(null,"onPress","onPress",-1383694171),((function (chats__$1,_,datasource,chats,map__22633,map__22633__$1,navigator){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-contacts","show-contacts",1533696451),navigator], null));
});})(chats__$1,_,datasource,chats,map__22633,map__22633__$1,navigator))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.icons.ionicons.icon,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"android-create",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(20),new cljs.core.Keyword(null,"height","height",1025178622),(22),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.action_button.action_button_item,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"New Group Chat",new cljs.core.Keyword(null,"buttonColor","buttonColor",-71086228),"#1abc9c",new cljs.core.Keyword(null,"onPress","onPress",-1383694171),((function (chats__$1,_,datasource,chats,map__22633,map__22633__$1,navigator){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-group-new","show-group-new",1321528556),navigator], null));
});})(chats__$1,_,datasource,chats,map__22633,map__22633__$1,navigator))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [syng_im.components.icons.ionicons.icon,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"person-stalker",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(20),new cljs.core.Keyword(null,"height","height",1025178622),(22),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null)], null)], null)], null)], null)], null);
});
;})(chats,map__22633,map__22633__$1,navigator))
});

//# sourceMappingURL=chats_list.js.map