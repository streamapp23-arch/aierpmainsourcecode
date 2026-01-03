import { useState } from "react";
import { Card } from "@/components/ui/card";
import { X, Check, ArrowRight, ChevronDown, ChevronUp, Zap, Clock, TrendingUp, AlertTriangle, Search, ShieldCheck, BarChart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const BeforeAfterComparison = () => {
    const [showAll, setShowAll] = useState(false);

    const comparisons = [
        {
            category: "Decision Making",
            icon: Zap,
            before: "Wait days for reports, make decisions on outdated data",
            after: "Real-time insights, predictive analytics at your fingertips"
        },
        {
            category: "Manual Processes",
            icon: Clock,
            before: "20+ hours/week on data entry, reconciliation, reporting",
            after: "90% automated—focus on strategy, not spreadsheets"
        },
        {
            category: "Supply Chain",
            icon: TrendingUp,
            before: "React to stockouts and delays after they happen",
            after: "Predict issues weeks ahead, auto-optimize inventory"
        },
        {
            category: "Error Rates",
            icon: AlertTriangle,
            before: "5-15% human error causing costly rework and delays",
            after: "85% error reduction through AI validation"
        },
        {
            category: "Cost Visibility",
            icon: Search,
            before: "Discover cost overruns at month-end reviews",
            after: "Real-time cost tracking with AI-powered alerts"
        },
        {
            category: "Compliance",
            icon: ShieldCheck,
            before: "Manual audits, constant worry about missing requirements",
            after: "Automated compliance checks, audit-ready documentation"
        },
        {
            category: "Pricing Strategy",
            icon: BarChart,
            before: "Static pricing, missing revenue opportunities",
            after: "Dynamic AI pricing based on demand, competition, trends"
        },
        {
            category: "Team Productivity",
            icon: Users,
            before: "Bogged down by repetitive tasks and system limitations",
            after: "30% productivity boost, focus on high-value work"
        }
    ];

    const displayedComparisons = showAll ? comparisons : comparisons.slice(0, 4);

    return (
        <div className="space-y-12 py-12">
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {displayedComparisons.map((item, index) => (
                    <div key={item.category}>
                        <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-slate-200 bg-white shadow-sm group">
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-xl text-slate-900">{item.category}</h3>
                                </div>

                                <div className="flex flex-col md:grid md:grid-cols-[1fr,auto,1fr] gap-4 items-stretch">
                                    {/* Before Side */}
                                    <div className="bg-red-50 rounded-xl p-4 md:p-5 border border-red-200 flex flex-col shadow-sm">
                                        <div className="flex items-center gap-2 mb-3 text-red-700">
                                            <X className="w-5 h-5 stroke-[3]" />
                                            <span className="text-xs font-extrabold uppercase tracking-wider">Before</span>
                                        </div>
                                        <p className="text-sm md:text-base text-slate-800 font-medium leading-relaxed flex-1">
                                            {item.before}
                                        </p>
                                    </div>

                                    {/* Divider/Arrow */}
                                    <div className="flex md:flex-col items-center justify-center relative py-2 md:py-0">
                                        <div className="w-full md:w-0.5 h-0.5 md:h-full bg-slate-200 absolute" />
                                        <div className="z-10 bg-white rounded-full p-2 shadow-md border border-slate-200 text-slate-400 group-hover:text-blue-600 group-hover:border-blue-200 group-hover:scale-110 transition-all rotate-90 md:rotate-0">
                                            <ArrowRight className="w-5 h-5 stroke-[3]" />
                                        </div>
                                    </div>

                                    {/* After Side */}
                                    <div className="bg-green-50 rounded-xl p-4 md:p-5 border border-green-200 flex flex-col shadow-sm">
                                        <div className="flex items-center gap-2 mb-3 text-green-700">
                                            <Check className="w-5 h-5 stroke-[3]" />
                                            <span className="text-xs font-extrabold uppercase tracking-wider">After AI</span>
                                        </div>
                                        <p className="text-sm md:text-base text-slate-900 font-semibold leading-relaxed flex-1">
                                            {item.after}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-center gap-12">
                <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setShowAll(!showAll)}
                    className="group text-slate-700 border-2 border-slate-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 font-semibold transition-all"
                >
                    {showAll ? (
                        <>
                            Show Less <ChevronUp className="ml-2 w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                        </>
                    ) : (
                        <>
                            View All Comparisons <ChevronDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                        </>
                    )}
                </Button>

                <Card className="p-10 bg-gradient-to-r from-blue-600 to-indigo-700 text-white border-none shadow-2xl max-w-4xl w-full mx-auto transform hover:scale-[1.01] transition-transform duration-300 rounded-2xl text-center">
                    <h3 className="text-3xl font-bold mb-6 tracking-tight">
                        Ready to stop reacting and start predicting?
                    </h3>
                    <Button
                        size="lg"
                        variant="secondary"
                        className="text-lg px-10 py-7 shadow-xl hover:shadow-2xl transition-all font-bold text-blue-700 bg-white hover:bg-blue-50"
                        onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}
                    >
                        Get Your Free AI Assessment
                        <ArrowRight className="ml-2 w-6 h-6" />
                    </Button>
                </Card>
            </div>
        </div>
    );
};

export default BeforeAfterComparison;
