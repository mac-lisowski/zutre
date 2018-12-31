import Input from './input';
import Select from './select';
import Radio from './radio';
import Switch from './switch';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Input);
    installPlugin(Vue, Select);
    installPlugin(Vue, Radio);
    installPlugin(Vue, Switch);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Input,
    Select,
    Radio,
    Switch,
};
