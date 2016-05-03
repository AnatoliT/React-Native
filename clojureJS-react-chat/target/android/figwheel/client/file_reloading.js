// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16855__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16855__auto__){
return or__16855__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16855__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__25914_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__25914_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__25919 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__25920 = null;
var count__25921 = (0);
var i__25922 = (0);
while(true){
if((i__25922 < count__25921)){
var n = cljs.core._nth.call(null,chunk__25920,i__25922);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25923 = seq__25919;
var G__25924 = chunk__25920;
var G__25925 = count__25921;
var G__25926 = (i__25922 + (1));
seq__25919 = G__25923;
chunk__25920 = G__25924;
count__25921 = G__25925;
i__25922 = G__25926;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25919);
if(temp__4425__auto__){
var seq__25919__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25919__$1)){
var c__17658__auto__ = cljs.core.chunk_first.call(null,seq__25919__$1);
var G__25927 = cljs.core.chunk_rest.call(null,seq__25919__$1);
var G__25928 = c__17658__auto__;
var G__25929 = cljs.core.count.call(null,c__17658__auto__);
var G__25930 = (0);
seq__25919 = G__25927;
chunk__25920 = G__25928;
count__25921 = G__25929;
i__25922 = G__25930;
continue;
} else {
var n = cljs.core.first.call(null,seq__25919__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25931 = cljs.core.next.call(null,seq__25919__$1);
var G__25932 = null;
var G__25933 = (0);
var G__25934 = (0);
seq__25919 = G__25931;
chunk__25920 = G__25932;
count__25921 = G__25933;
i__25922 = G__25934;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__25973_25980 = cljs.core.seq.call(null,deps);
var chunk__25974_25981 = null;
var count__25975_25982 = (0);
var i__25976_25983 = (0);
while(true){
if((i__25976_25983 < count__25975_25982)){
var dep_25984 = cljs.core._nth.call(null,chunk__25974_25981,i__25976_25983);
topo_sort_helper_STAR_.call(null,dep_25984,(depth + (1)),state);

var G__25985 = seq__25973_25980;
var G__25986 = chunk__25974_25981;
var G__25987 = count__25975_25982;
var G__25988 = (i__25976_25983 + (1));
seq__25973_25980 = G__25985;
chunk__25974_25981 = G__25986;
count__25975_25982 = G__25987;
i__25976_25983 = G__25988;
continue;
} else {
var temp__4425__auto___25989 = cljs.core.seq.call(null,seq__25973_25980);
if(temp__4425__auto___25989){
var seq__25973_25990__$1 = temp__4425__auto___25989;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25973_25990__$1)){
var c__17658__auto___25991 = cljs.core.chunk_first.call(null,seq__25973_25990__$1);
var G__25992 = cljs.core.chunk_rest.call(null,seq__25973_25990__$1);
var G__25993 = c__17658__auto___25991;
var G__25994 = cljs.core.count.call(null,c__17658__auto___25991);
var G__25995 = (0);
seq__25973_25980 = G__25992;
chunk__25974_25981 = G__25993;
count__25975_25982 = G__25994;
i__25976_25983 = G__25995;
continue;
} else {
var dep_25996 = cljs.core.first.call(null,seq__25973_25990__$1);
topo_sort_helper_STAR_.call(null,dep_25996,(depth + (1)),state);

var G__25997 = cljs.core.next.call(null,seq__25973_25990__$1);
var G__25998 = null;
var G__25999 = (0);
var G__26000 = (0);
seq__25973_25980 = G__25997;
chunk__25974_25981 = G__25998;
count__25975_25982 = G__25999;
i__25976_25983 = G__26000;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__25977){
var vec__25979 = p__25977;
var x = cljs.core.nth.call(null,vec__25979,(0),null);
var xs = cljs.core.nthnext.call(null,vec__25979,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__25979,x,xs,get_deps__$1){
return (function (p1__25935_SHARP_){
return clojure.set.difference.call(null,p1__25935_SHARP_,x);
});})(vec__25979,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__26013 = cljs.core.seq.call(null,provides);
var chunk__26014 = null;
var count__26015 = (0);
var i__26016 = (0);
while(true){
if((i__26016 < count__26015)){
var prov = cljs.core._nth.call(null,chunk__26014,i__26016);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26017_26025 = cljs.core.seq.call(null,requires);
var chunk__26018_26026 = null;
var count__26019_26027 = (0);
var i__26020_26028 = (0);
while(true){
if((i__26020_26028 < count__26019_26027)){
var req_26029 = cljs.core._nth.call(null,chunk__26018_26026,i__26020_26028);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26029,prov);

var G__26030 = seq__26017_26025;
var G__26031 = chunk__26018_26026;
var G__26032 = count__26019_26027;
var G__26033 = (i__26020_26028 + (1));
seq__26017_26025 = G__26030;
chunk__26018_26026 = G__26031;
count__26019_26027 = G__26032;
i__26020_26028 = G__26033;
continue;
} else {
var temp__4425__auto___26034 = cljs.core.seq.call(null,seq__26017_26025);
if(temp__4425__auto___26034){
var seq__26017_26035__$1 = temp__4425__auto___26034;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26017_26035__$1)){
var c__17658__auto___26036 = cljs.core.chunk_first.call(null,seq__26017_26035__$1);
var G__26037 = cljs.core.chunk_rest.call(null,seq__26017_26035__$1);
var G__26038 = c__17658__auto___26036;
var G__26039 = cljs.core.count.call(null,c__17658__auto___26036);
var G__26040 = (0);
seq__26017_26025 = G__26037;
chunk__26018_26026 = G__26038;
count__26019_26027 = G__26039;
i__26020_26028 = G__26040;
continue;
} else {
var req_26041 = cljs.core.first.call(null,seq__26017_26035__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26041,prov);

var G__26042 = cljs.core.next.call(null,seq__26017_26035__$1);
var G__26043 = null;
var G__26044 = (0);
var G__26045 = (0);
seq__26017_26025 = G__26042;
chunk__26018_26026 = G__26043;
count__26019_26027 = G__26044;
i__26020_26028 = G__26045;
continue;
}
} else {
}
}
break;
}

var G__26046 = seq__26013;
var G__26047 = chunk__26014;
var G__26048 = count__26015;
var G__26049 = (i__26016 + (1));
seq__26013 = G__26046;
chunk__26014 = G__26047;
count__26015 = G__26048;
i__26016 = G__26049;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26013);
if(temp__4425__auto__){
var seq__26013__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26013__$1)){
var c__17658__auto__ = cljs.core.chunk_first.call(null,seq__26013__$1);
var G__26050 = cljs.core.chunk_rest.call(null,seq__26013__$1);
var G__26051 = c__17658__auto__;
var G__26052 = cljs.core.count.call(null,c__17658__auto__);
var G__26053 = (0);
seq__26013 = G__26050;
chunk__26014 = G__26051;
count__26015 = G__26052;
i__26016 = G__26053;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26013__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26021_26054 = cljs.core.seq.call(null,requires);
var chunk__26022_26055 = null;
var count__26023_26056 = (0);
var i__26024_26057 = (0);
while(true){
if((i__26024_26057 < count__26023_26056)){
var req_26058 = cljs.core._nth.call(null,chunk__26022_26055,i__26024_26057);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26058,prov);

var G__26059 = seq__26021_26054;
var G__26060 = chunk__26022_26055;
var G__26061 = count__26023_26056;
var G__26062 = (i__26024_26057 + (1));
seq__26021_26054 = G__26059;
chunk__26022_26055 = G__26060;
count__26023_26056 = G__26061;
i__26024_26057 = G__26062;
continue;
} else {
var temp__4425__auto___26063__$1 = cljs.core.seq.call(null,seq__26021_26054);
if(temp__4425__auto___26063__$1){
var seq__26021_26064__$1 = temp__4425__auto___26063__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26021_26064__$1)){
var c__17658__auto___26065 = cljs.core.chunk_first.call(null,seq__26021_26064__$1);
var G__26066 = cljs.core.chunk_rest.call(null,seq__26021_26064__$1);
var G__26067 = c__17658__auto___26065;
var G__26068 = cljs.core.count.call(null,c__17658__auto___26065);
var G__26069 = (0);
seq__26021_26054 = G__26066;
chunk__26022_26055 = G__26067;
count__26023_26056 = G__26068;
i__26024_26057 = G__26069;
continue;
} else {
var req_26070 = cljs.core.first.call(null,seq__26021_26064__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26070,prov);

var G__26071 = cljs.core.next.call(null,seq__26021_26064__$1);
var G__26072 = null;
var G__26073 = (0);
var G__26074 = (0);
seq__26021_26054 = G__26071;
chunk__26022_26055 = G__26072;
count__26023_26056 = G__26073;
i__26024_26057 = G__26074;
continue;
}
} else {
}
}
break;
}

var G__26075 = cljs.core.next.call(null,seq__26013__$1);
var G__26076 = null;
var G__26077 = (0);
var G__26078 = (0);
seq__26013 = G__26075;
chunk__26014 = G__26076;
count__26015 = G__26077;
i__26016 = G__26078;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__26083_26087 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26084_26088 = null;
var count__26085_26089 = (0);
var i__26086_26090 = (0);
while(true){
if((i__26086_26090 < count__26085_26089)){
var ns_26091 = cljs.core._nth.call(null,chunk__26084_26088,i__26086_26090);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26091);

var G__26092 = seq__26083_26087;
var G__26093 = chunk__26084_26088;
var G__26094 = count__26085_26089;
var G__26095 = (i__26086_26090 + (1));
seq__26083_26087 = G__26092;
chunk__26084_26088 = G__26093;
count__26085_26089 = G__26094;
i__26086_26090 = G__26095;
continue;
} else {
var temp__4425__auto___26096 = cljs.core.seq.call(null,seq__26083_26087);
if(temp__4425__auto___26096){
var seq__26083_26097__$1 = temp__4425__auto___26096;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26083_26097__$1)){
var c__17658__auto___26098 = cljs.core.chunk_first.call(null,seq__26083_26097__$1);
var G__26099 = cljs.core.chunk_rest.call(null,seq__26083_26097__$1);
var G__26100 = c__17658__auto___26098;
var G__26101 = cljs.core.count.call(null,c__17658__auto___26098);
var G__26102 = (0);
seq__26083_26087 = G__26099;
chunk__26084_26088 = G__26100;
count__26085_26089 = G__26101;
i__26086_26090 = G__26102;
continue;
} else {
var ns_26103 = cljs.core.first.call(null,seq__26083_26097__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26103);

var G__26104 = cljs.core.next.call(null,seq__26083_26097__$1);
var G__26105 = null;
var G__26106 = (0);
var G__26107 = (0);
seq__26083_26087 = G__26104;
chunk__26084_26088 = G__26105;
count__26085_26089 = G__26106;
i__26086_26090 = G__26107;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16855__auto__ = goog.require__;
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__26108__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26108 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26109__i = 0, G__26109__a = new Array(arguments.length -  0);
while (G__26109__i < G__26109__a.length) {G__26109__a[G__26109__i] = arguments[G__26109__i + 0]; ++G__26109__i;}
  args = new cljs.core.IndexedSeq(G__26109__a,0);
} 
return G__26108__delegate.call(this,args);};
G__26108.cljs$lang$maxFixedArity = 0;
G__26108.cljs$lang$applyTo = (function (arglist__26110){
var args = cljs.core.seq(arglist__26110);
return G__26108__delegate(args);
});
G__26108.cljs$core$IFn$_invoke$arity$variadic = G__26108__delegate;
return G__26108;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26112 = cljs.core._EQ_;
var expr__26113 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26112.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26113))){
var path_parts = ((function (pred__26112,expr__26113){
return (function (p1__26111_SHARP_){
return clojure.string.split.call(null,p1__26111_SHARP_,/[\/\\]/);
});})(pred__26112,expr__26113))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__26112,expr__26113){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26115){if((e26115 instanceof Error)){
var e = e26115;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26115;

}
}})());
});
;})(path_parts,sep,root,pred__26112,expr__26113))
} else {
if(cljs.core.truth_(pred__26112.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26113))){
return ((function (pred__26112,expr__26113){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__26112,expr__26113){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__26112,expr__26113))
);

return deferred.addErrback(((function (deferred,pred__26112,expr__26113){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__26112,expr__26113))
);
});
;})(pred__26112,expr__26113))
} else {
return ((function (pred__26112,expr__26113){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26112,expr__26113))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26116,callback){
var map__26119 = p__26116;
var map__26119__$1 = ((((!((map__26119 == null)))?((((map__26119.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26119.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26119):map__26119);
var file_msg = map__26119__$1;
var request_url = cljs.core.get.call(null,map__26119__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26119,map__26119__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26119,map__26119__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__20655__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20655__auto__){
return (function (){
var f__20656__auto__ = (function (){var switch__20543__auto__ = ((function (c__20655__auto__){
return (function (state_26143){
var state_val_26144 = (state_26143[(1)]);
if((state_val_26144 === (7))){
var inst_26139 = (state_26143[(2)]);
var state_26143__$1 = state_26143;
var statearr_26145_26165 = state_26143__$1;
(statearr_26145_26165[(2)] = inst_26139);

(statearr_26145_26165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (1))){
var state_26143__$1 = state_26143;
var statearr_26146_26166 = state_26143__$1;
(statearr_26146_26166[(2)] = null);

(statearr_26146_26166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (4))){
var inst_26123 = (state_26143[(7)]);
var inst_26123__$1 = (state_26143[(2)]);
var state_26143__$1 = (function (){var statearr_26147 = state_26143;
(statearr_26147[(7)] = inst_26123__$1);

return statearr_26147;
})();
if(cljs.core.truth_(inst_26123__$1)){
var statearr_26148_26167 = state_26143__$1;
(statearr_26148_26167[(1)] = (5));

} else {
var statearr_26149_26168 = state_26143__$1;
(statearr_26149_26168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (6))){
var state_26143__$1 = state_26143;
var statearr_26150_26169 = state_26143__$1;
(statearr_26150_26169[(2)] = null);

(statearr_26150_26169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (3))){
var inst_26141 = (state_26143[(2)]);
var state_26143__$1 = state_26143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26143__$1,inst_26141);
} else {
if((state_val_26144 === (2))){
var state_26143__$1 = state_26143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26143__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26144 === (11))){
var inst_26135 = (state_26143[(2)]);
var state_26143__$1 = (function (){var statearr_26151 = state_26143;
(statearr_26151[(8)] = inst_26135);

return statearr_26151;
})();
var statearr_26152_26170 = state_26143__$1;
(statearr_26152_26170[(2)] = null);

(statearr_26152_26170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (9))){
var inst_26129 = (state_26143[(9)]);
var inst_26127 = (state_26143[(10)]);
var inst_26131 = inst_26129.call(null,inst_26127);
var state_26143__$1 = state_26143;
var statearr_26153_26171 = state_26143__$1;
(statearr_26153_26171[(2)] = inst_26131);

(statearr_26153_26171[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (5))){
var inst_26123 = (state_26143[(7)]);
var inst_26125 = figwheel.client.file_reloading.blocking_load.call(null,inst_26123);
var state_26143__$1 = state_26143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26143__$1,(8),inst_26125);
} else {
if((state_val_26144 === (10))){
var inst_26127 = (state_26143[(10)]);
var inst_26133 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26127);
var state_26143__$1 = state_26143;
var statearr_26154_26172 = state_26143__$1;
(statearr_26154_26172[(2)] = inst_26133);

(statearr_26154_26172[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (8))){
var inst_26129 = (state_26143[(9)]);
var inst_26123 = (state_26143[(7)]);
var inst_26127 = (state_26143[(2)]);
var inst_26128 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26129__$1 = cljs.core.get.call(null,inst_26128,inst_26123);
var state_26143__$1 = (function (){var statearr_26155 = state_26143;
(statearr_26155[(9)] = inst_26129__$1);

(statearr_26155[(10)] = inst_26127);

return statearr_26155;
})();
if(cljs.core.truth_(inst_26129__$1)){
var statearr_26156_26173 = state_26143__$1;
(statearr_26156_26173[(1)] = (9));

} else {
var statearr_26157_26174 = state_26143__$1;
(statearr_26157_26174[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20655__auto__))
;
return ((function (switch__20543__auto__,c__20655__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20544__auto__ = null;
var figwheel$client$file_reloading$state_machine__20544__auto____0 = (function (){
var statearr_26161 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26161[(0)] = figwheel$client$file_reloading$state_machine__20544__auto__);

(statearr_26161[(1)] = (1));

return statearr_26161;
});
var figwheel$client$file_reloading$state_machine__20544__auto____1 = (function (state_26143){
while(true){
var ret_value__20545__auto__ = (function (){try{while(true){
var result__20546__auto__ = switch__20543__auto__.call(null,state_26143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20546__auto__;
}
break;
}
}catch (e26162){if((e26162 instanceof Object)){
var ex__20547__auto__ = e26162;
var statearr_26163_26175 = state_26143;
(statearr_26163_26175[(5)] = ex__20547__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26176 = state_26143;
state_26143 = G__26176;
continue;
} else {
return ret_value__20545__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20544__auto__ = function(state_26143){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20544__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20544__auto____1.call(this,state_26143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20544__auto____0;
figwheel$client$file_reloading$state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20544__auto____1;
return figwheel$client$file_reloading$state_machine__20544__auto__;
})()
;})(switch__20543__auto__,c__20655__auto__))
})();
var state__20657__auto__ = (function (){var statearr_26164 = f__20656__auto__.call(null);
(statearr_26164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20655__auto__);

return statearr_26164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20657__auto__);
});})(c__20655__auto__))
);

return c__20655__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26177,callback){
var map__26180 = p__26177;
var map__26180__$1 = ((((!((map__26180 == null)))?((((map__26180.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26180.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26180):map__26180);
var file_msg = map__26180__$1;
var namespace = cljs.core.get.call(null,map__26180__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26180,map__26180__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26180,map__26180__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26182){
var map__26185 = p__26182;
var map__26185__$1 = ((((!((map__26185 == null)))?((((map__26185.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26185.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26185):map__26185);
var file_msg = map__26185__$1;
var namespace = cljs.core.get.call(null,map__26185__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16843__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16843__auto__){
var or__16855__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
} else {
var or__16855__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16855__auto____$1)){
return or__16855__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16843__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26187,callback){
var map__26190 = p__26187;
var map__26190__$1 = ((((!((map__26190 == null)))?((((map__26190.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26190.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26190):map__26190);
var file_msg = map__26190__$1;
var request_url = cljs.core.get.call(null,map__26190__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26190__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20655__auto___26278 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20655__auto___26278,out){
return (function (){
var f__20656__auto__ = (function (){var switch__20543__auto__ = ((function (c__20655__auto___26278,out){
return (function (state_26260){
var state_val_26261 = (state_26260[(1)]);
if((state_val_26261 === (1))){
var inst_26238 = cljs.core.nth.call(null,files,(0),null);
var inst_26239 = cljs.core.nthnext.call(null,files,(1));
var inst_26240 = files;
var state_26260__$1 = (function (){var statearr_26262 = state_26260;
(statearr_26262[(7)] = inst_26238);

(statearr_26262[(8)] = inst_26240);

(statearr_26262[(9)] = inst_26239);

return statearr_26262;
})();
var statearr_26263_26279 = state_26260__$1;
(statearr_26263_26279[(2)] = null);

(statearr_26263_26279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26261 === (2))){
var inst_26240 = (state_26260[(8)]);
var inst_26243 = (state_26260[(10)]);
var inst_26243__$1 = cljs.core.nth.call(null,inst_26240,(0),null);
var inst_26244 = cljs.core.nthnext.call(null,inst_26240,(1));
var inst_26245 = (inst_26243__$1 == null);
var inst_26246 = cljs.core.not.call(null,inst_26245);
var state_26260__$1 = (function (){var statearr_26264 = state_26260;
(statearr_26264[(11)] = inst_26244);

(statearr_26264[(10)] = inst_26243__$1);

return statearr_26264;
})();
if(inst_26246){
var statearr_26265_26280 = state_26260__$1;
(statearr_26265_26280[(1)] = (4));

} else {
var statearr_26266_26281 = state_26260__$1;
(statearr_26266_26281[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26261 === (3))){
var inst_26258 = (state_26260[(2)]);
var state_26260__$1 = state_26260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26260__$1,inst_26258);
} else {
if((state_val_26261 === (4))){
var inst_26243 = (state_26260[(10)]);
var inst_26248 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26243);
var state_26260__$1 = state_26260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26260__$1,(7),inst_26248);
} else {
if((state_val_26261 === (5))){
var inst_26254 = cljs.core.async.close_BANG_.call(null,out);
var state_26260__$1 = state_26260;
var statearr_26267_26282 = state_26260__$1;
(statearr_26267_26282[(2)] = inst_26254);

(statearr_26267_26282[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26261 === (6))){
var inst_26256 = (state_26260[(2)]);
var state_26260__$1 = state_26260;
var statearr_26268_26283 = state_26260__$1;
(statearr_26268_26283[(2)] = inst_26256);

(statearr_26268_26283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26261 === (7))){
var inst_26244 = (state_26260[(11)]);
var inst_26250 = (state_26260[(2)]);
var inst_26251 = cljs.core.async.put_BANG_.call(null,out,inst_26250);
var inst_26240 = inst_26244;
var state_26260__$1 = (function (){var statearr_26269 = state_26260;
(statearr_26269[(8)] = inst_26240);

(statearr_26269[(12)] = inst_26251);

return statearr_26269;
})();
var statearr_26270_26284 = state_26260__$1;
(statearr_26270_26284[(2)] = null);

(statearr_26270_26284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__20655__auto___26278,out))
;
return ((function (switch__20543__auto__,c__20655__auto___26278,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20544__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20544__auto____0 = (function (){
var statearr_26274 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26274[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20544__auto__);

(statearr_26274[(1)] = (1));

return statearr_26274;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20544__auto____1 = (function (state_26260){
while(true){
var ret_value__20545__auto__ = (function (){try{while(true){
var result__20546__auto__ = switch__20543__auto__.call(null,state_26260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20546__auto__;
}
break;
}
}catch (e26275){if((e26275 instanceof Object)){
var ex__20547__auto__ = e26275;
var statearr_26276_26285 = state_26260;
(statearr_26276_26285[(5)] = ex__20547__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26286 = state_26260;
state_26260 = G__26286;
continue;
} else {
return ret_value__20545__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20544__auto__ = function(state_26260){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20544__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20544__auto____1.call(this,state_26260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20544__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20544__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20544__auto__;
})()
;})(switch__20543__auto__,c__20655__auto___26278,out))
})();
var state__20657__auto__ = (function (){var statearr_26277 = f__20656__auto__.call(null);
(statearr_26277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20655__auto___26278);

return statearr_26277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20657__auto__);
});})(c__20655__auto___26278,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26287,opts){
var map__26291 = p__26287;
var map__26291__$1 = ((((!((map__26291 == null)))?((((map__26291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26291):map__26291);
var eval_body__$1 = cljs.core.get.call(null,map__26291__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26291__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16843__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16843__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16843__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e26293){var e = e26293;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__26294_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26294_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__26299){
var vec__26300 = p__26299;
var k = cljs.core.nth.call(null,vec__26300,(0),null);
var v = cljs.core.nth.call(null,vec__26300,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__26301){
var vec__26302 = p__26301;
var k = cljs.core.nth.call(null,vec__26302,(0),null);
var v = cljs.core.nth.call(null,vec__26302,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26306,p__26307){
var map__26554 = p__26306;
var map__26554__$1 = ((((!((map__26554 == null)))?((((map__26554.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26554.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26554):map__26554);
var opts = map__26554__$1;
var before_jsload = cljs.core.get.call(null,map__26554__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__26554__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__26554__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__26555 = p__26307;
var map__26555__$1 = ((((!((map__26555 == null)))?((((map__26555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26555):map__26555);
var msg = map__26555__$1;
var files = cljs.core.get.call(null,map__26555__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__26555__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__26555__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20655__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20655__auto__,map__26554,map__26554__$1,opts,before_jsload,on_jsload,reload_dependents,map__26555,map__26555__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20656__auto__ = (function (){var switch__20543__auto__ = ((function (c__20655__auto__,map__26554,map__26554__$1,opts,before_jsload,on_jsload,reload_dependents,map__26555,map__26555__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_26708){
var state_val_26709 = (state_26708[(1)]);
if((state_val_26709 === (7))){
var inst_26569 = (state_26708[(7)]);
var inst_26571 = (state_26708[(8)]);
var inst_26570 = (state_26708[(9)]);
var inst_26572 = (state_26708[(10)]);
var inst_26577 = cljs.core._nth.call(null,inst_26570,inst_26572);
var inst_26578 = figwheel.client.file_reloading.eval_body.call(null,inst_26577,opts);
var inst_26579 = (inst_26572 + (1));
var tmp26710 = inst_26569;
var tmp26711 = inst_26571;
var tmp26712 = inst_26570;
var inst_26569__$1 = tmp26710;
var inst_26570__$1 = tmp26712;
var inst_26571__$1 = tmp26711;
var inst_26572__$1 = inst_26579;
var state_26708__$1 = (function (){var statearr_26713 = state_26708;
(statearr_26713[(7)] = inst_26569__$1);

(statearr_26713[(8)] = inst_26571__$1);

(statearr_26713[(11)] = inst_26578);

(statearr_26713[(9)] = inst_26570__$1);

(statearr_26713[(10)] = inst_26572__$1);

return statearr_26713;
})();
var statearr_26714_26800 = state_26708__$1;
(statearr_26714_26800[(2)] = null);

(statearr_26714_26800[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (20))){
var inst_26612 = (state_26708[(12)]);
var inst_26620 = figwheel.client.file_reloading.sort_files.call(null,inst_26612);
var state_26708__$1 = state_26708;
var statearr_26715_26801 = state_26708__$1;
(statearr_26715_26801[(2)] = inst_26620);

(statearr_26715_26801[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (27))){
var state_26708__$1 = state_26708;
var statearr_26716_26802 = state_26708__$1;
(statearr_26716_26802[(2)] = null);

(statearr_26716_26802[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (1))){
var inst_26561 = (state_26708[(13)]);
var inst_26558 = before_jsload.call(null,files);
var inst_26559 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26560 = (function (){return ((function (inst_26561,inst_26558,inst_26559,state_val_26709,c__20655__auto__,map__26554,map__26554__$1,opts,before_jsload,on_jsload,reload_dependents,map__26555,map__26555__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26303_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26303_SHARP_);
});
;})(inst_26561,inst_26558,inst_26559,state_val_26709,c__20655__auto__,map__26554,map__26554__$1,opts,before_jsload,on_jsload,reload_dependents,map__26555,map__26555__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26561__$1 = cljs.core.filter.call(null,inst_26560,files);
var inst_26562 = cljs.core.not_empty.call(null,inst_26561__$1);
var state_26708__$1 = (function (){var statearr_26717 = state_26708;
(statearr_26717[(13)] = inst_26561__$1);

(statearr_26717[(14)] = inst_26558);

(statearr_26717[(15)] = inst_26559);

return statearr_26717;
})();
if(cljs.core.truth_(inst_26562)){
var statearr_26718_26803 = state_26708__$1;
(statearr_26718_26803[(1)] = (2));

} else {
var statearr_26719_26804 = state_26708__$1;
(statearr_26719_26804[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (24))){
var state_26708__$1 = state_26708;
var statearr_26720_26805 = state_26708__$1;
(statearr_26720_26805[(2)] = null);

(statearr_26720_26805[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (39))){
var inst_26662 = (state_26708[(16)]);
var state_26708__$1 = state_26708;
var statearr_26721_26806 = state_26708__$1;
(statearr_26721_26806[(2)] = inst_26662);

(statearr_26721_26806[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (46))){
var inst_26703 = (state_26708[(2)]);
var state_26708__$1 = state_26708;
var statearr_26722_26807 = state_26708__$1;
(statearr_26722_26807[(2)] = inst_26703);

(statearr_26722_26807[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (4))){
var inst_26606 = (state_26708[(2)]);
var inst_26607 = cljs.core.List.EMPTY;
var inst_26608 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_26607);
var inst_26609 = (function (){return ((function (inst_26606,inst_26607,inst_26608,state_val_26709,c__20655__auto__,map__26554,map__26554__$1,opts,before_jsload,on_jsload,reload_dependents,map__26555,map__26555__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26304_SHARP_){
var and__16843__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26304_SHARP_);
if(cljs.core.truth_(and__16843__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26304_SHARP_));
} else {
return and__16843__auto__;
}
});
;})(inst_26606,inst_26607,inst_26608,state_val_26709,c__20655__auto__,map__26554,map__26554__$1,opts,before_jsload,on_jsload,reload_dependents,map__26555,map__26555__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26610 = cljs.core.filter.call(null,inst_26609,files);
var inst_26611 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_26612 = cljs.core.concat.call(null,inst_26610,inst_26611);
var state_26708__$1 = (function (){var statearr_26723 = state_26708;
(statearr_26723[(17)] = inst_26606);

(statearr_26723[(18)] = inst_26608);

(statearr_26723[(12)] = inst_26612);

return statearr_26723;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_26724_26808 = state_26708__$1;
(statearr_26724_26808[(1)] = (16));

} else {
var statearr_26725_26809 = state_26708__$1;
(statearr_26725_26809[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (15))){
var inst_26596 = (state_26708[(2)]);
var state_26708__$1 = state_26708;
var statearr_26726_26810 = state_26708__$1;
(statearr_26726_26810[(2)] = inst_26596);

(statearr_26726_26810[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (21))){
var inst_26622 = (state_26708[(19)]);
var inst_26622__$1 = (state_26708[(2)]);
var inst_26623 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26622__$1);
var state_26708__$1 = (function (){var statearr_26727 = state_26708;
(statearr_26727[(19)] = inst_26622__$1);

return statearr_26727;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26708__$1,(22),inst_26623);
} else {
if((state_val_26709 === (31))){
var inst_26706 = (state_26708[(2)]);
var state_26708__$1 = state_26708;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26708__$1,inst_26706);
} else {
if((state_val_26709 === (32))){
var inst_26662 = (state_26708[(16)]);
var inst_26667 = inst_26662.cljs$lang$protocol_mask$partition0$;
var inst_26668 = (inst_26667 & (64));
var inst_26669 = inst_26662.cljs$core$ISeq$;
var inst_26670 = (inst_26668) || (inst_26669);
var state_26708__$1 = state_26708;
if(cljs.core.truth_(inst_26670)){
var statearr_26728_26811 = state_26708__$1;
(statearr_26728_26811[(1)] = (35));

} else {
var statearr_26729_26812 = state_26708__$1;
(statearr_26729_26812[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (40))){
var inst_26683 = (state_26708[(20)]);
var inst_26682 = (state_26708[(2)]);
var inst_26683__$1 = cljs.core.get.call(null,inst_26682,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26684 = cljs.core.get.call(null,inst_26682,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26685 = cljs.core.not_empty.call(null,inst_26683__$1);
var state_26708__$1 = (function (){var statearr_26730 = state_26708;
(statearr_26730[(21)] = inst_26684);

(statearr_26730[(20)] = inst_26683__$1);

return statearr_26730;
})();
if(cljs.core.truth_(inst_26685)){
var statearr_26731_26813 = state_26708__$1;
(statearr_26731_26813[(1)] = (41));

} else {
var statearr_26732_26814 = state_26708__$1;
(statearr_26732_26814[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (33))){
var state_26708__$1 = state_26708;
var statearr_26733_26815 = state_26708__$1;
(statearr_26733_26815[(2)] = false);

(statearr_26733_26815[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (13))){
var inst_26582 = (state_26708[(22)]);
var inst_26586 = cljs.core.chunk_first.call(null,inst_26582);
var inst_26587 = cljs.core.chunk_rest.call(null,inst_26582);
var inst_26588 = cljs.core.count.call(null,inst_26586);
var inst_26569 = inst_26587;
var inst_26570 = inst_26586;
var inst_26571 = inst_26588;
var inst_26572 = (0);
var state_26708__$1 = (function (){var statearr_26734 = state_26708;
(statearr_26734[(7)] = inst_26569);

(statearr_26734[(8)] = inst_26571);

(statearr_26734[(9)] = inst_26570);

(statearr_26734[(10)] = inst_26572);

return statearr_26734;
})();
var statearr_26735_26816 = state_26708__$1;
(statearr_26735_26816[(2)] = null);

(statearr_26735_26816[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (22))){
var inst_26626 = (state_26708[(23)]);
var inst_26630 = (state_26708[(24)]);
var inst_26625 = (state_26708[(25)]);
var inst_26622 = (state_26708[(19)]);
var inst_26625__$1 = (state_26708[(2)]);
var inst_26626__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26625__$1);
var inst_26627 = (function (){var all_files = inst_26622;
var res_SINGLEQUOTE_ = inst_26625__$1;
var res = inst_26626__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_26626,inst_26630,inst_26625,inst_26622,inst_26625__$1,inst_26626__$1,state_val_26709,c__20655__auto__,map__26554,map__26554__$1,opts,before_jsload,on_jsload,reload_dependents,map__26555,map__26555__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26305_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26305_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_26626,inst_26630,inst_26625,inst_26622,inst_26625__$1,inst_26626__$1,state_val_26709,c__20655__auto__,map__26554,map__26554__$1,opts,before_jsload,on_jsload,reload_dependents,map__26555,map__26555__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26628 = cljs.core.filter.call(null,inst_26627,inst_26625__$1);
var inst_26629 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_26630__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26629);
var inst_26631 = cljs.core.not_empty.call(null,inst_26630__$1);
var state_26708__$1 = (function (){var statearr_26736 = state_26708;
(statearr_26736[(23)] = inst_26626__$1);

(statearr_26736[(26)] = inst_26628);

(statearr_26736[(24)] = inst_26630__$1);

(statearr_26736[(25)] = inst_26625__$1);

return statearr_26736;
})();
if(cljs.core.truth_(inst_26631)){
var statearr_26737_26817 = state_26708__$1;
(statearr_26737_26817[(1)] = (23));

} else {
var statearr_26738_26818 = state_26708__$1;
(statearr_26738_26818[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (36))){
var state_26708__$1 = state_26708;
var statearr_26739_26819 = state_26708__$1;
(statearr_26739_26819[(2)] = false);

(statearr_26739_26819[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (41))){
var inst_26683 = (state_26708[(20)]);
var inst_26687 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_26688 = cljs.core.map.call(null,inst_26687,inst_26683);
var inst_26689 = cljs.core.pr_str.call(null,inst_26688);
var inst_26690 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_26689)].join('');
var inst_26691 = figwheel.client.utils.log.call(null,inst_26690);
var state_26708__$1 = state_26708;
var statearr_26740_26820 = state_26708__$1;
(statearr_26740_26820[(2)] = inst_26691);

(statearr_26740_26820[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (43))){
var inst_26684 = (state_26708[(21)]);
var inst_26694 = (state_26708[(2)]);
var inst_26695 = cljs.core.not_empty.call(null,inst_26684);
var state_26708__$1 = (function (){var statearr_26741 = state_26708;
(statearr_26741[(27)] = inst_26694);

return statearr_26741;
})();
if(cljs.core.truth_(inst_26695)){
var statearr_26742_26821 = state_26708__$1;
(statearr_26742_26821[(1)] = (44));

} else {
var statearr_26743_26822 = state_26708__$1;
(statearr_26743_26822[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (29))){
var inst_26626 = (state_26708[(23)]);
var inst_26628 = (state_26708[(26)]);
var inst_26630 = (state_26708[(24)]);
var inst_26625 = (state_26708[(25)]);
var inst_26662 = (state_26708[(16)]);
var inst_26622 = (state_26708[(19)]);
var inst_26658 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26661 = (function (){var all_files = inst_26622;
var res_SINGLEQUOTE_ = inst_26625;
var res = inst_26626;
var files_not_loaded = inst_26628;
var dependencies_that_loaded = inst_26630;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26626,inst_26628,inst_26630,inst_26625,inst_26662,inst_26622,inst_26658,state_val_26709,c__20655__auto__,map__26554,map__26554__$1,opts,before_jsload,on_jsload,reload_dependents,map__26555,map__26555__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26660){
var map__26744 = p__26660;
var map__26744__$1 = ((((!((map__26744 == null)))?((((map__26744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26744):map__26744);
var namespace = cljs.core.get.call(null,map__26744__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26626,inst_26628,inst_26630,inst_26625,inst_26662,inst_26622,inst_26658,state_val_26709,c__20655__auto__,map__26554,map__26554__$1,opts,before_jsload,on_jsload,reload_dependents,map__26555,map__26555__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26662__$1 = cljs.core.group_by.call(null,inst_26661,inst_26628);
var inst_26664 = (inst_26662__$1 == null);
var inst_26665 = cljs.core.not.call(null,inst_26664);
var state_26708__$1 = (function (){var statearr_26746 = state_26708;
(statearr_26746[(16)] = inst_26662__$1);

(statearr_26746[(28)] = inst_26658);

return statearr_26746;
})();
if(inst_26665){
var statearr_26747_26823 = state_26708__$1;
(statearr_26747_26823[(1)] = (32));

} else {
var statearr_26748_26824 = state_26708__$1;
(statearr_26748_26824[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (44))){
var inst_26684 = (state_26708[(21)]);
var inst_26697 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26684);
var inst_26698 = cljs.core.pr_str.call(null,inst_26697);
var inst_26699 = [cljs.core.str("not required: "),cljs.core.str(inst_26698)].join('');
var inst_26700 = figwheel.client.utils.log.call(null,inst_26699);
var state_26708__$1 = state_26708;
var statearr_26749_26825 = state_26708__$1;
(statearr_26749_26825[(2)] = inst_26700);

(statearr_26749_26825[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (6))){
var inst_26603 = (state_26708[(2)]);
var state_26708__$1 = state_26708;
var statearr_26750_26826 = state_26708__$1;
(statearr_26750_26826[(2)] = inst_26603);

(statearr_26750_26826[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (28))){
var inst_26628 = (state_26708[(26)]);
var inst_26655 = (state_26708[(2)]);
var inst_26656 = cljs.core.not_empty.call(null,inst_26628);
var state_26708__$1 = (function (){var statearr_26751 = state_26708;
(statearr_26751[(29)] = inst_26655);

return statearr_26751;
})();
if(cljs.core.truth_(inst_26656)){
var statearr_26752_26827 = state_26708__$1;
(statearr_26752_26827[(1)] = (29));

} else {
var statearr_26753_26828 = state_26708__$1;
(statearr_26753_26828[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (25))){
var inst_26626 = (state_26708[(23)]);
var inst_26642 = (state_26708[(2)]);
var inst_26643 = cljs.core.not_empty.call(null,inst_26626);
var state_26708__$1 = (function (){var statearr_26754 = state_26708;
(statearr_26754[(30)] = inst_26642);

return statearr_26754;
})();
if(cljs.core.truth_(inst_26643)){
var statearr_26755_26829 = state_26708__$1;
(statearr_26755_26829[(1)] = (26));

} else {
var statearr_26756_26830 = state_26708__$1;
(statearr_26756_26830[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (34))){
var inst_26677 = (state_26708[(2)]);
var state_26708__$1 = state_26708;
if(cljs.core.truth_(inst_26677)){
var statearr_26757_26831 = state_26708__$1;
(statearr_26757_26831[(1)] = (38));

} else {
var statearr_26758_26832 = state_26708__$1;
(statearr_26758_26832[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (17))){
var state_26708__$1 = state_26708;
var statearr_26759_26833 = state_26708__$1;
(statearr_26759_26833[(2)] = recompile_dependents);

(statearr_26759_26833[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (3))){
var state_26708__$1 = state_26708;
var statearr_26760_26834 = state_26708__$1;
(statearr_26760_26834[(2)] = null);

(statearr_26760_26834[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (12))){
var inst_26599 = (state_26708[(2)]);
var state_26708__$1 = state_26708;
var statearr_26761_26835 = state_26708__$1;
(statearr_26761_26835[(2)] = inst_26599);

(statearr_26761_26835[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (2))){
var inst_26561 = (state_26708[(13)]);
var inst_26568 = cljs.core.seq.call(null,inst_26561);
var inst_26569 = inst_26568;
var inst_26570 = null;
var inst_26571 = (0);
var inst_26572 = (0);
var state_26708__$1 = (function (){var statearr_26762 = state_26708;
(statearr_26762[(7)] = inst_26569);

(statearr_26762[(8)] = inst_26571);

(statearr_26762[(9)] = inst_26570);

(statearr_26762[(10)] = inst_26572);

return statearr_26762;
})();
var statearr_26763_26836 = state_26708__$1;
(statearr_26763_26836[(2)] = null);

(statearr_26763_26836[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (23))){
var inst_26626 = (state_26708[(23)]);
var inst_26628 = (state_26708[(26)]);
var inst_26630 = (state_26708[(24)]);
var inst_26625 = (state_26708[(25)]);
var inst_26622 = (state_26708[(19)]);
var inst_26633 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_26635 = (function (){var all_files = inst_26622;
var res_SINGLEQUOTE_ = inst_26625;
var res = inst_26626;
var files_not_loaded = inst_26628;
var dependencies_that_loaded = inst_26630;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26626,inst_26628,inst_26630,inst_26625,inst_26622,inst_26633,state_val_26709,c__20655__auto__,map__26554,map__26554__$1,opts,before_jsload,on_jsload,reload_dependents,map__26555,map__26555__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26634){
var map__26764 = p__26634;
var map__26764__$1 = ((((!((map__26764 == null)))?((((map__26764.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26764.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26764):map__26764);
var request_url = cljs.core.get.call(null,map__26764__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26626,inst_26628,inst_26630,inst_26625,inst_26622,inst_26633,state_val_26709,c__20655__auto__,map__26554,map__26554__$1,opts,before_jsload,on_jsload,reload_dependents,map__26555,map__26555__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26636 = cljs.core.reverse.call(null,inst_26630);
var inst_26637 = cljs.core.map.call(null,inst_26635,inst_26636);
var inst_26638 = cljs.core.pr_str.call(null,inst_26637);
var inst_26639 = figwheel.client.utils.log.call(null,inst_26638);
var state_26708__$1 = (function (){var statearr_26766 = state_26708;
(statearr_26766[(31)] = inst_26633);

return statearr_26766;
})();
var statearr_26767_26837 = state_26708__$1;
(statearr_26767_26837[(2)] = inst_26639);

(statearr_26767_26837[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (35))){
var state_26708__$1 = state_26708;
var statearr_26768_26838 = state_26708__$1;
(statearr_26768_26838[(2)] = true);

(statearr_26768_26838[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (19))){
var inst_26612 = (state_26708[(12)]);
var inst_26618 = figwheel.client.file_reloading.expand_files.call(null,inst_26612);
var state_26708__$1 = state_26708;
var statearr_26769_26839 = state_26708__$1;
(statearr_26769_26839[(2)] = inst_26618);

(statearr_26769_26839[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (11))){
var state_26708__$1 = state_26708;
var statearr_26770_26840 = state_26708__$1;
(statearr_26770_26840[(2)] = null);

(statearr_26770_26840[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (9))){
var inst_26601 = (state_26708[(2)]);
var state_26708__$1 = state_26708;
var statearr_26771_26841 = state_26708__$1;
(statearr_26771_26841[(2)] = inst_26601);

(statearr_26771_26841[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (5))){
var inst_26571 = (state_26708[(8)]);
var inst_26572 = (state_26708[(10)]);
var inst_26574 = (inst_26572 < inst_26571);
var inst_26575 = inst_26574;
var state_26708__$1 = state_26708;
if(cljs.core.truth_(inst_26575)){
var statearr_26772_26842 = state_26708__$1;
(statearr_26772_26842[(1)] = (7));

} else {
var statearr_26773_26843 = state_26708__$1;
(statearr_26773_26843[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (14))){
var inst_26582 = (state_26708[(22)]);
var inst_26591 = cljs.core.first.call(null,inst_26582);
var inst_26592 = figwheel.client.file_reloading.eval_body.call(null,inst_26591,opts);
var inst_26593 = cljs.core.next.call(null,inst_26582);
var inst_26569 = inst_26593;
var inst_26570 = null;
var inst_26571 = (0);
var inst_26572 = (0);
var state_26708__$1 = (function (){var statearr_26774 = state_26708;
(statearr_26774[(7)] = inst_26569);

(statearr_26774[(32)] = inst_26592);

(statearr_26774[(8)] = inst_26571);

(statearr_26774[(9)] = inst_26570);

(statearr_26774[(10)] = inst_26572);

return statearr_26774;
})();
var statearr_26775_26844 = state_26708__$1;
(statearr_26775_26844[(2)] = null);

(statearr_26775_26844[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (45))){
var state_26708__$1 = state_26708;
var statearr_26776_26845 = state_26708__$1;
(statearr_26776_26845[(2)] = null);

(statearr_26776_26845[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (26))){
var inst_26626 = (state_26708[(23)]);
var inst_26628 = (state_26708[(26)]);
var inst_26630 = (state_26708[(24)]);
var inst_26625 = (state_26708[(25)]);
var inst_26622 = (state_26708[(19)]);
var inst_26645 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26647 = (function (){var all_files = inst_26622;
var res_SINGLEQUOTE_ = inst_26625;
var res = inst_26626;
var files_not_loaded = inst_26628;
var dependencies_that_loaded = inst_26630;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26626,inst_26628,inst_26630,inst_26625,inst_26622,inst_26645,state_val_26709,c__20655__auto__,map__26554,map__26554__$1,opts,before_jsload,on_jsload,reload_dependents,map__26555,map__26555__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26646){
var map__26777 = p__26646;
var map__26777__$1 = ((((!((map__26777 == null)))?((((map__26777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26777):map__26777);
var namespace = cljs.core.get.call(null,map__26777__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26777__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26626,inst_26628,inst_26630,inst_26625,inst_26622,inst_26645,state_val_26709,c__20655__auto__,map__26554,map__26554__$1,opts,before_jsload,on_jsload,reload_dependents,map__26555,map__26555__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26648 = cljs.core.map.call(null,inst_26647,inst_26626);
var inst_26649 = cljs.core.pr_str.call(null,inst_26648);
var inst_26650 = figwheel.client.utils.log.call(null,inst_26649);
var inst_26651 = (function (){var all_files = inst_26622;
var res_SINGLEQUOTE_ = inst_26625;
var res = inst_26626;
var files_not_loaded = inst_26628;
var dependencies_that_loaded = inst_26630;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26626,inst_26628,inst_26630,inst_26625,inst_26622,inst_26645,inst_26647,inst_26648,inst_26649,inst_26650,state_val_26709,c__20655__auto__,map__26554,map__26554__$1,opts,before_jsload,on_jsload,reload_dependents,map__26555,map__26555__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26626,inst_26628,inst_26630,inst_26625,inst_26622,inst_26645,inst_26647,inst_26648,inst_26649,inst_26650,state_val_26709,c__20655__auto__,map__26554,map__26554__$1,opts,before_jsload,on_jsload,reload_dependents,map__26555,map__26555__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26652 = setTimeout(inst_26651,(10));
var state_26708__$1 = (function (){var statearr_26779 = state_26708;
(statearr_26779[(33)] = inst_26650);

(statearr_26779[(34)] = inst_26645);

return statearr_26779;
})();
var statearr_26780_26846 = state_26708__$1;
(statearr_26780_26846[(2)] = inst_26652);

(statearr_26780_26846[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (16))){
var state_26708__$1 = state_26708;
var statearr_26781_26847 = state_26708__$1;
(statearr_26781_26847[(2)] = reload_dependents);

(statearr_26781_26847[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (38))){
var inst_26662 = (state_26708[(16)]);
var inst_26679 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26662);
var state_26708__$1 = state_26708;
var statearr_26782_26848 = state_26708__$1;
(statearr_26782_26848[(2)] = inst_26679);

(statearr_26782_26848[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (30))){
var state_26708__$1 = state_26708;
var statearr_26783_26849 = state_26708__$1;
(statearr_26783_26849[(2)] = null);

(statearr_26783_26849[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (10))){
var inst_26582 = (state_26708[(22)]);
var inst_26584 = cljs.core.chunked_seq_QMARK_.call(null,inst_26582);
var state_26708__$1 = state_26708;
if(inst_26584){
var statearr_26784_26850 = state_26708__$1;
(statearr_26784_26850[(1)] = (13));

} else {
var statearr_26785_26851 = state_26708__$1;
(statearr_26785_26851[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (18))){
var inst_26616 = (state_26708[(2)]);
var state_26708__$1 = state_26708;
if(cljs.core.truth_(inst_26616)){
var statearr_26786_26852 = state_26708__$1;
(statearr_26786_26852[(1)] = (19));

} else {
var statearr_26787_26853 = state_26708__$1;
(statearr_26787_26853[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (42))){
var state_26708__$1 = state_26708;
var statearr_26788_26854 = state_26708__$1;
(statearr_26788_26854[(2)] = null);

(statearr_26788_26854[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (37))){
var inst_26674 = (state_26708[(2)]);
var state_26708__$1 = state_26708;
var statearr_26789_26855 = state_26708__$1;
(statearr_26789_26855[(2)] = inst_26674);

(statearr_26789_26855[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (8))){
var inst_26569 = (state_26708[(7)]);
var inst_26582 = (state_26708[(22)]);
var inst_26582__$1 = cljs.core.seq.call(null,inst_26569);
var state_26708__$1 = (function (){var statearr_26790 = state_26708;
(statearr_26790[(22)] = inst_26582__$1);

return statearr_26790;
})();
if(inst_26582__$1){
var statearr_26791_26856 = state_26708__$1;
(statearr_26791_26856[(1)] = (10));

} else {
var statearr_26792_26857 = state_26708__$1;
(statearr_26792_26857[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20655__auto__,map__26554,map__26554__$1,opts,before_jsload,on_jsload,reload_dependents,map__26555,map__26555__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20543__auto__,c__20655__auto__,map__26554,map__26554__$1,opts,before_jsload,on_jsload,reload_dependents,map__26555,map__26555__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20544__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20544__auto____0 = (function (){
var statearr_26796 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26796[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20544__auto__);

(statearr_26796[(1)] = (1));

return statearr_26796;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20544__auto____1 = (function (state_26708){
while(true){
var ret_value__20545__auto__ = (function (){try{while(true){
var result__20546__auto__ = switch__20543__auto__.call(null,state_26708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20546__auto__;
}
break;
}
}catch (e26797){if((e26797 instanceof Object)){
var ex__20547__auto__ = e26797;
var statearr_26798_26858 = state_26708;
(statearr_26798_26858[(5)] = ex__20547__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26859 = state_26708;
state_26708 = G__26859;
continue;
} else {
return ret_value__20545__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20544__auto__ = function(state_26708){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20544__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20544__auto____1.call(this,state_26708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20544__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20544__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20544__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20544__auto__;
})()
;})(switch__20543__auto__,c__20655__auto__,map__26554,map__26554__$1,opts,before_jsload,on_jsload,reload_dependents,map__26555,map__26555__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20657__auto__ = (function (){var statearr_26799 = f__20656__auto__.call(null);
(statearr_26799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20655__auto__);

return statearr_26799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20657__auto__);
});})(c__20655__auto__,map__26554,map__26554__$1,opts,before_jsload,on_jsload,reload_dependents,map__26555,map__26555__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20655__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26862,link){
var map__26865 = p__26862;
var map__26865__$1 = ((((!((map__26865 == null)))?((((map__26865.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26865.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26865):map__26865);
var file = cljs.core.get.call(null,map__26865__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__26865,map__26865__$1,file){
return (function (p1__26860_SHARP_,p2__26861_SHARP_){
if(cljs.core._EQ_.call(null,p1__26860_SHARP_,p2__26861_SHARP_)){
return p1__26860_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__26865,map__26865__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26871){
var map__26872 = p__26871;
var map__26872__$1 = ((((!((map__26872 == null)))?((((map__26872.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26872.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26872):map__26872);
var match_length = cljs.core.get.call(null,map__26872__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26872__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26867_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26867_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args26874 = [];
var len__17913__auto___26877 = arguments.length;
var i__17914__auto___26878 = (0);
while(true){
if((i__17914__auto___26878 < len__17913__auto___26877)){
args26874.push((arguments[i__17914__auto___26878]));

var G__26879 = (i__17914__auto___26878 + (1));
i__17914__auto___26878 = G__26879;
continue;
} else {
}
break;
}

var G__26876 = args26874.length;
switch (G__26876) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26874.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__26881_SHARP_,p2__26882_SHARP_){
return cljs.core.assoc.call(null,p1__26881_SHARP_,cljs.core.get.call(null,p2__26882_SHARP_,key),p2__26882_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__26883){
var map__26886 = p__26883;
var map__26886__$1 = ((((!((map__26886 == null)))?((((map__26886.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26886.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26886):map__26886);
var f_data = map__26886__$1;
var file = cljs.core.get.call(null,map__26886__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26888,files_msg){
var map__26895 = p__26888;
var map__26895__$1 = ((((!((map__26895 == null)))?((((map__26895.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26895.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26895):map__26895);
var opts = map__26895__$1;
var on_cssload = cljs.core.get.call(null,map__26895__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__26897_26901 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26898_26902 = null;
var count__26899_26903 = (0);
var i__26900_26904 = (0);
while(true){
if((i__26900_26904 < count__26899_26903)){
var f_26905 = cljs.core._nth.call(null,chunk__26898_26902,i__26900_26904);
figwheel.client.file_reloading.reload_css_file.call(null,f_26905);

var G__26906 = seq__26897_26901;
var G__26907 = chunk__26898_26902;
var G__26908 = count__26899_26903;
var G__26909 = (i__26900_26904 + (1));
seq__26897_26901 = G__26906;
chunk__26898_26902 = G__26907;
count__26899_26903 = G__26908;
i__26900_26904 = G__26909;
continue;
} else {
var temp__4425__auto___26910 = cljs.core.seq.call(null,seq__26897_26901);
if(temp__4425__auto___26910){
var seq__26897_26911__$1 = temp__4425__auto___26910;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26897_26911__$1)){
var c__17658__auto___26912 = cljs.core.chunk_first.call(null,seq__26897_26911__$1);
var G__26913 = cljs.core.chunk_rest.call(null,seq__26897_26911__$1);
var G__26914 = c__17658__auto___26912;
var G__26915 = cljs.core.count.call(null,c__17658__auto___26912);
var G__26916 = (0);
seq__26897_26901 = G__26913;
chunk__26898_26902 = G__26914;
count__26899_26903 = G__26915;
i__26900_26904 = G__26916;
continue;
} else {
var f_26917 = cljs.core.first.call(null,seq__26897_26911__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26917);

var G__26918 = cljs.core.next.call(null,seq__26897_26911__$1);
var G__26919 = null;
var G__26920 = (0);
var G__26921 = (0);
seq__26897_26901 = G__26918;
chunk__26898_26902 = G__26919;
count__26899_26903 = G__26920;
i__26900_26904 = G__26921;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__26895,map__26895__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__26895,map__26895__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map