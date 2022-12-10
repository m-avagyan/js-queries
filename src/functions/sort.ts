type TypeArray = {
  [key: string]: any;
}[];

type TypeOptions = {
  key: string;
  orientation?: 'bts' | 'stb';
};

function sort(array: TypeArray, { key, orientation }: TypeOptions): TypeArray {
  return array.sort((a, b) => {
    if (orientation === 'bts') {
      return b[key] - a[key];
    }

    return a[key] - b[key];
  });
}

export default sort;
