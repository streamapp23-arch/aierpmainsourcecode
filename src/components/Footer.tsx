import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/config/emailConfig';
import { Captcha } from "@/components/Captcha";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    if (!isVerified) {
      toast.error("Please verify you are human.");
      return;
    }

    setIsSubscribing(true);
    try {
      const templateParams = {
        from_name: "Newsletter Subscriber",
        from_email: email,
        topic: "Newsletter Subscription",
        message: `New newsletter subscription request from: ${email}`,
        to_email: EMAILJS_CONFIG.TO_EMAIL,
      };

      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (response.status === 200) {
        toast.success("Successfully subscribed to our newsletter!");
        setEmail("");
      } else {
        toast.error("Failed to subscribe. Please try again.");
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="bg-brand-navy text-white py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-xl mb-4">AIERP Partners</h3>
            <p className="text-white/70 leading-relaxed">
              Transforming enterprises with AI-powered ERP solutions for intelligent automation and data-driven decision making.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-bold text-lg mb-4">Solutions</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="/erp-ai" className="hover:text-white transition">ERP AI</a></li>
              <li><a href="/oracle" className="hover:text-white transition">Oracle</a></li>
              <li><a href="/ai-integration-services" className="hover:text-white transition">AI Integration Services</a></li>
              <li><a href="/open-erp" className="hover:text-white transition">Open ERP</a></li>
              <li><a href="/odoo-crm" className="hover:text-white transition">Odoo CRM</a></li>
              <li><a href="/zoho-crm" className="hover:text-white transition">Zoho CRM</a></li>
              <li><a href="/custom-application-development" className="hover:text-white transition">Custom Application Development</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="/business-process-consulting" className="hover:text-white transition">Business Process Consulting</a></li>
              <li><a href="/implementation-upgrades" className="hover:text-white transition">Implementation / Upgrades</a></li>
              <li><a href="/managed-services" className="hover:text-white transition">Managed Services</a></li>
              <li><a href="/integration-services" className="hover:text-white transition">Integration Services</a></li>
              <li><a href="/enterprise-mobility" className="hover:text-white transition">Enterprise Mobility</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-bold text-lg mb-4">Industries</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="/manufacturing" className="hover:text-white transition">Manufacturing</a></li>
              <li><a href="/retail" className="hover:text-white transition">Retail & E-commerce</a></li>
              <li><a href="/healthcare" className="hover:text-white transition">Healthcare</a></li>
              <li><a href="/logistics" className="hover:text-white transition">Logistics & Supply Chain</a></li>
              <li><a href="/oil-gas" className="hover:text-white transition">Oil & Gas</a></li>
            </ul>
          </div>

          {/* Company & Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-white/70 mb-6">
              <li><a href="/about" className="hover:text-white transition">About</a></li>
              <li><a href="/blog" className="hover:text-white transition">Blog</a></li>
              <li><a href="/roi-calculator" className="hover:text-white transition">ROI Calculator</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <p className="font-semibold">Newsletter</p>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded bg-white/10 text-white placeholder-white/50 border border-white/20 focus:border-white outline-none"
                required
              />
              <Captcha onVerify={setIsVerified} className="w-full bg-white/5 border-white/10 text-white" />
              <Button
                type="submit"
                className="w-full bg-white text-brand-navy hover:bg-white/90"
                size="default"
                disabled={isSubscribing}
              >
                {isSubscribing ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>&copy; 2024 AIERP Partners. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
