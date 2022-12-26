import { promises as fs } from 'fs';
import { Event } from '../interfaces/interfaces';

// import eventscollection from database
export const fetchEvents = async () => {
    const eventsCollection = await (global as any).eventsCollection;
    const events = await eventsCollection.find({}).toArray();
    return events;
};

export const validateEvents = async () => {
    const events = await fetchEvents();
    const validEvents: Event[] = [];
    events.forEach((event: Event) => {
        if (event.date && event.start && event.end && event.shift) {
            validEvents.push(event);
        }
    });
    return validEvents;

};