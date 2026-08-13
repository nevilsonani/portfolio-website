"use client"

import { useState } from "react"
import { Cpu, Database, Search, Sparkles, Layers, ShieldCheck, Zap, ArrowRight, Activity, Terminal } from "lucide-react"

export function ClientSystemTelemetry() {
  const [activeStep, setActiveStep] = useState<number>(2)

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

  return (
    <section id="rag-telemetry" className="py-24 bg-[#07080c] relative border-t border-slate-900">
      <div className="container mx-auto px-4 max-w-6xl space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-widest">
              <Cpu className="w-3.5 h-3.5 shrink-0" />
              <span>07 // Enterprise RAG & Vector Engine</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-100">
              Retrieval-Augmented Generation Architecture
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md font-mono leading-relaxed">
            How I implement production-grade RAG pipelines using vector databases, hybrid retrieval, and strict context grounding to prevent LLM hallucinations.
          </p>
        </div>

        {/* Pipeline Interactive Stepper */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Steps */}
          <div className="lg:col-span-5 space-y-3">
            {pipelineSteps.map((item, idx) => {
              const StepIcon = item.icon
              const isSelected = activeStep === idx + 1

              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx + 1)}
                  className={`p-4 rounded-xl cursor-pointer border transition-all duration-300 font-mono ${
                    isSelected
                      ? "bg-slate-900 border-sky-500/70 shadow-[0_0_20px_-5px_rgba(56,189,248,0.25)]"
                      : "bg-slate-950/50 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/30"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`p-1.5 rounded-md ${
                          isSelected ? "bg-sky-500/20 text-sky-400" : "bg-slate-800 text-slate-400"
                        }`}
                      >
                        <StepIcon className="w-4 h-4" />
                      </div>
                      <h3 className={`text-sm font-bold ${isSelected ? "text-sky-300" : "text-slate-200"}`}>
                        {item.title}
                      </h3>
                    </div>
                    <span className="text-[10px] text-slate-500">{item.step}</span>
                  </div>
                  <p className="text-xs text-slate-400 font-sans line-clamp-1">{item.sub}</p>
                </div>
              )
            })}
          </div>

          {/* Right Live Telemetry Display */}
          <div className="lg:col-span-7 tech-card p-6 rounded-2xl border border-slate-800 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 font-mono text-xs">
              <div className="flex items-center gap-2 text-slate-200">
                <Terminal className="w-4 h-4 text-sky-400" />
                <span className="font-bold text-sm">Step 0{activeStep} — {active.title}</span>
              </div>
              <span className="text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800/60 text-[10px]">
                {active.metrics}
              </span>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">{active.details}</p>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>RAG PIPELINE IMPLEMENTATION CODE</span>
                <span className="text-sky-400">TYPESCRIPT / VECTOR API</span>
              </div>
              <div className="bg-slate-950 rounded-xl p-4 border border-slate-800/80 font-mono text-xs text-sky-300/90 overflow-x-auto">
                <pre className="leading-relaxed">{active.code}</pre>
              </div>
            </div>

            {/* Performance Telemetry Banner */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 font-mono text-center pt-2">
              <div className="p-2.5 sm:p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                <div className="text-sky-400 font-bold text-sm sm:text-base">0.942</div>
                <div className="text-[8px] sm:text-[9px] text-slate-500">Vector Similarity</div>
              </div>
              <div className="p-2.5 sm:p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                <div className="text-emerald-400 font-bold text-sm sm:text-base">182ms</div>
                <div className="text-[8px] sm:text-[9px] text-slate-500 font-sans">Latency</div>
              </div>
              <div className="p-2.5 sm:p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                <div className="text-teal-300 font-bold text-sm sm:text-base">0%</div>
                <div className="text-[8px] sm:text-[9px] text-slate-500 font-sans">Hallucination</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
