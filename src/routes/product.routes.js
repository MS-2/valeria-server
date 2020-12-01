import {Router} from 'express'
import * as control from '../controllers/product.controller'
import {verifyToken, isAdmin} from '../middlewares'
const router = Router();

router.post('/',[verifyToken,isAdmin], control.createProduct)

router.get('/:productId', control.getproduct)

router.get('/', control.getproducts)

router.patch('/:productId',[verifyToken, isAdmin], control.updateproduct)

router.delete('/:productId',[verifyToken, isAdmin], control.deleteproduct)


export default router;