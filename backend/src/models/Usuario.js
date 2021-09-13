import Sequelize from 'sequelize'
import { sequelize } from '../config/db'

const Usuario = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

export default Usuario;

// import Evento from './evento'
// Usuario.belongsToMany(Evento, { through: 'evento_participante' });