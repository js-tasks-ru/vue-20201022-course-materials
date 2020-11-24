import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';
import { windowSizeMixin } from './mixins/windowSizeMixin.js';
import { localPropMixin } from './mixins/localPropMixin.js';

const UserForm = {
  template: `<form>
  <p>FirstName: <input v-model="user_.firstName"></p>
  <p>LastName: <input v-model="user_.lastName"></p>
</form>`,

  mixins: [localPropMixin('user', { type: Object })],
};

// Vue.mixin(windowSizeMixin);

const App = {
  template: `<div>
  <p>Windows Size: {{ windowWidth }}:{{ windowHeight }}</p>
  <hr>
  <user-form :user.sync="user" />
  <hr>
  <pre>{{ user }}</pre>
</div>`,

  components: { UserForm },

  mixins: [windowSizeMixin],

  data() {
    return {
      user: {
        firstName: 'firstName',
        lastName: 'lastName',
      },
    };
  },
};

const app = new Vue(App).$mount('#app');
