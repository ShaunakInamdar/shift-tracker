// get events by 'date' 
import { Event } from './fetchEvents';
import { Request, Response } from 'express';


export const getEventsDate = async (req: Request, res: Response) => {
    const events = require('../src/events.json');
    const date = new Date(Date.parse(req.body.date))as Date;
    console.log(`getting events for ${date}`);
    const eventsByDate: Event [] = events.filter((event: Event) => event.date === date);
    console.log(eventsByDate.length);
    
    return eventsByDate;
}

