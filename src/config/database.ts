import mongoose, { ConnectOptions } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const mongoURI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB_NAME}?${process.env.MONGO_OPTIONS}`;

export const conectar_database =  async():Promise<void> => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Conectado ao MongoDB");
    } catch(error) {
        console.error("Erro ao se connectar ao MongoDB: "+ error);
        process.exit(1);
    }
}