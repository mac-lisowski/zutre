import component from './CardTitle'
import { registerPlugin, installPlugin } from './../../utils'

export var install = installPlugin
registerPlugin({ install })

export default component;