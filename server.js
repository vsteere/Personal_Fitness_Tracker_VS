
//requiring in express and mongoose
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//setting up mongoose server
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);
// API routes
app.use(require("./routes/api-routes"));

//HTML routes
app.use(require("./routes/html-routes"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
