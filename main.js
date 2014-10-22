var Metalsmith = require('metalsmith');

var metal = Metalsmith(__dirname)
    .source('./src')
    .destination('./build')
    .build(function(err) {
        if (err) throw err;
    });
