import ToastTitle from './ToastTitle';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, ToastTitle);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    ToastTitle,
};
