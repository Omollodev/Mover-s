"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    total: 3800,
  },
  {
    name: "Feb",
    total: 3500,
  },
  {
    name: "Mar",
    total: 4200,
  },
  {
    name: "Apr",
    total: 5100,
  },
  {
    name: "May",
    total: 4900,
  },
  {
    name: "Jun",
    total: 5800,
  },
  {
    name: "Jul",
    total: 6300,
  },
  {
    name: "Aug",
    total: 6500,
  },
  {
    name: "Sep",
    total: 5700,
  },
  {
    name: "Oct",
    total: 6100,
  },
  {
    name: "Nov",
    total: 5800,
  },
  {
    name: "Dec",
    total: 7200,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar dataKey="total" fill="currentColor" radius={[4, 4, 0, 0]} className="fill-primary" />
        <CartesianGrid stroke="#e5e7eb" strokeDasharray="5 5" />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background p-2 shadow-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-xs text-muted-foreground">Month</div>
                    <div className="text-xs font-medium text-right">{payload[0].payload.name}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-xs text-muted-foreground">Revenue</div>
                    <div className="text-xs font-medium text-right">${payload[0].value}</div>
                  </div>
                </div>
              )
            }
            return null
          }}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

