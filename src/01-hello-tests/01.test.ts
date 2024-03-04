import { sum } from './01';

test('sum should be correct', () => {
  //data:
  const a = 1;
  const b = 2;
  const c = 3;

  //action:
  const result1 = sum(a, b);
  const result2 = sum(b, c);
  const result3 = sum(b, c);

  //expect result:
  expect(result1).toBe(3);
  expect(result2).toBe(5);
  expect(result2).not.toBe(4);
})