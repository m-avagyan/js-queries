type TypeArray = any[];

function unique(array: TypeArray): TypeArray {
  return [...new Set(array.map((el) => JSON.stringify(el)))].map((el) =>
    JSON.parse(el)
  );
}

export default unique;
