export const ToasterProvider = {
  name: 'ToasterProvider',

  template: `<div>
  <slot />
  <app-toast ref="toaster" />
</div>`,

  provide() {
    return {
      toaster: {
        success: this.success,
      },
    };
  },

  methods: {
    success(message) {
      this.$refs['toaster'].success(message);
    },
  },
};
