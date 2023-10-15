import unique from "../functions/unique";

describe("jsq unique method tests", () => {
  it("Should filter duplicated elements from array.", () => {
    const array = [{ id: 1 }, { id: 2 }, { id: 2 }, { id: 3 }];
    const expected = [{ id: 1 }, { id: 2 }, { id: 3 }];

    const result = unique(array);

    expect(result).toStrictEqual(expected);
  });
});
