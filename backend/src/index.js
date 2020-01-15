const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')

const app = express();

// mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-3xvyp.mongodb.net/week10?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// mongoose.connect('mongodb://omnistack:omnistack@cluster0-shard-00-00-3xvyp.mongodb.net:27017,cluster0-shard-00-01-3xvyp.mongodb.net:27017,cluster0-shard-00-02-3xvyp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

app.use(express.json());
app.use(routes);

app.listen(3333);