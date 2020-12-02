export default {
	widgets: [
		{
			name: 'netlify'
			,options: {
				title: 'Deploy Content Changes to Web Site'
				,sites: [
					{
						title: 'Accessible Duffield'
						,name: 'accessibleduffield'
						,apiId: process.env.SANITY_TOKEN
						,buildHookId: process.env.NETLIFY_BUILD_HOOK
					},
				]
			}
		}
	]
}
