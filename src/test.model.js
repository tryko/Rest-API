import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TestSchema = new Schema({
  name: String,

}, { collection: 'name' });

const Name = mongoose.model('Name', TestSchema);

export default Name;
