import Step from './Step';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Step);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Step,
};
