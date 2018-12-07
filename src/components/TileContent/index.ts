import component from './TileContent.vue'
import { registerPlugin, installPlugin } from './../../utils'

export let install = installPlugin
registerPlugin({ install })

export default component;