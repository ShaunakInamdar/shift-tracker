// testing functionality of postEvents function in posts.ts
import { postEvent } from './posts';
import { Event } from '../src/fetchEvents';
import { Request, Response } from 'express';

describe('postEvent', () => {
    it('should add a new event to the database and send response to the client', () => {
        const newEvent = {
            id: 1,
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
        const res: Response = {
            send: jest.fn(),
        } as any;
        postEvent(req, res);
        expect(res.send).toHaveBeenCalledWith('Event added to database');
    });
});
