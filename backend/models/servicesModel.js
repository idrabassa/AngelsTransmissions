import mongoose from 'mongoose'

const servicesSchema = mongoose.Schema(
  {
    route: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const Services = mongoose.model('Services', servicesSchema)

export default Services
