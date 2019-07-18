import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'

import '@/style/index.scss' // global css

import './plugins/lazyload'
import './plugins/registration'


// 全局Promise异常捕获
window.addEventListener('unhandledrejection', (e) => {
  e.preventDefault()
  console.warn('promise error=>', e.reason);
  return false;
});

/**
 * @param msg 问题
 * @param vm  vm为抛出异常的 Vue 实例
 * @param trace 是组件的继承关系追踪
 */

Vue.config.warnHandler = function(msg, vm, trace) {
  console.warn('warn_msg=>', msg);
  console.warn('warn_vm=>', vm);
  console.warn('warn_trace=>', trace);
};

/**
 * @param err 问题
 * @param vm  vm为抛出异常的 Vue 实例
 * @param info Vue 特定的错误信息，比如错误所在的生命周期钩子
 */
Vue.config.errorHandler = function(err, vm, info) {
  console.error('error=>', err);
  console.error('error_vm=>', vm);
  console.error('error_info=>', info);
};

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  ...App
});
