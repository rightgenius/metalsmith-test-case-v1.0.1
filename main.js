var Metalsmith = require('metalsmith'),
	markdown = require('metalsmith-markdown'),
	permalinks = require('metalsmith-permalinks'),
	templates  = require('metalsmith-templates'),
	watch = require('metalsmith-watch');

var metal = Metalsmith(__dirname)
    .use(markdown())
    .use(templates({
    	'engine':'swig',
    	'directory':'templates'
    }))
    .use(permalinks({
    	'pattern': ':template/:type'
    }))
    .source('./src')
    .destination('./build')
    .use(watch())
    .build();
