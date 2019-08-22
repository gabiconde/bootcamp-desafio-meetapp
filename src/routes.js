import { Router } from 'express'
import UserController  from './app/controllers/UserController';

const routes = new Router();

routes.get('/users', (req, res) => res.json({
  msg: 'Hello World'
}))

routes.post('/users', UserController.store)

export default routes;
