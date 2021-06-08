const db = require('../../models')

const router = require('express').Router()

// GET -- /api/workouts/
router.get('/', (req, res) => {
  db.Workout.aggregate([
    {
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
    {
      $sort: { day: -1 }
    },
    { $limit: 7 },
    {
      $sort: { day: 1 }
    }
  ])
    .then((dbWorkout) => {
      console.log(dbWorkout)
      res.json(dbWorkout)
    })
    .catch((err) => {
      res.json(err)
    })
})

// CREATE -- /api/workouts
router.post('/', (req, res) => {
  db.Workout.create({ day: Date.now() })
    .then((dbWorkout) => {
      console.log(dbWorkout)
      res.json(dbWorkout)
    })
    .catch((err) => res.json(err))
})

// UPDATE -- /api/workouts/:id
router.put('/:id', (req, res) => {
  db.Workout.updateOne(
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
