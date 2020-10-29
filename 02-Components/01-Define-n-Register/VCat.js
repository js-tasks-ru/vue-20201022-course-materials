export default {
  template: '<img :src="`https://cataas.com/cat?height=300&random=${random}`" alt="Random cat">',

  data: () => ({
    random: Math.random(),
  }),
};
