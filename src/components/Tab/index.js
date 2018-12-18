import Tab from './Tab';
import TabController from './TabController';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Tab);
    installPlugin(Vue, TabController);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
  Tab,
  TabController,
};
