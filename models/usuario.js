	'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let registrar = sequelize.define('registrar',{
		idUsuario: {
			field: 'idUsuario',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		usuario: {
			field: 'usuario',
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			field: 'email',
			type: DataTypes.STRING,
			allowNull: false
		},
		senha: {
			field: 'senha',
			type: DataTypes.STRING,
			allowNull: false
		},
		telefone: {
			field: 'telefone',
			type: DataTypes.STRING,
			allowNull: true
		}
	}, 
	{
		tableName: 'registrar', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return registrar;
};
