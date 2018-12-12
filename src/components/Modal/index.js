import Modal from './Modal';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Modal);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Modal,
};
