import MenuDivider from './MenuDivider';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, MenuDivider);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    MenuDivider,
};
