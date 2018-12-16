import Tab from './Tab';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Tab);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
  Tab,
};
