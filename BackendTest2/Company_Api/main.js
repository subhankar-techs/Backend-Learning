const express = require('express');
const cors = require('cors');
const env = require('dotenv');
env.config();

const PORT = process.env.PORT
const HOST = process.env.HOST

const app = express();

app.use(cors());
app.use(express.json());

const empRoutes = require('./routes/emp.route');
app.use('/api/emp', empRoutes);

app.get('/', (req, res) => {
  res.send('<h1><center>Welcome to the Employee Management API</h1>');
});

app.listen(PORT, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
