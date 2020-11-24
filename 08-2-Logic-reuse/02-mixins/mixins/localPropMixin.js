const deepEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

export const localPropMixin = (propName, propOptions) => ({
  props: {
    [propName]: propOptions,
  },

  data() {
    return {
      [`${propName}_`]: null,
    };
  },

  watch: {
    [propName]: {
      immediate: true,
      deep: true,
      handler(newValue) {
        if (!deepEqual(newValue, this[`${propName}_`])) {
          this[`${propName}_`] = deepClone(newValue);
        }
      },
    },

    [`${propName}_`]: {
      deep: true,
      handler(newValue) {
        this.$emit(`update:${propName}`, deepClone(newValue));
      },
    },
  },
});
