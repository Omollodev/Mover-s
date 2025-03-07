"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function RecentTickets() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">John Doe</p>
          <p className="text-sm text-muted-foreground">Downtown to Business Park</p>
        </div>
        <div className="ml-auto font-medium">+$12.99</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback>MS</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Mary Smith</p>
          <p className="text-sm text-muted-foreground">Central Station to Airport</p>
        </div>
        <div className="ml-auto font-medium">+$18.99</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback>RJ</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Robert Johnson</p>
          <p className="text-sm text-muted-foreground">North Terminal to South Terminal</p>
        </div>
        <div className="ml-auto font-medium">+$15.99</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback>SB</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Sarah Brown</p>
          <p className="text-sm text-muted-foreground">City Center to University</p>
        </div>
        <div className="ml-auto font-medium">+$9.99</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback>TD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Tom Davis</p>
          <p className="text-sm text-muted-foreground">Downtown to Business Park</p>
        </div>
        <div className="ml-auto font-medium">+$12.99</div>
      </div>
    </div>
  )
}

