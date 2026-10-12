"use client"

import { useState, useEffect, useRef } from "react"
import { Cpu, Database, Server, Terminal, Zap, Activity, RefreshCw, Play, Check, Copy, Sparkles, Layers, ArrowRight } from "lucide-react"

interface PresetQuery {
  id: string
  name: string
  description: string
  prompt: string
  nodes: {
    id: string
    label: string
    sublabel: string
    icon: any
    metrics: string
    latencyMs: number
    payload: string
  }[]
}

export function HeroSystemVisualizer() {
  const [selectedPresetIndex, setSelectedPresetIndex] = useState<number>(0)
  const [activeNodeIndex, setActiveNodeIndex] = useState<number>(1)
  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  const [activeStep, setActiveStep] = useState<number>(2)
  const [copied, setCopied] = useState<boolean>(false)
  const [currentLatency, setCurrentLatency] = useState<number>(138)
  const [tokensCounter, setTokensCounter] = useState<number>(428)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const presets: PresetQuery[] = [
    {
      id: "agentic-erp",
      name: "Autonomous AI Agent",
      description: "NL Query → GPT-4 Tool Dispatch → PostgreSQL",
      prompt: `"Show top 5 inventory reorder alerts and generate PO requisition"`,
      nodes: [
        {
          id: "input",
          label: "User Prompt",
          sublabel: "NL Intent",
          icon: Terminal,
          metrics: "Input: 24 tokens",
          latencyMs: 12,
          payload: `POST /api/v1/agent/query\nContent-Type: application/json\n\n{\n  "prompt": "Show top 5 inventory reorder alerts and generate PO requisition",\n  "user_role": "WarehouseManager",\n  "facility_id": "WH-US-EAST"\n}`,
        },
        {
          id: "agent",
          label: "GPT-4 Agent",
          sublabel: "Tool Calling",
          icon: Cpu,
          metrics: "Prompt + Tool: 890 tok",
          latencyMs: 78,
          payload: `// Agent Function Calling Resolution\n{\n  "thought": "User needs critical low-stock items and an auto-requisition draft.",\n  "tool_calls": [{\n    "name": "get_inventory_alerts",\n    "arguments": { "threshold_ratio": 0.2, "limit": 5, "auto_po": true }\n  }],\n  "confidence": 0.994\n}`,
        },
        {
          id: "api",
          label: "Django API",
          sublabel: "RBAC & Validation",
          icon: Server,
          metrics: "HTTP 200 OK • 14ms",
          latencyMs: 14,
          payload: `def dispatch_inventory_tool(request, tool_call):\n    verify_rbac(request.user, permission="PO_REQUISITION_WRITE")\n    validated_args = InventoryAlertSchema(**tool_call.arguments)\n    return inventory_service.fetch_alerts_and_create_draft(validated_args)`,
        },
        {
          id: "db",
          label: "PostgreSQL",
          sublabel: "Indexed Query",
          icon: Database,
          metrics: "Query: 18ms",
          latencyMs: 18,
          payload: `SELECT i.sku, i.stock_qty, i.reorder_level, v.vendor_name\nFROM inventory i\nJOIN vendors v ON i.vendor_id = v.id\nWHERE i.stock_qty <= i.reorder_level\nORDER BY (i.stock_qty / i.reorder_level) ASC\nLIMIT 5;`,
        },
        {
          id: "output",
          label: "JSON Output",
          sublabel: "Completed",
          icon: Zap,
          metrics: "Total: 138ms • $0.0021",
          latencyMs: 16,
          payload: `{\n  "status": "SUCCESS",\n  "alerts_retrieved": 5,\n  "requisition_po_id": "PO-2026-9481",\n  "total_stock_deficit": 340,\n  "audit_signature": "sha256_e7f91a...",\n  "latency_ms": 138\n}`,
        },
      ],
    },
    {
      id: "rag-vector",
      name: "Production RAG Engine",
      description: "Dense Embedding → Hybrid Search → Grounded LLM",
      prompt: `"What are our SLA penalties for Tier-1 database downtime?"`,
      nodes: [
        {
          id: "input",
          label: "Client Query",
          sublabel: "Semantic Request",
          icon: Terminal,
          metrics: "Input: 18 tokens",
          latencyMs: 10,
          payload: `GET /api/v1/kb/ask?q=What+are+our+SLA+penalties+for+Tier-1+database+downtime%3F\nUser-Tier: Enterprise-Gold`,
        },
        {
          id: "agent",
          label: "Embedding Svc",
          sublabel: "text-embedding-3",
          icon: Cpu,
          metrics: "1,536 Dimensions",
          latencyMs: 42,
          payload: `const embedding = await openai.embeddings.create({\n  model: "text-embedding-3-small",\n  dimensions: 1536,\n  input: query\n});`,
        },
        {
          id: "api",
          label: "Hybrid Search",
          sublabel: "Vector + BM25",
          icon: Server,
          metrics: "Score: 0.941 Cosine",
          latencyMs: 28,
          payload: `// Pinecone + BM25 Keyword Hybrid Search\nconst matches = await vectorIndex.query({\n  vector: embedding.data[0].embedding,\n  topK: 3,\n  includeMetadata: true,\n  filter: { category: "legal_sla" }\n});`,
        },
        {
          id: "db",
          label: "Chunk Cache",
          sublabel: "Redis L2 Store",
          icon: Database,
          metrics: "Hit: 4ms",
          latencyMs: 4,
          payload: `HGETALL kb_chunks:sla_section_4_clause_2\nValue: "Tier-1 downtime >30min incurs a 15% billing credit per month capped at 50%..."`,
        },
        {
          id: "output",
          label: "Grounded Ans",
          sublabel: "Zero Hallucination",
          icon: Zap,
          metrics: "Tokens: 512 • 148ms",
          latencyMs: 64,
          payload: `{\n  "answer": "Tier-1 database downtime exceeding 30 minutes triggers a 15% monthly service credit (Clause 4.2).",\n  "citations": ["Legal_SLA_Master_Agreement_v4.pdf #Page 18"],\n  "groundedness_score": 0.998\n}`,
        },
      ],
    },
    {
      id: "payment-webhook",
      name: "High-Concurrency Webhook",
      description: "Stripe/Razorpay Webhook → Cryptographic Auth → Queue",
      prompt: `"webhook.event: payment_intent.succeeded"`,
      nodes: [
        {
          id: "input",
          label: "Gateway Event",
          sublabel: "Webhook Inbound",
          icon: Terminal,
          metrics: "Payload: 1.8 KB",
          latencyMs: 8,
          payload: `POST /webhooks/payments/razorpay\nHeaders:\n  X-Razorpay-Signature: d2f19a08...\n  Content-Type: application/json`,
        },
        {
          id: "agent",
          label: "Signature Auth",
          sublabel: "HMAC SHA-256",
          icon: Cpu,
          metrics: "Verified in 2ms",
          latencyMs: 2,
          payload: `def verify_signature(raw_body, received_signature, secret):\n    expected = hmac.new(secret.encode(), raw_body, hashlib.sha256).hexdigest()\n    if not hmac.compare_digest(expected, received_signature):\n        raise SecurityException("Invalid webhook signature")`,
        },
        {
          id: "api",
          label: "FastAPI / Node",
          sublabel: "Idempotency Lock",
          icon: Server,
          metrics: "Distributed Lock OK",
          latencyMs: 12,
          payload: `// Acquire Redis lock for idempotent processing\nconst lockAcquired = await redis.set(\`lock:payment:\${event.id}\`, "1", "NX", "EX", 60);\nif (!lockAcquired) return res.status(200).send("Already processed");`,
        },
        {
          id: "db",
          label: "PostgreSQL DB",
          sublabel: "Atomic Tx",
          icon: Database,
          metrics: "COMMIT: 16ms",
          latencyMs: 16,
          payload: `BEGIN TRANSACTION;\nUPDATE orders SET status = 'PAID', paid_at = NOW() WHERE id = 'ORD-8941';\nINSERT INTO audit_ledger (order_id, amount, gateway) VALUES ('ORD-8941', 24900, 'RAZORPAY');\nCOMMIT;`,
        },
        {
          id: "output",
          label: "Courier Dispatch",
          sublabel: "Delhivery Sync",
          icon: Zap,
          metrics: "Tracking ID Generated",
          latencyMs: 22,
          payload: `{\n  "order_status": "FULFILLMENT_QUEUED",\n  "shipping_partner": "Delhivery",\n  "awb_number": "DEL-98412849102",\n  "customer_sms_dispatched": true\n}`,
        },
      ],
    },
  ]

  const currentPreset = presets[selectedPresetIndex]
  const currentNodes = currentPreset.nodes
  const selectedNodeData = currentNodes[activeNodeIndex] || currentNodes[0]

  // Dynamic step animation loop
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setActiveStep((prev) => {
        const next = prev >= 5 ? 1 : prev + 1
        if (next === 1) {
          setCurrentLatency(120 + Math.floor(Math.random() * 40))
          setTokensCounter(390 + Math.floor(Math.random() * 60))
        }
        return next
      })
    }, 1800)

    return () => clearInterval(interval)
  }, [isPlaying])

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedNodeData.payload)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleTriggerRun = () => {
    setActiveStep(1)
    setIsPlaying(true)
    let s = 1
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      s++
      if (s <= 5) {
        setActiveStep(s)
      } else {
        if (timerRef.current) clearInterval(timerRef.current)
      }
    }, 450)
  }

  return (
    <div className="w-full tech-card rounded-2xl p-4 sm:p-6 border border-slate-800/90 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
      {/* Ambient glowing beam behind the top */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-70" />

      {/* Top Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800/80 font-mono text-xs">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-100 tracking-wide uppercase text-xs">
                Live Architecture Pipeline
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 font-mono">
                Interactive Console
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-sans hidden sm:block">
              Click any stage below to inspect production schemas, code logic & metrics.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap text-[11px]">
          <div className="flex items-center gap-1.5 bg-slate-950/90 px-2.5 py-1 rounded-lg border border-slate-800">
            <Activity className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-slate-400">Total Latency:</span>
            <span className="text-sky-300 font-bold">{currentLatency}ms</span>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-950/90 px-2.5 py-1 rounded-lg border border-slate-800">
            <Cpu className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-slate-400">Tokens:</span>
            <span className="text-emerald-300 font-bold">{tokensCounter}</span>
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1 px-2.5 py-1 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-lg border border-slate-700/80 transition-colors cursor-pointer"
            title={isPlaying ? "Pause simulation" : "Play simulation"}
          >
            {isPlaying ? (
              <RefreshCw className="w-3 h-3 text-sky-400 animate-spin" />
            ) : (
              <Play className="w-3 h-3 text-emerald-400" />
            )}
            <span className="text-[10px]">{isPlaying ? "Live" : "Paused"}</span>
          </button>
        </div>
      </div>

      {/* Preset Query Switcher Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-3 scrollbar-none font-mono text-[11px]">
        <span className="text-slate-500 uppercase tracking-wider text-[10px] shrink-0 mr-1">
          Preset Trace:
        </span>
        {presets.map((preset, idx) => (
          <button
            key={preset.id}
            onClick={() => {
              setSelectedPresetIndex(idx)
              setActiveNodeIndex(1)
              handleTriggerRun()
            }}
            className={`px-3 py-1.5 rounded-lg border transition-all shrink-0 cursor-pointer text-left flex items-center gap-1.5 ${
              selectedPresetIndex === idx
                ? "bg-sky-500/15 border-sky-500/60 text-sky-300 shadow-[0_0_15px_-3px_rgba(56,189,248,0.3)] font-semibold"
                : "bg-slate-950/70 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700"
            }`}
          >
            <Sparkles className="w-3 h-3 text-sky-400" />
            <span>{preset.name}</span>
          </button>
        ))}
      </div>

      {/* Interactive Trace Pipeline Nodes */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-2.5 relative z-10 my-3">
        {currentNodes.map((node, index) => {
          const IconComponent = node.icon
          const isSelected = activeNodeIndex === index
          const isPassed = activeStep >= index + 1

          return (
            <div
              key={node.id}
              onClick={() => {
                setActiveNodeIndex(index)
                setIsPlaying(false)
              }}
              className={`group cursor-pointer rounded-xl p-3 sm:p-3.5 transition-all duration-300 relative border ${
                isSelected
                  ? "bg-sky-950/40 border-sky-400 shadow-[0_0_25px_-5px_rgba(56,189,248,0.4)] scale-[1.02]"
                  : isPassed
                  ? "bg-slate-900/90 border-slate-700/90 hover:border-slate-600 hover:scale-[1.01]"
                  : "bg-slate-950/50 border-slate-900 text-slate-500 hover:border-slate-800"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div
                  className={`p-1.5 rounded-lg transition-colors ${
                    isSelected
                      ? "bg-sky-500/25 text-sky-300 shadow-[0_0_10px_rgba(56,189,248,0.4)]"
                      : isPassed
                      ? "bg-emerald-500/15 text-emerald-400"
                      : "bg-slate-800/50 text-slate-600"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono font-bold text-slate-500">
                  0{index + 1}
                </span>
              </div>

              <h4
                className={`text-xs font-bold font-mono tracking-tight mb-0.5 ${
                  isSelected
                    ? "text-sky-300"
                    : isPassed
                    ? "text-slate-100"
                    : "text-slate-500"
                }`}
              >
                {node.label}
              </h4>
              <p className="text-[10px] text-slate-400 truncate font-sans">
                {node.sublabel}
              </p>

              {/* Status footer inside node card */}
              <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono">
                <span className={isPassed ? "text-emerald-400 font-semibold" : "text-slate-600"}>
                  {isPassed ? "✓ EXEC" : "STANDBY"}
                </span>
                {isSelected && (
                  <span className="text-sky-400 font-bold animate-pulse text-[9px]">
                    ● INSPECT
                  </span>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Detail Inspector Box */}
      <div className="mt-3 bg-slate-950 rounded-xl p-3.5 sm:p-4 border border-slate-800/90 font-mono text-xs shadow-inner">
        <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-800/80 text-[11px] text-slate-300 flex-wrap gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <Terminal className="w-4 h-4 text-sky-400 shrink-0" />
            <span className="font-bold text-slate-100 truncate">
              {selectedNodeData.label} — Live Schema & Execution Trace
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-800/50 text-[10px] font-semibold">
              {selectedNodeData.metrics}
            </span>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1 px-2 py-0.5 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded border border-slate-800 text-[10px] transition-colors cursor-pointer"
            >
              {copied ? (
                <Check className="w-3 h-3 text-emerald-400" />
              ) : (
                <Copy className="w-3 h-3 text-slate-400" />
              )}
              <span>{copied ? "COPIED" : "COPY CODE"}</span>
            </button>
          </div>
        </div>

        <pre className="text-sky-300/90 bg-slate-900/80 p-3 sm:p-3.5 rounded-lg overflow-x-auto text-[11px] leading-relaxed font-mono whitespace-pre-wrap border border-slate-800/60 max-h-40 overflow-y-auto selection:bg-sky-500/30">
          {selectedNodeData.payload}
        </pre>
      </div>
    </div>
  )
}
