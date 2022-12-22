// testing functionality of postEvents function in posts.ts
import { postEvent } from './posts';
import { Request, Response } from 'express';
import { readFileSync } from 'fs';
import { Event } from '../interfaces/interfaces';
import { fetchEvents } from './fetchEvents';


describe('postEvent', () => {
    it('should add a new event to the database and send response to the client', async () => {
        const newEvent = {
            date: '2022-12-19',
            start: '08:00:00',
            end: '16:00:00',
            shift: 'testing shift',
        };
        // mock request object
        const req: Request = {
            body: newEvent,
        } as any;
        
        // mock response object
        const data: Response = {
            send: jest.fn(),
        } as any;
        // get the length of the events array before adding a new event
        const events = await fetchEvents();
        const lengthOfEvents = events.length;
        await postEvent(req, data);
        // get the length of the events array after adding a new event
        const eventsAfter = await fetchEvents();
        const lengthOfEventsAfter = eventsAfter.length;
        expect(lengthOfEventsAfter).toBe(lengthOfEvents + 1);
    });
});
