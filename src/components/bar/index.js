import Bar from './bar';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Bar);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Bar,
};
