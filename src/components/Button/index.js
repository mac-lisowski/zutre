import Button from './Button';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Button);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Button,
};
