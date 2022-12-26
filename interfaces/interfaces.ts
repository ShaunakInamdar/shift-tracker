import { ObjectId } from "mongodb";

export interface Event {
    _id: ObjectId;
    date: string;
    start: string;
    end: string;
    shift: string;
}