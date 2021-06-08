const router = require('express').Router()
const apiRoutes = require('./api')
const homeRoutes = require('./homeRoutes')

// api routes
router.use('/api', apiRoutes)

// home routes
router.use('/', homeRoutes)

module.exports = router
