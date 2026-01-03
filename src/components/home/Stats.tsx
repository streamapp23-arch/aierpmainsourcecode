import { motion } from "framer-motion";

const stats = [
    { value: "45%", label: "Efficiency Gain", sub: "McKinsey & Company" },
    { value: "30%", label: "Faster Decisions", sub: "Gartner Research" },
    { value: "2.5x", label: "ROI Average", sub: "Deloitte Insights" },
    { value: "99.9%", label: "Uptime SLA", sub: "Industry Standard" },
];

const Stats = () => {
    return (
        <section className="py-32 bg-black text-white border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="space-y-2"
                        >
                            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                                {stat.value}
                            </h3>
                            <p className="text-lg font-medium text-white/80">{stat.label}</p>
                            <p className="text-sm text-white/40">{stat.sub}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
