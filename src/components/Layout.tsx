import { Link, useLocation } from "react-router"
import { Github, Linkedin} from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"
import { Button } from "./ui/button"
import { githubLink, linkedinLink } from "@/data/data"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  const socialLinks = [
    {
      name: "LinkedIn",
      href: linkedinLink,
      icon: Linkedin,
    },
        {
          name: "GitHub",
          href: githubLink,
          icon: Github,
        },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Left side - Navigation */}
          <nav className="flex items-center space-x-4 md:space-x-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              About
            </Link>
            <Link
              to="/experience"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/experience") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Experience
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/contact") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right side - Social links and theme toggle */}
          <div className="flex items-center space-x-2">
            {/* Social links - hidden on mobile */}
            <div className="hidden sm:flex items-center space-x-1">
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="h-9 w-9 px-0"
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                  >
                    <link.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} David Christie. All rights reserved.
            </div>
            
            {/* Social links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
