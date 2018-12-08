import component from './Th.vue';
import { registerPlugin, installPlugin } from '@/utils';

export let install = installPlugin;
registerPlugin({ install });

export default component;
