import mongoose from "mongoose";

const TagSchema = new mongoose.Schema({
    key:{
        type: Number,
        required: true
    },
    label:{
        type: String,
        required: true
    }
});

const PublicacionSchema = new mongoose.Schema({
    usuario:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Usuario',
        required: true
    },
    titulo:{
        type: String,
        required: true
    },
    contenido:{
        type: String,
        required: true
    },
    tags:{
        type:[TagSchema],
        required: true
    },
    fecha:{
        type: Date,
        required: true
    },
    imagen:{
        type: String,
        required:false
    }
})

export const Publicacion = mongoose.model('Publicacion', PublicacionSchema);