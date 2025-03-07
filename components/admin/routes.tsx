"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

const initialRoutes = [
  {
    id: "1",
    name: "Central Station to Airport",
    distance: "15 km",
    fare: "$18.99",
    status: "Active",
  },
  {
    id: "2",
    name: "Downtown to Business Park",
    distance: "8 km",
    fare: "$12.99",
    status: "Active",
  },
  {
    id: "3",
    name: "North Terminal to South Terminal",
    distance: "12 km",
    fare: "$15.99",
    status: "Active",
  },
  {
    id: "4",
    name: "City Center to University",
    distance: "5 km",
    fare: "$9.99",
    status: "Active",
  },
  {
    id: "5",
    name: "West End to Shopping Mall",
    distance: "7 km",
    fare: "$11.99",
    status: "Inactive",
  },
]

export function Routes() {
  const [routes, setRoutes] = useState(initialRoutes)
  const [searchQuery, setSearchQuery] = useState("")
  const [open, setOpen] = useState(false)

  const filteredRoutes = routes.filter((route) => route.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Input
          placeholder="Search routes..."
          className="max-w-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>Add Route</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Route</DialogTitle>
              <DialogDescription>Create a new transport route with fare details.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Route Name
                </Label>
                <Input id="name" placeholder="e.g. Central to Airport" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="distance" className="text-right">
                  Distance
                </Label>
                <Input id="distance" placeholder="e.g. 15 km" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="fare" className="text-right">
                  Fare
                </Label>
                <Input id="fare" placeholder="e.g. $15.99" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={() => setOpen(false)}>
                Save Route
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Route Name</TableHead>
            <TableHead>Distance</TableHead>
            <TableHead>Fare</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredRoutes.map((route) => (
            <TableRow key={route.id}>
              <TableCell className="font-medium">{route.name}</TableCell>
              <TableCell>{route.distance}</TableCell>
              <TableCell>{route.fare}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    route.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}
                >
                  {route.status}
                </span>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-500">
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

