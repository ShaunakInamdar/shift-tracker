// get events by 'date' 
import { validateEvents } from '../controllers/fetchEvents';
import { Request, Response } from 'express';


export const getEventsDate = async (req: Request, res: Response) => {
    const eventsByDate: Event[] = [];
    return eventsByDate;
}

