import { Request, Response} from "express";

export function getUsers(req: Request, res: Response) {
    console.log('User: ', req.user);
    res.send([]);
}

export function showUploadProfilePicForm(req: Request, res: Response) {
    res.render('profilepic');
}

export function uploadProfilePic(req: Request, res: Response) {
    res.send('function uploadProfile');
    console.log('Imagen cargada');
}
