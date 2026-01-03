import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntegrationRoadmap from "@/components/IntegrationRoadmap";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { ArrowRight, Zap, TrendingUp, Shield, FileText, DollarSign, BarChart, Clock, CheckCircle } from "lucide-react";

const AIIntegrationServices = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-blue/20">
      <SEO
        title="AI Integration for ERP | Finance & Operations Automation"
        description="Reduce operating cost, improve forecast accuracy, and lower risk by automating finance workflows inside SAP, Oracle, and custom ERPs."
        canonicalUrl="https://www.aierppartners.com/ai-integration-services"
      />

      <Header />

      {/* HERO */}
      <section className="relative pt-28 pb-24 px-4 overflow-hidden bg-gradient-to-br from-white to-blue-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-brand-blue/10 via-transparent to-transparent" />
        
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-sm font-semibold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Zap className="h-4 w-4" />
            AI-Powered ERP Transformation
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Turn Your ERP Into <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-600">a Cost-Control Engine</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            We remove manual work from finance and operations without replacing your ERP. Faster close. Better forecasts. Lower operational risk.
          </p>

          <div className="animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <Button
              size="lg"
              className="bg-brand-blue hover:bg-blue-700 text-white px-8 sm:px-10 h-14 sm:h-16 text-base sm:text-lg shadow-xl shadow-blue-200 rounded-full transition-all hover:scale-105"
              onClick={() =>
                window.open("https://calendly.com/dearjafer/30min", "_blank")
              }
            >
              Get a Free Integration Roadmap
              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* CFO RESULTS */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">
              Where CFOs See Results First
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Most finance leaders start with accounts payable automation and cash
              forecasting. Both deliver measurable impact within the first quarter.
            </p>
          </div>

          <Tabs defaultValue="cost" className="w-full max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-8 sm:mb-12 h-auto p-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl gap-2 sm:gap-4 shadow-lg">
              <TabsTrigger 
                value="cost" 
                className="py-4 sm:py-5 rounded-xl text-base sm:text-lg font-medium data-[state=active]:bg-white data-[state=active]:text-brand-blue data-[state=active]:shadow-lg data-[state=active]:border data-[state=active]:border-brand-blue/20 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center gap-2">
                  <DollarSign className="h-5 w-5 group-data-[state=active]:text-brand-blue" />
                  <span>Reduce Operating Cost</span>
                </div>
              </TabsTrigger>
              <TabsTrigger 
                value="forecast" 
                className="py-4 sm:py-5 rounded-xl text-base sm:text-lg font-medium data-[state=active]:bg-white data-[state=active]:text-brand-blue data-[state=active]:shadow-lg data-[state=active]:border data-[state=active]:border-brand-blue/20 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center gap-2">
                  <TrendingUp className="h-5 w-5 group-data-[state=active]:text-brand-blue" />
                  <span>Improve Forecast Accuracy</span>
                </div>
              </TabsTrigger>
              <TabsTrigger 
                value="risk" 
                className="py-4 sm:py-5 rounded-xl text-base sm:text-lg font-medium data-[state=active]:bg-white data-[state=active]:text-brand-blue data-[state=active]:shadow-lg data-[state=active]:border data-[state=active]:border-brand-blue/20 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center gap-2">
                  <Shield className="h-5 w-5 group-data-[state=active]:text-brand-blue" />
                  <span>Lower Operational Risk</span>
                </div>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="cost" className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <ResultCard
                title="Reduce Operating Cost"
                description="Streamline finance operations by eliminating manual processes and reducing transaction costs."
                icon={DollarSign}
                points={[
                  "Eliminate manual invoice handling and duplicate data entry",
                  "Reduce cost per transaction across finance operations",
                  "Reallocate staff time from processing to analysis",
                  "Shorten month-end close by removing reconciliation bottlenecks",
                  "Automate vendor onboarding and payment processing",
                  "Minimize late payment penalties with automated reminders"
                ]}
              />
            </TabsContent>

            <TabsContent value="forecast" className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <ResultCard
                title="Improve Forecast Accuracy"
                description="Transform cash forecasting with AI-driven insights and real-time data integration."
                icon={TrendingUp}
                points={[
                  "Generate rolling cash forecasts using live ERP data",
                  "Identify liquidity gaps weeks earlier",
                  "Replace spreadsheet assumptions with system inputs",
                  "Increase confidence in board and investor reporting",
                  "Predict revenue trends with machine learning models",
                  "Automate variance analysis and reporting"
                ]}
              />
            </TabsContent>

            <TabsContent value="risk" className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <ResultCard
                title="Lower Operational Risk"
                description="Enhance financial controls and compliance through intelligent automation."
                icon={Shield}
                points={[
                  "Reduce human error in high-volume finance workflows",
                  "Create consistent, auditable processes across teams",
                  "Retain operational knowledge despite staff turnover",
                  "Lower exposure during audits and controls testing",
                  "Automate compliance monitoring and reporting",
                  "Implement fraud detection with AI pattern recognition"
                ]}
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* WHAT WE AUTOMATE */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
              Finance Workflows We Automate
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Transform your finance department with intelligent automation that works within your existing ERP.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <SimpleCard
              title="Accounts Payable"
              description="Invoice processing, three-way matching, exception handling, and posting — without manual touchpoints."
              icon={FileText}
              color="from-blue-500 to-cyan-500"
            />
            <SimpleCard
              title="Cash Forecasting"
              description="Rolling forecasts built from real-time receivables, payables, and historical behavior."
              icon={BarChart}
              color="from-brand-blue to-blue-600"
            />
            <SimpleCard
              title="Operational Reporting"
              description="On-demand reporting without waiting on IT or reconciling spreadsheets."
              icon={Clock}
              color="from-cyan-500 to-blue-500"
            />
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
              Measurable Impact
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Real results from AI-powered ERP transformations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <StatCard
              metric="65%"
              label="Reduction in Manual Processing Time"
              description="Average time savings across finance workflows"
              icon={Zap}
            />
            <StatCard
              metric="40%"
              label="Improvement in Forecast Accuracy"
              description="Enhanced predictive modeling with AI"
              icon={TrendingUp}
            />
            <StatCard
              metric="99.5%"
              label="Error Reduction Rate"
              description="Elimination of manual data entry errors"
              icon={Shield}
            />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <IntegrationRoadmap />

      {/* FINAL CTA */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-brand-blue to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
        <div className="container mx-auto max-w-4xl text-center text-white relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 sm:mb-8 backdrop-blur-sm border border-white/20">
            <Shield className="w-5 h-5 text-blue-200" />
            <span className="text-blue-100 font-semibold text-sm">ACT NOW - SAVE COSTS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 tracking-tight">
            Reduce Cost Before It Becomes Structural
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            Every quarter you delay locks in avoidable operating expense.
            We'll show you exactly where to start.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-brand-blue hover:bg-blue-50 px-8 sm:px-12 h-16 sm:h-20 text-lg sm:text-xl font-bold shadow-2xl rounded-full transition-transform hover:scale-105 w-full sm:w-auto min-h-[48px]"
              onClick={() =>
                window.open("https://calendly.com/dearjafer/30min", "_blank")
              }
            >
              Get Your Free Strategy Session
              <ArrowRight className="ml-3 h-6 w-6 sm:h-7 sm:w-7" />
            </Button>
          </div>
          
          <p className="mt-8 text-blue-200 font-medium text-sm sm:text-base">
            ⚡ ROI Analysis Included • ✓ No-Obligation Assessment • ✓ 30-Day Implementation Plan
          </p>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

/* ---------- Component Helpers ---------- */

interface ResultCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  points: string[];
}

const ResultCard = ({ title, description, icon: Icon, points }: ResultCardProps) => (
  <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 cursor-default group bg-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-bl-full -mr-12 -mt-12 transition-all duration-500 group-hover:scale-150 group-hover:bg-blue-600/5 -z-0" />
    <CardHeader className="relative z-10">
      <div className="flex items-center gap-4 mb-2">
        <div className="p-3 rounded-xl bg-blue-50 group-hover:bg-blue-500 group-hover:text-white transition-colors">
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle className="text-2xl md:text-3xl font-bold text-slate-900">{title}</CardTitle>
      </div>
      <p className="text-lg text-slate-600 mt-2 leading-relaxed">{description}</p>
    </CardHeader>
    <CardContent className="relative z-10">
      <ul className="space-y-4">
        {points.map((point, i) => (
          <li key={i} className="flex gap-3 text-slate-700 text-base md:text-lg leading-relaxed">
            <div className="flex-shrink-0 mt-2">
              <div className="w-2 h-2 rounded-full bg-brand-blue" />
            </div>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

interface SimpleCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const SimpleCard = ({ title, description, icon: Icon, color }: SimpleCardProps) => (
  <Card className="border-2 border-slate-100 hover:border-brand-blue/30 hover:shadow-xl transition-all duration-300 cursor-default group bg-white">
    <CardHeader>
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-xl bg-gradient-to-br ${color} group-hover:scale-110 transition-transform`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <CardTitle className="text-xl md:text-2xl font-bold text-slate-900">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent className="text-slate-600 text-base md:text-lg leading-relaxed">
      {description}
    </CardContent>
  </Card>
);

interface StatCardProps {
  metric: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const StatCard = ({ metric, label, description, icon: Icon }: StatCardProps) => (
  <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group bg-white">
    <div className="h-2 w-full bg-gradient-to-r from-brand-blue to-blue-600" />
    <CardContent className="p-6 sm:p-8 text-center">
      <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
        <Icon className="h-8 w-8 text-brand-blue" />
      </div>
      <div className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2">{metric}</div>
      <div className="text-lg font-semibold text-slate-700 mb-2">{label}</div>
      <div className="text-sm text-slate-500">{description}</div>
    </CardContent>
  </Card>
);

export default AIIntegrationServices;