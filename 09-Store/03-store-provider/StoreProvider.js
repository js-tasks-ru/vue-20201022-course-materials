import { loginWithApi } from './api.js';

export default {
  template: '<div><slot /></div>',

  data() {
    return {
      auth: {
        user: null,
      },
    };
  },

  provide() {
    return {
      auth: this.auth,
      setUser: this.setUser,
      login: this.login,
    };
  },

  computed: {
    isAuthenticated() {
      return !!this.auth.user;
    },
  },

  methods: {
    setUser(user) {
      this.auth.user = user;
    },

    login(email, password) {
      return loginWithApi(email, password).then((user) => {
        this.setUser(user);
      });
    },
  },
};
