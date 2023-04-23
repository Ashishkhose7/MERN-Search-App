let express = require('express');
let app = express();
let dotenv = require('dotenv');
dotenv.config();
let port = process.env.PORT || 7500;
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let mongoUrl = process.env.MONGOURL;

let cors = require('cors');
let bodyParser = require('body-parser');
let db = {};

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Default route
app.get('/', (req, res) => {
    db.collection('ads').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

// Keyword search using text and search query
app.get('/ads/:keyword', (req, res) => {
    const keyword = (req.params.keyword)
    db.collection('ads').find({$text: {$search: keyword}}).toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

// connect with mongodb atlas
MongoClient.connect(mongoUrl, { useNewUrlParser: true }, (err, dc) => {
    if (err) console.log('Error while connecting');
    db = dc.db('talkvaley'); //my database name 
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
})
