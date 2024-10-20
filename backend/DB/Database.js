import mongoose from "mongoose";

export const connectDB = async (req, res) => {
    const db = "mongodb+srv://vishaal19:master19@cluster0.l7uzj3v.mongodb.net/?retryWrites=true&w=majority&dbname=expensetrack";

    const {connection} = await mongoose.connect(db, { useNewUrlParser: true });

    console.log(`MongoDB Connected to ${connection.host}`);

}