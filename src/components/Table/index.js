import Table from './Table';
import Thead from './Thead';
import Tbody from './Tbody';
import Th from './Th';
import Tr from './Tr';
import Td from './Td';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Table);
    installPlugin(Vue, Thead);
    installPlugin(Vue, Tbody);
    installPlugin(Vue, Th);
    installPlugin(Vue, Tr);
    installPlugin(Vue, Td);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td,
};
