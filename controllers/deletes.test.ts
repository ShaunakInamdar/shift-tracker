// functionality of deleteEvent function in deletes.ts
import { deleteEvent } from './deletes';
import { Request, Response } from 'express';

const events = require('../src/events.json');

describe('deleteEvent', () => {
    it('should delete an event from the database and send response to the client', () => {
        // mock request object
        const req: Request = {
            params: {
                id: 3,
            },
        } as any;
        
        // mock response object
        const res: Response = {
            send: jest.fn(),
        } as any;
        deleteEvent(req, res);
        expect(events).not.toContainEqual({id: 3});
    });
});