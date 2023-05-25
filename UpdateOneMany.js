// const { MongoClient } = require("mongodb");

// const { faker } = require("@faker-js/faker");

// const url =
//   "mongodb+srv://admin:admin@cluster0.4tm3xjj.mongodb.net/?retryWrites=true&w=majority";





// //Función para updateOne de la colección estilista
// // async function actualizar(id, campo){
// //   const cliente = new MongoClient(url);
// //   try {
// //     await cliente.connect();
// //     const resultado = await cliente.db('beautySoft').collection('estilista').updateOne({Id_estilista: id},{$set:{nombre:campo}});
// //     console.log(`${(resultado).matchedCount} propiedad que cumplen  con el criterio de busqueda`);
// //     console.log(`${(resultado).modifiedCount} propiedad  actualiza `)
    
// //   } catch (error) {
    
// //   }finally{
// //     await cliente.close()
// //   }
// // }

// // actualizar(76,"jhon");

// //Función de updateMany para la coleccion citas utilizando upsert
// // async function actualizarMuchos(campos ){
// //   const cliente = new MongoClient(url);
// //   try {
// //     await cliente.connect();
// //     const resultado = await cliente.db('beautySoft').collection('citas').updateMany({
    
// //      medioDePago:{$exists:false}
// //      },
// //      {
// //          $set:{medioDePago: campos}
// //      },
// //      {
// //          $upsert:true

// //     })
// //     console.log(`${resultado.modifiedCount} propieades actualizadas`)

// //   } catch (error) {
    
// //   }finally{
// //     await cliente.close()
// //   }
// // }
// // actualizarMuchos(["Efectivo", "trasferencia"])

// //Función de updateMany para la coleccion citas utilizando unset
// async function actualizarMuchos(campos ){
//   const cliente = new MongoClient(url);
//   try {
//     await cliente.connect();
//     const resultado = await cliente.db('beautySoft').collection('citas').updateMany({
//            medioDePago:{$exists: true}
//        },{
//            $unset:{medioDePago:campos}
//        })
//     console.log(`${resultado.modifiedCount} propieades actualizadas`)

//   } catch (error) {
    
//   }finally{
//     await cliente.close()
//   }
// }
// actualizarMuchos([
//   "Efectivo",
//   "trasferencia"
// ])