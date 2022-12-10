type TypeParams = {
  [key: string]: any;
};

type TypeArray = TypeParams[];

type TypeResult = TypeParams | null;

function find(array: TypeArray, params: TypeParams): TypeResult {
  return (
    array.find((element) => {
      return Object.keys(params).reduce((result, key) => {
        if (element[key] !== params[key]) {
          result = false;
        }

        return result;
      }, true);
    }) || null
  );
}

export default find;
