import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Calendar, MapPin, Building2 } from "lucide-react"
import { calculateDuration } from "@/lib/utils"

interface Position {
  title: string
  startDate: string
  endDate: string
  description: string
  responsibilities: string[]
  technologies: string[]
}

interface Company {
  name: string
  location: string
  positions: Position[]
  dateRange: string
  website?: string
}

const companies: Company[] = [
  {
    name: "MediaRadar, Inc.",
    location: "United States",
    dateRange: "August 2024 - Present",
    website: "https://www.mediaradar.com/",
    positions: [
      {
        title: "Software Engineer",
        startDate: "August 2024",
        endDate: "Present",
        description: "Software Engineer working on legacy data pipeline systems that detect and generate audio fingerprint libraries for advertisements across cable networks nationwide.",
        responsibilities: [
          "Maintain audio fingerprinting systems that detect and catalog advertisements across cable networks nationwide.",
          "Develop RESTful APIs for ingesting MP4 files from distributed edge servers.",
          "Build and optimize data pipelines processing millions of audio fingerprints for real-time ad detection.",
          "Design frontend interfaces enabling operations teams to validate detected ads.",
          "Implement tracking systems to monitor ad frequency and deliver analytics to downstream consumers"
        ],
        technologies: ["Python", "C#", "JS/TS", "Docker", "AWS", "Github CI/CD", "Ansible"]
      }
    ]
  },
  {
    name: "Nielsen",
    location: "Oldsmar, Florida",
    dateRange: "November 2017 - August 2024",
    website: "https://www.nielsen.com/",
    positions: [
      {
        title: "Software Engineer",
        startDate: "November 2021",
        endDate: "August 2024",
        description: "Software Engineer on the Syndicated SVOD (Subscribe Video on Demand) Ratings project, architecting comprehensive ELT applications for reverse engineering streaming services and cataloging thousands of titles.",
        responsibilities: [
          "Architected and implemented comprehensive ELT application for reverse engineering streaming services and cataloging thousands of titles",
          "Designed and deployed metadata software systems feeding SVOD capture tools with automated content discovery",
          "Built custom Kubernetes health check software ensuring 99.9% uptime for critical data processing pipelines",
          "Developed fully automated CI/CD pipelines using GitLab.",
          "Created Terraform IaC templates managing AWS resources across multiple environments",
          "Led technical design and implementation of new applications meeting evolving business requirements",
          "Collaborated with operations teams to develop utility tools reducing manual processing time by 75%",
          "Recieved a US Patent for contributions on the SVOD project."
        ],
        technologies: ["Python", "Bash", "Terraform", "AWS", "Kubernetes", "GitLab CI/CD", "Docker", "Web Automation"]
      },
      {
        title: "Senior Digital Analyst",
        startDate: "September 2021",
        endDate: "November 2021",
        description: "Senior Digital Analyst on the Syndicated SVOD Ratings project, driving operational efficiency improvements of 75% within 6 months through strategic automation initiatives.",
        responsibilities: [
          "Drove operational efficiency improvements of 75% within 6 months through strategic automation initiatives",
          "Managed end-to-end processing of client streaming assets and content requests for signature generation",
          "Developed Google Apps Script automation tools eliminating manual data entry and reducing processing errors",
          "Created Python automation scripts removing repetitive tasks and enabling analysts to focus on high-value work",
          "Established standardized workflows and documentation for SVOD asset processing and quality assurance"
        ],
        technologies: ["Python", "Google Apps Script", "Google Sheets", "Data Processing", "Automation"]
      },
      {
        title: "Operations Analyst",
        startDate: "December 2020",
        endDate: "September 2021",
        description: "Operations Analyst on the Syndicated SVOD Ratings project, achieving 75% efficiency improvement within 6 months by identifying and automating manual processes.",
        responsibilities: [
          "Achieved 75% efficiency improvement within 6 months by identifying and automating manual processes",
          "Managed complex client asset processing workflows ensuring accurate signature generation for streaming content",
          "Developed Google Apps Script solutions automating data collection and reducing manual processing time",
          "Created Python automation tools eliminating repetitive analyst tasks and improving data accuracy",
          "Collaborated with cross-functional teams to optimize SVOD content discovery and processing pipelines"
        ],
        technologies: ["Python", "Google Apps Script", "Google Sheets", "Data Processing", "Automation"]
      },
      {
        title: "Support Associate",
        startDate: "February 2019",
        endDate: "December 2020",
        description: "Provided world-class application and technical support, delivering exceptional customer service while developing foundational troubleshooting and problem-solving skills.",
        responsibilities: [
          "Delivered exceptional technical support to external and internal clients, maintaining 95%+ customer satisfaction ratings",
          "Led initial troubleshooting efforts for complex application issues, reducing escalation rates by 30%",
          "Documented comprehensive technical solutions in call tracking systems, improving knowledge base accuracy",
          "Collaborated with senior specialists to validate and implement effective resolution strategies",
          "Managed timely escalation of critical issues to L2 specialists, ensuring SLA compliance and client satisfaction"
        ],
        technologies: ["Technical Support", "Troubleshooting", "Customer Service", "Call Tracking"]
      },
      {
        title: "Panel Relations Specialist",
        startDate: "November 2017",
        endDate: "February 2019",
        description: "Panel Relations Specialist managing 6 Code Reader markets with 300+ Nielsen panel homes, building strong customer relationships while developing foundational data management and system troubleshooting skills.",
        responsibilities: [
          "Managed 6 Code Reader markets overseeing 300+ Nielsen panel homes, ensuring data quality and panel retention",
          "Served as primary customer service liaison, maintaining 90%+ panelist satisfaction through proactive relationship building",
          "Diagnosed and resolved proprietary system performance issues, minimizing data collection disruptions",
          "Maintained accurate data entry and scheduling systems, supporting critical market research operations",
          "Led stretch projects including Toastmasters presentations and process documentation improvements",
          "Collaborated with cross-functional teams to optimize panel management workflows and data collection processes"
        ],
        technologies: ["Customer Relations", "Data Management", "System Troubleshooting"]
      }
    ]
  },
]

export function Experience() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Professional Experience
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Building scalable systems and data solutions with modern technologies
        </p>
      </section>

      <Separator className="my-8" />

      {/* Experience Timeline */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {companies.map((company, companyIndex) => (
              <div key={companyIndex} className="space-y-6">
                {/* Company Header */}
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-2">
                    {company.website ? (
                      <a 
                        href={company.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        {company.name}
                      </a>
                    ) : (
                      company.name
                    )}
                  </h2>
                  <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{company.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{company.dateRange}</span>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {calculateDuration(company.dateRange)}
                    </span>
                  </div>
                </div>

                {/* Positions within Company */}
                <div className="space-y-6">
                  {company.positions.map((position, positionIndex) => (
                    <Card key={positionIndex} className="animate-in fade-in-50 slide-in-from-bottom-4">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <CardTitle className="text-xl">{position.title}</CardTitle>
                            <div className="flex items-center gap-2 text-muted-foreground mt-1">
                              <Building2 className="h-4 w-4" />
                              <span className="font-medium">{company.name}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{position.startDate} - {position.endDate}</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <p className="text-muted-foreground">{position.description}</p>
                        
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="responsibilities">
                            <AccordionTrigger className="text-left hover:bg-muted/50 rounded-md px-3 py-2 transition-colors justify-start [&[data-state=open]>svg]:rotate-180">
                              <h4 className="font-semibold flex items-center gap-2">
                                Key Responsibilities
                              </h4>
                            </AccordionTrigger>
                            <AccordionContent>
                              <ul className="space-y-2 pt-2">
                                {position.responsibilities.map((responsibility, idx) => (
                                  <li key={idx} className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span className="text-muted-foreground">{responsibility}</span>
                                  </li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>

                        <div>
                          <h4 className="font-semibold mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {position.technologies.map((tech) => (
                              <Badge key={tech} variant="outline">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Separator between companies */}
                {companyIndex < companies.length - 1 && (
                  <Separator className="my-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
