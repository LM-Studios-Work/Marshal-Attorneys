"use client"

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts"
import Link from "next/link"

const data = [
  { name: "Conveyancing", value: 32 },
  { name: "Litigation", value: 18 },
  { name: "Family Law", value: 12 },
  { name: "Labour Law", value: 11 },
  { name: "Estate Law", value: 10 },
  { name: "Notarial Services", value: 9 },
  { name: "Corporate / BEE", value: 8 },
]

const COLORS = [
  "#b9896a", // tan
  "#0f1d35", // dark-bg
  "#c4a48d", // tan light
  "#1e3256", // navy lighter
  "#d4b89e", // tan lighter
  "#2d4a73", // navy mid
  "#eef0f5", // soft-bg — will get dark text via label
]

const STROKE = "#fff"

export function AboutServicesChart() {
  return (
    <section className="bg-soft-bg py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
          {/* Left copy */}
          <div>
            <p className="text-[11px] tracking-[0.28em] uppercase text-tan">
              Our service breakdown
            </p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-tight text-dark-bg text-balance">
              A year of excellence
            </h2>
            <p className="mt-7 text-sm leading-relaxed text-muted-foreground max-w-md">
              Curious about how we&apos;ve been serving our clients this year?
              Our breakdown reveals the diverse range of legal services we have
              provided, showcasing our commitment to excellence across various
              fields — from conveyancing to corporate governance.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground max-w-md">
              See how our expertise is making a difference and find out why so
              many clients trust us with their legal needs.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center px-7 py-3 bg-tan text-white text-[11px] tracking-[0.22em] uppercase hover:bg-dark-bg transition-colors"
            >
              See Case Results
            </Link>
          </div>

          {/* Right chart */}
          <div className="w-full h-[420px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={160}
                  paddingAngle={2}
                  dataKey="value"
                  stroke={STROKE}
                  strokeWidth={2}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: number) => [`${value}%`, "Share"]}
                  contentStyle={{
                    background: "#0f1d35",
                    border: "none",
                    borderRadius: 0,
                    color: "#fff",
                    fontSize: 12,
                    letterSpacing: "0.05em",
                  }}
                  itemStyle={{ color: "#b9896a" }}
                />
                <Legend
                  iconType="circle"
                  iconSize={8}
                  formatter={(value) => (
                    <span className="text-xs text-dark-bg/80">{value}</span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  )
}
