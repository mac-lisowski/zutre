import Badge from './badge';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Badge);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Badge,
};
