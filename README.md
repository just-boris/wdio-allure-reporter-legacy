WDIO Allure reporter
==========

> A WebdriverIO plugin to create report with [Allure](https://github.com/allure-framework/allure-core)

## Installation

The easiest way is to keep `wdio-allure-reporter` as a devDependency in your `package.json`.

```json
{
  "devDependencies": {
    "wdio-allure-reporter": "^0.0.1"
  }
}
```

You can simple do it by:

```bash
npm install wdio-allure-reporter --save-dev
```

Instructions on how to install `WebdriverIO` can be found [here.](http://webdriver.io/guide/getstarted/install.html)

## Configuration

Following code shows the default wdio test runner configuration. Just add `'allure'` as reporter
to the array.

```js
// wdio.conf.js
module.exports = {
  // ...
  reporter: ['allure'],
  // ...
};
```

----

For more information on WebdriverIO see the [homepage](http://webdriver.io).
