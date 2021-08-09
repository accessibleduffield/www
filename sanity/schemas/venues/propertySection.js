export default {
	title: 'Venue Property Sections'
	,name: 'venuePropertySection'
	,type: 'object'
	,fields: [
		{
			title: 'Title'
			,name: 'title'
			,type: 'string'
		}
		,{
			title: 'Sort order'
			,name: 'order'
			,type: 'number'
			,hidden: true
		}




		/* ,{
			title: 'Venue Properties',
			name: 'venueProperties',
			type: 'array',
			of: [
			  {
				type: 'reference',
				to: [
				  {type: 'venueProperty'},
				]
			  }
			]
		  } */


	]
	,orderings: [
		{
			title: 'Display order',
			name: 'sortOrder',
			by: [
				{ field: 'order', direction: 'asc' }
			]
		}
	]
}
