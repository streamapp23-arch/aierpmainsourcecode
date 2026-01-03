import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultingRoadmap from "@/components/ConsultingRoadmap";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FlipCard } from "@/components/FlipCard";
import {
  Brain,
  TrendingUp,
  Target,
  Zap,
  CheckCircle2,
  Users,
  LineChart,
  Settings,
  Award,
  ArrowRight,
  Sparkles,
  BarChart3,
  Lightbulb,
  Rocket,
  Shield
} from "lucide-react";

import SEO from "@/components/SEO";

const BusinessProcessConsulting = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-cyan-500/20">
      <SEO
        title="Business Process Consulting | Strategic Transformation with AI"
        description="We don't just optimize workflows—we transform them with AI intelligence. From manual chaos to automated excellence, we make your operations your unfair advantage."
        keywords="Business Process Consulting, AI Process Optimization, Workflow Automation, Strategic Transformation, Operational Excellence"
        canonicalUrl="https://www.aierppartners.com/business-process-consulting"
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
                    name: "Business Process Consulting",
                    url: "/business-process-consulting"
          }
]}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Business Process Consulting",
          "provider": {
            "@type": "Organization",
            "name": "AIERP Partners"
          },
          "description": "Strategic Process Transformation with AI intelligence. From manual chaos to automated excellence.",
          "serviceType": "Consulting Service"
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
            Strategic Process Transformation
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6 sm:mb-8 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Turn Your Processes Into<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Competitive Weapons</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 px-4 sm:px-0">
            We don't just optimize workflows—we transform them with AI intelligence. From manual chaos to automated excellence, we make your operations your unfair advantage.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300 px-4 sm:px-0">
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 sm:px-10 h-14 sm:h-16 text-base sm:text-xl shadow-xl shadow-cyan-900/50 rounded-full transition-all hover:scale-105 w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
              Get Process Assessment
              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
            <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-8 sm:px-10 h-14 sm:h-16 text-base sm:text-xl rounded-full w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
              View Case Studies
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm mt-6 sm:mt-8 text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span>Big4 methodology</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span>AI-powered insights</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section with Flip Cards */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">Your Processes Are Bleeding Money</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed">
              Hover over the cards to see how process consulting transforms operational pain into profit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6">
                    <Settings className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Manual Processes Everywhere</h3>
                  <p className="text-slate-500">Teams waste hours on repetitive tasks that should be automated.</p>
                </>
              }
              backContent={
                <>
                  <Zap className="h-12 w-12 mb-4 text-white/90" />
                  <h3 className="text-2xl font-bold mb-2">AI-Powered Automation</h3>
                  <p className="text-blue-100">Intelligent workflows that run 24/7 with zero human intervention.</p>
                </>
              }
            />
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-6">
                    <BarChart3 className="h-8 w-8 text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">No Visibility Into Performance</h3>
                  <p className="text-slate-500">You can't optimize what you can't measure.</p>
                </>
              }
              backContent={
                <>
                  <LineChart className="h-12 w-12 mb-4 text-white/90" />
                  <h3 className="text-2xl font-bold mb-2">Real-Time Analytics</h3>
                  <p className="text-blue-100">Live dashboards with predictive insights and KPI tracking.</p>
                </>
              }
            />
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-purple-50 flex items-center justify-center mb-6">
                    <Users className="h-8 w-8 text-purple-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Siloed Departments</h3>
                  <p className="text-slate-500">Finance, ops, and sales don't talk to each other.</p>
                </>
              }
              backContent={
                <>
                  <Rocket className="h-12 w-12 mb-4 text-white/90" />
                  <h3 className="text-2xl font-bold mb-2">Unified Operations</h3>
                  <p className="text-blue-100">End-to-end process integration with seamless data flow.</p>
                </>
              }
            />
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                    <Target className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Reactive Decision Making</h3>
                  <p className="text-slate-500">Always putting out fires instead of preventing them.</p>
                </>
              }
              backContent={
                <>
                  <Brain className="h-12 w-12 mb-4 text-white/90" />
                  <h3 className="text-2xl font-bold mb-2">Predictive Intelligence</h3>
                  <p className="text-blue-100">AI forecasts issues before they happen, enabling proactive action.</p>
                </>
              }
            />
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-500 rounded-xl">
            <p className="text-center text-lg font-semibold text-slate-900">
              <span className="text-cyan-600">Industry Fact:</span> Companies with optimized processes are 40% more profitable than competitors. AI amplifies that advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">Measurable Transformation</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 px-4 sm:px-0">Real results from real process optimization engagements</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mb-12 sm:mb-16">
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="h-2 w-full bg-gradient-to-r from-green-400 to-emerald-400" />
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-green-500" />
                </div>
                <div className="text-5xl font-bold text-slate-900 mb-2">40%</div>
                <div className="text-slate-600 font-medium">Faster Cycle Times</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="h-2 w-full bg-gradient-to-r from-cyan-400 to-blue-400" />
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-cyan-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-cyan-500" />
                </div>
                <div className="text-5xl font-bold text-slate-900 mb-2">60%</div>
                <div className="text-slate-600 font-medium">Less Manual Work</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="h-2 w-full bg-gradient-to-r from-purple-400 to-pink-400" />
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="h-8 w-8 text-purple-500" />
                </div>
                <div className="text-5xl font-bold text-slate-900 mb-2">95%</div>
                <div className="text-slate-600 font-medium">Process Accuracy</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="h-2 w-full bg-gradient-to-r from-orange-400 to-red-400" />
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-orange-500" />
                </div>
                <div className="text-5xl font-bold text-slate-900 mb-2">$2M+</div>
                <div className="text-slate-600 font-medium">Avg. Annual Savings</div>
              </CardContent>
            </Card>
          </div>

          <Card className="border border-slate-200 shadow-xl p-8 bg-gradient-to-br from-slate-50 to-white max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                <Award className="h-10 w-10 text-cyan-600" />
              </div>
              <div className="flex-1">
                <p className="text-lg text-slate-700 mb-4 italic leading-relaxed">
                  "Ai erp partners Experts did a great job and I would highly recommend them. They provided great service to our clients and represented us well"
                </p>
                <div className="font-semibold text-slate-900">IT Director</div>
                <div className="text-slate-600">T-Systems</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">Our Consulting Services</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 px-4 sm:px-0">End-to-end process transformation powered by AI</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                title: "Process Discovery & Mapping",
                description: "We analyze your current state operations, identify bottlenecks, and map opportunities for AI-powered optimization across all business functions.",
                icon: Lightbulb,
                color: "from-cyan-400 to-blue-400"
              },
              {
                title: "AI Strategy & Roadmap",
                description: "Design a transformation roadmap with clear priorities, ROI projections, and phased implementation plans tailored to your business goals.",
                icon: Target,
                color: "from-blue-400 to-indigo-400"
              },
              {
                title: "Workflow Automation",
                description: "Implement intelligent automation for repetitive tasks, approvals, data entry, and reconciliation—freeing your team for strategic work.",
                icon: Zap,
                color: "from-purple-400 to-pink-400"
              },
              {
                title: "Predictive Analytics Integration",
                description: "Embed AI models for demand forecasting, risk prediction, and trend analysis directly into your ERP workflows for real-time insights.",
                icon: Brain,
                color: "from-green-400 to-emerald-400"
              },
              {
                title: "Change Management",
                description: "Ensure successful adoption with comprehensive training, stakeholder alignment, and ongoing support for your transformation journey.",
                icon: Users,
                color: "from-orange-400 to-red-400"
              },
              {
                title: "Continuous Optimization",
                description: "Monitor performance, refine processes, and evolve AI models to maintain competitive advantage as your business scales.",
                icon: TrendingUp,
                color: "from-teal-400 to-cyan-400"
              }
            ].map((service, i) => (
              <Card key={i} className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
                <div className={`h-2 w-full bg-gradient-to-r ${service.color}`} />
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-slate-100 group-hover:scale-110 transition-transform">
                      <service.icon className="h-8 w-8 text-slate-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 flex-1">{service.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Roadmap */}
      <ConsultingRoadmap />

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 px-4 sm:px-0">Why Leading Companies Choose Us</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 px-4 sm:px-0">Big4 expertise meets AI innovation</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
            {[
              { metric: "15+ Years", label: "Combined ERP Experience", icon: Award },
              { metric: "Big4", label: "Methodology & Standards", icon: Shield },
              { metric: "100%", label: "AI-Powered Solutions", icon: Brain }
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
            <span className="text-cyan-100 font-semibold text-sm">TRANSFORM YOUR OPERATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 tracking-tight px-4 sm:px-0">
            Ready to Turn Processes Into Profit?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-cyan-100 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Get a free process assessment and discover how AI can transform your operations into a competitive advantage.
          </p>
          <div className="pt-4">
            <Button size="lg" className="bg-white text-cyan-900 hover:bg-cyan-50 px-8 sm:px-12 h-16 sm:h-20 text-lg sm:text-xl md:text-2xl font-bold shadow-2xl rounded-full transition-transform hover:scale-105 w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
              Get Free Assessment <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </div>
          <p className="mt-8 text-cyan-200 font-medium">
            ⚡ Delivered in 48 hours • ✓ No obligation • ✓ Actionable insights included
          </p>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default BusinessProcessConsulting;
