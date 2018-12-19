import Tooltip from './Tooltip';
import { usePlugin, installPlugin } from './../../utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Tooltip);

    
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
  Tooltip,
};
