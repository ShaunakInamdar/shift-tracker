import bodyParser from 'body-parser';
import express, { Application, Request, Response, NextFunction } from 'express'
import { MongoClient } from 'mongodb';
const app: Application = express();
const dotenv = require('dotenv');
dotenv.config();

const user = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const url = "mongodb+srv://" + user + ":" + password + "@cluster0.00houac.mongodb.net/?retryWrites=true&w=majority"
const mongoClient = require ('mongodb').MongoClient;

// connecting to database using a try catch block 
try {
    mongoClient.connect(url, { useUnifiedTopology: true }, (err: any, client: any) => {
        if (err) return console.error(err);
        console.log('Connected to Database');
        const db = client.db('calendar');
        const eventsCollection = db.collection('events');
        (global as any).eventsCollection = eventsCollection; // this can be used in other files
    });
} catch (error) {
    console.log(error);
};


app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
app.get('/', async (req: Request, res: Response) => {
    res.render('calendar');
});

const eventsRouter = require('../routes/events');
app.use('/events', eventsRouter);

app.listen(3000, () => console.log("Server Running on port: 3000"));
