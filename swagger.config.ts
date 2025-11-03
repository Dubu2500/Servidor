//vamos a crear las opcuiones de sawgger
import { SwaggerOptions } from "swagger-ui-express"
const PORT = process.env.PORT || 3000; //tenemos que darle un fallback, si esto no existe entonces vamos anuestro plan B que seria 300, y asi le podemos poner varivarios plabnes a b yc

const options: SwaggerOptions = {
    swaggerDefinition: {
        openapi: '3.1.0',
        info: { //toda la informacion de nuestra api, titulo que hace y version
            title: 'API Dummy',
            description: 'API para fines educativos',
            version: '0.0.1'
        },
        //en donde estan o cuales son los servidores, tenemos postman, tenemos que poner uno que es local, podeos poner url como dato dinamico, taembien le podemos decir que podemos tomar el puerto de la variable de entorno
        //cuales son los servidores esos estamoa dedfiniendo
        servers: [
            { url: 'http://localhost:' + process.env.PORT }
        ]
    },
    //tenemos uqe definir apis que son as rutas donde estaran losa arhcivos que contengan la definicion de los endpoints
    apis: [
        './src/**/*.ts' //adentro de la carpeta source ve y busca todas las carpetas y todos los archivos ts
    ]
}
//tenemos que exportarlo
export default options;