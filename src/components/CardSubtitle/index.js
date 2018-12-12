import CardSubtitle from './CardSubtitle';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, CardSubtitle);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    CardSubtitle,
};
