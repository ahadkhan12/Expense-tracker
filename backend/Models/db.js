const mongoose = require('mongoose');

const mongo_url = process.env.MONGO_CONN;

mongoose.connect("mongodb+srv://admin:admin@cluster0.ioo6grk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log('MongoDB Connected...');
    }).catch((err) => {
        console.log('MongoDB Connection Error: ', err);
    })