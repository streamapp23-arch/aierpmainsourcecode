import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HealthcareRoadmap from "@/components/HealthcareRoadmap";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FlipCard } from "@/components/FlipCard";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
  TrendingUp,
  AlertTriangle,
  Award,
  HeartPulse,
  Stethoscope,
  Activity,
  FileText,
  Users,
  Lock,
  Database,
  Smartphone,
  Clock,
  DollarSign,
  ClipboardCheck,
  Pill,
  Microscope,
  BarChart,
  Laptop,
  AlertCircle,
  Hospital
} from "lucide-react";

const Healthcare = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-500/20">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 px-4 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/15 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-500/15 via-transparent to-transparent" />

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500 shadow-lg shadow-blue-900/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Connected Care Solutions
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6 sm:mb-8 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Better Data for<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">Better Outcomes</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 px-4 sm:px-0">
            Transform patient care with interoperable ERP, secure health data management, and AI-driven clinical insights. HIPAA-compliant and future-ready.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300 px-4 sm:px-0">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-8 sm:px-10 h-14 sm:h-16 text-base sm:text-xl shadow-xl shadow-blue-900/50 rounded-full transition-all hover:scale-105 w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
              Get Healthcare Consultation
              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
            <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-8 sm:px-10 h-14 sm:h-16 text-base sm:text-xl rounded-full w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
              View Compliance Certs
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm mt-6 sm:mt-8 text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span>FHIR Standards</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span>HITRUST Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section with Flip Cards - Enhanced Content */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-6">
              <AlertTriangle className="h-5 w-5" />
              <span className="font-semibold">THE HEALTHCARE CHALLENGE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">Healthcare IT Is In Critical Condition</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed">
              Fragmented systems compromise care quality and operational efficiency. Discover how connected healthcare technology transforms patient outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6">
                    <Database className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Data Silos</h3>
                  <ul className="text-slate-600 space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Patient data trapped in separate EHR, lab, and billing systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Incomplete patient histories lead to medical errors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Duplicate tests and procedures due to poor data sharing</span>
                    </li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <Hospital className="h-12 w-12 mb-6 text-white/90" />
                  <h3 className="text-2xl font-bold mb-4 text-white">Interoperability</h3>
                  <ul className="text-blue-100 space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Seamless data exchange using FHIR/HL7 standards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Unified patient record across all care settings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Real-time data sharing between providers</span>
                    </li>
                  </ul>
                </>
              }
            />
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-6">
                    <FileText className="h-8 w-8 text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Administrative Burden</h3>
                  <ul className="text-slate-600 space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Doctors spend 50%+ of time on EHR documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Complex billing and coding processes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>High physician burnout rates and staff turnover</span>
                    </li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <Zap className="h-12 w-12 mb-6 text-white/90" />
                  <h3 className="text-2xl font-bold mb-4 text-white">Automated Workflows</h3>
                  <ul className="text-blue-100 space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>AI-powered clinical documentation assistance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Automated billing and coding validation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>40% reduction in administrative overhead</span>
                    </li>
                  </ul>
                </>
              }
            />
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-purple-50 flex items-center justify-center mb-6">
                    <Lock className="h-8 w-8 text-purple-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Security Risks</h3>
                  <ul className="text-slate-600 space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Healthcare data breaches cost $10M+ per incident</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Ransomware attacks targeting hospitals increasing 45% annually</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Compliance violations leading to heavy fines</span>
                    </li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <Shield className="h-12 w-12 mb-6 text-white/90" />
                  <h3 className="text-2xl font-bold mb-4 text-white">Cyber Resilience</h3>
                  <ul className="text-blue-100 space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Zero-trust architecture and encryption</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Real-time threat detection and response</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>HIPAA/HITRUST compliance automation</span>
                    </li>
                  </ul>
                </>
              }
            />
            <FlipCard
              frontContent={
                <>
                  <div className="h-16 w-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                    <Users className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Fragmented Care</h3>
                  <ul className="text-slate-600 space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Poor coordination between specialists and primary care</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Medication errors due to incomplete information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Delayed diagnosis and treatment decisions</span>
                    </li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <HeartPulse className="h-12 w-12 mb-6 text-white/90" />
                  <h3 className="text-2xl font-bold mb-4 text-white">Care Coordination</h3>
                  <ul className="text-blue-100 space-y-3 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Unified platforms for multidisciplinary care teams</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Real-time patient progress tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span>Automated care pathway coordination</span>
                    </li>
                  </ul>
                </>
              }
            />
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 rounded-xl shadow-sm">
            <div className="flex items-center gap-4">
              <BarChart className="h-8 w-8 text-blue-600" />
              <p className="text-lg font-semibold text-slate-900">
                <span className="text-blue-600">Industry Stat:</span> Healthcare interoperability improvements can reduce costs by $30 billion annually while significantly improving patient safety, reducing medical errors by 30% and decreasing duplicate testing by 25%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Impact - Enhanced Content */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full mb-6">
              <TrendingUp className="h-5 w-5" />
              <span className="font-semibold">THE TRANSFORMATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">Digital Health Impact</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 px-4 sm:px-0 max-w-3xl mx-auto">
              Measurable improvements in patient outcomes and healthcare operations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
              <div className="h-2 w-full bg-gradient-to-r from-blue-400 to-blue-500" />
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Clock className="h-8 w-8 text-blue-500" />
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2">40%</div>
                <div className="text-slate-600 font-medium mb-3">Less Admin Time</div>
                <ul className="text-sm text-slate-500 text-left space-y-1.5 mt-4">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Reduced EHR documentation time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Automated appointment scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Streamlined billing processes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
              <div className="h-2 w-full bg-gradient-to-r from-blue-500 to-blue-600" />
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <HeartPulse className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2">25%</div>
                <div className="text-slate-600 font-medium mb-3">Better Outcomes</div>
                <ul className="text-sm text-slate-500 text-left space-y-1.5 mt-4">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Reduced readmission rates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Improved medication adherence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Enhanced chronic disease management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
              <div className="h-2 w-full bg-gradient-to-r from-blue-600 to-blue-700" />
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="h-8 w-8 text-blue-700" />
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2">100%</div>
                <div className="text-slate-600 font-medium mb-3">HIPAA Compliant</div>
                <ul className="text-sm text-slate-500 text-left space-y-1.5 mt-4">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>End-to-end data encryption</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Audit trail and access controls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Compliance automation and monitoring</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
              <div className="h-2 w-full bg-gradient-to-r from-blue-700 to-blue-800" />
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <DollarSign className="h-8 w-8 text-blue-800" />
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2">30%</div>
                <div className="text-slate-600 font-medium mb-3">Cost Reduction</div>
                <ul className="text-sm text-slate-500 text-left space-y-1.5 mt-4">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Reduced administrative overhead</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Decreased duplicate testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Optimized resource utilization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border border-blue-100 shadow-xl p-8 bg-gradient-to-br from-blue-50 to-white max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                <Award className="h-10 w-10 text-blue-700" />
              </div>
              <div className="flex-1">
                <p className="text-lg text-slate-700 mb-4 italic leading-relaxed">
                  "AIERP Partners helped us integrate our Epic EHR with our billing and telehealth systems. The reduction in manual data entry has saved our clinical staff over 15 hours per week, and our patient satisfaction scores have increased by 40%. Their HIPAA-compliant approach gave us complete confidence."
                </p>
                <div className="font-semibold text-slate-900">Dr. Emily Chen, MD</div>
                <div className="text-slate-600">Chief Medical Officer, Regional Health Network</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Healthcare Solutions - Enhanced Content */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-6">
              <Hospital className="h-5 w-5" />
              <span className="font-semibold">OUR SOLUTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">Healthcare Solutions</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 px-4 sm:px-0 max-w-3xl mx-auto">
              Comprehensive technologies for modern, connected healthcare delivery
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "EHR Integration",
                description: "Connect Epic, Cerner, or custom EHRs with other hospital systems for unified patient care.",
                icon: Database,
                points: [
                  "Real-time data exchange via FHIR/HL7",
                  "Unified patient record creation",
                  "Automated clinical workflows",
                  "Interoperability with labs and pharmacies"
                ],
                color: "from-blue-400 to-blue-500"
              },
              {
                title: "Telehealth Platforms",
                description: "Secure, high-quality video consultation platforms integrated with patient records.",
                icon: Smartphone,
                points: [
                  "HIPAA-compliant video consultations",
                  "Integrated appointment scheduling",
                  "Remote patient monitoring",
                  "E-prescription capabilities"
                ],
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Healthcare Analytics",
                description: "Population health management and clinical analytics for data-driven care decisions.",
                icon: Activity,
                points: [
                  "Population health dashboards",
                  "Predictive risk stratification",
                  "Clinical outcome analytics",
                  "Resource utilization optimization"
                ],
                color: "from-blue-600 to-blue-700"
              },
              {
                title: "Revenue Cycle Management",
                description: "AI-driven coding and billing automation to improve financial performance.",
                icon: FileText,
                points: [
                  "Automated claim processing",
                  "Denial prevention and management",
                  "Real-time eligibility verification",
                  "Patient payment automation"
                ],
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Patient Engagement",
                description: "Mobile apps and portals for comprehensive patient communication and management.",
                icon: Users,
                points: [
                  "Patient portal with health records",
                  "Appointment scheduling and reminders",
                  "Secure messaging with providers",
                  "Medication adherence tracking"
                ],
                color: "from-blue-600 to-blue-700"
              },
              {
                title: "Cybersecurity & Compliance",
                description: "Comprehensive security solutions designed specifically for healthcare organizations.",
                icon: Shield,
                points: [
                  "HIPAA/HITRUST compliance audits",
                  "Real-time threat detection",
                  "Data encryption at rest and in transit",
                  "Incident response planning"
                ],
                color: "from-blue-700 to-blue-800"
              }
            ].map((service, i) => (
              <Card key={i} className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group h-full">
                <div className={`h-2 w-full bg-gradient-to-r ${service.color}`} />
                <CardContent className="p-6 sm:p-8 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-blue-50 group-hover:scale-110 transition-transform flex-shrink-0">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex-1">{service.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6 flex-shrink-0">{service.description}</p>
                  <div className="flex-1">
                    <ul className="space-y-3">
                      {service.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700 text-sm sm:text-base">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Roadmap */}
      <HealthcareRoadmap />

      {/* Technologies - Enhanced Content */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-6">
              <Microscope className="h-5 w-5" />
              <span className="font-semibold">TECHNOLOGY STACK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0">Healthcare Technologies</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 px-4 sm:px-0 max-w-3xl mx-auto">
              Advanced technologies powering the future of connected, intelligent healthcare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {[
              { 
                metric: "FHIR/HL7 Standards", 
                label: "Interoperability Frameworks", 
                icon: Database,
                points: [
                  "Fast Healthcare Interoperability Resources (FHIR)",
                  "HL7 v2 and v3 messaging standards",
                  "API-first healthcare data exchange",
                  "Real-time clinical data sharing"
                ]
              },
              { 
                metric: "AI/NLP for Healthcare", 
                label: "Clinical Intelligence", 
                icon: Sparkles,
                points: [
                  "Natural Language Processing for clinical notes",
                  "AI-powered diagnosis assistance",
                  "Predictive analytics for patient risk",
                  "Automated medical coding"
                ]
              },
              { 
                metric: "IoT & Remote Monitoring", 
                label: "Connected Health Devices", 
                icon: Activity,
                points: [
                  "Wearable health device integration",
                  "Remote patient monitoring systems",
                  "Real-time vital signs tracking",
                  "Chronic condition management"
                ]
              }
            ].map((stat, i) => (
              <Card key={i} className="border-0 shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
                <div className={`h-2 w-full bg-gradient-to-r ${i === 0 ? 'from-blue-400 to-blue-500' : i === 1 ? 'from-blue-500 to-blue-600' : 'from-blue-600 to-blue-700'}`} />
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <stat.icon className="h-10 w-10 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-3">{stat.metric}</div>
                  <div className="text-lg text-slate-600 font-medium mb-6">{stat.label}</div>
                  <ul className="space-y-3 text-left">
                    {stat.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${i === 0 ? 'bg-blue-400' : i === 1 ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
                        <span className="text-slate-700 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border border-blue-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <ClipboardCheck className="h-12 w-12 text-blue-600" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Compliance-First Approach</h3>
                  <p className="text-slate-700">All our healthcare solutions are designed with compliance as a foundation, not an afterthought. We ensure HIPAA, HITECH, and HITRUST requirements are met from day one.</p>
                </div>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-500 text-white px-8 h-12 rounded-full transition-all hover:scale-105 whitespace-nowrap" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
                View Compliance Certs <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full mb-8 backdrop-blur-sm border border-white/20">
            <Sparkles className="w-6 h-6 text-blue-300" />
            <span className="text-blue-100 font-semibold text-lg">TRANSFORM PATIENT CARE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 tracking-tight px-4 sm:px-0">
            Ready to Digitize Your Healthcare?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Get a free technology assessment and discover how connected care solutions can improve patient outcomes, reduce costs, and enhance operational efficiency.
          </p>
          <div className="pt-4">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-10 sm:px-14 h-16 sm:h-20 text-xl sm:text-2xl md:text-3xl font-bold shadow-2xl rounded-full transition-transform hover:scale-105 w-full sm:w-auto min-h-[48px]" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>
              Get Free Assessment <ArrowRight className="ml-4 w-7 h-7" />
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-blue-200 font-medium">
            <div className="flex items-center justify-center gap-3">
              <Clock className="h-5 w-5" />
              <span>Assessment in 48 hours</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Shield className="h-5 w-5" />
              <span>HIPAA Compliant Solutions</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CheckCircle2 className="h-5 w-5" />
              <span>No obligation</span>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Healthcare;