import EmptyAction from './EmptyAction';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, EmptyAction);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    EmptyAction,
};
