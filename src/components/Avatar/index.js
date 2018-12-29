import Avatar from './avatar'
import { usePlugin, installPlugin } from '@/utils'

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Avatar);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Avatar,
};
