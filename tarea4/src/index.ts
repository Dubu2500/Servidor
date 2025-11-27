import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { engine } from 'express-handlebars';

import santaRoutes from './app/santa/routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

//POST
app.use(express.urlencoded({ extended: true }));

app.use(
  '/static',
  express.static(path.join(__dirname, '..', '..', 'public'))
);

//Rutas
app.use('/', santaRoutes);

app.listen(PORT, () => {
  console.log(`Servidor tarea4 escuchando en http://localhost:${PORT}`);
});
