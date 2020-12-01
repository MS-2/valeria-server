import { Router } from 'express';
import * as control from '../controllers/companycontroller.js';
import { verifyToken, isAdmin } from '../middlewares'
const router = Router();

router.post('/', [verifyToken, isAdmin], control.createCompany)

router.get('/:productId', control.getcompany)

router.get('/', control.getcompanies)

router.patch('/:productId', [verifyToken, isAdmin], control.updateproduct)

router.delete('/:productId', [verifyToken, isAdmin], control.deleteproduct)


export default router;