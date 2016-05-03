// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.components.react');
goog.require('cljs.core');
goog.require('reagent.core');
window.React = require("react-native");
syng_im.components.react.app_registry = React.AppRegistry;
syng_im.components.react.navigator = reagent.core.adapt_react_class.call(null,React.Navigator);
syng_im.components.react.text = reagent.core.adapt_react_class.call(null,React.Text);
syng_im.components.react.view = reagent.core.adapt_react_class.call(null,React.View);
syng_im.components.react.drawer_layout_android = reagent.core.adapt_react_class.call(null,React.DrawerLayoutAndroid);
syng_im.components.react.image = reagent.core.adapt_react_class.call(null,React.Image);
syng_im.components.react.touchable_highlight = reagent.core.adapt_react_class.call(null,React.TouchableHighlight);
syng_im.components.react.toolbar_android = reagent.core.adapt_react_class.call(null,React.ToolbarAndroid);
syng_im.components.react.list_view = reagent.core.adapt_react_class.call(null,React.ListView);
syng_im.components.react.text_input = reagent.core.adapt_react_class.call(null,React.TextInput);
syng_im.components.react.touchable_opacity = reagent.core.adapt_react_class.call(null,React.TouchableOpacity);
syng_im.components.react.platform = React.Platform.OS;
syng_im.components.react.android_QMARK_ = cljs.core._EQ_.call(null,syng_im.components.react.platform,"android");
syng_im.components.react.list_item = (function syng_im$components$react$list_item(component){
return reagent.core.as_element.call(null,component);
});
syng_im.components.react.dismiss_keyboard = require("dismissKeyboard");

//# sourceMappingURL=react.js.map