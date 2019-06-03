import Bar from './bar';
import BarItem from './bar-item';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Bar);
    installPlugin(Vue, BarItem);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Bar,
    BarItem,
};
