import Card from './Card';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
import CardImage from './CardImage';
import CardSubtitle from './CardSubtitle';
import CardTitle from './CardTitle';

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
