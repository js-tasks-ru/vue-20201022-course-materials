<template>
  <div class="wrapper page container">
    <login-page v-if="!isAuthenticated"/>
    <div v-else>{{ user }}</div>
  </div>
</template>

<script>
import LoginPage from './components/LoginPage';
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'App',

  components: {
    LoginPage,
  },

  computed: {
    ...mapState('auth', {
      user: (state) => state.user,
    }),

    ...mapGetters('auth', {
      isAuthenticated: 'IS_AUTHENTICATED',
    }),
  },
};
</script>

<style scoped>
p {
  margin: 1rem 0;
}
</style>
