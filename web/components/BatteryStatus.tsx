'use client'

import { useEffect, useState } from 'react'

interface Track {
  id: string
  condition: string
  status: 'complete' | 'active' | 'planned'
  rounds: number
}

interface Phase {
  id: number
  model: string
  tracks_total: number
  tracks_complete: number
  rounds_total: number
  rounds_complete: number
  status: 'complete' | 'active' | 'planned'
  tracks: Track[]
}

interface BatteryData {
  updated_at: string
  phases: Phase[]
  totals: {
    tracks: number
    rounds: number
    tracks_complete: number
    rounds_complete: number
  }
}

const statusDot = {
  complete: 'bg-success shadow-[0_0_6px_#22c55e]',
  active:   'bg-accent shadow-[0_0_6px_#8b5cf6] animate-pulse',
  planned:  'bg-muted',
}

const statusLabel = {
  complete: 'Complete',
  active:   'Active',
  planned:  'Planned',
}

export default function BatteryStatus() {
  const [data, setData] = useState<BatteryData | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/api/battery-status', { cache: 'no-store' })
        if (!res.ok) throw new Error('non-200')
        setData(await res.json())
      } catch {
        setError(true)
      }
    }

    load()
    const interval = setInterval(load, 60_000) // refresh every 60s
    return () => clearInterval(interval)
  }, [])

  if (error) return (
    <div className="font-mono text-[0.7rem] text-muted">
      Battery status unavailable
    </div>
  )

  if (!data) return (
    <div className="font-mono text-[0.7rem] text-muted animate-pulse">
      Connecting...
    </div>
  )

  const pct = Math.round((data.totals.rounds_complete / data.totals.rounds) * 100)

  return (
    <div className="card p-0 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full flex-shrink-0 ${statusDot['active']}`} />
          <span className="font-mono text-[0.65rem] text-bright tracking-[0.1em] uppercase">
            Battery Status
          </span>
        </div>
        <span className="font-mono text-[0.6rem] text-muted">
          {data.totals.rounds_complete} / {data.totals.rounds} rounds
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-[2px] bg-border">
        <div
          className="h-full bg-accent transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>

      {/* Phases */}
      <div className="divide-y divide-border">
        {data.phases.map(phase => (
          <div key={phase.id} className="px-4 py-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${statusDot[phase.status]}`} />
                <span className="font-mono text-[0.72rem] text-text">
                  Phase {phase.id}
                </span>
                <span className="font-mono text-[0.65rem] text-muted">
                  — {phase.model}
                </span>
              </div>
              <span className={`badge badge-${phase.status}`}>
                {statusLabel[phase.status]}
              </span>
            </div>

            {/* Track list — only show for active/complete phases */}
            {phase.tracks.length > 0 && (
              <div className="grid grid-cols-1 gap-0.5 mt-2 ml-3.5">
                {phase.tracks.map(track => (
                  <div key={track.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className={`w-1 h-1 rounded-full flex-shrink-0 ${
                        track.status === 'complete' ? 'bg-success' :
                        track.status === 'active'   ? 'bg-accent animate-pulse' :
                        'bg-muted'
                      }`} />
                      <span className="font-mono text-[0.65rem] text-dim">{track.id}</span>
                    </div>
                    <span className="font-mono text-[0.6rem] text-muted">
                      {track.status === 'complete' ? `${track.rounds} rounds` :
                       track.status === 'active'   ? `${track.rounds} / 100` :
                       'planned'}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {phase.tracks.length === 0 && (
              <div className="ml-3.5 font-mono text-[0.65rem] text-muted">
                Track design pending Phase 2 findings
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-4 py-2 border-t border-border bg-bg">
        <span className="font-mono text-[0.6rem] text-muted">
          Updated {new Date(data.updated_at).toLocaleDateString('en-US', {
            month: 'short', day: 'numeric', year: 'numeric'
          })}
        </span>
      </div>
    </div>
  )
}
