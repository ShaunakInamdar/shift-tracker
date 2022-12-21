// get events by 'date' 
import { Event } from '../interfaces/interfaces';
import { Request, Response } from 'express';
import { parseDate } from './posts';


export const getEventsDate = async (req: Request, res: Response) => {
    const events = require('../src/events.json');
    const date = new Date(Date.parse(req.params.date)).toISOString().split('T')[0];
    console.log(`getting events for ${date}`);
    const eventsByDate: Event [] = events.filter((event: Event) => event.date === date);
    console.log(eventsByDate.length);
    
    return eventsByDate;
}

