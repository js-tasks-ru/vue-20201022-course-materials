export const windowSize = {
  data() {
    return {
      windowWidth: 0,
      windowHeight: 0,
    };
  },
  mounted() {
    window.addEventListener('resize', this.setWindowSize);
    this.setWindowSize();
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
