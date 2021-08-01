import express from 'express'
import {
  getSeeusRoutes,
  setSeeusRoutes,
  deleteSeeusRoutes,
} from '../controllers/seeusSliderController.js'

const router = express.Router()

router.route('/').get(getSeeusRoutes)
router.route('/').post(setSeeusRoutes)
router.route('/:id').delete(deleteSeeusRoutes)

export default router
