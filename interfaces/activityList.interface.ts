import { Activity } from "./activity.interface";
import { University } from "./university.interface";

// custom lists of activities for featuring

export interface ActivityList {
    id?: number;
    title?: string;
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
    isVisibile?: boolean;
    activities?: Activity[];
    university?: University;
}