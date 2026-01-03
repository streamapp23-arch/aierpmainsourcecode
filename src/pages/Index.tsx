import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Database, Zap, TrendingUp, Shield, Workflow, CheckCircle, ArrowRight, BarChart3, Boxes, Settings, Sparkles, Award, Users, Briefcase, TrendingUp as TrendingUpIcon, Quote, LayoutGrid, Bot, Cloud } from "lucide-react";
import founderImage from "@/assets/founder-jafer-ali.webp";
import Header from "@/components/Header";
import ClientLogos from "@/components/ClientLogos";
import Footer from "@/components/Footer";
import BeforeAfterComparison from "@/components/BeforeAfterComparison";
import ROICalculator from "@/components/ROICalculator";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      <SEO
        title="AI-Powered ERP Solutions | Transform Your Business"
        description="Leading ERP and AI integration experts. Transform your SAP, Oracle, and enterprise systems with intelligent automation, predictive analytics, and AI-driven insights."
        keywords="AI ERP, SAP AI integration, Oracle ERP, enterprise resource planning, artificial intelligence"
        canonicalUrl="https://www.aierppartners.com/"
        schema={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "AIERP Partners",
          "url": "https://www.aierppartners.com/",
          "logo": "https://www.aierppartners.com/logo.png",
          "description": "Leading ERP and AI integration experts.",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
          }
        }}
      />
      <Header />

      {/* Hero Section - Premium Light */}
      <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-40">
        {/* Subtle Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px] opacity-60" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-50 rounded-full blur-[100px] opacity-60" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold tracking-wide"
            >
              <Sparkles className="w-4 h-4" />
              <span>Enterprise AI Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 leading-[1.1] px-4"
            >
              WE DELIVER <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                BIG4-QUALITY
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light px-4"
            >
              Turn your ERP into an intelligent system for faster decisions, predictive insights, and automation—your new competitive edge.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            >
              <Button
                size="lg"
                className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
                onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}
              >
                Book a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg rounded-full border-2 border-slate-200 hover:border-blue-200 hover:bg-blue-50 text-slate-700 transition-all duration-300 w-full sm:w-auto"
                onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}
              >
                Explore Solutions
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-sm text-slate-500 font-medium pt-8"
            >
              Unlock the AI inside your SAP and Oracle
            </motion.p>
          </div>
        </div>
      </section>

      <ClientLogos />

      {/* Who We Are - Clean & Minimal */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest">
                  Who We Are
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                  Your Partner in <br />
                  <span className="text-blue-600">Digital Transformation</span>
                </h2>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  We are a specialized IT services company at the intersection of ERP systems and Artificial Intelligence. With years of ERP expertise and cutting-edge AI innovation, we empower enterprises to transform into data-driven, intelligent, and agile businesses.
                </p>

                <div className="pt-4">
                  <Button variant="link" className="text-blue-600 p-0 h-auto text-lg font-semibold hover:text-blue-700 group" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
                    Learn More about our mission
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <StatsCard icon={Award} value="25+" label="Years of Excellence" />
                <StatsCard icon={Briefcase} value="500+" label="Enterprise Clients" delay={0.1} />
                <StatsCard icon={TrendingUpIcon} value="$50M+" label="Client Savings" delay={0.2} />
                <StatsCard icon={CheckCircle} value="100%" label="Client Satisfaction" delay={0.3} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - Premium Cards */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 px-4">
              Intelligent ERP Solutions
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed px-4">
              We design, implement, and optimize ERP platforms like SAP, Oracle, NetSuite, and Microsoft Dynamics—enhanced with AI-driven automation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="p-6 sm:p-8 border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white group hover:-translate-y-2 cursor-pointer flex flex-col items-start text-left h-full relative overflow-hidden"
                onClick={() => window.open(solution.link, '_self')}
              >
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-bl-full -mr-12 -mt-12 transition-all duration-500 group-hover:scale-150 group-hover:bg-blue-600/5 group-hover:rounded-none -z-0" />

                <div className="relative z-10 w-full flex flex-col h-full">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 shadow-sm group-hover:shadow-blue-200 transition-all duration-300">
                    <solution.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">
                    {solution.title}
                  </h3>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {solution.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm sm:text-base leading-snug">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 shrink-0 group-hover:text-blue-600" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-4 border-t border-slate-50">
                    <Button variant="link" className="p-0 h-auto text-blue-600 font-bold group-hover:text-blue-800 text-base flex items-center gap-2">
                      Explore Solution
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Clean Layout */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 px-4">Why Choose Us</h2>
              <p className="text-lg sm:text-xl text-slate-600 px-4">Partner with experts who deliver enterprise-grade results</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-slate-100">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before vs After */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-4">See the Difference</h2>
              <p className="text-white/60 px-4">Compare traditional ERP workflows with our AI-enhanced solutions</p>
            </div>
            <BeforeAfterComparison />
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 px-4">Real Impact</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {caseStudies.map((study, index) => (
                <Card key={index} className="p-6 sm:p-8 md:p-10 border border-slate-100 shadow-lg hover:shadow-xl transition-all">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-600 mb-4 sm:mb-6">{study.metric}</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">{study.title}</h3>
                  <p className="text-slate-600 text-base sm:text-lg">{study.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-semibold mb-6"
              >
                <Award className="w-4 h-4" />
                <span>Client Testimonials</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 px-4"
              >
                What Our Clients Say
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-slate-600 max-w-2xl mx-auto px-4"
              >
                Trusted by industry leaders who have experienced our transformative solutions
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full p-6 sm:p-8 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white group hover:-translate-y-2">
                    <div className="flex flex-col h-full">
                      <div className="mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-500 group-hover:to-indigo-500 transition-all duration-300">
                          <Quote className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <p className="text-slate-700 text-base sm:text-lg leading-relaxed italic mb-6">
                          "{testimonial.quote}"
                        </p>
                      </div>
                      <div className="mt-auto pt-6 border-t border-slate-100">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-sm">
                            {testimonial.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-bold text-slate-900 text-sm sm:text-base">{testimonial.name}</div>
                            <div className="text-slate-600 text-xs sm:text-sm">{testimonial.role}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <ROICalculator />
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[1fr,1fr] gap-12 sm:gap-16 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-3 opacity-10"></div>
                <img src={founderImage} alt="Jafer Ali" className="relative rounded-3xl shadow-2xl w-full" />
              </div>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-2">Jafer Ali</h2>
                  <p className="text-lg sm:text-xl text-blue-600 font-medium">Founder & Director</p>
                </div>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Leading Fortune 500 digital transformations for over two decades. Specializing in AI-powered ERP solutions that deliver measurable ROI. Successfully delivered 20+ major projects for companies like Pfizer, Regeneron, and T-Mobile.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <div className="text-3xl font-bold text-slate-900">25+</div>
                    <div className="text-sm text-slate-500">Years Experience</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <div className="text-3xl font-bold text-slate-900">500+</div>
                    <div className="text-sm text-slate-500">Projects Delivered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 sm:mb-8 px-4">Ready to transform?</h2>
          <Button
            size="lg"
            className="h-14 sm:h-16 px-8 sm:px-12 text-lg sm:text-xl rounded-full bg-white text-blue-600 hover:bg-blue-50 shadow-2xl transition-all hover:scale-105 w-full sm:w-auto max-w-sm"
            onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}
          >
            Get Started Now
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

// Helper Component for Stats
const StatsCard = ({ icon: Icon, value, label, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all"
  >
    <Icon className="w-8 h-8 text-blue-600 mb-3" />
    <div className="text-2xl font-bold text-slate-900">{value}</div>
    <div className="text-sm text-slate-500">{label}</div>
  </motion.div>
);

const solutions = [
  {
    icon: Sparkles,
    title: "ERP AI Development",
    points: [
      "Custom AI-driven module architecture",
      "Predictive models for data insights",
      "Automated decision-making logic",
      "Future-proof business infrastructure"
    ],
    link: "/erp-ai"
  },
  {
    icon: Workflow,
    title: "Oracle Integration",
    points: [
      "Intelligent system extensions",
      "Real-time financial close automation",
      "Supply chain optimization filters",
      "Custom high-reliability adaptors"
    ],
    link: "/oracle"
  },
  {
    icon: Boxes,
    title: "Open ERP Customization",
    points: [
      "Tailored open-source architecture",
      "Workflow-specific feature builds",
      "Removal of system redundancy",
      "Scalable competitive advantages"
    ],
    link: "/open-erp"
  },
  {
    icon: Settings,
    title: "Custom App Development",
    points: [
      "Ground-up bespoke software",
      "Legacy system modernization",
      "Scalable microservices design",
      "Strategic goal alignment"
    ],
    link: "/custom-application-development"
  },
  {
    icon: Database,
    title: "Open ERP",
    points: [
      "End-to-end environment deployment",
      "Flexible & cost-effective setups",
      "Full migration & data integrity",
      "Long-term operational support"
    ],
    link: "/open-erp"
  },
  {
    icon: Brain,
    title: "AI-Powered ERP",
    points: [
      "Forecast & anomaly detection",
      "Actionable predictive analytics",
      "Intelligent process automation",
      "Integrated decision intelligence"
    ],
    link: "/erp-ai"
  },
  {
    icon: LayoutGrid,
    title: "Odoo CRM",
    points: [
      "Sales pipeline optimization",
      "Automated customer follow-ups",
      "360-degree customer visibility",
      "Seamless cross-app integration"
    ],
    link: "/odoo-crm"
  },
  {
    icon: Bot,
    title: "Zoho CRM",
    points: [
      "Zia AI-powered sales tools",
      "Omnichannel customer engagement",
      "Repetitive task automation",
      "Real-time deal-closure predictions"
    ],
    link: "/zoho-crm"
  },
  {
    icon: Cloud,
    title: "Salesforce CRM",
    points: [
      "Einstein AI configuration",
      "Customer 360 implementation",
      "Custom flow development",
      "Enterprise stack integration"
    ],
    link: "/salesforce-crm"
  }
];

const benefits = [
  { icon: Shield, title: "Big4-Quality Expertise", description: "World-class consulting experience meets cutting-edge AI technology." },
  { icon: Workflow, title: "Seamless Integration", description: "Works harmoniously with your existing systems - no disruption." },
  { icon: TrendingUp, title: "Measurable ROI", description: "See results quickly with our proven methodology." },
  { icon: Zap, title: "Fast Implementation", description: "Rapid deployment strategies to get you running sooner." }
];

const caseStudies = [
  { metric: "30%", title: "Faster Decisions", description: "Global manufacturing leader reduced decision time by implementing predictive analytics." },
  { metric: "45%", title: "Process Automation", description: "Fortune 500 retailer automated critical workflows through AI-powered Oracle ERP integration." },
  { metric: "2.5x", title: "ROI Year One", description: "Mid-market enterprise achieved exceptional returns through custom AI-ERP development." },
  { metric: "99.9%", title: "Uptime Guaranteed", description: "Enterprise-grade reliability with continuous monitoring and proactive maintenance." }
];

const testimonials = [
  {
    quote: "Ai erp partners Experts did a great job and I would highly recommend them. They provided great service to our clients and represented us well",
    name: "IT Director",
    role: "T-Systems"
  },
  {
    quote: "Outstanding project delivery with importance to details. Best blend of technology, business and management skills. Excellent team and had clear great project vision",
    name: "IT Director",
    role: "SME Solutions, Implementation partner"
  },
  {
    quote: "Always stayed on top of projects and has delivered with care and on time",
    name: "IT Director",
    role: "SME Solutions, Implementation partner"
  }
];

export default Index;
