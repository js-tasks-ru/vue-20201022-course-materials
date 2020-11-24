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
  <button @click="toast">Toast</button>
</div>`,

  components: { AppToast },

  methods: {
    toast() {
      this.$toaster.success('Toast!');
    },
  },
};
