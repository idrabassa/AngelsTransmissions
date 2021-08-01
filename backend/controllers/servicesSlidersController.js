import asyncHandler from 'express-async-handler'
import Services from '../models/servicesModel.js'

// @desc    Get all services images
// @route   GET /api/services
// @access  Private
const getServicesRoutes = asyncHandler(async (req, res) => {
  const services = await Services.find({})
  res.json(services)
})

// @desc    Register a new images in services
// @route   POST /api/services
// @access  Public
const setServicesRoutes = asyncHandler(async (req, res) => {
  const { route } = req.body

  const image = await Services.create({ route })

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
const deleteServicesRoutes = asyncHandler(async (req, res) => {
  const image = await Services.findById(req.params.id)

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

export { getServicesRoutes, setServicesRoutes, deleteServicesRoutes }
