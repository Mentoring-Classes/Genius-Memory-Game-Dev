import mongoose, { Schema, Document } from "mongoose";

interface IRank extends Document {
  rank: string;
  nextRank: number;
}

const RankSchema = new Schema<IRank>({
  rank: { type: String },
  nextRank: { type: Number, default: 300 },
}, { timestamps: true });

const Rank = mongoose.model<IRank>('Rank', RankSchema);
export default Rank;
