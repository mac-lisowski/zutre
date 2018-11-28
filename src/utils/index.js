export function registerPlugin(plugin) {
  let vue = null;

  if (typeof window !== 'undefined') {
    vue = window.Vue;
  } else if (typeof global !== 'undefined') {
    vue = global.Vue;
  }

  if (vue) {
    vue.use(plugin)
  }

  
}
