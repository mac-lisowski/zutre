import TileContent from './TileContent';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, TileContent);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    TileContent,
};
