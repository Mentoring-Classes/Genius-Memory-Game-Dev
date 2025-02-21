import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  email: string;
  password: string;
  ranks: mongoose.Types.ObjectId[];  // Array de referências para os ranks
}

const UserSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  ranks: [{ type: Schema.Types.ObjectId, ref: 'Rank' }]  // Relacionamento com Rank
}, { timestamps: true });

const User = mongoose.model<IUser>('User', UserSchema);
export default User;
