import Label from './Label';
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
