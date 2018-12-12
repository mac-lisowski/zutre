import EmptyIcon from './EmptyIcon';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, EmptyIcon);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    EmptyIcon,
};
