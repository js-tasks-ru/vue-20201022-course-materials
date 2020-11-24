import AppToast from './AppToast.js';

export default {
  name: 'SamplePage',

  template: `<div
    style="position: relative;
      border: 1px solid;
      background: #efefef;
      padding: 15px;
      width: 500px;
      height: 500px;"
  >
  <button @click="localToast">Local Toast</button>
</div>`,

  components: { AppToast },

  inject: {
    toaster: 'toaster',
    config: 'config',
  },

  methods: {
    localToast() {
      this.toasterPlugin.success('Toast from inject: ' + this.config.API_URL);
    },
  },
};
