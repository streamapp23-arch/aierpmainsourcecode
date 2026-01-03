import { ArrowRight, CheckCircle2, Database, TrendingUp, Shield, Zap, Users, Clock, DollarSign, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { Card } from "@/components/ui/card";

const SAP = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-navy via-section-dark to-brand-navy text-white py-12 sm:py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-brand-blue/20 rounded-full border border-brand-blue/30">
              <span className="text-sm font-medium text-brand-blue">Trusted by Fortune 500 Companies</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Your SAP Into an <span className="text-brand-blue">AI-Powered</span> Competitive Weapon
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 leading-relaxed px-4 sm:px-0">
              While your competitors struggle with legacy SAP systems, our clients are making decisions 10x faster with AI-embedded intelligence. Don't get left behind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 px-4 sm:px-0">
              <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-6 text-lg w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
                Get Your Free SAP AI Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
                See Live Demo
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span>14-day ROI guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Agitation */}
      <section className="py-12 sm:py-16 md:py-20 bg-destructive/5 border-y border-destructive/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-8">
              <AlertTriangle className="h-12 w-12 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Your SAP System Is Bleeding Money Every Single Day</h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-6">
                  Every day you delay SAP modernization, you're losing to competitors who've already made the jump to AI-powered operations.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="p-6 border-destructive/20 bg-card">
                <h3 className="font-semibold text-lg mb-3 text-foreground">Manual Processes Killing Productivity</h3>
                <p className="text-muted-foreground">Your team wastes 40+ hours weekly on data entry, reconciliation, and manual reporting that AI could handle in seconds.</p>
              </Card>
              <Card className="p-6 border-destructive/20 bg-card">
                <h3 className="font-semibold text-lg mb-3 text-foreground">Decisions Based on Yesterday's Data</h3>
                <p className="text-muted-foreground">By the time you get insights from SAP, market conditions have changed. Real-time AI predictions could save millions.</p>
              </Card>
              <Card className="p-6 border-destructive/20 bg-card">
                <h3 className="font-semibold text-lg mb-3 text-foreground">Integration Nightmares Costing Fortune</h3>
                <p className="text-muted-foreground">Every new tool requires months of custom integration work. Meanwhile, AI-native systems connect in days, not quarters.</p>
              </Card>
              <Card className="p-6 border-destructive/20 bg-card">
                <h3 className="font-semibold text-lg mb-3 text-foreground">Talent Exodus to Modern Companies</h3>
                <p className="text-muted-foreground">Top performers are leaving for companies with modern tech stacks. Your SAP skills gap is growing daily.</p>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-destructive/10 border border-destructive/30 rounded-lg">
              <p className="text-center text-lg font-semibold text-foreground">
                <span className="text-destructive">Reality Check:</span> Companies that don't modernize SAP by 2025 will face 3x higher operational costs than AI-first competitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Transformation */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground px-4 sm:px-0">From SAP Struggles to AI-Powered Success</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4 sm:px-0">See what happens when you stop fighting your SAP system and start leveraging AI intelligence</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12 sm:mb-16">
            <Card className="p-8 text-center bg-card border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-green-500" />
              </div>
              <div className="text-5xl font-bold text-foreground mb-2">67%</div>
              <div className="text-muted-foreground font-medium">Faster Decision Making</div>
            </Card>
            <Card className="p-8 text-center bg-card border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="h-8 w-8 text-blue" />
              </div>
              <div className="text-5xl font-bold text-foreground mb-2">$2.4M</div>
              <div className="text-muted-foreground font-medium">Average Annual Savings</div>
            </Card>
            <Card className="p-8 text-center bg-card border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-purple-500" />
              </div>
              <div className="text-5xl font-bold text-foreground mb-2">80%</div>
              <div className="text-muted-foreground font-medium">Reduction in Manual Work</div>
            </Card>
          </div>

          <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-blue/5 to-navy/5 border-blue/20">
            <div className="flex items-start gap-6">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop" alt="Client" className="w-20 h-20 rounded-full object-cover" />
              <div>
                <p className="text-lg text-foreground mb-4 italic">
                  "We were drowning in SAP data but starving for insights. AIERP Partners transformed our entire operation in 90 days. We're now predicting supply chain issues before they happen and our CFO finally loves SAP."
                </p>
                <div className="font-semibold text-foreground">Michael Chen</div>
                <div className="text-muted-foreground">VP of Operations, Fortune 500 Manufacturing</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground px-4 sm:px-0">Trusted by Industry Leaders Who Refuse to Settle</h2>
            <p className="text-muted-foreground px-4 sm:px-0">Join 200+ enterprise clients who've transformed their SAP systems</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { metric: "200+", label: "Enterprise Clients", icon: Users },
              { metric: "99.8%", label: "Uptime SLA", icon: Shield },
              { metric: "14 Days", label: "Average ROI", icon: Zap }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="h-12 w-12 text-blue mx-auto mb-4" />
                <div className="text-4xl font-bold text-foreground mb-2">{stat.metric}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground px-4 sm:px-0">Everything You Need to Dominate Your Market</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4 sm:px-0">Not just features. Game-changing capabilities.</p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                title: "Predictive Analytics That Actually Work",
                description: "AI models trained on your SAP data predict demand, cash flow, and resource needs with 95% accuracy.",
                icon: TrendingUp
              },
              {
                title: "Automated Reconciliation & Compliance",
                description: "Let AI handle financial close, audit prep, and compliance reporting while you focus on strategy.",
                icon: CheckCircle2
              },
              {
                title: "Real-Time Intelligent Dashboards",
                description: "Executive dashboards that answer 'what's happening' and 'what should we do about it' in real-time.",
                icon: Database
              },
              {
                title: "Seamless AI Service Integration",
                description: "Connect OpenAI, Azure AI, AWS AI services directly to SAP workflows in hours, not months.",
                icon: Zap
              },
              {
                title: "Natural Language SAP Queries",
                description: "Ask SAP questions in plain English. 'Show me overdue invoices from Q3' - instant answers.",
                icon: Users
              }
            ].map((benefit, i) => (
              <Card key={i} className="p-6 bg-card border-border hover:border-blue/50 transition-colors">
                <benefit.icon className="h-10 w-10 text-blue mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing/Investment */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-brand-navy via-section-dark to-brand-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 px-4 sm:px-0">Investment That Pays for Itself</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 px-4 sm:px-0">Most clients see positive ROI within the first quarter</p>

            <Card className="bg-white/10 border-white/20 backdrop-blur p-8 mb-8 text-white">
              <div className="text-5xl font-bold mb-4">Custom Pricing</div>
              <p className="text-xl text-gray-300 mb-8">Tailored to your SAP environment and business goals</p>

              <ul className="text-left space-y-4 mb-8">
                {[
                  "Complete SAP AI integration assessment",
                  "Custom AI model development and training",
                  "Dedicated implementation team",
                  "24/7 enterprise support",
                  "Quarterly business reviews",
                  "ROI guarantee or money back"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              <Button size="lg" className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white py-6 text-lg" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>\n                Get Custom Quote (Free Assessment Included)\n                <ArrowRight className="ml-2 h-5 w-5" />\n              </Button>
            </Card>

            <p className="text-sm text-gray-400">
              <Clock className="inline h-4 w-4 mr-2" />
              Only 3 implementation slots available this quarter - First come, first served
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground px-4 sm:px-0">Traditional SAP vs AI-Powered SAP</h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4 sm:px-0">See the difference intelligent automation makes</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {/* Without AI */}
              <Card className="p-8 border-destructive/20 bg-card">
                <div className="text-center mb-6">
                  <div className="inline-block px-4 py-2 bg-destructive/10 rounded-full mb-4">
                    <span className="text-destructive font-semibold">Without Our AI Integration</span>
                  </div>
                </div>
                <ul className="space-y-4">
                  {[
                    "3-5 days for month-end close",
                    "Manual data reconciliation errors",
                    "Reports outdated before delivery",
                    "IT team overwhelmed with requests",
                    "No predictive insights",
                    "Reactive problem solving",
                    "High dependency on SAP experts",
                    "Limited real-time visibility"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* With AI */}
              <Card className="p-8 border-blue/20 bg-gradient-to-br from-blue/5 to-navy/5">
                <div className="text-center mb-6">
                  <div className="inline-block px-4 py-2 bg-blue/20 rounded-full mb-4">
                    <span className="text-blue font-semibold">With AIERP AI-Powered SAP</span>
                  </div>
                </div>
                <ul className="space-y-4">
                  {[
                    "Real-time month-end close (hours, not days)",
                    "99.9% automated reconciliation accuracy",
                    "Live dashboards with predictive analytics",
                    "Self-service AI chatbot for users",
                    "Proactive issue detection & alerts",
                    "Predictive problem prevention",
                    "Natural language SAP queries",
                    "Complete operational transparency"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-muted-foreground mb-6">
                The choice is clear. Stop settling for legacy SAP limitations.
              </p>
              <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-6 text-lg">
                Transform Your SAP Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-foreground px-4 sm:px-0">Honest Answers to Your Burning Questions</h2>

            <div className="space-y-6">
              {[
                {
                  q: "Will this disrupt our current SAP operations?",
                  a: "Zero disruption. We run parallel systems during implementation and cut over during planned maintenance windows. Your business never skips a beat."
                },
                {
                  q: "How long until we see results?",
                  a: "Most clients see measurable improvements within 30 days. Full transformation typically takes 90-120 days depending on SAP complexity."
                },
                {
                  q: "What if we're on an older SAP version?",
                  a: "We've successfully modernized everything from R/3 to S/4HANA. Older versions often see the biggest gains because there's more room for improvement."
                },
                {
                  q: "Do we need to hire AI experts?",
                  a: "Not at all. We train your existing team and provide ongoing support. If you can use SAP, you can use our AI enhancements."
                },
                {
                  q: "What's your refund policy?",
                  a: "If you don't see positive ROI within the first quarter, we refund 100% of implementation costs. We're that confident in our solution."
                }
              ].map((faq, i) => (
                <Card key={i} className="p-6 bg-card border-border">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-brand-blue via-section-blue to-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 px-4 sm:px-0">Stop Losing to AI-First Competitors</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 px-4 sm:px-0">
              Every day you wait is another day your competitors pull ahead. Book your free SAP AI assessment now.
            </p>
            <Button size="lg" className="bg-white text-brand-navy hover:bg-gray-100 px-8 sm:px-12 py-6 sm:py-8 text-lg sm:text-xl font-semibold mb-6 w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
              Claim Your Free Assessment
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <p className="text-sm text-gray-300">
              ⚡ Limited to 5 assessments per month • ✓ No obligation • ✓ Results in 48 hours
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SAP;
