import Tile from './Tile';
import TileAction from './TileAction';
import TileContent from './TileContent';
import TileIcon from './TileIcon';
import TileSubtitle from './TileSubtitle';
import TileTitle from './TileTitle';

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
