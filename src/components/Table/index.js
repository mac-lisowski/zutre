import Table from './Table';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Table);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Table,
};
