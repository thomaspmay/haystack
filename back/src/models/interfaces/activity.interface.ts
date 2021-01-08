import { Iuser } from "./user.interface";

export interface Iactivity {
    id?: number;
    title?: string;
    slug?: string;
    description?: string;
    body?: string;
    createdAt?: Date;
    updatedAt?: Date;
    likes?: number;
    author?: Iuser;
    headerImage?: string;
    publishedDate?: Date;
    isPublished?: boolean;
    isAccepted?: boolean;
}