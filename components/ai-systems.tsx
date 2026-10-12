"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cpu, Terminal, Shield, Zap, Database, Lock, ArrowRight, Sparkles, Code2, Sliders, Layers, Copy, Check } from "lucide-react"

export function AISystems() {
  const [selectedConcept, setSelectedConcept] = useState<string>("function-calling")
  const [copied, setCopied] = useState<boolean>(false)

  const aiConcepts = [
    {
      id: "function-calling",
      title: "Function Calling & Tool Selection",
      icon: Terminal,
      category: "Agent Logic",
      shortDesc: "Translating natural user intent into validated JSON parameters for Django/PostgreSQL execution.",
      detail:
        "Rather than returning unconstrained text, the LLM outputs exact function calls against JSON schemas. The backend validates parameters, executes business logic safely, and feeds structured results back to the conversation loop.",
      codeSnippet: `// OpenAI Function Definition Schema
const tools = [{
  name: "query_erp_inventory",
  description: "Queries inventory levels and reorder alerts for specified SKU",
  parameters: {
    type: "object",
    properties: {
      sku: { type: "string" },
      warehouse_id: { type: "integer" }
    },
    required: ["sku"]
  }
}];`,
    },
    {
      id: "token-controls",
      title: "Token Usage & Cost Controls",
      icon: Shield,
      category: "Cost & Limits",
      shortDesc: "Strict budget tracking, token counting, and tier-based rate limiting per client organization.",
      detail:
        "Every AI interaction calculates prompt and completion tokens before and after execution. Subscriptions enforce hard spending limits and fallback gracefully when token quotas are reached.",
      codeSnippet: `class TokenCostControlMiddleware:
    def process_request(self, request, llm_payload):
        user_tier = request.user.subscription_tier
        estimated_tokens = count_prompt_tokens(llm_payload)
        
        if user_tier.tokens_used + estimated_tokens > user_tier.max_quota:
            raise TokenQuotaExceededException("Quota reached. Upgrade tier.")
            
        return request`,
    },
    {
      id: "conversational-memory",
      title: "Conversational Memory & Context",
      icon: Layers,
      category: "Context Window",
      shortDesc: "Sliding window context management with Redis caching for multi-turn agent conversations.",
      detail:
        "Maintains persistent memory across complex dialog turns while truncating stale history to preserve budget and prevent LLM context dilution.",
      codeSnippet: `async function buildContextWindow(sessionId: string, currentPrompt: string) {
  const history = fontCache.getRecentMessages(sessionId, { maxTurns: 10 });
  const systemInstructions = await loadSystemPromptForRole(session.userRole);
  
  return [
    { role: "system", content: systemInstructions },
    ...history,
    { role: "user", content: currentPrompt }
  ];
}`,
    },
    {
      id: "structured-outputs",
      title: "Deterministic Structured JSON",
      icon: Code2,
      category: "Data Integrity",
      shortDesc: "Strict Pydantic/Zod schema enforcement ensuring 100% parseable API outputs.",
      detail:
        "Eliminates hallucinated formats by forcing model outputs into JSON schema contracts, ready to insert directly into relational databases.",
      codeSnippet: `class InventoryRequisitionResponse(BaseModel):
    sku: str
    reorder_recommended: bool
    suggested_order_qty: int = Field(gt=0)
    estimated_supplier_lead_days: int
    confidence_score: float`,
    },
  ]

  const active = aiConcepts.find((c) => c.id === selectedConcept) || aiConcepts[0]

  const handleCopy = () => {
    navigator.clipboard.writeText(active.codeSnippet)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="ai-systems" className="py-24 sm:py-32 relative border-t border-slate-900/80">
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
            <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <Cpu className="w-3.5 h-3.5" />
              <span>Autonomous AI Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100">
              Production AI Systems Architecture
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md font-mono leading-relaxed">
            I build deterministic AI infrastructure — moving beyond simple wrapper API calls to agentic tool execution, token cost enforcement, and enterprise database integration.
          </p>
        </motion.div>

        {/* Interactive Playground Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Concept Selectors */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 font-semibold">
              Select Architecture Mechanism
            </div>
            {aiConcepts.map((item) => {
              const Icon = item.icon
              const isSelected = selectedConcept === item.id

              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedConcept(item.id)}
                  className={`w-full text-left p-4 rounded-xl cursor-pointer border transition-all duration-300 relative overflow-hidden ${
                    isSelected
                      ? "bg-slate-900/90 border-emerald-500/70 shadow-[0_0_25px_-5px_rgba(16,185,129,0.3)]"
                      : "bg-slate-950/50 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/30"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeAiConceptGlow"
                      className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-transparent pointer-events-none"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center justify-between mb-1.5 relative z-10">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`p-1.5 rounded-lg transition-colors ${
                          isSelected ? "bg-emerald-500/20 text-emerald-400" : "bg-slate-800 text-slate-400"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3
                        className={`font-mono text-sm font-bold ${isSelected ? "text-emerald-300" : "text-slate-200"}`}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-400 border border-slate-700/50">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed font-sans relative z-10">
                    {item.shortDesc}
                  </p>
                </button>
              )
            })}
          </div>

          {/* Code & Architectural Inspector */}
          <div className="lg:col-span-7 tech-card p-6 sm:p-7 rounded-2xl border border-slate-800 space-y-5 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-5"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 font-mono text-xs">
                  <div className="flex items-center gap-2 text-slate-200">
                    <Terminal className="w-4 h-4 text-emerald-400" />
                    <span className="font-bold text-sm sm:text-base">{active.title}</span>
                  </div>
                  <span className="text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800/60 text-[10px] font-semibold">
                    PRODUCTION PATTERN
                  </span>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">{active.detail}</p>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>IMPLEMENTATION CODE CONTRACT</span>
                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-1 px-2 py-0.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors text-[10px] cursor-pointer"
                    >
                      {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-slate-400" />}
                      <span>{copied ? "COPIED" : "COPY CODE"}</span>
                    </button>
                  </div>
                  <div className="bg-slate-950 rounded-xl p-4 border border-slate-800/80 font-mono text-xs text-emerald-300/90 overflow-x-auto shadow-inner">
                    <pre className="leading-relaxed">{active.codeSnippet}</pre>
                  </div>
                </div>

                {/* Architecture Flow Banner */}
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800/80 flex items-center justify-between font-mono text-xs overflow-x-auto">
                  <span className="text-slate-400 text-[11px] shrink-0 mr-2">Flow:</span>
                  <div className="flex items-center gap-2 text-[11px] text-slate-200 shrink-0">
                    <span className="text-sky-400">User Query</span>
                    <span className="text-slate-600">→</span>
                    <span className="text-emerald-400">Tool Selection</span>
                    <span className="text-slate-600">→</span>
                    <span className="text-indigo-400">Django Backend</span>
                    <span className="text-slate-600">→</span>
                    <span className="text-teal-300">PostgreSQL Store</span>
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
