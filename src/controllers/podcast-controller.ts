import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { getByPodcast } from "../services/getByPodcast";
import { responsePodcast } from "../models/responsePodcast";

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

    const content: responsePodcast = await serviceListEpisodes()

    res.writeHead(content.statusCode, {'Content-Type': "application/json"});
    res.write(JSON.stringify(content.body))
    res.end();
}

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

    const content: responsePodcast = await getByPodcast(req.url)

    res.writeHead(content.statusCode, {'Content-Type': "application/json"});
    res.write(JSON.stringify(content.body))
    res.end();
}