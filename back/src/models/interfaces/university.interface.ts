

export interface Iuniversity {
    id?: number;
    name?: string;
    slug?: string;
    description?: string;
    body?: string;
    createdAt?: Date;
    updatedAt?: Date;
    likes?: number;
    headerImage?: string;
    images: Iimage;
}