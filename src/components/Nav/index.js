import Nav from './nav';
import NavItem from './nav-item';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Nav);
    installPlugin(Vue, NavItem);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Nav,
    NavItem,
};
