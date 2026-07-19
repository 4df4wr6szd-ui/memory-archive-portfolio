import { existsSync, readdirSync } from "fs";
import path from "path";

const supportedImageExtensions = new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".webp"]);

export function getProjectImagePaths(assetDirectory: string) {
  const publicDirectory = path.join(process.cwd(), "public", assetDirectory.replace(/^\//, ""));

  if (!existsSync(publicDirectory)) {
    return [];
  }

  return readdirSync(publicDirectory)
    .filter((fileName) => supportedImageExtensions.has(path.extname(fileName).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((fileName) => `${assetDirectory}/${fileName}`);
}
