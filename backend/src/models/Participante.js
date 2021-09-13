import Sequelize from 'sequelize'
import { sequelize } from '../config/db'
import Usuario from './Usuario';
import Evento from './Evento';

const Participante = sequelize.define('users_events', {
    aceito_em: {
        type: Sequelize.DATE
    },
    user_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Usuario,
            key: "id"
        }
    },
    event_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Evento,
            key: "id"
        }
    }
});
Participante.belongsTo(Usuario, { as: 'Usuario', foreignKey: 'user_id' });
Participante.belongsTo(Evento, { as: 'Evento', foreignKey: 'event_id' });
export default Participante;