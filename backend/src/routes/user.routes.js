import { Router } from 'express';
const urlRoutes = Router();

import UserController from '../controllers/UserController';

const controller = new UserController();

urlRoutes.post('/', controller.createOneRequest);
urlRoutes.get('/:id', controller.readOneRequest);
urlRoutes.put('/:id', controller.updateOneRequest);
urlRoutes.delete('/:id', controller.deleteOneRequest);

module.exports = urlRoutes;