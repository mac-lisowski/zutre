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

export function installPlugin(Vue, component) {
	if (component._installed) return;
	component._installed = true;

	Vue.component('Z' + component.name, component);
}
