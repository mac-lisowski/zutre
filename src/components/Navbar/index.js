import Navbar from './navbar';
import NavbarSection from './navbar-section';
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
