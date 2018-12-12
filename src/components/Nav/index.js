import Nav from './Nav';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Nav);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Nav,
};
