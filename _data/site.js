require( 'dotenv' ).config();

let baseURL = 'https://www.accessibleduffield.org.uk';

switch ( process.env.ELEVENTY_ENV ) {
	case 'development':
		baseURL = 'http://localhost:8080';
	break;

	default:
		baseURL = '/';
}

module.exports = {
	baseURL: baseURL
	,title: 'Accessible Duffield'
	,environment: process.env.ELEVENTY_ENV
};
