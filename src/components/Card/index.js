import component from './Card'
import { registerPlugin } from './../../utils'

// Declare install function executed by Vue.use()
export function install(Vue) {
	if (install.installed) return;
	install.installed = true;
	Vue.component(component.name, component);
}

registerPlugin({ install })

// To allow use as module (npm/webpack/etc.) export component
export default component;