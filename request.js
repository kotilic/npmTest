const request = require('request')

console.log('request begin')
request('http://www.baidu.com', (err, response, body) => {
	console.log('error: ', err)
	console.log('statusCode: ', response && response.statusCode)
	console.log('body: ', body)
})