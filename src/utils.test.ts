import { log } from './utils.js';
import { test, expect } from 'vitest';

test('add', () => {
  log();
  expect(1 + 1).toBe(2);
});
