import Toast from './Toast';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Toast);

    Vue.$zutre.toast = (options) => {
      console.log(options);
    };
    console.log(Vue.$zutre);
      // toast(options) {
      //   console.log(options);
      // },
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Toast,
};
