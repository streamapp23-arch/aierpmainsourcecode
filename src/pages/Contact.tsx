import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, MessageCircle, Send, Loader2, Clock, Globe, Building2 } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/config/emailConfig';
import SEO from "@/components/SEO";
import { Captcha } from "@/components/Captcha";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    topic: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isVerified, setIsVerified] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isVerified) {
      setSubmitStatus({
        type: "error",
        message: "Please verify you are human.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_phone: formData.phone,
        topic: formData.topic,
        message: formData.message,
        to_email: EMAILJS_CONFIG.TO_EMAIL,
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (response.status === 200) {
        setSubmitStatus({
          type: "success",
          message: "Your message has been sent successfully! We'll get back to you soon.",
        });
        setFormData({ name: "", phone: "", topic: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later or contact us directly at techali786@gmail.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello! I'm interested in learning more about your AI ERP solutions."
    );
    window.open(`https://wa.me/17324703888?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact Us | Get in Touch"
        description="Contact AIERP Partners for AI-powered ERP solutions. Reach out to our expert team for consultations, demos, and support. Email: techali786@gmail.com"
        keywords="contact ERP consultants, AI ERP support, enterprise software consultation, ERP implementation contact"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 md:py-32 px-4 bg-gradient-to-br from-[hsl(220,70%,15%)] via-[hsl(220,70%,25%)] to-[hsl(220,70%,15%)] overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <div className="space-y-4 sm:space-y-6 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight px-4 sm:px-0">
              Let's Connect
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Have questions about our AI ERP solutions? We're here to help you transform your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-4 sm:px-0">
              Reach Out To Us
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground px-4 sm:px-0">
              Multiple ways to connect with our team
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Location Card */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-brand-blue/50 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue to-purple-600 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-foreground">Headquarters</h3>
                <div className="text-sm text-muted-foreground leading-relaxed">
                  <p>1221 Brickell Ave Brickell,</p>
                  <p>Suite 900, Miami, FL 33131</p>
                </div>
              </CardContent>
            </Card>

            {/* Email Card */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-brand-blue/50 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue to-cyan-600 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-foreground">Email Us</h3>
                <div className="text-sm text-muted-foreground space-y-2">
                  <a
                    href="mailto:support@aierp.com"
                    className="block hover:text-brand-blue transition-colors"
                  >
                    support@aierp.com
                  </a>
                  <a
                    href="mailto:info@aierp.com"
                    className="block hover:text-brand-blue transition-colors"
                  >
                    info@aierp.com
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-brand-blue/50 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue to-green-600 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-foreground">Call Us</h3>
                <div className="text-sm text-muted-foreground space-y-2">
                  <a
                    href="tel:7324703888"
                    className="block hover:text-brand-blue transition-colors"
                  >
                    732-470-3888
                  </a>
                  <a
                    href="tel:+9104443548111"
                    className="block hover:text-brand-blue transition-colors"
                  >
                    +91-044-43548111
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp Card */}
            <Card
              className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-green-500/50 hover:-translate-y-2 bg-white/80 backdrop-blur-sm cursor-pointer"
              onClick={handleWhatsAppClick}
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-foreground">WhatsApp</h3>
                <p className="text-sm text-muted-foreground">
                  Chat with us instantly
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Offices Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Our Global Offices
            </h2>
            <p className="text-lg text-muted-foreground">
              Visit us at our locations around the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Miami Location */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-brand-blue/50 bg-white/80 backdrop-blur-sm overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-600" />
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">US Headquarters</h3>
                    <p className="text-sm text-brand-blue font-medium">Miami, FL</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
                    <MapPin className="w-5 h-5 mt-1 text-brand-blue shrink-0" />
                    <p className="text-sm leading-relaxed">
                      1221 Brickell Ave Brickell,<br />Suite 900, Miami, FL 33131
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
                    <Phone className="w-5 h-5 text-brand-blue shrink-0" />
                    <a href="tel:7324703888" className="text-sm hover:underline">732-470-3888</a>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 mt-1 text-brand-blue shrink-0" />
                      <div className="text-sm space-y-2 w-full">
                        <div className="flex justify-between gap-4">
                          <span className="font-medium">Week Days:</span>
                          <span className="text-muted-foreground text-right">10:00 – 20:00 (EST & IST)</span>
                        </div>
                        <div className="flex justify-between gap-4">
                          <span className="font-medium">Saturday:</span>
                          <span className="text-muted-foreground text-right">10:00 – 14:00 (EST & IST)</span>
                        </div>
                        <div className="flex justify-between gap-4">
                          <span className="font-medium text-red-500">Sunday:</span>
                          <span className="text-red-500 text-right">CLOSED</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* New York Location */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-brand-blue/50 bg-white/80 backdrop-blur-sm overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-cyan-500 to-blue-600" />
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-600 group-hover:scale-110 transition-transform">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">New York Office</h3>
                    <p className="text-sm text-cyan-600 font-medium">New York, NY</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
                    <MapPin className="w-5 h-5 mt-1 text-cyan-600 shrink-0" />
                    <p className="text-sm leading-relaxed">
                      140 Broadway 46th Floor,<br />New York, NY 10005
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
                    <Phone className="w-5 h-5 text-cyan-600 shrink-0" />
                    <a href="tel:7324703888" className="text-sm hover:underline">732-470-3888</a>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 mt-1 text-cyan-600 shrink-0" />
                      <div className="text-sm space-y-2 w-full">
                        <div className="flex justify-between gap-4">
                          <span className="font-medium">Week Days:</span>
                          <span className="text-muted-foreground text-right">10:00 – 20:00 (EST & IST)</span>
                        </div>
                        <div className="flex justify-between gap-4">
                          <span className="font-medium">Saturday:</span>
                          <span className="text-muted-foreground text-right">10:00 – 14:00 (EST & IST)</span>
                        </div>
                        <div className="flex justify-between gap-4">
                          <span className="font-medium text-red-500">Sunday:</span>
                          <span className="text-red-500 text-right">CLOSED</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* India Location */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-brand-blue/50 bg-white/80 backdrop-blur-sm overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-orange-500 to-red-600" />
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Overseas Branch</h3>
                    <p className="text-sm text-orange-600 font-medium">Chennai, India</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
                    <MapPin className="w-5 h-5 mt-1 text-orange-600 shrink-0" />
                    <p className="text-sm leading-relaxed">
                      265, Olympia Platina, Guindy,<br />Chennai, Tamil Nadu 600032,<br />India
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
                    <Phone className="w-5 h-5 text-orange-600 shrink-0" />
                    <a href="tel:+9104443548111" className="text-sm hover:underline">+91-044-43548111</a>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 mt-1 text-orange-600 shrink-0" />
                      <div className="text-sm space-y-2 w-full">
                        <div className="flex justify-between gap-4">
                          <span className="font-medium">Week Days:</span>
                          <span className="text-muted-foreground text-right">10:00 – 20:00</span>
                        </div>
                        <div className="flex justify-between gap-4">
                          <span className="font-medium">Saturday:</span>
                          <span className="text-muted-foreground text-right">10:00 – 14:00</span>
                        </div>
                        <div className="flex justify-between gap-4">
                          <span className="font-medium text-red-500">Sunday:</span>
                          <span className="text-red-500 text-right">CLOSED</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Send Us a Message
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and we'll get back to you shortly
            </p>
          </div>

          <Card className="border-2 shadow-2xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-foreground">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-blue outline-none transition-all duration-300 bg-white hover:border-gray-300"
                      required
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-foreground">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-blue outline-none transition-all duration-300 bg-white hover:border-gray-300"
                      required
                    />
                  </div>
                </div>

                {/* Topic Selection */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-foreground">
                    What can we help you with? *
                  </label>
                  <select
                    name="topic"
                    value={formData.topic}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-blue outline-none transition-all duration-300 bg-white hover:border-gray-300"
                    required
                  >
                    <option value="">Choose a topic</option>
                    <option value="Product">Product Inquiry</option>
                    <option value="Services">Services</option>
                    <option value="Support">Technical Support</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-foreground">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-blue outline-none resize-none transition-all duration-300 bg-white hover:border-gray-300"
                    required
                  />
                </div>

                {/* Submit Status */}
                {submitStatus.type && (
                  <div
                    className={`p-4 rounded-xl ${submitStatus.type === "success"
                      ? "bg-green-50 text-green-800 border-2 border-green-200"
                      : "bg-red-50 text-red-800 border-2 border-red-200"
                      } animate-fade-in`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                {/* Captcha */}
                <div className="flex justify-center sm:justify-start">
                  <Captcha onVerify={setIsVerified} />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-brand-blue to-purple-600 text-white py-6 text-lg font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Send className="w-5 h-5" />
                      Submit Message
                    </span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 z-50 animate-bounce-slow group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white group-hover:rotate-12 transition-transform" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></span>
      </button>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-brand-navy via-brand-blue to-brand-navy">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Elevate Your Business with AI?
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            Schedule a demo or consultation with our team to explore how our AI ERP solutions can transform your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-white text-brand-blue px-8 py-6 text-lg font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              onClick={() => (window.location.href = "https://calendly.com/dearjafer/30min")}
            >
              Get Started Today
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white px-8 py-6 text-lg font-semibold rounded-xl hover:bg-white hover:text-brand-blue transition-all duration-300 hover:scale-105"
              onClick={() => (window.location.href = "https://calendly.com/dearjafer/30min")}
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Contact;
