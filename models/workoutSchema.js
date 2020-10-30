const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutschema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  exercises:[{type: String, name: String, duration: Number, weight: Number, reps: Number, set: Number}
  ]
  
});

const Workout = mongoose.model("workout", workoutschema);

module.exports = Workout;
