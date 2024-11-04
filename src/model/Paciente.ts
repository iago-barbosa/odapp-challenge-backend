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
        type: Date, 
        default: Date.now
    },
	cidade: {
        type: String,
        required: true
    },
	estado: {
        type: String,
        required: true
    }
});

export default mongoose.model("Paciente", paciente_schema);