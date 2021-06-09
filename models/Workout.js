const mongoose = require('mongoose')

const Schema = mongoose.Schema

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now()
  },
  exercises: [
    {
      type: { // needs to be specified type string or mongoose thinks the entire object is a string
        type: String
      },
      name: String,
      duration: Number,
      distance: Number,
      weight: Number,
      reps: Number,
      sets: Number
    }
  ]
})
const Workout = mongoose.model('Workout', WorkoutSchema)

module.exports = Workout
