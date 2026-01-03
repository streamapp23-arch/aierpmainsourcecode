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
    LayoutGrid,
    Box,
    Users,
    AlertTriangle,
    CheckCircle,
    Receipt,
    Settings,
    Puzzle,
    Globe,
    BarChart,
    MessageSquare,
    ShieldCheck,
    Smartphone,
    Sparkles,
    Link2,
    PenTool,
    Cloud,
    Factory,
    ShoppingBag,
    Briefcase
} from "lucide-react";

import SEO from "@/components/SEO";

const OdooCRM = () => {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-brand-blue/20">
            <SEO
                title="Odoo CRM Services | Implementation & Integration"
                description="Streamline your sales process with our expert Odoo CRM implementation and integration services. Automate tasks, gain insights, and close more deals."
                keywords="Odoo CRM, CRM Implementation, Odoo Integration, Sales Automation, Odoo Partner, CRM Consulting"
                canonicalUrl="https://www.aierppartners.com/odoo-crm"
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
                        name: "Odoo CRM",
                        url: "/odoo-crm"
                    }
                ]}
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "Odoo CRM Services",
                    "provider": {
                        "@type": "Organization",
                        "name": "AIERP Partners"
                    },
                    "description": "Expert Odoo CRM implementation, customization, and integration services.",
                    "serviceType": "CRM Consulting"
                }}
            />
            <Header />

            {/* Hero Section */}
            <section className="relative pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 px-4 overflow-hidden bg-white">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-100/50 via-transparent to-transparent" />

                <div className="container mx-auto max-w-6xl relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500 shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Certified Odoo Partners
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-slate-900 tracking-tight mb-6 sm:mb-8 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                        Unleash Your Sales Potential with <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-purple-600">Odoo CRM</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 px-4 sm:px-0">
                        A customer-centric CRM that's fully integrated, customizable, and creates meaningful connections. We help you build a sales machine.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300 px-4 sm:px-0">
                        <Button size="lg" className="bg-brand-blue hover:bg-blue-700 text-white px-8 sm:px-10 h-14 sm:h-16 text-base sm:text-xl shadow-xl shadow-blue-200 rounded-full transition-all hover:scale-105 w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
                            Start Transformation
                            <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
                        </Button>
                        <Button size="lg" variant="outline" className="border-slate-200 text-slate-700 hover:bg-slate-50 px-8 sm:px-10 h-14 sm:h-16 text-base sm:text-xl rounded-full w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
                            Schedule Demo
                        </Button>
                    </div>
                </div>
            </section>

            {/* The Problem: Flip Cards */}
            <section className="py-12 sm:py-16 md:py-24 px-4 bg-slate-50">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">Why Odoo CRM?</h2>
                        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed">
                            Odoo breaks the mold of rigid, expensive CRMs. See how it transforms chaos into clarity.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        <FlipCard
                            frontContent={
                                <>
                                    <div className="h-16 w-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-6">
                                        <LayoutGrid className="h-8 w-8 text-brand-blue" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Fragmented Tools</h3>
                                    <p className="text-slate-500">Sales using one app, marketing another, invoicing a third.</p>
                                </>
                            }
                            backContent={
                                <div className="text-left w-full h-full flex flex-col justify-center">
                                    <h3 className="text-xl font-bold mb-4 text-white">Centralized Hub</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2 text-sm text-blue-50">
                                            <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
                                            <span>Unified Sales & Marketing funnel</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-sm text-blue-50">
                                            <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
                                            <span>One-click Invoice transformation</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-sm text-blue-50">
                                            <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
                                            <span>Cross-departmental visibility</span>
                                        </li>
                                    </ul>
                                </div>
                            }
                        />
                        <FlipCard
                            frontContent={
                                <>
                                    <div className="h-16 w-16 rounded-2xl bg-purple-50 flex items-center justify-center mb-6">
                                        <Users className="h-8 w-8 text-purple-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Cluttered Data</h3>
                                    <p className="text-slate-500">Duplicate contacts, lost history, and missed follow-ups.</p>
                                </>
                            }
                            backContent={
                                <div className="text-left w-full h-full flex flex-col justify-center">
                                    <h3 className="text-xl font-bold mb-4 text-white">Intelligence Layer</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2 text-sm text-blue-50">
                                            <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
                                            <span>Automated lead deduplication</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-sm text-blue-50">
                                            <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
                                            <span>Complete 360° interaction audit</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-sm text-blue-50">
                                            <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
                                            <span>Smart activity scheduling cues</span>
                                        </li>
                                    </ul>
                                </div>
                            }
                        />
                        <FlipCard
                            frontContent={
                                <>
                                    <div className="h-16 w-16 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6">
                                        <Settings className="h-8 w-8 text-indigo-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Rigid Workflows</h3>
                                    <p className="text-slate-500">Forced to adapt your process to the software's limitations.</p>
                                </>
                            }
                            backContent={
                                <div className="text-left w-full h-full flex flex-col justify-center">
                                    <h3 className="text-xl font-bold mb-4 text-white">Infinite Flexibility</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2 text-sm text-blue-50">
                                            <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
                                            <span>Custom Odoo Studio field logic</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-sm text-blue-50">
                                            <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
                                            <span>Modular pipeline architecture</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-sm text-blue-50">
                                            <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
                                            <span>Bespoke automation blueprints</span>
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
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">The Odoo Advantage</h2>
                        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4 sm:px-0">
                            Modern selling requires modern tools. Odoo delivers enterprise power with consumer-grade usability.
                        </p>
                    </div>

                    <Tabs defaultValue="features" className="w-full max-w-5xl mx-auto">
                        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8 sm:mb-12 h-auto p-2 bg-slate-100 rounded-2xl gap-2 sm:gap-0">
                            <TabsTrigger value="features" className="py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium data-[state=active]:bg-white data-[state=active]:text-brand-blue data-[state=active]:shadow-md transition-all">
                                Key Features
                            </TabsTrigger>
                            <TabsTrigger value="integration" className="py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium data-[state=active]:bg-white data-[state=active]:text-brand-blue data-[state=active]:shadow-md transition-all">
                                Integration
                            </TabsTrigger>
                            <TabsTrigger value="analytics" className="py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium data-[state=active]:bg-white data-[state=active]:text-brand-blue data-[state=active]:shadow-md transition-all">
                                Analytics
                            </TabsTrigger>
                            <TabsTrigger value="scalability" className="py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium data-[state=active]:bg-white data-[state=active]:text-brand-blue data-[state=active]:shadow-md transition-all">
                                Scalability
                            </TabsTrigger>
                            <TabsTrigger value="security" className="py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium data-[state=active]:bg-white data-[state=active]:text-brand-blue data-[state=active]:shadow-md transition-all">
                                Security
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="features" className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                                <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-500 cursor-default group bg-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-bl-full -mr-12 -mt-12 transition-all duration-500 group-hover:scale-150 group-hover:bg-brand-blue/5 -z-0" />
                                    <CardHeader className="relative z-10">
                                        <CardTitle className="flex items-center gap-4 text-2xl">
                                            <div className="p-3 rounded-xl bg-blue-50 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                                                <Zap className="h-6 w-6" />
                                            </div>
                                            Modern Interface
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="relative z-10">
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3 text-slate-600 text-base leading-snug">
                                                <CheckCircle className="w-5 h-5 text-brand-blue mt-1 shrink-0" />
                                                <span>Kanban-style pipeline visualization</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base leading-snug">
                                                <CheckCircle className="w-5 h-5 text-brand-blue mt-1 shrink-0" />
                                                <span>Drag-and-drop deal management</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base leading-snug">
                                                <CheckCircle className="w-5 h-5 text-brand-blue mt-1 shrink-0" />
                                                <span>Instant activity scheduling engine</span>
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>
                                <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-500 cursor-default group bg-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-purple-50/50 rounded-bl-full -mr-12 -mt-12 transition-all duration-500 group-hover:scale-150 group-hover:bg-purple-600/5 -z-0" />
                                    <CardHeader className="relative z-10">
                                        <CardTitle className="flex items-center gap-4 text-2xl">
                                            <div className="p-3 rounded-xl bg-purple-50 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                                                <MessageSquare className="h-6 w-6" />
                                            </div>
                                            Smart Automation
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="relative z-10">
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3 text-slate-600 text-base leading-snug">
                                                <CheckCircle className="w-5 h-5 text-purple-500 mt-1 shrink-0" />
                                                <span>Custom email follow-up templates</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base leading-snug">
                                                <CheckCircle className="w-5 h-5 text-purple-500 mt-1 shrink-0" />
                                                <span>Condition-based stage triggers</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base leading-snug">
                                                <CheckCircle className="w-5 h-5 text-purple-500 mt-1 shrink-0" />
                                                <span>Zero-leakage lead nurturing</span>
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        <TabsContent value="integration" className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                                <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-500 cursor-default group bg-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-green-50/50 rounded-bl-full -mr-12 -mt-12 transition-all duration-500 group-hover:scale-150 group-hover:bg-green-600/5 -z-0" />
                                    <CardHeader className="relative z-10">
                                        <CardTitle className="flex items-center gap-4 text-2xl">
                                            <div className="p-3 rounded-xl bg-green-50 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                                <Link2 className="h-6 w-6" />
                                            </div>
                                            Sales & Inventory
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="relative z-10">
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3 text-slate-600 text-base leading-snug">
                                                <CheckCircle className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                                                <span>Auto-triggered sales order creation</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base leading-snug">
                                                <CheckCircle className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                                                <span>Real-time inventory reservation logic</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base leading-snug">
                                                <CheckCircle className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                                                <span>Elimination of manual double entry</span>
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>
                                <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-500 cursor-default group bg-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50/50 rounded-bl-full -mr-12 -mt-12 transition-all duration-500 group-hover:scale-150 group-hover:bg-orange-600/5 -z-0" />
                                    <CardHeader className="relative z-10">
                                        <CardTitle className="flex items-center gap-4 text-2xl">
                                            <div className="p-3 rounded-xl bg-orange-50 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                                <Globe className="h-6 w-6" />
                                            </div>
                                            Website Sync
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="relative z-10">
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3 text-slate-600 text-base leading-snug">
                                                <CheckCircle className="w-5 h-5 text-orange-500 mt-1 shrink-0" />
                                                <span>Seamless website form lead capture</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base leading-snug">
                                                <CheckCircle className="w-5 h-5 text-orange-500 mt-1 shrink-0" />
                                                <span>E-commerce checkout data flow</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base leading-snug">
                                                <CheckCircle className="w-5 h-5 text-orange-500 mt-1 shrink-0" />
                                                <span>Direct CRM pipeline injection</span>
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        <TabsContent value="analytics" className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                                <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-500 cursor-default group bg-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-teal-50/50 rounded-bl-full -mr-12 -mt-12 transition-all duration-500 group-hover:scale-150 group-hover:bg-teal-600/5 -z-0" />
                                    <CardHeader className="relative z-10">
                                        <CardTitle className="flex items-center gap-4 text-2xl">
                                            <div className="p-3 rounded-xl bg-teal-50 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                                                <BarChart className="h-6 w-6" />
                                            </div>
                                            Visual Intelligence
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="relative z-10">
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3 text-slate-600 text-base leading-snug">
                                                <CheckCircle className="w-5 h-5 text-teal-500 mt-1 shrink-0" />
                                                <span>360-degree sales performance view</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base leading-snug">
                                                <CheckCircle className="w-5 h-5 text-teal-500 mt-1 shrink-0" />
                                                <span>Dynamic win/loss ratio analysis</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base leading-snug">
                                                <CheckCircle className="w-5 h-5 text-teal-500 mt-1 shrink-0" />
                                                <span>Bespoke clickable chart dashboards</span>
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>
                                <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-500 cursor-default group bg-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-red-50/50 rounded-bl-full -mr-12 -mt-12 transition-all duration-500 group-hover:scale-150 group-hover:bg-red-600/5 -z-0" />
                                    <CardHeader className="relative z-10">
                                        <CardTitle className="flex items-center gap-4 text-2xl">
                                            <div className="p-3 rounded-xl bg-red-50 group-hover:bg-red-500 group-hover:text-white transition-colors">
                                                <TrendingUp className="h-6 w-6" />
                                            </div>
                                            Forecast Engine
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="relative z-10">
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3 text-slate-600 text-base leading-snug">
                                                <CheckCircle className="w-5 h-5 text-red-500 mt-1 shrink-0" />
                                                <span>Predictive monthly revenue modeling</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base leading-snug">
                                                <CheckCircle className="w-5 h-5 text-red-500 mt-1 shrink-0" />
                                                <span>Historical pipeline status weighting</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base leading-snug">
                                                <CheckCircle className="w-5 h-5 text-red-500 mt-1 shrink-0" />
                                                <span>High-precision growth planning</span>
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        <TabsContent value="scalability" className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                                <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-500 cursor-default group bg-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50/50 rounded-bl-full -mr-12 -mt-12 transition-all duration-500 group-hover:scale-150 group-hover:bg-indigo-600/5 -z-0" />
                                    <CardHeader className="relative z-10">
                                        <CardTitle className="flex items-center gap-4 text-2xl">
                                            <div className="p-3 rounded-xl bg-indigo-50 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                                                <Users className="h-6 w-6" />
                                            </div>
                                            Multi-Entity Control
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="relative z-10">
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3 text-slate-600 text-base leading-snug">
                                                <CheckCircle className="w-5 h-5 text-indigo-500 mt-1 shrink-0" />
                                                <span>Unified multi-company environment</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base leading-snug">
                                                <CheckCircle className="w-5 h-5 text-indigo-500 mt-1 shrink-0" />
                                                <span>Granular cross-entity data sharing</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base leading-snug">
                                                <CheckCircle className="w-5 h-5 text-indigo-500 mt-1 shrink-0" />
                                                <span>Independent business unit silos</span>
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>
                                <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-500 cursor-default group bg-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-amber-50/50 rounded-bl-full -mr-12 -mt-12 transition-all duration-500 group-hover:scale-150 group-hover:bg-amber-600/5 -z-0" />
                                    <CardHeader className="relative z-10">
                                        <CardTitle className="flex items-center gap-4 text-2xl">
                                            <div className="p-3 rounded-xl bg-amber-50 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                                                <Globe className="h-6 w-6" />
                                            </div>
                                            Global Readiness
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="relative z-10">
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3 text-slate-600 text-base leading-snug">
                                                <CheckCircle className="w-5 h-5 text-amber-500 mt-1 shrink-0" />
                                                <span>Automated multi-currency conversion</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base leading-snug">
                                                <CheckCircle className="w-5 h-5 text-amber-500 mt-1 shrink-0" />
                                                <span>Daily spot-rate synchronization</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base leading-snug">
                                                <CheckCircle className="w-5 h-5 text-amber-500 mt-1 shrink-0" />
                                                <span>Localized tax & reporting compliance</span>
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        <TabsContent value="security" className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                                <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-500 cursor-default group bg-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50/50 rounded-bl-full -mr-12 -mt-12 transition-all duration-500 group-hover:scale-150 group-hover:bg-slate-700/5 -z-0" />
                                    <CardHeader className="relative z-10">
                                        <CardTitle className="flex items-center gap-4 text-2xl">
                                            <div className="p-3 rounded-xl bg-slate-50 group-hover:bg-slate-700 group-hover:text-white transition-colors">
                                                <ShieldCheck className="h-6 w-6" />
                                            </div>
                                            Data Fortification
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="relative z-10">
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3 text-slate-600 text-base leading-snug">
                                                <CheckCircle className="w-5 h-5 text-slate-600 mt-1 shrink-0" />
                                                <span>AES-256 state-of-the-art encryption</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base leading-snug">
                                                <CheckCircle className="w-5 h-5 text-slate-600 mt-1 shrink-0" />
                                                <span>Multi-factor biometric authentication</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base leading-snug">
                                                <CheckCircle className="w-5 h-5 text-slate-600 mt-1 shrink-0" />
                                                <span>Granular ACL access control layers</span>
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>
                                <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-500 cursor-default group bg-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-sky-50/50 rounded-bl-full -mr-12 -mt-12 transition-all duration-500 group-hover:scale-150 group-hover:bg-sky-600/5 -z-0" />
                                    <CardHeader className="relative z-10">
                                        <CardTitle className="flex items-center gap-4 text-2xl">
                                            <div className="p-3 rounded-xl bg-sky-50 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                                                <Cloud className="h-6 w-6" />
                                            </div>
                                            Continuity Guarantee
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="relative z-10">
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3 text-slate-600 text-base leading-snug">
                                                <CheckCircle className="w-5 h-5 text-sky-500 mt-1 shrink-0" />
                                                <span>Automated daily cold-storage backups</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base leading-snug">
                                                <CheckCircle className="w-5 h-5 text-sky-500 mt-1 shrink-0" />
                                                <span>Triple geo-replicated server clusters</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-slate-600 text-base leading-snug">
                                                <CheckCircle className="w-5 h-5 text-sky-500 mt-1 shrink-0" />
                                                <span>Zero-loss disaster recovery protocols</span>
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>



            {/* Integrated Ecosystem Section */}
            <section className="py-20 px-4 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Built to Scale With You</h2>
                        <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                            CRM is just the beginning. Odoo fits perfectly into a suite of business apps that share real-time data.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                        <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                                    <ShoppingBag className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="font-bold text-white mb-2">Sales</h3>
                                <p className="text-sm text-slate-400">Quotes to Invoices in one click.</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                                    <Factory className="w-6 h-6 text-green-400" />
                                </div>
                                <h3 className="font-bold text-white mb-2">Inventory</h3>
                                <p className="text-sm text-slate-400">Real-time stock checks from the CRM.</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mx-auto mb-4">
                                    <Cloud className="w-6 h-6 text-orange-400" />
                                </div>
                                <h3 className="font-bold text-white mb-2">Accounting</h3>
                                <p className="text-sm text-slate-400">Automated revenue recognition.</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                                    <Briefcase className="w-6 h-6 text-purple-400" />
                                </div>
                                <h3 className="font-bold text-white mb-2">Projects</h3>
                                <p className="text-sm text-slate-400">Turn sold deals into active projects.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Industry Solutions */}
            <section className="py-20 px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Tailored for Your Industry</h2>
                        <p className="text-lg text-slate-600">We've implemented Odoo CRM across diverse sectors.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Manufacturing</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-2 text-slate-600 text-sm">
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                                    Connect Sales to MRP
                                </li>
                                <li className="flex gap-2 text-slate-600 text-sm">
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                                    Accurate Lead Times
                                </li>
                                <li className="flex gap-2 text-slate-600 text-sm">
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                                    Distributor Portals
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Retail & E-commerce</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-2 text-slate-600 text-sm">
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                                    Omnichannel Customer View
                                </li>
                                <li className="flex gap-2 text-slate-600 text-sm">
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                                    Loyalty Points Integration
                                </li>
                                <li className="flex gap-2 text-slate-600 text-sm">
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                                    POS Integration
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Professional Services</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-2 text-slate-600 text-sm">
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                                    Timesheet & Billing
                                </li>
                                <li className="flex gap-2 text-slate-600 text-sm">
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                                    Subscription Management
                                </li>
                                <li className="flex gap-2 text-slate-600 text-sm">
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                                    Resource Planning
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Process */}
            <IntegrationRoadmap />

            {/* FAQ */}
            <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-slate-900">Odoo CRM FAQ</h2>
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        <AccordionItem value="item-1" className="border rounded-xl px-4 hover:bg-slate-50 transition-colors">
                            <AccordionTrigger className="text-xl font-medium text-slate-900">Is Odoo CRM easy to learn?</AccordionTrigger>
                            <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-4">
                                Absolutely. Odoo is designed with user experience in mind. Its intuitive, drag-and-drop interface makes onboarding your sales team quick and painless.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border rounded-xl px-4 hover:bg-slate-50 transition-colors">
                            <AccordionTrigger className="text-xl font-medium text-slate-900">Can I migrate data from my old CRM?</AccordionTrigger>
                            <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-4">
                                Yes. We specialize in seamless data migration. We'll move your contacts, companies, opportunities, and history from Salesforce, HubSpot, or spreadsheets to Odoo.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="border rounded-xl px-4 hover:bg-slate-50 transition-colors">
                            <AccordionTrigger className="text-xl font-medium text-slate-900">Is it mobile friendly?</AccordionTrigger>
                            <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-4">
                                Odoo has a powerful mobile app for iOS and Android, allowing your sales team to update leads, schedule calls, and close deals from anywhere.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-12 sm:py-16 md:py-24 px-4 bg-gradient-to-br from-brand-blue to-purple-700">
                <div className="container mx-auto max-w-4xl text-center text-white">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 tracking-tight px-4 sm:px-0">Stop Managing Software, Start Selling</h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
                        Join thousands of companies growing faster with Odoo CRM. Let us build your custom solution.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button size="lg" className="bg-white text-brand-blue hover:bg-blue-50 px-8 sm:px-12 h-16 sm:h-20 text-lg sm:text-xl md:text-2xl font-bold shadow-2xl rounded-full transition-transform hover:scale-105 w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
                            Get Free Consultation
                            <ArrowRight className="ml-3 h-6 w-6 sm:h-7 sm:w-7" />
                        </Button>
                    </div>
                    <p className="mt-8 text-blue-200 font-medium">⚡ Fast Implementation • ✓ Data Migration Included • ✓ Team Training</p>
                </div>
            </section>

            <WhatsAppButton />
            <Footer />
        </div>
    );
};

export default OdooCRM;
