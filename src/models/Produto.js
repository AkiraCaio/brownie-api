const mongoose = require( "mongoose" );

const ProdutoSchema = new mongoose.Schema( {
	tipo:{
		type: String,
		enum: [ "BROWNIE", "BROWNIE_POTE" ],
		required: true,
	},
	sabor: {
		type: String,
		enum: [ "LEITE_NINHO", "BRIGADEIRO", "TRADICIONAL", "DOCE_LEITE" ],
		required: true,
	},
	valor: {
		type: mongoose.Types.Decimal128,
		required: true,
	},
	validade: {
		type: Date,
		required: true,
	},
} );

mongoose.model( "Produto", ProdutoSchema );