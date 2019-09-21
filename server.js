const express = require( "express" );
const cors = require( "cors" );
const mongoose = require( "mongoose" );
const requireDir = require( "require-dir" );
const PORT = process.env.PORT || 5000;

//iniciando o APP
const app = express();
app.use( express.json() ); //Permite que aplicação trabalhe com o formato json
app.use( cors() );

//Iniciando o DB
mongoose.connect( "mongodb://localhost:27017/brownieapi", {
	useNewUrlParser: true,
	useUnifiedTopology: true
} );
requireDir( "./src/models" );

//Rotas
app.use( "/", require( "./src/routes" ) );

app.listen( PORT, () => console.log( `Listening on ${ PORT }` ) );