const fs = require( 'fs' );

module.exports = function( eleventyConfig ) {
	eleventyConfig.setQuietMode( true );
	eleventyConfig.setTemplateFormats( 'html,md,liquid' );

	eleventyConfig.addPassthroughCopy( './src/assets/' );
	eleventyConfig.addPassthroughCopy( './src/robots.txt' );

	eleventyConfig.addWatchTarget( './tailwind.css' );
	eleventyConfig.addWatchTarget( './tailwind.config.js' );
	eleventyConfig.addWatchTarget( './postcss.config.js' );

	eleventyConfig.setWatchThrottleWaitTime( 100 );

	eleventyConfig.addFilter( 'dump', function( anything ) {
		console.log( 'dump:', anything );
	} );

	eleventyConfig.setBrowserSyncConfig( {
		ui: false
		,ghostMode: false
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
