import Tbody from './Tbody';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Tbody);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Tbody,
};
