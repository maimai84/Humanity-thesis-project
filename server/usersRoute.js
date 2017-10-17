import express , {router} from 'express';
import do from './controllers.js';
const router = router();

router.route('/someEndPoint')
	.get(do.someFuncInsideControllers)
	.post(do.anotherFunc)


export default router;