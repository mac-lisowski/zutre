import Tab from './Tab';
import TabController from './TabController';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Tab);
    installPlugin(Vue, TabController);

    // const ZToast = Toast;
    
    // Vue.mixin(ZToast);

    Vue.prototype.$zutre.newTabController = function(parent) {

      let newInstance = new Vue({
        ...TabController,
        parent: parent,
        propsData: {
          items: parent.items,
          active: parent.activeTab,
          height: parent.height,
        },
      });

      return newInstance;
    };

  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
  Tab,
  TabController,
};
