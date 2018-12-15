import Navbar from './Navbar';
import NavbarSection from './NavbarSection';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Navbar);
    installPlugin(Vue, NavbarSection);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Navbar,
    NavbarSection,
};
