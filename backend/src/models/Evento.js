import Sequelize from 'sequelize'
import { sequelize } from '../config/db'

const Evento = sequelize.define('events', {
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
    descricao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    inicio: {
        type: Sequelize.DATE,
    },
    termino: {
        type: Sequelize.DATE,
    },
    status:{
        type: Sequelize.CHAR,
    }

})
export default Evento;

// import Evento from './evento'
// Usuario.belongsToMany(Evento, { through: 'evento_participante' });