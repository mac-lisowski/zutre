import TileSubtitle from './TileSubtitle';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, TileSubtitle);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    TileSubtitle,
};
