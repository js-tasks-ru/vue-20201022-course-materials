import { authService, meetupsService } from '@/services';

export const ServiceProvider = {
  provide() {
    return {
      authService,
      meetupsService,
    };
  },

  render(h) {
    return h(this.$slots.default);
  }
};

