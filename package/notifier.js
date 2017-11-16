const notifier = require('node-notifier')

notifier.notify('Message')

notifier.notify({
	'title': 'My Notifition',
	'message': 'Hello, My friend'
})