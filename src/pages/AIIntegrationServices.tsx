import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FlipCard } from "@/components/FlipCard";
import IntegrationRoadmap from "@/components/IntegrationRoadmap";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  ArrowRight,
  FileText,
  Globe,
  MessageSquare,
  Network,
  ShieldCheck,
  TrendingUp,
  Workflow,
  Zap,
  AlertTriangle,

  Receipt,
  ScanFace,
  UserMinus,
  BadgeDollarSign,
  Bot,
  Mic,
} from "lucide-react";

import SEO from "@/components/SEO";

const AIIntegrationServices = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-blue/20">
      <SEO
        title="AI Integration Services | SAP, Oracle & Custom ERP"
        description="Stop manually processing data. We integrate enterprise AI services into SAP, Oracle, and custom systems to automate workflows and predict outcomes."
        keywords="AI Integration, ERP Automation, SAP AI, Oracle AI, Custom ERP AI, Workflow Automation"
        canonicalUrl="https://www.aierppartners.com/ai-integration-services"
        breadcrumbs={[
          {
                    name: "Home",
                    url: "/"
          },
          {
                    name: "Solutions",
                    url: "/#solutions"
          },
          {
                    name: "AI Integration",
                    url: "/ai-integration-services"
          }
]}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "AI Integration Services",
          "provider": {
            "@type": "Organization",
            "name": "AIERP Partners"
          },
          "description": "Integrate enterprise AI services into SAP, Oracle, and custom systems to automate workflows.",
          "serviceType": "System Integration"
        }}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 px-4 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-100/50 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent" />

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Integration Slots Available for Q4
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-slate-900 tracking-tight mb-6 sm:mb-8 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Your ERP is a Goldmine. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-500">AI is the Pickaxe.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 px-4 sm:px-0">
            Stop manually processing data. We integrate enterprise AI services into SAP, Oracle, and custom systems to automate workflows and predict outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300 px-4 sm:px-0">
            <Button size="lg" className="bg-brand-blue hover:bg-blue-700 text-white px-8 sm:px-10 h-14 sm:h-16 text-base sm:text-xl shadow-xl shadow-blue-200 rounded-full transition-all hover:scale-105 w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
              Get Integration Roadmap
              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
            <Button size="lg" variant="outline" className="border-slate-200 text-slate-700 hover:bg-slate-50 px-8 sm:px-10 h-14 sm:h-16 text-base sm:text-xl rounded-full w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
              See Live Demo
            </Button>
          </div>
        </div>
      </section>

      {/* The Problem: Flip Cards */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">The AI Gap is Widening</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed">
              Hover over the cards to see how AI transforms legacy bottlenecks into competitive advantages.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6">
                    <Workflow className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Manual Bottlenecks</h3>
                  <p className="text-slate-500">Processes that take days should take seconds.</p>
                  <ul className="list-disc pl-5 mt-2 text-slate-500 text-xs">
                    <li>Manual data entry</li>
                    <li>Paper-based approvals</li>
                    <li>Slow handoffs between teams</li>
                    <li>High error rates</li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <Zap className="h-12 w-12 mb-4 text-white/90" />
                  <h3 className="text-2xl font-bold mb-2">Instant Automation</h3>
                  <p className="text-blue-100">AI agents handle data entry, validation, and routing 24/7 with zero errors.</p>
                  <ul className="list-disc pl-5 mt-2 text-blue-100 text-xs">
                    <li>Automated workflow triggers</li>
                    <li>Real-time validation</li>
                    <li>Continuous process monitoring</li>
                    <li>Exception handling automation</li>
                  </ul>
                </>
              }
            />
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-6">
                    <AlertTriangle className="h-8 w-8 text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Reactive Decisions</h3>
                  <p className="text-slate-500">Acting on last month's data is too late.</p>
                  <ul className="list-disc pl-5 mt-2 text-slate-500 text-xs">
                    <li>Lagging KPIs</li>
                    <li>Missed opportunities</li>
                    <li>Delayed course corrections</li>
                    <li>Manual report consolidation</li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <TrendingUp className="h-12 w-12 mb-4 text-white/90" />
                  <h3 className="text-2xl font-bold mb-2">Predictive Insights</h3>
                  <p className="text-blue-100">Forecast demand, cash flow, and risks weeks in advance with 95% accuracy.</p>
                  <ul className="list-disc pl-5 mt-2 text-blue-100 text-xs">
                    <li>Real-time forecasting</li>
                    <li>Scenario simulation</li>
                    <li>Automated alerts</li>
                    <li>Data-driven recommendations</li>
                  </ul>
                </>
              }
            />
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-purple-50 flex items-center justify-center mb-6">
                    <Globe className="h-8 w-8 text-purple-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Siloed Data</h3>
                  <p className="text-slate-500">Information trapped in disconnected systems.</p>
                  <ul className="list-disc pl-5 mt-2 text-slate-500 text-xs">
                    <li>Multiple data sources</li>
                    <li>Manual data exports</li>
                    <li>Inconsistent formats</li>
                    <li>Limited visibility</li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <Network className="h-12 w-12 mb-4 text-white/90" />
                  <h3 className="text-2xl font-bold mb-2">Unified Intelligence</h3>
                  <p className="text-blue-100">Connect SAP, Oracle, and Salesforce into a single, queryable AI brain.</p>
                  <ul className="list-disc pl-5 mt-2 text-blue-100 text-xs">
                    <li>Unified data model</li>
                    <li>Cross-platform queries</li>
                    <li>Centralized analytics</li>
                    <li>Role-based access</li>
                  </ul>
                </>
              }
            />
          </div>
        </div>
      </section>

      {/* Interactive Capabilities */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">What We Integrate</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4 sm:px-0">
              Enterprise-grade AI capabilities injected directly into your existing workflows.
            </p>
          </div>

          <Tabs defaultValue="docs" className="w-full max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-8 sm:mb-12 h-auto p-2 bg-slate-100 rounded-2xl gap-2 sm:gap-0">
              <TabsTrigger value="docs" className="py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium data-[state=active]:bg-white data-[state=active]:text-brand-blue data-[state=active]:shadow-md transition-all">
                Document Intelligence
              </TabsTrigger>
              <TabsTrigger value="predictive" className="py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium data-[state=active]:bg-white data-[state=active]:text-brand-blue data-[state=active]:shadow-md transition-all">
                Predictive Analytics
              </TabsTrigger>
              <TabsTrigger value="nlp" className="py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium data-[state=active]:bg-white data-[state=active]:text-brand-blue data-[state=active]:shadow-md transition-all">
                Natural Language
              </TabsTrigger>
            </TabsList>

            <TabsContent value="docs" className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <Card className="border-2 border-slate-100 hover:border-brand-blue/30 hover:shadow-xl transition-all duration-300 cursor-default group bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-4 text-2xl">
                      <div className="p-3 rounded-xl bg-blue-50 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                        <FileText className="h-6 w-6" />
                      </div>
                      Invoice Processing
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-600 text-lg leading-relaxed">
                    Automatically extract data from PDF invoices, match against POs in SAP/Oracle, and post for payment. Reduces AP workload by 90%.
                    <ul className="list-disc pl-5 mt-3 text-slate-500 text-base">
                      <li>Line-item data extraction</li>
                      <li>Duplicate invoice detection</li>
                      <li>Automated 3-way matching</li>
                      <li>Exception flagging & routing</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-2 border-slate-100 hover:border-brand-blue/30 hover:shadow-xl transition-all duration-300 cursor-default group bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-4 text-2xl">
                      <div className="p-3 rounded-xl bg-indigo-50 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                        <ShieldCheck className="h-6 w-6" />
                      </div>
                      Contract Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-600 text-lg leading-relaxed">
                    Scan thousands of legal documents to identify risks, renewal dates, and non-standard clauses. Push alerts directly to your dashboard.
                    <ul className="list-disc pl-5 mt-3 text-slate-500 text-base">
                      <li>Clause extraction & tagging</li>
                      <li>Renewal & expiry reminders</li>
                      <li>Risk scoring & red flag alerts</li>
                      <li>Deviation from standard terms</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8">
                <Card className="border-2 border-slate-100 hover:border-brand-blue/30 hover:shadow-xl transition-all duration-300 cursor-default group bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-4 text-2xl">
                      <div className="p-3 rounded-xl bg-yellow-50 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                        <Receipt className="h-6 w-6" />
                      </div>
                      Receipt Digitization
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-600 text-lg leading-relaxed">
                    Eliminate manual expense entry. Snap a photo of a receipt, and our AI extracts date, vendor, amount, and tax, then auto-populates your ERP expense module.
                    <ul className="list-disc pl-5 mt-3 text-slate-500 text-base">
                      <li>Multi-language OCR</li>
                      <li>Currency & tax detection</li>
                      <li>Duplicate receipt prevention</li>
                      <li>Direct ERP integration</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-2 border-slate-100 hover:border-brand-blue/30 hover:shadow-xl transition-all duration-300 cursor-default group bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-4 text-2xl">
                      <div className="p-3 rounded-xl bg-red-50 group-hover:bg-red-500 group-hover:text-white transition-colors">
                        <ScanFace className="h-6 w-6" />
                      </div>
                      ID Verification
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-600 text-lg leading-relaxed">
                    Automate KYC/KYB checks by extracting data from passports and driver's licenses, verifying authenticity, and screening against watchlists in real-time.
                    <ul className="list-disc pl-5 mt-3 text-slate-500 text-base">
                      <li>Face & document matching</li>
                      <li>Fraudulent ID detection</li>
                      <li>Sanctions & PEP screening</li>
                      <li>Instant onboarding decisions</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="predictive" className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <Card className="border-2 border-slate-100 hover:border-brand-blue/30 hover:shadow-xl transition-all duration-300 cursor-default group bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-4 text-2xl">
                      <div className="p-3 rounded-xl bg-green-50 group-hover:bg-green-500 group-hover:text-white transition-colors">
                        <TrendingUp className="h-6 w-6" />
                      </div>
                      Demand Forecasting
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-600 text-lg leading-relaxed">
                    Use historical sales data + external factors (weather, economy) to predict inventory needs with 95% accuracy.
                    <ul className="list-disc pl-5 mt-3 text-slate-500 text-base">
                      <li>Multi-source data blending</li>
                      <li>Seasonality & trend detection</li>
                      <li>Automated forecast updates</li>
                      <li>Inventory optimization alerts</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-2 border-slate-100 hover:border-brand-blue/30 hover:shadow-xl transition-all duration-300 cursor-default group bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-4 text-2xl">
                      <div className="p-3 rounded-xl bg-teal-50 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                        <Zap className="h-6 w-6" />
                      </div>
                      Cash Flow Prediction
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-600 text-lg leading-relaxed">
                    Analyze payment patterns of customers to predict cash flow gaps weeks in advance, allowing for proactive treasury management.
                    <ul className="list-disc pl-5 mt-3 text-slate-500 text-base">
                      <li>Receivables & payables analysis</li>
                      <li>Scenario-based projections</li>
                      <li>Automated risk alerts</li>
                      <li>Integration with ERP treasury</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8">
                <Card className="border-2 border-slate-100 hover:border-brand-blue/30 hover:shadow-xl transition-all duration-300 cursor-default group bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-4 text-2xl">
                      <div className="p-3 rounded-xl bg-red-50 group-hover:bg-red-500 group-hover:text-white transition-colors">
                        <UserMinus className="h-6 w-6" />
                      </div>
                      Customer Churn Risk
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-600 text-lg leading-relaxed">
                    Identify at-risk customers 30 days before they cancel. Analyze usage patterns and support tickets to trigger proactive retention campaigns.
                    <ul className="list-disc pl-5 mt-3 text-slate-500 text-base">
                      <li>Churn scoring models</li>
                      <li>Behavioral pattern analysis</li>
                      <li>Automated retention triggers</li>
                      <li>Customer health dashboards</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-2 border-slate-100 hover:border-brand-blue/30 hover:shadow-xl transition-all duration-300 cursor-default group bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-4 text-2xl">
                      <div className="p-3 rounded-xl bg-emerald-50 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                        <BadgeDollarSign className="h-6 w-6" />
                      </div>
                      Dynamic Pricing Engine
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-600 text-lg leading-relaxed">
                    Adjust pricing in real-time based on demand, competitor moves, and inventory levels to maximize margin without sacrificing volume.
                    <ul className="list-disc pl-5 mt-3 text-slate-500 text-base">
                      <li>Competitor price monitoring</li>
                      <li>Elasticity-based recommendations</li>
                      <li>Automated price updates</li>
                      <li>Margin impact analysis</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="nlp" className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <Card className="border-2 border-slate-100 hover:border-brand-blue/30 hover:shadow-xl transition-all duration-300 cursor-default group bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-4 text-2xl">
                      <div className="p-3 rounded-xl bg-purple-50 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                        <MessageSquare className="h-6 w-6" />
                      </div>
                      Text-to-SQL Reporting
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-600 text-lg leading-relaxed">
                    Empower executives to ask questions like "Show me sales by region for Q3" and get instant charts, without asking IT for a report.
                    <ul className="list-disc pl-5 mt-3 text-slate-500 text-base">
                      <li>Conversational query builder</li>
                      <li>Automated chart generation</li>
                      <li>Role-based data access</li>
                      <li>Export to Excel/PowerPoint</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-2 border-slate-100 hover:border-brand-blue/30 hover:shadow-xl transition-all duration-300 cursor-default group bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-4 text-2xl">
                      <div className="p-3 rounded-xl bg-pink-50 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                        <Globe className="h-6 w-6" />
                      </div>
                      Multi-Lingual Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-600 text-lg leading-relaxed">
                    Automatically translate support tickets or internal communications within your ERP, breaking down global barriers.
                    <ul className="list-disc pl-5 mt-3 text-slate-500 text-base">
                      <li>Real-time translation</li>
                      <li>Language detection</li>
                      <li>Sentiment analysis</li>
                      <li>ERP chat integration</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8">
                <Card className="border-2 border-slate-100 hover:border-brand-blue/30 hover:shadow-xl transition-all duration-300 cursor-default group bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-4 text-2xl">
                      <div className="p-3 rounded-xl bg-cyan-50 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                        <Bot className="h-6 w-6" />
                      </div>
                      Automated Support Agent
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-600 text-lg leading-relaxed">
                    Deflect 60% of Tier 1 support tickets. Our AI understands complex queries, performs actions in the ERP (like 'check order status'), and resolves issues instantly.
                    <ul className="list-disc pl-5 mt-3 text-slate-500 text-base">
                      <li>Intent recognition</li>
                      <li>ERP action automation</li>
                      <li>24/7 availability</li>
                      <li>Escalation to human agent</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-2 border-slate-100 hover:border-brand-blue/30 hover:shadow-xl transition-all duration-300 cursor-default group bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-4 text-2xl">
                      <div className="p-3 rounded-xl bg-violet-50 group-hover:bg-violet-500 group-hover:text-white transition-colors">
                        <Mic className="h-6 w-6" />
                      </div>
                      Meeting Intelligence
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-600 text-lg leading-relaxed">
                    Transcribe and analyze sales calls and internal meetings. Automatically extract action items, sentiment, and key decisions, then sync them to your CRM.
                    <ul className="list-disc pl-5 mt-3 text-slate-500 text-base">
                      <li>Speech-to-text transcription</li>
                      <li>Action item extraction</li>
                      <li>Sentiment & intent analysis</li>
                      <li>CRM sync automation</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* The Process */}
      <IntegrationRoadmap />

      {/* FAQ */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-slate-900">Integration Questions</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border rounded-xl px-4 hover:bg-slate-50 transition-colors">
              <AccordionTrigger className="text-xl font-medium text-slate-900">Is my data secure?</AccordionTrigger>
              <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-4">
                Yes. We use enterprise-grade encryption and can deploy models within your private cloud (VPC) or on-premise. Your data is never used to train public models.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border rounded-xl px-4 hover:bg-slate-50 transition-colors">
              <AccordionTrigger className="text-xl font-medium text-slate-900">How long does integration take?</AccordionTrigger>
              <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-4">
                A typical Proof of Concept (POC) takes 2-4 weeks. Full production deployment depends on complexity but usually ranges from 6-12 weeks.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border rounded-xl px-4 hover:bg-slate-50 transition-colors">
              <AccordionTrigger className="text-xl font-medium text-slate-900">Do I need a data science team?</AccordionTrigger>
              <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-4">
                No. We handle the data science, model training, and integration. We hand over a working system that your existing IT team can maintain.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border rounded-xl px-4 hover:bg-slate-50 transition-colors">
              <AccordionTrigger className="text-xl font-medium text-slate-900">What if we have a custom ERP?</AccordionTrigger>
              <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-4">
                We specialize in custom integrations. As long as your system has a database or an API (or even if it doesn't, we can build one), we can connect AI to it.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-gradient-to-br from-brand-blue to-cyan-600">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 tracking-tight px-4 sm:px-0">Don't Let Competitors Win the AI Race</h2>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Every week you wait is market share you'll never get back. Let's build your AI roadmap—free, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-brand-blue hover:bg-blue-50 px-8 sm:px-12 h-16 sm:h-20 text-lg sm:text-xl md:text-2xl font-bold shadow-2xl rounded-full transition-transform hover:scale-105 w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
              Get Free Strategy Session
              <ArrowRight className="ml-3 h-6 w-6 sm:h-7 sm:w-7" />
            </Button>
          </div>
          <p className="mt-8 text-blue-200 font-medium">⚡ Delivered in 48 hours • ✓ Custom AI recommendations • ✓ ROI projections included</p>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default AIIntegrationServices;
