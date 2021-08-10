export default {
	title: 'Venue Type'
	,name: 'venueType'
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
