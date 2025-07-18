import DataUriParser from "datauri/parser.js";
import path from "path";

// Usage example: Convert a file buffer to a data URI
const getDataUri = (file) => {
  const parser = new DataUriParser();
  const extName = path.extname(file.originalname).toString();
  return parser.format(extName, file.buffer);
};

export default getDataUri;
