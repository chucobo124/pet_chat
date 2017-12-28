var elasticsearch = require('elasticsearch')
module.exports.client = (config) => {
  console.log("*****Check Elasticsearch connection:")
  client = new elasticsearch.Client({
    host: config.elasticsearch,
    log: 'trace'
  })
  client.ping({
    // ping usually has a 3000ms timeout
    requestTimeout: 1000
  }, function (error) {
    if (error) {
      console.trace('elasticsearch cluster is down!')
    } else {
      console.log('All is well')
    }
    console.log("*****End Check Elasticsearch connection")
  })
}