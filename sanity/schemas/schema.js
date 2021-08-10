// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import footpath from './footpath'
import footpathAttribute from './footpathAttribute'
import footpathProperty from './footpathProperty'
import footpathPhotograph from './footpathPhotograph'

import venue from './venues/venue'
import venueAttribute from './venues/attribute'
import venueProperty from './venues/property'
import venuePropertySection from './venues/propertySection'
import venuePhotograph from './venues/photograph'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema( {
	// We name our schema
	name: 'default',
	// Then proceed to concatenate our document type
	// to the ones provided by any plugins that are installed
	types: schemaTypes.concat( [
		footpath
		,footpathAttribute
		,footpathProperty
		,footpathPhotograph

		,venue
		,venueAttribute
		,venuePropertySection
		,venueProperty
		,venuePhotograph
	] )
} )
