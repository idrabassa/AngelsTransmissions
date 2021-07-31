import express from 'express'
import { getSeeusRoutes } from '../controllers/seeusSliderController.js'

const router = express.Router()

router.route('/').get(getSeeusRoutes)

export default router
