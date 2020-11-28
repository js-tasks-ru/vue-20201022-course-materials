import LoginPage from './LoginPage.js';

export default {
  name: 'App',

  template: `
    <div id="app" class="wrapper page container">
    <login-page v-if="!isAuthenticated"/>
    <div v-else>{{ user }}</div>
    </div>`,

  components: {
    LoginPage,
  },

  inject: {
    auth: 'auth',
  },

  computed: {
    user() {
      return this.auth.user;
    },

    isAuthenticated() {
      return !!this.auth.user;
    },
  },
};
