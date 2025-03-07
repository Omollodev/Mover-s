import Link from "next/link"
import { ArrowRight, CreditCard, Globe, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Modern Fare Collection for Transport Operators
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  A secure and user-friendly platform for passengers to pay fares online while enabling transport
                  operators to manage transactions effectively.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/register">
                  <Button size="lg" className="w-full">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/login">
                  <Button variant="outline" size="lg" className="w-full">
                    Log In
                  </Button>
                </Link>
              </div>
            </div>
            <img
              src="/app/assets/img/Bus2.jpeg"
              alt="Fare Collection System"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              width={550}
              height={310}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform is designed to modernize fare payment processes and enhance operational efficiency for
                transport operators.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
            <Card className="flex flex-col items-center text-center">
              <CardHeader>
                <div className="p-2 rounded-full bg-primary/10 mb-4 inline-flex">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Multiple Payment Options</CardTitle>
                <CardDescription>Support for mobile money, credit/debit cards, and digital wallets.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="flex flex-col items-center text-center">
              <CardHeader>
                <div className="p-2 rounded-full bg-primary/10 mb-4 inline-flex">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Real-Time Processing</CardTitle>
                <CardDescription>
                  Instant fare processing and transaction tracking for both passengers and operators.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="flex flex-col items-center text-center">
              <CardHeader>
                <div className="p-2 rounded-full bg-primary/10 mb-4 inline-flex">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Enhanced Security</CardTitle>
                <CardDescription>OAuth 2.0, JWT, and role-based access control for maximum security.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Modernize Your Fare Collection?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of transport operators who have enhanced their operations with our platform.
              </p>
            </div>
            <Link href="/register">
              <Button size="lg">Start Your Free Trial</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12">
          <div className="flex-1 space-y-4">
            <div className="text-xl font-bold">Fare Collection</div>
            <p className="text-sm text-muted-foreground">Modern fare collection for the transportation industry.</p>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:gap-12">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container flex flex-col gap-4 border-t py-6 md:flex-row md:items-center md:gap-0 md:py-8">
          <p className="text-xs text-muted-foreground md:order-2 md:ml-auto">© 2025 Fare Collection. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

