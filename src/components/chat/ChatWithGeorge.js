import React, { useState, useRef, useEffect } from "react";

const monoFont =
  'Menlo, Monaco, "SF Mono", "Fira Code", ui-monospace, SFMono-Regular, monospace';

const MIN_LEN = 3;
const MAX_LEN = 500;
const COOLDOWN_MS = 3000;
const MAX_QUESTIONS = 5;
const STORAGE_KEY = "george-portfolio-chat";
const CV_PATH = "/Lymperopoulos_G_CV_2025.pdf";

export default function ChatWithGeorge() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [lastSentAt, setLastSentAt] = useState(0);
  const bottomRef = useRef(null);
  const abortRef = useRef(null);

  // restore messages
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.sessionStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const data = JSON.parse(raw);
      if (Array.isArray(data.messages)) setMessages(data.messages);
    } catch (e) {
      console.error("Failed to restore chat", e);
    }
  }, []);

  // persist messages
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ messages }));
  }, [messages]);

  const userQuestionCount = messages.filter((m) => m.role === "user").length;
  const limitReached = userQuestionCount > MAX_QUESTIONS;

  const isTooShort = input.trim().length > 0 && input.trim().length < MIN_LEN;
  const isOnCooldown = Date.now() - lastSentAt < COOLDOWN_MS;
  const canSend =
    !isSending &&
    !limitReached &&
    input.trim().length >= MIN_LEN &&
    !isOnCooldown;

  const scrollToBottom = () => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // scroll on messages and on validation messages appearing
  useEffect(scrollToBottom, [messages, isTooShort, limitReached]);

  const renderContent = (text) => {
    if (!text.includes(CV_PATH)) return text;

    const parts = text.split(CV_PATH);
    return (
      <>
        {parts[0]}
        <a
          href={CV_PATH}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#22d3ee", textDecoration: "underline" }}
        >
          {CV_PATH}
        </a>
        {parts[1]}
      </>
    );
  };

  const handleSend = async (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!canSend) return;

    const newUserMsg = {
      id: Date.now().toString(),
      role: "user",
      content: text,
    };

    const history = [...messages, newUserMsg];
    const newUserCount = history.filter((m) => m.role === "user").length;

    setMessages(history);
    setInput("");
    setLastSentAt(Date.now());

    if (newUserCount > MAX_QUESTIONS) {
      const finalMsg = {
        id: Date.now().toString() + "-limit",
        role: "assistant",
        content:
          "I’ve already answered a few key questions for this visit. If you’d like to explore more or evaluate my background in detail, you can download my full CV here:\n\n" +
          CV_PATH +
          "\n\nFeel free to contact me directly for a deeper conversation.",
      };
      setMessages((prev) => [...prev, finalMsg]);
      return;
    }

    setIsSending(true);
    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const res = await fetch("/.netlify/functions/chat-george", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: history.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
        signal: controller.signal,
      });

      const data = await res.json();

      const botMsg = {
        id: Date.now().toString() + "-bot",
        role: "assistant",
        content: data.reply,
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      if (err.name === "AbortError") {
        console.log("Chat request aborted");
      } else {
        console.error("Chat error:", err);
      }
    } finally {
      setIsSending(false);
      abortRef.current = null;
    }
  };

  const handleStop = () => {
    if (abortRef.current) {
      abortRef.current.abort();
      abortRef.current = null;
    }
    setIsSending(false);
  };

  return (
    <div
      style={{
        background: "#020617",
        borderRadius: 12,
        border: "1px solid #1f2937",
        padding: 12,
        color: "#e5e7eb",
        fontFamily: monoFont,
        fontSize: 13,
      }}
    >
      <div
        style={{
          height: 280,
          overflow: "auto",
          padding: 8,
          background: "#020617",
          borderRadius: 8,
        }}
      >
        {messages.length === 0 && (
          <p
            style={{
              opacity: 0.85,
              lineHeight: 1.55,
              fontSize: 14,
              color: "#94a3b8",
            }}
          >
            Ask me a few focused questions about my experience, stack, or
            projects. For deeper discussions, feel free to reach out directly.
            <br />
            You can also{" "}
            <a
              href={CV_PATH}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#22d3ee",
                textDecoration: "underline",
              }}
            >
              download my CV here
            </a>
            .
          </p>
        )}

        {messages.map((m) => (
          <div
            key={m.id}
            style={{
              display: "flex",
              justifyContent: m.role === "user" ? "flex-end" : "flex-start",
              marginBottom: 6,
            }}
          >
            <div
              style={{
                maxWidth: "80%",
                padding: "8px 12px",
                borderRadius: 14,
                background:
                  m.role === "user" ? "#22d3ee" : "rgba(15,23,42,0.9)",
                color: m.role === "user" ? "#020617" : "#e5e7eb",
                border:
                  m.role === "user"
                    ? "1px solid #0e7490"
                    : "1px solid rgba(148,163,184,0.15)",
                boxShadow:
                  m.role === "user"
                    ? "0 0 10px rgba(34,211,238,0.25)"
                    : "0 0 10px rgba(0,0,0,0.35)",
                whiteSpace: "pre-wrap",
                lineHeight: 1.5,
                fontSize: 13,
              }}
            >
              {renderContent(m.content)}
            </div>
          </div>
        ))}

        {isSending && (
          <div
            style={{
              opacity: 0.7,
              fontStyle: "italic",
              marginTop: 4,
              color: "#cbd5f5",
            }}
          >
            George is typing…
          </div>
        )}

        {limitReached && (
          <div
            style={{
              marginTop: 8,
              fontSize: 12,
              color: "#facc15",
              opacity: 0.9,
            }}
          >
            Session limit reached. For more information, you can always download
            my CV or contact me directly.
          </div>
        )}

        {isTooShort && !isSending && !limitReached && (
          <div
            style={{
              marginTop: 6,
              fontSize: 12,
              color: "#f97316",
            }}
          >
            Try to ask at least {MIN_LEN} characters so I can respond
            meaningfully.
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      <form
        onSubmit={handleSend}
        style={{ display: "flex", gap: 8, marginTop: 10 }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value.slice(0, MAX_LEN))}
          placeholder={
            limitReached
              ? "You’ve reached the question limit."
              : isSending
              ? "Generating an answer…"
              : isOnCooldown
              ? "Give me a second…"
              : "Ask me something…"
          }
          disabled={isSending || limitReached}
          style={{
            flex: 1,
            padding: "8px 10px",
            borderRadius: 999,
            border: "1px solid #1f2937",
            background: "#020617",
            color: "#e5e7eb",
            fontFamily: monoFont,
            fontSize: 13,
            outline: "none",
            opacity: isSending || limitReached ? 0.6 : 1,
          }}
        />

        {isSending ? (
          <button
            type="button"
            onClick={handleStop}
            style={{
              padding: "8px 14px",
              borderRadius: 999,
              border: "1px solid #b91c1c",
              background: "#7f1d1d",
              color: "#fee2e2",
              fontFamily: monoFont,
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            Stop
          </button>
        ) : (
          <button
            type="submit"
            disabled={!canSend || limitReached}
            style={{
              padding: "8px 14px",
              borderRadius: 999,
              border: "1px solid #22d3ee",
              background: canSend ? "#22d3ee" : "#0f172a",
              color: "#020617",
              fontFamily: monoFont,
              fontSize: 13,
              cursor: canSend && !limitReached ? "pointer" : "default",
              opacity: canSend && !limitReached ? 1 : 0.5,
            }}
          >
            Send
          </button>
        )}
      </form>
    </div>
  );
}
