import Table from './table';
import Thead from './thead';
import Tfoot from './tfoot';
import Tbody from './tbody';
import Th from './th';
import Tr from './tr';
import Td from './td';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Table);
    installPlugin(Vue, Thead);
    installPlugin(Vue, Tfoot);
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
  Tfoot,
  Tbody,
  Th,
  Tr,
  Td,
};
