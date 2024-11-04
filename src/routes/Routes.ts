import { Request, Response, Router } from "express"; // Certifique-se de importar Request e Response
import Paciente from "../model/Paciente";
import Pacientes_excluidos from "../model/Pacientes_excluidos";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
    res.send("Api está rodando");
});

// Rota GET para listar todos os pacientes
routes.get("/lista-pacientes", async (req: Request, res: any) => {
    try {
        const pacientes =  await Paciente.find();
        return res.json(pacientes);
    } catch(error) {
        return res.status(500).json({ message: "Erro ao carregar os pacientes", error});
    }
});

// Rota PUT para atualizar os dados de um paciente especifico
routes.put("/atualizar-paciente/:id", async (req: Request, res: any) => {
    const { id } = req.params;
    const paciente_atualizado = req.body;
    try {
        
        const pacientes = await Paciente.findByIdAndUpdate(id, paciente_atualizado, { new: true });
        if (!pacientes) {
            return res.status(404).json({ message: 'Paciente não encontrado' });
        }

        return res.status(200).json(pacientes);
    } catch(error) {
        return res.status(500).json({ message: "Erro ao atualizar o paciente", error});
    }
});

// Rota POST para criar um novo paciente
routes.post("/novo-paciente", async (req: Request, res: any) => {
    try {
        const paciente = req.body;

        const new_paciente = await Paciente.create(paciente);
        return res.status(201).json(new_paciente);
    } catch (error) {
        return res.status(500).json({ message: "Erro ao criar o paciente", error });
    }
});

// Rota DELETE para deletar um paciente
routes.delete("/deletar-paciente/:id", async (req: Request, res: any) => {
    const { id } = req.params;

    try {
        const pacienteDeletado = await Paciente.findByIdAndDelete(id);
        
        if (!pacienteDeletado) {
            return res.status(404).json({ message: "Paciente não encontrado" });
        }
        
        return res.status(200).json({ message: "Paciente deletado com sucesso" });
    } catch(error) {
        return res.status(500).json({ message: "Erro ao deletar paciente", error});
    }
})

export default routes;
