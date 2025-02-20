import mongoose, { Schema, Document } from "mongoose";

interface IRank extends Document {
    userId: mongoose.Types.ObjectId;
    bestScore: number;
    rank: String;
    rankPoints: number;
    bestStreak: number;
}

const RankSchema = new Schema<IRank>({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    bestScore: { type: Number, required: true, default: 0 },
    rank: { type: String, required: true, default: 'Bronze' },
    rankPoints: { type: Number, required: true, default: 0 },
    bestStreak: { type: Number, required: true, default: 0 }
}, { timestamps: true });

const Rank = mongoose.model<IRank>('Rank', RankSchema);
export default Rank;