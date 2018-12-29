import Icon from './icon';
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
