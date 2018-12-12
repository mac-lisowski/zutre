import Empty from './Empty';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Empty);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Empty,
};
