import { getMonthAndDay, getFulllDate } from './formatDate';

describe('getMonthAndDay', () => {
  it('must return only month and day', () => {
    expect.assertions(1);
    const date = '2021-09-27';
    const result = getMonthAndDay(date);
    expect(result).toBe('Sep 27');
  });
});

describe('getFulllDate', () => {
  it('must return full date', () => {
    expect.assertions(1);
    const date = '2021-09-27';
    const result = getFulllDate(date);
    expect(result).toBe('Mon Sep 27 2021');
  });
});
