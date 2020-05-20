import mongoose from 'mongoose';

const connectToDB = () => {
  mongoose.connect('mongodb://127.0.0.1:27017/books', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
};

export default connectToDB;
