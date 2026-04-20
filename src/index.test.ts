import { describe, expect, test } from 'bun:test';
import * as app from './index';

describe('index', () => {
  test('app', () => {
    expect(app).toBeDefined();
  });
});
