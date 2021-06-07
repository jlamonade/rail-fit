const router = require('express').Router()
const workoutRoutes = require('./workoutRoutes')

// workout routes
router.use('/workouts', workoutRoutes)

module.exports = router
