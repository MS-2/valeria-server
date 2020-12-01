import {Router} from 'express'
import * as control from '../controllers/rolecontroller'
import {verifyToken, isAdmin} from '../middlewares'

const router = Router();

router.delete('/:rolId',[verifyToken, isAdmin], control.deleterole)

router.get('/', control.getrole)

router.post('/',[verifyToken, isAdmin], control.createrole)
export default router;  