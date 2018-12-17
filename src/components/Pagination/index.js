import Pagination from './Pagination';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Pagination);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
  Pagination,
};
