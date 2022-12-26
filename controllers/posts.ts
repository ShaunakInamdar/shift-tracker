// add event to database
import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { Event } from '../interfaces/interfaces';
import { validateEvents } from './fetchEvents';



// update all events to mongodb
export const writeEvents = async (events: Event[]) => {
    const eventsCollection = await (global as any).eventsCollection;
    await eventsCollection.deleteMany({});
    await eventsCollection.insertMany(events);
};

export const postEvent = async (req: Request, res: Response) => {
    const newDate = req.body.date;
    const newStart = req.body.start;
    const newEnd = req.body.end;
    const newShift = req.body.shift;
    
    const newEvent: Event = {
        _id: new ObjectId(),
        date: newDate,
        start: newStart,
        end: newEnd,
        shift: newShift,
    };
    const events = await validateEvents();
    events.push(newEvent);
    await writeEvents(events);
    console.log("Event added");
    
};