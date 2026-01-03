import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { AlertCircle, TrendingUp, DollarSign, Clock, AlertTriangle, Calculator, ChevronRight, RefreshCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ROICalculator = () => {
    const [employees, setEmployees] = useState(500);
    const [manualHours, setManualHours] = useState(20);
    const [avgSalary, setAvgSalary] = useState(75000);
    const [errorRate, setErrorRate] = useState(5);
    const [timeWasted, setTimeWasted] = useState(0);

    // Calculations
    const hourlyWage = avgSalary / 2080; // Annual hours
    const annualWastedHours = employees * manualHours * 52;
    const annualLaborCost = annualWastedHours * hourlyWage;
    const errorCost = annualLaborCost * (errorRate / 100);
    const totalAnnualLoss = annualLaborCost + errorCost;

    // AI Savings (conservative estimates)
    const automationSavings = totalAnnualLoss * 0.70; // 70% automation
    const errorReduction = errorCost * 0.85; // 85% error reduction
    const speedGains = annualLaborCost * 0.30; // 30% faster decisions
    const totalAnnualSavings = automationSavings + errorReduction + speedGains;

    // 3-year projection
    const threeYearLoss = totalAnnualLoss * 3;
    const threeYearSavings = totalAnnualSavings * 3;

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeWasted((prev) => prev + (totalAnnualLoss / 31536000)); // Per second
        }, 1000);
        return () => clearInterval(interval);
    }, [totalAnnualLoss]);

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
        }).format(value);
    };

    return (
        <div className="py-12">
            <div className="text-center space-y-4 mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-bold mb-2 border border-blue-100">
                    <Calculator className="w-4 h-4" />
                    ROI Calculator
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 px-4">
                    Calculate Your Potential Savings
                </h2>
                <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto px-4">
                    See exactly how much manual processes are costing your business and what you could save with AI.
                </p>
            </div>

            {/* Main Calculator Container - Split Layout */}
            <div className="max-w-7xl mx-auto bg-white rounded-[2rem] shadow-xl overflow-hidden border border-slate-200 flex flex-col lg:flex-row">

                {/* Left Panel: Inputs */}
                <div className="lg:w-5/12 p-6 sm:p-8 md:p-12 bg-white space-y-8 sm:space-y-10 border-r border-slate-100">
                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Configure Scenario</h3>
                        <p className="text-slate-500">Adjust the sliders to match your current operations.</p>
                    </div>

                    <div className="space-y-8">
                        {/* Input Group 1 */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <Label htmlFor="employees" className="text-slate-700 font-semibold">Total Employees</Label>
                                <div className="bg-blue-50 text-blue-700 font-bold px-3 py-1 rounded-lg text-sm border border-blue-100">
                                    {employees} users
                                </div>
                            </div>
                            <div className="relative">
                                <Input
                                    id="employees"
                                    type="number"
                                    value={employees}
                                    onChange={(e) => setEmployees(Number(e.target.value))}
                                    className="pl-4 h-12 text-lg border-slate-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                                />
                            </div>
                        </div>

                        {/* Input Group 2 */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <Label className="text-slate-700 font-semibold">Manual Hours / Week</Label>
                                <div className="bg-blue-50 text-blue-700 font-bold px-3 py-1 rounded-lg text-sm border border-blue-100">
                                    {manualHours} hrs
                                </div>
                            </div>
                            <Slider
                                value={[manualHours]}
                                onValueChange={(value) => setManualHours(value[0])}
                                min={1}
                                max={40}
                                step={1}
                                className="py-2"
                            />
                            <p className="text-xs text-slate-400">Time spent on data entry & reporting per employee</p>
                        </div>

                        {/* Input Group 3 */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <Label htmlFor="salary" className="text-slate-700 font-semibold">Avg. Annual Salary</Label>
                                <div className="bg-blue-50 text-blue-700 font-bold px-3 py-1 rounded-lg text-sm border border-blue-100">
                                    {formatCurrency(avgSalary)}
                                </div>
                            </div>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">$</span>
                                <Input
                                    id="salary"
                                    type="number"
                                    value={avgSalary}
                                    onChange={(e) => setAvgSalary(Number(e.target.value))}
                                    className="pl-8 h-12 text-lg border-slate-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                                />
                            </div>
                        </div>

                        {/* Input Group 4 */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <Label className="text-slate-700 font-semibold">Error Rate</Label>
                                <div className="bg-blue-50 text-blue-700 font-bold px-3 py-1 rounded-lg text-sm border border-blue-100">
                                    {errorRate}%
                                </div>
                            </div>
                            <Slider
                                value={[errorRate]}
                                onValueChange={(value) => setErrorRate(value[0])}
                                min={1}
                                max={20}
                                step={1}
                                className="py-2"
                            />
                            <p className="text-xs text-slate-400">Percentage of tasks requiring rework</p>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-slate-100">
                        <Button
                            variant="ghost"
                            className="text-slate-400 hover:text-slate-600 w-full"
                            onClick={() => {
                                setEmployees(500);
                                setManualHours(20);
                                setAvgSalary(75000);
                                setErrorRate(5);
                            }}
                        >
                            <RefreshCcw className="w-4 h-4 mr-2" /> Reset to Defaults
                        </Button>
                    </div>
                </div>

                {/* Right Panel: Results (Light Theme) */}
                <div className="lg:w-7/12 bg-slate-50/50 p-6 sm:p-8 md:p-12 relative overflow-hidden flex flex-col justify-between">
                    {/* Background Effects */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-100/40 rounded-full blur-[80px] -ml-20 -mb-20 pointer-events-none" />

                    {/* Live Counter */}
                    <div className="relative z-10 mb-10">
                        <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 flex items-center gap-6">
                            <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center animate-pulse flex-shrink-0 border border-red-100">
                                <AlertTriangle className="w-7 h-7 text-red-600" />
                            </div>
                            <div>
                                <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-1">Real-time Cost of Inaction</p>
                                <p className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-slate-900 tabular-nums">
                                    ${timeWasted.toFixed(2)}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="relative z-10 grid sm:grid-cols-2 gap-6 mb-10">
                        {/* Current Loss Card */}
                        <div className="bg-white border border-red-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-2 mb-3 text-red-600">
                                <AlertCircle className="w-5 h-5" />
                                <span className="font-semibold">Annual Loss</span>
                            </div>
                            <p className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">{formatCurrency(totalAnnualLoss)}</p>
                            <p className="text-sm text-slate-500">Wasted labor & errors</p>
                        </div>

                        {/* AI Savings Card */}
                        <div className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-2 mb-3 text-blue-600">
                                <TrendingUp className="w-5 h-5" />
                                <span className="font-semibold">Potential Savings</span>
                            </div>
                            <p className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">{formatCurrency(totalAnnualSavings)}</p>
                            <p className="text-sm text-slate-500">Automation & efficiency</p>
                        </div>
                    </div>

                    {/* 3-Year Projection */}
                    <div className="relative z-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 sm:p-8 mb-8 text-white shadow-lg">
                        <div className="flex items-center gap-3 mb-4">
                            <Clock className="w-5 h-5 text-blue-200" />
                            <h4 className="font-semibold text-blue-100">3-Year Strategic Impact</h4>
                        </div>
                        <div className="flex justify-between items-end">
                            <div>
                                <p className="text-sm text-blue-100/80 mb-1">Net Savings Opportunity</p>
                                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                                    {formatCurrency(threeYearSavings)}
                                </p>
                            </div>
                            <div className="hidden sm:block text-right">
                                <p className="text-sm text-blue-100/80 mb-1">ROI</p>
                                <p className="text-2xl font-bold text-green-300">300%+</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="relative z-10">
                        <Button
                            size="lg"
                            className="w-full h-14 sm:h-16 text-base sm:text-lg font-bold bg-slate-900 text-white hover:bg-slate-800 hover:scale-[1.01] transition-all shadow-xl rounded-xl"
                            onClick={() => window.open('https://calendly.com/dearjafer/30min', '_blank')}
                        >
                            <DollarSign className="mr-2 w-5 h-5 text-blue-400" />
                            Get Your Full ROI Report
                            <ChevronRight className="ml-auto w-5 h-5 opacity-50" />
                        </Button>
                        <p className="text-center text-slate-500 text-sm mt-4">
                            Based on industry averages. Get a custom assessment for precise figures.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ROICalculator;
