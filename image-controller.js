import File from "./model/filemodel.js";

export const uploadImage = async (request, response) => {
  console.log(request.file);
  const fileObject = {
    path: request.file.path,
    name: request.file.originalname,
  };
  try {
    const file = await File.create(fileObject);
    // console.log(file);
    response
      .status(200)
      .json({ path: `http://localhost:5000/uploadfile/${file._id}` });
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ Erroe: error.message });
  }
};
export const getImage = async (request, response) => {
  try {
    const file = await File.findById(request.params.fileId);
    file.downloadCount++;
    await file.save();
    response.download(file.path, file.name);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};
