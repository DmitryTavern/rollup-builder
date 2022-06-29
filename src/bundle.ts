import { Options } from '@types'
import { number } from '@utilities'

export function initPlugin(opt: Options) {
	if (!opt) throw new Error('Opt is not defined')
	console.log('init plugin', number)
}
