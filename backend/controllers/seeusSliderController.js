import asyncHandler from 'express-async-handler'
import Seeus from '../models/seeusModel.js'

import mongoose from 'mongoose'

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getSeeusRoutes = asyncHandler(async (req, res) => {
  const seeus = await Seeus.find({})
  res.json(seeus)
})

export { getSeeusRoutes }
