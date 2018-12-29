import Input from './input';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Input);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Input,
};
