import Evento from "../models/Evento";
export default class EventController {
    valid(req) {
        let erros = []
        let { nome, descricao, inicio, termino, status } = req.body;
        return erros;
    }
    createOneRequest = (req, res) => {
        let erros = this.valid(req);
        if (erros.length == 0) {
            Evento.create(req.body);
            res.status(201).json({ message: "Novo evento criado!" });
        }
        else
            res.status(400).json({ erros });
    }

    readOneRequest = (req, res) => {
        const {id} = req.query;
        let event = Evento.findByPk(id);
        if(event)
            res.status(200).json({  evento: event });
        else
            res.status(404).json({ message: 'Evento não encontrado' });
    }

    updateOneRequest = (req, res) => {
        let erros = this.valid(req);
        if (erros.length == 0) {
            Evento.update(req.body);
            res.status(301).json({ message: "Novo evento criado!" });
        }
        else
            res.status(404).json({ message: 'Evento não encontrado' });
    }

    deleteOneRequest = (req, res) => {
        let erros = this.valid(req);
        if (erros.length == 0) {
            let ev = new Evento(req.body);
            ev.destroy()
            res.status(301).json({ message: "Novo evento criado!" });
        }
        else
            res.status(404).json({ message: 'Evento não encontrado' });
    }
}