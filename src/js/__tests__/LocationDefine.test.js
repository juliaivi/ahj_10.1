import checkValue from '../checkValue';

describe('test', () => {
  test('test 1, data entered correctly', () => {
    expect(checkValue('43.456456, -23.2558856')).toBeTruthy();
  });

  test('test 2, data entered correctly', () => {
    expect(checkValue('43.456456,-123.2558856')).toBeTruthy();
  });
  test('test 3, data entered correctly', () => {
    expect(checkValue('[3.456456,-23.2558856]')).toBeTruthy();
  });
  test('test 4, data entered correctly', () => {
    expect(checkValue('[ 43.456456,-23.2558856]')).toBeFalsy();
  });
  test('test 5, data entered correctly', () => {
    expect(checkValue('[43.e,-23.2558856]')).toBeFalsy();
  });
  test('test 6, data entered correctly', () => {
    expect(checkValue('43.5255,-233.2558856')).toBeFalsy();
  });
  test('test 7, data entered correctly', () => {
    expect(checkValue('43.5255,  -233.2558856')).toBeFalsy();
  });
});
