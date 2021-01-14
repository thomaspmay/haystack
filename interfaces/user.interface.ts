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
    createdActivities?: Activity[];
    createdReviews?: Review[];
}

export enum UserRole {
    DEV = 'developer',
    ADMIN = 'admin',   
    VERIFIED = 'verified',
    USER = 'user'
}