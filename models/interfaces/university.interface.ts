import { Iimage } from "./image.interface";


export interface Iuniversity {
    id?: number;
    name?: string;
    slug?: string;
    description?: string;
    body?: string;
    createdAt?: Date;
    updatedAt?: Date;
    isPublished: boolean;
    headerImage?: string;
    images: Iimage;
}