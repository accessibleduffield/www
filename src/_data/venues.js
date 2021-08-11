require( 'dotenv' ).config();

const sanityClient = require( '@sanity/client' );

const client = sanityClient( {
	projectId: process.env.SANITY_PROJECTID,
	dataset: process.env.SANITY_DATASET,
	token: process.env.SANITY_TOKEN,
	apiVersion: '2021-03-25',
	useCdn: false
} );

module.exports = async function() {
	const query = '*[ _type == "venue" ] | order( venue ) {..., "venueType":venueType->title, "attributes": venueAttributes[] { "title": property->title, yesNo, comment, "order": property->order, "section": property->propertySection->title }, "photos": venuePhotos[] { title, "url": asset->url, comment } }'

	return await client.fetch( query, {} )
		.then( response => {
			return response.map( record => {
				if( record.attributes != undefined ) {
					var attributes = record.attributes.map( attribute => {
						return {
							name: attribute.title
							,available: attribute.yesNo == undefined ? 'Not known' : attribute.yesNo
							,comment: attribute.comment == undefined ? '' : attribute.comment
							,section: attribute.section
							,order: attribute.order
						};
					} ).sort( function( a, b ) {
						return a.order - b.order;
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
					name: record.venue
					,telephone: record.telephone
					,address: record.address
					,postcode: record.postcode
					,website: record.website
					,slug: record.slug.current
					,type: record.venueType
					,attributes: attributes
					,photos: photos
				};
			} );
		} )
		.catch(
			error => console.error( error )
		);
}
