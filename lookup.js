const { MongoClient } = require("mongodb");



const url =
  "mongodb+srv://admin:admin@cluster0.4tm3xjj.mongodb.net/?retryWrites=true&w=majority";

//Función $lookup para encontrar una cita asociado a un servicio

const client = new MongoClient(url);
async function conexion() {
  try {
    await client.connect();
    console.log("Conexión con exito");
  } catch (error) {
    console.error("Error al conectar ");
  }
}

conexion()

async function pipeline() {
  try {
    const pipeline1 = [
      {
        $lookup: {
          from: "servicios", //es desde donde me traigo la informacion
          localField: "Id_servicio", //como se llama el id "donde me paro"
          foreignField: "Id_servicio",
          as: "servicios",
        },
      },
      {
        $unwind:'$servicios'
      }
    ];

    const collection = client.db("beautySoft").collection("citas");
    const result = await collection.aggregate(pipeline1).toArray();

    console.log("Resultado del lookup:", result);
  } catch (error) {
    console.error("Error al ejecutar el pipeline", error);
  } finally {
    await client.close();
  }
}

pipeline();


//Función $lookup para encontrar un estilista asociado a un servicio
// const client2 = new MongoClient(url);
// async function conexion() {
//   try {
//     await client2.connect();
//     console.log("Conexión con exito");
//   } catch (error) {
//     console.error("Error al conectar ");
//   }
// }

// conexion()

// async function pipeline2() {
//   try {
//     const pipeline2 = [
//       {
//         $lookup: {
//           from: "estilista", //es desde donde me traigo la informacion
//           localField: "Id_estilista", //como se llama el id "donde me paro"
//           foreignField: "Id_estilista",
//           as: "Informacion_de_estilista",
//         },
//       },
//       {
//         $unwind:'$Informacion_de_estilista'
//       }
//     ];

//     const collection = client2.db("beautySoft").collection("servicios");
//     const result = await collection.aggregate(pipeline2).toArray();

//     console.log("Resultado del pipeline:", result);
//   } catch (error) {
//     console.error("Error al ejecutar el pipeline", error);
//   } finally {
//     await client2.close();
//   }
// }

// pipeline2();


