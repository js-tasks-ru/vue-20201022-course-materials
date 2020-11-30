import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';

const RenderlessListView = {
  // template: `<div><slot :items="items_" :methods="{ remove }" /></div>`,

  props: {
    items: Array,
  },

  data() {
    return {
      items_: [],
    };
  },

  watch: {
    items: {
      deep: true,
      immediate: true,
      handler() {
        this.items_ = [...this.items];
      },
    },
  },

  methods: {
    remove(idx) {
      this.items_.splice(idx, 1);
      this.$emit('update:items', [...this.items_]);
    },
  },

  render(h) {
    return this.$scopedSlots.default({
      items: this.items_,
      methods: {
        remove: this.remove,
      },
    });
  },
};

const UlListView = {
  template: `<renderless-list-view :items="list" @update:items="$emit('update:list', $event)">
    <template #default="{ items, methods }">
      <ul>
        <li v-for="(item, idx) in items">
          <span>{{ item }}</span>
          <button type="button" @click="methods.remove(idx)">Delete</button>
        </li>
      </ul>
    </template>
  </renderless-list-view>`,

  components: { RenderlessListView },

  props: {
    list: Array,
  },
};

const AListView = {
  components: { RenderlessListView },

  template: `<renderless-list-view :items="list" @update:items="$emit('update:list', $event)">
    <template #default="{ items, methods }">
      <div>
        <a v-for="(item, index) in items" @click="methods.remove(index)" href="#">{{ item }}</a>
      </div>
    </template>
  </renderless-list-view>`,

  props: {
    list: Array,
  },
};

const App = {
  template: `<div>
    <ul-list-view :list.sync="list"/>
    <hr>
    <a-list-view :list.sync="list" />
  </div>`,

  components: {
    UlListView,
    AListView,
  },

  data() {
    return {
      list: [1, 2, 3, 4, 5],
    };
  },
};

const app = new Vue(App).$mount('#app');
