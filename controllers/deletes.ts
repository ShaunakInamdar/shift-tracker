import { Request, Response } from 'express';

export const deleteEvent = (req: Request, res: Response) => {
    const id = req.params.id;
    res.send(`Deleted event with id ${id}`);
};
