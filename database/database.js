import mongoose from "mongoose";

const DbConnection = async () => {
  const connectDatabaseString =
    "mongodb+srv://RubinaPokhrel:dUMVBiKGlj9n9k4z@cluster0.xz2de1i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  // "mongodb+srv://RubinaPokhrel:dUMVBiKGlj9n9k4z@cluster0.xz2de1i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  try {
    await mongoose.connect(connectDatabaseString);
    console.log("Database connect succesfully");
  } catch (error) {
    console.error(error);
  }
};

export default DbConnection;
