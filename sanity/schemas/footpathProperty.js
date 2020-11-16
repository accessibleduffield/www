export default {
	title: 'Footpath Properties'
	,name: 'footpathProperty'
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
