import { Router } from "express"; //primero importar el router
import { renderChat } from "./controller";
//crear una instancia del router
const router = Router();
//definir una ruta
router.get('', renderChat);//primero lo dejaremos en raiz

//me falta handdlebars

//unificar mi ruta en el modulo de rutas
export default router;
//exportar elrotes
