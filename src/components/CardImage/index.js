import CardImage from './CardImage';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, CardImage);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    CardImage,
};
