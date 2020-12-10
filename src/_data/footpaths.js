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


// console.log({response});

			return response.map( record => {
				// console.log( { record } );
				// console.log( record.footpathAttributes );
				// console.log( record.footpathAttributes == undefined );

				if( record.footpathAttributes == undefined ) {
					var attributes = [ {} ];
					// console.log({attributes})
				} else {
					var attributes = record.footpathAttributes.map( attribute => {
						let property = attribute.property;

	// console.log( { property } );

						return {
							available: attribute.yesNo
							,comment: attribute.comment
						};
					} );
					// console.log({attributes})
				}

				// console.log({attributes})

				return {
					number: record.footpathNumber
					,from: record.fromLocation
					,to: record.toLocation
					,auditor: record.auditor
					,auditDate: record.auditDate
					,attributes: attributes
				};
			} );
		} )
		.catch(
			error => console.error( error )
		);
}
