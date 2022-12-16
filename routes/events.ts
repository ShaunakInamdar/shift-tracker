import express from 'express';
import { Request, Response } from 'express';
const router = express.Router();

// create new event
router.post('/new', (req: Request, res: Response) => {
    const date = req.params.date;
    res.send("New event form for given date")
});

// list events of a date
router.get('/:date', (req: Request, res: Response) => {
    const date = req.params.date;
    res.send(`List events for date ${date}`)
});

router
    .route("/:id")
    // get event with id
    .get((req: Request, res: Response) => {
        const id = req.params.id;
        res.send("Get event with id")
    })
    // delete event with id
    .delete((req: Request, res: Response) => {
        const id = req.params.id;
        res.send("Delete event with id")
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