// get events by 'date' 
import { Event } from '../interfaces/interfaces';
import { Request, Response } from 'express';
import { parseDate } from './posts';


export const getEventsDate = async (req: Request, res: Response) => {
    const events = require('../src/events.json');
    const date = new Date(Date.parse(req.body.date))as Date;
    const newDateFormatted = parseDate(date);
    console.log(`getting events for ${date}`);
    const eventsByDate: Event [] = events.filter((event: Event) => event.date === newDateFormatted);
    console.log(eventsByDate.length);
    
    return eventsByDate;
}

