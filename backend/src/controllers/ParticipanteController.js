export default class ParticipanteController {
    valid(req){
        let erros = []
        return erros;
    }
    createOneRequest = (req, res) => {
        let erros = valid(req);
        const {} = req.body; 
        res.status(201).json({ message: "New resource created!" });
    }

    readOneRequest = (req, res) => {
        res.status(302).json({  message: "Resource found!" });
    }

    updateOneRequest = (req, res) => {
        res.status(301).json({ message: "Resource updated!" });
    }

    deleteOneRequest = (req, res) => {
        res.status(202).json({ message: "Resource deleted!" });
    }
}