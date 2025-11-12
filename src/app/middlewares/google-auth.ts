//iniciar todo el proceso serain 2 precesos, hay que serializar y no sereializar
//que datos necesitamos para iniciar el proceso client id, client secret, callbacck
//tambien podemos agregar que ya nos cree la coockie la parte del express session
import { Express } from "express";
import passport from "passport";
import { Strategy }  from 'passport-google-oauth20';//extraeremos solo la estrategia de google
import  session  from 'express-session';//nos permitira crear la coockie

//para compartir la inforrmacion hay dos maneras, 
//app de index 
//la otra era un modulo con set app y get app, desde el index le hago el set up
export function initGoogleAuth (app: Express) {
    passport.use(
        new Strategy({
            clientID: process.env.GOOGLE_ID ?? '',
            clientSecret: process.env.GOOGLE_SECRET ?? '',
            callbackURL: process.env.GOOGLE_CALLBACK_URL
        }, (accesToken, refreshToken, profile, cb) => { //en la funcion vamos a recibir 4 argumentos, accestoken me loda google, el regreshtoken me lo da google el tercero sera el peerfil del usaurio y el cuarto es mi nexxt mi callback lo que quiero hacer para que coontinue
            return cb(null, profile); //la mayoria de los callback tienen errorfirstcallback, 



        })
    );
    //vamos creando la estrategia, todo esto sera un middleware, que es lo que va a utilizar una nueva estrategia de google,
    //pero necesito configurarla necesito pasarle 3 datos, id cliente, secrete key y callback
    
}
//la otra opcion hubiera sido
//export const initGoogleAuth = (app) => {

//}