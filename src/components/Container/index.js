import Container from './Container';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Container);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Container,
};
