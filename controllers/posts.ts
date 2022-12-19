// add event to database
import { Request, Response } from 'express';
import { readFile } from 'fs/promises';
import { Event } from '../src/fetchEvents';
const express = require('express');

// create new event (post request) named postEvent()
export const postEvent = (req: Request, res: Response) => {
    const newDate = new Date(Date.parse(req.body.date));
    const newStart = req.body.start as Date;
    const newEnd = req.body.end as Date;    
    
    const newShift = req.body.shift;

    const newEvent: Event = {
        id: Math.floor(Math.random() * 100),
        date: newDate,
        start: newStart,
        end: newEnd,
        shift: newShift,
    };
    
    console.log(newEvent);
    // add newEvent to database (append newEvent to events.json)
    const events = require('../src/events.json');
    events.push(newEvent);
    // write new events to events.json
    const fs = require('fs');
    fs.writeFile('src/events.json', JSON.stringify(events), (err: any) => {
        if (err) throw err;      
        res.send("New event added to database");
        console.log('The file has been saved!');
    });
    
};