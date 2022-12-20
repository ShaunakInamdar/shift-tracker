// functionality of deleteEvent function in deletes.ts
import { deleteEvent } from './deletes';
import { Request, Response } from 'express';

const events = require('../src/events.json');

describe('deleteEvent', () => {
    it('should delete an event from the database and send response to the client', () => {
        // mock request object
        const req: Request = {
            params: {
                id: 95,
            },
        } as any;
        
        // mock response object
        const res: Response = {
            send: jest.fn(),
        } as any;
        const lengthOfEvents = events.length;
        deleteEvent(req, res);
        expect(events.length).toBe(lengthOfEvents - 1);
    });
});

// test the functionality of the deleteEvent function in deletes.ts

describe('deleteEvent', () => {
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
        expect(() => {
            deleteEvent(req, res);
        }).toThrowError('Event not found');
    });
});
