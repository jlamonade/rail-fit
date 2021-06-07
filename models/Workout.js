const mongoose = require('mongoose')

const Schema = mongoose.Schema

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now()
  },
  exercises: [
    {
      type: {
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
}/* , {
  toObject: {
    virtuals: true
  },
  toJSON: {
    virtuals: true
  }
})

WorkoutSchema.virtual('totalDuration').get(function () {
  return this.exercises.reduce((acc, curr) => {
    return curr.duration + acc
  }, 0)
} */)
const Workout = mongoose.model('Workout', WorkoutSchema)

module.exports = Workout
