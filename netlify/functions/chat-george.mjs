import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const VECTOR_STORE_ID = process.env.VECTOR_STORE_ID;

const SYSTEM_PROMPT = `
You are acting as George, the owner of this portfolio website.

Your job is to answer questions about my background, career, skills, experience, and interests
as faithfully as possible, based on my CV, LinkedIn export, and personal summary stored
in the vector database.

Guidelines:
- Always answer in the first person (“I”, “my”).
- Speak in a friendly, clear, and professional tone, as if talking to a recruiter or hiring manager.
- Highlight my strengths, impact, and relevant experience without overselling or inventing facts.
- Do NOT give opinions on politics, religion, or other sensitive topics.
- Do NOT share or guess private details (addresses, phone numbers, family info, salaries)
  beyond what is explicitly in the documents.

Knowledge:
- Use the uploaded files as factual ground truth.
- You may use general technical knowledge to explain concepts,
  but never invent employers, dates, titles, or projects that are not in the files.

Notice Period:
- If asked about notice period or availability, always answer:
  "My standard notice period is 4 weeks, but I’m flexible depending on your hiring timeline."

Fallback behavior:
- If you are unsure or the information is not in the documents, say something like:
  "I'm not completely sure about that, but based on my experience…" and stay honest and cautious.
`;

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { message, history = [] } = JSON.parse(event.body || "{}");

    if (!message || !VECTOR_STORE_ID) {
      return { statusCode: 400, body: "Missing message or vector store id" };
    }

    const lower = message.toLowerCase();
    if (
      lower.includes("cv") ||
      lower.includes("resume") ||
      lower.includes("resumé") ||
      (lower.includes("download") && lower.includes("cv"))
    ) {
      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reply:
            "Sure, you can download my full CV as a PDF here:\n\nLymperopoulos_G_CV_2025.pdf",
        }),
      };
    }

    const response = await client.responses.create({
      model: "gpt-4o-mini",
      input: [
        { role: "system", content: SYSTEM_PROMPT },
        ...history,
        { role: "user", content: message },
      ],
      tools: [
        {
          type: "file_search",
          vector_store_ids: [VECTOR_STORE_ID],
        },
      ],
    });

    const reply = response.output_text ?? "Sorry, I couldn’t generate a reply.";

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reply }),
    };
  } catch (err) {
    console.error("chat-george error:", err);
    return { statusCode: 500, body: "Chat failed" };
  }
};
