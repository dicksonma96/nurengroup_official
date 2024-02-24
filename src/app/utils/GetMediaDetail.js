import { promises as fs } from "fs";

export async function GetMediaDetail(id) {
  const file = await fs.readFile(
    process.cwd() + "/src/data/mediahub.json",
    "utf8"
  );
  const data = JSON.parse(file);

  return data.data.find((info) => info.id == id);
}
