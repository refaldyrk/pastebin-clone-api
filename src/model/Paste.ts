import {model, Schema} from 'mongoose'

const paste = new Schema({
    paste_id: {
        require: true,
        type: String,
    },
    text: {
        require: true,
        type: String,
    }
}, {
    timestamps: true
})

export const PasteModel = model("paste", paste)