import { responsePodcast } from "../models/responsePodcast";
import { repoPodcast } from "../repositories/podcast-repository";
import { StatusCode } from "../Utils/status-code";

export const serviceListEpisodes = async (): Promise<responsePodcast> => {

        let responseFormat: responsePodcast = {
            statusCode: 0,
            body: []
        }

    const data = await repoPodcast();

    responseFormat = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
        body: data
    }

    return responseFormat
}