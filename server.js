const express = require('express')
const next = require('next')
const env = process.env.NODE_ENV !== 'training'
const app = next({env})
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.get('/post/:slug', (req, res) => {
    return app.render(req, res, '/post', {
      slug: req.params.slug
    })
  })

  server.listen(3000, err => {
    if(err) throw err

    console.log('> Ready on http://localhost:3000');
  })
})
.catch(exception => {
  console.error(exception.stack);
  process.exit(1)
})