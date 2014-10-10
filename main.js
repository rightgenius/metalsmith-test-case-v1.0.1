var Metalsmith = require('metalsmith');

var metal = Metalsmith(__dirname)
    .source('./src')
    .destination('./build')
    .build();
