import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';
import App from './App.js';
import { loginWithApi } from './api.js';

Vue.config.productionTip = false;

new Vue({
  data() {
    return {
      user_: null,
    };
  },

  computed: {
    user() {
      return { ...this.user_ };
    },

    isAuthenticated() {
      return !!this.user_;
    },
  },

  methods: {
    setUser(user) {
      this.user_ = user;
    },

    login(email, password) {
      return loginWithApi(email, password).then((user) => {
        this.setUser(user);
      });
    },
  },

  render: (h) => h(App),
}).$mount('#app');
