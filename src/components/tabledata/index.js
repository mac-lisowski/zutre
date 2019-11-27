import Datatable from "./datatable"

import { usePlugin, installPlugin } from '@/utils';


const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Datatable);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
  Datatable,
};
