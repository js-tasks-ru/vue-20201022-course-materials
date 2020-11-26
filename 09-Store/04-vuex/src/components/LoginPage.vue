<template>
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
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'LoginPage',

  data() {
    return {
      email: 'demo@email',
      password: 'password',
    };
  },

  computed: {},

  methods: {
    ...mapActions('auth', {
      login: 'LOGIN',
    }),

    handleSubmit() {
      this.login({ email: this.email, password: this.password })
        .catch(e => {
          alert(e.message);
        });
    },
  },
};
</script>

<style scoped></style>
