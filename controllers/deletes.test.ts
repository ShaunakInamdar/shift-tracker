// functionality of deleteEvent function in deletes.ts
import { deleteEvent } from './deletes';
import { Request, Response } from 'express';
import { fetchEvents } from './fetchEvents';
// test the functionality of the deleteEvent function in deletes.ts

describe('deleteEvent with valid id', () => {
    it('should delete an event from the database and send response to the client', async () => {
        // mock request object
        const req: Request = {
            query: {
                id: 84,
                date: '2022-12-19',
            },
        } as any;
        
        // mock response object
        const res: Response = {
            send: jest.fn(),
        } as any;
        
        const events = await fetchEvents();
        const lengthOfEvents = events.length;
        await deleteEvent(req, res);
        const eventsAfter = await fetchEvents();
        const lengthOfEventsAfter = eventsAfter.length;
        expect(lengthOfEventsAfter).toBe(lengthOfEvents - 1);

    });
});

describe('deleteEvent with invalid id', () => {
    it('should throw error if event not found', () => {
        // mock request object
        const req: Request = {
            params: {
                id: 1000,
            },
        } as any;
        
        // mock response object
        const res: Response = {
            send: jest.fn(),
        } as any;
        expect(deleteEvent(req, res)).rejects.toThrow('Event not found');
        
    });
});

