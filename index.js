const pino = require('pino')()

pino.info('hello pino')
pino.info('the answer is %d', 42)
pino.error(new Error('an error'))
