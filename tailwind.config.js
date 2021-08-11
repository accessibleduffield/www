const colors = require( 'tailwindcss/colors' );

module.exports = {
	mode: 'jit',
	purge: [
		'./src/**/*.html'
		,'./src/**/*.liquid'
		,'./src/_includes/**/*.html'
	]
	,theme: {
		extend: {}
		,colors: {
			transparent: 'transparent'
			,current: 'currentColor'
			,black: colors.black
			,gray: colors.trueGray
			,white: colors.white
			,lime: colors.lime
		}
	}
	,variants: {}
	,plugins: [
		require('@tailwindcss/aspect-ratio')
	]
}
