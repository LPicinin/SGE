import Usuario from "../models/Usuario";
import { encryptText } from '../config/cryptography';


export default class UserController {
    valid(req) {
        let erros = []
        return erros;
    }
    createOneRequest = (req, res) => {
        let erros = this.valid(req);
        if (erros.length == 0) {
            let { nome, senha } = req.body;
            senha = encryptText(senha);
            let user = Usuario.create({ nome, senha });
            res.status(201).json({ message: "Novo usuario criado!" });
        }
        else
            res.status(400).json({ erros });
    }

    readOneRequest = (req, res) => {
        res.status(302).json({ message: "Resource found!" });
    }

    updateOneRequest = (req, res) => {
        res.status(301).json({ message: "Resource updated!" });
    }

    deleteOneRequest = (req, res) => {
        res.status(202).json({ message: "Resource deleted!" });
    }
}