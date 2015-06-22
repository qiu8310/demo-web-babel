# demo-web-babel

[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]

[![Sauce Test Status](https://saucelabs.com/browser-matrix/qiu8310.svg)](https://saucelabs.com/u/qiu8310)


[travis-url]: https://travis-ci.org/qiu8310/demo-web-babel
[travis-image]: https://travis-ci.org/qiu8310/demo-web-babel.svg?branch=master
[coveralls-url]: https://coveralls.io/r/qiu8310/demo-web-babel
[coveralls-image]: https://coveralls.io/repos/qiu8310/demo-web-babel/badge.png

## Stacks

* karma & mocha
* browserify & babel - `babel` runs as a plugin of `browserify`.
* coverage    - use `isparta` for support es6.
* saucelabs   - you should set `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` on your system environment.


## Test

* `npm test` - local test
* `npm run test-sl` - test on saucelabs


## SauceLabs

1. Add environment variables

  ```bash
  export SAUCE_USERNAME="your sauce labs user name"
  export SAUCE_ACCESS_KEY="yous sauce labs access key"
  ```

2. Run Sauce Labs test on local

  ```bash
  npm run test-sl
  ```

3. Run Sauce Labs test on TravisCI

  1. [Enable TravisCI](https://travis-ci.org/qiu8310/profile)
  2. [Adding Sauce Labs credentials for a public github repo](https://docs.saucelabs.com/ci-integrations/travis-ci/#adding-credentials-for-a-public-github-repo) or [you can add environment variables in travis](https://travis-ci.org/qiu8310/demo-web-babel/settings/env_vars)
  3. Add a addons to .travis.yml

    ```
    addons:
      sauce_connect: true
    ```
  4. [Sauce Labs badge](https://docs.saucelabs.com/reference/status-images/) __Note: if your have multiple projects that need sauce labs status badge, you have to [create sub-account](https://saucelabs.com/sub-accounts).__


  _[Reference](https://docs.saucelabs.com/ci-integrations/travis-ci/)_


## Todo

- [x] Auto enable saucelabs test when push to github, [reason](issues/1)
  - [x] Can't stop saucelabs test on travis, example [build #67801561](https://travis-ci.org/qiu8310/demo-web-babel/builds/67801561)
- [ ] Make a yeoman generator

## Reference

* [https://gist.github.com/koba04/7a18677b583e1ec43fca](https://gist.github.com/koba04/7a18677b583e1ec43fca)

