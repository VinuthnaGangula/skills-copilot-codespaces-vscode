// Create web server.
// Create a new web server using the express module.
const express = require('express');
const app = express();

// Create a new web server using the express module.
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Create a new web server using the express module.
const comments = require('./comments');

// Create a new web server using the express module.
app.get('/comments', (req, res) => {
  res.json(comments.getComments());
});

// Create a new web server using the express module.
app.post('/comments', (req, res) => {
  const { comment } = req.body;
  comments.addComment(comment);
  res.json(comments.getComments());
});

// Create a new web server using the express module.
app.listen(3001, () => {
  console.log('Server listening on http://localhost:3001/');
});