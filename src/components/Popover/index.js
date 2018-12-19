import Popover from './Popover';
import { usePlugin, installPlugin } from './../../utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Popover);

    
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
  Popover,
};
