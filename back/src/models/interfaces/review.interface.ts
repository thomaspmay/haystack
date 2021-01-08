import { Iuser } from "./user.interface";

export interface Ireview {
    id?: number;
    title?: string;
    body?: string;
    createdAt?: Date;
    updatedAt?: Date;
    likes?: number;
    author?: Iuser;
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