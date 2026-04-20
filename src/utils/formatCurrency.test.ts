import { describe, expect, test } from 'bun:test';
import { formatCurrency } from './formatCurrency';

describe('formatCurrency', () => {
  test('rounding pennies', () => {
    const rounds = 123.456;
    expect(formatCurrency(rounds)).toEqual('$123.46');
  });

  test('negative values', () => {
    const negativeValue = -1277.0;
    expect(formatCurrency(negativeValue)).toEqual('-$1,277.00');
  });

  test('just pennies', () => {
    const value = 0.15;
    expect(formatCurrency(value)).toEqual('$0.15');
  });

  test('negative pennies', () => {
    const value = -0.15;
    expect(formatCurrency(value)).toEqual('-$0.15');
  });

  test('six figures', () => {
    const value = 111_222.33;
    expect(formatCurrency(value)).toEqual('$111,222.33');
  });
});
