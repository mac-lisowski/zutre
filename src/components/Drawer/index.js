import Drawer from './drawer';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Drawer);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Drawer,
};
