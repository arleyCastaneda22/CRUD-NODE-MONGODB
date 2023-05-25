const { MongoClient } = require("mongodb");



const url ="mongodb+srv://admin:admin@cluster0.4tm3xjj.mongodb.net/?retryWrites=true&w=majority";

const cliente = new MongoClient(url);
// async function conexion(){
//     try {
//         await cliente.connect()
//     } catch (error) {
//         console.log("La conexión no fue posible", error);
//     }
// }

// conexion();

// async function filtro1(){
//     try {
//         const filtro=[
//             {
//                 $match: {
//                   $and: [
//                     {
//                       "nombre": /b/,
//                     },
//                     { "apellido": /^L/ },
//                   ],
//                 },
//               },
//               {
//                 $project: {
//                   nombre: true,
//                   apellido: true,
//                 },
//               },
//               {
//                 $limit: 2,
//               },
//               {
//                 $sort: {
//                   nombre: -1
//                 }
//               }
//         ]
//         const collection=  cliente.db('bautySoft').collection('estilista');
//         const result = await collection.aggregate(filtro).toArray();
//         console.log(result)

//     } catch (error) {
//         console.log("No se pudo hacer la agregaciòn", error)
//     }finally{
//         await cliente.close()
//     }
// }

// filtro1()

async function conexion(){
    try {
        await cliente.connect()
    } catch (error) {
        console.log("La conexión no fue posible", error);
    }
}

conexion();

async function filtro1(){
    try {
        const filtro=[
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
              },
              
              {
                $group: {
                  _id: "$servicios.nombre_servicio",
                    prome:{$avg:"$servicios.valor"}
                  
                }
              },
                  {
        $project: {
          "prome": true
        },
    },
        ]
        const collection= cliente.db('bautySoft').collection('citas');
        const result = await collection.aggregate(filtro).toArray();
        console.log(result)

    } catch (error) {
        console.log("No se pudo hacer la agregaciòn", error)
    }finally{
        await cliente.close()
    }
}

filtro1()

