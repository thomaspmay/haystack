import { ReviewEntity } from "../entities/review.entity";
import { UserEntity } from "../entities/user.entity";
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
    headerImage?: string;
    publishedDate?: Date;
    isPublished?: boolean;
    isAccepted?: boolean;
    author?: UserEntity;
    reviews?: ReviewEntity;
}