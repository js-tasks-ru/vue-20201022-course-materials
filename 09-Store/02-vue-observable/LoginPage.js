import { store } from './store.js';

export default {
  name: 'LoginPage',

  template: `
    <form @submit.prevent="handleSubmit">
    <p>
      <input v-model="email" placeholder="email" />
    </p>
    <p>
      <input v-model="password" type="password" placeholder="password" />
    </p>
    <p>
      <button>Submit</button>
    </p>
    </form>`,

  data() {
    return {
      email: 'demo@email',
      password: 'password',
    };
  },

  // Можно делать inject, чтобы дальше использовать из this, а не импортировать (инверсия зависимостей через инъекцию зависимостей)
  // inject: {
  //   store: 'store',
  // },

  methods: {
    handleSubmit() {
      store.auth.login(this.email, this.password).catch((err) => {
        alert(err.message);
      });
    },
  },
};
