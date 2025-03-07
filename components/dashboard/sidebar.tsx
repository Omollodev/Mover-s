"use client"

import Link from "next/link"
import { BarChart3, CreditCard, Home, Settings, Ticket, Users } from "lucide-react"

export function DashboardSidebar() {
  return (
    <div className="flex h-full flex-col border-r bg-muted/40">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="hidden md:inline">Dashboard</span>
        </Link>
      </div>
      <div className="flex-1">
        <nav className="grid gap-1 px-2 py-4 text-sm font-medium">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted"
          >
            <Home className="h-4 w-4" />
            Overview
          </Link>
          <Link
            href="/dashboard/tickets"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted"
          >
            <Ticket className="h-4 w-4" />
            Tickets
          </Link>
          <Link
            href="/dashboard/routes"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted"
          >
            <BarChart3 className="h-4 w-4" />
            Routes
          </Link>
          <Link
            href="/dashboard/payments"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted"
          >
            <CreditCard className="h-4 w-4" />
            Payments
          </Link>
          <Link
            href="/dashboard/users"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted"
          >
            <Users className="h-4 w-4" />
            Users
          </Link>
          <Link
            href="/dashboard/settings"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted"
          >
            <Settings className="h-4 w-4" />
            Settings
          </Link>
        </nav>
      </div>
    </div>
  )
}

