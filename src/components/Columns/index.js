import Columns from './Columns';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Columns);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Columns,
};
