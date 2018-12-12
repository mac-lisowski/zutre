import EmptyTitle from './EmptyTitle';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, EmptyTitle);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    EmptyTitle,
};
