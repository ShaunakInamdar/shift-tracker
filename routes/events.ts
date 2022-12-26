import express, { NextFunction, Request, Response } from 'express';
import { deleteEvent } from '../controllers/deletes';
import { getEventsDate } from '../controllers/getEventsDate';
import { postEvent } from '../controllers/posts';
const router = express.Router();

// create new event
router.get('/new', (req: Request, res: Response) => {
    res.render('newEventForm');
});

// add event to database and redirect to list events of a date once the event is added
router.post('/new', async (req: Request, res: Response) => {
    await postEvent(req, res);
    res.redirect('/events/view?date=' + req.body.date);
});

// list events of a date
router.get('/view', async (req: Request, res: Response) => {
    const date = new Date(req.query.date as string).toDateString();
    const dayEvents = await getEventsDate(req, res);
    res.render('eventsByDate', { date: date, events: dayEvents });
});

// delete event from database
router.get('/delete/', async (req: Request, res: Response, next: NextFunction) => {
    await deleteEvent(req, res);
    res.redirect('/events/view?date=' + req.query.date);
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