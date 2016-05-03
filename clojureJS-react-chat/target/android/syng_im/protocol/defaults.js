// Compiled by ClojureScript 1.7.170 {}
goog.provide('syng_im.protocol.defaults');
goog.require('cljs.core');
goog.require('cljs_time.core');
syng_im.protocol.defaults.default_content_type = "text/plain";
syng_im.protocol.defaults.max_retry_send_count = (5);
syng_im.protocol.defaults.ack_wait_timeout_ms = cljs_time.core.millis.call(null,(5000));
syng_im.protocol.defaults.check_delivery_interval_msg = (100);

//# sourceMappingURL=defaults.js.map