// test getEventsByDate function

import { Request, Response } from 'express';
import { getEventsDate } from '../controllers/getEventsDate';
import { Event } from './fetchEvents';

describe('getEventsByDate', () => {
    it("should return an array of events for given date", async () => {
        
        // mock request object
        const req: Request = {
            params: {
                date: '2022-12-19',
            }
        } as any;

        // mock response object
        const res: Response = {
            send: jest.fn(),
        } as any;


        const events = await getEventsDate(req, res);
        expect(events).toBeInstanceOf(Array<Event>);
    });
});