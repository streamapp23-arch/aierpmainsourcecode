import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ManufacturingRoadmap from "@/components/ManufacturingRoadmap";
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
  Factory,
  Cpu,
  Activity,
  Settings,
  BarChart3,
  Wrench,
  Eye,
  Brain,
  Clock,
  DollarSign,
  BarChart,
  Gauge,
  Target,
  Database,
  Cloud,
  AlertOctagon,
  Repeat
} from "lucide-react";

const Manufacturing = () => {
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
            Industry 4.0 Transformation
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6 sm:mb-8 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Build the Factory of<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">Tomorrow, Today</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 px-4 sm:px-0">
            Transform your manufacturing operations with AI-powered predictive maintenance, real-time production monitoring, and smart ERP integration. From shop floor to top floor—all connected.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300 px-4 sm:px-0">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-8 sm:px-10 h-14 sm:h-16 text-base sm:text-xl shadow-xl shadow-blue-900/50 rounded-full transition-all hover:scale-105 w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
              Get Smart Factory Assessment
              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
            <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-8 sm:px-10 h-14 sm:h-16 text-base sm:text-xl rounded-full w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
              View Manufacturing Solutions
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm mt-6 sm:mt-8 text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span>IoT & AI integration</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span>Real-time visibility</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span>Predictive analytics</span>
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
              <span className="font-semibold">THE MANUFACTURING CHALLENGE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">Your Factory Is Bleeding Efficiency</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed">
              Legacy manufacturing practices create hidden costs and operational bottlenecks. Discover how smart manufacturing transforms production chaos into precision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6">
                    <AlertOctagon className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Reactive Maintenance</h3>
                  <ul className="text-slate-600 space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Machines break unexpectedly, halting production</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Emergency repairs cost 3-5x more than planned maintenance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Lost production time impacts delivery schedules</span>
                    </li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <Brain className="h-12 w-12 mb-6 text-white/90" />
                  <h3 className="text-2xl font-bold mb-4 text-white">Predictive Maintenance</h3>
                  <ul className="text-blue-100 space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>AI predicts failures 2-4 weeks in advance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Schedule repairs during planned downtime</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>60-70% reduction in maintenance costs</span>
                    </li>
                  </ul>
                </>
              }
            />
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-6">
                    <Eye className="h-8 w-8 text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Zero Visibility</h3>
                  <ul className="text-slate-600 space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>No real-time insight into production performance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Bottlenecks identified only after significant delays</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Decisions based on outdated information</span>
                    </li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <Activity className="h-12 w-12 mb-6 text-white/90" />
                  <h3 className="text-2xl font-bold mb-4 text-white">Real-Time Monitoring</h3>
                  <ul className="text-blue-100 space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Live dashboards for every production line</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Real-time OEE, cycle times, and quality metrics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Instant alerts for performance deviations</span>
                    </li>
                  </ul>
                </>
              }
            />
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-purple-50 flex items-center justify-center mb-6">
                    <BarChart3 className="h-8 w-8 text-purple-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Manual Data Collection</h3>
                  <ul className="text-slate-600 space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Workers spend 15+ hours weekly on manual data entry</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>High error rates in manual data transcription</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Delayed availability of production data</span>
                    </li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <Cpu className="h-12 w-12 mb-6 text-white/90" />
                  <h3 className="text-2xl font-bold mb-4 text-white">Automated Data Capture</h3>
                  <ul className="text-blue-100 space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>IoT sensors collect data automatically</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>99.9% data accuracy and real-time updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Workers focus on value-added activities</span>
                    </li>
                  </ul>
                </>
              }
            />
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                    <Settings className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Siloed Systems</h3>
                  <ul className="text-slate-600 space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Shop floor data separate from ERP planning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Production decisions disconnected from inventory</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Manual reconciliation creates bottlenecks</span>
                    </li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <Zap className="h-12 w-12 mb-6 text-white/90" />
                  <h3 className="text-2xl font-bold mb-4 text-white">Unified Platform</h3>
                  <ul className="text-blue-100 space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>MES, ERP, and IoT seamlessly integrated</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Real-time data flow from shop floor to top floor</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Automated production scheduling and optimization</span>
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
                <span className="text-blue-600">Industry Insight:</span> Smart factories implementing Industry 4.0 solutions achieve 50% reduction in unplanned downtime, 30% productivity increase, and 25% lower operating costs through predictive analytics and automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Impact - Enhanced Content */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full mb-6">
              <Zap className="h-5 w-5" />
              <span className="font-semibold">THE TRANSFORMATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">Smart Manufacturing Results</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 px-4 sm:px-0 max-w-3xl mx-auto">
              Measurable impact from Industry 4.0 transformation across all manufacturing KPIs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
              <div className="h-2 w-full bg-gradient-to-r from-blue-400 to-blue-500" />
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-8 w-8 text-blue-500" />
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2">30%</div>
                <div className="text-slate-600 font-medium mb-3">Productivity Increase</div>
                <ul className="text-sm text-slate-500 text-left space-y-1.5 mt-4">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Higher OEE across all lines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Reduced cycle times</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Optimized resource utilization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
              <div className="h-2 w-full bg-gradient-to-r from-blue-500 to-blue-600" />
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Wrench className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2">50%</div>
                <div className="text-slate-600 font-medium mb-3">Less Downtime</div>
                <ul className="text-sm text-slate-500 text-left space-y-1.5 mt-4">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Predictive maintenance alerts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Scheduled repairs only</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Zero emergency breakdowns</span>
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
                <div className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2">40%</div>
                <div className="text-slate-600 font-medium mb-3">Quality Improvement</div>
                <ul className="text-sm text-slate-500 text-left space-y-1.5 mt-4">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Real-time defect detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Automated quality control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Reduced scrap and rework</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
              <div className="h-2 w-full bg-gradient-to-r from-blue-700 to-blue-800" />
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Activity className="h-8 w-8 text-blue-800" />
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2">Real-Time</div>
                <div className="text-slate-600 font-medium mb-3">Visibility</div>
                <ul className="text-sm text-slate-500 text-left space-y-1.5 mt-4">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Live production monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Instant bottleneck alerts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Data-driven decision making</span>
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
                  "We implemented AIERP's smart manufacturing solution across 3 plants. Predictive maintenance alone saved us $2.8M in the first year by preventing catastrophic failures. Real-time production monitoring cut our cycle time by 22%, and automated quality control reduced defects by 35%."
                </p>
                <div className="font-semibold text-slate-900">David Martinez</div>
                <div className="text-slate-600">VP of Manufacturing, Global Automotive Supplier</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Smart Manufacturing Solutions - Enhanced Content */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-6">
              <Factory className="h-5 w-5" />
              <span className="font-semibold">OUR SOLUTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">Smart Manufacturing Solutions</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 px-4 sm:px-0 max-w-3xl mx-auto">
              Comprehensive Industry 4.0 technologies designed for modern, efficient factories
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Predictive Maintenance",
                description: "AI-powered algorithms analyze sensor data to predict equipment failures weeks in advance.",
                icon: Brain,
                points: [
                  "Machine learning models for failure prediction",
                  "Sensor data analysis and pattern recognition",
                  "Maintenance scheduling optimization",
                  "Cost-benefit analysis for repairs"
                ],
                color: "from-blue-400 to-blue-500"
              },
              {
                title: "Real-Time Production Monitoring",
                description: "Live dashboards showing OEE, cycle times, quality metrics across all production lines.",
                icon: Activity,
                points: [
                  "Real-time OEE calculations",
                  "Production line performance tracking",
                  "Bottleneck identification",
                  "Historical trend analysis"
                ],
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "IoT Sensor Integration",
                description: "Connect machines, tools, and equipment with industrial IoT sensors for automated data collection.",
                icon: Cpu,
                points: [
                  "Industrial IoT device deployment",
                  "Sensor data collection and transmission",
                  "Edge computing for local processing",
                  "Secure data communication protocols"
                ],
                color: "from-blue-600 to-blue-700"
              },
              {
                title: "MES & ERP Integration",
                description: "Seamless connection between Manufacturing Execution Systems and SAP/Oracle ERP.",
                icon: Settings,
                points: [
                  "Real-time production order updates",
                  "Inventory synchronization",
                  "Quality data integration",
                  "Production planning optimization"
                ],
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Quality Management Systems",
                description: "Automated quality control with AI vision inspection and statistical process control.",
                icon: Shield,
                points: [
                  "AI-powered visual inspection",
                  "Statistical process control (SPC)",
                  "Real-time defect tracking",
                  "Root cause analysis tools"
                ],
                color: "from-blue-600 to-blue-700"
              },
              {
                title: "Digital Twin Technology",
                description: "Virtual replicas of production lines for simulation, optimization, and what-if analysis.",
                icon: Repeat,
                points: [
                  "3D factory modeling",
                  "Production simulation and testing",
                  "What-if scenario analysis",
                  "Performance optimization planning"
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
      <ManufacturingRoadmap />

      {/* Technologies - Enhanced Content */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-6">
              <Cloud className="h-5 w-5" />
              <span className="font-semibold">TECHNOLOGY STACK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">Industry 4.0 Technologies</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 px-4 sm:px-0 max-w-3xl mx-auto">
              Cutting-edge technologies powering the smart factory revolution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {[
              { 
                metric: "IoT Sensors & Edge Computing", 
                label: "Real-Time Data Collection", 
                icon: Cpu,
                points: [
                  "Industrial-grade IoT sensors",
                  "Edge computing for local processing",
                  "Real-time data aggregation",
                  "Predictive maintenance algorithms"
                ]
              },
              { 
                metric: "AI/ML Analytics", 
                label: "Predictive Intelligence", 
                icon: Brain,
                points: [
                  "Machine learning models for quality",
                  "Predictive analytics for maintenance",
                  "Production optimization algorithms",
                  "Anomaly detection systems"
                ]
              },
              { 
                metric: "Cloud MES & IIoT Platforms", 
                label: "Scalable Manufacturing Systems", 
                icon: Database,
                points: [
                  "Cloud-based MES solutions",
                  "Industrial IoT platforms",
                  "Real-time monitoring dashboards",
                  "Scalable enterprise integration"
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
                <Target className="h-12 w-12 text-blue-600" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Phased Implementation Approach</h3>
                  <p className="text-slate-700">We implement smart manufacturing solutions in phases, starting with pilot projects that deliver quick wins and measurable ROI before scaling across your entire operation.</p>
                </div>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-500 text-white px-8 h-12 rounded-full transition-all hover:scale-105 whitespace-nowrap" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
                Start Pilot Project <ArrowRight className="ml-2 h-5 w-5" />
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
            <span className="text-blue-100 font-semibold text-lg">TRANSFORM YOUR FACTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 tracking-tight px-4 sm:px-0">
            Ready to Build a Smart Factory?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Get a free smart factory assessment and discover how Industry 4.0 can transform your manufacturing operations with measurable ROI and competitive advantage.
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
              <DollarSign className="h-5 w-5" />
              <span>ROI analysis included</span>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Manufacturing;