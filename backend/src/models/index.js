const { sequelize, test_connection } = require('../config/db');

export async function sincroniza_models() {
    let bd_criado = await test_connection()
    if (!bd_criado) 
    {
        const Usuario = require('./Usuario')
        const Evento = require('./Evento')
        const Participante = require('./Participante')

        sequelize.sync({ force: true });
    }
}

