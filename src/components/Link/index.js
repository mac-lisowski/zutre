import Link from './link';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Link);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Link,
};
