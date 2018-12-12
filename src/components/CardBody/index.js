import CardBody from './CardBody';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, CardBody);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    CardBody,
};
