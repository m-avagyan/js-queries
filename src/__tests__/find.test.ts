import find from '../functions/find';

describe('jsq find method tests', () => {
  it('Should return founded element from array.', () => {
    const array = [
      { id: 1, name: 't' },
      { id: 2, name: 's' },
      { id: 3, name: 'b' },
    ];
    const expected = { id: 2, name: 's' };

    const result = find(array, { name: 's' });

    expect(result).toStrictEqual(expected);
  });

  it('Should return null if element not found.', () => {
    const array = [
      { id: 1, name: 't' },
      { id: 2, name: 's' },
      { id: 3, name: 'b' },
    ];
    const expected = null;

    const result = find(array, { id: 6, name: 's' });

    expect(result).toStrictEqual(expected);
  });
});
