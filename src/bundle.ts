import { Options } from '../types/index'

export function initPlugin(opt: Options) {
	if (!opt) throw new Error('Opt is not defined')
	console.log('init plugin')
}
