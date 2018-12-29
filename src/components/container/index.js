import Container from './container';
import Columns from './columns';
import Column from './column';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Container);
    installPlugin(Vue, Columns);
    installPlugin(Vue, Column);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Container,
    Columns,
    Column,
};
