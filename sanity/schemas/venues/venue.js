export default {
	title: 'Venues'
	,name: 'venue'
	,type: 'document'
	,fields: [
		{
			title: 'Venue'
			,name: 'venue'
			,type: 'string'
		}
		,{
			title: 'Unique reference'
			,name: 'slug'
			,type: 'slug'
			,description: 'This will be used to generate the URL for the venue page'
			,options: {
				source: 'venue'
				,slugify: input => input
					.toLowerCase()
					.replace(/\s+/g, '-')
					.slice(0, 200)
			}
		}
		,{
			title: 'Address'
			,name: 'address'
			,type: 'text'
		}
		,{
			title: 'Postcode'
			,name: 'postcode'
			,type: 'string'
		}
		,{
			title: 'Telephone'
			,name: 'telephone'
			,type: 'string'
		}
		,{
			title: 'Website'
			,name: 'website'
			,type: 'string'
			,description: 'https://www.example.com/'
		}
		,{
			title: 'Date audited'
			,name: 'auditDate'
			,type: 'date'
		}
		,{
			title: 'Auditor'
			,name: 'auditor'
			,type: 'string'
		}
		,{
			title: 'Venue attributes'
			,name: 'venueAttributes'
			,type: 'array'
			,of: [ { type: 'venueAttribute' } ]
		}
		,{
			title: 'Comments'
			,name: 'comment'
			,type: 'text'
		}
		,{
			title: 'Photos'
			,name: 'venuePhotos'
			,type: 'array'
			,of: [ { type: 'venuePhotograph' } ]
		}

	]
}