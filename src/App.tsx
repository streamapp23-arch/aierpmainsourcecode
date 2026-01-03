import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorBoundary from "./components/ErrorBoundary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { Suspense, lazy } from "react";

// Lazy load pages
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const BusinessProcessConsulting = lazy(() => import("./pages/BusinessProcessConsulting"));
const ImplementationUpgrades = lazy(() => import("./pages/ImplementationUpgrades"));
const ManagedServices = lazy(() => import("./pages/ManagedServices"));
const IntegrationServices = lazy(() => import("./pages/IntegrationServices"));
const EnterpriseMobility = lazy(() => import("./pages/EnterpriseMobility"));
const ERPAI = lazy(() => import("./pages/ERPAI"));
const Oracle = lazy(() => import("./pages/Oracle"));
const OpenERP = lazy(() => import("./pages/OpenERP"));
const CustomApplicationDevelopment = lazy(() => import("./pages/CustomApplicationDevelopment"));
const AIIntegrationServices = lazy(() => import("./pages/AIIntegrationServices"));
const AIApplications = lazy(() => import("./pages/AIApplications"));
const OdooCRM = lazy(() => import("./pages/OdooCRM"));
const ZohoCRM = lazy(() => import("./pages/ZohoCRM"));
const SalesforceCRM = lazy(() => import("./pages/SalesforceCRM"));
const Contact = lazy(() => import("./pages/Contact"));
const Industries = lazy(() => import("./pages/Industries"));
const Manufacturing = lazy(() => import("./pages/Manufacturing"));
const Retail = lazy(() => import("./pages/Retail"));
const Healthcare = lazy(() => import("./pages/Healthcare"));
const Logistics = lazy(() => import("./pages/Logistics"));
const OilGas = lazy(() => import("./pages/OilGas"));
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const ROICalculatorPage = lazy(() => import("./pages/ROICalculatorPage"));
const Login = lazy(() => import("./pages/admin/Login"));
const AdminLayout = lazy(() => import("./layouts/AdminLayout"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const PostsList = lazy(() => import("./pages/admin/PostsList"));
const PostEditor = lazy(() => import("./pages/admin/PostEditor"));
const PagesList = lazy(() => import("./pages/admin/PagesList"));
const PageEditor = lazy(() => import("./pages/admin/PageEditor"));
const MediaLibrary = lazy(() => import("./pages/admin/MediaLibrary"));
const DynamicPage = lazy(() => import("./pages/DynamicPage"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const ProtectedRoute = lazy(() => import("./components/ProtectedRoute"));

import { AuthProvider } from "@/context/AuthContext";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Suspense fallback={
                <div className="flex items-center justify-center min-h-screen bg-white">
                  <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-brand-blue"></div>
                </div>
              }>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/business-process-consulting" element={<BusinessProcessConsulting />} />
                  <Route path="/implementation-upgrades" element={<ImplementationUpgrades />} />
                  <Route path="/managed-services" element={<ManagedServices />} />
                  <Route path="/integration-services" element={<IntegrationServices />} />
                  <Route path="/enterprise-mobility" element={<EnterpriseMobility />} />
                  <Route path="/erp-ai" element={<ERPAI />} />
                  {/* SAP route removed per request */}
                  <Route path="/oracle" element={<Oracle />} />
                  <Route path="/open-erp" element={<OpenERP />} />
                  <Route path="/custom-application-development" element={<CustomApplicationDevelopment />} />
                  <Route path="/ai-integration-services" element={<AIIntegrationServices />} />
                  <Route path="/ai-applications" element={<AIApplications />} />
                  <Route path="/odoo-crm" element={<OdooCRM />} />
                  <Route path="/zoho-crm" element={<ZohoCRM />} />
                  <Route path="/salesforce-crm" element={<SalesforceCRM />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/industries" element={<Industries />} />
                  <Route path="/manufacturing" element={<Manufacturing />} />
                  <Route path="/retail" element={<Retail />} />
                  <Route path="/healthcare" element={<Healthcare />} />
                  <Route path="/logistics" element={<Logistics />} />
                  <Route path="/oil-gas" element={<OilGas />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/roi-calculator" element={<ROICalculatorPage />} />
                  <Route path="/admin/login" element={<Login />} />

                  {/* Protected Admin Routes */}
                  <Route path="/admin" element={<ProtectedRoute />}>
                    <Route element={<AdminLayout />}>
                      <Route path="dashboard" element={<Dashboard />} />
                      <Route path="posts" element={<PostsList />} />
                      <Route path="posts/new" element={<PostEditor />} />
                      <Route path="posts/:id" element={<PostEditor />} />
                      <Route path="pages" element={<PagesList />} />
                      <Route path="pages/new" element={<PageEditor />} />
                      <Route path="pages/:id" element={<PageEditor />} />
                      <Route path="media" element={<MediaLibrary />} />
                    </Route>
                  </Route>

                  <Route path="/p/:slug" element={<DynamicPage />} />
                  <Route path="/blogs/:slug" element={<BlogPost />} />
                  <Route path="/industry/:slug" element={<DynamicPage />} />
                  <Route path="/services/:slug" element={<DynamicPage />} />
                  <Route path="/solutions/:slug" element={<DynamicPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </TooltipProvider>
        </ErrorBoundary>
      </QueryClientProvider>
    </AuthProvider>
  </HelmetProvider>
);

export default App;
