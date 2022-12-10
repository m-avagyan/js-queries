import filter from '../functions/filter';

describe('jsq filter method tests', () => {
  it('Should filter elements from array.', () => {
    const array = [{ id: 1 }, { id: 2 }, { id: 2 }, { id: 3 }];
    const expected = [{ id: 1 }, { id: 3 }];

    const result = filter(array, { id: 2 });

    expect(result).toStrictEqual(expected);
  });
});
