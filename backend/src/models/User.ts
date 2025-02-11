/* import mongoose, {Document, Schema} from "mongoose"


const User = mongoose.model("User",{
    email:String,
    password: String,
})

export default User */

import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  email: string;
  password: string;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model<IUser>('User', UserSchema);
export default User;