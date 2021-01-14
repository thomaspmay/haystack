import { Review } from "../../../../../../interfaces/review.interface";
import { University } from "../../../../../../interfaces/university.interface";
import { user } from "../../../../../../interfaces/user.interface";

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
    author?: user;
    reviews?: Review;
}

export let mockActivityList = {
    id: 1,
    title: "Nightclubs",
    description: "Some of the best Nightclubs in London",
    isVisibile: boolean,
    activities: Activity[],
    university: University,
}