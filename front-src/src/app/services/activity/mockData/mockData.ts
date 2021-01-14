import { Review } from "../../../../../../interfaces/review.interface";
import { University } from "../../../../../../interfaces/university.interface";
import { user, UserRole } from "../../../../../../interfaces/user.interface";





let activity1 = {
    id: 0,
    title: "XOYO",
    slug: "XOYO",
    description: "Located in the heart of Shoreditch, XOYO is housed across two floors "
    + "(the top being sister-bar The Shoreditch Butchery). Featuring an expertly-tuned"
    + "soundsystem the club has defined itself as a prime late-night destination",
    tags: ["Nightlife","Nightclub"],
    createdAt: new Date(),
    updatedAt: new Date(),
    likes: 150,
    headerImage: "xoyo.jpg",
    dateAccepted: new Date(),
    isAccepted: true,
    author: 1,
    reviews: null,
}

let user1 = {
    id: 1,
    firstName: "Tom",
    lastName: "may",
    username: "tmay97",
    email: "tom.may.tpm@gmail.com",
    password: "H45FGE54757GNOFELlrheonEFEF",
    role: UserRole.DEV,
    createdAt: new Date(),
    updatedAt: new Date(),
    profileImage: "",
    createdActivities: [activity1],
    createdReviews: null
}

let university1 = {
    id: 1,
    name: "University College London",
    slug: "UCL",
    description: "University College London, officially known as UCL since 2005, " +
    "is a public research university located in London, United Kingdom, and a member " + 
    "institution of the federal University of London.",
    body: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    isPublished: true,
    headerImage: "UCL.jpg",
    images: [""]
}

export let mockActivityList = {
    id: 1,
    title: "Nightclubs",
    description: "Some of the best Nightclubs in London",
    isVisibile: true,
    activities: activity1,
    university: university1,
}

let userDB: user[] = [
    user1
]