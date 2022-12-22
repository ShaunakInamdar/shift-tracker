import { Request, Response } from 'express';
import { Event } from '../interfaces/interfaces';
import { fetchEvents } from './fetchEvents';
import fs from 'fs';

const updateDB = async (events: Event[]) => {
    const eventsJSON = JSON.stringify(events);
    fs.writeFile('src/events.json', eventsJSON, (err: any) => {
        if (err) {
            throw new Error('Error writing to file');
        }

    });
};

export const deleteEvent = async (req: Request, res: Response) => {
    const id = parseInt(req.query.id as string);
    
    const events: Event[] = await fetchEvents();
    const index = events.findIndex((event: Event) => event.id === id);
    // console.log(index);
    
    if (index !== -1) {
        events.splice(index, 1);
    }
    else {
        throw new Error('Event not found');
    }
    // write the updated events array to the events.json file
    await updateDB(events);
    console.log("Event deleted");
    // res.redirect('/events/view?date=' + req.query.date);
    
};
