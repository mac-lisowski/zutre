import TileIcon from './TileIcon';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, TileIcon);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    TileIcon,
};
