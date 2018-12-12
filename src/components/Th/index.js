import Th from './Th';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Th);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Th,
};
