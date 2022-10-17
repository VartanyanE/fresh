import mongoose from "mongoose";
import crudModel from "./models/model.js";

mongoose
  .connect(
    "mongodb+srv://zanderinc:lakers323@cluster0.u1egz.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log(`seed is taking place `))

  .catch((error) => console.log(error));

const seedData = [
  {
    title: "fake",
    message: "fake",
  },
];

const seedDB = async () => {
  await crudModel.deleteMany({});
  await crudModel.insertMany(seedData);
};

seedDB().then(() => {
  mongoose.connection.close();
});
