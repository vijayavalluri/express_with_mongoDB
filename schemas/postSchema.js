import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const postSchema = new Schema({
 first_name:  String,
 last_name:  String,
 email:  String,
 date: { type: Date, default: Date.now }
});

export default mongoose.model('Post', postSchema);
