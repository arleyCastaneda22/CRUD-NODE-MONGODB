const { MongoClient } = require("mongodb");
const url ="mongodb+srv://admin:admin@cluster0.4tm3xjj.mongodb.net/?retryWrites=true&w=majority";

//Función para deletOne de la colección citas
// async function deletOne(nombrePropiedad){

//   const cliente = new MongoClient(url);

//   try{

//   await cliente.connect();
//   const result= cliente.db(`beautySoft`).collection('citas').deleteOne
//   ({Id_cita:nombrePropiedad});
//   console.log(`${(await result).deletedCount} propieda(des) fue(ron) eliminadas`);

//   }catch(e){
//       console.error(e);
//   }finally{

//   await cliente.close();
//   }
// }

// deletOne(1840)

// Función deletMany para la colección de estilista
// async function deletMany(){
//   const cliente2 = new MongoClient(url);
//   try {
//     await cliente2.connect()
//     const resultado = await cliente2.db('beautySoft').collection('estilista').deleteMany({"Id_estilista":{$in:[76,93,220]}});
//     console.log(`La canitdad de eliminados es: ${resultado.deletedCount}`)
//   } catch (error) {
//     console.log(error)
//   }finally{
//     await cliente2.close()
//   }
// }
// deletMany()

