// scripts/create-george-vector-store.mjs
import OpenAI from 'openai';
import fs from 'node:fs';

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function main() {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY is not set');
  }

  const vectorStore = await client.vectorStores.create({
    name: 'george-portfolio-profile',
  });

  const fileStreams = [
    './data/george-cv.pdf',
    './data/george-linkedin.pdf',
    './data/george-summary.txt',
  ].map((p) => fs.createReadStream(p));

  const batch = await client.vectorStores.fileBatches.uploadAndPoll(
    vectorStore.id,
    { files: fileStreams }
  );

  console.log('VECTOR_STORE_ID:', vectorStore.id);
  console.log('status:', batch.status);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
