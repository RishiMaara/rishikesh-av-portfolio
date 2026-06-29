import { useEffect, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Bot, Send, Sparkles, X } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { askRishi } from "@/lib/portfolio-chat.functions";

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "What's Rishi's strongest stack?",
  "Show me his best AI project",
  "Is he open to roles?",
  "Summarize his experience",
];

export function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      role: "assistant",
      content:
        "Hey 👋 I'm **Rishi's AI** — ask me anything about his projects, stack, or experience.",
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const ask = useServerFn(askRishi);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 9e9, behavior: "smooth" });
  }, [msgs, loading]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;
    const next: Msg[] = [...msgs, { role: "user", content: trimmed }];
    setMsgs(next);
    setInput("");
    setLoading(true);
    try {
      const res = await ask({ data: { messages: next.map((m) => ({ role: m.role, content: m.content })) } });
      setMsgs((m) => [...m, { role: "assistant", content: res.text }]);
    } catch (e: unknown) {
      const err = e instanceof Error ? e.message : "Something went wrong.";
      setMsgs((m) => [
        ...m,
        { role: "assistant", content: `⚠️ ${err}\n\nTry again, or email **rishirudhm@gmail.com**.` },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Launcher */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Ask Rishi's AI"}
        className="group fixed bottom-5 right-5 z-[80] inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow transition-transform hover:scale-110 sm:bottom-6 sm:right-6"
      >
        <span className="absolute inset-0 rounded-full animate-pulse-ring" />
        {open ? <X size={20} /> : <Bot size={22} />}
      </button>

      {/* Panel */}
      <div
        className={`fixed bottom-24 right-3 z-[80] w-[calc(100vw-1.5rem)] max-w-sm origin-bottom-right transition-all duration-300 sm:right-6 ${
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-3 scale-95 opacity-0"
        }`}
      >
        <div className="glass-strong flex h-[28rem] flex-col overflow-hidden rounded-2xl shadow-glow">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
              <Sparkles size={14} />
            </div>
            <div className="leading-tight">
              <div className="font-display text-sm font-semibold">Ask Rishi's AI</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Powered by Lovable AI
              </div>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-3">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-gradient-primary text-primary-foreground"
                      : "glass text-foreground/90"
                  }`}
                >
                  <div className="prose prose-sm prose-invert max-w-none [&_*]:!my-1 [&_a]:text-primary">
                    <ReactMarkdown>{m.content}</ReactMarkdown>
                  </div>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="glass inline-flex gap-1 rounded-2xl px-3 py-2">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary" />
                </div>
              </div>
            )}
          </div>

          {msgs.length <= 1 && (
            <div className="flex flex-wrap gap-1.5 border-t border-white/10 px-3 py-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-white/10 p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about Rishi…"
              className="flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/50"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground transition-opacity disabled:opacity-50"
              aria-label="Send"
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
