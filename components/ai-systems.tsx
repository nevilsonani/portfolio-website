"use client"

import { useState } from "react"
import { Cpu, Terminal, Shield, Zap, Database, Lock, ArrowRight, Sparkles, Code2, Sliders, Layers } from "lucide-react"

export function AISystems() {
  const [selectedConcept, setSelectedConcept] = useState<string>("function-calling")

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

  return (
    <section id="ai-systems" className="py-24 bg-[#07080c] relative border-t border-slate-900">
      <div className="container mx-auto px-4 max-w-6xl space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest">
              <Cpu className="w-3.5 h-3.5" />
              <span>02 // Signature AI Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100">
              Production AI Systems Architecture
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md font-mono leading-relaxed">
            I build deterministic AI infrastructure — moving beyond simple wrapper API calls to agentic tool execution, token cost enforcement, and enterprise database integration.
          </p>
        </div>

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
                <div
                  key={item.id}
                  onClick={() => setSelectedConcept(item.id)}
                  className={`p-4 rounded-xl cursor-pointer border transition-all duration-300 ${
                    isSelected
                      ? "bg-slate-900 border-emerald-500/70 shadow-[0_0_20px_-5px_rgba(16,185,129,0.25)]"
                      : "bg-slate-950/50 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/30"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`p-1.5 rounded-md ${
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
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed font-sans">{item.shortDesc}</p>
                </div>
              )
            })}
          </div>

          {/* Code & Architectural Inspector */}
          <div className="lg:col-span-7 tech-card p-6 rounded-2xl border border-slate-800 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 font-mono text-xs">
              <div className="flex items-center gap-2 text-slate-200">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span className="font-bold text-sm">{active.title}</span>
              </div>
              <span className="text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800/60 text-[10px]">
                PRODUCTION PATTERN
              </span>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">{active.detail}</p>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>IMPLEMENTATION CODE PATTERN</span>
                <span className="text-slate-500">TYPESCRIPT / PYTHON</span>
              </div>
              <div className="bg-slate-950 rounded-xl p-4 border border-slate-800/80 font-mono text-xs text-emerald-300/90 overflow-x-auto">
                <pre className="leading-relaxed">{active.codeSnippet}</pre>
              </div>
            </div>

            {/* Architecture Flow Banner */}
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800/80 flex items-center justify-between font-mono text-xs">
              <span className="text-slate-400 text-[11px]">System Flow:</span>
              <div className="flex items-center gap-2 text-[11px] text-slate-200">
                <span className="text-sky-400">User Query</span>
                <span className="text-slate-600">→</span>
                <span className="text-emerald-400">Function Call</span>
                <span className="text-slate-600">→</span>
                <span className="text-indigo-400">Django API</span>
                <span className="text-slate-600">→</span>
                <span className="text-teal-300">PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
