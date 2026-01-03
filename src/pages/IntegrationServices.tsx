import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntegrationServicesRoadmap from "@/components/IntegrationServicesRoadmap";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FlipCard } from "@/components/FlipCard";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
  TrendingUp,
  AlertTriangle,
  Award,
  GitBranch,
  Workflow,
  Database,
  Cloud,
  Link2,
  RefreshCw,
  Lock,
  Gauge,
  Clock,
  DollarSign,
  Users,
  BarChart,
  Server
} from "lucide-react";

const IntegrationServices = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-500/20">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 px-4 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/15 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-500/15 via-transparent to-transparent" />

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500 shadow-lg shadow-blue-900/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            API-First Integration Experts
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6 sm:mb-8 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Stop Duct-Taping Systems<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">Start Integrating Smart</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 px-4 sm:px-0">
            Your ERP, CRM, warehouse, and e-commerce systems should talk to each other seamlessly. We build enterprise integrations that actually work—with AI intelligence built in.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300 px-4 sm:px-0">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-8 sm:px-10 h-14 sm:h-16 text-base sm:text-xl shadow-xl shadow-blue-900/50 rounded-full transition-all hover:scale-105 w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
              Get Integration Assessment
              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
            <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-8 sm:px-10 h-14 sm:h-16 text-base sm:text-xl rounded-full w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
              View Integration Portfolio
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm mt-6 sm:mt-8 text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span>Real-time sync</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span>Zero data loss</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span>Enterprise security</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section with Flip Cards - Enhanced Content */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-6">
              <AlertTriangle className="h-5 w-5" />
              <span className="font-semibold">THE INTEGRATION CHALLENGE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">Integration Hell Is Costing You Millions</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed">
              Poor system integration creates hidden costs and operational inefficiencies. Hover to see the solution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6">
                    <AlertTriangle className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Data Silos Everywhere</h3>
                  <ul className="text-slate-600 space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Customer data fragmented across 5+ systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>No single source of truth for critical business data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Inconsistent reporting and decision-making delays</span>
                    </li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <Database className="h-12 w-12 mb-6 text-white/90" />
                  <h3 className="text-2xl font-bold mb-4 text-white">Unified Data Layer</h3>
                  <ul className="text-blue-100 space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Real-time sync across all business systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Master data management implementation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Consolidated reporting dashboard</span>
                    </li>
                  </ul>
                </>
              }
            />
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-6">
                    <RefreshCw className="h-8 w-8 text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Manual Work Overload</h3>
                  <ul className="text-slate-600 space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Teams waste 15+ hours weekly on manual data entry</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>High error rates in manual data transfer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Employee frustration and reduced productivity</span>
                    </li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <Zap className="h-12 w-12 mb-6 text-white/90" />
                  <h3 className="text-2xl font-bold mb-4 text-white">Automated Workflows</h3>
                  <ul className="text-blue-100 space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Bi-directional sync eliminates manual data entry</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Automated order-to-cash and procure-to-pay cycles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Team focus shifts to strategic tasks</span>
                    </li>
                  </ul>
                </>
              }
            />
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-purple-50 flex items-center justify-center mb-6">
                    <GitBranch className="h-8 w-8 text-purple-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Fragile Integration Chains</h3>
                  <ul className="text-slate-600 space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Integrations break weekly with no clear alerts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>No monitoring or error handling mechanisms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Business continuity risks during outages</span>
                    </li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <Shield className="h-12 w-12 mb-6 text-white/90" />
                  <h3 className="text-2xl font-bold mb-4 text-white">Enterprise-Grade APIs</h3>
                  <ul className="text-blue-100 space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Robust error handling and automatic retries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>24/7 monitoring with instant alerts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>99.9% SLA guaranteed uptime</span>
                    </li>
                  </ul>
                </>
              }
            />
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                    <DollarSign className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Hidden Financial Costs</h3>
                  <ul className="text-slate-600 space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>30% higher operational costs due to inefficiencies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Lost revenue from poor customer experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Compliance risks and potential penalties</span>
                    </li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <TrendingUp className="h-12 w-12 mb-6 text-white/90" />
                  <h3 className="text-2xl font-bold mb-4 text-white">Financial Optimization</h3>
                  <ul className="text-blue-100 space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>40% reduction in operational costs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>ROI within 6-12 months of implementation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Compliance-ready architecture</span>
                    </li>
                  </ul>
                </>
              }
            />
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 rounded-xl shadow-sm">
            <div className="flex items-center gap-4">
              <BarChart className="h-8 w-8 text-blue-600" />
              <p className="text-lg font-semibold text-slate-900">
                <span className="text-blue-600">Industry Insight:</span> Companies with properly integrated systems are 2.5x more likely to exceed revenue targets and experience 30% lower operational costs than those with siloed data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Results - Enhanced Content */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full mb-6">
              <TrendingUp className="h-5 w-5" />
              <span className="font-semibold">THE TRANSFORMATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">Integration Impact: Measurable Results</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 px-4 sm:px-0 max-w-3xl mx-auto">
              When systems communicate effectively, the business impact is significant and measurable
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mb-12 sm:mb-16">
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
              <div className="h-2 w-full bg-gradient-to-r from-blue-400 to-blue-500" />
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Clock className="h-8 w-8 text-blue-500" />
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2">85%</div>
                <div className="text-slate-600 font-medium mb-3">Less Manual Work</div>
                <ul className="text-sm text-slate-500 text-left space-y-1.5 mt-4">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Automated data transfer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Reduced data entry hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Streamlined workflows</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
              <div className="h-2 w-full bg-gradient-to-r from-blue-500 to-blue-600" />
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Gauge className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2">Real-Time</div>
                <div className="text-slate-600 font-medium mb-3">Data Sync</div>
                <ul className="text-sm text-slate-500 text-left space-y-1.5 mt-4">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Instant data propagation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Live inventory updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Immediate order processing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
              <div className="h-2 w-full bg-gradient-to-r from-blue-600 to-blue-700" />
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="h-8 w-8 text-blue-700" />
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2">99.9%</div>
                <div className="text-slate-600 font-medium mb-3">Data Accuracy</div>
                <ul className="text-sm text-slate-500 text-left space-y-1.5 mt-4">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Error-free data transfer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Validation at every step</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Audit-ready logs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
              <div className="h-2 w-full bg-gradient-to-r from-blue-700 to-blue-800" />
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="h-8 w-8 text-blue-800" />
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2">Zero</div>
                <div className="text-slate-600 font-medium mb-3">Data Loss</div>
                <ul className="text-sm text-slate-500 text-left space-y-1.5 mt-4">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Complete data integrity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Transaction rollback capability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Backup and recovery systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border border-blue-100 shadow-xl p-8 bg-gradient-to-br from-blue-50 to-white max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                <Award className="h-10 w-10 text-blue-700" />
              </div>
              <div className="flex-1">
                <p className="text-lg text-slate-700 mb-4 italic leading-relaxed">
                  "We had 12 different systems that didn't talk to each other. AIERP Partners built a unified integration layer that syncs everything in real-time. Order-to-cash cycle time dropped from 5 days to 4 hours, and our operational costs decreased by 35%. Truly game changing."
                </p>
                <div className="font-semibold text-slate-900">Lisa Chen</div>
                <div className="text-slate-600">COO, Global E-Commerce Retailer</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Integration Services - Enhanced Content */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-6">
              <Server className="h-5 w-5" />
              <span className="font-semibold">OUR SOLUTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">Comprehensive Integration Services</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 px-4 sm:px-0 max-w-3xl mx-auto">
              End-to-end integration expertise tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "ERP Integration",
                description: "Connect SAP, Oracle, NetSuite, or custom ERPs with CRM, e-commerce, warehouse, and finance systems.",
                icon: Database,
                points: [
                  "Seamless data flow between ERP and business systems",
                  "Real-time inventory and financial data sync",
                  "Automated order processing workflows",
                  "Custom connector development for legacy systems"
                ],
                color: "from-blue-400 to-blue-500"
              },
              {
                title: "API Development",
                description: "Build custom REST and GraphQL APIs to expose your ERP data securely.",
                icon: Link2,
                points: [
                  "Secure API gateway implementation",
                  "Third-party integration enablement",
                  "Mobile app backend development",
                  "API documentation and developer portal"
                ],
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "iPaaS Solutions",
                description: "Implement MuleSoft, Dell Boomi, or custom integration platforms.",
                icon: Cloud,
                points: [
                  "Scalable integration platform setup",
                  "Pre-built connector deployment",
                  "Workflow orchestration design",
                  "Integration lifecycle management"
                ],
                color: "from-blue-600 to-blue-700"
              },
              {
                title: "Real-Time Data Sync",
                description: "Event-driven architectures for instant data propagation across systems.",
                icon: Zap,
                points: [
                  "Kafka/RabbitMQ event streaming",
                  "Webhook implementation",
                  "Change data capture (CDC)",
                  "Real-time analytics integration"
                ],
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Legacy System Integration",
                description: "Connect mainframes, AS/400, and legacy databases to modern applications.",
                icon: Workflow,
                points: [
                  "Legacy API modernization",
                  "Data migration and transformation",
                  "Bridge solutions for old systems",
                  "Phased migration strategies"
                ],
                color: "from-blue-600 to-blue-700"
              },
              {
                title: "Integration Monitoring",
                description: "AI-powered monitoring and alerting for integration infrastructure.",
                icon: Gauge,
                points: [
                  "24/7 system monitoring dashboard",
                  "Automated alerting and notifications",
                  "Performance analytics and reporting",
                  "Predictive failure prevention"
                ],
                color: "from-blue-700 to-blue-800"
              }
            ].map((service, i) => (
              <Card key={i} className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group h-full">
                <div className={`h-2 w-full bg-gradient-to-r ${service.color}`} />
                <CardContent className="p-6 sm:p-8 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-blue-50 group-hover:scale-110 transition-transform flex-shrink-0">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex-1">{service.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6 flex-shrink-0">{service.description}</p>
                  <div className="flex-1">
                    <ul className="space-y-3">
                      {service.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700 text-sm sm:text-base">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Roadmap */}
      <IntegrationServicesRoadmap />

      {/* Technologies - Enhanced Content */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-5 w-5" />
              <span className="font-semibold">TECHNOLOGY STACK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">Integration Technologies We Master</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 px-4 sm:px-0 max-w-3xl mx-auto">
              Modern tools and platforms for enterprise-grade integrations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {[
              { 
                metric: "REST/GraphQL APIs", 
                label: "API Standards & Protocols", 
                icon: Link2,
                points: [
                  "RESTful API design & implementation",
                  "GraphQL schema development",
                  "API security & authentication",
                  "OpenAPI/Swagger documentation"
                ]
              },
              { 
                metric: "Kafka/RabbitMQ", 
                label: "Event Streaming Platforms", 
                icon: Zap,
                points: [
                  "Real-time event processing",
                  "Message queue implementation",
                  "Stream processing pipelines",
                  "Event sourcing architecture"
                ]
              },
              { 
                metric: "MuleSoft/Boomi", 
                label: "iPaaS Platforms", 
                icon: Cloud,
                points: [
                  "Enterprise integration platform setup",
                  "Cloud-native integration patterns",
                  "API-led connectivity design",
                  "Integration lifecycle automation"
                ]
              }
            ].map((stat, i) => (
              <Card key={i} className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
                <div className={`h-2 w-full bg-gradient-to-r ${i === 0 ? 'from-blue-400 to-blue-500' : i === 1 ? 'from-blue-500 to-blue-600' : 'from-blue-600 to-blue-700'}`} />
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <stat.icon className="h-10 w-10 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-3">{stat.metric}</div>
                  <div className="text-lg text-slate-600 font-medium mb-6">{stat.label}</div>
                  <ul className="space-y-3 text-left">
                    {stat.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${i === 0 ? 'bg-blue-400' : i === 1 ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
                        <span className="text-slate-700 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border border-blue-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <Users className="h-12 w-12 text-blue-600" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Expert Integration Team</h3>
                  <p className="text-slate-700">Our certified architects and developers bring 10+ years of enterprise integration experience across industries.</p>
                </div>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-500 text-white px-8 h-12 rounded-full transition-all hover:scale-105 whitespace-nowrap" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
                Meet Our Experts <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full mb-8 backdrop-blur-sm border border-white/20">
            <Sparkles className="w-6 h-6 text-blue-300" />
            <span className="text-blue-100 font-semibold text-lg">SEAMLESS INTEGRATION AWAITS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 tracking-tight px-4 sm:px-0">
            Ready to Connect Your Systems?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Get a free integration assessment and discover how we can unify your data ecosystem with intelligent, enterprise-grade solutions.
          </p>
          <div className="pt-4">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-10 sm:px-14 h-16 sm:h-20 text-xl sm:text-2xl md:text-3xl font-bold shadow-2xl rounded-full transition-transform hover:scale-105 w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
              Get Free Assessment <ArrowRight className="ml-4 w-7 h-7" />
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-blue-200 font-medium">
            <div className="flex items-center justify-center gap-3">
              <Clock className="h-5 w-5" />
              <span>Assessment in 48 hours</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CheckCircle2 className="h-5 w-5" />
              <span>No obligation</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Award className="h-5 w-5" />
              <span>Actionable roadmap included</span>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default IntegrationServices;