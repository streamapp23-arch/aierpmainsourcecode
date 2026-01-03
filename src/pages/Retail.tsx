import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RetailRoadmap from "@/components/RetailRoadmap";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FlipCard } from "@/components/FlipCard";
import SEO from "@/components/SEO";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
  TrendingUp,
  AlertTriangle,
  Award,
  ShoppingBag,
  Store,
  Truck,
  Users,
  BarChart3,
  Smartphone,
  Globe,
  Tag
} from "lucide-react";

const Retail = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-cyan-500/20">
      <SEO
        title="Retail ERP Solutions | Omnichannel Commerce"
        description="Unified commerce solutions for retail. Inventory management, POS integration, and AI-driven demand forecasting."
        keywords="retail ERP, omnichannel retail, POS integration, retail inventory management"
      />
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
            Future of Retail
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6 sm:mb-8 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Unified Commerce for the<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Modern Shopper</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 px-4 sm:px-0">
            Bridge the gap between online and offline. Deliver seamless, personalized shopping experiences with our AI-powered retail ERP solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300 px-4 sm:px-0">
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 sm:px-10 h-14 sm:h-16 text-base sm:text-xl shadow-xl shadow-cyan-900/50 rounded-full transition-all hover:scale-105 w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
              Get Retail Strategy
              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
            <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-8 sm:px-10 h-14 sm:h-16 text-base sm:text-xl rounded-full w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
              View Case Studies
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm mt-6 sm:mt-8 text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
              <span>Omnichannel sync</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
              <span>Real-time inventory</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section with Flip Cards */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">Retail Is Broken. Fix It.</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed">
              Hover over the cards to see how unified commerce transforms customer frustration into loyalty.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6">
                    <AlertTriangle className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Inventory Chaos</h3>
                  <p className="text-slate-500">"Out of stock" online, but sitting on a shelf in-store. Lost sales.</p>
                </>
              }
              backContent={
                <>
                  <Store className="h-12 w-12 mb-4 text-white/90" />
                  <h3 className="text-2xl font-bold mb-2">Unified Inventory</h3>
                  <p className="text-blue-100">Real-time visibility across all warehouses and stores. Ship from store. Buy online, pick up in store.</p>
                </>
              }
            />
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-6">
                    <Users className="h-8 w-8 text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Blind Customer View</h3>
                  <p className="text-slate-500">Online and in-store data are separate. You don't know who your customers are.</p>
                </>
              }
              backContent={
                <>
                  <Sparkles className="h-12 w-12 mb-4 text-white/90" />
                  <h3 className="text-2xl font-bold mb-2">360° Customer Profile</h3>
                  <p className="text-blue-100">Single view of customer history, preferences, and lifetime value across all channels.</p>
                </>
              }
            />
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-purple-50 flex items-center justify-center mb-6">
                    <Tag className="h-8 w-8 text-purple-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Pricing Disconnect</h3>
                  <p className="text-slate-500">Different prices online and offline confuse customers and erode trust.</p>
                </>
              }
              backContent={
                <>
                  <Zap className="h-12 w-12 mb-4 text-white/90" />
                  <h3 className="text-2xl font-bold mb-2">Dynamic Pricing</h3>
                  <p className="text-blue-100">Consistent, AI-optimized pricing across all channels managed centrally.</p>
                </>
              }
            />
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                    <Truck className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Fulfillment Nightmares</h3>
                  <p className="text-slate-500">Slow shipping, high costs, and inability to handle returns efficiently.</p>
                </>
              }
              backContent={
                <>
                  <Globe className="h-12 w-12 mb-4 text-white/90" />
                  <h3 className="text-2xl font-bold mb-2">Smart Order Management</h3>
                  <p className="text-blue-100">Intelligent routing to the nearest fulfillment center or store. Automated returns.</p>
                </>
              }
            />
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-500 rounded-xl">
            <p className="text-center text-lg font-semibold text-slate-900">
              <span className="text-cyan-600">Retail Reality:</span> Omnichannel customers spend 4% more on every shopping occasion in the store and 10% more online than single-channel customers.
            </p>
          </div>
        </div>
      </section>

      {/* Retail Impact */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Unified Commerce Results</h2>
            <p className="text-xl text-slate-600">The ROI of connecting your retail ecosystem</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="h-2 w-full bg-gradient-to-r from-green-400 to-emerald-400" />
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-green-500" />
                </div>
                <div className="text-5xl font-bold text-slate-900 mb-2">25%</div>
                <div className="text-slate-600 font-medium">Revenue Growth</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="h-2 w-full bg-gradient-to-r from-cyan-400 to-blue-400" />
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-cyan-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-cyan-500" />
                </div>
                <div className="text-5xl font-bold text-slate-900 mb-2">30%</div>
                <div className="text-slate-600 font-medium">Higher LTV</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="h-2 w-full bg-gradient-to-r from-purple-400 to-pink-400" />
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Store className="h-8 w-8 text-purple-500" />
                </div>
                <div className="text-5xl font-bold text-slate-900 mb-2">15%</div>
                <div className="text-slate-600 font-medium">Lower Inventory Costs</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="h-2 w-full bg-gradient-to-r from-orange-400 to-red-400" />
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-orange-500" />
                </div>
                <div className="text-5xl font-bold text-slate-900 mb-2">40%</div>
                <div className="text-slate-600 font-medium">Faster Fulfillment</div>
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
                  "Outstanding project delivery with importance to details. Best blend of technology, business and management skills. Excellent team and had clear great project vision"
                </p>
                <div className="font-semibold text-slate-900">IT Director</div>
                <div className="text-slate-600">SME Solutions, Implementation partner</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Retail Solutions */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Retail Solutions</h2>
            <p className="text-xl text-slate-600">End-to-end technologies for modern retail</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Unified Commerce Platform",
                description: "Connect e-commerce, POS, and mobile apps into a single platform. Manage products, customers, and orders from one dashboard.",
                icon: Globe,
                color: "from-cyan-400 to-blue-400"
              },
              {
                title: "Smart Inventory Management",
                description: "AI-driven demand forecasting and automated replenishment. Optimize stock levels across all locations to prevent stockouts and overstock.",
                icon: ShoppingBag,
                color: "from-blue-400 to-indigo-400"
              },
              {
                title: "Customer Data Platform (CDP)",
                description: "Aggregate customer data from all touchpoints to create unified profiles. Drive personalized marketing and loyalty programs.",
                icon: Users,
                color: "from-purple-400 to-pink-400"
              },
              {
                title: "Modern POS Systems",
                description: "Cloud-based Point of Sale that runs on tablets. Mobile checkout, clienteling, and real-time inventory access for store associates.",
                icon: Smartphone,
                color: "from-green-400 to-emerald-400"
              },
              {
                title: "Order Management System (OMS)",
                description: "Orchestrate complex fulfillment scenarios like ship-from-store, split shipments, and endless aisle. Optimize delivery costs.",
                icon: Truck,
                color: "from-orange-400 to-red-400"
              },
              {
                title: "Retail Analytics",
                description: "Real-time dashboards for sales performance, store traffic, conversion rates, and inventory turnover. Data-driven decision making.",
                icon: BarChart3,
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
      <RetailRoadmap />

      {/* Technologies */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Retail Technologies</h2>
            <p className="text-xl text-slate-600">Powering the future of shopping</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { metric: "Headless", label: "Commerce Architecture", icon: Globe },
              { metric: "AI/ML", label: "Personalization Engine", icon: Sparkles },
              { metric: "Cloud Native", label: "Scalable Infrastructure", icon: Zap }
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
      <section className="py-24 px-4 bg-gradient-to-br from-cyan-900 to-blue-900">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-sm border border-white/20">
            <Sparkles className="w-5 h-5 text-cyan-300" />
            <span className="text-cyan-100 font-semibold text-sm">REINVENT YOUR RETAIL</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Ready to Unify Your Commerce?
          </h2>
          <p className="text-2xl text-cyan-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Get a free retail strategy assessment and discover how unified commerce can drive growth and loyalty.
          </p>
          <div className="pt-4">
            <Button size="lg" className="bg-white text-cyan-900 hover:bg-cyan-50 px-12 h-20 text-2xl font-bold shadow-2xl rounded-full transition-transform hover:scale-105" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
              Get Free Assessment <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </div>
          <p className="mt-8 text-cyan-200 font-medium">
            ⚡ Assessment in 48 hours • ✓ No obligation • ✓ Omnichannel audit included
          </p>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Retail;
