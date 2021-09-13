import { Router } from 'express';
const urlRoutes = Router();

import EventController from '../controllers/EventController';

const controller = new EventController();

urlRoutes.post('/', controller.createOneRequest);
urlRoutes.get('/:id', controller.readOneRequest);
urlRoutes.put('/:id', controller.updateOneRequest);
urlRoutes.delete('/:id', controller.deleteOneRequest);

module.exports = urlRoutes;