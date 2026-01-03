import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const roles = [
  { id: "it", label: "IT / Infrastructure" },
  { id: "finance", label: "Finance / FP&A" },
  { id: "ops", label: "Operations / Supply Chain" },
  { id: "exec", label: "Executive / Strategy" },
];

const painPoints = [
  "Too many manual tasks",
  "Forecasts are unreliable",
  "Data is siloed across ERP systems",
  "Can't scale automation safely",
];

export default function ApplySection() {
  const [role, setRole] = useState<string | null>(null);
  const [selectedPain, setSelectedPain] = useState<string | null>(null);

  return (
    <section className="py-12 px-4 bg-section-light">
      <div className="container mx-auto max-w-6xl">
        {/* Opening summary */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">AI applications that make work measurably better</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-3">
            We build AI systems that integrate into your ERP and change daily operations — reducing
            manual work, improving forecasts, and automating decisions where it matters most.
          </p>
        </div>

        {/* Problem statement */}
        <div className="grid md:grid-cols-2 gap-6 items-start mb-8">
          <Card>
            <CardContent>
              <div className="text-sm text-brand-blue font-semibold">Problem</div>
              <h3 className="text-2xl font-bold mt-2">Fragmented processes lead to slow, error-prone operations</h3>
              <p className="text-muted-foreground mt-3">
                Many teams spend 20–40% of their time on manual reconciliation and repetitive tasks.
                When decisions are made without timely insights, the result is lost efficiency and delayed action.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Manual tasks increase cycle time and errors.</li>
                <li>• Forecasting without real-time data creates missed opportunities.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <div className="text-sm text-brand-blue font-semibold">Before → After</div>
              <div className="mt-3 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Before</h4>
                  <ul className="text-sm text-muted-foreground mt-2">
                    <li>• Hours spent reconciling data across systems</li>
                    <li>• Decisions based on stale reports</li>
                    <li>• Ad-hoc automation that breaks under load</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">After</h4>
                  <ul className="text-sm text-muted-foreground mt-2">
                    <li>• Automated workflows that free analysts for higher-value work</li>
                    <li>• Real-time signals feeding predictable models</li>
                    <li>• Reliable, monitored model deployments driving decisions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Feature overview */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-foreground mb-3">What we build — explained plainly</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <CardContent>
                <h4 className="font-semibold">Embedded Intelligence</h4>
                <p className="text-sm text-muted-foreground mt-2">Models and agents that sit inside your ERP and act on business events.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h4 className="font-semibold">Secure Data Pipelines</h4>
                <p className="text-sm text-muted-foreground mt-2">Reliable ingestion, transformation, and governance so insights are trustworthy.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h4 className="font-semibold">Operational Model Ops</h4>
                <p className="text-sm text-muted-foreground mt-2">Monitoring, rollback, and observability — so models keep working in production.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Interaction moment */}
        <div className="mb-8 bg-white p-6 rounded-lg">
          <div className="mb-4">
            <div className="text-sm text-brand-blue font-semibold">See how this fits you</div>
            <p className="text-sm text-muted-foreground mt-1">Choose your role and a primary pain point — we’ll surface the most relevant outcome.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 items-start">
            <div>
              <div className="flex gap-2 flex-wrap">
                {roles.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setRole(r.id)}
                    className={`px-3 py-2 rounded-md border ${role === r.id ? "bg-brand-blue text-white" : "bg-transparent text-foreground"}`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>

              <div className="mt-4">
                <div className="text-sm font-medium mb-2">Primary pain</div>
                <div className="flex gap-2 flex-wrap">
                  {painPoints.map((p) => (
                    <button
                      key={p}
                      onClick={() => setSelectedPain(p)}
                      className={`px-3 py-2 rounded-md border ${selectedPain === p ? "bg-rose-600 text-white" : "bg-transparent text-foreground"}`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="p-4 rounded-md border h-full">
                <div className="text-sm font-semibold">Your tailored outcome</div>
                <div className="mt-3 text-sm text-muted-foreground">
                  {!role && !selectedPain && <div>Select a role and a pain to see a short outcome.</div>}
                  {role && !selectedPain && <div>Good choice — now pick the pain you want to fix.</div>}
                  {!role && selectedPain && <div>Great — now select your role for a tailored outcome.</div>}
                  {role && selectedPain && (
                    <div>
                      <p className="font-medium">If you are <span className="capitalize">{roles.find(r => r.id === role)?.label}</span> dealing with “{selectedPain}”: </p>
                      <p className="mt-2 text-sm text-muted-foreground">We’ll automate the repetitive tasks that eat time, surface decisions earlier, and deliver reliable forecasts — so your team spends less time firefighting and more time on high-value work.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results + CTA */}
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-2xl font-bold">What to expect</h3>
            <p className="text-muted-foreground mt-3">Modest, credible results we consistently deliver when teams adopt our AI applications.</p>
            <ul className="mt-4 space-y-3">
              <li className="text-sm"><strong>30%</strong> reduction in manual reconciliation time (typical)</li>
              <li className="text-sm"><strong>20–30%</strong> improvement in forecast accuracy for prioritized processes</li>
              <li className="text-sm"><strong>3–6 months</strong> to a measurable pilot with clear KPIs</li>
            </ul>
            <div className="mt-6">
              <Button className="bg-brand-blue text-white px-6 py-3" onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}>Apply for a Pilot</Button>
            </div>
          </div>

          <div>
            <Card>
              <CardContent>
                <div className="text-sm text-brand-navy font-semibold">What you risk by waiting</div>
                <p className="mt-3 text-sm text-muted-foreground">Competitors who embed AI into operations will shorten their decision cycles and reduce costs. Waiting increases the chance your team will be reacting, not leading.</p>
                <div className="mt-4 text-sm">
                  <div className="mb-2">Small, practical next step:</div>
                  <ol className="list-decimal list-inside text-sm text-muted-foreground">
                    <li>Schedule a short discovery call (30 minutes)</li>
                    <li>We map one pilot use case with clear ROI</li>
                    <li>Agree on success metrics and start a rapid pilot</li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
