import TileAction from './TileAction';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, TileAction);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    TileAction,
};
