import { Activity } from "./activity.interface";
import { Review } from "./review.interface";

export interface Meta {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
}

export interface Links {
    first: string;
    previous: string;
    next: string;
    last: string;
}

export interface ActivitiesPageable {
    items: Activity[];
    meta: Meta;
    links: Links;
}

export interface ReviewPageable {
    parent: Activity;
    items: Review[];
    meta: Meta;
    links: Links;
}