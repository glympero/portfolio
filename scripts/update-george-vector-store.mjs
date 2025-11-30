import "dotenv/config"; // if you use a .env file
import OpenAI from "openai";
import fs from "node:fs";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function deleteFileFromVectorStore(vectorStoreId, fileId) {
  const res = await fetch(
    `https://api.openai.com/v1/vector_stores/${vectorStoreId}/files/${fileId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed to delete file ${fileId}: ${res.status} ${text}`);
  }
}

async function main() {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY is not set");
  }
  const vectorStoreId =
    process.env.GEORGE_VECTOR_STORE_ID || process.env.VECTOR_STORE_ID;
  if (!vectorStoreId) {
    throw new Error("GEORGE_VECTOR_STORE_ID / VECTOR_STORE_ID is not set");
  }

  console.log("Updating vector store:", vectorStoreId);

  // 1️⃣ List existing files
  const existing = await client.vectorStores.files.list(vectorStoreId);

  // 2️⃣ Delete them via REST
  for (const file of existing.data ?? []) {
    console.log("Deleting file:", file.id, file.filename);
    await deleteFileFromVectorStore(vectorStoreId, file.id);
  }

  // 3️⃣ Upload new versions
  const fileStreams = [
    "./data/george-cv.pdf",
    "./data/george-linkedin.pdf",
    "./data/george-summary.txt",
  ].map((p) => fs.createReadStream(p));

  const batch = await client.vectorStores.fileBatches.uploadAndPoll(
    vectorStoreId,
    { files: fileStreams }
  );

  console.log("status:", batch.status);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
