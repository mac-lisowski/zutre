import Menu from './Menu';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Menu);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Menu,
};
