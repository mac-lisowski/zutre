import Column from './Column';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Column);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Column,
};
