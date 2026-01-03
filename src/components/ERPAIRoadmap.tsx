import React from 'react';
import { motion, Variants } from 'framer-motion';

const steps = [
    {
        id: "01",
        title: "Discovery",
        description: "We analyze your ERP data structure and identify high-value AI opportunities.",
        color: "from-violet-400 to-purple-300"
    },
    {
        id: "02",
        title: "Modeling",
        description: "Develop custom ML models trained on your historical enterprise data.",
        color: "from-purple-300 to-fuchsia-300"
    },
    {
        id: "03",
        title: "Integration",
        description: "Embed AI models directly into SAP/Oracle workflows for real-time inference.",
        color: "from-fuchsia-300 to-pink-300"
    },
    {
        id: "04",
        title: "Optimization",
        description: "Continuous learning loops ensure models improve accuracy over time.",
        color: "from-pink-300 to-rose-300"
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5
        }
    }
};

const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 12
        }
    }
};

const ERPAIRoadmap = () => {
    return (
        <section className="py-24 px-4 bg-slate-900 text-white overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400"
                    >
                        Implementation Journey
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-slate-400"
                    >
                        From static data to intelligent action in 4 steps.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Animated Connecting Line */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-800 -translate-y-1/2 hidden md:block rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-violet-500 via-fuchsia-400 to-rose-400"
                            initial={{ width: "0%" }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />
                    </div>

                    <motion.div
                        className="grid md:grid-cols-4 gap-8 relative z-10"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group relative"
                            >
                                <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 shadow-xl hover:shadow-2xl hover:bg-slate-750 transition-all text-center h-full flex flex-col items-center hover:-translate-y-2 duration-300">
                                    {/* Step Number Circle */}
                                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} text-slate-900 font-bold text-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                                        {step.id}
                                        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-30 animate-ping" />
                                    </div>

                                    <h3 className="font-bold text-xl mb-3 text-white group-hover:text-purple-300 transition-colors">{step.title}</h3>
                                    <p className="text-slate-400 leading-relaxed text-sm">{step.description}</p>

                                    {/* Bottom Glow */}
                                    <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl`} />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ERPAIRoadmap;
