import Empty from './empty';
import EmptyAction from './empty-action';
import EmptyIcon from './empty-icon';
import EmptySubtitle from './empty-subtitle';
import EmptyTitle from './empty-title';

import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Empty);
    installPlugin(Vue, EmptyAction);
    installPlugin(Vue, EmptyIcon);
    installPlugin(Vue, EmptySubtitle);
    installPlugin(Vue, EmptyTitle);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
  Empty,
  EmptyAction,
  EmptyIcon,
  EmptySubtitle,
  EmptyTitle,
};
