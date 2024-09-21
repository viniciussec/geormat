import path from "path";
import fs from "fs";

export async function GET(request: Request) {
  try {
    const country = request.url.split("=")[1];

    const imgPath = path.join(__dirname, "images", country + ".svg");

    const image = await fs.promises.readFile(imgPath, "utf8");

    return new Response(image, {
      headers: { "Content-Type": "image/svg+xml" },
    });
  } catch (err) {
    if (err.code === "ENOENT") {
      return new Response("Image not found", { status: 404 });
    }

    return new Response(err.message, { status: 500 });
  }
}
