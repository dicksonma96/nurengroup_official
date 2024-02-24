import { promises as fs } from "fs";

export async function GetMedias() {
  const file = await fs.readFile(
    process.cwd() + "/src/data/mediahub.json",
    "utf8"
  );
  const data = JSON.parse(file);

  return data;
}
