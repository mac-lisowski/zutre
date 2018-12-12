import EmptySubtitle from './EmptySubtitle';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, EmptySubtitle);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    EmptySubtitle,
};
