import e, { Request, Response } from 'express';
import { Event } from './fetchEvents';
import { writeEvents } from './posts';

const fs = require('fs');
const events = require('../src/events.json');

export const deleteEvent = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    
    const index = events.findIndex((event: Event) => event.id === id);
    console.log(index);
    
    if (index !== -1) {
        events.splice(index, 1);
    }
    else {
        throw new Error('Event not found');
    }
    writeEvents(events)
    res.send('Event deleted from database');
};
