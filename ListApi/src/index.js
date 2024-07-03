const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const itemsRouter = require('./routes/items');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());

app.use('/items', itemsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});