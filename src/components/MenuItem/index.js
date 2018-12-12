import MenuItem from './MenuItem';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, MenuItem);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    MenuItem,
};
