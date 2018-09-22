const express = require('express');
const exphbs  = require('express-handlebars');
const mongoose = require('mongoose');

const app = express();

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;
// Connect to mongoose
mongoose.connect('mongodb://vidjot:vidjot1@ds111963.mlab.com:11963/vidjot', {
  useMongoClient: true
})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log('Err', err));


// Load Idea Model
require('./models/Idea');
const Idea = mongoose.model('ideas');


// Handlebars Middleware
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');



// Index Route
app.get('/', (req, res) => {
  const title = 'Welcome1';
  res.render('index', {
    title: title
  });
});

// About Route
app.get('/about', (req, res) => {
  res.render('about');
})

// Add Idea Form
app.get('/ideas/add', (req, res) => {
  res.render('ideas/add');
});


const port = process.env.PORT || 5000;

app.listen(port, () =>{
  console.log(`Server started on port ${port}`);
});