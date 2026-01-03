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
import WhatsAppButton from "@/components/WhatsAppButton";
import { FlipCard } from "@/components/FlipCard";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  Globe,
  Layout,
  Lock,
  Rocket,
  Server,
  ShieldCheck,
  Zap,
  Users,
  BarChart3,
  Puzzle,
} from "lucide-react";

import SEO from "@/components/SEO";

const AIApplications = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-blue/20">
      <SEO
        title="Custom AI Application Development | Adaptable Software"
        description="Build custom, AI-native applications that solve the unique problems standard tools can't touch. Own your data and logic."
        keywords="Custom AI Applications, AI Software Development, Bespoke AI Solutions, AI Native Apps"
        canonicalUrl="https://www.aierppartners.com/ai-applications"
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
                    name: "AI Applications",
                    url: "/ai-applications"
          }
]}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Custom AI Application Development",
          "provider": {
            "@type": "Organization",
            "name": "AIERP Partners"
          },
          "description": "Build custom, AI-native applications that solve unique business problems.",
          "serviceType": "Software Development"
        }}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 px-4 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-100/50 via-transparent to-transparent" />

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-50 border border-blue-100 text-brand-blue text-xs sm:text-sm font-semibold mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
            </span>
            Now Accepting Q4 Pilot Projects
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-slate-900 tracking-tight mb-6 sm:mb-8 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Build Software That <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-purple-600">Adapts to You.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 px-4 sm:px-0">
            Stop forcing your business into rigid SaaS boxes. We engineer custom, AI-native applications that solve the unique problems standard tools can't touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300 px-4 sm:px-0">
            <Button size="lg" className="bg-brand-blue hover:bg-blue-700 text-white px-8 sm:px-10 h-14 sm:h-16 text-base sm:text-xl shadow-xl shadow-blue-200 rounded-full transition-all hover:scale-105 w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
              Start Your Build
              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
            <Button size="lg" variant="outline" className="border-slate-200 text-slate-700 hover:bg-slate-50 px-8 sm:px-10 h-14 sm:h-16 text-base sm:text-xl rounded-full w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
              View Architecture
            </Button>
          </div>
        </div>
      </section>

      {/* The Problem: Flip Cards */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">Why "Off-the-Shelf" Fails</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed">
              Generic software creates generic results. Hover over the cards to see the custom advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6">
                    <Lock className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Data Lock-in</h3>
                  <p className="text-slate-500">Your data is trapped in their database.</p>
                </>
              }
              backContent={
                <>
                  <Database className="h-12 w-12 mb-4 text-white/90" />
                  <h3 className="text-2xl font-bold mb-2">100% Data Sovereignty</h3>
                  <p className="text-blue-100">You own the database. You own the schema. Export, query, and analyze without limits.</p>
                </>
              }
            />
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-6">
                    <Puzzle className="h-8 w-8 text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Rigid Workflows</h3>
                  <p className="text-slate-500">Forced to work how the software wants.</p>
                </>
              }
              backContent={
                <>
                  <Layout className="h-12 w-12 mb-4 text-white/90" />
                  <h3 className="text-2xl font-bold mb-2">Exact-Fit Logic</h3>
                  <p className="text-blue-100">We build the software around YOUR process. No workarounds, no compromises.</p>
                </>
              }
            />
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-purple-50 flex items-center justify-center mb-6">
                    <BarChart3 className="h-8 w-8 text-purple-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Generic AI</h3>
                  <p className="text-slate-500">Models trained on public data, not yours.</p>
                </>
              }
              backContent={
                <>
                  <Cpu className="h-12 w-12 mb-4 text-white/90" />
                  <h3 className="text-2xl font-bold mb-2">Fine-Tuned Models</h3>
                  <p className="text-blue-100">AI trained specifically on your historical data for superior accuracy and relevance.</p>
                </>
              }
            />
          </div>
        </div>
      </section>

      {/* Interactive Use Cases */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">What We Build</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4 sm:px-0">
              Real-world applications driving efficiency. Explore our capabilities.
            </p>
          </div>

          <Tabs defaultValue="operations" className="w-full max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-8 sm:mb-12 h-auto p-2 bg-slate-100 rounded-2xl gap-2 sm:gap-0">
              <TabsTrigger value="operations" className="py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium data-[state=active]:bg-white data-[state=active]:text-brand-blue data-[state=active]:shadow-md transition-all">
                Operations
              </TabsTrigger>
              <TabsTrigger value="finance" className="py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium data-[state=active]:bg-white data-[state=active]:text-brand-blue data-[state=active]:shadow-md transition-all">
                Finance
              </TabsTrigger>
              <TabsTrigger value="cx" className="py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium data-[state=active]:bg-white data-[state=active]:text-brand-blue data-[state=active]:shadow-md transition-all">
                Customer Experience
              </TabsTrigger>
            </TabsList>

            <TabsContent value="operations" className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <Card className="border-2 border-slate-100 hover:border-brand-blue/30 hover:shadow-xl transition-all duration-300 cursor-default group bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-4 text-2xl">
                      <div className="p-3 rounded-xl bg-blue-50 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                        <Zap className="h-6 w-6" />
                      </div>
                      Predictive Maintenance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-600 text-lg leading-relaxed">
                    Ingests sensor data from manufacturing equipment to predict failures 48 hours in advance. Automatically generates work orders in SAP.
                  </CardContent>
                </Card>
                <Card className="border-2 border-slate-100 hover:border-brand-blue/30 hover:shadow-xl transition-all duration-300 cursor-default group bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-4 text-2xl">
                      <div className="p-3 rounded-xl bg-green-50 group-hover:bg-green-500 group-hover:text-white transition-colors">
                        <Globe className="h-6 w-6" />
                      </div>
                      Route Optimizer
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-600 text-lg leading-relaxed">
                    Re-routes logistics fleets in real-time based on weather, traffic, and fuel costs. Reduced delivery times by 18% for a logistics client.
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="finance" className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <Card className="border-2 border-slate-100 hover:border-brand-blue/30 hover:shadow-xl transition-all duration-300 cursor-default group bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-4 text-2xl">
                      <div className="p-3 rounded-xl bg-purple-50 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                        <ShieldCheck className="h-6 w-6" />
                      </div>
                      Audit Defense
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-600 text-lg leading-relaxed">
                    Scans 100% of expense reports and invoices against policy documents. Flags anomalies and potential fraud with 99.9% accuracy.
                  </CardContent>
                </Card>
                <Card className="border-2 border-slate-100 hover:border-brand-blue/30 hover:shadow-xl transition-all duration-300 cursor-default group bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-4 text-2xl">
                      <div className="p-3 rounded-xl bg-orange-50 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                        <Database className="h-6 w-6" />
                      </div>
                      Contract Intelligence
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-600 text-lg leading-relaxed">
                    Extracts key terms, renewal dates, and liabilities from thousands of PDF contracts. Makes your legal data queryable via natural language.
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="cx" className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <Card className="border-2 border-slate-100 hover:border-brand-blue/30 hover:shadow-xl transition-all duration-300 cursor-default group bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-4 text-2xl">
                      <div className="p-3 rounded-xl bg-pink-50 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                        <Users className="h-6 w-6" />
                      </div>
                      Personalized Portal
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-600 text-lg leading-relaxed">
                    Generates unique product recommendations and pricing for B2B clients based on 5 years of purchase history and market trends.
                  </CardContent>
                </Card>
                <Card className="border-2 border-slate-100 hover:border-brand-blue/30 hover:shadow-xl transition-all duration-300 cursor-default group bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-4 text-2xl">
                      <div className="p-3 rounded-xl bg-indigo-50 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                        <Rocket className="h-6 w-6" />
                      </div>
                      Sales Copilot
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-600 text-lg leading-relaxed">
                    Listens to sales calls, updates CRM records automatically, and suggests next-best-actions to close deals faster.
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* The Process */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-slate-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">How We Build</h2>
            <p className="text-lg sm:text-xl text-slate-400">From concept to code in weeks, not months.</p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 hidden md:block" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 relative z-10">
              {[
                { step: "01", title: "Blueprint", desc: "We map your data flow and define the AI architecture." },
                { step: "02", title: "Prototype", desc: "Clickable UI and proof-of-concept model in 2 weeks." },
                { step: "03", title: "Develop", desc: "Production-grade code, security hardening, and integration." },
                { step: "04", title: "Deploy", desc: "Seamless rollout to your cloud or on-prem infrastructure." }
              ].map((item, i) => (
                <div key={i} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl hover:shadow-2xl hover:bg-slate-750 transition-all text-center group">
                  <div className="w-14 h-14 rounded-full bg-brand-blue text-white font-bold text-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/30">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-slate-900">Common Questions</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border rounded-xl px-4 hover:bg-slate-50 transition-colors">
              <AccordionTrigger className="text-xl font-medium text-slate-900">How long does a typical project take?</AccordionTrigger>
              <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-4">
                Most MVPs (Minimum Viable Products) are live in 8-12 weeks. We prioritize speed-to-value, delivering a working core first and iterating based on user feedback.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border rounded-xl px-4 hover:bg-slate-50 transition-colors">
              <AccordionTrigger className="text-xl font-medium text-slate-900">Do we own the code?</AccordionTrigger>
              <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-4">
                Yes. 100%. Unlike SaaS where you rent the software, with us you are building an asset. You own the IP, the code, and the data models.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border rounded-xl px-4 hover:bg-slate-50 transition-colors">
              <AccordionTrigger className="text-xl font-medium text-slate-900">How do you handle data security?</AccordionTrigger>
              <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-4">
                Security is baked in from day one. We use enterprise-grade encryption, SOC2 compliant infrastructure, and can deploy within your existing VPC (Virtual Private Cloud) so data never leaves your control.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border rounded-xl px-4 hover:bg-slate-50 transition-colors">
              <AccordionTrigger className="text-xl font-medium text-slate-900">Can you integrate with legacy ERPs?</AccordionTrigger>
              <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-4">
                Absolutely. That's our specialty. Whether it's a 20-year-old SAP instance or a custom mainframe, we build secure API layers to modernize your legacy data without breaking it.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-gradient-to-br from-brand-blue to-purple-600">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 tracking-tight px-4 sm:px-0">Ready to Build Your Advantage?</h2>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Stop waiting for vendors to add the features you need. Let's scope your custom AI application today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-brand-blue hover:bg-blue-50 px-8 sm:px-12 h-16 sm:h-20 text-lg sm:text-xl md:text-2xl font-bold shadow-2xl rounded-full transition-transform hover:scale-105 w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
              Book a Strategy Call
              <ArrowRight className="ml-3 h-6 w-6 sm:h-7 sm:w-7" />
            </Button>
          </div>
          <p className="mt-8 text-blue-200 font-medium">No commitment. Free architectural assessment included.</p>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default AIApplications;
