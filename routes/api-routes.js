//settin up variables
const router = require("express").Router();
const Workout = require("../models/workout.js");

// API routes based on requirements in api.js
router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts/bulk", ({ body }, res) => {
  Workout.insertMany(body)
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//based on requirements in stats.js
router.get("/api/workouts/range", ({ body }, res) => {
  Workout.find({})
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } }, { new: true, runValidators: true })
      .then(workout => {
        res.json(workout);
      }).catch(err => {
        res.status(400).json(err);
      });
  });
module.exports = router;
