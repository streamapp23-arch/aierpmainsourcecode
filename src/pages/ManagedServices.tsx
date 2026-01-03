import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ManagedServicesRoadmap from "@/components/ManagedServicesRoadmap";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FlipCard } from "@/components/FlipCard";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
  Clock,
  TrendingUp,
  AlertTriangle,
  Settings,
  Award,
  Users,
  Brain,
  Activity,
  HeadphonesIcon,
  Gauge,
  Wrench,
  LineChart,
  Database,
  Server,
  Cloud,
  Lock,
  FileText,
  Search,
  Bell,
  GitBranch,
  DollarSign,
  BarChart,
  Cpu,
  Heart
} from "lucide-react";

import SEO from "@/components/SEO";

const ManagedServices = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-cyan-500/20">
      <SEO
        title="Managed ERP Services | 24/7 AI-Powered Support"
        description="Stop firefighting ERP issues. Our AI-powered managed services keep your SAP, Oracle, or custom ERP running at peak performance 24/7."
        keywords="Managed ERP Services, SAP Support, Oracle Support, ERP Maintenance, 24/7 ERP Monitoring, AI Support"
        canonicalUrl="https://www.aierppartners.com/managed-services"
        breadcrumbs={[
          {
            name: "Home",
            url: "/"
          },
          {
            name: "Services",
            url: "/#services"
          },
          {
            name: "Managed Services",
            url: "/managed-services"
          }
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Managed ERP Services",
          "provider": {
            "@type": "Organization",
            "name": "AIERP Partners"
          },
          "description": "AI-powered managed services keep your SAP, Oracle, or custom ERP running at peak performance 24/7.",
          "serviceType": "Managed Services"
        }}
      />
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
            24/7 AI-Powered Support
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6 sm:mb-8 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Your ERP Runs Better<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">When We Manage It</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 px-4 sm:px-0">
            Stop firefighting ERP issues. Our AI-powered managed services keep your SAP, Oracle, or custom ERP running at peak performance 24/7—so you can focus on growing your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300 px-4 sm:px-0">
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 sm:px-10 h-14 sm:h-16 text-base sm:text-xl shadow-xl shadow-cyan-900/50 rounded-full transition-all hover:scale-105 w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
              Get Service Quote
              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
            <Button size="lg" variant="outline" className="border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 hover:text-white px-8 sm:px-10 h-14 sm:h-16 text-base sm:text-xl rounded-full w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
              See SLA Options
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm mt-6 sm:mt-8 text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-cyan-400" />
              <span>99.9% uptime SLA</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-cyan-400" />
              <span>15-min response time</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section with Flip Cards */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">The Hidden Cost of Self-Managing ERP</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed">
              Hover over the cards to see how managed services transform operational chaos into stability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-cyan-50 flex items-center justify-center mb-6">
                    <AlertTriangle className="h-8 w-8 text-cyan-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Constant Firefighting</h3>
                  <p className="text-slate-500">Your IT team spends 60% of time on ERP issues instead of innovation.</p>
                  <ul className="mt-4 text-sm text-slate-600 space-y-1 text-left">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      IT resources diverted from strategic projects
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      Delayed response to critical business issues
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      Employee productivity loss due to system downtime
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      Missed innovation opportunities due to maintenance focus
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
                    <h3 className="text-2xl font-bold text-white">Proactive Prevention</h3>
                  </div>
                  <p className="text-blue-100 mb-4">AI predicts and prevents issues before they impact users.</p>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-start gap-2 text-sm text-blue-50">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>Predictive analytics identify issues before they occur</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-blue-50">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>Automated preventive maintenance scheduling</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-blue-50">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>Proactive capacity planning and optimization</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-blue-50">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>Real-time monitoring with automated alerting</span>
                    </li>
                  </ul>
                </>
              }
            />
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-cyan-50 flex items-center justify-center mb-6">
                    <Clock className="h-8 w-8 text-cyan-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Slow Response Times</h3>
                  <p className="text-slate-500">Critical issues wait hours or days for resolution.</p>
                  <ul className="mt-4 text-sm text-slate-600 space-y-1 text-left">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      No dedicated support team for urgent issues
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      Limited after-hours and weekend support
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      Escalation delays between support tiers
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      Business operations disruption during peak hours
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
                    <h3 className="text-2xl font-bold text-white">15-Minute SLA</h3>
                  </div>
                  <p className="text-blue-100 mb-4">Guaranteed response within 15 minutes, 24/7/365.</p>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-start gap-2 text-sm text-blue-50">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>24/7/365 dedicated support team availability</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-blue-50">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>Guaranteed 15-minute initial response time</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-blue-50">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>Direct escalation to senior engineers</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-blue-50">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>Multi-channel support (phone, chat, email, portal)</span>
                    </li>
                  </ul>
                </>
              }
            />
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-cyan-50 flex items-center justify-center mb-6">
                    <TrendingUp className="h-8 w-8 text-cyan-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Performance Degradation</h3>
                  <p className="text-slate-500">System gets slower over time. No one knows why.</p>
                  <ul className="mt-4 text-sm text-slate-600 space-y-1 text-left">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      Unoptimized database queries and indexes
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      Inadequate hardware resource allocation
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      Lack of regular system tuning and optimization
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      No proactive monitoring of performance metrics
                    </li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-white/20">
                      <Gauge className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Continuous Optimization</h3>
                  </div>
                  <p className="text-blue-100 mb-4">Monthly tuning of databases, queries, and workflows keeps your ERP running fast.</p>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-start gap-2 text-sm text-blue-50">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>Regular database optimization and tuning</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-blue-50">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>Query performance analysis and improvement</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-blue-50">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>Resource allocation optimization</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-blue-50">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>Monthly performance reporting and recommendations</span>
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
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Knowledge Drain</h3>
                  <p className="text-slate-500">When your ERP expert quits, institutional knowledge walks out the door.</p>
                  <ul className="mt-4 text-sm text-slate-600 space-y-1 text-left">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      Single point of failure with key personnel
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      Inadequate documentation of customizations
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      Long onboarding time for new team members
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      Loss of historical context for system decisions
                    </li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-white/20">
                      <Brain className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Institutional Memory</h3>
                  </div>
                  <p className="text-blue-100 mb-4">AI-powered knowledge base captures every fix and customization.</p>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-start gap-2 text-sm text-blue-50">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>AI-powered knowledge base with historical data</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-blue-50">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>Comprehensive system documentation and runbooks</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-blue-50">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>Automated incident resolution and pattern recognition</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-blue-50">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>Knowledge transfer during team transitions</span>
                    </li>
                  </ul>
                </>
              }
            />
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-500 rounded-xl">
            <p className="text-center text-lg font-semibold text-slate-900">
              <span className="text-cyan-600">Industry Data:</span> Companies with managed ERP services experience 73% fewer critical incidents and 40% lower total cost of ownership.
            </p>
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">Managed Service Tiers</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 px-4 sm:px-0">Choose the level of support that fits your needs</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border-2 border-slate-200 shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-block px-4 py-2 bg-cyan-50 rounded-full mb-4">
                    <span className="text-cyan-700 font-semibold text-sm">ESSENTIAL</span>
                  </div>
                  <div className="text-4xl font-bold text-slate-900 mb-2">$5K/mo</div>
                  <p className="text-slate-600">For stable environments</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {[
                    "Business hours support (9 AM - 6 PM)",
                    "Monthly system health checks and reporting",
                    "Patch management and security updates",
                    "Basic performance monitoring and alerts",
                    "Quarterly optimization recommendations"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-cyan-600 hover:bg-cyan-500" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-cyan-500 shadow-2xl hover:-translate-y-2 transition-all duration-300 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-block px-4 py-2 bg-cyan-100 rounded-full mb-4">
                    <span className="text-cyan-700 font-semibold text-sm">PREMIUM</span>
                  </div>
                  <div className="text-4xl font-bold text-slate-900 mb-2">$12K/mo</div>
                  <p className="text-slate-600">For mission-critical systems</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {[
                    "24/7 support with 15-minute SLA guarantee",
                    "AI-powered predictive monitoring and alerts",
                    "Proactive issue prevention and optimization",
                    "Weekly performance tuning and optimization",
                    "Dedicated account manager and monthly reviews",
                    "Unlimited incidents and priority support"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-cyan-700 hover:bg-cyan-600" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-block px-4 py-2 bg-cyan-50 rounded-full mb-4">
                    <span className="text-cyan-700 font-semibold text-sm">ENTERPRISE</span>
                  </div>
                  <div className="text-4xl font-bold text-slate-900 mb-2">Custom</div>
                  <p className="text-slate-600">For complex environments</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {[
                    "Everything in Premium plus custom features",
                    "Multi-ERP support and integration management",
                    "Custom SLAs and service level agreements",
                    "Dedicated onsite support team available",
                    "Strategic roadmap planning and consulting",
                    "Executive reporting and business alignment"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-cyan-800 hover:bg-cyan-700" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Manage */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">Comprehensive ERP Management</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 px-4 sm:px-0">End-to-end support for your entire ERP ecosystem</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "24/7 System Monitoring",
                description: "AI-powered monitoring tracks performance, errors, and anomalies in real-time. Get alerts before users notice problems.",
                icon: Activity,
                color: "from-cyan-400 to-blue-400",
                points: [
                  "Real-time performance and health monitoring",
                  "Anomaly detection with machine learning",
                  "Automated alerting for critical issues",
                  "Historical performance trend analysis"
                ]
              },
              {
                title: "Incident Management",
                description: "15-minute response SLA for critical issues. Dedicated support team with deep ERP expertise handles every ticket.",
                icon: HeadphonesIcon,
                color: "from-cyan-500 to-blue-500",
                points: [
                  "Guaranteed 15-minute response time SLA",
                  "Dedicated support engineers with ERP expertise",
                  "End-to-end incident tracking and resolution",
                  "Post-incident analysis and prevention"
                ]
              },
              {
                title: "Performance Optimization",
                description: "Monthly tuning of databases, queries, and workflows. Keep your ERP running at peak performance as data grows.",
                icon: Gauge,
                color: "from-cyan-400 to-blue-400",
                points: [
                  "Regular database optimization and tuning",
                  "Query performance analysis and improvement",
                  "Workflow efficiency enhancement",
                  "Capacity planning and scaling recommendations"
                ]
              },
              {
                title: "Patch & Update Management",
                description: "We test, schedule, and deploy patches with zero downtime. Stay current without the risk or hassle.",
                icon: Cloud,
                color: "from-cyan-500 to-blue-500",
                points: [
                  "Automated patch testing and validation",
                  "Zero-downtime deployment scheduling",
                  "Rollback procedures for failed updates",
                  "Compliance and security patch management"
                ]
              },
              {
                title: "Security & Compliance",
                description: "Continuous security monitoring, vulnerability scanning, and compliance reporting for SOX, GDPR, and industry standards.",
                icon: Lock,
                color: "from-cyan-400 to-blue-400",
                points: [
                  "Continuous security monitoring and threat detection",
                  "Vulnerability scanning and remediation",
                  "Compliance reporting (SOX, GDPR, HIPAA)",
                  "Access control and user management"
                ]
              },
              {
                title: "Strategic Planning",
                description: "Quarterly roadmap reviews to align your ERP with business goals. Proactive recommendations for improvements.",
                icon: LineChart,
                color: "from-cyan-500 to-blue-500",
                points: [
                  "Quarterly business alignment reviews",
                  "Technology roadmap planning",
                  "ROI analysis and business case development",
                  "Innovation and improvement recommendations"
                ]
              }
            ].map((service, i) => (
              <Card key={i} className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
                <div className={`h-2 w-full bg-gradient-to-r ${service.color}`} />
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-cyan-50 group-hover:scale-110 transition-transform">
                      <service.icon className="h-8 w-8 text-cyan-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 flex-1">{service.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.points.map((point, index) => (
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
      <ManagedServicesRoadmap />

      {/* Results */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 px-4 sm:px-0">The Managed Services Advantage</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 px-4 sm:px-0">What our clients experience</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
            {[
              { 
                metric: "99.9%", 
                label: "Uptime Achieved", 
                icon: Shield,
                description: "Guaranteed system availability"
              },
              { 
                metric: "73%", 
                label: "Fewer Critical Incidents", 
                icon: TrendingUp,
                description: "Reduction in major system issues"
              },
              { 
                metric: "40%", 
                label: "Lower TCO", 
                icon: Award,
                description: "Reduced total cost of ownership"
              }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <stat.icon className="h-10 w-10 text-cyan-600" />
                </div>
                <div className="text-5xl font-bold text-slate-900 mb-2">{stat.metric}</div>
                <div className="text-lg font-semibold text-slate-700 mb-2">{stat.label}</div>
                <div className="text-slate-600">{stat.description}</div>
              </div>
            ))}
          </div>

          <Card className="border border-slate-200 shadow-xl p-8 bg-gradient-to-br from-slate-50 to-white max-w-4xl mx-auto mt-16">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                <Award className="h-10 w-10 text-cyan-600" />
              </div>
              <div className="flex-1">
                <p className="text-lg text-slate-700 mb-4 italic leading-relaxed">
                  "Always stayed on top of projects and has delivered with care and on time. Their managed services have transformed our ERP operations, reducing downtime by 95% and freeing up our IT team to focus on strategic initiatives."
                </p>
                <div className="font-semibold text-slate-900">IT Director</div>
                <div className="text-slate-600">SME Solutions, Implementation partner</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-gradient-to-br from-cyan-900 to-blue-900">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-sm border border-white/20">
            <Sparkles className="w-5 h-5 text-cyan-300" />
            <span className="text-cyan-100 font-semibold text-sm">WORRY-FREE ERP OPERATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 tracking-tight px-4 sm:px-0">
            Stop Managing. Start Growing.
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-cyan-100 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Let us handle your ERP so you can focus on what matters—growing your business. Get a custom quote today.
          </p>
          <div className="pt-4">
            <Button size="lg" className="bg-white text-cyan-900 hover:bg-cyan-50 px-8 sm:px-12 h-16 sm:h-20 text-lg sm:text-xl md:text-2xl font-bold shadow-2xl rounded-full transition-transform hover:scale-105 w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
              Get Custom Quote <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </div>
          <p className="mt-8 text-cyan-200 font-medium">
            ⚡ Quote in 24 hours • ✓ Flexible SLAs • ✓ 99.9% uptime guarantee
          </p>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default ManagedServices;