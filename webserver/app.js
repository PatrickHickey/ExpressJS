const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set static path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/users', (req, res) => {
  let users = [
    {
      first_name: "John",
      last_name: "Doe",
      age: 34,
      gender: "male"
    },
    {
      first_name: "Jane",
      last_name: "Smith",
      age: 24,
      gender: "female"
    },
    {
      first_name: "Bob",
      last_name: "Johnson",
      age: 44,
      gender: "male"
    },
  ];

  res.json(users);
});

app.get('/download', (req, res) => {
  res.download(path.join(__dirname, '/downloads/pdf.pdf'));
});

app.get('/about', (req, res) => {
  res.redirect('/about.html');
});

app.post('/subscribe', (req, res) => {
  let name = req.body.name;
  let email = req.body.email;

  console.log(name+' has subscribed with '+email);
});

app.listen(3000, () => {
  console.log('Server started on port 3000...');
});
