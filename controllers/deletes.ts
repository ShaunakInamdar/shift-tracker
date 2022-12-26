import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { Event } from '../interfaces/interfaces';
import { validateEvents } from './fetchEvents';
import { writeEvents } from './posts';

// delete event by id from mongodb
export const deleteEvent = async (req: Request, res: Response) => {
    const eventsCollection = await (global as any).eventsCollection;
    eventsCollection.deleteOne({ _id: new ObjectId(req.query.id as string) });
    console.log("Event deleted");
};