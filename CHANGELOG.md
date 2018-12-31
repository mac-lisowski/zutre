# Changelog


All notable changes to this project will be documented in this file.

---

## 0.1.3-alpha.6 Unreleased


---

## Released 

## 0.1.3-alpha.5

#### Added
* New component [Input](https://maclisowski.github.io/zutre/#/elements/forms)
* New component [Select](https://maclisowski.github.io/zutre/#/elements/forms)
* New component [Radio](https://maclisowski.github.io/zutre/#/elements/forms)
* New component [Switch](https://maclisowski.github.io/zutre/#/elements/forms)

#### Changed
* All component directories and files names changed to lower case
* Moved ButtonGroup to Button
* Moved Columns and Column to Container

## 0.1.3-alpha.4

#### Added
* Dropdowns - support for dropdowns in Buttons and Avatar presence icon
* Avatars - new prop `onClick`, if set will be called once user is going to click avatar icon (can be useful to provide capability to change avatar icon),
* Menus - new prop `onClick` in `<z-menu-item>` component, if set fired when user is going to click on menu item

#### Fixed
* Error on render in Accordions

## 0.1.3-alpha.3

#### Added
* New feature in Toast - provided ability to set global default settings for toasts

```
this.$zutre.toast.settings = {
  position: 'top right',
  type: 'info',
  duration: 3000,
  closeBtn: true  
};
```

## 0.1.3-alpha.2

#### Fixed
* Breadcrumbs: when there is no items, do not render empty HTML element
* Toast: revmoed loading toast as mixin

## 0.1.3-alpha.1

#### Added

* New component [Tooltips](https://maclisowski.github.io/zutre/#/components/tooltips)
* New component [Popovers](https://maclisowski.github.io/zutre/#/components/popovers)

#### Changed
* Tabs: Moved creation of tab controller instance to **zutre** API `Vue.$zutre.newTabController` method

#### Removed
* Support for tooltips through props for Buttons and Links - Tooltip component should be used instead


## 0.1.3-alpha.0

#### Changed

* Moved BreadcrumbsItem to Breadcrumbs
* Moved CardBody, CardImage, CardSubtitle, CardTitle to Card
* Moved EmptyAction, EmptyIcon, EmptySubtitle, EmptyTitle to Empty
* Moved HeroBody to Hero
* Moved MenuItem and MenuDivider to Menu
* Moved NavbarSection to Navbar
* Moved StepItem to Step
* Moved Tbody, Thead, Td, Th, Tr to Table
* Moved TileAction, TileContent, TileIcon, TileSubtitle, TitleTitle to Title
* Moved ToastBody, ToastTitle to Toast

#### Added
* New component [Drawer](https://maclisowski.github.io/zutre/#/components/drawer)
* New component [Accordion](https://maclisowski.github.io/zutre/#/components/accordions)
* New component [Tab](https://maclisowski.github.io/zutre/#/components/tabs)
* New component [Pagination](https://maclisowski.github.io/zutre/#/components/pagination)
* New component [Panel](https://maclisowski.github.io/zutre/#/components/panels)
* General cleanups in the code
* New property in Avatar - `{Boolean} block`, when set to `true`, css properties will be added: `display: block` and auto left/right margins plus centered position inside the block  
* Added tooltip suppeort: `tooltip` and `tooltipPosition = left/right/bottom/top` for components: Link, Button
* Nav - added `items` property to support passign nav elements as an array of objects, read more in [docs](https://maclisowski.github.io/zutre/#/components/nav)
* Added support for icons in Breadcrumbs

## 0.1.2

Please disregard previous versions, all together with those in npm. It was stricte for learning purposes. From now on will try my best to keep things clean :) 
