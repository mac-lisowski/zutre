import Icon from './Icon';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Icon);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Icon,
};
