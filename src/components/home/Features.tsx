import { motion } from "framer-motion";
import { Brain, Zap, Shield, BarChart3, Workflow, Globe } from "lucide-react";

const features = [
    {
        title: "Predictive Intelligence",
        description: "Forecast trends with 99% accuracy using our proprietary AI models.",
        icon: Brain,
        colSpan: "col-span-1 md:col-span-2",
        bg: "bg-gradient-to-br from-purple-900/50 to-indigo-900/50"
    },
    {
        title: "Instant Automation",
        description: "Reduce manual tasks by 80% instantly.",
        icon: Zap,
        colSpan: "col-span-1",
        bg: "bg-white/5"
    },
    {
        title: "Enterprise Security",
        description: "Bank-grade encryption for all your data flows.",
        icon: Shield,
        colSpan: "col-span-1",
        bg: "bg-white/5"
    },
    {
        title: "Real-time Analytics",
        description: "Live dashboards that keep you ahead of the curve.",
        icon: BarChart3,
        colSpan: "col-span-1 md:col-span-2",
        bg: "bg-gradient-to-br from-blue-900/50 to-cyan-900/50"
    },
    {
        title: "Seamless Integration",
        description: "Works with SAP, Oracle, and Microsoft Dynamics.",
        icon: Workflow,
        colSpan: "col-span-1 md:col-span-3",
        bg: "bg-white/5"
    }
];

const Features = () => {
    return (
        <section className="py-32 bg-black text-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        Everything you need. <br />
                        <span className="text-white/50">Nothing you don't.</span>
                    </h2>
                    <p className="text-xl text-white/60">
                        A complete suite of intelligent tools designed to modernize your enterprise resource planning.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`${feature.colSpan} relative group overflow-hidden rounded-3xl border border-white/10 p-8 backdrop-blur-sm hover:border-white/20 transition-colors ${feature.bg}`}
                        >
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div className="mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <feature.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-white/60 leading-relaxed">{feature.description}</p>
                                </div>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
