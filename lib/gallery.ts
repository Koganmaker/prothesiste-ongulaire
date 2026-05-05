import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { DEMO_PHOTOS } from "./demoPhotos";

export type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
  title?: string;
  order: number;
};

const GALLERY_DIR = path.join(process.cwd(), "content/gallery");
const PUBLIC_DIR = path.join(process.cwd(), "public");

// Lit les dimensions d'une image (PNG ou JPEG) sans dépendance externe.
function readImageSize(filePath: string): { width: number; height: number } {
  const buf = fs.readFileSync(filePath);
  if (buf.slice(0, 8).toString("hex") === "89504e470d0a1a0a") {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  }
  // JPEG
  if (buf[0] === 0xff && buf[1] === 0xd8) {
    let i = 2;
    while (i < buf.length) {
      if (buf[i] !== 0xff) break;
      const marker = buf[i + 1];
      const size = buf.readUInt16BE(i + 2);
      if (marker >= 0xc0 && marker <= 0xc3) {
        return { height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7) };
      }
      i += 2 + size;
    }
  }
  return { width: 1200, height: 1500 };
}

function demoPhotos(): Photo[] {
  return DEMO_PHOTOS.map((p, i) => ({ ...p, order: i }));
}

export function getPhotos(): Photo[] {
  if (!fs.existsSync(GALLERY_DIR)) return demoPhotos();
  const files = fs.readdirSync(GALLERY_DIR).filter((f) => f.endsWith(".md"));
  if (files.length === 0) return demoPhotos();
  const photos: Photo[] = files.map((file) => {
    const raw = fs.readFileSync(path.join(GALLERY_DIR, file), "utf8");
    const { data } = matter(raw);
    const image = String(data.image || "");
    const localPath = path.join(PUBLIC_DIR, image.replace(/^\//, ""));
    const dim = fs.existsSync(localPath)
      ? readImageSize(localPath)
      : { width: 1200, height: 1500 };
    return {
      src: image,
      width: dim.width,
      height: dim.height,
      alt: String(data.alt || data.title || ""),
      title: data.title ? String(data.title) : undefined,
      order: typeof data.order === "number" ? data.order : 100,
    };
  });
  return photos
    .filter((p) => p.src)
    .sort((a, b) => a.order - b.order);
}
