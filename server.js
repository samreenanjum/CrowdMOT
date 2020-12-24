const https = require('https')
const { parse } = require('url')
const next = require('next')
const fs = require('fs')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const options = {
    key: fs.readFileSync(''), // TODO: Insert path to the .key file
    cert: fs.readFileSync('') // TODO: Insert path to tthe .crt file
}

app.prepare().then(() => {
    https
	.createServer(options, (req, res) => {

	    const parsedUrl = parse(req.url, true)

	    handle(req, res, parsedUrl)
	})
	.listen(8080, err => { //TODO: Modify the port
	    if (err) throw err
	
	    console.log('> Ready on port:8080')
	})
})
