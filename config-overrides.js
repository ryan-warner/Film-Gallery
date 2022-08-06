const webpack = require('webpack'); 
module.exports = function override(config) { 
	const fallback = config.resolve.fallback || {}; 
	Object.assign(fallback, { 
        //"process": require.resolve("process/browser"),
        "crypto": false, 
        "stream": require.resolve("stream-browserify"), 
        "os": require.resolve("os-browserify"),
        "assert": require.resolve("assert/"), 
        "http": require.resolve("stream-http"), 
        "https": require.resolve("https-browserify"), 
        "url": false,
        "path": false,
        "util": false,
        "buffer": false,
        "zlib": false,
        "querystring": false
    }) 
    config.resolve.fallback = fallback; 
    config.plugins = (config.plugins || []).concat([ 
    new webpack.ProvidePlugin({ 
    	process: 'process/browser', 
        Buffer: ['buffer', 'Buffer'] 
    }) 
   ]) 
   return config; 
}