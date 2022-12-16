import { fetchEvents } from './fetchEvents.js.js';
(function () {
    populateEvents();
    const helloworld = document.getElementById('hello');
    helloworld.innerText = 'Hello World!';


})();

const helloworld = document.getElementById('hello');
helloworld.innerText = 'Hello World!';

export const populateEvents = async () => {
    const events = await fetchEvents();
    const row = document.createElement('tr');
    const table = document.getElementById('events-data');
    events.forEach((event) => {
        row.innerHTML = `
            <td>${event.date}</td>
            <td>${event.start}</td>
            <td>${event.end}</td>
            <td>${event.shift}</td>
        `;
        table.appendChild(row);
    });
};