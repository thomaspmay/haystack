import { Review } from "../../../../../../interfaces/review.interface";
import { University } from "../../../../../../interfaces/university.interface";
import { user } from "../../../../../../interfaces/user.interface";


let activity1 = {
    id: 0,
    title: string,
    slug: string,
    description: string,
    tags: string[],
    createdAt: new Date(),
    updatedAt: new Date(),
    likes: number,
    headerImage: string,
    publishedDate: Date,
    isPublished: boolean,
    isAccepted: boolean,
    author: user,
    reviews: Review,
    
}

export let mockActivityList = {
    id: 1,
    title: "Nightclubs",
    description: "Some of the best Nightclubs in London",
    isVisibile: true,
    activities: Activity[],
    university: University,
}