export default {
	title: 'Venue Attributes'
	,name: 'venueAttribute'
	,type: 'object'
	,fields: [
		{
			title: 'Property',
			name: 'property',
			type: 'reference',
			to: [ { type: 'venueProperty' } ]
		}
		,{
			title: 'Yes / No'
			,name: 'yesNo'
			,type: 'string'
			,options: {
				list: [
					{ title: 'Yes', value: 'Yes' }
					,{ title: 'No', value: 'No' }
					,{ title: 'Maybe', value: 'Maybe' }
					,{ title: 'N/A', value: 'N/A' }
					,{ title: 'Unknown', value: 'Unknown' }
				]
			}
		}
		,{
			title: 'Comment'
			,name: 'comment'
			,type: 'text'
		}
	]
	,preview: {
		select: {
			title: 'property.title'
			,status: 'yesNo'
		}
		,prepare( selection ) {
			const { title, status } = selection;

			return {
				title: `${ title } (${ status })`
			}
		}
	}
}
