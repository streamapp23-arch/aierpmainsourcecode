import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ROICalculator from "@/components/ROICalculator";
import WhatsAppButton from "@/components/WhatsAppButton";

const ROICalculatorPage = () => {
    return (
        <div className="min-h-screen bg-gradient-soft">
            <Header />

            <section className="pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-24 bg-gradient-to-b from-white to-slate-50">
                <div className="container mx-auto px-4">
                    <ROICalculator />
                </div>
            </section>

            <WhatsAppButton />
            <Footer />
        </div>
    );
};

export default ROICalculatorPage;
