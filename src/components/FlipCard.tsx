import { cn } from "@/lib/utils";

interface FlipCardProps {
    frontContent: React.ReactNode;
    backContent: React.ReactNode;
    className?: string;
}

export const FlipCard = ({ frontContent, backContent, className }: FlipCardProps) => {
    return (
        <div className={cn("group h-80 w-full [perspective:1000px]", className)}>
            <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-white shadow-lg shadow-slate-200/50 border border-slate-100 p-8 flex flex-col items-center justify-center text-center [backface-visibility:hidden]">
                    {frontContent}
                </div>
                {/* Back */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br from-brand-blue to-purple-600 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] p-8 flex flex-col items-center justify-center text-center shadow-xl">
                    {backContent}
                </div>
            </div>
        </div>
    );
};
