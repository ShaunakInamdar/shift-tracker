// add event to database
import { Request, Response } from 'express';
import { Event } from '../interfaces/interfaces';
import * as fs from 'fs';
import { readFileSync } from 'fs';
import { fetchEvents } from './fetchEvents';

// // store contents of events.json in events array
// const data = readFileSync('src/events.json', 'utf8');
// const events: Event[] = JSON.parse(data);



// append new events to events.json as an async function
export const writeEvents = (events: Event[]) => {
    const eventsJSON = JSON.stringify(events);
    fs.writeFile('src/events.json', eventsJSON, (err) => {
        if (err) {
            throw new Error('Error writing to file');
        }
    });
};

// create new event (post request) named postEvent()
export const postEvent = async (req: Request, res: Response) => {
    // const newDate = new Date(Date.parse(req.params.date)).toISOString().split('T')[0];
    const newDate = req.body.date;
    // const newStart = new Date(newDate + ' ' + req.params.start).toTimeString().split(' ')[0];
    const newStart = req.body.start;
    // const newEnd = new Date(newDate + ' ' + req.params.end).toTimeString().split(' ')[0];    
    const newEnd = req.body.end;
    const newShift = req.body.shift;
    
    const newEvent: Event = {
        id: Math.floor(Math.random() * 100),
        date: newDate,
        start: newStart,
        end: newEnd,
        shift: newShift,
    };
    const events = await fetchEvents();
    
    events.push(newEvent);
    writeEvents(events);
    console.log(events.length);
    
    res.send('Event added to database');
    
};