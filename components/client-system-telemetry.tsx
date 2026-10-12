"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cpu, Database, Search, Sparkles, Layers, ShieldCheck, Zap, ArrowRight, Activity, Terminal, Copy, Check } from "lucide-react"

export function ClientSystemTelemetry() {
  const [activeStep, setActiveStep] = useState<number>(2)
  const [copied, setCopied] = useState<boolean>(false)

  const pipelineSteps = [
    {
      step: "01",
      title: "Document Ingestion & Chunking",
      sub: "Text Chunking & Token Allocation",
      icon: Layers,
      metrics: "512 Tokens / Chunk • 15% Overlap",
      details:
        "Raw enterprise ERP documentation and product knowledge bases are split into semantic chunks using recursive token boundaries, preserving context headers.",
      code: `const chunks = chunkTextByTokens(document, {\n  chunkSize: 512,\n  overlap: 64,\n  separator: "\\n\\n"\n});`,
    },
    {
      step: "02",
      title: "Vector Embedding & Indexing",
      sub: "Pinecone / Chroma Vector Store",
      icon: Database,
      metrics: "1,536 Dimensions • Cosine Similarity",
      details:
        "Text chunks are transformed via OpenAI text-embedding-3-small into 1,536-dimensional dense vector embeddings and stored in Pinecone/Chroma with metadata tags.",
      code: `const embedding = await openai.embeddings.create({\n  model: "text-embedding-3-small",\n  input: chunk.text,\n});\nawait vectorStore.upsert({ id: chunk.id, values: embedding.data[0].embedding });`,
    },
    {
      step: "03",
      title: "Hybrid RAG Retrieval",
      sub: "Dense Vector + Sparse Keyword BM25",
      icon: Search,
      metrics: "Top-k: 4 • Score: 0.942 Similarity",
      details:
        "When a user asks a natural language question, the system computes hybrid retrieval combining vector similarity search with BM25 keyword matching for maximum precision.",
      code: `const results = await hybridSearch({\n  vectorQuery: userQueryEmbedding,\n  keywordQuery: userQueryText,\n  topK: 4,\n  alpha: 0.7 // 70% vector + 30% keyword\n});`,
    },
    {
      step: "04",
      title: "Context Window Injection & Generation",
      sub: "GPT-4 Agent Output & Citation",
      icon: Zap,
      metrics: "Token Cost: $0.0018 • 182ms Latency",
      details:
        "Retrieved high-confidence context chunks are dynamically injected into the GPT-4 system prompt to generate verified, hallucination-free answers with source citations.",
      code: `const finalAnswer = await gpt4.chat.completions.create({\n  messages: [\n    { role: "system", content: "Answer ONLY using provided context." },\n    { role: "user", content: formatContext(results) + userQuery }\n  ]\n});`,
    },
  ]

  const active = pipelineSteps[activeStep - 1]

  const handleCopy = () => {
    navigator.clipboard.writeText(active.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="rag-telemetry" className="py-24 sm:py-32 relative border-t border-slate-900/80">
      <div className="container mx-auto px-4 max-w-6xl space-y-12 sm:space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800"
        >
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-widest px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20">
              <Cpu className="w-3.5 h-3.5 shrink-0" />
              <span>Enterprise RAG & Vector Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-100">
              Retrieval-Augmented Generation Architecture
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md font-mono leading-relaxed">
            How I implement production-grade RAG pipelines using vector databases, hybrid retrieval, and strict context grounding to prevent LLM hallucinations.
          </p>
        </motion.div>

        {/* Pipeline Interactive Stepper */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Steps */}
          <div className="lg:col-span-5 space-y-3">
            {pipelineSteps.map((item, idx) => {
              const StepIcon = item.icon
              const isSelected = activeStep === idx + 1

              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx + 1)}
                  className={`w-full text-left p-4 rounded-xl cursor-pointer border transition-all duration-300 font-mono relative overflow-hidden ${
                    isSelected
                      ? "bg-slate-900/90 border-sky-500/70 shadow-[0_0_25px_-5px_rgba(56,189,248,0.25)]"
                      : "bg-slate-950/50 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/30"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeRagStepGlow"
                      className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-transparent to-transparent pointer-events-none"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center justify-between mb-1.5 relative z-10">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`p-1.5 rounded-md transition-colors ${
                          isSelected ? "bg-sky-500/20 text-sky-400" : "bg-slate-800 text-slate-400"
                        }`}
                      >
                        <StepIcon className="w-4 h-4" />
                      </div>
                      <h3 className={`text-sm font-bold ${isSelected ? "text-sky-300" : "text-slate-200"}`}>
                        {item.title}
                      </h3>
                    </div>
                    <span className="text-[10px] text-slate-500 font-bold">{item.step}</span>
                  </div>
                  <p className="text-xs text-slate-400 font-sans line-clamp-1 relative z-10">{item.sub}</p>
                </button>
              )
            })}
          </div>

          {/* Right Live Telemetry Display */}
          <div className="lg:col-span-7 tech-card p-6 sm:p-7 rounded-2xl border border-slate-800 space-y-5 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.step}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-5"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 font-mono text-xs">
                  <div className="flex items-center gap-2 text-slate-200">
                    <Terminal className="w-4 h-4 text-sky-400" />
                    <span className="font-bold text-sm sm:text-base">Step 0{activeStep} — {active.title}</span>
                  </div>
                  <span className="text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800/60 text-[10px] font-semibold">
                    {active.metrics}
                  </span>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">{active.details}</p>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>RAG PIPELINE IMPLEMENTATION CODE</span>
                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-1 px-2 py-0.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors text-[10px] cursor-pointer"
                    >
                      {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-slate-400" />}
                      <span>{copied ? "COPIED" : "COPY CODE"}</span>
                    </button>
                  </div>
                  <div className="bg-slate-950 rounded-xl p-4 border border-slate-800/80 font-mono text-xs text-sky-300/90 overflow-x-auto shadow-inner">
                    <pre className="leading-relaxed">{active.code}</pre>
                  </div>
                </div>

                {/* Performance Telemetry Banner */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 font-mono text-center pt-2">
                  <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 shadow-inner">
                    <div className="text-sky-400 font-bold text-base sm:text-lg">0.942</div>
                    <div className="text-[9px] text-slate-500 uppercase tracking-wider mt-0.5">Vector Similarity</div>
                  </div>
                  <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 shadow-inner">
                    <div className="text-emerald-400 font-bold text-base sm:text-lg">182ms</div>
                    <div className="text-[9px] text-slate-500 uppercase tracking-wider mt-0.5">Retrieval Latency</div>
                  </div>
                  <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 shadow-inner">
                    <div className="text-teal-300 font-bold text-base sm:text-lg">0%</div>
                    <div className="text-[9px] text-slate-500 uppercase tracking-wider mt-0.5">Hallucination</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
