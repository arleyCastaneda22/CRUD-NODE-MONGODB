// const { MongoClient } = require("mongodb");

// const { faker } = require("@faker-js/faker");

// const url =
//   "mongodb+srv://admin:admin@cluster0.4tm3xjj.mongodb.net/?retryWrites=true&w=majority";


//Función de insertOne para la colección estilista
// async function crearPropiedad(nuevaPropiedad) {
//     const cliente = new MongoClient(url);
//     try {
//         await cliente.connect();
//         const result= await cliente.db('beautySoft').collection('estilista').insertOne(nuevaPropiedad);

//         console.log(result);
//         console.log(`Se creo una nueva propiedad: ${result.insertedId}`);

//     } catch (e) {
//         console.error(e);
//     }finally{

//         await cliente.close();
//     }

// }
// crearPropiedad({
//             Id_estilista: faker.number.int({min:1,max:2000}),
//             nombre:faker.person.firstName(),
//             apellido:faker.person.lastName(),
//             email:faker.internet.email(),
//             estado:faker.helpers.arrayElement(["Activo", "Inactivo"],1,1)
//      }
// )

//Función de insertMany para la colección de estilista
// async function crearVariasPropiedades(nuevasPropiedades) {
//   const cliente = new MongoClient(url);
//   try {
//     await cliente.connect();
//     const result = await cliente
//       .db("beautySoft")
//       .collection("estilista")
//       .insertMany(nuevasPropiedades);

//     console.log(result);
//     console.log(`Se creo una nueva propiedad: ${result.insertedId}`);
//   } catch (e) {
//     console.error(e);
//   } finally {
//     await cliente.close();
//   }
// }

// for (let i = 0; i < 200; i++) {
//   crearVariasPropiedades([
//     {
//       Id_estilista: faker.number.int({ min: 1, max: 2000 }),
//       nombre: faker.person.firstName(),
//       apellido: faker.person.lastName(),
//       email: faker.internet.email(),
//       estado: faker.helpers.arrayElement(["Activo", "Inactivo"], 1, 1),
//     },
//     {
//       Id_estilista: faker.number.int({ min: 1, max: 2000 }),
//       nombre: faker.person.firstName(),
//       apellido: faker.person.lastName(),
//       email: faker.internet.email(),
//       estado: faker.helpers.arrayElement(["Activo", "Inactivo"], 1, 1),
//     },
//     {
//         Id_estilista: faker.number.int({ min: 1, max: 2000 }),
//         nombre: faker.person.firstName(),
//         apellido: faker.person.lastName(),
//         email: faker.internet.email(),
//         estado: faker.helpers.arrayElement(["Activo", "Inactivo"], 1, 1),
//       },
//       {
//         Id_estilista: faker.number.int({ min: 1, max: 2000 }),
//         nombre: faker.person.firstName(),
//         apellido: faker.person.lastName(),
//         email: faker.internet.email(),
//         estado: faker.helpers.arrayElement(["Activo", "Inactivo"], 1, 1),
//       },
//       {
//         Id_estilista: faker.number.int({ min: 1, max: 2000 }),
//         nombre: faker.person.firstName(),
//         apellido: faker.person.lastName(),
//         email: faker.internet.email(),
//         estado: faker.helpers.arrayElement(["Activo", "Inactivo"], 1, 1),
//       },
//       {
//         Id_estilista: faker.number.int({ min: 1, max: 2000 }),
//         nombre: faker.person.firstName(),
//         apellido: faker.person.lastName(),
//         email: faker.internet.email(),
//         estado: faker.helpers.arrayElement(["Activo", "Inactivo"], 1, 1),
//       },
//       {
//         Id_estilista: faker.number.int({ min: 1, max: 2000 }),
//         nombre: faker.person.firstName(),
//         apellido: faker.person.lastName(),
//         email: faker.internet.email(),
//         estado: faker.helpers.arrayElement(["Activo", "Inactivo"], 1, 1),
//       },
//       {
//         Id_estilista: faker.number.int({ min: 1, max: 2000 }),
//         nombre: faker.person.firstName(),
//         apellido: faker.person.lastName(),
//         email: faker.internet.email(),
//         estado: faker.helpers.arrayElement(["Activo", "Inactivo"], 1, 1),
//       },
//       {
//         Id_estilista: faker.number.int({ min: 1, max: 2000 }),
//         nombre: faker.person.firstName(),
//         apellido: faker.person.lastName(),
//         email: faker.internet.email(),
//         estado: faker.helpers.arrayElement(["Activo", "Inactivo"], 1, 1),
//       },
//       {
//         Id_estilista: faker.number.int({ min: 1, max: 2000 }),
//         nombre: faker.person.firstName(),
//         apellido: faker.person.lastName(),
//         email: faker.internet.email(),
//         estado: faker.helpers.arrayElement(["Activo", "Inactivo"], 1, 1),
//       },
//   ]);
// }
// Función para insertOne de la colección servicios
// async function crearServicio(nuevoServicio){
//     const cliente = new MongoClient(url);
//     try {
//         await cliente.connect()
//         const result = await cliente.db('beautySoft').collection('servicios').insertOne(nuevoServicio)
//         console.log(result);
//         console.log(`Se creo una nueva propiedad: ${result.insertedId}`);

//     } catch (e) {
//         console.log(e)
//     }
//     finally{
//         await cliente.close()
//     }
// }

//     crearServicio({
//         Id_servicio: faker.number.int({min:1, max:2000}),
//         nombre_servicio:faker.lorem.sentence(),
//         duracion:faker.date.anytime(),
//         valor: faker.number.int({min:10000,max:1000000}),
//         estado:faker.helpers.arrayElement(["Inactivo", "Activo"],1,1),
//         Id_estilista: faker.number.int({ min: 1, max: 2000 })
//     })

//Función para insertMany de la colección servicios
// async function crearNuevosServicios(nuevoServicios){
//     const cliente = new MongoClient(url);
//     try {
//         await cliente.connect()
//         const result = await cliente
//         .db('beautySoft')
//         .collection('servicios')
//         .insertMany(nuevoServicios)
//         console.log(result);
//         console.log(`Se creo una nueva propiedad: ${result.insertedId}`);

//     } catch (e) {
//         console.log(e)
//     }
//     finally{
//         await cliente.close()
//     }
// }

// for(let i =0;i<200;i++){
//     crearNuevosServicios([{
//         Id_servicio: faker.number.int({min:1, max:2000}),
//         nombre_servicio:faker.lorem.sentence(),
//         duracion:faker.date.anytime(),
//         valor: faker.number.int({min:10000,max:1000000}),
//         estado:faker.helpers.arrayElement(["Inactivo", "Activo"],1,1),
//         Id_estilista: faker.number.int({ min: 1, max: 2000 })
//     },
//     {
//         Id_servicio: faker.number.int({min:1, max:2000}),
//         nombre_servicio:faker.lorem.sentence(),
//         duracion:faker.date.anytime(),
//         valor: faker.number.int({min:10000,max:1000000}),
//         estado:faker.helpers.arrayElement(["Inactivo", "Activo"],1,1),
//         Id_estilista: faker.number.int({ min: 1, max: 2000 })
//     },
//     {
//         Id_servicio: faker.number.int({min:1, max:2000}),
//         nombre_servicio:faker.lorem.sentence(),
//         duracion:faker.date.anytime(),
//         valor: faker.number.int({min:10000,max:1000000}),
//         estado:faker.helpers.arrayElement(["Inactivo", "Activo"],1,1),
//         Id_estilista: faker.number.int({ min: 1, max: 2000 })
//     },
//     {
//         Id_servicio: faker.number.int({min:1, max:2000}),
//         nombre_servicio:faker.lorem.sentence(),
//         duracion:faker.date.anytime(),
//         valor: faker.number.int({min:10000,max:1000000}),
//         estado:faker.helpers.arrayElement(["Inactivo", "Activo"],1,1),
//         Id_estilista: faker.number.int({ min: 1, max: 2000 })
//     },
//     {
//         Id_servicio: faker.number.int({min:1, max:2000}),
//         nombre_servicio:faker.lorem.sentence(),
//         duracion:faker.date.anytime(),
//         valor: faker.number.int({min:10000,max:1000000}),
//         estado:faker.helpers.arrayElement(["Inactivo", "Activo"],1,1),
//         Id_estilista: faker.number.int({ min: 1, max: 2000 })
//     },
//     {
//         Id_servicio: faker.number.int({min:1, max:2000}),
//         nombre_servicio:faker.lorem.sentence(),
//         duracion:faker.date.anytime(),
//         valor: faker.number.int({min:10000,max:1000000}),
//         estado:faker.helpers.arrayElement(["Inactivo", "Activo"],1,1),
//         Id_estilista: faker.number.int({ min: 1, max: 2000 })
//     },
//     {
//         Id_servicio: faker.number.int({min:1, max:2000}),
//         nombre_servicio:faker.lorem.sentence(),
//         duracion:faker.date.anytime(),
//         valor: faker.number.int({min:10000,max:1000000}),
//         estado:faker.helpers.arrayElement(["Inactivo", "Activo"],1,1),
//         Id_estilista: faker.number.int({ min: 1, max: 2000 })
//     },
//     {
//         Id_servicio: faker.number.int({min:1, max:2000}),
//         nombre_servicio:faker.lorem.sentence(),
//         duracion:faker.date.anytime(),
//         valor: faker.number.int({min:10000,max:1000000}),
//         estado:faker.helpers.arrayElement(["Inactivo", "Activo"],1,1),
//         Id_estilista: faker.number.int({ min: 1, max: 2000 })
//     },
//     {
//         Id_servicio: faker.number.int({min:1, max:2000}),
//         nombre_servicio:faker.lorem.sentence(),
//         duracion:faker.date.anytime(),
//         valor: faker.number.int({min:10000,max:1000000}),
//         estado:faker.helpers.arrayElement(["Inactivo", "Activo"],1,1),
//         Id_estilista: faker.number.int({ min: 1, max: 2000 })
//     },
//     {
//         Id_servicio: faker.number.int({min:1, max:2000}),
//         nombre_servicio:faker.lorem.sentence(),
//         duracion:faker.date.anytime(),
//         valor: faker.number.int({min:10000,max:1000000}),
//         estado:faker.helpers.arrayElement(["Inactivo", "Activo"],1,1),
//         Id_estilista: faker.number.int({ min: 1, max: 2000 })
//     },
// ])
// }
//Función para insertOne de la colección citas
// async function citas(nuevaCita){
//   const cliente = new MongoClient(url);
//   try {
//     await cliente.connect();
//     const result = await cliente.db('beautySoft').collection('citas').insertOne(nuevaCita);
//     console.log(result);
//     console.log(`Se creo una nueva propiedad: ${result.insertedId}`);
//   } catch (error) {
//     console.log(error);
//   }finally{
//     await cliente.close();
//   }
// }

// citas({
//     Id_cita:faker.number.int({min:1, max:2000}),
//     nombre: faker.person.firstName(),
//     apellido: faker.person.lastName(),
//     email: faker.internet.email(),
//     fecha_y_hora:faker.date.anytime(),
//     estado: faker.helpers.arrayElement(["Inactivo", "Activo"],1,1),
//     Id_estilista:faker.number.int({ min: 1, max: 2000 }),
//     Id_servicio:faker.number.int({min:1, max:2000}),
// })

//Función para insertMany de la colección citas
// async function citas(nuevasCitas){
//   const cliente = new MongoClient(url);
//   try {
//     await cliente.connect();
//     const result = await cliente.db('beautySoft').collection('citas').insertMany(nuevasCitas);
//     console.log(result);
//     console.log(`Se creo una nueva propiedad: ${result.insertedId}`);
//   } catch (error) {
//     console.log(error);
//   }finally{
//     await cliente.close();
//   }
// }

// for(let i=0; i<200; i++){
//   citas([{
//     Id_cita:faker.number.int({min:1, max:2000}),
//     nombre: faker.person.firstName(),
//     apellido: faker.person.lastName(),
//     email: faker.internet.email(),
//     fecha_y_hora:faker.date.anytime(),
//     estado: faker.helpers.arrayElement(["Inactivo", "Activo"],1,1),
//     Id_estilista:faker.number.int({ min: 1, max: 2000 }),
//     Id_servicio:faker.number.int({min:1, max:2000}),
// },
// {
//   Id_cita:faker.number.int({min:1, max:2000}),
//   nombre: faker.person.firstName(),
//   apellido: faker.person.lastName(),
//   email: faker.internet.email(),
//   fecha_y_hora:faker.date.anytime(),
//   estado: faker.helpers.arrayElement(["Inactivo", "Activo"],1,1),
//   Id_estilista:faker.number.int({ min: 1, max: 2000 }),
//   Id_servicio:faker.number.int({min:1, max:2000}),
// },
// {
//   Id_cita:faker.number.int({min:1, max:2000}),
//   nombre: faker.person.firstName(),
//   apellido: faker.person.lastName(),
//   email: faker.internet.email(),
//   fecha_y_hora:faker.date.anytime(),
//   estado: faker.helpers.arrayElement(["Inactivo", "Activo"],1,1),
//   Id_estilista:faker.number.int({ min: 1, max: 2000 }),
//   Id_servicio:faker.number.int({min:1, max:2000}),
// },
// {
//   Id_cita:faker.number.int({min:1, max:2000}),
//   nombre: faker.person.firstName(),
//   apellido: faker.person.lastName(),
//   email: faker.internet.email(),
//   fecha_y_hora:faker.date.anytime(),
//   estado: faker.helpers.arrayElement(["Inactivo", "Activo"],1,1),
//   Id_estilista:faker.number.int({ min: 1, max: 2000 }),
//   Id_servicio:faker.number.int({min:1, max:2000}),
// },
// {
//   Id_cita:faker.number.int({min:1, max:2000}),
//   nombre: faker.person.firstName(),
//   apellido: faker.person.lastName(),
//   email: faker.internet.email(),
//   fecha_y_hora:faker.date.anytime(),
//   estado: faker.helpers.arrayElement(["Inactivo", "Activo"],1,1),
//   Id_estilista:faker.number.int({ min: 1, max: 2000 }),
//   Id_servicio:faker.number.int({min:1, max:2000}),
// },
// {
//   Id_cita:faker.number.int({min:1, max:2000}),
//   nombre: faker.person.firstName(),
//   apellido: faker.person.lastName(),
//   email: faker.internet.email(),
//   fecha_y_hora:faker.date.anytime(),
//   estado: faker.helpers.arrayElement(["Inactivo", "Activo"],1,1),
//   Id_estilista:faker.number.int({ min: 1, max: 2000 }),
//   Id_servicio:faker.number.int({min:1, max:2000}),
// },
// {
//   Id_cita:faker.number.int({min:1, max:2000}),
//   nombre: faker.person.firstName(),
//   apellido: faker.person.lastName(),
//   email: faker.internet.email(),
//   fecha_y_hora:faker.date.anytime(),
//   estado: faker.helpers.arrayElement(["Inactivo", "Activo"],1,1),
//   Id_estilista:faker.number.int({ min: 1, max: 2000 }),
//   Id_servicio:faker.number.int({min:1, max:2000}),
// },
// {
//   Id_cita:faker.number.int({min:1, max:2000}),
//   nombre: faker.person.firstName(),
//   apellido: faker.person.lastName(),
//   email: faker.internet.email(),
//   fecha_y_hora:faker.date.anytime(),
//   estado: faker.helpers.arrayElement(["Inactivo", "Activo"],1,1),
//   Id_estilista:faker.number.int({ min: 1, max: 2000 }),
//   Id_servicio:faker.number.int({min:1, max:2000}),
// },
// {
//   Id_cita:faker.number.int({min:1, max:2000}),
//   nombre: faker.person.firstName(),
//   apellido: faker.person.lastName(),
//   email: faker.internet.email(),
//   fecha_y_hora:faker.date.anytime(),
//   estado: faker.helpers.arrayElement(["Inactivo", "Activo"],1,1),
//   Id_estilista:faker.number.int({ min: 1, max: 2000 }),
//   Id_servicio:faker.number.int({min:1, max:2000}),
// },
// {
//   Id_cita:faker.number.int({min:1, max:2000}),
//   nombre: faker.person.firstName(),
//   apellido: faker.person.lastName(),
//   email: faker.internet.email(),
//   fecha_y_hora:faker.date.anytime(),
//   estado: faker.helpers.arrayElement(["Inactivo", "Activo"],1,1),
//   Id_estilista:faker.number.int({ min: 1, max: 2000 }),
//   Id_servicio:faker.number.int({min:1, max:2000}),
// }])
// }