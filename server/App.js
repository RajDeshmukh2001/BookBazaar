const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/book-routes');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use('/books', router);

mongoose.connect(
    'mongodb+srv://rajdd201:lMkrL8Cx1TwNVkIq@cluster0.8f8l1ue.mongodb.net/Book-Store?retryWrites=true&w=majority'
).then(() => console.log('Connected')
).then(() => {
    app.listen(5000);
}).catch((err) => console.log(err));