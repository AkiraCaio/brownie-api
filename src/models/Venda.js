const mongoose = require( "mongoose" );

const VendaSchema = new mongoose.Schema( {
	nome:{
		type: String,
		required: true,
	},
	produtos_em_posse: [ { 
		type: mongoose.Types.ObjectId, ref: "Produto",
		required: false,
	} ],
} );

mongoose.model( "Venda", VendaSchema );