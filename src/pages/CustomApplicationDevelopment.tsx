import { ArrowRight, CheckCircle2, Code, TrendingUp, Shield, Zap, Users, Clock, DollarSign, AlertTriangle, Sparkles, Brain, Rocket, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import CustomAppRoadmap from "@/components/CustomAppRoadmap";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FlipCard } from "@/components/FlipCard";

const CustomApplicationDevelopment = () => {
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
            AI-First Development
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6 sm:mb-8 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Stop Forcing Your Business Into<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Off-the-Shelf</span> Software
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 px-4 sm:px-0">
            Your competitive advantage lives in the 20% of workflows that are uniquely yours. We build custom AI-powered applications that turn your secret sauce into software.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300 px-4 sm:px-0">
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 sm:px-10 h-14 sm:h-16 text-base sm:text-xl shadow-xl shadow-cyan-900/50 rounded-full transition-all hover:scale-105 w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
              Schedule Discovery Call
              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
            <Button size="lg" variant="outline" className="border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 hover:text-white px-8 sm:px-10 h-14 sm:h-16 text-base sm:text-xl rounded-full w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
              View Portfolio
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm mt-6 sm:mt-8 text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-cyan-400" />
              <span>Fixed-price option available</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-cyan-400" />
              <span>MVP in 8 weeks</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section with Flip Cards */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">Generic Software Is Destroying Your Competitive Edge</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed">
              Hover over the cards to see how custom development transforms limitations into advantages.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-cyan-50 flex items-center justify-center mb-6">
                    <Layers className="h-8 w-8 text-cyan-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Frankenstein Tech Stack</h3>
                  <p className="text-slate-500">You're duct-taping 15 SaaS tools together with Zapier.</p>
                  <ul className="mt-4 text-sm text-slate-600 space-y-1 text-left">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      Data fragmentation across multiple systems
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      Integration costs spiraling out of control
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      Security vulnerabilities at every connection point
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      Employee productivity lost to constant context switching
                    </li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <Rocket className="h-12 w-12 mb-4 text-white/90" />
                  <h3 className="text-2xl font-bold mb-2">Single Unified Platform</h3>
                  <p className="text-blue-100">One custom app that does everything, with all data in one place.</p>
                  <ul className="mt-4 text-sm text-blue-100 space-y-1 text-left">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5"></div>
                      Unified data model with single source of truth
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5"></div>
                      Seamless workflows across all business functions
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5"></div>
                      Enterprise-grade security built in
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5"></div>
                      Reduced IT overhead and maintenance costs
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
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Feature Requests Die in Support Tickets</h3>
                  <p className="text-slate-500">SaaS vendors don't care. You're one of 10,000 customers.</p>
                  <ul className="mt-4 text-sm text-slate-600 space-y-1 text-left">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      Months-long wait for basic feature additions
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      No control over product roadmap priorities
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      Feature bloat with irrelevant additions
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      Costly workarounds for missing functionality
                    </li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <Zap className="h-12 w-12 mb-4 text-white/90" />
                  <h3 className="text-2xl font-bold mb-2">Weekly Feature Deployments</h3>
                  <p className="text-blue-100">New features deployed every week based on your priorities.</p>
                  <ul className="mt-4 text-sm text-blue-100 space-y-1 text-left">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5"></div>
                      Direct input on feature development priorities
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5"></div>
                      Rapid prototyping and iterative improvements
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5"></div>
                      Agile development with weekly progress reviews
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5"></div>
                      Features that solve your actual business problems
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
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Workarounds Become "Process"</h3>
                  <p className="text-slate-500">Elaborate workflows to compensate for software limitations.</p>
                  <ul className="mt-4 text-sm text-slate-600 space-y-1 text-left">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      Manual data entry and duplicate processes
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      Spreadsheet-based tracking systems
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      Email chains for approval workflows
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      Training time spent on software limitations
                    </li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <Brain className="h-12 w-12 mb-4 text-white/90" />
                  <h3 className="text-2xl font-bold mb-2">Software Adapts to You</h3>
                  <p className="text-blue-100">Custom workflows that match exactly how your team works.</p>
                  <ul className="mt-4 text-sm text-blue-100 space-y-1 text-left">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5"></div>
                      Automated workflows eliminating manual steps
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5"></div>
                      AI-powered process optimization
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5"></div>
                      Role-based interfaces for each team member
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5"></div>
                      Real-time collaboration and data sharing
                    </li>
                  </ul>
                </>
              }
            />
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-cyan-50 flex items-center justify-center mb-6">
                    <Shield className="h-8 w-8 text-cyan-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Your IP Lives in Their System</h3>
                  <p className="text-slate-500">Your competitive secrets locked in someone else's software.</p>
                  <ul className="mt-4 text-sm text-slate-600 space-y-1 text-left">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      Vendor lock-in with expensive exit costs
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      Limited data portability and ownership
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      Security dependent on vendor's practices
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      Competitive intelligence at risk of exposure
                    </li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <Sparkles className="h-12 w-12 mb-4 text-white/90" />
                  <h3 className="text-2xl font-bold mb-2">You Own Everything</h3>
                  <p className="text-blue-100">Full code ownership, complete control, total data sovereignty.</p>
                  <ul className="mt-4 text-sm text-blue-100 space-y-1 text-left">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5"></div>
                      100% ownership of source code and IP
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5"></div>
                      Complete data sovereignty and control
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5"></div>
                      Custom security protocols tailored to your needs
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5"></div>
                      Freedom to modify, scale, or sell your solution
                    </li>
                  </ul>
                </>
              }
            />
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-500 rounded-xl">
            <p className="text-center text-lg font-semibold text-slate-900">
              <span className="text-cyan-600">Hard Truth:</span> Companies that rely entirely on off-the-shelf software become commodities. Custom technology is the new moat.
            </p>
          </div>
        </div>
      </section>

      {/* Customer Transformation */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">From Software Compromise to Perfect-Fit Solutions</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 px-4 sm:px-0">Businesses that stopped settling and started building</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="h-2 w-full bg-gradient-to-r from-cyan-400 to-blue-400" />
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-cyan-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-cyan-600" />
                </div>
                <div className="text-5xl font-bold text-slate-900 mb-2">5x</div>
                <div className="text-slate-600 font-medium">Faster Workflows</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="h-2 w-full bg-gradient-to-r from-cyan-500 to-blue-500" />
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-cyan-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="h-8 w-8 text-cyan-600" />
                </div>
                <div className="text-5xl font-bold text-slate-900 mb-2">$500K</div>
                <div className="text-slate-600 font-medium">Avg. Annual SaaS Savings</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="h-2 w-full bg-gradient-to-r from-cyan-600 to-blue-600" />
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-cyan-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="h-8 w-8 text-cyan-600" />
                </div>
                <div className="text-5xl font-bold text-slate-900 mb-2">100%</div>
                <div className="text-slate-600 font-medium">Built for Your Needs</div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            <Card className="border border-slate-200 shadow-xl p-8 bg-gradient-to-br from-slate-50 to-white">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="Client" className="w-20 h-20 rounded-full object-cover shadow-lg" />
                <div className="flex-1">
                  <p className="text-lg text-slate-700 mb-4 italic leading-relaxed">
                    "We were spending $200K/year on six different SaaS tools that didn't quite work together. AIERP Partners built us a single custom platform with AI automation that does everything—for less than we were paying in subscriptions. Game changer."
                  </p>
                  <div className="font-semibold text-slate-900">Jessica Wu</div>
                  <div className="text-slate-600">COO, Healthcare Services</div>
                </div>
              </div>
            </Card>

            <Card className="border border-slate-200 shadow-xl p-8 bg-gradient-to-br from-slate-50 to-white">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="Client" className="w-20 h-20 rounded-full object-cover shadow-lg" />
                <div className="flex-1">
                  <p className="text-lg text-slate-700 mb-4 italic leading-relaxed">
                    "Our sales process was too complex for any CRM. We needed something custom. They delivered an AI-powered sales platform that knows our industry and predicts deal closure better than our VP of Sales. Revenue up 40% year-over-year."
                  </p>
                  <div className="font-semibold text-slate-900">Marcus Johnson</div>
                  <div className="text-slate-600">CEO, B2B SaaS Company</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Custom Development Benefits */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">Why Custom Development Wins</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 px-4 sm:px-0">Built for you, owned by you, powered by AI</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                title: "AI-First Architecture",
                description: "Every app we build has AI baked in—automation, predictions, natural language interfaces. This is how software should work in 2024.",
                icon: Sparkles,
                color: "from-cyan-400 to-blue-400",
                points: [
                  "Intelligent automation replacing manual tasks",
                  "Predictive analytics for data-driven decisions",
                  "Natural language processing interfaces",
                  "Machine learning models tailored to your data"
                ]
              },
              {
                title: "Your Data Stays Yours",
                description: "No third-party vendor can hold your data hostage. Full ownership, complete control, export anytime. Total data sovereignty.",
                icon: Shield,
                color: "from-cyan-500 to-blue-500",
                points: [
                  "Complete ownership of all data and algorithms",
                  "Enterprise-grade encryption and security",
                  "Compliance with industry-specific regulations",
                  "Full data portability and backup control"
                ]
              },
              {
                title: "Built to Integrate Everything",
                description: "APIs, webhooks, real-time sync with any system. We design for integration from day one. Your new app plays nice with existing tools.",
                icon: Zap,
                color: "from-cyan-400 to-blue-400",
                points: [
                  "RESTful APIs for seamless connectivity",
                  "Webhook support for real-time updates",
                  "Legacy system integration capabilities",
                  "Third-party service orchestration"
                ]
              },
              {
                title: "Scales With Your Growth",
                description: "Start with MVP, add features as you grow. Cloud-native architecture means we handle 100 users or 100,000 without breaking a sweat.",
                icon: TrendingUp,
                color: "from-cyan-500 to-blue-500",
                points: [
                  "Microservices architecture for scalability",
                  "Auto-scaling cloud infrastructure",
                  "Performance optimization for growth",
                  "Cost-efficient resource allocation"
                ]
              },
              {
                title: "Actually Agile Development",
                description: "Weekly demos, constant feedback, rapid iteration. You see progress every week, not after 6 months. No surprises at launch.",
                icon: Users,
                color: "from-cyan-400 to-blue-400",
                points: [
                  "Two-week sprint cycles with tangible deliverables",
                  "Continuous client collaboration and feedback",
                  "Transparent progress tracking and reporting",
                  "Adaptive planning based on evolving needs"
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
      <CustomAppRoadmap />

      {/* Social Proof */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 px-4 sm:px-0">Battle-Tested Development Process</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 px-4 sm:px-0">From MVP to scale, we've built it all</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
            {[
              { metric: "300+", label: "Custom Apps Shipped", icon: Code },
              { metric: "98%", label: "On-Time Delivery", icon: Clock },
              { metric: "24/7", label: "Support & Maintenance", icon: Shield }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
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
            <span className="text-cyan-100 font-semibold text-sm">BUILD YOUR COMPETITIVE ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 tracking-tight px-4 sm:px-0">
            Build Your Competitive Advantage
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-cyan-100 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Stop adapting your business to software limitations. Let's build exactly what you need with AI baked in.
          </p>
          <div className="pt-4">
            <Button size="lg" className="bg-white text-cyan-900 hover:bg-cyan-50 px-8 sm:px-12 h-16 sm:h-20 text-lg sm:text-xl md:text-2xl font-bold shadow-2xl rounded-full transition-transform hover:scale-105 w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
              Start With Discovery Sprint <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </div>
          <p className="mt-8 text-cyan-200 font-medium">
            ⚡ Get prototype in 2 weeks • ✓ Fixed $10K price • ✓ Full refund if not satisfied
          </p>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default CustomApplicationDevelopment;