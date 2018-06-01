const express = require('express');
const router = express.Router();

const Theme = appRequire('models/knowledge/Theme');

router.get('/:id?', function(req, res) {
  console.log(req.query);

  var objectId = req.params.id;

  if (objectId) {
    Theme.findById(objectId, function(err, task) {
      if (err)
        res.status(404).send(err);

      res.json(task);
    })
  } else {
    Theme.find(req.query, function (err, task) {
      if (err)
        res.send(err);
      res.json(task);
    })
  }
});

router.post('/', function(req, res) {
  console.log(req.body);

  var theme = new Theme(req.body);
  theme.save(function(err, task) {

    if (err)
      res.status(400).send(err);

    res.json(task);
  });
});

router.put('/:id', function(req, res) {
  res.json({
    test: 'put'
  });
});

router.delete('/:id', function(req, res) {
  res.json({
    test: 'delete'
  });
});

module.exports = router;
