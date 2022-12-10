type TypeParams = {
  [key: string]: any;
};

type TypeArray = TypeParams[];

function filter(array: TypeArray, params: TypeParams): TypeArray {
  return array.filter((element) => {
    return Object.keys(params).reduce((result, key) => {
      if (element[key] !== params[key]) {
        result = true;
      }

      return result;
    }, false);
  });
}

export default filter;
