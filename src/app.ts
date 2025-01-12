import * as http from "http";
import { getListEpisodes, getFilterEpisodes } from "./controllers/podcast-controller";
import { Routes } from "./routes/routes";
import { httpMethods } from "./Utils/http-methods";

export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {

    const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""];

    if(req.method === httpMethods.GET && baseUrl === Routes.LIST){
        await getListEpisodes(req, res)
    }

    if(req.method === httpMethods.GET && baseUrl === Routes.EPISODE){
        await getFilterEpisodes(req, res);
    }
}