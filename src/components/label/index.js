import Label from './label';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Label);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Label,
};
