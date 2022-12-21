import express, { Request, Response } from 'express';
import { deleteEvent } from '../controllers/deletes';
import { getEventsDate } from '../controllers/getEventsDate';
import { postEvent } from '../controllers/posts';
const router = express.Router();

// create new event
router.get('/new', (req: Request, res: Response) => {
    // res.send("New event form for given date")
    res.render('newEventForm');
    // call post request to add event to database
});

// add event to database
router.post('/new', (req: Request, res: Response) => {
    postEvent(req, res);
});

// list events of a date
router.get('/view', async (req: Request, res: Response) => {
    // res.send("List events for given date")
    const dayEvents = await getEventsDate(req, res);
    const date = new Date(req.query.date as string).toDateString();
    res.render('eventsByDate', { date: date, events: dayEvents });
});

// delete event from database
router.get('/delete/', (req: Request, res: Response) => {
    // res.send("Delete event with given id")
    deleteEvent(req, res);
});

router.param('id', (req: Request, res: Response, next: any, id: string) => {
    // validate id
    next();
});

router.param('date', (req: Request, res: Response, next: any, date: string) => {
    // validate date
    next();
});


module.exports = router;