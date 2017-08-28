# tslint-config-prettier

[![Greenkeeper badge](https://badges.greenkeeper.io/alexjoverm/tslint-config-prettier.svg)](https://greenkeeper.io/)

[![npm](https://img.shields.io/npm/v/tslint-config-prettier.svg)](https://www.npmjs.com/package/tslint-config-prettier)
[![Travis](https://img.shields.io/travis/alexjoverm/tslint-config-prettier.svg)](https://travis-ci.org/alexjoverm/tslint-config-prettier)
[![downloads](https://img.shields.io/npm/dm/tslint-config-prettier.svg)](https://www.npmjs.com/package/tslint-config-prettier)
[![David](https://img.shields.io/david/alexjoverm/tslint-config-prettier.svg)]()
[![David](https://img.shields.io/david/dev/alexjoverm/tslint-config-prettier.svg)]()

<h3> :cop: tslint  +  :nail_care: prettier = :heart_eyes: </h3>

Do you wanna use [tslint](https://palantir.github.io/tslint/) and [prettier](https://github.com/prettier/prettier) without conflicts? tslint-config-prettier disables all conflicting rules that may cause such problems. Prettier takes care of formatting and tslint the rest.

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


### Contributing

```bash
# Fork repo
git clone https://github.com/YOUR-USERNAME/tslint-config-prettier
npm install
```

This project uses [semantic-release](https://github.com/semantic-release/semantic-release) to keep a clean CI/CD pipe.

So, you only will be required to follow [conventional-commit](https://github.com/commitizen/conventional-commit-types) messages. Everything else happens magically.

### Credits

Made with :heart: by [@alexjoverm](https://twitter.com/alexjoverm) and all its [contributors](https://github.com/alexjoverm/tslint-config-prettier/graphs/contributors)
