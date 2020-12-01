require( 'dotenv' ).config();

const sanityClient = require( '@sanity/client' );

const client = sanityClient( {
	projectId: process.env.SANITY_PROJECTID,
	dataset: process.env.SANITY_DATASET,
	token: process.env.SANITY_TOKEN,
	useCdn: false
} );

module.exports = async function() {
	const query = '*[ _type == "footpath" ]'

	return await client.fetch( query, {} )
		.then( response => {
			return response.map( record => {
				let attributes = record.footpathAttributes.map( attribute => {
					let property = attribute.property;

console.log( { property } );

					return {
						available: attribute.yesNo
						,comment: attribute.comment
					};
				} );

				return {
					number: record.footpathNumber
					,from: record.fromLocation
					,to: record.toLocation
					,attributes: attributes
				};
			} );
		} )
		.catch(
			error => console.error( error )
		);
}
