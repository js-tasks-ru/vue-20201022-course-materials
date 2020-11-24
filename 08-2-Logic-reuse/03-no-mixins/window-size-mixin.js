export const windowSizeMixin = {
  data() {
    return {
      windowWidth: 0,
      windowHeight: 0,
    };
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.setWindowSize);
      window.addEventListener('resize', this.setWindowSize);
      this.setWindowSize();
    });
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
