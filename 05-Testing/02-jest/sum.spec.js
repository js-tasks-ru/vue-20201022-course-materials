const { sum } = require('./sum');

function sumAsync(a, b) {
  return Promise.resolve(sum(a, b));
}

describe('Функция sum', () => {
  beforeAll(() => {
    // Выполняется ПЕРЕД ВСЕМИ тестами в этом блоке describe
  });

  afterAll(() => {
    // Выполняется ПОСЛЕ ВСЕХ тестов в этом блоке describe
  });

  beforeEach(() => {
    // Выполняется ПЕРЕД КАЖДЫМ тестам в этом блоке describe
  });

  afterEach(() => {
    // Выполняется ПОСЛЕ КАЖДОГО теста в этом блоке describe
  });

  it('should have sum 2 and 2 equal to 4', () => {
    console.log(x);
    expect(sum(2, 2)).toBe(4);
  });

  it('should have sum -1 and 1 equal to 0', () => {
    expect(sum(-1, 1)).toBe(0);
  });

  it('should have sum 1 and -1 equal to 0', async () => {
    expect(await sumAsync(1, -1)).toBe(0);
  });

  describe('sum with 10', () => {
    let a;

    beforeEach(() => {
      a = 10;
    });

    it('should have sum 10 and 2 equal to 12', () => {
      expect(sum(a, 2)).toBe(12);
    });

    it('should have sum 10 and 1 equal to 11', () => {
      expect(sum(a, 1)).toBe(11);
    });
  });
});
