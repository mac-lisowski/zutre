import Empty from './Empty';
import EmptyAction from './EmptyAction';
import EmptyIcon from './EmptyIcon';
import EmptySubtitle from './EmptySubtitle';
import EmptyTitle from './EmptyTitle';

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
