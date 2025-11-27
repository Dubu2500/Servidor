import  { Router, json } from 'express';
import { login, signup } from './controller';
const router = Router();

router.post('/login', json, login);
router.post('/signup', signup);
//rutas google
router.get('/login', (req,res) => {
    //crear handlebars de login
    //solo voy a mostrar la pagina que mustrar al usuario ya sea el formulario o login crearemos un handdlewabarts
    res.render('login')

})
router.get('/logout', (req,res) => {
    //borrar cockies
    //lo unico que hara es borrar la coockie
    res.clearCookie('connect.sid');
    res.redirect('/'); //lo mandaremos a raiz nosostros ya decidimos si lo mandamos a raiz o a login o a otra pagina
    //falta decirle en el nombre de la coockie

})
router.get('/login/google', (req,res) => {
    //iniciar proceso con google

})
router.get('/google/callback', (req,res)=> {
    //recibimos el codigo de google
})
export default router;
