import Tooltip from './tooltip';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Tooltip);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
  Tooltip,
};
