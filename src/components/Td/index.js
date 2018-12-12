import Td from './Td';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Td);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Td,
};
