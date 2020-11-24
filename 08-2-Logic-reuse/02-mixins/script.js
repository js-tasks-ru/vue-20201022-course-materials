import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';

const deepEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const deepClone = obj => JSON.parse(JSON.stringify(obj));

const UserForm = {
  template: `<form>
  <p>FirstName: <input v-model="user_.firstName"></p>
  <p>LastName: <input v-model="user_.lastName"></p>
</form>`,

  props: {
    user: {
      type: Object,
    },
  },

  data() {
    return {
      user_: null,
    };
  },

  watch: {
    user: {
      immediate: true,
      deep: true,
      handler(newValue) {
        if (!deepEqual(this.user, this.user_)) {
          this.user_ = deepClone(newValue);
        }
      },
    },

    user_: {
      deep: true,
      handler(newValue) {
        this.$emit('update:user', deepClone(newValue));
      },
    },
  },
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

  mounted() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.setWindowSize);
      window.addEventListener('resize', this.setWindowSize);
      this.setWindowSize();
    });
  },

  data() {
    return {
      windowWidth: 0,
      windowHeight: 0,
      user: {
        firstName: 'firstName',
        lastName: 'lastName',
      },
    };
  },

  methods: {
    setWindowSize() {
      this.windowWidth = document.documentElement.clientWidth;
      this.windowHeight = document.documentElement.clientHeight;
    },
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.setWindowSize);
    window.removeEventListener('resize', this.setWindowSize);
  },
};

const app = new Vue(App).$mount('#app');
