import React, { useState } from "react";
import ChatWithGeorge from "./ChatWithGeorge";

export default function ChatLauncher() {
  const [open, setOpen] = useState(false);

  const monoFont =
    'Menlo, Monaco, "SF Mono", "Fira Code", ui-monospace, SFMono-Regular, monospace';

  return (
    <>
      {/* Floating launcher (hidden when open) */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          style={{
            position: "fixed",
            right: "24px",
            bottom: "24px",
            borderRadius: 999,
            padding: "10px 18px",
            border: "1px solid #22d3ee",
            background: "rgba(15,23,42,0.9)",
            color: "#22d3ee",
            fontFamily: monoFont,
            fontSize: 13,
            letterSpacing: 0.5,
            textTransform: "uppercase",
            cursor: "pointer",
            boxShadow: "0 0 0 1px rgba(15,23,42,0.7)",
            backdropFilter: "blur(6px)",
            zIndex: 9999,
          }}
        >
          💬 Chat with me
        </button>
      )}

      {/* Full-screen close button (click outside panel) */}
      <button
        type="button"
        aria-label="Close chat overlay"
        onClick={open ? () => setOpen(false) : undefined}
        tabIndex={open ? 0 : -1}
        style={{
          position: "fixed",
          inset: 0,
          border: "none",
          padding: 0,
          margin: 0,
          background: open ? "rgba(15,23,42,0.7)" : "transparent",
          cursor: open ? "pointer" : "default",
          pointerEvents: open ? "auto" : "none",
          transition: "background 0.2s ease",
          zIndex: 9998,
        }}
      />

      {/* Panel with chat – always mounted so state persists */}
      <div
        style={{
          position: "fixed",
          right: 0,
          bottom: 0,
          margin: 16,
          transform: open ? "translateY(0)" : "translateY(10px)",
          opacity: open ? 1 : 0,
          transition: "opacity 0.2s ease, transform 0.2s ease",
          pointerEvents: open ? "auto" : "none",
          zIndex: 9999,
        }}
      >
        <div
          style={{
            width: 420,
            maxWidth: "100vw",
            background: "#0c1222",
            borderRadius: 16,
            border: "1px solid rgba(34,211,238,0.25)",
            boxShadow:
              "0 20px 50px rgba(0,0,0,0.6), 0 0 30px rgba(34,211,238,0.15) inset",
            padding: 18,
            color: "#e5e7eb",
            fontFamily: monoFont,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: 1.5,
                  color: "#22d3ee",
                }}
              >
                Portfolio Assistant
              </div>
              <div
                style={{
                  fontSize: 16,
                  marginTop: 2,
                  color: "#e5e7eb",
                }}
              >
                Ask me about my experience
              </div>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              style={{
                border: "none",
                background: "transparent",
                color: "#6b7280",
                fontSize: 20,
                cursor: "pointer",
              }}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          <ChatWithGeorge />
        </div>
      </div>
    </>
  );
}
