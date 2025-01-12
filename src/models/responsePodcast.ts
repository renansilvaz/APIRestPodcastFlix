import { Podcast } from "./podcast-models";

export interface responsePodcast {
    statusCode: number,
    body: Podcast[]
}