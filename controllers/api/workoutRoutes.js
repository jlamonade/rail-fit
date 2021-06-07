const db = require('../../models')

const router = require('express').Router()

// /api/workouts/
router.get('/', (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      console.log(dbWorkout)
      res.json(dbWorkout)
    })
    .catch(
      err => {
        res.json(err)
      }
    )
})

module.exports = router
