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
    // console.log(events);
    return JSON.parse(events);
    
    
};

// function to validate events with Event interface and returning an array of events
export const validateEvents = async () => {
    const events = await fetchEvents();
    // initialize an empty array to store valid events
    const validEvents: Event[] = [];
    // console.log(typeof validEvents);
    events.forEach((event: Event) => {
        if (event.date && event.start && event.end && event.shift) {
            validEvents.push(event);
            // console.log(event.date);
            
        }
    });
    // return array of valid events
    return validEvents;
    
};

export const helloworld = () => {
    const header = document.getElementById('hello') as HTMLHeadingElement;
    header.innerText = 'Hello World';
};

const events = validateEvents();
console.log(typeof events);




// FUNCTION TO POPULATE EVENTS TO HTML TABLE    
// export const populateEvents = async () => {
//     const events = await fetchEvents();
//     const row: HTMLTableRowElement = document.createElement('tr');
//     const table = document.getElementById('#events-data') as HTMLTableElement;
//     events.forEach((event: Event) => {
//         row.innerHTML = `
//             <td>${event.date}</td>
//             <td>${event.start}</td>
//             <td>${event.end}</td>
//             <td>${event.shift}</td>
//         `;
//         table.appendChild(row);
//     });
// };