import { Review } from "./review.interface";
import { University } from "./university.interface";
import { user } from "./user.interface";

export interface Activity {
    id?: number;
    title?: string;
    slug?: string;
    description?: string;
    tags: string[];
    location?: string;
    lat?: number;
    lng?: number;
    zoom?: number;
    website?: string;
    createdAt?: Date;
    updatedAt?: Date;
    likes?: number;
    headerImage?: string;
    dateAccepted?: Date;
    isAccepted?: boolean;
    author?: user;
    reviews?: Review;
    university?: University;
}