# js-queries

Queries for JavaScript Array manipulations.

## Installation

```bash
npm install js-queries --save
```

or

```bash
yarn add js-queries
```

## Usage

- `find` - find an object from array

```javascript
import jsq from "js-queries";
// or
import { find } from "js-queries";

// array -> { [key: string]: any }[]
// params -> { [key: string]: any }

// jsq.find(array, params)

const cars = [
  { id: 1, color: "black" },
  { id: 2, color: "white" },
  { id: 3, color: "red" },
];

const car = jsq.find(cars, { id: 2 }); // { id: 2, color: 'white' }
```

- `filter` - filter array of object with object property

```javascript
import jsq from "js-queries";
// or
import { filter } from "js-queries";

// array -> { [key: string]: any }[]
// params -> { [key: string]: any }

// jsq.find(array, params)

const cars = [
  { id: 1, color: "black" },
  { id: 2, color: "white" },
  { id: 3, color: "red" },
];

const filteredCars = jsq.filter(cars, { id: 2 }); // // [{ id: 1, color: 'black' }, { id: 3, color: 'red' }]
```

- `unique` - remove duplicated elements from array

```javascript
import jsq from "js-queries";
// or
import { unique } from "js-queries";

// array -> any[]

// jsq.unique(array)

const cars = [
  { id: 1, color: "black" },
  { id: 1, color: "black" },
  { id: 2, color: "red" },
];

const filteredCars = jsq.unique(cars); // [{ id: 1, color: 'black' }, { id: 2, color: 'red' }]
```

- `sort` - sort array of object with object property

```javascript
import jsq from "js-queries";
// or
import { sort } from "js-queries";

// array -> { [key: string]: any }[]
// options -> { key: string, orientation: 'bts' | 'stb' }

// * orientation can be only 'bts' (big to small) or 'stb' (small to big) -> default 'stb'

// jsq.sort(array, options)

const cars = [
  { id: 1, color: "black" },
  { id: 2, color: "white" },
  { id: 3, color: "red" },
];

const sortedCars = jsq.sort(cars, { key: "id", orientation: "bts" }); // [{ id: 3, color: 'red' }, { id: 2, color: 'white' }, { id: 1, color: 'black' }]
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Author

**Martik Avagyan**

- Website: [martikavagyan.com](https://martikavagyan.com)
- Twitter: [@martikavagyan](https://twitter.com/martikavagyan)
- GitHub: [@m-avagyan](https://github.com/m-avagyan)

## License

[MIT](https://choosealicense.com/licenses/mit/)
