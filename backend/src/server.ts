import dotenv from 'dotenv';
import express from "express";
import mongoose from "mongoose";
import routes from './routes/routes';

/* import routes from "./routes/routes.js" */
import cors from 'cors';

dotenv.config();
const app = express();
app.use(express.json())
app.use(cors());
app.use(routes);

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS
mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@backend.k11ic.mongodb.net/?retryWrites=true&w=majority&appName=Backend`)
  .then(() => {
    console.log(`Connected to MongoDB with user ${dbUser}`);
    
    app.listen(3000, () => {
      console.log(`Server listening on port 3000`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });

