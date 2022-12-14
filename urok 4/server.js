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


//   const fs = require('fs');
//   app.get('/', function (req, res) {
//     fs.readFile('./clients.json', 'utf8', (err, data) => {
//         if (err) {
//             console.log(err);
//         }
//         res.send(data);
//     });
// });


  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });

//   app.get("/card/:id", function (req, res) {
//     const idOfcard = parseInt(req.params.id);
//     const card = cards.find((card) => card.id === idOfcard);
//     if (!card) {
//       res.status(404).send();
//     }
//     res.status(200).json(card);
//   });