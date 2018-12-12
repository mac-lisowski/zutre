import TileTitle from './TileTitle';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, TileTitle);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    TileTitle,
};
