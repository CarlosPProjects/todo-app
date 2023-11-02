import { ObjectId } from "mongodb";

export interface TodosProps {
    _id: ObjectId;
    title: string;
}