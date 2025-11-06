import { connect } from 'mongoose';

//funcion para conectar a mongo
export const dbConnect = (): Promise<void> => {//pomise void le digo a la pormesa que no va a lelvar nada
    return new Promise((resolve, reject) => {
        //if (!process.env.MONGO_URL) {
          //  return reject(new Error('MONGO_URL no está definido en .env'));
        //}

        connect(process.env.MONGO_URL!).then(() => {
                resolve();
            }).catch(() => {
                // Propagar el error real para poderlo imprimir arriba
            reject();
        });
    });
}
//que devuelve una promesa
//devuelve 3 cosas

//catch
//finally
//then

//que me debe exportar le metodo db connect 
//calback
//es una funcion que se llama una conexcion a otro
