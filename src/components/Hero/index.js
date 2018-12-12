import Hero from './Hero';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Hero);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Hero,
};
