import express, { static as static_ } from 'express';
import path from 'path';

import dotenv from 'dotenv';
//import path from 'path';
//import { engine } from 'express-handlebars';

dotenv.config();
import { engine } from 'express-handlebars';
//
import database from '../database.json';
//import routes from './app/routes';
//import { engine } from 'express-handlebars';

import swaggerJsDoc from 'swagger-jsdoc';
import { setup, serve } from 'swagger-ui-express';
import swaggerOptions from './../swagger.config';
import { dbConnect } from './database';
//import { Server } from 'http';
import {Server as SocketServer} from 'socket.io';

import { ejemplo } from './app/ejemplo2/ejemplo';
import { index } from './app/ejemplo1';
import routes from './app/routes'; 

const PORT = process.env.PORT || 3000;

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

console.log('Ejemplo 1 sin poner en la ruta el nombre del archivo index:', index);
console.log('Ejemplo 2 poniendo la ruta con el nombre del archivo:', ejemplo);

app.use(routes);

app.use('/static', static_(path.join(__dirname, '..', 'public')));

app.get('', (req, res) => {
console.log("Database: ", database);
  // res.send("API works");
  // res.sendFile(path.join(__dirname, 'views', 'index.html'));
  res.render('index', {
    nombre: "Vicky",
    usuarios: [
      { id: 1, nombre: "pablo" },
      { id: 2, nombre: "juan" }
    ]
  }); 
});

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/swagger', serve, setup(swaggerDocs));

dbConnect().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}).catch(() => {
  console.log('Error al conectarse a la base de datos')
})

const server = app.listen(PORT, () => {
  console.log(`app is running in port ${PORT}`) //app.listen me retorna un tipo de dato llamado server
})
//crear
  const io = new SocketServer(server, {
    cors: {
      origin: '*' //de q origen
    }   

  });
  //el primer evento siempre sera del cliente, la conexicion siempre sera el evento
  //todo partira del eveento de la conexion
  io.on('connection', (socket) => {
    console.log('se creo una nueva conexion')
    socket.emit('confirmacion');
    //quien recibe el evento
    socket.on('messageSent', (datos) => {
      io.emit('messageReceived', datos);
      socket.data.usuario = {}
    })
      //podemos hacer un emit masivo o un broadcast, un emit es con io
      //pero cual es la diferencia, porque ambas son validas si yo nada mas le tengo que decir a los usuairos pues ya me expuyi yo y eso es suficiente
      //pero si lo guardo en la base de datos y lo quiero eliminar, que datos necesito, si yo necesito un id para poder manipular el caso
      //entonces me tengoq ue esperar para que se guarde en la base de datos
      //tengo que esperar a que me lelgue como a todos os demas entonces va a depender
      //socket.broadcast.emit('messageReceived', datos);
      //ahora teemos que mostarlo el cliente tiene que recibir el evento lo haremos en handllewaras
      //console.log('el usuario hizo click', datos);
    socket.on('disconnect', () => {
      console.log('alguien se salio');
        //le podemos poner al socket datos
      })
    })
    //socket.join('sala1')
    //socket.broadcast.emit('evento', { datos })
  
  //si quieres mandar mensajes a todos los sockets lo tenemos aque mandar desde io
  //io.emit('evento', { }); //es para enviar mensajes a todos
  //si quieren eenviar mensaje a todo los demas si lo tienen que hacer desde socket
  //porque es el socket que se va a excluir porque es el esocket euqe lo manda, el bbroadcast itnee ese emit
  //io.to('sala1').emit('evento', {})

  //tarea escribe tu nombre
  //una fecha al mensaje, quiero ver fulano envio un mensaje a tal ahora, y el texto de mensaje
  //nosotrros determinamos como pero quiero diferenciar el mensaje que envio yo mismo, diferenciarlo con algun color
  //quiero que pueda diferencias queiro que haya un diferenciador entre el mensaje de alguien mas y cuando lo veo en la pantalla de otro quiero que sea vea el reves
  //cada ves que se una un usairo al chat quiero que diga el usuairo se salio y se metio
