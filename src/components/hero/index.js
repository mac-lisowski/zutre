import Hero from './hero';
import HeroBody from './hero-body';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Hero);
    installPlugin(Vue, HeroBody);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Hero,
    HeroBody,
};
