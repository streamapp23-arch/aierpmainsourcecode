import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import {
  Zap,
  TrendingUp,
  Target,
  CheckCircle2,
  ArrowRight,
  Factory,
  ShoppingCart,
  Stethoscope,
  Truck,
  Flame,
  BarChart3,
  Users,
  Lock,
  Clock
} from "lucide-react";

const Industries = () => {
  const navigate = useNavigate();

  const industries = [
    {
      id: "manufacturing",
      name: "Manufacturing",
      icon: Factory,
      tagline: "Optimize Production, Maximize Efficiency",
      hero: "Transform Your Factory into an Intelligent Production System",
      description: "AI-powered ERP solutions for smart manufacturing, predictive maintenance, supply chain optimization, and real-time production insights.",
      challenges: [
        "Managing complex multi-site operations",
        "Reducing downtime and maintenance costs",
        "Optimizing supply chain visibility",
        "Improving production scheduling accuracy"
      ],
      solutions: [
        "Predictive maintenance with AI-driven analytics",
        "Real-time production monitoring and optimization",
        "Demand forecasting and inventory optimization",
        "Supply chain visibility and collaboration"
      ],
      results: [
        "30% reduction in unplanned downtime",
        "25% improvement in production efficiency",
        "40% faster delivery times",
        "$2M+ annual savings"
      ]
    },
    {
      id: "retail",
      name: "Retail & E-commerce",
      icon: ShoppingCart,
      tagline: "Unified Commerce, Connected Operations",
      hero: "Seamless Omnichannel ERP for Modern Retail",
      description: "Integrated ERP solutions connecting stores, warehouses, and online channels with AI-powered demand forecasting and inventory management.",
      challenges: [
        "Managing inventory across multiple channels",
        "Predicting customer demand accurately",
        "Reducing shrinkage and waste",
        "Optimizing workforce scheduling"
      ],
      solutions: [
        "Unified inventory and order management",
        "AI-powered demand forecasting",
        "Automated pricing and promotion optimization",
        "Real-time POS and supply chain integration"
      ],
      results: [
        "35% reduction in inventory costs",
        "45% improvement in order fulfillment speed",
        "20% increase in sales through smarter promotions",
        "3x faster decision-making"
      ]
    },
    {
      id: "healthcare",
      name: "Healthcare",
      icon: Stethoscope,
      tagline: "Patient-Centric Operations, Data-Driven Care",
      hero: "AI-Powered ERP for Modern Healthcare Systems",
      description: "HIPAA-compliant ERP solutions for hospitals and healthcare networks enabling better patient outcomes and operational efficiency.",
      challenges: [
        "Managing complex patient data securely",
        "Optimizing resource allocation",
        "Reducing billing errors and denials",
        "Ensuring regulatory compliance"
      ],
      solutions: [
        "Integrated patient data management",
        "Predictive analytics for patient outcomes",
        "Revenue cycle optimization with AI",
        "Supply chain management for medical supplies"
      ],
      results: [
        "25% reduction in billing denials",
        "40% improvement in resource utilization",
        "99.9% uptime and data security",
        "$1.5M+ annual cost savings"
      ]
    },
    {
      id: "logistics",
      name: "Logistics & Supply Chain",
      icon: Truck,
      tagline: "Real-Time Visibility, Optimized Operations",
      hero: "Next-Generation ERP for Logistics Excellence",
      description: "AI-powered logistics ERP with real-time tracking, route optimization, and predictive analytics for maximum efficiency.",
      challenges: [
        "Optimizing routes and reducing fuel costs",
        "Managing vehicle and driver allocation",
        "Reducing fuel consumption and emissions",
        "Ensuring on-time delivery performance"
      ],
      solutions: [
        "AI-powered route optimization",
        "Real-time GPS tracking and monitoring",
        "Predictive maintenance for vehicles",
        "Dynamic pricing and load optimization"
      ],
      results: [
        "28% reduction in fuel costs",
        "35% improvement in on-time delivery",
        "50% faster load planning",
        "$3.5M+ annual savings"
      ]
    },
    {
      id: "oil-gas",
      name: "Oil & Gas",
      icon: Flame,
      tagline: "Safety-First Operations, Maximum Efficiency",
      hero: "Enterprise ERP for Oil & Gas Excellence",
      description: "Comprehensive ERP for upstream, midstream, and downstream operations with built-in safety, compliance, and asset management.",
      challenges: [
        "Managing complex asset portfolios",
        "Ensuring regulatory and safety compliance",
        "Optimizing production and asset utilization",
        "Managing global supply chains"
      ],
      solutions: [
        "Real-time asset monitoring and optimization",
        "Predictive maintenance and safety management",
        "Compliance automation and reporting",
        "Supply chain and logistics integration"
      ],
      results: [
        "20% increase in asset uptime",
        "30% reduction in safety incidents",
        "25% improvement in production efficiency",
        "$5M+ annual cost savings"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-brand-navy via-brand-blue to-brand-navy text-white">
        <div className="container mx-auto max-w-6xl text-center space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Industry-Specific ERP Solutions
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Tailored AI-powered ERP solutions designed for your industry's unique challenges
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-12 sm:space-y-20">
            {industries.map((industry, index) => {
              const isEven = index % 2 === 0;
              const IconComponent = industry.icon;

              return (
                <div id={industry.id} key={industry.id}>
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch ${isEven ? "" : "md:grid-flow-dense"}`}>
                    {/* Text Content Card */}
                    <div className={isEven ? "md:col-start-1" : "md:col-start-2"}>
                      <Card className="bg-gradient-to-br from-card to-brand-blue/5 border-2 border-brand-blue/20 p-6 sm:p-8 h-full flex flex-col justify-between">
                        {/* Icon and Title */}
                        <div>
                          <div className="w-16 h-16 rounded-lg bg-brand-blue/10 flex items-center justify-center mb-6">
                            <IconComponent className="w-8 h-8 text-brand-blue" />
                          </div>
                          <div className="mb-6">
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{industry.name}</h2>
                            <p className="text-base sm:text-lg text-brand-blue font-semibold">{industry.tagline}</p>
                          </div>
                          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                            {industry.description}
                          </p>
                        </div>

                        {/* Challenges */}
                        <div className="space-y-3">
                          <h3 className="font-bold text-foreground text-lg flex items-center gap-2">
                            <Target className="w-5 h-5 text-brand-blue" />
                            Key Challenges
                          </h3>
                          <ul className="space-y-2">
                            {industry.challenges.map((challenge, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span>{challenge}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Solutions */}
                        <div className="space-y-3">
                          <h3 className="font-bold text-foreground text-lg flex items-center gap-2">
                            <Zap className="w-5 h-5 text-brand-blue" />
                            Our Solutions
                          </h3>
                          <ul className="space-y-2">
                            {industry.solutions.map((solution, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                                <ArrowRight className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                                <span>{solution}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-4">
                          <Button
                            size="lg"
                            className="text-base sm:text-lg px-6 sm:px-8 bg-brand-blue text-white hover:bg-brand-blue/90 w-full sm:w-auto min-h-[48px]"
                            onClick={() => navigate(`/${industry.id}`)}
                          >
                            Explore {industry.name} Solution
                            <ArrowRight className="ml-2 w-5 h-5" />
                          </Button>
                        </div>
                      </Card>
                    </div>

                    {/* Results Card */}
                    <div className={isEven ? "md:col-start-1" : ""}>
                      <Card className="bg-gradient-to-br from-brand-blue/5 to-brand-navy/5 border-2 border-brand-blue/20 p-6 sm:p-8">
                        <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                          <BarChart3 className="w-6 h-6 text-brand-blue" />
                          Proven Results
                        </h3>
                        <div className="space-y-4">
                          {industry.results.map((result, idx) => (
                            <div key={idx} className="flex items-start gap-4 pb-4 border-b border-border/30 last:border-0 last:pb-0">
                              <TrendingUp className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                              <p className="text-foreground font-semibold">{result}</p>
                            </div>
                          ))}
                        </div>
                      </Card>
                    </div>
                  </div>

                  {/* Divider */}
                  {index < industries.length - 1 && (
                    <div className="my-12 sm:my-16 border-t border-border/30" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-section-light">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Why Industries Trust Us</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-base sm:text-lg">Deep domain expertise combined with cutting-edge AI technology</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="p-8 border-2">
              <div className="w-12 h-12 rounded-lg bg-brand-blue/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Industry Expertise</h3>
              <p className="text-muted-foreground">
                25+ years of experience transforming operations across manufacturing, retail, healthcare, logistics, and oil & gas sectors
              </p>
            </Card>

            <Card className="p-8 border-2">
              <div className="w-12 h-12 rounded-lg bg-brand-blue/10 flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Regulatory Compliance</h3>
              <p className="text-muted-foreground">
                Built-in compliance with HIPAA, SOX, GxP, FDA, and industry-specific regulations ensuring peace of mind
              </p>
            </Card>

            <Card className="p-8 border-2">
              <div className="w-12 h-12 rounded-lg bg-brand-blue/10 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Rapid Deployment</h3>
              <p className="text-muted-foreground">
                Accelerated implementations with industry-specific templates and best practices, get up and running in weeks
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-gradient-to-br from-brand-navy to-brand-blue">
        <div className="container mx-auto max-w-4xl text-center space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-lg sm:text-xl text-white/90">
            Schedule a consultation to discover how our AI-powered ERP can revolutionize your operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-base sm:text-lg px-8 sm:px-10 bg-white text-brand-navy hover:bg-white/90 w-full sm:w-auto min-h-[48px]"
              onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}
            >
              Schedule Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base sm:text-lg px-8 sm:px-10 border-white text-white hover:bg-white/10 w-full sm:w-auto min-h-[48px]"
              onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}
            >
              Get Industry Assessment
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;
