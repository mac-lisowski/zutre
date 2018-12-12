import HeroBody from './HeroBody';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, HeroBody);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    HeroBody,
};
