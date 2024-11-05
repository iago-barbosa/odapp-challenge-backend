import express from "express";
import routes from "./routes/Routes";
import cors from 'cors';
import dotenv from 'dotenv';
import { conectar_database } from "./config/database";


dotenv.config();

const app = express();


const iniciar_servidor = async () => {
    try {
        await conectar_database();
        app.use(express.json());
        app.use(cors());
        app.use(routes);

        app.listen(process.env.PORT, () => console.warn(`Server is running on port ${process.env.PORT}`));
    } catch(error) {
        console.error("Erro ao inicar servidor: ", error);
    }
}

iniciar_servidor();