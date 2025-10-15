import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MapPin } from "lucide-react"
import { TypingAnimation } from "@/components/TypingAnimation"
import { email, workLocation } from "@/data/data"

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: email,
      href: `mailto:${email}`
    },
    {
      icon: Phone,
      label: "Phone",
      value: "Available upon request",
      href: null
    },
    {
      icon: MapPin,
      label: "Location",
      value: workLocation,
      href: null
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Get In Touch
        </h1>
        <div className="flex justify-center">
            <TypingAnimation className="bg-muted/50 px-4 py-2 rounded-lg" />
        </div>
      </section>

      <Separator className="my-8" />

      {/* Contact Content */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Information */}
            <Card className="animate-in fade-in-50 slide-in-from-left-4">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Let's Connect */}
            <Card className="animate-in fade-in-50 slide-in-from-right-4">
              <CardHeader>
                <CardTitle>Let's Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a chat about technology and software development. I'm also 
                  available for techincal consulting.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium">What I'm interested in:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Techincal/Software Consulting</li>
                    <li>• Backend engineering opportunities</li>
                    <li>• Data engineering and analytics projects</li>
                    <li>• Fullstack application development</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
