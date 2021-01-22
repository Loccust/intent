import Router from 'express';
import CategoryController from './controllers/CategoryController';
import TaskController from './controllers/TaskController';

const router = Router();
const categoryController = new CategoryController();
const taskController = new TaskController();


router.get('/category', categoryController.getCategories);
router.post('/category/insert', categoryController.setCategory);
router.delete('/category', categoryController.deleteCategory);
router.get('/task', taskController.getTasksByCategory);
router.post('/task/insert', taskController.setTask);
router.put('/task/status', taskController.changeStatus);
 
export default router;