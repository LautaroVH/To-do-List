import express from 'express';
import router from "./routes/index.js"
import db from "./config/db.js"
import dotenv from "./config/db.js"

const app = express();
//conectar a la bd
db.authenticate()
    .then( () => console.log("Data base conected"))
    .catch( error => console.log(error));


//Definir puerto 

//habilitar PUG
app.set("view engine", 'pug');

//Obtener año actual
app.use ( (req,res,next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    next();
})
//agregar body parseerpara leer los datos del form
app.use(express.urlencoded({extended: true}));

//definir la carpeta public
app.use(express.static("public"));
//agregar Router
app.use("/", router);

// const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 3000;


app.listen(port,  () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});

