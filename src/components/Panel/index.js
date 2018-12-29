import Panel from './panel';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Panel);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
  Panel,
};
