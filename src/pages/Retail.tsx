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
  Tag,
  Clock,
  DollarSign,
  Package,
  CreditCard,
  Target,
  ShoppingCart,
  BarChart,
  Database,
  Percent,
  MapPin
} from "lucide-react";

const Retail = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-500/20">
      <SEO
        title="Retail ERP Solutions | Omnichannel Commerce"
        description="Unified commerce solutions for retail. Inventory management, POS integration, and AI-driven demand forecasting."
        keywords="retail ERP, omnichannel retail, POS integration, retail inventory management"
      />
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
            Future of Retail
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6 sm:mb-8 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Unified Commerce for the<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">Modern Shopper</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 px-4 sm:px-0">
            Bridge the gap between online and offline. Deliver seamless, personalized shopping experiences with our AI-powered retail ERP solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300 px-4 sm:px-0">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-8 sm:px-10 h-14 sm:h-16 text-base sm:text-xl shadow-xl shadow-blue-900/50 rounded-full transition-all hover:scale-105 w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
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
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
              <span>AI personalization</span>
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
              <span className="font-semibold">THE RETAIL CHALLENGE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">Retail Is Broken. Fix It.</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed">
              Siloed systems create fragmented shopping experiences. Discover how unified commerce transforms customer frustration into loyalty.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6">
                    <AlertTriangle className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Inventory Chaos</h3>
                  <ul className="text-slate-600 space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>"Out of stock" online but available in stores</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Overstock in some locations, stockouts in others</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>30% of sales lost due to inventory mismanagement</span>
                    </li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <Store className="h-12 w-12 mb-6 text-white/90" />
                  <h3 className="text-2xl font-bold mb-4 text-white">Unified Inventory</h3>
                  <ul className="text-blue-100 space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Real-time visibility across all locations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Ship-from-store capabilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>BOPIS (Buy Online, Pickup In Store)</span>
                    </li>
                  </ul>
                </>
              }
            />
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-6">
                    <Users className="h-8 w-8 text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Blind Customer View</h3>
                  <ul className="text-slate-600 space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Separate customer data for online vs in-store</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Missed cross-sell and upsell opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>No unified view of customer lifetime value</span>
                    </li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <Sparkles className="h-12 w-12 mb-6 text-white/90" />
                  <h3 className="text-2xl font-bold mb-4 text-white">360° Customer Profile</h3>
                  <ul className="text-blue-100 space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Unified view across all touchpoints</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Personalized marketing and recommendations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Loyalty program integration</span>
                    </li>
                  </ul>
                </>
              }
            />
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-purple-50 flex items-center justify-center mb-6">
                    <Tag className="h-8 w-8 text-purple-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Pricing Disconnect</h3>
                  <ul className="text-slate-600 space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Different prices across channels erode trust</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Manual price updates lead to errors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Inability to respond to competitor pricing</span>
                    </li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <Zap className="h-12 w-12 mb-6 text-white/90" />
                  <h3 className="text-2xl font-bold mb-4 text-white">Dynamic Pricing</h3>
                  <ul className="text-blue-100 space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>AI-optimized pricing across all channels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Competitor price monitoring and response</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Automated promotions and markdowns</span>
                    </li>
                  </ul>
                </>
              }
            />
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                    <Truck className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Fulfillment Nightmares</h3>
                  <ul className="text-slate-600 space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>High shipping costs and slow delivery times</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Complex returns and exchanges process</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Inability to offer flexible fulfillment options</span>
                    </li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <Globe className="h-12 w-12 mb-6 text-white/90" />
                  <h3 className="text-2xl font-bold mb-4 text-white">Smart Order Management</h3>
                  <ul className="text-blue-100 space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Intelligent routing to nearest fulfillment center</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Automated returns and exchanges</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Multiple fulfillment options (BOPIS, curbside)</span>
                    </li>
                  </ul>
                </>
              }
            />
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 rounded-xl shadow-sm">
            <div className="flex items-center gap-4">
              <ShoppingCart className="h-8 w-8 text-blue-600" />
              <p className="text-lg font-semibold text-slate-900">
                <span className="text-blue-600">Retail Reality:</span> Omnichannel customers spend 4% more in-store and 10% more online than single-channel customers, with a 30% higher lifetime value across all retail segments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Retail Impact - Enhanced Content */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full mb-6">
              <TrendingUp className="h-5 w-5" />
              <span className="font-semibold">THE TRANSFORMATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">Unified Commerce Results</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 px-4 sm:px-0 max-w-3xl mx-auto">
              Measurable ROI from connecting your retail ecosystem across all channels
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
              <div className="h-2 w-full bg-gradient-to-r from-blue-400 to-blue-500" />
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-8 w-8 text-blue-500" />
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2">25%</div>
                <div className="text-slate-600 font-medium mb-3">Revenue Growth</div>
                <ul className="text-sm text-slate-500 text-left space-y-1.5 mt-4">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Cross-channel sales increase</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Higher average order value</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Reduced cart abandonment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
              <div className="h-2 w-full bg-gradient-to-r from-blue-500 to-blue-600" />
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2">30%</div>
                <div className="text-slate-600 font-medium mb-3">Higher LTV</div>
                <ul className="text-sm text-slate-500 text-left space-y-1.5 mt-4">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Increased customer retention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>More frequent purchases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Higher referral rates</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
              <div className="h-2 w-full bg-gradient-to-r from-blue-600 to-blue-700" />
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Store className="h-8 w-8 text-blue-700" />
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2">15%</div>
                <div className="text-slate-600 font-medium mb-3">Lower Inventory Costs</div>
                <ul className="text-sm text-slate-500 text-left space-y-1.5 mt-4">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Reduced safety stock levels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Optimized inventory turnover</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Less dead stock and markdowns</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
              <div className="h-2 w-full bg-gradient-to-r from-blue-700 to-blue-800" />
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="h-8 w-8 text-blue-800" />
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2">40%</div>
                <div className="text-slate-600 font-medium mb-3">Faster Fulfillment</div>
                <ul className="text-sm text-slate-500 text-left space-y-1.5 mt-4">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Reduced order processing time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Faster shipping and delivery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Efficient returns processing</span>
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
                  "Outstanding project delivery with attention to detail. The best blend of technology, business, and management skills. AIERP's unified commerce platform helped us achieve 25% revenue growth and 30% higher customer lifetime value across our 50+ store network."
                </p>
                <div className="font-semibold text-slate-900">IT Director</div>
                <div className="text-slate-600">National Retail Chain, 50+ Stores</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Retail Solutions - Enhanced Content */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-6">
              <ShoppingBag className="h-5 w-5" />
              <span className="font-semibold">OUR SOLUTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">Retail Solutions</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 px-4 sm:px-0 max-w-3xl mx-auto">
              End-to-end technologies powering modern, omnichannel retail operations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Unified Commerce Platform",
                description: "Connect e-commerce, POS, and mobile apps into a single platform for seamless operations.",
                icon: Globe,
                points: [
                  "Single product catalog management",
                  "Unified order processing",
                  "Cross-channel customer data",
                  "Centralized inventory control"
                ],
                color: "from-blue-400 to-blue-500"
              },
              {
                title: "Smart Inventory Management",
                description: "AI-driven demand forecasting and automated replenishment across all locations.",
                icon: ShoppingBag,
                points: [
                  "Predictive demand forecasting",
                  "Automated replenishment",
                  "Multi-location optimization",
                  "Seasonal inventory planning"
                ],
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Customer Data Platform (CDP)",
                description: "Aggregate customer data from all touchpoints to create unified profiles and drive personalization.",
                icon: Users,
                points: [
                  "360° customer view",
                  "Behavioral segmentation",
                  "Personalized marketing",
                  "Loyalty program integration"
                ],
                color: "from-blue-600 to-blue-700"
              },
              {
                title: "Modern POS Systems",
                description: "Cloud-based Point of Sale with mobile capabilities for enhanced in-store experiences.",
                icon: Smartphone,
                points: [
                  "Mobile checkout capabilities",
                  "Clienteling and customer history",
                  "Real-time inventory access",
                  "Offline operation support"
                ],
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Order Management System (OMS)",
                description: "Intelligent order routing and fulfillment orchestration across multiple channels.",
                icon: Truck,
                points: [
                  "Ship-from-store optimization",
                  "Split shipment capabilities",
                  "Real-time tracking",
                  "Returns management automation"
                ],
                color: "from-blue-600 to-blue-700"
              },
              {
                title: "Retail Analytics",
                description: "Real-time dashboards and insights for data-driven retail decision making.",
                icon: BarChart3,
                points: [
                  "Sales performance analytics",
                  "Store traffic and conversion",
                  "Inventory turnover analysis",
                  "Customer behavior insights"
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
      <RetailRoadmap />

      {/* Technologies - Enhanced Content */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-6">
              <Database className="h-5 w-5" />
              <span className="font-semibold">TECHNOLOGY STACK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">Retail Technologies</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 px-4 sm:px-0 max-w-3xl mx-auto">
              Cutting-edge technologies powering the future of retail and shopping experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {[
              { 
                metric: "Headless Architecture", 
                label: "Commerce Platforms", 
                icon: Globe,
                points: [
                  "API-first commerce architecture",
                  "Flexible front-end frameworks",
                  "Multi-channel content delivery",
                  "Future-proof technology stack"
                ]
              },
              { 
                metric: "AI/ML Personalization", 
                label: "Customer Intelligence", 
                icon: Sparkles,
                points: [
                  "Predictive product recommendations",
                  "Personalized marketing automation",
                  "Customer segmentation AI",
                  "Dynamic pricing optimization"
                ]
              },
              { 
                metric: "Cloud Native Infrastructure", 
                label: "Scalable Systems", 
                icon: Zap,
                points: [
                  "Microservices architecture",
                  "Auto-scaling capabilities",
                  "High availability design",
                  "Real-time data processing"
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
                <MapPin className="h-12 w-12 text-blue-600" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Store Network Integration</h3>
                  <p className="text-slate-700">We specialize in connecting retail store networks with online channels, creating true omnichannel experiences that drive sales and customer loyalty across all touchpoints.</p>
                </div>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-500 text-white px-8 h-12 rounded-full transition-all hover:scale-105 whitespace-nowrap" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
                Schedule Store Audit <ArrowRight className="ml-2 h-5 w-5" />
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
            <span className="text-blue-100 font-semibold text-lg">REINVENT YOUR RETAIL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 tracking-tight px-4 sm:px-0">
            Ready to Unify Your Commerce?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Get a free retail strategy assessment and discover how unified commerce can drive growth, loyalty, and competitive advantage.
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
              <ShoppingCart className="h-5 w-5" />
              <span>Omnichannel audit included</span>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Retail;