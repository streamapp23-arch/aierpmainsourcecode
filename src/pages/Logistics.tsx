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
  Anchor
} from "lucide-react";

const Logistics = () => {
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
            Intelligent Supply Chain
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6 sm:mb-8 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Deliver Faster, Smarter,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">and Cheaper</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 px-4 sm:px-0">
            Optimize your entire supply chain with AI-powered logistics, real-time tracking, and automated warehouse management.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300 px-4 sm:px-0">
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 sm:px-10 h-14 sm:h-16 text-base sm:text-xl shadow-xl shadow-cyan-900/50 rounded-full transition-all hover:scale-105 w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
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
          </div>
        </div>
      </section>

      {/* Problem Section with Flip Cards */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">Supply Chain Chaos Is Expensive</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed">
              Hover over the cards to see how smart logistics transforms chaos into control.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6">
                    <AlertTriangle className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Blind Spots</h3>
                  <p className="text-slate-500">"Where is my shipment?" No one knows until it arrives (or doesn't).</p>
                </>
              }
              backContent={
                <>
                  <MapPin className="h-12 w-12 mb-4 text-white/90" />
                  <h3 className="text-2xl font-bold mb-2">End-to-End Visibility</h3>
                  <p className="text-blue-100">Track every SKU from factory to doorstep in real-time with IoT sensors.</p>
                </>
              }
            />
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-6">
                    <Clock className="h-8 w-8 text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Inefficient Routing</h3>
                  <p className="text-slate-500">Drivers taking long routes, wasting fuel, and missing delivery windows.</p>
                </>
              }
              backContent={
                <>
                  <Navigation className="h-12 w-12 mb-4 text-white/90" />
                  <h3 className="text-2xl font-bold mb-2">AI Route Optimization</h3>
                  <p className="text-blue-100">Dynamic routing based on traffic, weather, and delivery windows saves 20% on fuel.</p>
                </>
              }
            />
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-purple-50 flex items-center justify-center mb-6">
                    <Package className="h-8 w-8 text-purple-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Warehouse Bottlenecks</h3>
                  <p className="text-slate-500">Manual picking errors and slow fulfillment processes kill margins.</p>
                </>
              }
              backContent={
                <>
                  <Zap className="h-12 w-12 mb-4 text-white/90" />
                  <h3 className="text-2xl font-bold mb-2">Smart Warehousing</h3>
                  <p className="text-blue-100">Automated picking, robotics integration, and real-time inventory management.</p>
                </>
              }
            />
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                    <BarChart3 className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Demand Surprises</h3>
                  <p className="text-slate-500">Stockouts during peaks, overstock during slumps. Reactive planning.</p>
                </>
              }
              backContent={
                <>
                  <Sparkles className="h-12 w-12 mb-4 text-white/90" />
                  <h3 className="text-2xl font-bold mb-2">Predictive Planning</h3>
                  <p className="text-blue-100">AI forecasts demand with 95% accuracy to optimize inventory levels.</p>
                </>
              }
            />
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-500 rounded-xl">
            <p className="text-center text-lg font-semibold text-slate-900">
              <span className="text-cyan-600">Logistics Fact:</span> Companies with digitized supply chains increase revenue by 2.3% and reduce costs by 20% annually.
            </p>
          </div>
        </div>
      </section>

      {/* Logistics Impact */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">Supply Chain Results</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 px-4 sm:px-0">The ROI of intelligent logistics</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="h-2 w-full bg-gradient-to-r from-green-400 to-emerald-400" />
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-green-500" />
                </div>
                <div className="text-5xl font-bold text-slate-900 mb-2">20%</div>
                <div className="text-slate-600 font-medium">Lower Fuel Costs</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="h-2 w-full bg-gradient-to-r from-cyan-400 to-blue-400" />
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-cyan-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-cyan-500" />
                </div>
                <div className="text-5xl font-bold text-slate-900 mb-2">30%</div>
                <div className="text-slate-600 font-medium">Faster Delivery</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="h-2 w-full bg-gradient-to-r from-purple-400 to-pink-400" />
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Package className="h-8 w-8 text-purple-500" />
                </div>
                <div className="text-5xl font-bold text-slate-900 mb-2">99%</div>
                <div className="text-slate-600 font-medium">Inventory Accuracy</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="h-2 w-full bg-gradient-to-r from-orange-400 to-red-400" />
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-orange-500" />
                </div>
                <div className="text-5xl font-bold text-slate-900 mb-2">Zero</div>
                <div className="text-slate-600 font-medium">Blind Spots</div>
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
                  "AIERP's logistics platform gave us complete visibility into our global supply chain. We reduced shipping costs by 18% in the first quarter and improved on-time delivery rates to 98.5%."
                </p>
                <div className="font-semibold text-slate-900">Michael Chang</div>
                <div className="text-slate-600">Director of Logistics, Global Retailer</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Logistics Solutions */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">Logistics Solutions</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 px-4 sm:px-0">End-to-end supply chain technology</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                title: "Transportation Management (TMS)",
                description: "Optimize carrier selection, route planning, and freight auditing. Reduce transportation spend and improve service levels.",
                icon: Truck,
                color: "from-cyan-400 to-blue-400"
              },
              {
                title: "Warehouse Management (WMS)",
                description: "Streamline receiving, put-away, picking, and shipping. Integrate with robotics and automation for maximum efficiency.",
                icon: Package,
                color: "from-blue-400 to-indigo-400"
              },
              {
                title: "Supply Chain Control Tower",
                description: "Centralized dashboard for real-time visibility across your entire network. Detect and resolve disruptions instantly.",
                icon: MapPin,
                color: "from-purple-400 to-pink-400"
              },
              {
                title: "Global Trade Management",
                description: "Automate customs compliance, documentation, and trade screening. Navigate complex global regulations with ease.",
                icon: Globe,
                color: "from-green-400 to-emerald-400"
              },
              {
                title: "Fleet Management",
                description: "Track vehicle health, driver behavior, and fuel usage. Predictive maintenance for your fleet to minimize downtime.",
                icon: Navigation,
                color: "from-orange-400 to-red-400"
              },
              {
                title: "Port & Terminal Operations",
                description: "Optimize container handling, yard management, and gate operations for ports and intermodal terminals.",
                icon: Anchor,
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
      <LogisticsRoadmap />

      {/* Technologies */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 px-4 sm:px-0">Logistics Technologies</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 px-4 sm:px-0">Powering the modern supply chain</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
            {[
              { metric: "IoT", label: "Real-Time Tracking", icon: MapPin },
              { metric: "AI/ML", label: "Route Optimization", icon: Sparkles },
              { metric: "Blockchain", label: "Secure Documentation", icon: Shield }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <stat.icon className="h-10 w-10 text-cyan-600" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-3">{stat.metric}</div>
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
            <span className="text-cyan-100 font-semibold text-sm">OPTIMIZE YOUR SUPPLY CHAIN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 tracking-tight px-4 sm:px-0">
            Ready to Deliver Faster?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-cyan-100 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Get a free logistics assessment and discover how AI and automation can transform your supply chain operations.
          </p>
          <div className="pt-4">
            <Button size="lg" className="bg-white text-cyan-900 hover:bg-cyan-50 px-8 sm:px-12 h-16 sm:h-20 text-lg sm:text-xl md:text-2xl font-bold shadow-2xl rounded-full transition-transform hover:scale-105 w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
              Get Free Assessment <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </div>
          <p className="mt-8 text-cyan-200 font-medium">
            ⚡ Assessment in 48 hours • ✓ ROI analysis included • ✓ No obligation
          </p>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Logistics;
