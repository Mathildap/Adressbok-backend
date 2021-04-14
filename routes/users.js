var express = require('express');
var router = express.Router();
const fs = require('fs');
const cors = require('cors');
router.use(cors());


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', (req, res, next) => {
  fs.readFile('users.json', (err, data) => {
    if (err) {
      console.log(err);
    };

    let users = JSON.parse(data);
    res.send(users);

    let newUser = req.body;
    console.log(newUser);

    users.push(newUser);

    fs.writeFile('users.json', JSON.stringify(users, null, 2), (err) => {
      if (err) {
        console.log(err);
      };
    });
  });
});

router.get('/allUsers', (req, res) => {
  fs.readFile('users.json', (err, data) => {

    let users = JSON.parse(data);
    res.send(users);
  });
});

module.exports = router;
