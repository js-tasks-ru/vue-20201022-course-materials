import AppToast from './AppToast.js';

export const ToasterPlugin = {
  install(Vue, options) {
    let container = options.container;
    if (!container) {
      container = document.createElement('div');
      document.body.appendChild(container);
    }
    Vue.prototype.$toaster = new Vue(AppToast).$mount(container);
    Vue.component('AppToast', AppToast);
    Vue.mixin({});
  },
};
