## js-query

Queries for JavaScript Array manipulations.

## Installation

```bash
  # using npm
  npm install js-query

  # using yarn
  yarn add js-query
```

## Methods

- `find` - find an object from array

```javascript
import jsq from 'js-query';
// or
import { find } from 'js-query';

// array -> { [key: string]: any }[]
// params -> { [key: string]: any }

// jsq.find(array, params)

const cars = [
  { id: 1, color: 'black' },
  { id: 2, color: 'white' },
  { id: 3, color: 'red' },
];

const car = jsq.find(cars, { id: 2 }); // { id: 2, color: 'white' }
```

- `filter` - filter array of object with object property

```javascript
import jsq from 'js-query';
// or
import { filter } from 'js-query';

// array -> { [key: string]: any }[]
// params -> { [key: string]: any }

// jsq.find(array, params)

const cars = [
  { id: 1, color: 'black' },
  { id: 2, color: 'white' },
  { id: 3, color: 'red' },
];

const filteredCars = jsq.filter(cars, { id: 2 }); // // [{ id: 1, color: 'black' }, { id: 3, color: 'red' }]
```

- `unique` - remove duplicated elements from array

```javascript
import jsq from 'js-query';
// or
import { unique } from 'js-query';

// array -> any[]

// jsq.unique(array)

const cars = [
  { id: 1, color: 'black' },
  { id: 1, color: 'black' },
  { id: 2, color: 'red' },
];

const filteredCars = jsq.unique(cars); // [{ id: 1, color: 'black' }, { id: 2, color: 'red' }]
```

- `sort` - sort array of object with object property

```javascript
import jsq from 'js-query';
// or
import { sort } from 'js-query';

// array -> { [key: string]: any }[]
// options -> { key: string, orientation: 'bts' | 'stb' }

// * orientation can be only 'bts' (big to small) or 'stb' (small to big) -> default 'stb'

// jsq.sort(array, options)

const cars = [
  { id: 1, color: 'black' },
  { id: 2, color: 'white' },
  { id: 3, color: 'red' },
];

const sortedCars = jsq.sort(cars, { key: 'id', orientation: 'bts' }); // [{ id: 3, color: 'red' }, { id: 2, color: 'white' }, { id: 1, color: 'black' }]
```
