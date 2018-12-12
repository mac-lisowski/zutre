import StepItem from './StepItem';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, StepItem);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    StepItem,
};
