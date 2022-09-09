# Array to Matrix converter

## Sample Usage

```js
const a2m = require("@mskashef/array2matrix");
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(a2m(array, 3));
/*
OUTPUT:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
*/
```
## API Document

### Input Params
This function requires two input params: 
1. array: The array we want to convert to matrix
2. rowsLength: the length of the matrix rows

### Output
It converts that array to a matrix then returns it (returns an array of arrays).