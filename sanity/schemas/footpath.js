export default {
	title: 'Footpaths'
	,name: 'footpath'
	,type: 'document'
	,fields: [
		{
			title: 'Footpath number'
			,name: 'footpathNumber'
			,type: 'string'
		}
		,{
			title: 'Sub-title'
			,name: 'subtitle'
			,type: 'string'
		}
		,{
			title: 'From location'
			,name: 'fromLocation'
			,type: 'string'
		}
		,{
			title: 'To location'
			,name: 'toLocation'
			,type: 'string'
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
			title: 'Footpath attributes'
			,name: 'footpathAttributes'
			,type: 'array'
			,of: [ { type: 'footpathAttribute' } ]
		}
		,{
			title: 'Comments'
			,name: 'comment'
			,type: 'text'
		}
		,{
			title: 'Photos'
			,name: 'footpathPhotos'
			,type: 'array'
			,of: [ { type: 'footpathPhotograph' } ]
		}
	]
	,orderings: [ {
		title: 'Footpath',
		name: 'footpathNumberOrder',
		by: [ {
			field: 'footpathNumber', direction: 'asc'
		} ]
	} ]
	,preview: {
		select: {
			from: 'fromLocation'
			,to: 'toLocation'
			,subtitle: 'footpathNumber'
		}
		,prepare( selection ) {
			const { from, to, subtitle } = selection;

			return {
				title: `${ from } to ${ to }`
				,subtitle: `Footpath: ${ subtitle }`
			}
		}
	}
}
