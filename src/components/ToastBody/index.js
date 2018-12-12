import ToastBody from './ToastBody';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, ToastBody);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    ToastBody,
};
