import { Schema, model } from 'mongoose';

let fields = {
    name: { type: String, required: true, isvisible: true },
    email: { type: String, unique: true, required: true, isvisible: false },
    password: { type: String, default: null, isvisible: false },
    created_at: { type: Date, default: Date.now, isvisible: true },
    updated_at: { type: Date, default: null, isvisible: false },
};

let x  = Object.entries(fields).filter((field) => field[1].isvisible === true).map((arr) => [arr[0], 1]);
const UsersSchema = new Schema(fields, { versionKey: false });

export let selectedFields = Object.fromEntries(x);
export default model('Users', UsersSchema)