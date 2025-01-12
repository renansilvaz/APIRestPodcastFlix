import { responsePodcast } from "../models/responsePodcast";
import { repoPodcast } from "../repositories/podcast-repository";
import { StatusCode } from "../Utils/status-code";

export const getByPodcast = async (podcastName: string | undefined): Promise<responsePodcast> => {

    let responseFormat: responsePodcast = {
        statusCode: 0,
        body: []
    }

    const queryString = podcastName?.split("?p=")[1] || ""
    const data = await repoPodcast(queryString);

    responseFormat = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
        body: data
    }

    return responseFormat;
}