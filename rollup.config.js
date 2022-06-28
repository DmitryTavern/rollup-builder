import 'dotenv/config'
import path from 'path'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

const {
	APP_FILENAME,
	APP_SRC_DIRNAME,
	APP_BUILD_DIRNAME,
	APP_BUILD_FILENAME,
	APP_BUILD_UMD_NAME,
} = process.env

const input = path.join(APP_SRC_DIRNAME, `${APP_FILENAME}.ts`)
const output = path.join(APP_BUILD_DIRNAME, `${APP_BUILD_FILENAME}`)

export default [
	{
		input,
		output: [
			{ file: `${output}.js`, format: 'cjs' },
			{ file: `${output}.esm.js`, format: 'esm' },
			{ file: `${output}.umd.js`, format: 'umd', name: APP_BUILD_UMD_NAME },
		],
		plugins: [typescript()],
	},
	{
		input,
		output: {
			file: `${output}.d.ts`,
			format: 'cjs',
		},
		plugins: [dts()],
	},
]
