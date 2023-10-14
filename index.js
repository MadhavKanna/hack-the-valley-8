const express = require('express');
const app = express();
const port = 3000;
const { apiRouter } = require('./routes/api');

const mongoose = require('mongoose');
const { json } = require('body-parser');

app.use(json());
app.use(apiRouter);

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