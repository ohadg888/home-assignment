import fs from "fs";

const options = { encoding: "utf-8" };

export const readFile = (filePath) => {
  return fs.readFileSync(filePath, options);
};

export const writeFile = (filePath, fileData) => {
  fs.writeFileSync(filePath, fileData, options);
};
