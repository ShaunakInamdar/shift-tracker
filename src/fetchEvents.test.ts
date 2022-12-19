// write tests for fetchEvents function
// use the mock data from the previous exercise

import { fetchEvents, validateEvents } from './fetchEvents';

describe('FetchEvents from JSON database', () => {
    it('should read file and return events as Promise from the file as JSON', () => {
        const events = fetchEvents();
        // expects events to be a promise of type Event[]
        expect(events).toBeInstanceOf(Promise<Event[]>);
    });
});

describe('Validate Events with event interface and return list of events', () => {
    it('should return events as list', () => {
        const events = validateEvents();
        // expects events to be a Array of Promises
        expect(events).toBeInstanceOf(Promise<Event[]>);
    });
});

