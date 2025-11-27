import { Router } from 'express';
import { showForm, sendLetter } from './controller';

const router = Router();

//Mostrar el formulario
router.get('/', showForm);
//Recibir y enviar la carta
router.post('/enviar-carta', sendLetter);

export default router;

