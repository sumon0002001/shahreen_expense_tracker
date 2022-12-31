import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
const PORT = 4000;

const app = express();
app.use(cors())

mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://d3office:Dhaka123@cluster0.ghu3gng.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('Connected!')).catch((err) =>console.error(err));

app.get('/', (req, res) => {
    res.send("hello world")
})

app.listen(PORT, () => {
  console.log("server is running on http://localhost:4000");
})