import Breadcrumbs from './Breadcrumbs';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Breadcrumbs);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Breadcrumbs,
};
