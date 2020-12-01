import {Router} from 'express'
import * as control from '../controllers/usercontroller'
import {verifyToken, isAdmin, checkDuplicateUsernameOrEmail} from '../middlewares'

const router = Router();

router.get('/:userId', control.getuser)

router.get('/', control.getusers)

router.post('/',[verifyToken, isAdmin, checkDuplicateUsernameOrEmail], control.createuser)

router.delete('/:userId',[verifyToken, isAdmin], control.deleteuser)

router.patch('/:userId',[verifyToken, isAdmin], control.addroles)

router.patch('/remove/:userId',[verifyToken, isAdmin], control.remoroles)

router.patch('/adduser/:userId',[verifyToken, isAdmin], control.adduser)
export default router;  