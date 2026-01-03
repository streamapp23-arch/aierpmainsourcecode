import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Database, Settings, Workflow, Code, Briefcase, Zap, Users, Globe, Brain, Mail, Building2, ShoppingCart, Menu, X, LayoutGrid, Bot } from "lucide-react";
import { cn } from "@/lib/utils";
import NavLink from "./NavLink";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <NavLink href="/">
              <img
                src="/logo-optimized.webp"
                alt="AIERP Logo"
                className="h-8 sm:h-10 w-auto"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "/logo1.jpg";
                }}
              />
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/erp-ai" title="ERP AI" icon={Brain}>
                      Transform your ERP with intelligent automation
                    </ListItem>
                    <ListItem href="/oracle" title="Oracle" icon={Settings}>
                      Oracle ERP solutions and enhancements
                    </ListItem>
                    <ListItem href="/ai-integration-services" title="Integration with AI Services" icon={Workflow}>
                      Seamless AI service integration
                    </ListItem>
                    <ListItem href="/open-erp" title="Open ERP" icon={Code}>
                      Open-source ERP customization
                    </ListItem>
                    <ListItem href="/odoo-crm" title="Odoo CRM" icon={LayoutGrid}>
                      Integrated open-source CRM
                    </ListItem>
                    <ListItem href="/zoho-crm" title="Zoho CRM" icon={Bot}>
                      AI-powered sales automation
                    </ListItem>
                    <ListItem href="/custom-application-development" title="Custom Application Development" icon={Briefcase}>
                      Bespoke application solutions
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                    <ListItem href="/business-process-consulting" title="Business Process Consulting" icon={Users}>
                      At AIERP Partners, we believe consulting should do more than streamline workflows — it should help your business think smarter.
                    </ListItem>
                    <ListItem href="/implementation-upgrades" title="Implementation / Upgrades" icon={Zap}>
                      Expert implementation and system upgrades
                    </ListItem>
                    <ListItem href="/managed-services" title="Managed Services" icon={Settings}>
                      Comprehensive managed IT services
                    </ListItem>
                    <ListItem href="/integration-services" title="Integration Services" icon={Workflow}>
                      Enterprise integration solutions
                    </ListItem>
                    <ListItem href="/enterprise-mobility" title="Enterprise Mobility" icon={Globe}>
                      Mobile-first enterprise solutions
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-2 p-4 md:w-[360px]">
                    <ListItem href="/manufacturing" title="Manufacturing" icon={Building2}>
                      Smart manufacturing, predictive maintenance, and production optimization
                    </ListItem>
                    <ListItem href="/retail" title="Retail & E-commerce" icon={ShoppingCart}>
                      Omnichannel inventory, demand forecasting, and POS integration
                    </ListItem>
                    <ListItem href="/healthcare" title="Healthcare" icon={Mail}>
                      HIPAA-compliant patient data, RCM, and supply chain for health systems
                    </ListItem>
                    <ListItem href="/logistics" title="Logistics & Supply Chain" icon={Globe}>
                      Real-time tracking, route optimization and fleet management
                    </ListItem>
                    <ListItem href="/oil-gas" title="Oil & Gas" icon={Briefcase}>
                      Asset monitoring, safety-first operations, and regulatory compliance
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <NavLink
                    href="/about"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    About
                  </NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <NavLink
                    href="/blog"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    Blog
                  </NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <NavLink
                    href="/roi-calculator"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold transition-colors hover:bg-primary/90 focus:bg-primary/90 focus:outline-none shadow-sm"
                  >
                    ROI Calculator
                  </NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2 sm:gap-4">
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:inline-flex"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Us
            </Button>
            <Button
              size="sm"
              className="hidden sm:inline-flex"
              onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}
            >
              Get Started
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  {/* Solutions */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-sm text-muted-foreground">Solutions</h3>
                    <MobileNavLink href="/erp-ai" onClick={() => setIsOpen(false)}>ERP AI</MobileNavLink>
                    <MobileNavLink href="/oracle" onClick={() => setIsOpen(false)}>Oracle</MobileNavLink>
                    <MobileNavLink href="/ai-integration-services" onClick={() => setIsOpen(false)}>AI Integration Services</MobileNavLink>
                    <MobileNavLink href="/open-erp" onClick={() => setIsOpen(false)}>Open ERP</MobileNavLink>
                    <MobileNavLink href="/odoo-crm" onClick={() => setIsOpen(false)}>Odoo CRM</MobileNavLink>
                    <MobileNavLink href="/zoho-crm" onClick={() => setIsOpen(false)}>Zoho CRM</MobileNavLink>
                    <MobileNavLink href="/custom-application-development" onClick={() => setIsOpen(false)}>Custom Development</MobileNavLink>
                  </div>

                  {/* Services */}
                  <div className="space-y-3 pt-4 border-t">
                    <h3 className="font-semibold text-sm text-muted-foreground">Services</h3>
                    <MobileNavLink href="/business-process-consulting" onClick={() => setIsOpen(false)}>Business Consulting</MobileNavLink>
                    <MobileNavLink href="/implementation-upgrades" onClick={() => setIsOpen(false)}>Implementation</MobileNavLink>
                    <MobileNavLink href="/managed-services" onClick={() => setIsOpen(false)}>Managed Services</MobileNavLink>
                    <MobileNavLink href="/integration-services" onClick={() => setIsOpen(false)}>Integration</MobileNavLink>
                    <MobileNavLink href="/enterprise-mobility" onClick={() => setIsOpen(false)}>Enterprise Mobility</MobileNavLink>
                  </div>

                  {/* Industries */}
                  <div className="space-y-3 pt-4 border-t">
                    <h3 className="font-semibold text-sm text-muted-foreground">Industries</h3>
                    <MobileNavLink href="/manufacturing" onClick={() => setIsOpen(false)}>Manufacturing</MobileNavLink>
                    <MobileNavLink href="/retail" onClick={() => setIsOpen(false)}>Retail</MobileNavLink>
                    <MobileNavLink href="/healthcare" onClick={() => setIsOpen(false)}>Healthcare</MobileNavLink>
                    <MobileNavLink href="/logistics" onClick={() => setIsOpen(false)}>Logistics</MobileNavLink>
                    <MobileNavLink href="/oil-gas" onClick={() => setIsOpen(false)}>Oil & Gas</MobileNavLink>
                  </div>

                  {/* Company */}
                  <div className="space-y-3 pt-4 border-t">
                    <h3 className="font-semibold text-sm text-muted-foreground">Company</h3>
                    <MobileNavLink href="/about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
                    <MobileNavLink href="/blog" onClick={() => setIsOpen(false)}>Blog</MobileNavLink>
                    <MobileNavLink href="/roi-calculator" onClick={() => setIsOpen(false)}>ROI Calculator</MobileNavLink>
                    <MobileNavLink href="/contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3 pt-6 border-t">
                    <Button
                      className="w-full"
                      onClick={() => {
                        setIsOpen(false);
                        window.open('https://calendly.com/dearjafer/30min', '_blank');
                      }}
                    >
                      Get Started
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        setIsOpen(false);
                        window.location.href = '/contact';
                      }}
                    >
                      Contact Us
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

const ListItem = ({
  className,
  title,
  children,
  icon: Icon,
  href,
  ...props
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  icon: React.ElementType;
  href: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <NavLink
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2 mb-2">
            <Icon className="w-4 h-4 text-primary" />
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </NavLink>
      </NavigationMenuLink>
    </li>
  );
};

const MobileNavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <NavLink
      href={href}
      onClick={onClick}
      className="block py-2 text-base font-medium hover:text-primary transition-colors"
    >
      {children}
    </NavLink>
  );
};

export default Header;
