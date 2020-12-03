import AppToast from './AppToast.js';
import { createApp, inject } from './vue3.esm-browser.js';

export const TOASTER = Symbol('toaster');

export function useToasterContext() {
  const { success } = inject(TOASTER);

  return {
    success,
  };
}

export const ToasterPlugin = {
  install(app, options = {}) {
    let container = options.container;
    if (!container) {
      container = document.createElement('div');
      document.body.appendChild(container);
    }
    const toaster = createApp(AppToast).mount(container);
    app.provide(TOASTER, toaster);
    app.component('AppToast', AppToast);
    // Vue.mixin({});
  },
};
