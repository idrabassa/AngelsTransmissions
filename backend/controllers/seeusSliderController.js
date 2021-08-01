import asyncHandler from 'express-async-handler'
import Seeus from '../models/seeusModel.js'

import mongoose from 'mongoose'

// @desc    Get all images in see us
// @route   GET /api/seeus
// @access  Private
const getSeeusRoutes = asyncHandler(async (req, res) => {
  const seeus = await Seeus.find({})
  res.json(seeus)
})

// @desc    Register a new images in see us
// @route   POST /api/seeus
// @access  Public
const setSeeusRoutes = asyncHandler(async (req, res) => {
  const { route } = req.body

  const image = await Seeus.create({ route })

  if (image) {
    res.status(201).json({
      _id: image._id,
      route: route,
    })
  } else {
    res.status(400)
    throw new Error('Invalid Image Data')
  }
})
// @desc    Delete images in see us
// @route   DELETE /api/seeus/:id
// @access  Private/Admin
const deleteSeeusRoutes = asyncHandler(async (req, res) => {
  const image = await Seeus.findById(req.params.id)

  if (image) {
    await image.remove()
    res.json({
      message: 'Image removed',
    })
  } else {
    res.status(404)
    throw new Error('Image not found')
  }
})

export { getSeeusRoutes, setSeeusRoutes, deleteSeeusRoutes }
