import fs from "fs";
import statusCodes from "./statusCodes";

const options = { encoding: "utf-8" };

export const readFile = (filePath) => {
  try {
    fs.readFile(filePath, options, (err, data) => {
      if (err) throw err;
      return JSON.parse(data);
    });
  } catch (error) {
    res.status(statusCodes.SERVER_ERROR).end();
  }
};

export const writeFile = (filePath, fileData) => {
  try {
    fs.writeFile(filePath, fileData, options, (err) => {
      if (err) throw err;
    });
  } catch (error) {
    res.status(statusCodes.SERVER_ERROR).end();
  }
};
