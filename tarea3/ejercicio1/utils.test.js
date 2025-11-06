const { suma, resta, multiplica, divide } = require('./utils');

describe('utils', () => {
  describe('suma', () => {
    test('suma de enteros', () => {
      expect(suma(2, 3)).toBe(5);
    });
    test('suma con negativos', () => {
      expect(suma(-2, 5)).toBe(3);
    });
    test('suma con decimales', () => {
      expect(suma(2.5, 0.5)).toBeCloseTo(3);
    });
  });

  describe('resta', () => {
    test('resta de enteros', () => {
      expect(resta(5, 3)).toBe(2);
    });
    test('resta con negativos', () => {
      expect(resta(-2, -5)).toBe(3);
    });
  });

  describe('multiplica', () => {
    test('multiplicacion basica', () => {
      expect(multiplica(4, 3)).toBe(12);
    });
    test('multiplicacion por cero', () => {
      expect(multiplica(7, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    test('division basica', () => {
      expect(divide(10, 2)).toBe(5);
    });
    test('division con decimales', () => {
      expect(divide(1, 4)).toBe(0.25);
    });
    test('lanza error cuando divisor es 0', () => {
      expect(() => divide(5, 0)).toThrow('Division by zero');
    });
  });
});

