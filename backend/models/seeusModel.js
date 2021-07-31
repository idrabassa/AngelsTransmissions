import mongoose from 'mongoose'

const seeusSchema = mongoose.Schema(
  {
    route: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const Seeus = mongoose.model('Seeus', seeusSchema)

export default Seeus
