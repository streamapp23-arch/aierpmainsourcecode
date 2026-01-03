import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutRoadmap from "@/components/AboutRoadmap";
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
  Award,
  Users,
  Globe,
  Heart,
  Lightbulb,
  Target,
  Rocket,
  Briefcase,
  UserCheck
} from "lucide-react";
import founderImage from "@/assets/founder-jafer-ali.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-cyan-500/20">
      <SEO
        title="About Us | Leading ERP & AI Experts"
        description="Meet the team behind AIERP Partners. 25+ years of experience delivering Big4-quality ERP and AI solutions to Fortune 500 companies worldwide."
        keywords="ERP consultants, AI experts, enterprise software team, digital transformation consultants"
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
            Who We Are
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6 sm:mb-8 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Architects of the<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Intelligent Enterprise</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 px-4 sm:px-0">
            We are a team of visionaries, engineers, and strategists dedicated to transforming how the world does business through AI-driven ERP solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300 px-4 sm:px-0">
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 sm:px-10 h-14 sm:h-16 text-base sm:text-xl shadow-xl shadow-cyan-900/50 rounded-full transition-all hover:scale-105 w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
              Meet Our Team
              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
            <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-8 sm:px-10 h-14 sm:h-16 text-base sm:text-xl rounded-full w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
              Join Our Mission
            </Button>
          </div>
        </div>
      </section>

      {/* Our Values Section with Flip Cards */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">Our Core Values</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed">
              The principles that drive every line of code we write and every partnership we build.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-cyan-50 flex items-center justify-center mb-6">
                    <Lightbulb className="h-8 w-8 text-cyan-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Innovation First</h3>
                  <p className="text-slate-500">We don't just follow trends; we set them. We constantly push the boundaries of what's possible with AI.</p>
                </>
              }
              backContent={
                <>
                  <Rocket className="h-12 w-12 mb-4 text-white/90" />
                  <h3 className="text-2xl font-bold mb-2">Future-Proofing</h3>
                  <p className="text-blue-100">Building solutions today that will still be relevant tomorrow. Continuous evolution is in our DNA.</p>
                </>
              }
            />
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                    <Heart className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Customer Obsession</h3>
                  <p className="text-slate-500">Your success is our success. We go above and beyond to ensure our clients achieve their goals.</p>
                </>
              }
              backContent={
                <>
                  <UserCheck className="h-12 w-12 mb-4 text-white/90" />
                  <h3 className="text-2xl font-bold mb-2">Partnership</h3>
                  <p className="text-blue-100">We are not just vendors; we are strategic partners invested in your long-term growth.</p>
                </>
              }
            />
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-purple-50 flex items-center justify-center mb-6">
                    <Shield className="h-8 w-8 text-purple-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Integrity & Trust</h3>
                  <p className="text-slate-500">We believe in transparency, honesty, and doing the right thing, even when no one is watching.</p>
                </>
              }
              backContent={
                <>
                  <CheckCircle2 className="h-12 w-12 mb-4 text-white/90" />
                  <h3 className="text-2xl font-bold mb-2">Reliability</h3>
                  <p className="text-blue-100">You trust us with your critical business data. We take that responsibility incredibly seriously.</p>
                </>
              }
            />
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-teal-50 flex items-center justify-center mb-6">
                    <Target className="h-8 w-8 text-teal-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Excellence</h3>
                  <p className="text-slate-500">Good enough is never enough. We strive for perfection in every pixel and every process.</p>
                </>
              }
              backContent={
                <>
                  <Award className="h-12 w-12 mb-4 text-white/90" />
                  <h3 className="text-2xl font-bold mb-2">Quality</h3>
                  <p className="text-blue-100">Delivering robust, high-performance, and bug-free software that you can rely on.</p>
                </>
              }
            />
          </div>
        </div>
      </section>

      {/* Animated Roadmap */}
      <AboutRoadmap />

      {/* Global Impact */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Global Impact</h2>
            <p className="text-xl text-slate-600">Empowering businesses around the world</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="h-2 w-full bg-gradient-to-r from-green-400 to-emerald-400" />
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-green-500" />
                </div>
                <div className="text-5xl font-bold text-slate-900 mb-2">20+</div>
                <div className="text-slate-600 font-medium">Countries</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="h-2 w-full bg-gradient-to-r from-cyan-400 to-blue-400" />
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-cyan-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="h-8 w-8 text-cyan-500" />
                </div>
                <div className="text-5xl font-bold text-slate-900 mb-2">500+</div>
                <div className="text-slate-600 font-medium">Enterprise Clients</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="h-2 w-full bg-gradient-to-r from-purple-400 to-pink-400" />
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-purple-500" />
                </div>
                <div className="text-5xl font-bold text-slate-900 mb-2">10k+</div>
                <div className="text-slate-600 font-medium">Users Empowered</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="h-2 w-full bg-gradient-to-r from-orange-400 to-red-400" />
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-orange-500" />
                </div>
                <div className="text-5xl font-bold text-slate-900 mb-2">$2B+</div>
                <div className="text-slate-600 font-medium">Transactions Processed</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team (Placeholder for now, can be expanded) */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Meet the Minds</h2>
            <p className="text-xl text-slate-600">The leadership team driving our vision forward</p>
          </div>

          <div className="flex justify-center">
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group max-w-md">
              <div className="h-32 w-full bg-gradient-to-r from-cyan-400 to-blue-400 relative">
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-white p-1 shadow-lg">
                  <img 
                    src={founderImage} 
                    alt="Jafer Ali" 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <CardContent className="pt-12 pb-8 text-center px-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">Jafer Ali</h3>
                <div className="text-cyan-600 font-semibold mb-4">Founder & CEO</div>
                <p className="text-slate-600 leading-relaxed">Visionary leader with 25+ years in enterprise software and AI. Leading Fortune 500 digital transformations and delivering measurable ROI through AI-powered ERP solutions.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-gradient-to-br from-cyan-900 to-blue-900">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-sm border border-white/20">
            <Sparkles className="w-5 h-5 text-cyan-300" />
            <span className="text-cyan-100 font-semibold text-sm">JOIN THE REVOLUTION</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-2xl text-cyan-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Partner with us to build a smarter, faster, and more efficient future for your enterprise.
          </p>
          <div className="pt-4">
            <Button size="lg" className="bg-white text-cyan-900 hover:bg-cyan-50 px-12 h-20 text-2xl font-bold shadow-2xl rounded-full transition-transform hover:scale-105" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
              Get Started <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default About;
