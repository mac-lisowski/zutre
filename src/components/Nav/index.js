import Nav from './Nav';
import NavItem from './NavItem';
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
