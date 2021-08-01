import express from 'express'
import {
  getServicesRoutes,
  setServicesRoutes,
  deleteServicesRoutes,
} from '../controllers/servicesSlidersController.js'

const router = express.Router()

router.route('/').get(getServicesRoutes)
router.route('/').post(setServicesRoutes)
router.route('/:id').delete(deleteServicesRoutes)

export default router
