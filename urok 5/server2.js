const express = require('express');
const app = express();
const cards = [
    {id : 1, num : 1234567890123456},
    {id : 2, num : 4520020123456121},
    {id : 3, num : 1199325678923555},
    {id : 4, num : 1234567895631216},
    {id : 5, num : 1234156789054256},
];
app.get('/', function (req, res) {
    res.send('Add /card/:id to get card number');
});
app.get("/card/:id", function (req, res) {
    const idOfcard = parseInt(req.params.id);
    const card = cards.find((card) => card.id === idOfcard);
    if (!card) {
      res.status(404).send();
    }
    res.status(200).json(card);
  });
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});