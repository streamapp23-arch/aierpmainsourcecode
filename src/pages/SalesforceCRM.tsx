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
import { FlipCard } from "@/components/FlipCard";
import IntegrationRoadmap from "@/components/IntegrationRoadmap";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
    ArrowRight,
    TrendingUp,
    Zap,
    Globe,
    MessageSquare,
    BarChart,
    Bot,
    Layers,
    Repeat,
    Headphones,
    Smartphone,
    PieChart,
    Mail,
    Share2,
    Palette,
    Workflow,
    Sparkles,
    GitBranch,
    Target,
    Megaphone,
    Briefcase,
    Cloud,
    Database
} from "lucide-react";

import SEO from "@/components/SEO";

const SalesforceCRM = () => {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-blue-500/20">
            <SEO
                title="Salesforce CRM Solutions | Consulting & Implementation"
                description="Maximize your Salesforce investment. Expert implementation, customization, and AI-driven automation for Sales, Service, and Marketing Clouds."
                keywords="Salesforce CRM, Salesforce Implementation, Sales Cloud, Service Cloud, Einstein AI, Salesforce Partner"
                canonicalUrl="https://www.aierppartners.com/salesforce"
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
                        name: "Salesforce CRM",
                        url: "/salesforce"
                    }
                ]}
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "Salesforce CRM Solutions",
                    "provider": {
                        "@type": "Organization",
                        "name": "AIERP Partners"
                    },
                    "description": "Professional Salesforce CRM implementation, consulting, and customization services.",
                    "serviceType": "CRM Consulting"
                }}
            />
            <Header />

            {/* Hero Section */}
            <section className="relative pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 px-4 overflow-hidden bg-white">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-100/50 via-transparent to-transparent" />

                <div className="container mx-auto max-w-6xl relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500 shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Salesforce Partners
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-slate-900 tracking-tight mb-6 sm:mb-8 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                        The World's #1 CRM <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Reimagined for You</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 px-4 sm:px-0">
                        Unite marketing, sales, commerce, service, and IT teams from anywhere with Customer 360. Implement smarter with our expert guidance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300 px-4 sm:px-0">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 sm:px-10 h-14 sm:h-16 text-base sm:text-xl shadow-xl shadow-blue-200 rounded-full transition-all hover:scale-105 w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
                            Start Your Journey
                            <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
                        </Button>
                        <Button size="lg" variant="outline" className="border-slate-200 text-slate-700 hover:bg-slate-50 px-8 sm:px-10 h-14 sm:h-16 text-base sm:text-xl rounded-full w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
                            Watch Overview
                        </Button>
                    </div>
                </div>
            </section>

            {/* The Problem: Flip Cards */}
            <section className="py-12 sm:py-16 md:py-24 px-4 bg-slate-50">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">Unlock Full Potential</h2>
                        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed">
                            Don't let complex processes slow you down. We optimize Salesforce to work the way your business does.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        <FlipCard
                            frontContent={
                                <>
                                    <div className="h-16 w-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                                        <Database className="h-8 w-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Data Silos</h3>
                                    <p className="text-slate-500">Customer data trapped in disconnected systems.</p>
                                </>
                            }
                            backContent={
                                <>
                                    <Cloud className="h-12 w-12 mb-4 text-white/90" />
                                    <h3 className="text-2xl font-bold mb-2">Customer 360</h3>
                                    <p className="text-blue-100">A single source of truth connecting marketing, sales, commerce, and service.</p>
                                </>
                            }
                        />
                        <FlipCard
                            frontContent={
                                <>
                                    <div className="h-16 w-16 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6">
                                        <Repeat className="h-8 w-8 text-indigo-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Manual Workflows</h3>
                                    <p className="text-slate-500">Sales teams bogged down by manual data entry and approvals.</p>
                                </>
                            }
                            backContent={
                                <>
                                    <Zap className="h-12 w-12 mb-4 text-white/90" />
                                    <h3 className="text-2xl font-bold mb-2">Flow Automation</h3>
                                    <p className="text-blue-100">Drag-and-drop process automation to streamline every business function.</p>
                                </>
                            }
                        />
                        <FlipCard
                            frontContent={
                                <>
                                    <div className="h-16 w-16 rounded-2xl bg-sky-50 flex items-center justify-center mb-6">
                                        <Layers className="h-8 w-8 text-sky-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Blind Spots</h3>
                                    <p className="text-slate-500">Making decisions without real-time insights or predictive data.</p>
                                </>
                            }
                            backContent={
                                <>
                                    <Bot className="h-12 w-12 mb-4 text-white/90" />
                                    <h3 className="text-2xl font-bold mb-2">Einstein AI</h3>
                                    <p className="text-blue-100">Built-in AI that predicts outcomes, recommends best actions, and automates tasks.</p>
                                </>
                            }
                        />
                    </div>
                </div>
            </section>

            {/* Interactive Capabilities */}
            <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">The Salesforce Advantage</h2>
                        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4 sm:px-0">
                            Comprehensive solutions for every aspect of your customer relationship.
                        </p>
                    </div>

                    <Tabs defaultValue="einstein" className="w-full max-w-5xl mx-auto">
                        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8 sm:mb-12 h-auto p-2 bg-slate-100 rounded-2xl gap-2 sm:gap-0">
                            <TabsTrigger value="einstein" className="py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-md transition-all">
                                Einstein AI
                            </TabsTrigger>
                            <TabsTrigger value="sales" className="py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-md transition-all">
                                Sales Cloud
                            </TabsTrigger>
                            <TabsTrigger value="service" className="py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-md transition-all">
                                Service Cloud
                            </TabsTrigger>
                            <TabsTrigger value="marketing" className="py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-md transition-all">
                                Marketing
                            </TabsTrigger>
                            <TabsTrigger value="platform" className="py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-md transition-all">
                                Platform
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="einstein" className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                                <Card className="border-2 border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 cursor-default group bg-white">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-4 text-2xl">
                                            <div className="p-3 rounded-xl bg-purple-50 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                                                <Bot className="h-6 w-6" />
                                            </div>
                                            Predictive Scoring
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-slate-600 text-lg leading-relaxed">
                                        Automatically score leads and opportunities based on historical data to prioritize the deals most likely to close.
                                    </CardContent>
                                </Card>
                                <Card className="border-2 border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 cursor-default group bg-white">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-4 text-2xl">
                                            <div className="p-3 rounded-xl bg-blue-50 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                                <MessageSquare className="h-6 w-6" />
                                            </div>
                                            Next Best Action
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-slate-600 text-lg leading-relaxed">
                                        Deliver the right offer at the right time. Einstein recommends the optimal next step for every customer interaction.
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        <TabsContent value="sales" className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                                <Card className="border-2 border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 cursor-default group bg-white">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-4 text-2xl">
                                            <div className="p-3 rounded-xl bg-green-50 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                                <TrendingUp className="h-6 w-6" />
                                            </div>
                                            Pipeline Management
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-slate-600 text-lg leading-relaxed">
                                        Get a complete view of your opportunities. Drag-and-drop deals, track stages, and forecast revenue with precision.
                                    </CardContent>
                                </Card>
                                <Card className="border-2 border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 cursor-default group bg-white">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-4 text-2xl">
                                            <div className="p-3 rounded-xl bg-orange-50 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                                <Briefcase className="h-6 w-6" />
                                            </div>
                                            CPQ Solutions
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-slate-600 text-lg leading-relaxed">
                                        Configure, Price, Quote. Automate complex quoting processes to send error-free quotes and close deals faster.
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        <TabsContent value="service" className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                                <Card className="border-2 border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 cursor-default group bg-white">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-4 text-2xl">
                                            <div className="p-3 rounded-xl bg-teal-50 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                                                <Headphones className="h-6 w-6" />
                                            </div>
                                            Omni-Channel Routing
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-slate-600 text-lg leading-relaxed">
                                        Automatically route cases from any channel (email, phone, chat, social) to the most appropriate agent.
                                    </CardContent>
                                </Card>
                                <Card className="border-2 border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 cursor-default group bg-white">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-4 text-2xl">
                                            <div className="p-3 rounded-xl bg-cyan-50 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                                                <Database className="h-6 w-6" />
                                            </div>
                                            Knowledge Base
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-slate-600 text-lg leading-relaxed">
                                        Empower agents and customers with easy access to articles, FAQs, and solutions to resolve issues quickly.
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        <TabsContent value="marketing" className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                                <Card className="border-2 border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 cursor-default group bg-white">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-4 text-2xl">
                                            <div className="p-3 rounded-xl bg-pink-50 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                                                <Mail className="h-6 w-6" />
                                            </div>
                                            Journey Builder
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-slate-600 text-lg leading-relaxed">
                                        Create personalized, cross-channel customer journeys that deliver relevant messages at the right time.
                                    </CardContent>
                                </Card>
                                <Card className="border-2 border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 cursor-default group bg-white">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-4 text-2xl">
                                            <div className="p-3 rounded-xl bg-violet-50 group-hover:bg-violet-500 group-hover:text-white transition-colors">
                                                <Share2 className="h-6 w-6" />
                                            </div>
                                            Social Studio
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-slate-600 text-lg leading-relaxed">
                                        Listen, engage, and publish across social media channels to build brand loyalty and address customer needs.
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        <TabsContent value="platform" className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                                <Card className="border-2 border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 cursor-default group bg-white">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-4 text-2xl">
                                            <div className="p-3 rounded-xl bg-yellow-50 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                                                <Zap className="h-6 w-6" />
                                            </div>
                                            AppExchange
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-slate-600 text-lg leading-relaxed">
                                        Extend the power of Salesforce with thousands of ready-to-install apps and components from the AppExchange.
                                    </CardContent>
                                </Card>
                                <Card className="border-2 border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 cursor-default group bg-white">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-4 text-2xl">
                                            <div className="p-3 rounded-xl bg-indigo-50 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                                                <Cloud className="h-6 w-6" />
                                            </div>
                                            Lightning Platform
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-slate-600 text-lg leading-relaxed">
                                        Build custom apps quickly with low-code tools. Automate processes and connect data to create seamless experiences.
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            {/* Integration Section */}
            <IntegrationRoadmap />

            {/* FAQ */}
            <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-slate-900">Salesforce FAQ</h2>
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        <AccordionItem value="item-1" className="border rounded-xl px-4 hover:bg-slate-50 transition-colors">
                            <AccordionTrigger className="text-xl font-medium text-slate-900">Why choose Salesforce over other CRMs?</AccordionTrigger>
                            <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-4">
                                Salesforce is the world's #1 CRM platform, offering unparalleled scalability, customization, and a vast ecosystem of apps. It grows with your business, from startup to enterprise.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border rounded-xl px-4 hover:bg-slate-50 transition-colors">
                            <AccordionTrigger className="text-xl font-medium text-slate-900">How long does implementation take?</AccordionTrigger>
                            <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-4">
                                Implementation timelines vary based on complexity, but a standard Sales Cloud setup typically takes 4-8 weeks. Our accelerated methodology ensures rapid time-to-value.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="border rounded-xl px-4 hover:bg-slate-50 transition-colors">
                            <AccordionTrigger className="text-xl font-medium text-slate-900">Can Salesforce integrate with my ERP?</AccordionTrigger>
                            <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-4">
                                Absolutely. We specialize in integrating Salesforce with major ERPs like SAP, Oracle, NetSuite, and Microsoft Dynamics, creating a unified flow of data across your organization.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-12 sm:py-16 md:py-24 px-4 bg-gradient-to-br from-blue-600 to-indigo-700">
                <div className="container mx-auto max-w-4xl text-center text-white">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 tracking-tight px-4 sm:px-0">Ready to Transform Your CRM?</h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
                        Get a tailored Salesforce implementation that drives growth and efficiency.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 sm:px-12 h-16 sm:h-20 text-lg sm:text-xl md:text-2xl font-bold shadow-2xl rounded-full transition-transform hover:scale-105 w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
                            Schedule Consultation
                            <ArrowRight className="ml-3 h-6 w-6 sm:h-7 sm:w-7" />
                        </Button>
                    </div>
                </div>
            </section>

            <WhatsAppButton />
            <Footer />
        </div>
    );
};

export default SalesforceCRM;
