const dns = require('dns')
// 调用操作系统的函数库查找dns
// dns.loopup
// dns.lookup('baidu.com', (err, address, family) => {
// 	console.log(`lookup method\n address: ${address}, family: ${family}`)
// })

// 直接访问dns服务器
// dns.resolve4
// dns.resolve4('baidu.com', (err, addresses) => {
// 	if (err) throw err

// 	console.log(`resolve4 method\n addresses: ${JSON.stringify(addresses)}`)

// 	addresses.forEach(a => {
// 		dns.reverse(a, (err, hostnames) => {
// 			if (err) throw err
// 			console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`)
// 		})
// 	})
// })

// lookupService
dns.lookupService('127.0.0.1', '8010', (err, hostname, service) => {
	console.log(hostname, service)
})