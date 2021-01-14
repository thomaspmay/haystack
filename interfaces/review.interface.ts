import { user } from "./user.interface";

export interface Review {
    id?: number;
    title?: string;
    body?: string;
    createdAt?: Date;
    updatedAt?: Date;
    likes?: number;
    // author?: user;
    author?: number;
    publishedDate?: Date;
    isPublished?: boolean;
    isAccepted?: boolean;
}

export enum Score {
    FIVE = 'five',
    FOUR = 'four',   
    THREE = 'three',
    TWO = 'two',
    ONE = 'one'
}