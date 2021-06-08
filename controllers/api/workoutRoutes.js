const db = require('../../models')

const router = require('express').Router()

// GET -- /api/workouts/
router.get('/', (req, res) => {
  db.Workout.aggregate([
    { // aggregates the exercise durations
      $set: {
        totalDuration: {
          $sum: '$exercises.duration'
        }
      }
    }
  ])
    .then((dbWorkout) => {
      res.json(dbWorkout)
    })
    .catch((err) => {
      res.json(err)
    })
})

// GET workouts in range - /api/workouts/range
router.get('/range', (req, res) => {
  db.Workout.aggregate([
    {
      $set: {
        totalDuration: {
          $sum: '$exercises.duration'
        }
      }
    },
    { // sorts the array by date in descending order
      $sort: { day: -1 }
    },
    { $limit: 7 } // returns the last 7 workout documents
  ])
    .then((dbWorkout) => {
      // reverses the list so the list returns to ascending order
      // so the line graph displays properly
      res.json(dbWorkout.reverse())
    })
    .catch((err) => {
      res.json(err)
    })
})

// CREATE -- /api/workouts
router.post('/', (req, res) => {
  db.Workout.create({ day: Date.now() }) // creates a workout using the current date
    .then((dbWorkout) => {
      console.log(dbWorkout)
      res.json(dbWorkout)
    })
    .catch((err) => res.json(err))
})

// UPDATE -- /api/workouts/:id
router.put('/:id', (req, res) => {
  db.Workout.updateOne( // adds exercises to the workout
    { _id: req.params.id },
    { $push: { exercises: req.body } }
  )
    .then((dbWorkout) => {
      console.log(dbWorkout)
      res.json(dbWorkout)
    })
    .catch((err) => res.json(err))
})

module.exports = router
