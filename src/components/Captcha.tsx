import { useState } from "react";
import { Check, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface CaptchaProps {
    onVerify: (isValid: boolean) => void;
    className?: string;
}

export function Captcha({ onVerify, className }: CaptchaProps) {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheck = () => {
        if (!isChecked) {
            setIsChecked(true);
            onVerify(true);
        }
    };

    return (
        <div className={cn("inline-flex items-center gap-3 p-4 bg-gray-50 border rounded-xl shadow-sm select-none w-fit", className)}>
            <div
                onClick={handleCheck}
                className={cn(
                    "w-6 h-6 border-2 rounded flex items-center justify-center cursor-pointer transition-colors duration-200",
                    isChecked ? "bg-green-500 border-green-500" : "bg-white border-gray-300 hover:border-gray-400"
                )}
            >
                {isChecked && <Check className="w-4 h-4 text-white" />}
            </div>
            <div className="flex flex-col">
                <span className="text-sm font-medium">I am human</span>
                <span className="text-[10px] opacity-70">Security check</span>
            </div>
            <ShieldCheck className="w-6 h-6 opacity-50 ml-2" />
        </div>
    );
}
