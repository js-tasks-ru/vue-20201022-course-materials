import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';

const ListView = {
  template: `<div>
  <template v-for="(item, idx) in items_">
    <slot :item="item">
      <span>{{ item }}</span>
    </slot>
    <slot name="remove-button" :remove="() => remove(idx)">
      <button @click="remove(idx)">x</button>
    </slot>
  </template>
</div>`,

  props: {
    items: Array,
  },

  data() {
    return {
      items_: [...this.items],
    };
  },

  methods: {
    remove(idx) {
      this.items_.splice(idx, 1);
      this.$emit('update:items', [...this.items_]);
    },
  },
};

const App = {
  template: `<div>
  <list-view :items.sync="list">
    <template #default="scope">
      <b>{{ scope.item }}</b>
    </template>
    <template #remove-button="{ remove }">
      <a href="#" @click="remove">Remove</a>
    </template>
  </list-view>
</div>`,

  components: {
    ListView,
  },

  data() {
    return {
      list: [1, 2, 3, 4, 5],
    };
  },
};

const app = new Vue(App).$mount('#app');
