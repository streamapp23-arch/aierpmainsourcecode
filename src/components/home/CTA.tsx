import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
    return (
        <section className="py-32 bg-black text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 text-center relative z-10">
                <h2 className="text-5xl md:text-8xl font-bold tracking-tight mb-8">
                    Ready to evolve?
                </h2>
                <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-12">
                    Join the Fortune 500 companies transforming their operations with our intelligent ERP solutions.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        size="lg"
                        className="h-16 px-10 text-xl rounded-full bg-white text-black hover:bg-white/90 transition-all hover:scale-105"
                        onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}
                    >
                        Start Your Journey
                        <ArrowRight className="ml-2 w-6 h-6" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CTA;
