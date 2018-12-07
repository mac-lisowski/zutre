import Vue from 'vue';

// extend window and global variables
declare global {
  interface Window {
    Vue?: Vue;
  }

  interface Global extends Window {
    Vue?: Vue;
  }
}
type PluginRegister = (plugin: any) => void;

interface PluginInstall {
  installed?: boolean;

  (vue: any, component: any): void;
}

declare let global: Global;

export let registerPlugin: PluginRegister = (plugin: any) => {
  let vue: any = null;

  if (typeof window !== 'undefined') {
    vue = window.Vue;
  } else if (typeof global !== 'undefined') {
    vue = global.Vue;
  }

  if (vue) {
    vue.use(plugin);
  }
};

export let installPlugin: PluginInstall = (vue, component) => {
  if (installPlugin.installed) {
    return;
  }

  installPlugin.installed = true;
  vue.component(component.name, component);
};
