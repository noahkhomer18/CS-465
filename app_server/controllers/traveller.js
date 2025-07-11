const fs = require('fs');
const path = require('path');

module.exports.travelPage = function(req, res) {
  const dataPath = path.join(__dirname, '..', '..', 'trips.json');
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send("Error loading trips data.");
    }
    const trips = JSON.parse(data);
    res.render('travel', {
      title: 'Travlr Getaways',
      description: 'Check out our awesome trips!',
      trips: trips
    });
  });
};
