import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ExchangeInfoSchema = new Schema({
    src: {
        type: String,
        required: true
    },
    tgt: {
        type: String,
        required: true
    },
    rate: {
        type: Number
    },
    date:{
        type: String
    }
});
ExchangeInfoSchema.index({src:1,tgt:1});
export default mongoose.model('exchangeInfo', ExchangeInfoSchema);