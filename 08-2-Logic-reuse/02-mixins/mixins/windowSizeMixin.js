export const windowSizeMixin = {
  mounted() {
    window.addEventListener('resize', this.setWindowSize);
    this.setWindowSize();
  },

  data() {
    return {
      windowWidth: 0,
      windowHeight: 0,
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
  },
};
