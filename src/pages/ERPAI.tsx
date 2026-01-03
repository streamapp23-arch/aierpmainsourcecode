import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ERPAIRoadmap from "@/components/ERPAIRoadmap";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Brain,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Zap,
  Target,
  LineChart,
  Bot,
  Database,
  ShieldCheck
} from "lucide-react";

import SEO from "@/components/SEO";

const ERPAI = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-purple-500/20">
      <SEO
        title="AI-Powered ERP Transformation | Intelligent Enterprise Systems"
        description="Embed AI and machine learning directly into your SAP or Oracle environment for predictive insights, intelligent automation, and data-driven decision making."
        keywords="ERP AI, Intelligent ERP, AI Transformation, Predictive Analytics, SAP AI, Oracle AI, Machine Learning ERP"
        canonicalUrl="https://www.aierppartners.com/erp-ai"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Solutions", url: "/solutions" },
          { name: "ERP AI", url: "/erp-ai" }
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "AI-Powered ERP Transformation",
          "provider": {
            "@type": "Organization",
            "name": "AIERP Partners"
          },
          "description": "Embed AI and machine learning directly into your SAP or Oracle environment for predictive insights.",
          "serviceType": "Enterprise Resource Planning Artificial Intelligence Integration"
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
            AI-Powered ERP Transformation
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-6 sm:mb-8 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Transform Your ERP<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Into an Intelligent System</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 px-4 sm:px-0">
            Embed AI and machine learning directly into your SAP or Oracle environment
            for predictive insights, intelligent automation, and data-driven decision making.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300 px-4 sm:px-0">
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 sm:px-10 h-14 sm:h-16 text-base sm:text-xl shadow-xl shadow-cyan-900/20 rounded-full transition-all hover:scale-105 w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
              Explore AI Solutions
              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-slate-300 text-slate-700 hover:bg-white hover:text-cyan-600 hover:border-cyan-300 px-8 sm:px-10 h-14 sm:h-16 text-base sm:text-xl rounded-full w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
              See AI in Action
            </Button>
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 px-4 sm:px-0">What AI Can Do For Your ERP</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4 sm:px-0">
              Unlock hidden value in your data with AI-driven insights and automation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border-0 shadow-xl bg-white hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
              <div className="h-2 w-full bg-gradient-to-r from-blue-400 to-cyan-400" />
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Predictive Analytics</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Anticipate market changes and optimize operations with AI-powered forecasts.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
              <div className="h-2 w-full bg-gradient-to-r from-purple-400 to-pink-400" />
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Intelligent Automation</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Streamline workflows and reduce manual effort with smart automation.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
              <div className="h-2 w-full bg-gradient-to-r from-emerald-400 to-teal-400" />
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <LineChart className="w-8 h-8 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Prescriptive Insights</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Get actionable recommendations to achieve optimal outcomes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Use Cases */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 px-4 sm:px-0">AI-Powered Business Outcomes</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-4 sm:px-0">
              Real results from real integrations. See how our AI solutions deliver measurable ROI across critical business functions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <Card className="border border-slate-100 shadow-lg hover:shadow-xl transition-all group overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-xl bg-blue-50 group-hover:bg-blue-500 transition-colors duration-300">
                    <TrendingUp className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-bold">
                    +25% Efficiency
                  </span>
                </div>
                <h3 className="font-bold text-2xl mb-3 text-slate-900">Supply Chain Optimization</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  AI models analyze historical data, market trends, and real-time signals to optimize inventory levels, reduce stockouts, and minimize carrying costs.
                </p>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-6">
                  <p className="text-sm font-semibold text-slate-700 flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Core Process
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    AI evaluates supplier performance, shipping costs, demand variability, and warehouse capacity to recommend optimal reorder points. Our systems continuously learn and adjust predictions as new market data becomes available.
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-slate-700 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>25% reduction in excess inventory, freeing up working capital</span>
                  </p>
                  <p className="text-sm font-semibold text-slate-700 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>15% decrease in stockouts and emergency orders</span>
                  </p>
                  <p className="text-sm font-semibold text-slate-700 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>20% improvement in supply chain forecast accuracy</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-slate-100 shadow-lg hover:shadow-xl transition-all group overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-xl bg-purple-50 group-hover:bg-purple-500 transition-colors duration-300">
                    <LineChart className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-bold">
                    95% Accuracy
                  </span>
                </div>
                <h3 className="font-bold text-2xl mb-3 text-slate-900">Financial Forecasting</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Machine learning algorithms predict revenue, cash flow, and expense patterns with 95%+ accuracy, enabling proactive financial planning and better capital allocation.
                </p>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-6">
                  <p className="text-sm font-semibold text-slate-700 flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Core Process
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    AI models ingest revenue, expense, and cash flow data, seasonal patterns, economic indicators, and company-specific variables. The system continuously retrains itself to incorporate actual results and improve accuracy month-over-month.
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-slate-700 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>95% forecast accuracy vs 70% with traditional methods</span>
                  </p>
                  <p className="text-sm font-semibold text-slate-700 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Better cash flow visibility reduces working capital needs by 10-15%</span>
                  </p>
                  <p className="text-sm font-semibold text-slate-700 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Faster month-end close and financial reporting</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-slate-100 shadow-lg hover:shadow-xl transition-all group overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-xl bg-pink-50 group-hover:bg-pink-500 transition-colors duration-300">
                    <Bot className="w-8 h-8 text-pink-600 group-hover:text-white transition-colors" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-bold">
                    40% Faster
                  </span>
                </div>
                <h3 className="font-bold text-2xl mb-3 text-slate-900">Customer Experience & Support</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  AI-powered chatbots, predictive recommendations, and intelligent routing deliver personalized experiences and faster issue resolution for B2B and B2C customers.
                </p>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-6">
                  <p className="text-sm font-semibold text-slate-700 flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Core Process
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    AI chatbots handle routine inquiries, product recommendations, and service requests 24/7. Machine learning analyzes customer behavior to provide personalized product suggestions, improving conversion rates and customer lifetime value.
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-slate-700 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>40% faster customer query resolution with 24/7 availability</span>
                  </p>
                  <p className="text-sm font-semibold text-slate-700 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>15-20% increase in upsell and cross-sell revenue</span>
                  </p>
                  <p className="text-sm font-semibold text-slate-700 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Higher customer satisfaction and reduced churn</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-slate-100 shadow-lg hover:shadow-xl transition-all group overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-xl bg-orange-50 group-hover:bg-orange-500 transition-colors duration-300">
                    <ShieldCheck className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-bold">
                    -80% Fraud
                  </span>
                </div>
                <h3 className="font-bold text-2xl mb-3 text-slate-900">Fraud Prevention & Compliance</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Real-time anomaly detection identifies unusual transactions, vendor behaviors, and process deviations before they become costly compliance issues or financial losses.
                </p>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-6">
                  <p className="text-sm font-semibold text-slate-700 flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Core Process
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    AI systems establish behavioral baselines for vendors, employees, and transactions. They monitor 200+ data points in real-time and immediately flag suspicious patterns like unusual payment amounts, new vendors, or duplicate invoices.
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-slate-700 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>80% reduction in fraudulent transactions detected and prevented</span>
                  </p>
                  <p className="text-sm font-semibold text-slate-700 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Continuous compliance monitoring reduces audit risk and penalties</span>
                  </p>
                  <p className="text-sm font-semibold text-slate-700 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Automated fraud investigation reduces investigation time by 60%</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* New Animated Roadmap Section */}
      <ERPAIRoadmap />

      {/* Technology Stack */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 px-4 sm:px-0">AI Technologies We Use</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-4 sm:px-0">
              We leverage best-in-class AI platforms and open-source frameworks integrated directly into your SAP or Oracle environment for seamless execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-8 h-8 text-blue-600" />
                  <h3 className="text-xl font-bold text-slate-900">Enterprise ERP Platforms</h3>
                </div>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  We deeply integrate AI with your existing ERP infrastructure for native intelligence.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      <strong>SAP AI Business Services</strong> - Native AI capabilities within SAP S/4HANA for demand planning, supply chain, and finance
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      <strong>Oracle AI Platform</strong> - Machine learning within Oracle Cloud for automated insights and recommendations
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="w-8 h-8 text-purple-600" />
                  <h3 className="text-xl font-bold text-slate-900">Deep Learning Frameworks</h3>
                </div>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Industry-leading open-source frameworks for building custom ML models optimized for your business.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      <strong>TensorFlow & PyTorch</strong> - Build and deploy neural networks for complex pattern recognition and forecasting
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      <strong>LightGBM & XGBoost</strong> - High-performance gradient boosting for classification and regression at scale
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-amber-50 to-amber-100 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-8 h-8 text-amber-600" />
                  <h3 className="text-xl font-bold text-slate-900">Cloud AI Services</h3>
                </div>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Scalable, managed ML services with enterprise-grade security and integration capabilities.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      <strong>Azure Machine Learning</strong> - Enterprise ML platform with seamless integration to ERP and compliance features
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      <strong>AWS SageMaker</strong> - Fully managed ML service for building, training, and deploying models at scale
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      <strong>Google Cloud AI</strong> - Pre-trained models and custom training for specialized business use cases
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <LineChart className="w-8 h-8 text-green-600" />
                  <h3 className="text-xl font-bold text-slate-900">AutoML & Specialized Tools</h3>
                </div>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Automated machine learning platforms that accelerate model development and reduce time-to-value.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      <strong>H2O.ai</strong> - Open-source ML platform for fast, scalable algorithms used by data scientists worldwide
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      <strong>DataRobot</strong> - Enterprise AutoML for automated feature engineering and model selection
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      <strong>Custom ML Models</strong> - Purpose-built models trained on your data for maximum accuracy and relevance
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Technical Approach</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-700 font-bold">1</span>
                  </div>
                  <h4 className="font-bold text-slate-900">Data Integration</h4>
                </div>
                <p className="text-slate-600">
                  We extract, clean, and prepare your ERP data for ML training. Our process handles missing values, outliers, and ensures data quality across all sources.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-purple-700 font-bold">2</span>
                  </div>
                  <h4 className="font-bold text-slate-900">Model Training</h4>
                </div>
                <p className="text-slate-600">
                  We build and train multiple models, test various algorithms, and select the best performer. Continuous retraining keeps models accurate as data patterns evolve.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-700 font-bold">3</span>
                  </div>
                  <h4 className="font-bold text-slate-900">Deployment & Monitoring</h4>
                </div>
                <p className="text-slate-600">
                  We deploy models into production with real-time monitoring, automated retraining, and dashboards for tracking performance and business impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-gradient-to-br from-purple-900 to-blue-900">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-4 backdrop-blur-sm border border-white/20">
            <Sparkles className="w-5 h-5 text-purple-300" />
            <span className="text-purple-100 font-semibold text-sm">START YOUR AI JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight px-4 sm:px-0">
            Ready to Unlock AI in Your ERP?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-purple-100 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Let's explore how AI can transform your business operations. Book a free consultation today.
          </p>
          <div className="pt-4">
            <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-50 px-8 sm:px-12 h-16 sm:h-20 text-lg sm:text-xl md:text-2xl font-bold shadow-2xl rounded-full transition-transform hover:scale-105 w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
              Book AI Consultation <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default ERPAI;
