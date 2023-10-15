const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { dataApiRouter } = require('./routes/data-api');
const { classifyApiRouter } = require('./routes/classify-api');
const BSON = require('bson');

const mongoose = require('mongoose');
const { json } = require('body-parser');

app.use(json());
app.use(dataApiRouter);
app.use(classifyApiRouter);

const dotenv = require('dotenv');
dotenv.config();


mongoose.connect('mongodb+srv://' + process.env.userNameMongo + ':' + process.env.mongodbPass + '@clusterhtv8.ss6gzh9.mongodb.net/?retryWrites=true&w=majority',
).then(
    () => {
        console.log('Connected to database!');
    },
    err => {
        console.log('Connection failed!' + err);
    }
);


app.listen(port, () => console.log(`Server started on port ${port}`));