const array2matrix = require("..");

test("Test: arr: 16, row: 4", () => {
  const searchResult = JSON.stringify(
    array2matrix([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 4)
  );
  expect(searchResult).toBe('[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]');
});

test("Test: arr: 12, row: 3", () => {
  const searchResult = JSON.stringify(
    array2matrix([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 3)
  );
  expect(searchResult).toBe('[[1,2,3,4],[5,6,7,8],[9,10,11,12]]');
});

test("Test: arr: 17, row: 4", () => {
  const searchResult = JSON.stringify(
    array2matrix([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 4)
  );
  expect(searchResult).toBe('[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17]]');
});

test("Test: arr: 3, row: 4", () => {
  const searchResult = JSON.stringify(
    array2matrix([1, 2, 3], 4)
  );
  expect(searchResult).toBe('[[1,2,3]]');
});

test("Test: arr: empty, row: 3", () => {
  const searchResult = JSON.stringify(
    array2matrix([], 3)
  );
  expect(searchResult).toBe('[[]]');
});

test("Must throw RangeError: arr: empty, row: 0", () => {
  expect(array2matrix.bind(null, [1,2,3], 0)).toThrow(RangeError);
});

test("Must throw RangeError: arr: empty, row: -1", () => {
  expect(array2matrix.bind(null, [1,2,3], 0)).toThrow(RangeError);
});