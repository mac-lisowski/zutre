import formElementMixin from './formElMixin';

export const formElMixin = formElementMixin;
// usePlugin installs plugin in current global Vue instance if available
export const usePlugin = (plugin) => {
  let vue = null;

  if (typeof window !== 'undefined' && window.Vue) {
    vue = window.Vue;
  } else if (typeof global !== 'undefined' && global.Vue) {
    vue = global.Vue;
  }

  if (vue) {
    vue.use(plugin);
  }
}

export function installPlugin(vue, component) {
	if (component._installed) return;
	component._installed = true;

  let newComponentName = (component.name.startsWith('Z')) ? component.name : 'Z' + component.name;
  
	vue.component(newComponentName, component);
}

/**
 * genID generate unique string name
 */
export function genID() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

export function timeNow() {
  return window.performance && window.performance.now ? (window.performance.now() + window.performance.timing.navigationStart) : +new Date();
}