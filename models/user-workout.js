const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User_workout extends Model {}

User_workout.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		//FK to user id
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'user',
				key: 'id',
			},
		},
		workout_id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'workout',
				key: 'id',
			},
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'User_workout',
	}
);

module.exports = User_workout;