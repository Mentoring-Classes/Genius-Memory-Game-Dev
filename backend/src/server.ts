import dotenv from 'dotenv';
import express from "express";
import mongoose from "mongoose";

/* import routes from "./routes/routes.js" */
import cors from 'cors';

dotenv.config();
const app = express();
/* app.use(routes) */
app.use(express.json())
app.use(cors());

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS
/* mongodb+srv://<db_username>:<db_password>@backend.k11ic.mongodb.net/?retryWrites=true&w=majority&appName=Backend */
mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@backend.k11ic.mongodb.net/?retryWrites=true&w=majority&appName=Backend`)
.then(()=>{
  console.log('Conectou com o mongoDB lá');
  app.listen(3000, () => {
    console.log(`Server listening on port 3000`);
  });
})
.catch((err) => {
  console.error('Erro ao conectar ao banco:', err);
});

app.get('/', (req, res) => {
  res.json('opa')
});

