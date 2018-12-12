import CardTitle from './CardTitle';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, CardTitle);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    CardTitle,
};
