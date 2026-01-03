import { ArrowRight, CheckCircle2, Code, TrendingUp, Shield, Zap, Users, Clock, DollarSign, AlertTriangle, Boxes, Sparkles, Brain, Unlock, Lock, Database, Cpu, FileText, Globe, BarChart, Workflow, Layers, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import OpenERPRoadmap from "@/components/OpenERPRoadmap";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FlipCard } from "@/components/FlipCard";

const OpenERP = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-cyan-500/20">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 px-4 overflow-hidden bg-gradient-to-br from-cyan-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-600/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500 shadow-lg shadow-cyan-900/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Odoo • ERPNext • Dolibarr Experts
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6 sm:mb-8 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Open Source ERP + AI =<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Unbeatable</span> Cost-Performance
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 px-4 sm:px-0">
            Why pay enterprise prices when open source ERP with AI intelligence delivers 90% of the features at 10% of the cost? Smart companies are making the switch.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300 px-4 sm:px-0">
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 sm:px-10 h-14 sm:h-16 text-base sm:text-xl shadow-xl shadow-cyan-900/50 rounded-full transition-all hover:scale-105 w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
              See Cost Comparison Calculator
              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
            <Button size="lg" variant="outline" className="border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 hover:text-white px-8 sm:px-10 h-14 sm:h-16 text-base sm:text-xl rounded-full w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
              Watch Live Demo
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm mt-6 sm:mt-8 text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-cyan-400" />
              <span>No vendor lock-in</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-cyan-400" />
              <span>Full source code access</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section with Flip Cards */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">Tired of Getting Held Hostage by ERP Vendors?</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed">
              Hover over the cards to see how open source ERP transforms vendor pain points into freedom.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-cyan-50 flex items-center justify-center mb-6">
                    <DollarSign className="h-8 w-8 text-cyan-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Paying for Features You'll Never Use</h3>
                  <p className="text-slate-500">Enterprise ERP vendors force you to buy bloated suites.</p>
                  <ul className="mt-4 text-sm text-slate-600 space-y-1 text-left">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      Mandatory bundled modules with redundant features
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      Annual license fees regardless of usage
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      Hidden costs for additional user licenses
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      Premium pricing for basic functionality
                    </li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-white/20">
                      <Unlock className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Pay Only for What You Need</h3>
                  </div>
                  <p className="text-blue-100 mb-4">Open source lets you choose modules and build exactly what you want.</p>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-start gap-2 text-sm text-blue-50">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>Modular architecture - activate only what you use</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-blue-50">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>Transparent, predictable pricing structure</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-blue-50">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>No mandatory annual license renewals</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-blue-50">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>Community-supported free core features</span>
                    </li>
                  </ul>
                </>
              }
            />
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-cyan-50 flex items-center justify-center mb-6">
                    <AlertTriangle className="h-8 w-8 text-cyan-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Vendor Upgrade Schedules Control You</h3>
                  <p className="text-slate-500">Upgrade when they say, not when you're ready.</p>
                  <ul className="mt-4 text-sm text-slate-600 space-y-1 text-left">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      Forced migrations to new versions
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      Breaking changes in vendor updates
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      Extended downtime during upgrades
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      Customization conflicts with vendor updates
                    </li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-white/20">
                      <Shield className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">You Control the Timeline</h3>
                  </div>
                  <p className="text-blue-100 mb-4">Open source means you upgrade on your schedule with full control.</p>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-start gap-2 text-sm text-blue-50">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>Complete control over upgrade schedules</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-blue-50">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>No forced migrations or breaking changes</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-blue-50">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>Staged rollout options for testing</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-blue-50">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>Full backward compatibility control</span>
                    </li>
                  </ul>
                </>
              }
            />
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-cyan-50 flex items-center justify-center mb-6">
                    <Code className="h-8 w-8 text-cyan-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Integration Costs Are Insane</h3>
                  <p className="text-slate-500">Enterprise vendors charge $50K+ for basic integrations.</p>
                  <ul className="mt-4 text-sm text-slate-600 space-y-1 text-left">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      Proprietary APIs with expensive access fees
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      Limited third-party system compatibility
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      Vendor lock-in for custom development
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      High-cost middleware solutions required
                    </li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-white/20">
                      <Zap className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">API-First Architecture</h3>
                  </div>
                  <p className="text-blue-100 mb-4">Open source APIs and webhooks let you integrate anything for free.</p>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-start gap-2 text-sm text-blue-50">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>Standard REST APIs with full documentation</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-blue-50">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>Webhook support for real-time sync</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-blue-50">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>Pre-built connectors for popular systems</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-blue-50">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>Custom integration development flexibility</span>
                    </li>
                  </ul>
                </>
              }
            />
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-cyan-50 flex items-center justify-center mb-6">
                    <Users className="h-8 w-8 text-cyan-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Support Tickets Go Into Black Holes</h3>
                  <p className="text-slate-500">Wait weeks for answers about your own system.</p>
                  <ul className="mt-4 text-sm text-slate-600 space-y-1 text-left">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      Slow response times from tiered support
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      Limited access to technical experts
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      No visibility into bug fix priorities
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      High-cost premium support tiers
                    </li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-white/20">
                      <Sparkles className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Community + Enterprise Support</h3>
                  </div>
                  <p className="text-blue-100 mb-4">Get answers in hours with full code transparency and our 24/7 support.</p>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-start gap-2 text-sm text-blue-50">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>Access to massive open source communities</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-blue-50">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>Full code transparency for self-help</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-blue-50">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>Priority enterprise support from our team</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-blue-50">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>Direct access to core developers</span>
                    </li>
                  </ul>
                </>
              }
            />
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-500 rounded-xl">
            <p className="text-center text-lg font-semibold text-slate-900">
              <span className="text-cyan-600">Case Study:</span> Mid-size manufacturer saved $870K in 3 years by switching from SAP to Odoo + AI. Same functionality, 1/10th the cost.
            </p>
          </div>
        </div>
      </section>

      {/* Customer Transformation */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">From Vendor Captivity to Open Source Freedom</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 px-4 sm:px-0">Real businesses that escaped enterprise ERP tyranny</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="h-2 w-full bg-gradient-to-r from-cyan-400 to-blue-400" />
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-cyan-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="h-8 w-8 text-cyan-600" />
                </div>
                <div className="text-5xl font-bold text-slate-900 mb-2">87%</div>
                <div className="text-slate-600 font-medium">Lower Total Cost</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="h-2 w-full bg-gradient-to-r from-cyan-500 to-blue-500" />
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-cyan-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-cyan-600" />
                </div>
                <div className="text-5xl font-bold text-slate-900 mb-2">3x</div>
                <div className="text-slate-600 font-medium">Faster Customization</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="h-2 w-full bg-gradient-to-r from-cyan-600 to-blue-600" />
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-cyan-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Boxes className="h-8 w-8 text-cyan-600" />
                </div>
                <div className="text-5xl font-bold text-slate-900 mb-2">100%</div>
                <div className="text-slate-600 font-medium">Data Ownership</div>
              </CardContent>
            </Card>
          </div>

          <Card className="border border-slate-200 shadow-xl p-8 bg-gradient-to-br from-slate-50 to-white">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" alt="Client" className="w-20 h-20 rounded-full object-cover shadow-lg" />
              <div className="flex-1">
                <p className="text-lg text-slate-700 mb-4 italic leading-relaxed">
                  "Our SAP licensing was killing us—$400K/year for features we barely used. We migrated to Odoo with AIERP Partners' AI layer and now spend $60K/year with better functionality. The ROI was immediate and the flexibility is unmatched."
                </p>
                <div className="font-semibold text-slate-900">David Park</div>
                <div className="text-slate-600">CTO, Manufacturing Tech Startup</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Open Source ERP Benefits */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">Why Open Source ERP + AI Beats Proprietary Solutions</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 px-4 sm:px-0">Freedom, flexibility, and intelligence at a fraction of the cost</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                title: "No Vendor Lock-In, Ever",
                description: "Own your ERP completely. Switch hosting providers, hire any developer, export all data anytime. Your business, your rules.",
                icon: Shield,
                color: "from-cyan-400 to-blue-400",
                points: [
                  "Complete data sovereignty and ownership",
                  "Freedom to choose any hosting provider",
                  "Access to source code for custom development",
                  "No contractual obligations or exit penalties"
                ]
              },
              {
                title: "AI-Powered Process Intelligence",
                description: "We add AI layer on top of Odoo/ERPNext that learns your workflows, predicts issues, and automates repetitive tasks.",
                icon: Brain,
                color: "from-cyan-500 to-blue-500",
                points: [
                  "Predictive analytics for inventory optimization",
                  "Automated anomaly detection in financial data",
                  "Intelligent workflow automation and routing",
                  "Natural language processing for reporting"
                ]
              },
              {
                title: "Unlimited Customization Freedom",
                description: "Full source code access means limitless customization. Build exactly what your business needs without vendor restrictions.",
                icon: Code,
                color: "from-cyan-400 to-blue-400",
                points: [
                  "Complete access to source code for modifications",
                  "Custom module development without restrictions",
                  "Integration with any third-party system",
                  "Industry-specific feature implementation"
                ]
              },
              {
                title: "Predictable, Transparent Pricing",
                description: "No surprise licensing audits or forced upgrades. Pay only for implementation and optional support. That's it.",
                icon: DollarSign,
                color: "from-cyan-500 to-blue-500",
                points: [
                  "Fixed implementation costs with clear scope",
                  "No hidden fees or unexpected charges",
                  "Transparent monthly/annual support pricing",
                  "Cost savings from community contributions"
                ]
              },
              {
                title: "Community + Enterprise Support",
                description: "Massive open source communities plus our 24/7 enterprise-grade support. Best of both worlds.",
                icon: Users,
                color: "from-cyan-400 to-blue-400",
                points: [
                  "Access to thousands of community contributors",
                  "Enterprise-grade SLA with 24/7 support",
                  "Regular security updates and patches",
                  "Knowledge sharing and best practices"
                ]
              }
            ].map((benefit, i) => (
              <Card key={i} className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
                <div className={`h-2 w-full bg-gradient-to-r ${benefit.color}`} />
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-cyan-50 group-hover:scale-110 transition-transform">
                      <benefit.icon className="h-8 w-8 text-cyan-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 flex-1">{benefit.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-4">{benefit.description}</p>
                  <ul className="space-y-2">
                    {benefit.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 flex-shrink-0"></div>
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Roadmap */}
      <OpenERPRoadmap />

      {/* Social Proof */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 px-4 sm:px-0">Open Source ERP Leaders Trust Us</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 px-4 sm:px-0">From startups to $100M+ enterprises</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
            {[
              { metric: "500+", label: "Open ERP Implementations", icon: Boxes },
              { metric: "98%", label: "Client Retention Rate", icon: Shield },
              { metric: "45 Days", label: "Avg. Go-Live Time", icon: Zap }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <stat.icon className="h-10 w-10 text-cyan-600" />
                </div>
                <div className="text-5xl font-bold text-slate-900 mb-3">{stat.metric}</div>
                <div className="text-lg text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-gradient-to-br from-cyan-900 to-blue-900">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-sm border border-white/20">
            <Sparkles className="w-5 h-5 text-cyan-300" />
            <span className="text-cyan-100 font-semibold text-sm">BREAK FREE FROM VENDOR CONTROL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 tracking-tight px-4 sm:px-0">
            Break Free From ERP Vendor Control
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-cyan-100 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            See exactly how much you'll save with open source ERP + AI. Free cost comparison, no strings attached.
          </p>
          <div className="pt-4">
            <Button size="lg" className="bg-white text-cyan-900 hover:bg-cyan-50 px-8 sm:px-12 h-16 sm:h-20 text-lg sm:text-xl md:text-2xl font-bold shadow-2xl rounded-full transition-transform hover:scale-105 w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
              Calculate Your Savings <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </div>
          <p className="mt-8 text-cyan-200 font-medium">
            ⚡ Get detailed comparison in 24 hours • ✓ See real ROI scenarios • ✓ No obligation
          </p>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default OpenERP;