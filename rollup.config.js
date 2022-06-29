import 'dotenv/config'
import path from 'path'
import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'
import dts from 'rollup-plugin-dts'

const {
	NODE_ENV,
	APP_FILENAME,
	APP_SRC_DIRNAME,
	APP_BUILD_DIRNAME,
	APP_BUILD_FILENAME,
	APP_BUILD_UMD_NAME,
} = process.env

const input = path.join(APP_SRC_DIRNAME, `${APP_FILENAME}.ts`)
const output = path.join(APP_BUILD_DIRNAME, `${APP_BUILD_FILENAME}`)

const rollupConfig = [
	{
		input,
		output: [{ file: `${output}.js`, format: 'cjs' }],
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

if (NODE_ENV === 'production') {
	rollupConfig[0].output.push(
		...[
			{ file: `${output}.esm.js`, format: 'esm' },
			{ file: `${output}.umd.js`, format: 'umd', name: APP_BUILD_UMD_NAME },
		]
	)

	rollupConfig[0].plugins.push(
		babel({
			babelHelpers: 'bundled',
			exclude: 'node_modules/**',
		})
	)
}

export default rollupConfig
