import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { QRCode } from "@/components/tickets/qr-code"

export default function TicketsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Purchase Tickets</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Buy a Ticket</CardTitle>
            <CardDescription>Choose your route and payment method</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="route">Select Route</Label>
              <Select>
                <SelectTrigger id="route">
                  <SelectValue placeholder="Select a route" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="route1">Central Station to Airport</SelectItem>
                  <SelectItem value="route2">Downtown to Business Park</SelectItem>
                  <SelectItem value="route3">North Terminal to South Terminal</SelectItem>
                  <SelectItem value="route4">City Center to University</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="quantity">Number of Tickets</Label>
              <Input id="quantity" type="number" min="1" defaultValue="1" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Travel Date</Label>
              <Input id="date" type="date" />
            </div>

            <div className="space-y-2">
              <Label>Payment Method</Label>
              <RadioGroup defaultValue="mpesa">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="mpesa" id="mpesa" />
                  <Label htmlFor="mpesa" className="font-normal">
                    M-Pesa
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="font-normal">
                    Credit/Debit Card
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="paypal" id="paypal" />
                  <Label htmlFor="paypal" className="font-normal">
                    PayPal
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Purchase Ticket</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Ticket</CardTitle>
            <CardDescription>Scan this QR code during your journey</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center space-y-4">
            <QRCode />
            <div className="text-center space-y-1">
              <p className="font-medium">Route: Central Station to Airport</p>
              <p>Valid: Oct 15, 2023</p>
              <p>Passenger: John Doe</p>
              <p className="text-sm text-muted-foreground">Ticket ID: TKT-12345678</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Save</Button>
            <Button>Download</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

