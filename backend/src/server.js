require('dotenv').config();
const express = require('express');
const {sincroniza_models} = require('./models');
const app = express();
app.use(express.json());

//create tables
async function create() {
    // await Usuario.sync({ force: true })
    await sincroniza_models();
    console.log("Banco sincronizado");
}
create()

//Rotas
const userRouter = require('./routes/user.routes');
const eventRouter = require('./routes/event.routes');
app.use('/users', userRouter);
app.use('/events', eventRouter);

app.get('/', (req, res) => {
    res.status(200).json({ message: "Hello from my-express-app!!" });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});