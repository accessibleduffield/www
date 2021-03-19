require( 'dotenv' ).config();

const sanityClient = require( '@sanity/client' );

const client = sanityClient( {
	projectId: process.env.SANITY_PROJECTID,
	dataset: process.env.SANITY_DATASET,
	token: process.env.SANITY_TOKEN,
	useCdn: false
} );

module.exports = async function() {
	// const query = '*[ _type == "footpath" ]{ ... }'
	// const query = '*[ _type == "footpath" ]{ ..., footpathAttributes-> }'
	// const query = '*[ _type == "footpath" ]'
	// const query = '*[ _type == "footpath" ]{ ..., images[] ->{..., "asset": footpathPhotos.asset->{path,url}}, properties[] }'
	// const query = '*[ _type == "footpath" ]{ ..., "props": *[_type == "footpathProperty" ]{ _id, title } }'
	const query = '*[ _type == "footpath" ] | order(footpathNumber) { _id, footpathNumber, fromLocation, toLocation, auditDate, auditor, comment, "attributes": footpathAttributes[] { "title": property->title, yesNo, comment }, "photos": footpathPhotos[] { title, "url": asset->url, comment } }'

	return await client.fetch( query, {} )
		.then( response => {
			return response.map( record => {
				if( record.attributes != undefined ) {
					var attributes = record.attributes.map( attribute => {
						return {
							name: attribute.title
							,available: attribute.yesNo
							,comment: attribute.comment == undefined ? '' : attribute.comment
						};
					} );
				}

				if( record.photos != undefined ) {
					var photos = record.photos.map( photo => {
						return {
							title: photo.title
							,url: photo.url
							,comment: photo.comment == undefined ? '' : photo.comment
						};
					} );
				}

				return {
					number: record.footpathNumber
					,from: record.fromLocation
					,to: record.toLocation
					,auditor: record.auditor
					,auditDate: record.auditDate
					,attributes: attributes
					,photos: photos
				};
			} );
		} )
		.catch(
			error => console.error( error )
		);
}
