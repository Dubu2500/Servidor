import { Request, Response } from "express";
export function renderChat(req: Request, res:Response) {
    res.render('chat'); //para crear el archivos de handlebats de inicio
}
