const fs = require( 'fs' );
const pluginTailwind = require( '@jamshop/eleventy-plugin-tailwind' );

module.exports = function( eleventyConfig ) {
	eleventyConfig.setQuietMode( true );
	eleventyConfig.setTemplateFormats( 'html,md,liquid' );

	eleventyConfig.addPassthroughCopy( './src/assets/' );
	eleventyConfig.addPassthroughCopy( './src/robots.txt' );

	eleventyConfig.addFilter( 'dump', function( anything ) {
		console.log( 'dump:', anything );
	} );

	eleventyConfig.addPlugin( pluginTailwind, {
		entry: 'src/css/tailwind.css',
		output: '_site/assets/css/tailwind.css',
		inputDir: 'site'
	} );

	eleventyConfig.setBrowserSyncConfig( {
		ui: false
		,ghostMode: false
		,logLevel: 'silent'
		,callbacks: {
			ready: function ( err, bs ) {
				bs.addMiddleware( "*", ( req, res ) => {
					const content_404 = fs.readFileSync( '_site/404.html' );
					// Provides the 404 content without redirect.
					res.write( content_404 );
					// Add 404 http status code in request header.
					// res.writeHead(404, { "Content-Type": "text/html" });
					res.writeHead( 404 );
					res.end();
				} );
			}
		}
	} );
};
