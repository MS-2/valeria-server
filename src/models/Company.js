import { Schema, model } from 'mongoose'

const companySchema = new Schema({
    empresa: {
        required: true,
        type: {},
    },
}, {
    timestamps: true,
    versionKey: false
})



export default model('company', companySchema)