const express = require ( "express" );
const routes = express.Router();

const ProductController = require ( "./controllers/ProdutosController" );
const VendedorController = require ( "./controllers/VendedorController" );


routes.get( "/produtos", ProductController.index );
routes.get( "/produtos/:id", ProductController.show );
routes.post( "/produtos", ProductController.store );
routes.put( "/produtos/:id", ProductController.update );
routes.delete( "/produtos/:id", ProductController.destroy );

routes.get( "/vendedores", VendedorController.index );
routes.get( "/vendedores/:id", VendedorController.show );
routes.post( "/vendedores", VendedorController.store );
routes.put( "/vendedores/:id", VendedorController.update );
routes.delete( "/vendedores/:id", VendedorController.destroy );




module.exports = routes; 