//midleware es una cion como normal o de flecha puede ser cualquiera de las dos
import { Request, Response, NextFunction } from 'express';
import { IUser } from '../interfaces/user';

declare global {
    namespace Express {
        interface Request {
            user?: IUser;
        }
    }
}


export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    //body, query,
    // /usuarios/userId/post/postId/comments?/paginado=true&perPage=10

    //pasasrr el query con un parametro de query
    const {token} = req.query;

    if (token === '12345') {
        req.user = {
            id: 123,
            name: 'Juan',
            correo: 'juan@iteso.mx'
        }
        next();
    } else {

        res.status(401).send({ message: 'not logged in'});


    }
        //res.status(401).send({ message: 'No estas loggeado jaja noob' });
        //req.status(401.send()

}
