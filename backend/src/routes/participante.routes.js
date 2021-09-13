import { Router } from 'express';
const urlRoutes = Router();

import ParticipanteController from '../controllers/ParticipanteController';

const controller = new ParticipanteController();

urlRoutes.post('/', controller.createOneRequest);
urlRoutes.get('/:id', controller.readOneRequest);
urlRoutes.put('/:id', controller.updateOneRequest);
urlRoutes.delete('/:id', controller.deleteOneRequest);

module.exports = urlRoutes;