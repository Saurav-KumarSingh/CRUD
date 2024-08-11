import express from 'express'
import { create,get,Updated,Deleted} from '../controller/userControl.js'
const router=express.Router();

router.post('/create',create)
router.get('/get',get)
router.put('/update/:id',Updated)
router.delete('/delete/:id',Deleted)



export default router;