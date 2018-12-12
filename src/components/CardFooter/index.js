import CardFooter from './CardFooter';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, CardFooter);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    CardFooter,
};
