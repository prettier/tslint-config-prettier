# tslint-config-prettier

[![npm](https://img.shields.io/npm/v/tslint-config-prettier.svg)](https://www.npmjs.com/package/tslint-config-prettier)
[![Travis](https://img.shields.io/travis/alexjoverm/tslint-config-prettier.svg)](https://travis-ci.org/alexjoverm/tslint-config-prettier)
[![downloads](https://img.shields.io/npm/dm/tslint-config-prettier.svg)](https://www.npmjs.com/package/tslint-config-prettier)
[![David](https://img.shields.io/david/alexjoverm/tslint-config-prettier.svg)]()
[![David](https://img.shields.io/david/dev/alexjoverm/tslint-config-prettier.svg)]()
[![Greenkeeper badge](https://badges.greenkeeper.io/alexjoverm/tslint-config-prettier.svg)](https://greenkeeper.io/)

<h3> :cop: tslint  +  :nail_care: prettier = :heart_eyes: </h3>

Do you want to use [tslint](https://palantir.github.io/tslint/) and [prettier](https://github.com/prettier/prettier) without conflicts? tslint-config-prettier disables all conflicting rules that may cause such problems. Prettier takes care of the formatting whereas tslint takes care of all the other things.

### Get started

```bash
npm install -D tslint-config-prettier
```

Make sure you've already set up [tslint](https://palantir.github.io/tslint/) and [prettier](https://github.com/prettier/prettier).

Then, extend your `tslint.json`, and make sure `tslint-config-prettier` is **at the end**:

```json
{
  "extends": [
    "tslint:latest",
    "tslint-config-prettier"
  ]
}
```

### More configuration

`tslint-config-prettier` also turns off formatting rules from the following rulesets, so you can use them safely.

- [codelyzer](https://github.com/mgechev/codelyzer)
- [tslint](https://github.com/palantir/tslint)
- [tslint-consistent-codestyle](https://github.com/ajafff/tslint-consistent-codestyle)
- [tslint-divid](https://github.com/jonaskello/tslint-divid)
- [tslint-eslint-rules](https://github.com/buzinas/tslint-eslint-rules)
- [tslint-immutable](https://github.com/jonaskello/tslint-immutable)
- [tslint-microsoft-contrib](https://github.com/Microsoft/tslint-microsoft-contrib)
- [tslint-misc-rules](https://github.com/jwbay/tslint-misc-rules)
- [tslint-plugin-ikatyang](https://github.com/ikatyang/tslint-plugin-ikatyang)
- [tslint-react](https://github.com/palantir/tslint-react)
- [vrsource-tslint-rules](https://github.com/vrsource/vrsource-tslint-rules)

```json
{
  "extends": [
    "tslint:latest",
    "tslint-react",
    "tslint-eslint-rules",
    "tslint-config-prettier"
  ]
}
```

### CLI helper tool

`tslint-config-prettier` is shipped with a little CLI tool to help you check if your configuration contains any rules that are in conflict with Prettier. (require `tslint` installed)

In order to execute the CLI tool, first add a script for it to `package.json`:

```json
{
  "scripts": {
    "tslint-check": "tslint-config-prettier-check ./tslint.json"
  }
}
```

Then run `npm run tslint-check`.

### Tutorials

- [Using TSlint with Prettier](https://alexjoverm.github.io/2017/06/12/Use-Prettier-with-TSLint-and-be-happy/)
- [Use Prettier with TSLint without conflicts (video)](https://egghead.io/lessons/typescript-use-prettier-with-tslint-without-conflicts-c39670eb/)

### Contributing

Please read [CONTRIBUTING.md](https://github.com/alexjoverm/tslint-config-prettier/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

### Related

- [tslint-plugin-prettier](https://github.com/ikatyang/tslint-plugin-prettier) - Runs Prettier as a TSLint rule and reports differences as individual TSLint issues.

### Credits

Made with :heart: by [@alexjoverm](https://twitter.com/alexjoverm) and all its [contributors](https://github.com/alexjoverm/tslint-config-prettier/graphs/contributors)
