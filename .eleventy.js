module.exports = function( eleventyConfig ) {
	eleventyConfig.setQuietMode( true );
	eleventyConfig.setTemplateFormats( 'html,md,liquid' );

	eleventyConfig.addPassthroughCopy( './src/assets/' );
	eleventyConfig.addPassthroughCopy( './src/robots.txt' );

	eleventyConfig.addFilter( 'dump', function( anything ) {
		console.log( 'dump:', anything );
	} );

	eleventyConfig.setBrowserSyncConfig( {
		ui: false
		,ghostMode: false
		,logLevel: 'silent'
	} );
};
