import { ArrowRight, CheckCircle2, Database, TrendingUp, Shield, Zap, Users, Clock, DollarSign, AlertTriangle, Sparkles, Brain, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import OracleRoadmap from "@/components/OracleRoadmap";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FlipCard } from "@/components/FlipCard";
import SEO from "@/components/SEO";

const Oracle = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-orange-500/20">
      <SEO
        title="Oracle ERP AI Transformation | Modernize Oracle Cloud & EBS"
        description="Turn your Oracle ERP into an AI-powered decision engine that predicts problems, automates workflows, and delivers insights."
        keywords="Oracle ERP AI, Oracle Cloud Infrastructure, Oracle EBS Modernization, Oracle AI Integration"
        canonicalUrl="https://www.aierppartners.com/oracle"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Solutions", url: "/#solutions" },
          { name: "Oracle", url: "/oracle" }
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Oracle ERP AI Transformation",
          "provider": {
            "@type": "Organization",
            "name": "AIERP Partners"
          },
          "description": "Turn Oracle ERP into an AI-powered decision engine that predicts problems and automates workflows.",
          "serviceType": "ERP Modernization"
        }}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 px-4 overflow-hidden bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-200/40 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-200/40 via-transparent to-transparent" />

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-700 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500 shadow-lg shadow-cyan-900/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Oracle Cloud Infrastructure Certified
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-6 sm:mb-8 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Your Oracle System Should Be<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Your Biggest Advantage</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 px-4 sm:px-0">
            Turn Oracle ERP into an AI-powered decision engine that predicts problems, automates workflows, and delivers insights your leadership actually uses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300 px-4 sm:px-0">
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 sm:px-10 h-14 sm:h-16 text-base sm:text-xl shadow-xl shadow-cyan-900/20 rounded-full transition-all hover:scale-105 w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
              Get Free Oracle AI Roadmap
              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-slate-300 text-slate-700 hover:bg-white hover:text-cyan-600 hover:border-cyan-300 px-8 sm:px-10 h-14 sm:h-16 text-base sm:text-xl rounded-full w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
              Watch 3-Min Demo
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm mt-6 sm:mt-8 text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>Zero Oracle downtime</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>30-day results guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section with Flip Cards */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">Your Oracle Investment Is Underperforming</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed">
              Most Oracle systems are stuck in reactive mode—manual, slow, and hard to adapt. Here’s how AI can turn your Oracle investment into a true business driver:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                    <AlertTriangle className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Customizations Trap</h3>
                  <p className="text-slate-500 text-sm">Upgrades break custom code, causing delays and risk.</p>
                  <ul className="list-disc pl-5 mt-2 text-slate-500 text-xs">
                    <li>Manual testing for every update</li>
                    <li>Frequent downtime and rollbacks</li>
                    <li>High cost of maintaining legacy code</li>
                    <li>Slow adoption of new Oracle features</li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <Brain className="h-10 w-10 mb-3 text-blue-200" />
                  <h3 className="text-lg font-bold mb-1">AI-Driven Testing</h3>
                  <p className="text-blue-100 text-xs">AI auto-tests and adapts customizations for every upgrade—no more manual fixes.</p>
                  <ul className="list-disc pl-5 mt-2 text-blue-100 text-xs">
                    <li>Automated regression testing</li>
                    <li>Instant compatibility checks</li>
                    <li>Reduced upgrade risk</li>
                    <li>Faster go-live cycles</li>
                  </ul>
                </>
              }
            />
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-purple-50 flex items-center justify-center mb-6">
                    <Clock className="h-8 w-8 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Slow, Manual Reporting</h3>
                  <p className="text-slate-500 text-sm">Finance and ops wait days for answers.</p>
                  <ul className="list-disc pl-5 mt-2 text-slate-500 text-xs">
                    <li>Spreadsheet-based processes</li>
                    <li>Delayed decision-making</li>
                    <li>Data silos across departments</li>
                    <li>High risk of reporting errors</li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <Zap className="h-10 w-10 mb-3 text-blue-200" />
                  <h3 className="text-lg font-bold mb-1">Instant AI Insights</h3>
                  <p className="text-blue-100 text-xs">Natural language queries and predictive dashboards—get answers in seconds.</p>
                  <ul className="list-disc pl-5 mt-2 text-blue-100 text-xs">
                    <li>Real-time dashboards</li>
                    <li>Automated trend analysis</li>
                    <li>Self-service reporting</li>
                    <li>Proactive alerts for anomalies</li>
                  </ul>
                </>
              }
            />
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-green-50 flex items-center justify-center mb-6">
                    <Users className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Expert Shortage</h3>
                  <p className="text-slate-500 text-sm">Oracle talent is scarce and expensive.</p>
                  <ul className="list-disc pl-5 mt-2 text-slate-500 text-xs">
                    <li>Long wait for support tickets</li>
                    <li>High consulting costs</li>
                    <li>Knowledge loss with turnover</li>
                    <li>Limited in-house expertise</li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <Sparkles className="h-10 w-10 mb-3 text-blue-200" />
                  <h3 className="text-lg font-bold mb-1">AI Self-Service</h3>
                  <p className="text-blue-100 text-xs">AI handles routine queries and maintenance, freeing up your experts.</p>
                  <ul className="list-disc pl-5 mt-2 text-blue-100 text-xs">
                    <li>Automated troubleshooting</li>
                    <li>24/7 virtual assistant</li>
                    <li>Guided user help</li>
                    <li>Reduced support backlog</li>
                  </ul>
                </>
              }
            />
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-pink-50 flex items-center justify-center mb-6">
                    <Target className="h-8 w-8 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Cloud Migration Fears</h3>
                  <p className="text-slate-500 text-sm">Migration seems risky and disruptive.</p>
                  <ul className="list-disc pl-5 mt-2 text-slate-500 text-xs">
                    <li>Complex legacy integrations</li>
                    <li>Downtime concerns</li>
                    <li>Data loss risk</li>
                    <li>Unclear migration roadmap</li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <TrendingUp className="h-10 w-10 mb-3 text-blue-200" />
                  <h3 className="text-lg font-bold mb-1">AI-Guided Migration</h3>
                  <p className="text-blue-100 text-xs">AI plans and automates migration steps for zero-downtime transitions.</p>
                  <ul className="list-disc pl-5 mt-2 text-blue-100 text-xs">
                    <li>Automated data mapping</li>
                    <li>Continuous migration monitoring</li>
                    <li>Rollback safety nets</li>
                    <li>Step-by-step migration plans</li>
                  </ul>
                </>
              }
            />
          </div>
        </div>
      </section>

      {/* Customer Transformation */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">From Oracle Frustration to AI-Powered Excellence</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 px-4 sm:px-0">Real transformations from Oracle customers who refused to accept "good enough"</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="h-2 w-full bg-gradient-to-r from-green-400 to-emerald-400" />
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-green-500" />
                </div>
                <div className="text-5xl font-bold text-slate-900 mb-2">75%</div>
                <div className="text-slate-600 font-medium">Faster Financial Close</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="h-2 w-full bg-gradient-to-r from-blue-400 to-cyan-400" />
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="h-8 w-8 text-blue-500" />
                </div>
                <div className="text-5xl font-bold text-slate-900 mb-2">$3.7M</div>
                <div className="text-slate-600 font-medium">Average 3-Year Savings</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="h-2 w-full bg-gradient-to-r from-purple-400 to-pink-400" />
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-purple-500" />
                </div>
                <div className="text-5xl font-bold text-slate-900 mb-2">92%</div>
                <div className="text-slate-600 font-medium">Forecast Accuracy</div>
              </CardContent>
            </Card>
          </div>

          <Card className="border border-slate-200 shadow-xl p-8 bg-gradient-to-br from-slate-50 to-white">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop" alt="Client" className="w-20 h-20 rounded-full object-cover shadow-lg" />
              <div className="flex-1">
                <p className="text-lg text-slate-700 mb-4 italic leading-relaxed">
                  "We were considering scrapping Oracle entirely. AIERP Partners showed us we didn't need to replace it—we needed to unleash it. Now Oracle is our competitive edge. AI handles reconciliation, our CFO gets real-time dashboards, and we've cut month-end close from 15 days to 4."
                </p>
                <div className="font-semibold text-slate-900">Sarah Martinez</div>
                <div className="text-slate-600">CFO, Global Logistics Company</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Oracle AI Capabilities */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">Oracle AI Capabilities That Drive Real Business Value</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 px-4 sm:px-0">See how Oracle + AI delivers results across your business processes.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[{
              title: "Intelligent Process Automation",
              description: "AI automates approvals, reconciliations, and exception handling—cutting manual work by 85%.",
              icon: Zap,
              color: "from-blue-400 to-cyan-400",
              points: [
                "Automated invoice matching",
                "Workflow approvals",
                "Exception resolution",
                "End-to-end process tracking"
              ]
            }, {
              title: "Predictive Cash Flow Management",
              description: "ML predicts cash positions 90 days out, helping you plan and avoid surprises.",
              icon: TrendingUp,
              color: "from-purple-400 to-pink-400",
              points: [
                "Receivables forecasting",
                "Expense trend analysis",
                "Payment timing optimization",
                "Scenario modeling"
              ]
            }, {
              title: "Smart Vendor Management",
              description: "AI flags risky vendors and negotiates better terms based on data.",
              icon: Users,
              color: "from-green-400 to-emerald-400",
              points: [
                "Vendor risk scoring",
                "Contract optimization",
                "Spend analysis",
                "Performance benchmarking"
              ]
            }, {
              title: "Real-Time Anomaly Detection",
              description: "AI monitors transactions for fraud and errors, alerting you instantly.",
              icon: Shield,
              color: "from-indigo-400 to-violet-400",
              points: [
                "Fraud pattern detection",
                "Compliance monitoring",
                "Duplicate payment alerts",
                "Audit trail automation"
              ]
            }, {
              title: "Natural Language Reporting",
              description: "Ask Oracle questions in plain English—get instant, AI-generated reports.",
              icon: Database,
              color: "from-cyan-400 to-blue-400",
              points: [
                "Conversational queries",
                "Automated charting",
                "KPI summaries",
                "Drill-down analytics"
              ]
            }, {
              title: "Automated Compliance",
              description: "AI keeps you audit-ready by tracking policy changes and flagging risks.",
              icon: CheckCircle2,
              color: "from-pink-400 to-red-400",
              points: [
                "Policy change alerts",
                "Continuous controls testing",
                "Risk scoring",
                "Regulatory reporting"
              ]
            }].map((benefit, i) => (
              <Card key={i} className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
                <div className={`h-2 w-full bg-gradient-to-r ${benefit.color}`} />
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-slate-100 group-hover:scale-110 transition-transform">
                      <benefit.icon className="h-8 w-8 text-slate-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 flex-1">{benefit.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-3">{benefit.description}</p>
                  <ul className="list-disc pl-5 text-slate-500 text-sm">
                    {benefit.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Roadmap */}
      <OracleRoadmap />

      {/* Social Proof */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 px-4 sm:px-0">Oracle + AI Success Stories Across Industries</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 px-4 sm:px-0">From manufacturing to finance, healthcare to retail</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
            {[
              { metric: "150+", label: "Oracle Modernizations", icon: Database },
              { metric: "100%", label: "Zero-Downtime Migrations", icon: Shield },
              { metric: "60 Days", label: "Avg. Time to Value", icon: Zap }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <stat.icon className="h-10 w-10 text-orange-600" />
                </div>
                <div className="text-5xl font-bold text-slate-900 mb-3">{stat.metric}</div>
                <div className="text-lg text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-gradient-to-br from-orange-900 to-red-900">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-sm border border-white/20">
            <Sparkles className="w-5 h-5 text-orange-300" />
            <span className="text-orange-100 font-semibold text-sm">TRANSFORM YOUR ORACLE INVESTMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 tracking-tight px-4 sm:px-0">
            Your Oracle System Can Be 10x More Valuable
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-orange-100 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Stop accepting mediocre results from enterprise software. Discover what Oracle + AI can do for your business.
          </p>
          <div className="pt-4">
            <Button size="lg" className="bg-white text-orange-900 hover:bg-orange-50 px-8 sm:px-12 h-16 sm:h-20 text-lg sm:text-xl md:text-2xl font-bold shadow-2xl rounded-full transition-transform hover:scale-105 w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
              Get Your Free Oracle AI Roadmap <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </div>
          <p className="mt-8 text-orange-200 font-medium">
            ⚡ Assessment delivered in 48 hours • ✓ No strings attached • ✓ Actionable from day one
          </p>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Oracle;
