const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Namaz');
});

app.get('/card', function (req, res) {
    res.send('Этот роут отвечает за карты!');
  });
app.get('/client', function (req, res) {
    res.send('Этот роут отвечает за клиентов');
  });


const cards = [{
    id: 1,
    number: "1234565999887654"
  },
  {
    id: 2,
    number: "2344565999887654"
  },
  {
    id: 3,
    number: "4564565999887654"
  },
  {
    id: 4,
    number: "5674565999887654"
  },
  {
 id: 5,
    number: "7894565999887654"
  }];
app.get('/card/:id', function (req, res) {
    res.send(JSON.stringify(cards.find((card) => card.id == req.params.id)));
  });



  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });

  app.get("/card/:id", function (req, res) {
    const idOfcard = parseInt(req.params.id);
    const card = cards.find((card) => card.id === idOfcard);
    if (!card) {
      res.status(404).send();
    }
    res.status(200).json(card);
  });