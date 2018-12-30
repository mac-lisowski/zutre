import Input from './input';
import Select from './select';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Input);
    installPlugin(Vue, Select);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Input,
    Select,
};
