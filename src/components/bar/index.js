import Bar from './bar';
import BarItem from './bar-item';
import BarBtn from './bar-btn';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Bar);
    installPlugin(Vue, BarItem);
    installPlugin(Vue, BarBtn);

  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Bar,
    BarItem,
    BarBtn,
};
