function sum(a, b) {
  let result = a;
  for (let i = 0; i < b; i++) {
    result += 1;
  }
  return result;
}

module.exports = {
  sum,
};
