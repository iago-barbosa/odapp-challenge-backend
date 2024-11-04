import mongoose from "mongoose";

const paciente_schema = new mongoose.Schema({
    id: Number,
	nome: {
        type: String,
        required: true
    },
	idade: {
        type: Number,
        required: true
    },
	dataCadastro: {
        type: Date
    },
	cidade: {
        type: String,
        required: true
    },
	estado: {
        type: String,
        required: true
    },
    dataExclusao: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("Pacientes_excluidos", paciente_schema);