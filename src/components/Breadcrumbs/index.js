import Breadcrumbs from './Breadcrumbs';
import BreadcrumbsItem from './BreadcrumbsItem';
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
