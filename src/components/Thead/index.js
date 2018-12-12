import Thead from './Thead';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Thead);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Thead,
};
