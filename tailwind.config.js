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
			,gray: colors.trueGray
			,white: colors.white
			,lime: colors.lime
		}
	}
	,variants: {}
	,plugins: []
}
