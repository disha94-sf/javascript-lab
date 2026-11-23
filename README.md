# javascript-lab

[![CI](https://github.com/disha94-sf/javascript-lab/actions/workflows/ci.yml/badge.svg)](https://github.com/disha94-sf/javascript-lab/actions/workflows/ci.yml)
![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)
![Node >= 22](https://img.shields.io/badge/node-%3E%3D22-green.svg)

Small, well-tested, **zero-dependency** JavaScript utilities — and a public log of my open-source contributions to the JavaScript ecosystem.

> Looking for Salesforce work? See [sf-code-doctor](https://github.com/disha94-sf/sf-code-doctor) and [salesforce-lwc-recipes](https://github.com/disha94-sf/salesforce-lwc-recipes).

## Utilities

| Function | What it does |
| --- | --- |
| [`chunk(array, size)`](src/chunk.js) | Split an array into groups of `size` |
| [`debounce(fn, wait)`](src/debounce.js) | Delay a function until calls stop; supports `cancel()` and `flush()` |
| [`slugify(text, options)`](src/slugify.js) | Turn any string into a URL-friendly slug |

```js
import { chunk, debounce, slugify } from './src/index.js';

chunk([1, 2, 3, 4, 5], 2);   // [[1, 2], [3, 4], [5]]
slugify('Crème Brûlée!');    // 'creme-brulee'

const save = debounce(() => console.log('saved'), 300);
save(); save(); save();      // logs once
```

## Getting started

```bash
git clone https://github.com/disha94-sf/javascript-lab.git
cd javascript-lab
npm test        # uses Node's built-in test runner — nothing to install
```

## Open-source contributions

I track every pull request I make to other JavaScript projects in
[docs/open-source-log.md](docs/open-source-log.md).

## Contributing

Ideas, bug reports and pull requests are welcome — see [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT](LICENSE)
