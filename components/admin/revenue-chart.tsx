"use client"

import { useState } from "react"
import { Line, LineChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Legend } from "recharts"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const monthlyData = [
  { name: "Jan", revenue: 35000, expenses: 22000, profit: 13000 },
  { name: "Feb", revenue: 38000, expenses: 24000, profit: 14000 },
  { name: "Mar", revenue: 42000, expenses: 25000, profit: 17000 },
  { name: "Apr", revenue: 48000, expenses: 27000, profit: 21000 },
  { name: "May", revenue: 50000, expenses: 28000, profit: 22000 },
  { name: "Jun", revenue: 54000, expenses: 30000, profit: 24000 },
  { name: "Jul", revenue: 58000, expenses: 31000, profit: 27000 },
  { name: "Aug", revenue: 61000, expenses: 32000, profit: 29000 },
  { name: "Sep", revenue: 56000, expenses: 30000, profit: 26000 },
  { name: "Oct", revenue: 60000, expenses: 32000, profit: 28000 },
  { name: "Nov", revenue: 58000, expenses: 31000, profit: 27000 },
  { name: "Dec", revenue: 65000, expenses: 35000, profit: 30000 },
]

const quarterlyData = [
  { name: "Q1", revenue: 115000, expenses: 71000, profit: 44000 },
  { name: "Q2", revenue: 152000, expenses: 85000, profit: 67000 },
  { name: "Q3", revenue: 175000, expenses: 93000, profit: 82000 },
  { name: "Q4", revenue: 183000, expenses: 98000, profit: 85000 },
]

export function RevenueChart() {
  const [timeframe, setTimeframe] = useState("monthly")
  const data = timeframe === "monthly" ? monthlyData : quarterlyData

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-medium">Revenue Overview</h3>
        <Select defaultValue="monthly" onValueChange={setTimeframe}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select timeframe" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="monthly">Monthly</SelectItem>
            <SelectItem value="quarterly">Quarterly</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <ChartContainer
        config={{
          revenue: {
            label: "Revenue",
            color: "hsl(var(--chart-1))",
          },
          expenses: {
            label: "Expenses",
            color: "hsl(var(--chart-2))",
          },
          profit: {
            label: "Profit",
            color: "hsl(var(--chart-3))",
          },
        }}
      >
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={(value) => `$${value / 1000}k`} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="var(--color-revenue)" name="Revenue" />
            <Line type="monotone" dataKey="expenses" stroke="var(--color-expenses)" name="Expenses" />
            <Line type="monotone" dataKey="profit" stroke="var(--color-profit)" name="Profit" />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  )
}

