// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.utils.phone_number');
goog.require('cljs.core');
syng_im.utils.phone_number.i18n = require("react-native-i18n");
syng_im.utils.phone_number.locale = syng_im.utils.phone_number.i18n.locale;
syng_im.utils.phone_number.country_code = cljs.core.subs.call(null,syng_im.utils.phone_number.locale,(3),(5));
PhoneNumber = require("awesome-phonenumber");
syng_im.utils.phone_number.format_phone_number = (function syng_im$utils$phone_number$format_phone_number(number){
return [cljs.core.str((new PhoneNumber(number,syng_im.utils.phone_number.country_code,"international")).getNumber())].join('');
});

//# sourceMappingURL=phone_number.js.map