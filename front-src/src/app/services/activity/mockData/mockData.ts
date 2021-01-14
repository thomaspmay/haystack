import { Activity } from "../../../../../../interfaces/activity.interface";
import { ActivityList } from "../../../../../../interfaces/activityList.interface";
import { Review, Score } from "../../../../../../interfaces/review.interface";
import { University } from "../../../../../../interfaces/university.interface";
import { user, UserRole } from "../../../../../../interfaces/user.interface";





let activity1: Activity = {
    id: 0,
    title: "XOYO",
    slug: "XOYO",
    description: "Located in the heart of Shoreditch, XOYO is housed across two floors "
    + "(the top being sister-bar The Shoreditch Butchery). Featuring an expertly-tuned"
    + "soundsystem the club has defined itself as a prime late-night destination",
    tags: ["Nightlife","Nightclub"],
    location: "32-37 Cowper St, Old Street, London EC2A 4AP",
    lat: 0,
    lng: 0,
    zoom: 0,
    website: "www.xoyo.co.uk",
    createdAt: new Date(),
    updatedAt: new Date(),
    likes: 150,
    avgRating: 3.5,
    headerImage: "xoyo.jpg",
    dateAccepted: new Date(),
    isAccepted: true,
    author: 1,
    reviews: null
}

let activity2: Activity = {
    id: 1,
    title: "Piccadilly Institute",
    slug: "piccadilly-institute",
    description: "Picacadilly Institute is London's craziest place to party, a labyrinth " +
    "of rooms to explore, you'll find somewhere to suit your every mood.",
    tags: ["Nightlife","Nightclub"],
    location: "The London Pavillion, 1 Piccadilly Circus, West End, London W1J 0DA",
    lat: 0,
    lng: 0,
    zoom: 0,
    website: "www.piccadillyinstitute.co.uk",
    createdAt: new Date(),
    updatedAt: new Date(),
    likes: 400,
    avgRating: 4,
    headerImage: "piccadilly-institute.jpg",
    dateAccepted: new Date(),
    isAccepted: true,
    author: 1,
    reviews: null
}

let activity3: Activity = {
    id: 2,
    title: "Egg London",
    slug: "egg-london",
    description: "Egg London is an electronic music venue and superclub based in Kings Cross, North London",
    tags: ["Nightlife","Nightclub"],
    location: "200 York Way, London N7 9AX",
    lat: 0,
    lng: 0,
    zoom: 0,
    website: "www.egglondon.co.uk",
    createdAt: new Date(),
    updatedAt: new Date(),
    likes: 400,
    avgRating: 4,
    headerImage: "egg-london.jpg",
    dateAccepted: new Date(),
    isAccepted: true,
    author: 1,
    reviews: null
}

let activity4: Activity = {
    id: 3,
    title: "The Roxy",
    slug: "the-roxy",
    description: "Incorporating the historical punk venue of old with the popular, contemporary" +
    "RnB scene and flashes of the Hacienda Rave Culture, the Roxy provides a night to be reckoned with.",
    tags: ["Nightlife","Nightclub"],
    location: "3-5 Rathbone Pl, Fitzrovia, London W1T 1HJ",
    lat: 0,
    lng: 0,
    zoom: 0,
    website: "www.theroxy.co.uk",
    createdAt: new Date(),
    updatedAt: new Date(),
    likes: 400,
    avgRating: 5,
    headerImage: "roxy.jpg",
    dateAccepted: new Date(),
    isAccepted: true,
    author: 1,
    reviews: null
}

let activity5: Activity = {
    id: 4,
    title: "Zoo Bar",
    slug: "zoo-bar",
    description: "Lively disco bar with eclectic decor in several rooms, playing house music and serving cocktails.",
    tags: ["Nightlife","Nightclub","Bar"],
    location: "Leicester Square, 13-17 Bear St, Charing Cross, London WC2H 7AQ",
    lat: 0,
    lng: 0,
    zoom: 0,
    website: "www.zoobar.co.uk",
    createdAt: new Date(),
    updatedAt: new Date(),
    likes: 400,
    avgRating: 4,
    headerImage: "zoo-bar.jpg",
    dateAccepted: new Date(),
    isAccepted: true,
    author: 1,
    reviews: null
}

let activity6: Activity = {
    id: 5,
    title: "Tiger Tiger",
    slug: "tiger-tiger",
    description: "Tiger Tiger Club London offers a fantastic and wild night out at one of the" +
    "best nightclubs in the capital. Much more than just a night, a truly great experience is" +
    "guaranteed to get the appetite of anyone and everyone passing through its doors.",
    tags: ["Nightlife","Nightclub"],
    location: "29 Haymarket, West End, London SW1Y 4SP",
    lat: 0,
    lng: 0,
    zoom: 0,
    website: "london.tigertiger.co.uk",
    createdAt: new Date(),
    updatedAt: new Date(),
    likes: 130,
    avgRating: 2.5,
    headerImage: "tiger-tiger-london.jpg",
    dateAccepted: new Date(),
    isAccepted: true,
    author: 1,
    reviews: null
}

let activity7: Activity = {
    id: 6,
    title: "Infernos",
    slug: "infernos",
    description: "Perennially busy club with 1980s ethos and playlist, large dancefloor, disco balls and neon lights.",
    tags: ["Nightlife","Nightclub"],
    location: "146 Clapham High St, Clapham Town, London SW4 7UH",
    lat: 0,
    lng: 0,
    zoom: 0,
    website: "www.infernos.co.uk",
    createdAt: new Date(),
    updatedAt: new Date(),
    likes: 130,
    avgRating: 4,
    headerImage: "infernos-claphem.jpg",
    dateAccepted: new Date(),
    isAccepted: true,
    author: 1,
    reviews: null
}

let activity8: Activity = {
    id: 7,
    title: "Embargo",
    slug: "embargo",
    description: "Opulent, Cuban-influenced DJ club with rooftop terrace, cigar humidor and a glitzy 'Gold Bar'.",
    tags: ["Nightlife","Nightclub"],
    location: "533b King's Rd, Chelsea, London SW10 0TZ",
    lat: 0,
    lng: 0,
    zoom: 0,
    website: "www.embargorepublica.com",
    createdAt: new Date(),
    updatedAt: new Date(),
    likes: 130,
    avgRating: 3,
    headerImage: "embargo-london.jpg",
    dateAccepted: new Date(),
    isAccepted: true,
    author: 1,
    reviews: null
}

let activity9: Activity = {
    id: 8,
    title: "Cargo",
    slug: "cargo",
    description: "Buzzing, atmospheric venue for bands and DJs in disused railway yard with global menu and a garden",
    tags: ["Nightlife","Nightclub"],
    location: "83 Rivington St, Hackney, London EC2A 3AY",
    lat: 0,
    lng: 0,
    zoom: 0,
    website: "www.cargo-london.com",
    createdAt: new Date(),
    updatedAt: new Date(),
    likes: 130,
    avgRating: 4,
    headerImage: "cargo.jpg",
    dateAccepted: new Date(),
    isAccepted: true,
    author: 1,
    reviews: null
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

export let mockActivityList: ActivityList  = {
    id: 1,
    title: "Nightclubs",
    description: "Some of the best Nightclubs in London",
    isVisibile: true,
    activities: 
        [
            activity1,
            activity2,
            activity3,
            activity4,
            activity5,
            activity6,
            activity7,
            activity8,
            activity9
        ]
        ,
    university: university1,
}

let userDB: user[] = [
    user1
]

