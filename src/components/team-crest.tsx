import { Shield } from "lucide-react";
import { Fla10Logo } from "./fla10-logo";
import { cn } from "@/lib/utils";

export function TeamCrest({ teamName, size = 'md' }: { teamName: string, size?: 'sm' | 'md' | 'lg' }) {
    const sizeClasses = {
        sm: 'h-6 w-6',
        md: 'h-8 w-8',
        lg: 'h-10 w-10'
    }

    if (teamName === 'Flamengo') {
        return (
            <div className={cn(sizeClasses[size])}>
                <Fla10Logo />
            </div>
        )
    }
    
    return <Shield className={cn(sizeClasses[size], "text-muted-foreground")} />
}
