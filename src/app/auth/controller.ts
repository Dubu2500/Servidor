import { Request, Response } from 'express';

export function login(req: Request, res: Response) {
    console.log('Login: ', req.body);
    res.send({ token : 588585885858});
    
}

export function signup (req: Request, res: Response) {
    console.log(req.body);
    res.send();
}
