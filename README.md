# Zutre [![](https://img.shields.io/npm/v/zutre.svg)](https://www.npmjs.com/package/zutre) [![](https://img.shields.io/github/package-json/v/maclisowski/zutre.svg)](https://github.com/maclisowski/zutre) 

#### NOTE: Project in development, do not use at production

**zutre** is a set of UI components for VueJS based on [Spectre CSS Framework](https://github.com/picturepan2/spectre) with some modifications and provided new features which are not available in Spectre.

Demo and documentation: [https://maclisowski.github.io/zutre/](https://maclisowski.github.io/zutre/)

If you want to see what is coming next, please see [Changelog](https://github.com/maclisowski/zutre/blob/master/CHANGELOG.md).

[![](https://img.shields.io/github/issues/maclisowski/zutre.svg)](https://github.com/maclisowski/zutre/issues) ![](https://img.shields.io/github/languages/top/maclisowski/zutre.svg) [![Known Vulnerabilities](https://snyk.io/test/github/maclisowski/zutre/badge.svg?targetFile=package.json)](https://snyk.io/test/github/maclisowski/zutre?targetFile=package.json) [![GitHub license](https://img.shields.io/github/license/maclisowski/zutre.svg)](https://github.com/maclisowski/zutre/blob/master/LICENSE) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://gitHub.com/maclisowski/zutre/) [![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://twitter.com/maclisowski) [![](https://img.shields.io/npm/dt/zutre.svg)](https://www.npmjs.com/package/zutre) 

[![https://nodei.co/npm/zutre.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/zutre.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/zutre)


### Installation

In order to install and use **zutre** in your Vue app, you have to install it through npm: 

```bash
npm install --save zutre
```

In your main js file import **zutre** and use it in your Vue instance  

```js
import Vue from 'vue';
import Zutre from 'zutre';

Vue.use(Zutre);
```

Once it is done, you can use **zutre** components in your Vue project. For more informations, components examples and API please see **[documentation](https://maclisowski.github.io/zutre/)**.

### Zutre Components 
* ### Elements
  * [Tables](https://maclisowski.github.io/zutre/#/elements/table)
  * [Buttons](https://maclisowski.github.io/zutre/#/elements/buttons)
  * Forms
    * [Input](https://maclisowski.github.io/zutre/#/elements/forms)
    * [Select](https://maclisowski.github.io/zutre/#/elements/forms)
    * [Radio](https://maclisowski.github.io/zutre/#/elements/forms)
    * [Switch](https://maclisowski.github.io/zutre/#/elements/forms)
    * [Checkbox](https://maclisowski.github.io/zutre/#/elements/forms)
  * [Icons](https://maclisowski.github.io/zutre/#/elements/icons)
  * [Labels](https://maclisowski.github.io/zutre/#/elements/label)
  * [Code](https://maclisowski.github.io/zutre/#/elements/code)
  * [Media](https://maclisowski.github.io/zutre/#/elements/media)
* ### Layout
  * [Flexbox grid](https://maclisowski.github.io/zutre/#/layout/flexbox)
  * [Responsive](https://maclisowski.github.io/zutre/#/layout/responsive)
  * [Hero](https://maclisowski.github.io/zutre/#/layout/hero)
  * [Navbar](https://maclisowski.github.io/zutre/#/layout/navbar)
* ### Components
  * [Accordions](https://maclisowski.github.io/zutre/#/components/accordions)
  * [Avatars](https://maclisowski.github.io/zutre/#/components/avatars)
  * [Badges](https://maclisowski.github.io/zutre/#/components/badges)
  * [Breadcrumbs](https://maclisowski.github.io/zutre/#/components/breadcrumbs)
  * [Cards](https://maclisowski.github.io/zutre/#/components/cards)
  * [Chips](https://maclisowski.github.io/zutre/#/components/chips)
  * [Drawer](https://maclisowski.github.io/zutre/#/components/drawer)
  * [Empty states](https://maclisowski.github.io/zutre/#/components/empty-states)
  * [Menu](https://maclisowski.github.io/zutre/#/components/menu)
  * [Modals](https://maclisowski.github.io/zutre/#/components/modals)
  * [Nav](https://maclisowski.github.io/zutre/#/components/nav)
  * [Pagination](https://maclisowski.github.io/zutre/#/components/pagination)
  * [Panels](https://maclisowski.github.io/zutre/#/components/panels)
  * [Popovers](https://maclisowski.github.io/zutre/#/components/popovers)
  * [Steps](https://maclisowski.github.io/zutre/#/components/steps)
  * [Tabs](https://maclisowski.github.io/zutre/#/components/tabs)
  * [Tiles](https://maclisowski.github.io/zutre/#/components/tiles)
  * [Toasts](https://maclisowski.github.io/zutre/#/components/toasts)
  * [Tooltips](https://maclisowski.github.io/zutre/#/components/tooltips)
  
* ### Utilities
  * [Divider](https://maclisowski.github.io/zutre/#/utilities/divider)
  * [Link](https://maclisowski.github.io/zutre/#/utilities/link)

---

## Developing
### Project setup
```
npm install
```

### Compiles and hot-reloads for development
Runs dev server with documentation 
```
npm run serve
```

### Compiles and minifies for production
```
npm run build-bundle
```

### Compiles documentation
```
npm run build-docs
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

--- 

## License

This package is under MIT License (MIT). Please see LICENSE file for more details.

Copyright (c) 2018 Maciej Lisowski
