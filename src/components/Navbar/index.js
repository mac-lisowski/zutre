import Navbar from './Navbar';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Navbar);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Navbar,
};
