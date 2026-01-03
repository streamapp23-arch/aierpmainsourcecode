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
    CheckCircle,
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
    Users,
    Shield,
    Database,
    Clock,
    Bell,
    Search,
    Filter,
    AlertCircle,
    TargetIcon,
    Brain,
    Cpu,
    LineChart,
    Phone,
    MessageCircle,
    MailCheck,
    SmartphoneIcon,
    WifiOff,
    Calendar,
    FileText,
    Upload
} from "lucide-react";

import SEO from "@/components/SEO";

const ZohoCRM = () => {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-brand-blue/20">
            <SEO
                title="Zoho CRM Solutions | Consulting & Implementation"
                description="Transform your customer relationships with Zoho CRM. We build custom Zoho solutions to detailed automation, omnichannel engagement, and AI-driven sales."
                keywords="Zoho CRM, Zoho Consultants, CRM Automation, Zia AI, Sales Pipeline, Zoho Partner"
                canonicalUrl="https://www.aierppartners.com/zoho-crm"
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
                        name: "Zoho CRM",
                        url: "/zoho-crm"
                    }
                ]}
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "Zoho CRM Solutions",
                    "provider": {
                        "@type": "Organization",
                        "name": "AIERP Partners"
                    },
                    "description": "Professional Zoho CRM implementation, consulting, and customization services.",
                    "serviceType": "CRM Consulting"
                }}
            />
            <Header />

            {/* Hero Section */}
            <section className="relative pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 px-4 overflow-hidden bg-white">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-brand-blue/10 via-transparent to-transparent" />

                <div className="container mx-auto max-w-6xl relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs sm:text-sm font-semibold mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500 shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
                        </span>
                        Authorized Zoho Partners
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-slate-900 tracking-tight mb-6 sm:mb-8 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                        Supercharge Your Sales <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-600">with Zoho CRM</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 px-4 sm:px-0">
                        Connect with customers across every channel. Automate routine tasks and let Zia AI predict the future of your business.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300 px-4 sm:px-0">
                        <Button size="lg" className="bg-brand-blue hover:bg-blue-700 text-white px-8 sm:px-10 h-14 sm:h-16 text-base sm:text-xl shadow-xl shadow-blue-200 rounded-full transition-all hover:scale-105 w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
                            Explore Zoho Solutions
                            <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
                        </Button>
                        <Button size="lg" variant="outline" className="border-brand-blue/30 text-brand-blue hover:bg-brand-blue/10 px-8 sm:px-10 h-14 sm:h-16 text-base sm:text-xl rounded-full w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
                            Watch Demo
                        </Button>
                    </div>
                </div>
            </section>

            {/* The Problem: Flip Cards */}
            <section className="py-12 sm:py-16 md:py-24 px-4 bg-slate-50">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">Experience the difference</h2>
                        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed">
                            Move beyond basic contact management. Zoho CRM brings enterprise intelligence to your sales floor.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        <FlipCard
                            frontContent={
                                <>
                                    <div className="h-16 w-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                                        <Headphones className="h-8 w-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Missed Opportunities</h3>
                                    <p className="text-slate-500">Leads calling when you're busy or away from your desk.</p>
                                    <ul className="mt-4 text-sm text-slate-600 space-y-1 text-left">
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                                            Voicemails going unreturned for days
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                                            No call recording or transcriptions
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                                            Limited call analytics and reporting
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                                            Manual call logging and follow-ups
                                        </li>
                                    </ul>
                                </>
                            }
                            backContent={
                                <div className="text-left w-full h-full flex flex-col justify-center">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 rounded-lg bg-white/20">
                                            <Phone className="h-8 w-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white">Omnichannel Mastery</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2 text-sm text-blue-50">
                                            <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
                                            <span>Unified timeline for every interaction</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-sm text-blue-50">
                                            <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
                                            <span>Real-time phone and chat integration</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-sm text-blue-50">
                                            <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
                                            <span>Universal history across all platforms</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-sm text-blue-50">
                                            <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
                                            <span>Automated call logging with AI transcriptions</span>
                                        </li>
                                    </ul>
                                </div>
                            }
                        />
                        <FlipCard
                            frontContent={
                                <>
                                    <div className="h-16 w-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                                        <Repeat className="h-8 w-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Repetitive Tasks</h3>
                                    <p className="text-slate-500">Sales reps wasting 30% of their time on data entry.</p>
                                    <ul className="mt-4 text-sm text-slate-600 space-y-1 text-left">
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                                            Manual data entry for every lead
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                                            Copy-pasting information between systems
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                                            No automated follow-up sequences
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                                            Manual report generation each week
                                        </li>
                                    </ul>
                                </>
                            }
                            backContent={
                                <div className="text-left w-full h-full flex flex-col justify-center">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 rounded-lg bg-white/20">
                                            <Zap className="h-8 w-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white">Blueprint Engine</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2 text-sm text-blue-50">
                                            <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
                                            <span>Visual process flow designers</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-sm text-blue-50">
                                            <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
                                            <span>Automated follow-up sequences</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-sm text-blue-50">
                                            <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
                                            <span>Data entry reduction by 40%+</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-sm text-blue-50">
                                            <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
                                            <span>Scheduled report generation and distribution</span>
                                        </li>
                                    </ul>
                                </div>
                            }
                        />
                        <FlipCard
                            frontContent={
                                <>
                                    <div className="h-16 w-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                                        <Layers className="h-8 w-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Blind Spots</h3>
                                    <p className="text-slate-500">Not knowing which leads are hot and which are cold.</p>
                                    <ul className="mt-4 text-sm text-slate-600 space-y-1 text-left">
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                                            Manual lead scoring with guesswork
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                                            No predictive analytics for sales
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                                            Limited visibility into deal health
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                                            Reactive instead of proactive sales management
                                        </li>
                                    </ul>
                                </>
                            }
                            backContent={
                                <div className="text-left w-full h-full flex flex-col justify-center">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 rounded-lg bg-white/20">
                                            <Brain className="h-8 w-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white">Zia Intelligence</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2 text-sm text-blue-50">
                                            <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
                                            <span>AI-powered dynamic lead scoring</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-sm text-blue-50">
                                            <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
                                            <span>Predict deal outcomes with data</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-sm text-blue-50">
                                            <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
                                            <span>Automated anomaly detection</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-sm text-blue-50">
                                            <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
                                            <span>Real-time sales forecasting with confidence scores</span>
                                        </li>
                                    </ul>
                                </div>
                            }
                        />
                    </div>
                </div>
            </section>

            {/* Interactive Capabilities */}
            <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">The Zoho Ecosystem</h2>
                        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4 sm:px-0">
                            More than just a CRM. It's an operating system for your business.
                        </p>
                    </div>

                    <Tabs defaultValue="zia" className="w-full max-w-5xl mx-auto">
                        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8 sm:mb-12 h-auto p-2 bg-slate-100 rounded-2xl gap-2 sm:gap-0">
                            <TabsTrigger value="zia" className="py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium data-[state=active]:bg-white data-[state=active]:text-brand-blue data-[state=active]:shadow-md transition-all">
                                <Brain className="h-5 w-5 mr-2" />
                                Zia AI
                            </TabsTrigger>
                            <TabsTrigger value="automation" className="py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium data-[state=active]:bg-white data-[state=active]:text-brand-blue data-[state=active]:shadow-md transition-all">
                                <Zap className="h-5 w-5 mr-2" />
                                Automation
                            </TabsTrigger>
                            <TabsTrigger value="analytics" className="py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium data-[state=active]:bg-white data-[state=active]:text-brand-blue data-[state=active]:shadow-md transition-all">
                                <LineChart className="h-5 w-5 mr-2" />
                                Analytics
                            </TabsTrigger>
                            <TabsTrigger value="communication" className="py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium data-[state=active]:bg-white data-[state=active]:text-brand-blue data-[state=active]:shadow-md transition-all">
                                <MessageCircle className="h-5 w-5 mr-2" />
                                Communication
                            </TabsTrigger>
                            <TabsTrigger value="mobile" className="py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium data-[state=active]:bg-white data-[state=active]:text-brand-blue data-[state=active]:shadow-md transition-all">
                                <Smartphone className="h-5 w-5 mr-2" />
                                Mobile
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="zia" className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                                <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-500 cursor-default group bg-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-bl-full -mr-12 -mt-12 transition-all duration-500 group-hover:scale-150 group-hover:bg-blue-600/5 -z-0" />
                                    <CardHeader className="relative z-10">
                                        <CardTitle className="flex items-center gap-4 text-2xl">
                                            <div className="p-3 rounded-xl bg-blue-50 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                                <Target className="h-6 w-6" />
                                            </div>
                                            Lead Predictions
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="relative z-10">
                                        <p className="text-slate-600 mb-4 text-base leading-relaxed">
                                            Zia AI analyzes historical data to predict which leads are most likely to convert, helping your team focus on high-potential opportunities.
                                        </p>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3 text-slate-600 text-base leading-snug">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                                <span>Historical win-probability analysis</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base leading-snug">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                                <span>Smart deal focus prioritization</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base leading-snug">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                                <span>Real-time pipeline health alerts</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base leading-snug">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                                <span>Automated lead scoring based on engagement patterns</span>
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>
                                <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-500 cursor-default group bg-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-bl-full -mr-12 -mt-12 transition-all duration-500 group-hover:scale-150 group-hover:bg-blue-600/5 -z-0" />
                                    <CardHeader className="relative z-10">
                                        <CardTitle className="flex items-center gap-4 text-2xl">
                                            <div className="p-3 rounded-xl bg-blue-50 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                                <MessageSquare className="h-6 w-6" />
                                            </div>
                                            Voice Assistant
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="relative z-10">
                                        <p className="text-slate-600 mb-4 text-base leading-relaxed">
                                            Interact with your CRM using natural language. Zia understands commands and provides instant insights without complex navigation.
                                        </p>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3 text-slate-600 text-base leading-snug">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                                <span>Natural language report generation</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base leading-snug">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                                <span>Hands-free note taking & logging</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base leading-snug">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                                <span>Instant customer records retrieval</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base leading-snug">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                                <span>Voice-activated data updates and searches</span>
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        <TabsContent value="automation" className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                                <Card className="border-2 border-slate-100 hover:border-blue-500/30 hover:shadow-xl transition-all duration-300 cursor-default group bg-white">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-4 text-2xl">
                                            <div className="p-3 rounded-xl bg-blue-50 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                                <Workflow className="h-6 w-6" />
                                            </div>
                                            Workflow Rules
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-slate-600 mb-4 text-base leading-relaxed">
                                            Trigger instant actions based on specific conditions. Send a welcome email when a lead is created or alert a manager if a deal stalls.
                                        </p>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3 text-slate-600 text-base">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                                <span>Condition-based email automation</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                                <span>Task creation and assignment rules</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                                <span>Field update automation</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                                <span>Multi-step approval workflows</span>
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>
                                <Card className="border-2 border-slate-100 hover:border-blue-500/30 hover:shadow-xl transition-all duration-300 cursor-default group bg-white">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-4 text-2xl">
                                            <div className="p-3 rounded-xl bg-blue-50 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                                <Share2 className="h-6 w-6" />
                                            </div>
                                            Omnichannel Routing
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-slate-600 mb-4 text-base leading-relaxed">
                                            Automatically route leads to the right salesperson based on territory, product interest, or language, ensuring faster response times.
                                        </p>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3 text-slate-600 text-base">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                                <span>Territory-based lead distribution</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                                <span>Round-robin assignment for fairness</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                                <span>Skill-based routing for complex queries</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                                <span>Language preference matching</span>
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        <TabsContent value="analytics" className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                                <Card className="border-2 border-slate-100 hover:border-blue-500/30 hover:shadow-xl transition-all duration-300 cursor-default group bg-white">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-4 text-2xl">
                                            <div className="p-3 rounded-xl bg-blue-50 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                                <PieChart className="h-6 w-6" />
                                            </div>
                                            Advanced Dashboards
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-slate-600 mb-4 text-base leading-relaxed">
                                            Build custom dashboards with drag-and-drop ease. Visualize your sales funnel, activity reports, and KPI targets in real-time.
                                        </p>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3 text-slate-600 text-base">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                                <span>Drag-and-drop dashboard builder</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                                <span>Real-time sales performance metrics</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                                <span>Custom KPI tracking and visualization</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                                <span>Role-specific dashboard views</span>
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>
                                <Card className="border-2 border-slate-100 hover:border-blue-500/30 hover:shadow-xl transition-all duration-300 cursor-default group bg-white">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-4 text-2xl">
                                            <div className="p-3 rounded-xl bg-blue-50 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                                <BarChart className="h-6 w-6" />
                                            </div>
                                            Anomaly Detection
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-slate-600 mb-4 text-base leading-relaxed">
                                            Zia constantly monitors your sales trends and alerts you instantly if there's a significant deviation from the expected performance.
                                        </p>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3 text-slate-600 text-base">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                                <span>Real-time sales trend monitoring</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                                <span>Predictive anomaly alerts</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                                <span>Seasonal pattern recognition</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                                <span>Automated root cause analysis suggestions</span>
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        <TabsContent value="communication" className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                                <Card className="border-2 border-slate-100 hover:border-blue-500/30 hover:shadow-xl transition-all duration-300 cursor-default group bg-white">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-4 text-2xl">
                                            <div className="p-3 rounded-xl bg-blue-50 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                                <MailCheck className="h-6 w-6" />
                                            </div>
                                            Email Integration
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-slate-600 mb-4 text-base leading-relaxed">
                                            Connect your inbox to see full customer context within every email. Track opens, clicks, and bounce rates automatically.
                                        </p>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3 text-slate-600 text-base">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                                <span>Unified inbox for all email accounts</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                                <span>Email open and click tracking</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                                <span>Automated email categorization</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                                <span>Template library for consistent messaging</span>
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>
                                <Card className="border-2 border-slate-100 hover:border-blue-500/30 hover:shadow-xl transition-all duration-300 cursor-default group bg-white">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-4 text-2xl">
                                            <div className="p-3 rounded-xl bg-blue-50 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                                <Bell className="h-6 w-6" />
                                            </div>
                                            SalesSignals
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-slate-600 mb-4 text-base leading-relaxed">
                                            Get real-time notifications when a prospect visits your site, opens an email, or mentions you on social media.
                                        </p>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3 text-slate-600 text-base">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                                <span>Website visitor tracking</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                                <span>Social media mention alerts</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                                <span>Email engagement notifications</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                                <span>Real-time lead scoring updates</span>
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        <TabsContent value="mobile" className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                                <Card className="border-2 border-slate-100 hover:border-blue-500/30 hover:shadow-xl transition-all duration-300 cursor-default group bg-white">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-4 text-2xl">
                                            <div className="p-3 rounded-xl bg-blue-50 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                                <SmartphoneIcon className="h-6 w-6" />
                                            </div>
                                            On The Go
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-slate-600 mb-4 text-base leading-relaxed">
                                            Access your entire database from your pocket. Scan business cards, locate nearby prospects, and log calls instantly.
                                        </p>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3 text-slate-600 text-base">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                                <span>Mobile contact and lead management</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                                <span>Business card scanning with OCR</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                                <span>Location-based prospect discovery</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                                <span>Instant meeting scheduling and reminders</span>
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>
                                <Card className="border-2 border-slate-100 hover:border-blue-500/30 hover:shadow-xl transition-all duration-300 cursor-default group bg-white">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-4 text-2xl">
                                            <div className="p-3 rounded-xl bg-blue-50 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                                <WifiOff className="h-6 w-6" />
                                            </div>
                                            Offline Access
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-slate-600 mb-4 text-base leading-relaxed">
                                            No internet? No problem. Add, modify, or delete records while offline, and everything syncs automatically when you're back online.
                                        </p>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3 text-slate-600 text-base">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                                <span>Full offline record management</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                                <span>Automatic sync when connection restored</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                                <span>Conflict resolution for offline edits</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                                <span>Local data encryption for security</span>
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            {/* Blueprint Automation */}
            <section className="py-20 px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Process Compliance Guaranteed</h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            Ensure every lead is handled the same way. Blueprint mandates specific actions at every stage of the pipeline.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-none relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-bl-full -mr-12 -mt-12 transition-all duration-500 group-hover:scale-150 group-hover:bg-blue-600/5 -z-0" />
                            <div className="relative z-10 text-left">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-all duration-300 shadow-sm">
                                    <GitBranch className="w-8 h-8 text-blue-600 group-hover:text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Define Transitions</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-slate-600 text-base">
                                        <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                        <span>Locked stage field controls</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-600 text-base">
                                        <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                        <span>Mandatory stage checklists</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-600 text-base">
                                        <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                        <span>Linear sales process enforcement</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-600 text-base">
                                        <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                        <span>Stage transition validation rules</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-none relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-bl-full -mr-12 -mt-12 transition-all duration-500 group-hover:scale-150 group-hover:bg-blue-600/5 -z-0" />
                            <div className="relative z-10 text-left">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-all duration-300 shadow-sm">
                                    <Workflow className="w-8 h-8 text-blue-600 group-hover:text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Mandatory Data</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-slate-600 text-base">
                                        <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                        <span>Critical field validation checks</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-600 text-base">
                                        <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                        <span>Required document attachments</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-600 text-base">
                                        <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                        <span>Quote & proposal prerequisites</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-600 text-base">
                                        <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                        <span>Competitor analysis requirements</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-none relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-bl-full -mr-12 -mt-12 transition-all duration-500 group-hover:scale-150 group-hover:bg-blue-600/5 -z-0" />
                            <div className="relative z-10 text-left">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-all duration-300 shadow-sm">
                                    <Bot className="w-8 h-8 text-blue-600 group-hover:text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Automated Actions</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-slate-600 text-base">
                                        <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                        <span>Instant email triggers on exit</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-600 text-base">
                                        <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                        <span>Dynamic task assignment logic</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-600 text-base">
                                        <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                        <span>Automated tag & status updates</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-600 text-base">
                                        <CheckCircle className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                        <span>Notification to managers on deal movement</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Beyond CRM - Ecosystem */}
            <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50/50">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Unify Your Business with Zoho One</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Zoho CRM is the heart of the "Operating System for Business". We can connect it natively to 45+ other Zoho applications.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                                    <Megaphone className="w-5 h-5 text-blue-500" />
                                    <span className="font-semibold text-slate-700">Marketing Automation</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                                    <Headphones className="w-5 h-5 text-blue-500" />
                                    <span className="font-semibold text-slate-700">Desk & Support</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                                    <Briefcase className="w-5 h-5 text-blue-500" />
                                    <span className="font-semibold text-slate-700">Project Management</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                                    <BarChart className="w-5 h-5 text-blue-500" />
                                    <span className="font-semibold text-slate-700">Finance & Books</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="relative">
                                <div className="absolute top-10 left-10 w-24 h-24 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                                <div className="absolute top-10 right-10 w-24 h-24 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                                <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100 relative z-10">
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">Implementation Services</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-center gap-3 text-slate-600">
                                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs">1</div>
                                            <span>Requirement Analysis & Consulting</span>
                                        </li>
                                        <li className="flex items-center gap-3 text-slate-600">
                                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs">2</div>
                                            <span>Data Migration & Cleansing</span>
                                        </li>
                                        <li className="flex items-center gap-3 text-slate-600">
                                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs">3</div>
                                            <span>Customization (Canvas, Blueprint, Deluge)</span>
                                        </li>
                                        <li className="flex items-center gap-3 text-slate-600">
                                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs">4</div>
                                            <span>User Training & Go-Live Support</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Process */}
            <IntegrationRoadmap />

            {/* FAQ */}
            <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-slate-900">Zoho CRM FAQ</h2>
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        <AccordionItem value="item-1" className="border rounded-xl px-4 hover:bg-slate-50 transition-colors">
                            <AccordionTrigger className="text-xl font-medium text-slate-900">Can Zoho CRM scale with my business?</AccordionTrigger>
                            <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-4">
                                Yes. Zoho CRM is used by startups and Fortune 500 companies alike. It offers unlimited customization and supports millions of records.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border rounded-xl px-4 hover:bg-slate-50 transition-colors">
                            <AccordionTrigger className="text-xl font-medium text-slate-900">Does it integrate with other apps?</AccordionTrigger>
                            <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-4">
                                Zoho CRM has a marketplace with over 1000+ extensions and integrations including Google Workspace, Microsoft 365, Mailchimp, and Zapier.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="border rounded-xl px-4 hover:bg-slate-50 transition-colors">
                            <AccordionTrigger className="text-xl font-medium text-slate-900">What makes Zia AI special?</AccordionTrigger>
                            <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-4">
                                Unlike generic AI, Zia is built specifically for sales. It learns from your unique data patterns to offer personalized suggestions that actually improve performance.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-12 sm:py-16 md:py-24 px-4 bg-gradient-to-br from-brand-blue to-blue-600">
                <div className="container mx-auto max-w-4xl text-center text-white">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 tracking-tight px-4 sm:px-0">Ready to Upgrade Your Sales Stack?</h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
                        Get a tailored Zoho CRM implementation that fits your business like a glove.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button size="lg" className="bg-white text-brand-blue hover:bg-blue-50 px-8 sm:px-12 h-16 sm:h-20 text-lg sm:text-xl md:text-2xl font-bold shadow-2xl rounded-full transition-transform hover:scale-105 w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
                            Request Free Demo
                            <ArrowRight className="ml-3 h-6 w-6 sm:h-7 sm:w-7" />
                        </Button>
                    </div>
                    <p className="mt-8 text-blue-200 font-medium">⚡ 45% Increase in Customer Retention • ✓ Custom Workflows • ✓ 24/7 Support</p>
                </div>
            </section>

            <WhatsAppButton />
            <Footer />
        </div>
    );
};

export default ZohoCRM;