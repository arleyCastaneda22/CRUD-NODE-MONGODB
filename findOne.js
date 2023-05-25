// const { MongoClient } = require("mongodb");

// const { faker } = require("@faker-js/faker");

// const url =
//   "mongodb+srv://admin:admin@cluster0.4tm3xjj.mongodb.net/?retryWrites=true&w=majority";



// Función para findOne de la colección estilista
// async function find(estado){
//   const cliente = new MongoClient(url);
//   try {
//     await cliente.connect();
//     const resultado = await cliente.db('beautySoft').collection('estilista').findOne({estado:estado});
//     console.log(resultado);
    
//   } catch (error) {
    
//   }finally{
//     await cliente.close()
//   }
// }

// find("Inactivo");