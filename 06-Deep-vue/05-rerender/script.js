import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';

let i = 0;
const genId = () => i++;

const AppInput = {
  template: `<div>
    <input :value="value" @input="$emit('input', $event.target.value)" />
  </div>`,

  props: ['value', 'code'],

  model: {
    prop: 'value',
    event: 'input',
  },
};

const FormGroup = {
  template: `<div>
    <label>Form Group:</label><br />
    <slot />
  </div>`,

  props: ['code'],
};

const App = {
  template: `<div>
    <form-group v-for="input in inputs" :key="input.id" :code="input.id">
      <template #default>
        <app-input v-model="input.value" :code="input.id" />
      </template>
    </form-group>
  </div>`,

  components: {
    FormGroup,
    AppInput,
  },

  data() {
    return {
      inputs: Array.from(Array(1000), () => ({ value: '', id: genId() })),
    };
  },
};

const app = new Vue({
  render: (h) => h(App),
}).$mount('#app');
