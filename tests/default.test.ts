import { initPlugin } from '../dist/bundle'

it('Default test', () => {
	// @ts-ignore
	expect(() => initPlugin()).toThrow()
})
