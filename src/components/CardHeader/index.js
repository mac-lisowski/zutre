import CardHeader from './CardHeader';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, CardHeader);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    CardHeader,
};
