require('dotenv').config();
import express, { json } from 'express';
import { sincroniza_models } from './models';
const app = express();
app.use(json());

//https://www.luiztools.com.br/post/tutorial-de-crud-com-node-js-sequelize-e-mysql/

//create tables
async function create() {
    // await Usuario.sync({ force: true })
    await sincroniza_models();
    console.log("Banco sincronizado");
}
create()

//Rotas
import userRouter from './routes/user.routes';
import eventRouter from './routes/event.routes';
import participantesRouter from './routes/participante.routes';
app.use('/users', userRouter);
app.use('/events', eventRouter);
app.use('/participants', participantesRouter);

app.get('/', (req, res) => {
    res.status(200).json({ message: "Hello from my-express-app!!" });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});