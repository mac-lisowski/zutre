import Step from './step';
import StepItem from './step-item';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Step);
    installPlugin(Vue, StepItem);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Step,
    StepItem,
};
