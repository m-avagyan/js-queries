import sort from "../functions/sort";

describe("jsq sort method tests", () => {
  it("Should sort array from big to small.", () => {
    const array = [{ id: 2 }, { id: 1 }, { id: 3 }];
    const expected = [{ id: 3 }, { id: 2 }, { id: 1 }];

    const result = sort(array, { key: "id", orientation: "bts" });

    expect(result).toStrictEqual(expected);
  });

  it("Should sort array from small to big.", () => {
    const array = [{ id: 2 }, { id: 1 }, { id: 3 }];
    const expected = [{ id: 1 }, { id: 2 }, { id: 3 }];

    const result = sort(array, { key: "id", orientation: "stb" });

    expect(result).toStrictEqual(expected);
  });
});
