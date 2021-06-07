const db = require("../../models");

const router = require("express").Router();

// GET -- /api/workouts/
router.get("/", (req, res) => {
  db.Workout.find({})
    .then((dbWorkout) => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// CREATE -- /api/workouts
router.post("/", (req, res) => {
  db.Workout.create(req.body)
    .then((dbWorkout) => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
