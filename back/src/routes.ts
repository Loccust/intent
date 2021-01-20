import Router from 'express';
import CategoryController from './controllers/CategoryController';
import TaskController from './controllers/TaskController';

const router = Router();
const categoryController = new CategoryController();
const taskController = new TaskController();


router.get('/category', categoryController.getCategories);
router.post('/category', categoryController.setCategory);
router.get('/task', taskController.getTasksByCategory);
router.post('/task', taskController.setTask);
router.put('/taskstatus', taskController.changeStatus)
 
export default router;