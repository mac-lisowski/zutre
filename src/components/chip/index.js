import Chip from './chip';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Chip);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Chip,
};
