import mongoose, { Schema, Document } from "mongoose";

interface IRank extends Document {
  userId: mongoose.Types.ObjectId[];  // Array de referências para os usuários
  bestScore: number;
  rank: string;
  rankPoints: number;
  bestStreak: number;
}

const RankSchema = new Schema<IRank>({
  userId: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],  // Relacionamento com vários usuários
  bestScore: { type: Number, default: 0 },
  rank: { type: String, default: 'Bronze' },
  rankPoints: { type: Number, default: 0 },
  bestStreak: { type: Number, default: 0 }
}, { timestamps: true });

const Rank = mongoose.model<IRank>('Rank', RankSchema);
export default Rank;
