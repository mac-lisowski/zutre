import circularProgress from './circularProgress.vue';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, circularProgress);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
  circularProgress,
};
