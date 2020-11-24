import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';

import { localPropMixin } from './local-prop-mixin.js';
import { windowSize } from './window-size.js';

const UserForm = {
  template: `<form>
  <p>FirstName: <input v-model="user_.firstName"></p>
  <p>LastName: <input v-model="user_.lastName"></p>
</form>`,

  mixins: [localPropMixin('user', { type: Object, required: true })],
};

const App = {
  template: `<div>
  <p>Windows Size: {{ windowWidth }}:{{ windowHeight }}</p>
  <hr>
  <user-form :user.sync="user" />
  <hr>
  <pre>{{ user }}</pre>
</div>`,

  components: { UserForm },

  props: {
    myProps: {},
    ...windowSize.props,
  },

  mounted() {
    windowSize.mounted();
  },

  data() {
    return {
      ...windowSize.data(),
      user: {
        firstName: 'firstName',
        lastName: 'lastName',
      },
    };
  },

  methods: {
    ...windowSize.methods,
  },

  beforeDestroy() {
    windowSize.beforeDestroy();
  },
};

const app = new Vue({
  render: (h) => h(App),
}).$mount('#app');
