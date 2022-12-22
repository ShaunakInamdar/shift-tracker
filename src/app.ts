import bodyParser from 'body-parser';
import express, { Application, Request, Response, NextFunction } from 'express'
import { validateEvents } from '../controllers/fetchEvents';
export const app: Application = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
app.get('/', async (req: Request, res: Response) => {
    // const events = await validateEvents();
    // console.log(events);
    // res.render('home', { greet: 'World', events: events });
    // render a calendar view with events
    res.render('calendar');
});

const eventsRouter = require('../routes/events');
app.use('/events', eventsRouter);

app.listen(3000, () => console.log("Server Running on port: 3000"));
