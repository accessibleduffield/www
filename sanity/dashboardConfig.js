export default {
	widgets: [
		{
			name: 'netlify'
			,options: {
				title: 'Deploy Content Changes to the Preview Site'
				,sites: [
					{
						title: 'Accessible Duffield'
						,name: 'accessibleduffield'
						,apiId: process.env.SANITY_STUDIO_NETLIFY_API_ID
						,buildHookId: process.env.SANITY_STUDIO_NETLIFY_BUILD_HOOK_PREVIEW
					},
				]
			}
		}
	]
}
