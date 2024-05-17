import File from "./model/filemodel.js";

export const uploadImage = async (request, response) => {
  console.log(request.file);
  const fileObject = {
    path: request.file.path,
    name: request.file.originalname,
  };
  try {
    const file = await File.create(fileObject);
    response
      .status(200)
      .json({
        path: `https://file-sharing-serverside.onrender.com/uploadfile/${file._id}`,
      });
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
