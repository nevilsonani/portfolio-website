"use client"

import { useState, useEffect } from "react"
import { Cpu, Database, Server, Terminal, Zap, Activity, RefreshCw, Play } from "lucide-react"

interface SystemNode {
  id: string
  label: string
  sublabel: string
  icon: any
  metrics: string
  payload: string
}

export function HeroSystemVisualizer() {
  const [activeNode, setActiveNode] = useState<string>("agent")
  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  const [step, setStep] = useState<number>(1)
  const [tokensUsed, setTokensUsed] = useState<number>(412)
  const [latency, setLatency] = useState<number>(142)

  const nodes: SystemNode[] = [
    {
      id: "input",
      label: "User Query",
      sublabel: "Natural Language Prompt",
      icon: Terminal,
      metrics: "Input: 28 tokens",
      payload: `"Show top 5 reorder alerts and generate purchase requisition"`,
    },
    {
      id: "agent",
      label: "GPT-4 Agent",
      sublabel: "Context & Function Calling",
      icon: Cpu,
      metrics: "Memory: 1,024 tokens",
      payload: `{\n  "selected_tool": "get_inventory_alerts",\n  "arguments": { "threshold": 15, "include_vendors": true },\n  "confidence": 0.992\n}`,
    },
    {
      id: "api",
      label: "Django API",
      sublabel: "Auth & Rate Limit Controls",
      icon: Server,
      metrics: "HTTP 200 • Auth Passed",
      payload: `POST /api/v1/erp/tools/inventory_alerts\nHeader: Authorization: Bearer JWT_eyJ...\nRole: StoreManager`,
    },
    {
      id: "db",
      label: "PostgreSQL / Redis",
      sublabel: "Optimized Query Engine",
      icon: Database,
      metrics: "18ms Query Latency",
      payload: `SELECT item_id, stock_qty, reorder_level \nFROM inventory \nWHERE stock_qty < reorder_level \nLIMIT 5;`,
    },
    {
      id: "output",
      label: "Production Result",
      sublabel: "Structured JSON Response",
      icon: Zap,
      metrics: "Total Latency: 142ms",
      payload: `{\n  "alert_count": 5,\n  "requisition_created": true,\n  "total_cost": "$0.0024",\n  "status": "COMPLETED"\n}`,
    },
  ]

  // Auto animation simulation cycle
  useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(() => {
      setStep((prev) => {
        const next = prev >= 5 ? 1 : prev + 1
        if (next === 1) {
          setTokensUsed(380 + Math.floor(Math.random() * 80))
          setLatency(120 + Math.floor(Math.random() * 45))
        }
        return next
      })
    }, 1800)
    return () => clearInterval(interval)
  }, [isPlaying])

  const selectedNodeData = nodes.find((n) => n.id === activeNode) || nodes[1]

  return (
    <div className="w-full tech-card rounded-2xl p-3.5 sm:p-6 border border-slate-800/80 shadow-2xl relative overflow-hidden">
      {/* Top Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 pb-3.5 mb-4 border-b border-slate-800/80 text-xs font-mono">
        <div className="flex items-center gap-2 text-slate-300">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-semibold tracking-wider text-slate-200 uppercase text-[10px] sm:text-xs">
            System Architecture Execution Trace
          </span>
        </div>

        <div className="flex items-center gap-2 text-slate-400 text-[10px] sm:text-xs flex-wrap">
          <div className="flex items-center gap-1 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
            <Activity className="w-3 h-3 text-sky-400" />
            <span>Latency: <strong className="text-sky-400">{latency}ms</strong></span>
          </div>
          <div className="flex items-center gap-1 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
            <Cpu className="w-3 h-3 text-emerald-400" />
            <span>Tokens: <strong className="text-emerald-400">{tokensUsed}</strong></span>
          </div>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1 px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded transition-colors"
            title={isPlaying ? "Pause execution loop" : "Play execution loop"}
          >
            {isPlaying ? <RefreshCw className="w-3 h-3 animate-spin text-sky-400" /> : <Play className="w-3 h-3 text-emerald-400" />}
            <span>{isPlaying ? "Live" : "Paused"}</span>
          </button>
        </div>
      </div>

      {/* Nodes Flow horizontal diagram on desktop / grid on mobile */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3 relative z-10 my-2">
        {nodes.map((node, index) => {
          const IconComponent = node.icon
          const isActive = activeNode === node.id
          const isStepPassed = step >= index + 1

          return (
            <div
              key={node.id}
              onClick={() => {
                setActiveNode(node.id)
                setIsPlaying(false)
              }}
              className={`group cursor-pointer rounded-xl p-2.5 sm:p-3.5 transition-all duration-300 relative border ${
                isActive
                  ? "bg-sky-950/40 border-sky-500/80 shadow-[0_0_20px_-3px_rgba(56,189,248,0.3)]"
                  : isStepPassed
                  ? "bg-slate-900/90 border-slate-700/80 hover:border-slate-600"
                  : "bg-slate-950/40 border-slate-900 text-slate-500 hover:border-slate-800"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div
                  className={`p-1.5 rounded-lg ${
                    isActive
                      ? "bg-sky-500/20 text-sky-400"
                      : isStepPassed
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "bg-slate-800/50 text-slate-500"
                  }`}
                >
                  <IconComponent className="w-3.5 h-3.5" />
                </div>
                <span className="text-[9px] font-mono text-slate-500">0{index + 1}</span>
              </div>

              <h4
                className={`text-[11px] sm:text-xs font-bold font-mono tracking-tight mb-0.5 ${
                  isActive ? "text-sky-300" : isStepPassed ? "text-slate-200" : "text-slate-500"
                }`}
              >
                {node.label}
              </h4>
              <p className="text-[9px] text-slate-400 truncate">{node.sublabel}</p>

              <div className="mt-2 pt-1.5 border-t border-slate-800/60 flex items-center justify-between text-[9px] font-mono">
                <span className={isStepPassed ? "text-emerald-400" : "text-slate-600"}>
                  {isStepPassed ? "✓ Done" : "Wait"}
                </span>
                {isActive && <span className="text-sky-400 animate-pulse hidden sm:inline-block">● Active</span>}
              </div>
            </div>
          )
        })}
      </div>

      {/* Detail Inspector Box */}
      <div className="mt-3 sm:mt-4 bg-slate-950/80 rounded-xl p-3 sm:p-4 border border-slate-800/90 font-mono text-xs">
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[10px] sm:text-[11px] text-slate-400 flex-wrap gap-1">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span className="text-slate-200 font-semibold truncate">{selectedNodeData.label} — Live Telemetry</span>
          </div>
          <span className="text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/40 text-[9px] sm:text-[10px]">
            {selectedNodeData.metrics}
          </span>
        </div>

        <pre className="text-sky-300/90 bg-slate-900/60 p-2.5 sm:p-3 rounded-lg overflow-x-auto text-[10px] sm:text-[11px] leading-relaxed font-mono whitespace-pre-wrap border border-slate-800/50 max-h-36 overflow-y-auto">
          {selectedNodeData.payload}
        </pre>
      </div>
    </div>
  )
}
