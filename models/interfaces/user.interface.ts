import { Iactivity } from "./activity.interface";
import { Ireview } from "./review.interface";


export interface Iuser {
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
    createdActivities?: Iactivity[];
    createdReviews?: Ireview[];
}

export enum UserRole {
    DEV = 'developer',
    ADMIN = 'admin',   
    VERIFIED = 'verified',
    USER = 'user'
}