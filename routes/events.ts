import express, { Request, Response } from 'express';
import { postEvent } from '../controllers/posts';
const router = express.Router();

// create new event
router.get('/new', (req: Request, res: Response) => {
    res.send("New event form for given date")
    // res.render('newEventForm');
    // call post request to add event to database
});

// add event to database
router.post('/new', (req: Request, res: Response) => {
    postEvent(req, res);
});

// list events of a date
router.get('/view/:date', (req: Request, res: Response) => {
    const date = req.params.date;
    res.send(`List events for date ${date}`)
});

router
    .route("/:id")
    // get event with id
    .get((req: Request, res: Response) => {
        const id = req.params.id;
        res.send(`Get event with id ${id}`)
    })
    // delete event with id
    .delete((req: Request, res: Response) => {
        const id = req.params.id;
        res.send(`Delete event with id ${id}`)
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