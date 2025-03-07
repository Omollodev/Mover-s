import type React from "react"
import { DashboardSidebar } from "@/components/dashboard/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid min-h-[calc(100vh-64px)] md:grid-cols-[240px_1fr]">
      <DashboardSidebar />
      <main className="flex flex-1 flex-col">{children}</main>
    </div>
  )
}

