const colors = require( 'tailwindcss/colors' );

module.exports = {
	purge: [
		'./**/*.html'
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
