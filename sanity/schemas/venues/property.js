export default {
	title: 'Venue Properties'
	,name: 'venueProperty'
	,type: 'object'
	,fields: [

		{
			title: 'Property Section',
			name: 'propertySection',
			type: 'reference',
			to: [ { type: 'venuePropertySection'} ]
		}

		,{
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
