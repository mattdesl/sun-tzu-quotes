# sun-tzu-quotes

A list of some Sun Tzu quotes from The Art of War.

PRs welcome.

## Install

```sh
npm install sun-tzu-quotes [--g|--save]
```

## Example

This module comes in an API and CLI. Example in code:

```js
var sunTzu = require('sun-tzu-quotes')

// random quote
console.log(sunTzu())
//=> 'All warfare is based on deception.'

// the array of all quotes
console.log(sunTzu.quotes)
```

## Usage

[![NPM](https://nodei.co/npm/sun-tzu-quotes.png)](https://www.npmjs.com/package/sun-tzu-quotes)

### API

#### `quote = sunTzu()`

Returns a random quote string, like `'Opportunities multiply as they are seized.'`.

#### `list = sunTzu.quotes`

The array of all quotes.

#### `list = require('sun-tzu-quotes/quotes.json')`

The full JSON array.

### CLI

You can also use the CLI here.

```
Usage:
  sun-tzu-quotes [opt]
  
Options:
  --help  show help
  --all   list all quotes, separated by newlines
```

Example:

```sh
$ sun-tzu-quotes
To know your Enemy, you must become your Enemy.
```

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/sun-tzu-quotes/blob/master/LICENSE.md) for details.
