// get events by 'date' 
import { Event } from '../interfaces/interfaces';
import { Request, Response } from 'express';

// function to parse date to yyyy-mm-dd format
export const parseDate = (date: string) => {
    const dateString = new Date(date).toISOString().split("T")[0];
    return dateString;
};


export const getEventsDate = async (req: Request, res: Response) => {
    const events = require('../src/events.json');
    const date = req.query.date;
    // const date = new Date(req.params.date).toISOString().split("T")[0] as unknown as Date;
    // const newDateFormatted = parseDate(date);
    console.log(`getting events for ${date}`);
    const eventsByDate: Event [] = events.filter((event: Event) => event.date === date);
    console.log(eventsByDate.length);
    
    return eventsByDate;
}

