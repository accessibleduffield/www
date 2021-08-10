export default {
	widgets: [
		{
			name: 'netlify'
			,options: {
				title: 'Deploy Content Changes to the LIVE or PREVIEW Site'
				,sites: [
					{
						title: 'Accessible Duffield LIVE'
						,name: 'accessibleduffield'
						,apiId: process.env.SANITY_STUDIO_NETLIFY_API_ID
						,buildHookId: process.env.SANITY_STUDIO_NETLIFY_BUILD_HOOK
					},
					{
						title: 'Accessible Duffield PREVIEW'
						,name: 'accessibleduffield'
						,apiId: process.env.SANITY_STUDIO_NETLIFY_API_ID
						,buildHookId: process.env.SANITY_STUDIO_NETLIFY_BUILD_HOOK_PREVIEW
					},
				]
			}
		}
	]
}
