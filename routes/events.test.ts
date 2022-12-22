// test the routes
import { app } from '../src/app'; 

// get server up
beforeAll(async () => {
    await app.listen(3000);
});

describe('GET /', () => {
    it('should return 200 OK', async () => {
        const response = await app.get('/');
        expect(response.status).toBe(200);
    });
});

describe('Add new event', () => {
    it("should redirect to add new event page", async () => {
        const response = await app.get('/events/new');
        expect(response.status).toBe(200);
    });
});

describe('View events by date', () => {
    it("should redirect to view events by date page", async () => {
        const response = await app.get('/events/view?date=2022-12-19');
        expect(response.status).toBe(200);
    });
});
