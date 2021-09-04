import fs from "fs";
import StatusCodes from "./statusCodes";

const options = { encoding: "utf-8" };

export const readFile = (filePath) => {
  try {
    fs.readFile(filePath, options, (err, data) => {
      if (err) throw err;
      return JSON.parse(data);
    });
  } catch (error) {
    res.statusCode(StatusCodes.SERVER_ERROR).end();
  }
};

export const writeFile = (filePath, fileData) => {
  try {
    fs.writeFile(filePath, fileData, options, (err) => {
      if (err) throw err;
    });
  } catch (error) {
    res.statusCode(StatusCodes.SERVER_ERROR).end();
  }
};
