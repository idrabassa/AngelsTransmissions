import mongoose from "mongoose"
import colors from "colors"
const connectDB = async () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })

    // console.log(`MongoDB Connected : ${conn.connection.host}`);
    console.log(
      `MongoDB Connected: ${(await conn).connection.host}`.cyan.underline
    )
  } catch (error) {
    console.log(`Error ${error}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB
