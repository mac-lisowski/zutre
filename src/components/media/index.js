import Media from './media';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Media);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Media,
};
