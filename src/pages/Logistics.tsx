import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LogisticsRoadmap from "@/components/LogisticsRoadmap";
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
  Truck,
  MapPin,
  Package,
  Globe,
  BarChart3,
  Clock,
  Navigation,
  Anchor,
  DollarSign,
  Fuel,
  Gauge,
  Layers,
  Warehouse,
  Route,
  Container,
  BarChart,
  AlertCircle,
  Eye
} from "lucide-react";

const Logistics = () => {
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
            Intelligent Supply Chain
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6 sm:mb-8 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Deliver Faster, Smarter,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">and Cheaper</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 px-4 sm:px-0">
            Optimize your entire supply chain with AI-powered logistics, real-time tracking, and automated warehouse management.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300 px-4 sm:px-0">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-8 sm:px-10 h-14 sm:h-16 text-base sm:text-xl shadow-xl shadow-blue-900/50 rounded-full transition-all hover:scale-105 w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
              Get Logistics Assessment
              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
            <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-8 sm:px-10 h-14 sm:h-16 text-base sm:text-xl rounded-full w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
              View Success Stories
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm mt-6 sm:mt-8 text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span>Real-time visibility</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span>AI route optimization</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span>Automated warehouse management</span>
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
              <span className="font-semibold">THE LOGISTICS CHALLENGE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">Supply Chain Chaos Is Expensive</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed">
              Fragmented visibility and inefficient operations create massive hidden costs. Discover how intelligent logistics transforms supply chain chaos into competitive advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6">
                    <Eye className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Complete Blind Spots</h3>
                  <ul className="text-slate-600 space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>No real-time visibility into shipment locations and status</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Delayed problem detection leads to costly disruptions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Inability to provide accurate ETAs to customers</span>
                    </li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <MapPin className="h-12 w-12 mb-6 text-white/90" />
                  <h3 className="text-2xl font-bold mb-4 text-white">End-to-End Visibility</h3>
                  <ul className="text-blue-100 space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Real-time tracking of every SKU from origin to destination</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>IoT sensors and GPS for continuous location monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Proactive alerts for delays and exceptions</span>
                    </li>
                  </ul>
                </>
              }
            />
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-6">
                    <Clock className="h-8 w-8 text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Inefficient Routing & Delivery</h3>
                  <ul className="text-slate-600 space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Manual route planning leads to 15-20% excess mileage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Missed delivery windows and customer dissatisfaction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>High fuel consumption and vehicle maintenance costs</span>
                    </li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <Navigation className="h-12 w-12 mb-6 text-white/90" />
                  <h3 className="text-2xl font-bold mb-4 text-white">AI Route Optimization</h3>
                  <ul className="text-blue-100 space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Dynamic routing based on real-time traffic and weather</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>20-30% reduction in fuel costs and vehicle wear</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Optimized delivery windows and improved customer satisfaction</span>
                    </li>
                  </ul>
                </>
              }
            />
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-purple-50 flex items-center justify-center mb-6">
                    <Package className="h-8 w-8 text-purple-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Warehouse Bottlenecks</h3>
                  <ul className="text-slate-600 space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Manual picking errors costing 3-5% of warehouse labor</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Slow fulfillment processes impacting delivery timelines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Poor space utilization and inventory accuracy</span>
                    </li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <Zap className="h-12 w-12 mb-6 text-white/90" />
                  <h3 className="text-2xl font-bold mb-4 text-white">Smart Warehousing</h3>
                  <ul className="text-blue-100 space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Automated picking systems and robotics integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Real-time inventory management with 99.9% accuracy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Optimized warehouse layout and space utilization</span>
                    </li>
                  </ul>
                </>
              }
            />
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                    <BarChart3 className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Demand Forecasting Failures</h3>
                  <ul className="text-slate-600 space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Stockouts during peak demand losing 10-20% of sales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Excess inventory tying up 15-25% of working capital</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Reactive planning instead of proactive optimization</span>
                    </li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <Sparkles className="h-12 w-12 mb-6 text-white/90" />
                  <h3 className="text-2xl font-bold mb-4 text-white">Predictive Planning</h3>
                  <ul className="text-blue-100 space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>AI-driven demand forecasting with 95%+ accuracy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Dynamic inventory optimization across all locations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Proactive supply chain risk management and mitigation</span>
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
                <span className="text-blue-600">Logistics Insight:</span> Companies with digitized supply chains achieve 20-30% lower operational costs, 15-25% faster delivery times, and 2.3% higher revenue growth through improved visibility and optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Impact - Enhanced Content */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full mb-6">
              <TrendingUp className="h-5 w-5" />
              <span className="font-semibold">THE TRANSFORMATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">Supply Chain Results</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 px-4 sm:px-0 max-w-3xl mx-auto">
              Measurable ROI from implementing intelligent logistics and supply chain solutions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
              <div className="h-2 w-full bg-gradient-to-r from-blue-400 to-blue-500" />
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Fuel className="h-8 w-8 text-blue-500" />
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2">20%</div>
                <div className="text-slate-600 font-medium mb-3">Lower Fuel Costs</div>
                <ul className="text-sm text-slate-500 text-left space-y-1.5 mt-4">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Optimized route planning reduces mileage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Reduced idling time at stops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Improved vehicle load optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
              <div className="h-2 w-full bg-gradient-to-r from-blue-500 to-blue-600" />
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2">30%</div>
                <div className="text-slate-600 font-medium mb-3">Faster Delivery</div>
                <ul className="text-sm text-slate-500 text-left space-y-1.5 mt-4">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Reduced transit and handling time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Streamlined warehouse operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Optimized last-mile delivery</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
              <div className="h-2 w-full bg-gradient-to-r from-blue-600 to-blue-700" />
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Package className="h-8 w-8 text-blue-700" />
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2">99%</div>
                <div className="text-slate-600 font-medium mb-3">Inventory Accuracy</div>
                <ul className="text-sm text-slate-500 text-left space-y-1.5 mt-4">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Real-time stock level monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Reduced shrinkage and pilferage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Automated cycle counting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
              <div className="h-2 w-full bg-gradient-to-r from-blue-700 to-blue-800" />
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Gauge className="h-8 w-8 text-blue-800" />
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2">Zero</div>
                <div className="text-slate-600 font-medium mb-3">Blind Spots</div>
                <ul className="text-sm text-slate-500 text-left space-y-1.5 mt-4">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Complete end-to-end visibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Proactive exception management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Real-time analytics and reporting</span>
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
                  "AIERP's intelligent logistics platform transformed our global supply chain operations. We achieved 18% reduction in shipping costs in the first quarter, improved on-time delivery rates to 98.5%, and gained complete real-time visibility across our 200+ global shipping lanes. The ROI was realized within 6 months."
                </p>
                <div className="font-semibold text-slate-900">Michael Chang</div>
                <div className="text-slate-600">Director of Logistics, Global Retail Chain with 500+ Stores</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Logistics Solutions - Enhanced Content */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-6">
              <Truck className="h-5 w-5" />
              <span className="font-semibold">OUR SOLUTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">Logistics Solutions</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 px-4 sm:px-0 max-w-3xl mx-auto">
              Comprehensive technologies for end-to-end supply chain optimization and management
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Transportation Management (TMS)",
                description: "Optimize carrier selection, route planning, and freight auditing across all transportation modes.",
                icon: Truck,
                points: [
                  "Multi-modal carrier selection and booking",
                  "Dynamic route optimization with real-time adjustments",
                  "Freight audit and payment automation",
                  "Carrier performance tracking and analytics"
                ],
                color: "from-blue-400 to-blue-500"
              },
              {
                title: "Warehouse Management (WMS)",
                description: "Streamline receiving, put-away, picking, and shipping with advanced warehouse automation.",
                icon: Warehouse,
                points: [
                  "Automated receiving and put-away processes",
                  "Optimized picking strategies (wave, batch, zone)",
                  "Real-time inventory tracking and cycle counting",
                  "Robotics and automation system integration"
                ],
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Supply Chain Control Tower",
                description: "Centralized dashboard for real-time visibility and decision-making across your supply chain.",
                icon: MapPin,
                points: [
                  "End-to-end supply chain visibility",
                  "Real-time exception management and alerts",
                  "Predictive analytics for risk mitigation",
                  "Collaborative planning with partners"
                ],
                color: "from-blue-600 to-blue-700"
              },
              {
                title: "Global Trade Management",
                description: "Automate customs compliance, documentation, and trade regulations for international shipping.",
                icon: Globe,
                points: [
                  "Automated customs documentation and filing",
                  "Trade compliance screening and validation",
                  "Duty and tax calculation optimization",
                  "Restricted party screening and compliance"
                ],
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Fleet Management",
                description: "Track vehicle health, driver behavior, and optimize fleet operations for maximum efficiency.",
                icon: Navigation,
                points: [
                  "Real-time vehicle tracking and telematics",
                  "Driver behavior monitoring and safety scoring",
                  "Predictive maintenance scheduling",
                  "Fuel consumption optimization"
                ],
                color: "from-blue-600 to-blue-700"
              },
              {
                title: "Port & Terminal Operations",
                description: "Optimize container handling, yard management, and gate operations for port efficiency.",
                icon: Container,
                points: [
                  "Container tracking and yard management",
                  "Gate appointment scheduling and optimization",
                  "Berth and crane allocation optimization",
                  "Intermodal transfer coordination"
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
      <LogisticsRoadmap />

      {/* Technologies - Enhanced Content */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-6">
              <Layers className="h-5 w-5" />
              <span className="font-semibold">TECHNOLOGY STACK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">Logistics Technologies</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 px-4 sm:px-0 max-w-3xl mx-auto">
              Advanced technologies powering modern, intelligent supply chain operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {[
              { 
                metric: "IoT Sensors & Telematics", 
                label: "Real-Time Asset Tracking", 
                icon: MapPin,
                points: [
                  "GPS tracking for real-time location data",
                  "Temperature and humidity sensors for perishables",
                  "Vehicle telematics for fleet optimization",
                  "Container and pallet tracking technology"
                ]
              },
              { 
                metric: "AI/ML Optimization", 
                label: "Intelligent Planning", 
                icon: Sparkles,
                points: [
                  "Machine learning for demand forecasting",
                  "AI-powered route optimization algorithms",
                  "Predictive maintenance for fleet vehicles",
                  "Automated warehouse slotting optimization"
                ]
              },
              { 
                metric: "Blockchain & Digital Ledgers", 
                label: "Secure Documentation", 
                icon: Shield,
                points: [
                  "Secure, immutable shipping documentation",
                  "Smart contracts for automated payments",
                  "Supply chain provenance and traceability",
                  "Tamper-proof audit trails for compliance"
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
                <Route className="h-12 w-12 text-blue-600" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Multi-Modal Transportation Integration</h3>
                  <p className="text-slate-700">We specialize in integrating air, ocean, rail, and road transportation modes into a seamless, optimized supply chain that reduces costs, improves reliability, and enhances visibility across all transport legs.</p>
                </div>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-500 text-white px-8 h-12 rounded-full transition-all hover:scale-105 whitespace-nowrap" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
                Schedule Network Analysis <ArrowRight className="ml-2 h-5 w-5" />
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
            <span className="text-blue-100 font-semibold text-lg">OPTIMIZE YOUR SUPPLY CHAIN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 tracking-tight px-4 sm:px-0">
            Ready to Deliver Faster?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Get a free logistics assessment and discover how AI-powered supply chain optimization can reduce costs, improve delivery times, and transform your operations.
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
              <DollarSign className="h-5 w-5" />
              <span>ROI analysis included</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CheckCircle2 className="h-5 w-5" />
              <span>No obligation</span>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Logistics;