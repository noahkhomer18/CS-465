const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app_server/views'));
app.use(express.static(path.join(__dirname, 'public')));

const travellerRouter = require('./app_server/routes/traveller');
app.use('/traveller', travellerRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);
});
