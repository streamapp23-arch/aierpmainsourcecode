import {
  ArrowRight,
  CheckCircle2,
  Database,
  TrendingUp,
  Shield,
  Zap,
  Users,
  Clock,
  DollarSign,
  AlertTriangle,
  Sparkles,
  Brain,
  Target
} from "lucide-react";

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
    <div className="min-h-screen bg-white font-sans selection:bg-blue-500/20">
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
          name: "Oracle ERP AI Transformation",
          provider: {
            "@type": "Organization",
            name: "AIERP Partners"
          },
          description:
            "Turn Oracle ERP into an AI-powered decision engine that predicts problems and automates workflows.",
          serviceType: "ERP Modernization"
        }}
      />

      <Header />

      {/* HERO */}
      <section className="relative pt-24 pb-24 px-4 bg-gradient-to-br from-blue-50 via-sky-50 to-white">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-semibold mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Oracle Cloud Infrastructure Certified
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
            Your Oracle System Should Be<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Your Biggest Advantage
            </span>
          </h1>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
            Turn Oracle ERP into an AI-powered decision engine that predicts problems,
            automates workflows, and delivers insights leadership actually uses.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-500 text-white px-10 h-16 text-xl rounded-full shadow-lg"
              onClick={() =>
                window.open("https://calendly.com/dearjafer/30min", "_blank")
              }
            >
              Get Free Oracle AI Roadmap
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-slate-300 text-slate-700 px-10 h-16 text-xl rounded-full"
              onClick={() =>
                window.open("https://calendly.com/dearjafer/30min", "_blank")
              }
            >
              Watch 3-Min Demo
            </Button>
          </div>

          <div className="flex justify-center gap-8 mt-8 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-blue-600" />
              Zero Oracle downtime
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-blue-600" />
              30-day results guarantee
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 mb-6">
              Your Oracle Investment Is Underperforming
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Most Oracle systems stay reactive. AI turns them into proactive
              decision engines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Customization Trap",
                icon: AlertTriangle,
                solution: "AI-Driven Testing"
              },
              {
                title: "Slow Reporting",
                icon: Clock,
                solution: "Instant AI Insights"
              },
              {
                title: "Expert Shortage",
                icon: Users,
                solution: "AI Self-Service"
              },
              {
                title: "Cloud Migration Fear",
                icon: Target,
                solution: "AI-Guided Migration"
              }
            ].map((item, i) => (
              <FlipCard
                key={i}
                frontContent={
                  <>
                    <div className="h-16 w-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                      <item.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm">
                      Costly, slow, and risky without automation.
                    </p>
                  </>
                }
                backContent={
                  <>
                    <Brain className="h-10 w-10 mb-4 text-blue-200" />
                    <h3 className="text-lg font-bold text-white mb-2">
                      {item.solution}
                    </h3>
                    <p className="text-blue-100 text-sm">
                      Automated, predictive, and upgrade-safe.
                    </p>
                  </>
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { value: "75%", label: "Faster Financial Close", icon: Clock },
            { value: "$3.7M", label: "3-Year Savings", icon: DollarSign },
            { value: "92%", label: "Forecast Accuracy", icon: TrendingUp }
          ].map((stat, i) => (
            <Card key={i} className="border shadow-lg text-center">
              <CardContent className="p-10">
                <stat.icon className="h-10 w-10 text-blue-600 mx-auto mb-6" />
                <div className="text-5xl font-bold text-slate-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600 font-medium">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ROADMAP */}
      <OracleRoadmap />

      {/* FINAL CTA */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-900 to-slate-900">
        <div className="container mx-auto max-w-4xl text-center">
          <Sparkles className="w-10 h-10 text-blue-300 mx-auto mb-6" />
          <h2 className="text-5xl font-bold text-white mb-8">
            Make Oracle a Strategic Advantage
          </h2>
          <p className="text-xl text-blue-100 mb-12">
            Stop settling for expensive systems that underperform.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-900 px-12 h-20 text-2xl font-bold rounded-full"
            onClick={() =>
              window.open("https://calendly.com/dearjafer/30min", "_blank")
            }
          >
            Get Your Free Oracle AI Roadmap
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Oracle;
