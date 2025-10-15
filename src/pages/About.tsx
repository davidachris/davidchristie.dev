import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail } from "lucide-react"
import pfpImage from "@/assets/pfp-resume.png"
import { email, githubLink, linkedinLink } from "@/data/data"

export function About() {
  const skills = {
    "Languages": ["Python", "TypeScript", "JavaScript", "Go", "Java", "C#", "Bash"],
    "Cloud & Infrastructure": ["AWS", "Docker", "Kubernetes", "Terraform", "GitLab CI/CD", "Github CI/CD", "Ansible"],
    "Data & Analytics": ["Data Engineering", "ETL/ELT Pipelines", "Data Acquisition", "Streaming Analytics"],
    "Backend & APIs": ["REST APIs", "System Architecture", "API Design", "Web Automation"],
    "Tools & Frameworks": ["React", "Hono", "Google Apps Script", "Git", "PostgreSQL", "MongoDB", "FastAPI", "Vite"]
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
    {
      name: "Email",
      href: `mailto:${email}`,
      icon: Mail,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-12">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Profile Picture */}
          <div className="flex justify-center mb-6">
            <img 
              src={pfpImage} 
              alt="David Christie" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/20 shadow-lg"
            />
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight -mb-2">
            David Christie
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mt-1">
            Software Engineer
          </p>
          
            {/* Extended About Content */}
            <div className="space-y-4 text-base md:text-lg text-muted-foreground max-w-3xl mx-auto pt-4">
              <p>
              I’m a self-taught software engineer who turned curiosity into a career. 
              What began as late nights automating spreadsheets became production systems that power global media analytics. 
              Along the way, I earned a U.S. patent, built data platforms from the ground up, and learned to see code as both a craft and a catalyst. 
              I thrive where complex problems meet creative solutions, and where there’s always something new to build.
              </p>
            </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-4 pt-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <link.icon className="h-5 w-5" />
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Skills Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="animate-in fade-in-50 slide-in-from-bottom-4">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
