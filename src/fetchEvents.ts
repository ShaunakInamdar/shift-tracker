import { promises as fs } from 'fs';

export interface Event {
    id: number;
    date: Date;
    start: Date;
    end: Date;
    shift: string;
}

export const fetchEvents = async () => {
    const events = await fs.readFile('src/events.json', 'utf-8');
    return JSON.parse(events);


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