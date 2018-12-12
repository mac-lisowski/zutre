import Tr from './Tr';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Tr);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Tr,
};
