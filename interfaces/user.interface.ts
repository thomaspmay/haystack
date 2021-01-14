import { Activity } from "./activity.interface";
import { Review } from "./review.interface";


export interface user {
    id?: number;
    firstName?: string;
    lastName?: string;
    username?: string;
    email?: string;
    password?: string;
    role?: UserRole;
    createdAt?: Date;
    updatedAt?: Date;
    profileImage?: string;
    // createdActivities?: Activity[];
    createdActivities?: number[];
    // createdReviews?: Review[];
    createdReviews?: number[];
}

export enum UserRole {
    ADMIN = 'admin',
    DEV = 'developer',   
    VERIFIED = 'verified',
    USER = 'user'
}