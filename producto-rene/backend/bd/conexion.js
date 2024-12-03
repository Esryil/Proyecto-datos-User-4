const admin = require("firebase-admin");
const keys=require("../keys.json");

admin.initializeApp({
    credential:admin.credential.cert(keys)
});

const bd=admin.firestore();
const usuarios=bd.collection("proyecto-reneBD");
const productos=bd.collection("producto-reneBD");
//const ventas=bd.collection("venta-reneBD");
module.exports={
    usuarios,
    productos//,
    //ventas
}

//console.log(usuarios);