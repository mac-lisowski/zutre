import Menu from './menu';
import MenuItem from './menu-item';
import MenuDivider from './menu-divider';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Menu);
    installPlugin(Vue, MenuItem);
    installPlugin(Vue, MenuDivider);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Menu,
    MenuItem,
    MenuDivider,
};
