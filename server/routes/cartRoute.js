import express from 'express';
import {getUserCart , updateItem , addItem} from '../controller/cartController.js'

const cartRouter = express.Router();

cartRouter.post('/update',updateItem);

cartRouter.post('/add',addItem);

cartRouter.get('get',getUserCart);

export default cartRouter;