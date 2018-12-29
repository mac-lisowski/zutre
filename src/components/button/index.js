import Button from './button';
import ButtonGroup from './button-group';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Button);
    installPlugin(Vue, ButtonGroup);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Button,
    ButtonGroup,
};
