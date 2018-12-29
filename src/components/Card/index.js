import Card from './card';
import CardBody from './card-body';
import CardFooter from './card-footer';
import CardHeader from './card-header';
import CardImage from './card-image';
import CardSubtitle from './card-subtitle';
import CardTitle from './card-title';

import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Card);
    installPlugin(Vue, CardBody);
    installPlugin(Vue, CardFooter);
    installPlugin(Vue, CardHeader);
    installPlugin(Vue, CardImage);
    installPlugin(Vue, CardSubtitle);
    installPlugin(Vue, CardTitle);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardImage,
    CardSubtitle,
    CardTitle,
};
