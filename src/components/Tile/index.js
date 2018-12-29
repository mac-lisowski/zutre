import Tile from './tile';
import TileAction from './tile-action';
import TileContent from './tile-content';
import TileIcon from './tile-icon';
import TileSubtitle from './tile-subtitle';
import TileTitle from './tile-title';

import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Tile);
    installPlugin(Vue, TileAction);
    installPlugin(Vue, TileContent);
    installPlugin(Vue, TileIcon);
    installPlugin(Vue, TileSubtitle);
    installPlugin(Vue, TileTitle);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
  Tile,
  TileAction,
  TileContent,
  TileIcon,
  TileSubtitle,
  TileTitle,
};
