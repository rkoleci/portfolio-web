import fsPromises from "fs/promises";
import path from "path";

export const getJson = async (fileDir: string) => {
  const filePath = path.join(process.cwd(), fileDir);
  const jsonData = await fsPromises.readFile(filePath);
  return JSON.parse(jsonData);
};
