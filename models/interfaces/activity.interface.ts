import { Review } from "./review.interface";
import { User } from "./user.interface";

export interface Activity {
    id?: number;
    title?: string;
    slug?: string;
    description?: string;
    body?: string;
    createdAt?: Date;
    updatedAt?: Date;
    likes?: number;
    headerImage?: string;
    publishedDate?: Date;
    isPublished?: boolean;
    isAccepted?: boolean;
    author?: User;
    reviews?: Review;
}