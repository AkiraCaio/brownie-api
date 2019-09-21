const mongoose = require( "mongoose" );

const Vendedor = mongoose.model( "Vendedor" );

module.exports = {
	async index( req,res ) {
		const vendedores = await Vendedor.find();
    
		return res.json( vendedores );
	},

	async show( req,res ) {
		const vendedor = await Vendedor.findById( req.params.id );

		return res.json( vendedor );
	},


	async store( req,res ) {
		const vendedor = await Vendedor.create( req.body );

		return res.json( vendedor );
	},

	async update ( req,res ) {
		const vendedor = await Vendedor.findByIdAndUpdate( req.params.id, req.body, { new: true } );
		// sem  o new ele retornaria a informação sem a atualização

		return res.json( vendedor );
	},

	async destroy( req,res ){
		await Vendedor.findByIdAndRemove( req.params.id );

		return res.send();
	}
};