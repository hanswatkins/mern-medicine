const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

require('dotenv').config();
const mongoURI = process.env.DATABASE_URL;

app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));
app.use(express.json());

mongoose.connect(mongoURI);

app.listen(4000);
