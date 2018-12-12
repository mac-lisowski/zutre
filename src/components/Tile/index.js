import Tile from './Tile';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Tile);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Tile,
};
