type TypeArray = any[];

function unique(array: TypeArray): TypeArray {
  return [...new Set(array)];
}

export default unique;
