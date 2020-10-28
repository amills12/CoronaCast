import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    id: { type: String, required: true },
    state: { type: String, required: true },
    county:{ type: String, required: true },
});

export default mongoose.model('User', userSchema);