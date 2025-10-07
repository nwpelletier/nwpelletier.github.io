import { copyFile } from "node:fs/promises";
import { resolve } from "node:path";

async function copy404() {
  try {
    const src = resolve("dist", "index.html");
    const dest = resolve("dist", "404.html");
    await copyFile(src, dest);
    console.log("404.html created successfully!");
  } catch (err) {
    console.error("Error copying 404.html:", err);
    process.exit(1);
  }
}

copy404();
