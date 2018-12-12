import Card from './Card';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Card);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Card,
};
