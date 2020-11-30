import { authService, meetupsService } from '@/services';

export const ServicePlugin = {
  install(Vue) {
    Vue.prototype.$services = {
      authService,
      meetupsService,
    };
  },
};
