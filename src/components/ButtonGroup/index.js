import ButtonGroup from './ButtonGroup';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, ButtonGroup);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    ButtonGroup,
};
