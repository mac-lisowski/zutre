import Breadcrumbs from './breadcrumbs';
import BreadcrumbsItem from './breadcrumbs-item';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Breadcrumbs);
    installPlugin(Vue, BreadcrumbsItem);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Breadcrumbs,
    BreadcrumbsItem,
};
